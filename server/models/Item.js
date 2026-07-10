const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
{
    name: {
        type: String,
        required: true
    },

    quantity: {
        type: Number,
        required: true
    },

    threshold: {
        type: Number,
        default: 5
    },

    category: {
        type: String,
        default: "General"
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
},
{
    timestamps: true
});

module.exports = mongoose.model("Item", itemSchema);