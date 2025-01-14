// routes/voucher.js
const express = require('express');
const router = express.Router();
const { 
    generateVoucher,
    verifyVoucher
 } = require('../controllers/Voucher.controllers');

router.post('/add', generateVoucher);
router.post('/verify', verifyVoucher);


module.exports = router;
