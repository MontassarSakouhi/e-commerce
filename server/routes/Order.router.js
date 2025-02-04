const express = require('express');
const isUser = require('../middlewares/isUser');
const { addToOrder, getUserOrder,getOrders, updateUserOrder } = require('../controllers/order.controllers');
const isAdmin = require('../middlewares/isAdmin');
const router = express.Router();

router.post('/add', isUser, addToOrder);
router.get('/getOne', isUser, getUserOrder)
router.get('/getOrders', isAdmin, getOrders)
router.put('/updateStatus/:orderId', isAdmin, updateUserOrder)


module.exports = router;
