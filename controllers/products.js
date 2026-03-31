const Product = require('../models/product');

exports.getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('index', {
      prods: products
    });
  });
};

exports.getAddProduct = (req, res, next) => {
  res.render('add-product');
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const price = req.body.price;

  const product = new Product(title, price);
  product.save();

  res.redirect('/');
};
exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;

  Product.findById(prodId, (product) => {
    if (!product) {
      return res.redirect('/');
    }

    res.render('product-detail', {
      product: product
    });
  });
}