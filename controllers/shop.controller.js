const productService = require('../services/product.service');
const cartService = require('../services/cart.service');
const orderService = require('../services/order.service');

exports.getProducts = (req, res) => {
  productService.getAllProducts()
    .then(products => {
      res.render('shop/index', {
        prods: products,
        pageTitle: 'Shop',
        path: '/'
      });
    })
    .catch(err => console.log(err));
};

exports.getProduct = (req, res) => {
  productService.getProductById(req.params.productId)
    .then(product => {
      res.render('shop/product-detail', {
        product,
        pageTitle: product.title,
        path: '/products'
      });
    })
    .catch(err => console.log(err));
};

exports.getIndex = (req, res) => {
  productService.getAllProducts()
    .then(products => {
      res.render('shop/index', {
        prods: products,
        pageTitle: 'Shop',
        path: '/'
      });
    })
    .catch(err => console.log(err));
};

exports.getCart = (req, res) => {
  cartService.getCart(req.user)
    .then(products => {
      res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart',
        products
      });
    })
    .catch(err => console.log(err));
};

exports.postCart = (req, res) => {
  cartService.addToCart(req.user, req.body.productId)
    .then(() => res.redirect('/cart'))
    .catch(err => console.log(err));
};

exports.postCartDeleteProduct = (req, res) => {
  cartService.deleteFromCart(req.user, req.body.productId)
    .then(() => res.redirect('/cart'))
    .catch(err => console.log(err));
};

exports.postOrder = (req, res) => {
  orderService.createOrder(req.user)
    .then(() => res.redirect('/orders'))
    .catch(err => console.log(err));
};

exports.getOrders = (req, res) => {
  orderService.getOrders(req.user)
    .then(orders => {
      res.render('shop/orders', {
        path: '/orders',
        pageTitle: 'Orders',
        orders
      });
    })
    .catch(err => console.log(err));
};