//import router from the express framework
const router = require("express").Router();

//import crud operator
const {addUser,userLogin} = require('../controllers/user_controller');

//defube tge route when you sign up
router.post("/signup", addUser);

//define the route when user logs to
router.post("/login", userLogin);

module.exports = router;