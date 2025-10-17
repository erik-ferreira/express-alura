import { ErrorRequest } from "../errors/ErrorRequest.js"

export async function paginate(request, response, next) {
  try {
    const { take = 5, page = 1, ordination = "_id:-1" } = request.query
    const [order, ordem] = ordination.split(":")

    take = parseInt(take)
    page = parseInt(page)
    ordem = parseInt(ordem)

    const result = request.result

    if (take > 0 && page > 0) {
      const resultPaginate = await result
        .find({})
        .sort({ [order]: ordem })
        .skip((page - 1) * take)
        .limit(take)
        .exec()

      return response.status(200).json(resultPaginate)
    }

    next(new ErrorRequest())
  } catch (error) {
    next(error)
  }
}
