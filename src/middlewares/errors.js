import mongoose from "mongoose"

export function middlewareErrors(err, req, res, next) {
  if (err instanceof mongoose.Error.CastError) {
    return res
      .status(400)
      .send({ message: "Um ou mais dados fornecidos são inválidos." })
  }

  res.status(500).send({ message: "Erro interno de servidor" })
}
