import { Router } from "express"
import { BookController } from "../controllers/book_controller.js"

const router = Router()

router.get("/livros", BookController.listBooks)
router.get("/livros/:id", BookController.getOneBook)
router.post("/livros", BookController.createBook)
router.put("/livros/:id", BookController.updateBook)
router.delete("/livros/:id", BookController.deleteBook)

export default router
