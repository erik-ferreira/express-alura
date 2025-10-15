import { ErrorRequest } from "./ErrorRequest.js"

export class ErrorValidation extends ErrorRequest {
  constructor(erro) {
    const messagesErrors = Object.values(erro.errors)
      .map((erro) => erro.message)
      .join("; ")

    super(`Os seguintes erros foram encontrados: ${messagesErrors}`)
  }
}
