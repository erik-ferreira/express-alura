import { author } from "../models/author.js"

export class AuthorController {
  static async listAuthors(_, response) {
    try {
      const authors = await author.find({})

      response.status(200).json(authors)
    } catch (error) {
      response.status(500).json({
        message: `${error.message} - falha ao buscar os autores`,
      })
    }
  }

  static async getOneAuthor(request, response) {
    try {
      const id = request.params.id
      const author = await author.findById(id)

      response.status(200).json(author)
    } catch (error) {
      response.status(500).json({
        message: `${error.message} - falha ao buscar o autor`,
      })
    }
  }

  static async createAuthor(request, response) {
    try {
      const newAuthor = await author.create(request.body)

      response.status(201).json({
        message: "Autor criado com sucesso",
        author: newAuthor,
      })
    } catch (error) {
      response.status(500).json({
        message: `${error.message} - falha ao cadastrar o autor`,
      })
    }
  }

  static async updateAuthor(request, response) {
    try {
      const id = request.params.id
      await author.findByIdAndUpdate(id, request.body)

      response.status(201).json({
        message: "Autor atualizado com sucesso",
      })
    } catch (error) {
      response.status(500).json({
        message: `${error.message} - falha ao atualizar o autor`,
      })
    }
  }

  static async deleteAuthor(request, response) {
    try {
      const id = request.params.id
      await author.findByIdAndDelete(id, request.body)

      response.status(201).json({
        message: "Autor deletado com sucesso",
      })
    } catch (error) {
      response.status(500).json({
        message: `${error.message} - falha ao deletar o autor`,
      })
    }
  }
}
