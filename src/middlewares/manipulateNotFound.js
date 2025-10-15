export function manipulateNotFound(req, res, next) {
  const error404 = new NotFound()
  next(error404)
}
