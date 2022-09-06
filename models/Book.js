const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  status: {
    type: Boolean,
    required: true
  }
})

const bookModel = mongoose.model('Book', bookSchema)

module.exports = bookModel