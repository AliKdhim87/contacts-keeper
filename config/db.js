const mongoose = require("mongoose")
require("dotenv").config()

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.mongoURI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    })
    console.log("mongoDB Connected")
  } catch (error) {
    console.error(error.message)
    process.exit(1)
  }
}
module.exports = connectDB
