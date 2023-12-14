//import mongoose
const mongoose = require('mongoose');
const location = require('../models/location_model');

const addLocation = async (req,res) => {
const new_location = new location(req.body);

    try{
        const existing_location = await location.findOne({location_name: location_name});

        if(existing_location){
            return res.status(400).json({error: "Location name already exist"});
        }
        const location_to_db = await new_location.save();
        res.status(200).json({message: "Location added succesfully"});
    }
    catch(error){
        res.status(400).json({error: error.message});
    }
}

module.exports = {addLocation};