import { book } from "../models/book.js"
import { author } from "../models/author.js"

import { processBooks } from "../utils/book.js"

export class BookController {
  static async listBooks(_, response, next) {
    try {
      const books = await book.find({})

      response.status(200).json(books)
    } catch (error) {
      next(error)
    }
  }

  static async getOneBook(request, response, next) {
    try {
      const id = request.params.id
      const book = await book.findById(id)

      response.status(200).json(book)
    } catch (error) {
      next(error)
    }
  }

  static async listBooksByFilter(request, response, next) {
    try {
      const search = await processBooks(request.query)

      const booksByPublisher = await book
        .find({
          editora: search.publisher,
          titulo: search.title,
          paginas: search.pages,
          autor: search.author,
        })
        .populate("autor")

      response.status(200).json(booksByPublisher)
    } catch (error) {
      next(error)
    }
  }

  static async createBook(request, response, next) {
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
      next(error)
    }
  }

  static async updateBook(request, response, next) {
    try {
      const id = request.params.id
      const bookResult = await book.findByIdAndUpdate(id, request.body)

      if (!bookResult) {
        next(new NotFound("Id do Livro não localizado."))
        return
      }

      response.status(201).json({
        message: "Livro atualizado com sucesso",
      })
    } catch (error) {
      next(error)
    }
  }

  static async deleteBook(request, response, next) {
    try {
      const id = request.params.id
      const bookResult = await book.findByIdAndDelete(id, request.body)

      if (!bookResult) {
        next(new NotFound("Id do Livro não localizado."))
        return
      }

      response.status(201).json({
        message: "Livro deletado com sucesso",
      })
    } catch (error) {
      next(error)
    }
  }
}
