const mongoose = require("mongoose");

const book_schema = new mongoose.Schema({
    title: {type:String, required:true, unique:true},
    author: {type:String, required:true},
    published_date: {type:Date},
    pages: {type:Number},
    genres: {type:Array},
    price: {type:Number, required:true}
}, {timestamps: true});

module.exports = mongoose.model("Book",book_schema);