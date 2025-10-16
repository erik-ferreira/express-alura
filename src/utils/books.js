// import { author } from "../models/author.js"

export async function processBooks(params) {
  const { publisher, title, minPages, maxPages, nameAuthor } = params

  let search = {}

  if (publisher) search.publisher = publisher
  if (title) search.title = { $regex: title, $options: "i" }

  if (minPages || maxPages) search.pages = {}

  if (minPages) search.pages.$gte = minPages
  if (maxPages) search.pages.$lte = maxPages

  // if (nameAuthor) {
  //   const authorFind = await author.findOne({ nome: nameAuthor })

  //   if (authorFind !== null) {
  //     search.author = authorFind._id
  //   } else {
  //     search = null
  //   }
  // }

  return search
}
