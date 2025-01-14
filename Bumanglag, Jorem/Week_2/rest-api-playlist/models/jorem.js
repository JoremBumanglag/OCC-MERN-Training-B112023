const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create geolcation Schema
const GeoSchema = new Schema({
    type:{
        type:String,
        default:"Point"
    },
    coordinates: {
        type:[Number],
        index:"2dsphere"
    }
});

//create ninja Schema & model
const JoremSchema = new Schema({
    name: {
        type: String,
        required: [true,"Name field is required"]
    },
    rank: {
        type: String
    },
    available: {
        type: Boolean,
        default: false
    },
    geometry: GeoSchema

    //add in geo location

});

const Jorem = mongoose.model('jorem',JoremSchema);

module.exports = Jorem;