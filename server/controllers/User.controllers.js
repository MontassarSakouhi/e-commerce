
const User = require('../models/users.model')
const bcrypt = require("bcrypt");
var jwt = require('jsonwebtoken');


const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email: email });
        if (!existingUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        const isAuthed = await bcrypt.compare(password, existingUser.password);
        if (!isAuthed) {
            return res.status(401).json({ message: 'Incorrect password' });
        }

        const token = jwt.sign({ id: existingUser._id, isAdmin: existingUser.isAdmin }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({
            message: 'Authenticated successfully',
            token,
            user: { id: existingUser._id, isAdmin: existingUser.isAdmin }
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};




const register = async (req, res) => {
    const { firstName, lastName, email, password } = req.body

    try {
        const existingEmail = await User.findOne({ email: email })
        if (existingEmail) {
            return res.status(400).json({ message: 'Mail already exists' })
        }
        const hashedPassword = await bcrypt.hash(password, Number(process.env.SALT_ROUNDS));
        const user = new User({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: hashedPassword,
        })
        await user.save()
        res.status(201).json({ message: 'User registered successfully' });

    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error: error.message });

    }


}

module.exports = {
    login,
    register

}