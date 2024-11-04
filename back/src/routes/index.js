// Aquí vamos a definir las rutas a través de las cuales nos podemos comunicar

// Tengo definida la solicitud a GET /users => controlador

const { Router } = require("express");
const booksRouter = require("./booksRouter");

const router = Router();

router.use("/books", booksRouter);

module.exports = router;