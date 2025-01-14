const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose')

const connectDB = require('./config/db')
var app = express();
const cors = require('cors');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

const voucherRouter = require('./routes/Voucher.router');

app.use('/voucher', voucherRouter);














app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});


connectDB();



module.exports = app;
