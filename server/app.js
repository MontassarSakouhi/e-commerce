const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose')

const connectDB = require('./config/db')
var app = express();
const cors = require('cors');


app.use(logger('dev'));
app.use(express.json({ limit: '10mb' })); // Adjust the limit as needed
app.use(express.urlencoded({ extended: false, limit: '10mb' }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

const voucherRouter = require('./routes/Voucher.router');
const userRouter = require('./routes/User.Router');
const productRouter = require('./routes/Product.router');

app.use('/voucher', voucherRouter);
app.use('/user', userRouter);
app.use('/product', productRouter);














app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});


connectDB();



module.exports = app;
