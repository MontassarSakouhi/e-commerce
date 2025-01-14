const mongoose = require('mongoose');

const newsletterSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    topic: { type: String, required: true },
    birthdayDay: { type: String, required: true },
    birthdayMonth: { type: String, required: true },
}, { timestamps: true });

const Newsletter = mongoose.model('Newsletter', newsletterSchema);

module.exports = Newsletter;
