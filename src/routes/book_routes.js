import { Router } from "express"
import { BookController } from "../controllers/book_controller.js"

const router = Router()

router.get("/books", BookController.listBooks)
router.get("/books/buscar", BookController.listBooksByPublisher)
router.get("/books/:id", BookController.getOneBook)
router.post("/books", BookController.createBook)
router.put("/books/:id", BookController.updateBook)
router.delete("/books/:id", BookController.deleteBook)

export default router
