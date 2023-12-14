//import mongoose
const mongoose = require("mongoose");

const product_Schema = new mongoose.Schema({
    productName: {type: String, required: true},
    brand: {type: String, required: true, unique: true},
    price: {type: Number, required: true},
    quantity: {type: Number, required: true},
    createdAt: {type: Date, default: Date.now, required: true},
    itemCode: {type: String}
});

module.exports = mongoose.model("Product", product_Schema);