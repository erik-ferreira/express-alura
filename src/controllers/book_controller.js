import { book } from "../models/book.js"
import { author } from "../models/author.js"

export class BookController {
  static async listBooks(_, response) {
    try {
      const books = await book.find({})

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
      const book = await book.findById(id)

      response.status(200).json(book)
    } catch (error) {
      response.status(500).json({
        message: `${error.message} - falha ao buscar o livro`,
      })
    }
  }

  static async listBooksByPublisher(request, response) {
    try {
      const publisher = request.query.publisher

      const booksByPublisher = await book.find({ editora: publisher })

      response.status(200).json(booksByPublisher)
    } catch (error) {
      response.status(500).json({
        message: `${error.message} - falha ao buscar os livros`,
      })
    }
  }

  static async createBook(request, response) {
    try {
      const bookData = request.body

      const authorFind = await author.findById(bookData.author)

      if (!authorFind) {
        throw "Autor não encontrado"
      }

      const newRest = { ...bookData, autor: { ...authorFind._doc } }
      const newBook = await book.create(newRest)

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
      await book.findByIdAndUpdate(id, request.body)

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
      await book.findByIdAndDelete(id, request.body)

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
