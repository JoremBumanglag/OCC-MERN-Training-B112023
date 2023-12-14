//import express
const express = require("express");
const app = express();

//import mongoose
const mongoose = require("mongoose");

//import the routes
const user_router = require("./routes/user_route");
const product_router = require("./routes/product_route");
const location_router = require("./routes/location_route");

//start server
app.listen(3000,() => console.log("Ready to listen in PORT 3000"));

//converts json to js object
app.use(express.json());

//connect to mongodb
mongoose.connect("mongodb+srv://bumanglagjorem:74de7ThhwUUmV5Tg@cluster0.vlprtpj.mongodb.net/inventory_system?retryWrites=true&w=majority").then(() => console.log("Database Connection Successful")).catch((error) => console.log(error));

//middleware: define root path
app.use('/api/locations',location_router);
app.use('/api/users',user_router);
app.use('/api/products',product_router);
