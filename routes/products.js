const express = require('express');
const router = express.Router();

const productsController = require('../controllers/products.controller');

router.get('/', productsController.getIndex);
router.get('/add-product', productsController.getAddProduct);
router.post('/add-product', productsController.postAddProduct);
router.get('/products/:productId', productsController.getProduct);

module.exports = router;