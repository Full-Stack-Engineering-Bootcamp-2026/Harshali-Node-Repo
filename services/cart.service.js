const cartRepo = require('../repositories/cart.repo');

exports.getCart = (user) => {
  return cartRepo.getCart(user)
    .then(cart => cartRepo.getProducts(cart));
};

exports.addToCart = (user, prodId) => {
  let fetchedCart;
  let newQuantity = 1;

  return cartRepo.getCart(user)
    .then(cart => {
      fetchedCart = cart;
      return cartRepo.getProducts(cart, prodId);
    })
    .then(products => {
      let product = products[0];

      if (product) {
        newQuantity = product.cartItem.quantity + 1;
        return product;
      }

      return cartRepo.findProduct(prodId);
    })
    .then(product => {
      return cartRepo.addProduct(fetchedCart, product, newQuantity);
    });
};

exports.deleteFromCart = (user, prodId) => {
  return cartRepo.getCart(user)
    .then(cart => cartRepo.getProducts(cart, prodId))
    .then(products => {
      const product = products[0];
      if (product) return cartRepo.deleteItem(product);
    });
};