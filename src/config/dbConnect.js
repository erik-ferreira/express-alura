import mongoose from "mongoose"

mongoose.connect(process.env.DB_CONNECTION)

let db = mongoose.connection

return { db }
