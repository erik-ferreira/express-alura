import mongoose from "mongoose"

export async function connectInDatabase() {
  mongoose.connect(process.env.DB_CONNECTION)

  return mongoose.connection
}
