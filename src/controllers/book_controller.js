import { livro } from "../models/book.js"

export class BookController {
  static async listBooks(_, response) {
    try {
      const books = await livro.find({})

      response.status(200).json(books)
    } catch (error) {
      response.status(500).json({
        message: `${error.message} - falha ao buscar os livros`,
      })
    }
  }

  static async getOneBook(request, response) {
    try {
      const id = request.params.id
      const book = await livro.findById(id)

      response.status(200).json(book)
    } catch (error) {
      response.status(500).json({
        message: `${error.message} - falha ao buscar o livro`,
      })
    }
  }

  static async createBook(request, response) {
    try {
      const newBook = await livro.create(request.body)

      response.status(201).json({
        message: "Livro criado com sucesso",
        book: newBook,
      })
    } catch (error) {
      response.status(500).json({
        message: `${error.message} - falha ao cadastrar o livro`,
      })
    }
  }

  static async updateBook(request, response) {
    try {
      const id = request.params.id
      await livro.findByIdAndUpdate(id, request.body)

      response.status(201).json({
        message: "Livro atualizado com sucesso",
      })
    } catch (error) {
      response.status(500).json({
        message: `${error.message} - falha ao atualizar o livro`,
      })
    }
  }

  static async deleteBook(request, response) {
    try {
      const id = request.params.id
      await livro.findByIdAndDelete(id, request.body)

      response.status(201).json({
        message: "Livro deletado com sucesso",
      })
    } catch (error) {
      response.status(500).json({
        message: `${error.message} - falha ao deletar o livro`,
      })
    }
  }
}
