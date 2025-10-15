import express from "express"
import { db } from "./config/dbConnect.js"
import { routes } from "./routes/index.js"
import { middlewareErrors } from "./middlewares/errors.js"
import { manipulateNotFound } from "./middlewares/manipulateNotFound.js"

db.on("error", console.log.bind(console, "Erro de conexão"))
db.once("open", () => {
  console.log("conexão com o banco feita com sucesso")
})

export const app = express()
app.use(express.json())
routes(app)

app.use(manipulateNotFound)

app.use(middlewareErrors)
