import express from "express"
import { db } from "./config/dbConnect.js"
import { routes } from "./routes/index.js"

db.on("error", console.log.bind(console, "Erro de conexão"))
db.once("open", () => {
  console.log("conexão com o banco feita com sucesso")
})

export const app = express()
app.use(express.json())
routes(app)

// const connect = await connectInDatabase()

// connect.on("error", (erro) => {
//   console.log("Erro ao conectar no banco", erro)
// })

// connect.once("open", () => {
//   console.log("Conexão com o banco feita com sucesso")
// })
