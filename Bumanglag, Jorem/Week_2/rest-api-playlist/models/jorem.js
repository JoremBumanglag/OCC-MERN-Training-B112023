const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
    }

    //add in geo location
});

const Jorem = mongoose.model('jorem',JoremSchema);

module.exports = Jorem;