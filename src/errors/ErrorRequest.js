import { ErrorBase } from "./ErrorBase.js"

export class ErrorRequest extends ErrorBase {
  constructor(message = "Um ou mais dados fornecidos estão incorreto") {
    super(message, 400)
  }
}
