const orderItemModel = require("../models/orderItem.model");
const ordersModel = require("../models/orders.model");

const addToOrder = async (req, res) => {
    try {
        const { values, cart } = req.body
        const newOrderItem = new orderItemModel({
            items: Object.keys(cart).map(product => {
                return {
                    itemId: product,
                    size: cart[product],
                    deliveryInfo: values
                }
            })
        })
        await newOrderItem.save()
        const existingOrder = await ordersModel.findOne({ userId: req.user.id })
        if (existingOrder) {
            existingOrder.items.push(newOrderItem._id)
            await existingOrder.save()
            return res.status(200).send({ message: 'Items added to cart successfully' })
        }
        const newOrder = new ordersModel({
            userId: req.user.id,
            items: [newOrderItem._id]
        })
        await newOrder.save()
        return res.status(200).send({ message: 'Items added to cart successfully' })


    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Failed to add to cart', error: error.message });
    }
};

const getUserOrder = async (req, res) => {
    try {
        const userOrders = await ordersModel.findOne({ userId: req.user.id }).populate('items')
        if (!userOrders) {
            return res.status(400).json({ message: 'Order not found' })
        }
        return res.status(200).json(userOrders)

    } catch (error) {
        return res.status(400).json({ message: error })

    }
}

const getOrders = async (req, res) => {
    try {
        const userOrders = await ordersModel.find().populate('items')
        if (!userOrders) {
            return res.status(400).json({ message: 'Order not found' })
        }
        console.log(userOrders)
        return res.status(200).json(userOrders)


    } catch (error) {
        return res.status(400).json({ message: error })

    }
}

const updateUserOrder = async (req, res) => {
    const { orderId } = req.params;
    const { status, itemId } = req.body;

    try {
        const existingOrder = await ordersModel.findById(orderId).populate("items");
        console.log(existingOrder);
        if (!existingOrder) {
            return res.status(404).send("Order not found");
        }
        console.log(itemId);
        const item = existingOrder.items.find(el => el._id.toString() === itemId);
        if (!item) {
            return res.status(404).send("Item not found in this order");
        }

        item.status = status;

        await existingOrder.save();

        res.status(200).json(existingOrder);
    } catch (error) {
        console.error("Error updating order status:", error);
        res.status(500).send("Internal Server Error");
    }
};





module.exports = { addToOrder, getUserOrder, getOrders, updateUserOrder }