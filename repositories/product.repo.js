const Product = require('../models/product');

exports.create = (user, data) => {
  return user.createProduct(data);
};

exports.findByUser = (user, id) => {
  return user.getProducts({ where: { id } });
};

exports.findById = (id) => {
  return Product.findByPk(id);
};

exports.findAllByUser = (user) => {
  return user.getProducts();
};

exports.deleteById = (id) => {
  return Product.destroy({ where: { id } });
};

exports.findAll = () => {
  return Product.findAll();
};