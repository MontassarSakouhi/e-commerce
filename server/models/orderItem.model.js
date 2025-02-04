
const mongoose = require("mongoose");


const OrderItemSchema = new mongoose.Schema({
      items: [
        {
            itemId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
            size: { type: Object, required: true},
            deliveryInfo: { type: Object, required: true },
            status: { type: String, enum: ["pending", "shipped", "delivered"], default: "pending" }

        }
    ]
});



module.exports = mongoose.model("orderItem", OrderItemSchema);

