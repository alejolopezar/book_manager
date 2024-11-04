const { Router } = require("express");
const booksController = require("../controllers/booksController");
const { validateBookData } = require("../middlewares/index");

const booksRouter = Router();

booksRouter.get("/", booksController.getBook);

booksRouter.post("/", validateBookData, booksController.postBook);

booksRouter.put("/", validateBookData, booksController.putBook);

booksRouter.delete("/", booksController.deleteBook);

module.exports = booksRouter;