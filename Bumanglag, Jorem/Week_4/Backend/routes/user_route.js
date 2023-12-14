//import router from the express framework
const router = require("express").Router();

//import crud operators from user_controller
const {addUser, userLogin} = require("../controller/user_controller");

//define the route when you sign up
router.post("/signup", addUser);

//define the route when user logs to
router.post("/login", userLogin, );

//export the router
module.exports = router;
