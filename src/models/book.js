import mongoose from "mongoose"

// import { authorSchema } from "./author.js"

const bookSchema = new mongoose.Schema(
  {
    id: { type: String },
    titulo: { type: String, required: true },
    editora: { type: String, required: true },
    // autor: authorSchema,
    autor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "autores",
      required: true,
    },
    paginas: { type: Number },
  },
  { versionKey: false }
)

export const book = mongoose.model("livros", bookSchema)
