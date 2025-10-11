import mongoose from "mongoose"

const authorSchema = new mongoose.Schema(
  {
    id: { type: String },
    nome: { type: String, required: true },
    nacionalidade: { type: String },
  },
  { versionKey: false }
)

const author = mongoose.model("autores", authorSchema)

export { author, authorSchema }
