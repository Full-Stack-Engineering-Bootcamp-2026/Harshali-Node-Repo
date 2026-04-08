const cartRepo = require('../repositories/cart.repo');
const orderRepo = require('../repositories/order.repo');

exports.createOrder = (user) => {
  let fetchedCart;

  return cartRepo.getCart(user)
    .then(cart => {
      fetchedCart = cart;
      return cart.getProducts();
    })
    .then(products => {
      return orderRepo.createOrder(user)
        .then(order => {
          return orderRepo.addProducts(order, products.map(product => {
            product.orderItem = {
              quantity: product.cartItem.quantity
            };
            return product;
          }));
        });
    })
    .then(() => cartRepo.clearCart(fetchedCart));
};

exports.getOrders = (user) => {
  return orderRepo.getOrders(user);
};