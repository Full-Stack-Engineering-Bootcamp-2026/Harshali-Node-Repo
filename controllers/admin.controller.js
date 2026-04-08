const productService = require('../services/product.service');

exports.getAddProduct = (req, res) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
  });
};

exports.postAddProduct = (req, res) => {
  productService.createProduct(req.user, req.body)
    .then(() => {
      console.log('created product');
      res.redirect('/admin/products');
    })
    .catch(err => console.log(err));
};

exports.getEditProduct = (req, res) => {
  const editMode = req.query.edit;
  if (!editMode) return res.redirect('/');

  productService.getEditProduct(req.user, req.params.productId)
    .then(products => {
      const product = products[0];
      if (!product) return res.redirect('/');

      res.render('admin/edit-product', {
        pageTitle: 'Edit Product',
        path: '/admin/edit-product',
        editing: editMode,
        product
      });
    })
    .catch(err => console.log(err));
};

exports.postEditProduct = (req, res) => {
  productService.updateProduct(req.body.productId, req.body)
    .then(() => {
      console.log('updated product');
      res.redirect('/admin/products');
    })
    .catch(err => console.log(err));
};

exports.getProducts = (req, res) => {
  productService.getProducts(req.user)
    .then(products => {
      res.render('admin/products', {
        prods: products,
        pageTitle: 'Admin Products',
        path: '/admin/products'
      });
    })
    .catch(err => console.log(err));
};

exports.postDeleteProduct = (req, res) => {
  productService.deleteProduct(req.body.productId)
    .then(() => res.redirect('/admin/products'))
    .catch(err => console.log(err));
};