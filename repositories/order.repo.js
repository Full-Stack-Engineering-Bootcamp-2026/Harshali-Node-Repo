exports.createOrder = (user) => user.createOrder();

exports.addProducts = (order, products) => {
  return order.addProducts(products);
};

exports.getOrders = (user) => {
  return user.getOrders({ include: ['products'] });
};