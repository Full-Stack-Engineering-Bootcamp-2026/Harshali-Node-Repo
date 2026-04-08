const Product = require('../models/product');

exports.getCart = (user) => user.getCart();

exports.getProducts = (cart, id) => {
  return id ? cart.getProducts({ where: { id } }) : cart.getProducts();
};

exports.findProduct = (id) => Product.findByPk(id);

exports.addProduct = (cart, product, quantity) => {
  return cart.addProduct(product, {
    through: { quantity }
  });
};

exports.deleteItem = (product) => {
  return product.cartItem.destroy();
};

exports.clearCart = (cart) => {
  return cart.setProducts(null);
};