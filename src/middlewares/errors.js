import mongoose from "mongoose"
import { ErrorBase } from "../errors/ErrorBase.js"
import { ErrorRequest } from "../errors/ErrorRequest.js"
import { ErrorValidation } from "../errors/ErrorValidation.js"

export function middlewareErrors(err, req, res, next) {
  if (err instanceof mongoose.Error.CastError) {
    new ErrorRequest().sendResponse(res)
    return
  }

  if (err instanceof mongoose.Error.ValidationError) {
    new ErrorValidation(err).sendResponse(res)
    return
  }

  if (err instanceof ErrorBase) {
    err.sendResponse(res)
    return
  }

  new ErrorBase().sendResponse(res)
}
