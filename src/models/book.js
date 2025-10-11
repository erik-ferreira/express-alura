import mongoose from "mongoose"

import { authorSchema } from "./author.js"

const bookSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: true },
    editora: { type: String },
    preco: { type: Number },
    paginas: { type: Number },
    autor: authorSchema,
  },
  { versionKey: false }
)

export const book = mongoose.model("livros", bookSchema)
