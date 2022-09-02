const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
  title: String,
  image: String,
  description: String,
  status: String
})

const bookModel = mongoose.model('Book', bookSchema)

module.exports = bookModel