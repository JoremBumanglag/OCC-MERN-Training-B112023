//import mongoose
const mongoose = require("mongoose");

//import user data model
const user = require("../models/user_model");

//import bcrypt
const bcrypt = require("bcrypt");

//import jsonwebtoken
const jwt = require("jsonwebtoken");

//create a function for adding user
const addUser = async (req,res) => {

    //grab the username and password value from the user input
    const {username, password} = req.body;

    try{
        const existing_user = await user.findOne({username: username});

        if(existing_user){
            return res.status(400).json({error: "Username already taken", username: existing_user});
        }
        
        //add user with provided username and password
        const hashed_password = await bcrypt.hash(password, 10);
        await user.create({username, password: hashed_password});
        res.status(200).json({message: "Account succesfully added"});
    }
    catch(error){
        res.status(400).json({error: error});
    }
}

const userLogin = async (req,res) => {
    const {username, password} = req.body;

    try{
        const existing_user = await user.findOne({username: username});

        if(!existing_user){
            return res.status(400).json({error: "User does not exist"})
        }

        //password validation
        const does_password_match = await bcrypt.compare(password, existing_user.password);

        if(!does_password_match){
            return res.status(400).json({error: "Incorrect password"});
        }

        //generating json web token
        const token = jwt.sign({userId: existing_user._id}, "SECRET", {expiresIn: "5h"});
        res.status(200).json({message: "Login Successfully", token});
    }
    catch(error){
        res.status(400).json({error: error.message});
    }
}

module.exports = {addUser, userLogin};