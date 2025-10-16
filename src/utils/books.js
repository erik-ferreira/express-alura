import { author } from "../models/author.js"

export async function processBooks(params) {
  const { publisher, title, minPages, maxPages, nameAuthor } = params

  const search = {}

  if (publisher) search.publisher = publisher
  if (title) search.title = { $regex: title, $options: "i" }

  if (minPages || maxPages) search.pages = {}

  if (minPages) search.pages.$gte = minPages
  if (maxPages) search.pages.$lte = maxPages

  if (nameAuthor) {
    const authorFind = await author.findOne({ nome: nameAuthor })

    const authorId = authorFind ? authorFind._id : null

    search.author = authorId
  }

  return search
}
