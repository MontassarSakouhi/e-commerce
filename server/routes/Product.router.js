const express = require('express');
const router = express.Router();
const { addProduct, listProducts, removeProduct, singleProduct } = require('../controllers/product.controllers');
const isAdmin = require('../middlewares/isAdmin');

router.post('/add', isAdmin, addProduct);

router.post('/list', listProducts);

router.post('/remove', isAdmin, removeProduct);

router.get('/single', singleProduct);

module.exports = router;
