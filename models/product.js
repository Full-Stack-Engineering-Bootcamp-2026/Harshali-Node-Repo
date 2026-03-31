const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
);

module.exports = class Product {
  constructor(title, price) {
     this.id = Math.random().toString();
    this.title = title;
    this.price = price;
  }

  save() {
    fs.readFile(p, (err, fileContent) => {
      let products = [];

      if (!err && fileContent.length > 0) {
        products = JSON.parse(fileContent);
      }

      products.push(this);

      fs.writeFile(p, JSON.stringify(products), (err) => {
        if (err) console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        return cb([]);
      }
      cb(JSON.parse(fileContent));
    });
  }

  static findById(id, cb) {
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        return cb(undefined);
      }

      const products = JSON.parse(fileContent);
      const product = products.find(p => p.id === id);

      cb(product);
    });
  }
};