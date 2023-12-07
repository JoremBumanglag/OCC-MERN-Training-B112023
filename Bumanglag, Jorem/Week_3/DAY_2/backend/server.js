//import express
const express = require("express");
const app = express();

const mongoose = require("mongoose");

//import the routes
const book_router = require("./routes/book_route");
const user_router = require("./routes/user_route");

//start server
app.listen(3000,() => console.log("Ready to listen in PORT 3000"));

//connect to mongodb
mongoose.connect("mongodb+srv://bumanglagjorem:74de7ThhwUUmV5Tg@cluster0.vlprtpj.mongodb.net/bookstore?retryWrites=true&w=majority")
.then(() => console.log("Database Connection Succesful"))
.catch((error) => console.log(error));

//converts JSON to JS object
app.use(express.json());

//middleware: define root path
app.use('/api/books',book_router);

//middleware: define root path 
app.use('/api/users',user_router);