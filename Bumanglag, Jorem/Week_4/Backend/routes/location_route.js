const mongoose = require("mongoose");
const router = require("express").Router()

const {addLocation} = require("../controller/location_controller");

router.post("/", addLocation);

module.exports = router;