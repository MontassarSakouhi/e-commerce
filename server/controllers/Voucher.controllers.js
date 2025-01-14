const Newsletter = require('../models/newsLetter.model');
const Voucher = require('../models/Voucher.model');
const crypto = require('crypto');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

const generateVoucher = async (req, res) => {
    try {
        const { email, topic, birthdayDay, birthdayMonth } = req.body;

        const existingUser = await Newsletter.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already subscribed!' });
        }

        const newSubscriber = new Newsletter({
            email,
            topic,
            birthdayDay,
            birthdayMonth,
        });

        await newSubscriber.save();

        const voucherCode = crypto.randomBytes(8).toString('hex').toUpperCase();
        const expiryDate = new Date();
        expiryDate.setDate(expiryDate.getDate() + 7);

        const newVoucher = new Voucher({
            userId: newSubscriber._id,
            voucherCode,
            expiryDate,
        });
        await newVoucher.save();

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Welcome to our Newsletter!',
            text: `Hello! Thanks for subscribing to our newsletter. Here is your voucher code: ${voucherCode}. It will expire in 7 days. Enjoy your shopping!`,
        };

        await transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                console.error('Error sending email:', err);
                return res.status(500).json({ message: 'Failed to send email' });
            }
            console.log('Email sent:', info.response);
        });

        return res.status(200).json({
            message: 'Successfully subscribed and voucher generated! A welcome email has been sent.',
            voucherCode,
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

const verifyVoucher = async (req, res) => {

    try {

        const { voucher } = req.body
        const existingVoucher = await Voucher.findOne({ voucherCode: voucher })
        if (!existingVoucher) {
            return res.status(404).send({ message: "Invalid voucher" })
        }
        const currentDate = new Date()
        if (existingVoucher.expiryDate < currentDate) {
            if (!existingVoucher.expired) {
                existingVoucher.expired = true;
                await existingVoucher.save();
            }
            return res.status(404).send({ message: "Voucher has expired" })
        }
        if (existingVoucher.expired) {
            return res.status(404).send({ message: "Voucher is already used" })
        }
        return res.status(200).send({ message: "Voucher is valid" });
    } catch (error) {
        return res.status(500).send({ message: "Server error" })
    }
}

module.exports = { generateVoucher, verifyVoucher };
