//import router
const router = require("express").Router();

//import middleware
const {authMiddleware} = require("../middleware/auth_model");

//import crud operations from product_controller
const {addProduct, getAllProducts, getProductById, updateProduct, deleteProduct} = require("../controller/product_controller");

//route for adding product
router.post("/", authMiddleware, addProduct);

//route for finding all products
router.get("/", getAllProducts);

//route to find specific product
router.get("/:id", getProductById);

//route for updating products
router.patch("/:id", updateProduct);

//route for deleting products
router.delete("/:id", deleteProduct);

module.exports = router;