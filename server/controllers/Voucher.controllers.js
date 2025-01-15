const Newsletter = require('../models/newsLetter.model');
const Voucher = require('../models/Voucher.model');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const fs = require('fs');
const mongoose = require('mongoose');
const path = require('path');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// Helper function to load and process the email template
const loadTemplate = (filePath, placeholders) => {
    let content = fs.readFileSync(filePath, 'utf-8');
    Object.keys(placeholders).forEach(key => {
        content = content.replace(`{{${key}}}`, placeholders[key]);
    });
    return content;
};

const generateVoucher = async (req, res) => {
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        const { email, topic, birthdayDay, birthdayMonth } = req.body;

        const existingUser = await Newsletter.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already subscribed!' });
        }

        const voucherCode = crypto.randomBytes(8).toString('hex').toUpperCase();
        const expiryDate = new Date();
        expiryDate.setDate(expiryDate.getDate() + 7);

        const templatePath = path.join(__dirname, '../templates/voucherMail.html');

        const emailBody = loadTemplate(templatePath, {
            VOUCHER_CODE: voucherCode,
            EXPIRY_DATE: expiryDate.toDateString(),
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Welcome to our Newsletter!',
            html: emailBody,
        };

        await transporter.sendMail(mailOptions);

        const newSubscriber = new Newsletter({ email, topic, birthdayDay, birthdayMonth });
        await newSubscriber.save({ session });

        const newVoucher = new Voucher({
            userId: newSubscriber._id,
            voucherCode,
            expiryDate,
        });
        await newVoucher.save({ session });

        await session.commitTransaction();
        session.endSession();

        return res.status(200).json({
            message: 'Successfully subscribed and voucher generated! A welcome email has been sent.',
            voucherCode,
        });
    } catch (err) {
        await session.abortTransaction();
        session.endSession();
        console.error('Error:', err);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

const verifyVoucher = async (req, res) => {

    try {
        const { voucher } = req.body;
        const existingVoucher = await Voucher.findOne({ voucherCode: voucher });
        if (!existingVoucher) {
            return res.status(404).send({ message: "Invalid voucher" });
        }
        const currentDate = new Date();
        if (existingVoucher.expiryDate < currentDate) {
            if (!existingVoucher.expired) {
                existingVoucher.expired = true;
                await existingVoucher.save();
            }
            return res.status(404).send({ message: "Voucher has expired" });
        }
        if (existingVoucher.expired) {
            return res.status(404).send({ message: "Voucher is already used" });
        }
        return res.status(200).send({ message: "Voucher is valid" });
    } catch (error) {
        return res.status(500).send({ message: "Server error" });
    }
};

module.exports = { generateVoucher, verifyVoucher };