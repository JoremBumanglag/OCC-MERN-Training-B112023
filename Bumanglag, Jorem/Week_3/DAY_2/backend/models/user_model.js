const mongoose = require("mongoose");

const user_Schema = new mongoose.Schema({
    email:{type:String, required:true,unique:true},
    password:{type:String, required:true}
},{timestamps:true});

module.exports = mongoose.model("User",user_Schema);