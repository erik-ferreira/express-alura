import express from "express"
import bookRoutes from "./book_routes.js"

export const routes = (app) => {
  app.route("/").get((req, res) => {
    return res.status(200).send("Curso de node.js")
  })

  app.use(express.json(), bookRoutes)
}
