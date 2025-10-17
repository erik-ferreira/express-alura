import { Router } from "express"
import { BookController } from "../controllers/book_controller.js"
import { paginate } from "../middlewares/paginate.js"

const router = Router()

router
  .get("/books", BookController.listBooks, paginate)
  .get("/books/buscar", BookController.listBooksByFilter, paginate)
  .get("/books/:id", BookController.getOneBook)
  .post("/books", BookController.createBook)
  .put("/books/:id", BookController.updateBook)
  .delete("/books/:id", BookController.deleteBook)

export default router
