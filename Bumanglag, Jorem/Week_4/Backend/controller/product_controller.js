//import mongoose
const mongoose = require("mongoose");

//import data model for products
const product = require("../models/product_model");

//function to generate item code
const generateItemCode = (productName, brand, time, date) => {
    const shortProductName = productName.slice(0, 3).toUpperCase();
    const shortBrand = brand.slice(0, 3).toUpperCase();

    const formatDate = date
        .split("/")
        .map((part) => part.padStart(2, "0"))
        .reverse()
        .join("");

    const formatTime = time.replace(":", "");

    const itemCode = `${shortProductName}${shortBrand}${formatTime}${formatDate}`;

    return itemCode;
};


//function to add a product
const addProduct = async (req, res) => {
    const new_product = new product(req.body);
    const {brand} = req.body;
    const dateTime =  new Date(new_product.createdAt);

    const year = dateTime.getFullYear();
    const month = dateTime.getMonth() + 1; // Months are zero-based, so add 1
    const day = dateTime.getDate();

    const hours = dateTime.getUTCHours();
    const minutes = dateTime.getUTCMinutes();

    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    const formattedDate = `${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}/${year}`;

    try{
        const existing_brand = await product.findOne({brand: brand});

        if(existing_brand){
            return res.status(400).json({message: "Brand already exist"});
        }

        new_product.itemCode = generateItemCode(new_product.productName, new_product.brand, formattedTime, formattedDate)
        const product_to_db = await new_product.save();
        res.status(200).json({message: "Product has been successfuly added"}); 
    }
    catch(error){
        res.status(400).json({error: error.message});
    }
}

//function to get all products
const getAllProducts = async (req, res) => {
    try {
        const allProducts = await product.find();
        res.status(200).json(allProducts);
    }
    catch(error){
        res.status(500).json({error: error.message});
    }
}

//function to find specific prouducts
const getProductById = async (req, res) => {
    const {id} = req.params;

    try{
        const foundProduct = await product.findById(id);

        if(!foundProduct){
            return res.status(400).json({message: "Product not found"});
        }

        res.status(200).json(foundProduct);
    }
    catch(error){
        res.status(400).json({error: error.message});
    }
}

//function to update a product
const updateProduct = async (req, res) => {
    try{
        const updateProduct = await product.findByIdAndUpdate({_id: req.params.id},{...req.body});
        res.status(200).json({message: "Product has been succesfully updated"});
    }
    catch(error){
        res.status(400).json({error: error.message});
    }
}

//function to delete a product
const deleteProduct = async (req, res) => {
    try{
        const deleteProduct = await product.findByIdAndDelete({_id: req.params.id});
        res.status(200).json({message: "Product has been removed"});
    }
    catch(error){
        res.status(500).json({error: error.message});
    }
}

module.exports = {addProduct, getAllProducts, getProductById, updateProduct, deleteProduct};