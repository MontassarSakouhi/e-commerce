const express = require('express');
const router = express.Router();
const { addProduct, listProducts, removeProduct, singleProduct, updateProduct } = require('../controllers/product.controllers');
const isAdmin = require('../middlewares/isAdmin');

router.post('/add', isAdmin, addProduct);

router.get('/list', listProducts);

router.post('/remove', isAdmin, removeProduct);

router.post('/single',isAdmin, singleProduct);

router.put('/update',isAdmin, updateProduct);

module.exports = router;
