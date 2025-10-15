import mongoose from "mongoose"

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
      enum: {
        values: ["Casa do Código", "Alura"],
        message: "{VALUE} não é uma editora válida",
      },
    },
    autor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "autores",
      required: [true, "O autor do livro é obrigatório"],
    },
    paginas: {
      type: Number,
      // min: [10, "Número mínimo de páginas é 10"],
      // max: [5000, "Número máximo de páginas é 5000"],
      validate: {
        validator: (valor) => valor >= 10 && valor <= 5000,
        message: "Número de páginas deve estar entre 10 e 5000",
      },
    },
  },
  { versionKey: false }
)

export const book = mongoose.model("livros", bookSchema)
