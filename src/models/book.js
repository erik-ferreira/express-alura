import mongoose from "mongoose"

// import { authorSchema } from "./author.js"

const bookSchema = new mongoose.Schema(
  {
    id: { type: String },
    titulo: {
      type: String,
      required: [true, "O título do livro é obrigatório"],
    },
    editora: {
      type: String,
      required: [true, "A editora do livro é obrigatória"],
    },
    autor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "autores",
      required: [true, "O autor do livro é obrigatório"],
    },
    paginas: { type: Number },
  },
  { versionKey: false }
)

export const book = mongoose.model("livros", bookSchema)
