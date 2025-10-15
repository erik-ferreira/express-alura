import { ErrorBase } from "./ErrorBase.js"

export class NotFound extends ErrorBase {
  constructor(message = "Página não encontrada") {
    super(message, 404)
  }
}
