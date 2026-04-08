const productRepo = require('../repositories/product.repo');

exports.createProduct = (user, data) => {
  return productRepo.create(user, data);
};

exports.getEditProduct = (user, id) => {
  return productRepo.findByUser(user, id);
};

exports.updateProduct = (id, data) => {
  return productRepo.findById(id)
    .then(product => {
      product.title = data.title;
      product.price = data.price;
      product.description = data.description;
      product.imageUrl = data.imageUrl;
      return product.save();
    });
};

exports.getProducts = (user) => {
  return productRepo.findAllByUser(user);
};

exports.deleteProduct = (id) => {
  return productRepo.deleteById(id);
};

exports.getAllProducts = () => {
  return productRepo.findAll();
};

exports.getProductById = (id) => {
  return productRepo.findById(id);
};