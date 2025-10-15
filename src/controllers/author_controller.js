import mongoose from "mongoose"
import { author } from "../models/author.js"
import { NotFound } from "../errors/NotFound.js"

export class AuthorController {
  static async listAuthors(_, response, next) {
    try {
      const authors = await author.find({})

      response.status(200).json(authors)
    } catch (error) {
      next(error)
    }
  }

  static async getOneAuthor(request, response, next) {
    try {
      const id = request.params.id
      const authorFind = await author.findById(id)

      if (!authorFind) {
        // return response.status(404).json({ message: "Autor não encontrado" })
        return next(new NotFound("Autor não encontrado"))
      }

      response.status(200).json(authorFind)
    } catch (error) {
      next(error)
    }
  }

  static async createAuthor(request, response, next) {
    try {
      const newAuthor = await author.create(request.body)

      response.status(201).json({
        message: "Autor criado com sucesso",
        author: newAuthor,
      })
    } catch (error) {
      next(error)
    }
  }

  static async updateAuthor(request, response, next) {
    try {
      const id = request.params.id
      const authorResult = await author.findByIdAndUpdate(id, request.body)

      if (!authorResult) {
        next(new NotFound("Id do Autor não localizado."))
        return
      }

      response.status(201).json({
        message: "Autor atualizado com sucesso",
      })
    } catch (error) {
      next(error)
    }
  }

  static async deleteAuthor(request, response, next) {
    try {
      const id = request.params.id
      const authorResult = await author.findByIdAndDelete(id, request.body)

      if (!authorResult) {
        next(new NotFound("Id do Autor não localizado."))
        return
      }

      response.status(201).json({
        message: "Autor deletado com sucesso",
      })
    } catch (error) {
      next(error)
    }
  }
}
