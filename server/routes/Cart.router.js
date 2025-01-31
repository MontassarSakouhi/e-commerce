const express = require('express');
const isUser = require('../middlewares/isUser');
const { addToCart } = require('../controllers/cart.controllers');
const router = express.Router();

router.post('/add', isUser , addToCart);



module.exports = router;
