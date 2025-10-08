import express from "express"
import { connectInDatabase } from "./config/dbConnect.js"

import { routes } from "./routes/index.js"

export const app = express()

routes(app)

const connect = await connectInDatabase()

connect.on("error", (erro) => {
  console.log("Erro ao conectar no banco", erro)
})

connect.once("open", () => {
  console.log("Conexão com o banco feita com sucesso")
})
