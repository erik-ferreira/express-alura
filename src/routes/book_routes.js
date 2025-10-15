import { Router } from "express"
import { BookController } from "../controllers/book_controller.js"

const router = Router()

router
  .get("/books", BookController.listBooks)
  .get("/books/buscar", BookController.listBooksByFilter)
  .get("/books/:id", BookController.getOneBook)
  .post("/books", BookController.createBook)
  .put("/books/:id", BookController.updateBook)
  .delete("/books/:id", BookController.deleteBook)

export default router
