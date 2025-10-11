import { Router } from "express"
import { AuthorController } from "../controllers/author_controller.js"

const router = Router()

router
  .get("/authors", AuthorController.listAuthors)
  .get("/authors/:id", AuthorController.getOneAuthor)
  .post("/authors", AuthorController.createAuthor)
  .put("/authors/:id", AuthorController.updateAuthor)
  .delete("/authors/:id", AuthorController.deleteAuthor)

export default router
