import { book } from "../models/book.js"
import { author } from "../models/author.js"

export class BookController {
  static async listBooks(request, response, next) {
    try {
      const searchBooks = livros.find()

      request.result = searchBooks

      next()
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

      if (search !== null) {
        const booksByPublisher = book
          .find({
            editora: search.publisher,
            titulo: search.title,
            paginas: search.pages,
            autor: search.author,
          })
          .populate("autor")

        request.result = booksByPublisher

        next()
      } else {
        response.status(200).json([])
      }
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
