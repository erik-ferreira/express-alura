import { Router } from "express"
import { AuthorController } from "../controllers/author_controller.js"

const router = Router()

router.get("/authors", AuthorController.listAuthors)
router.get("/authors/:id", AuthorController.getOneAuthor)
router.post("/authors", AuthorController.createAuthor)
router.put("/authors/:id", AuthorController.updateAuthor)
router.delete("/authors/:id", AuthorController.deleteAuthor)

export default router
