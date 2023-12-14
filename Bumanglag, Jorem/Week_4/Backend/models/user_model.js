//import mongoose
const mongoose = require("mongoose");

//define a schema for the user
const user_Schema = new mongoose.Schema({
    username:{type: String, required: true, unique: true},
    password: {type: String, required: true}
},{timestamps: true});

//export user schema
module.exports = mongoose.model("User",user_Schema);