const router = require("express").Router();
const {
  addBook, 
  getAllBooks, 
  getBookById,
  updateBook,
  deleteBook
  } = require("../controllers/books_controllers");

const {authMiddleware} = require("../middleware/auth_model.js");

//route for updating a book
router.patch("/:id", updateBook);

//route for deleting a book
router.delete("/:id", deleteBook);

//route for adding book
router.post("/", addBook);

//route for finding a book
router.get("/", getAllBooks);

//route for finding a specific book
router.get("/:id", getBookById);

module.exports = router;