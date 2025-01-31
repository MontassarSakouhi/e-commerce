const usersModel = require("../models/users.model");

const addToCart = async (req, res) => {
    try {
        const { values, cart } = req.body
        console.log(values, cart)
        const User = await usersModel.findOne({ _id: req.user.id })
        User.cartData = [
            ...User.cartData, {
                info: values,
                items: cart,
                Status:true
            }
        ]



        const updatedUser = await User.save()
        console.log(updatedUser)

    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Failed to add to cart', error: error.message });
    }
};

module.exports = { addToCart }