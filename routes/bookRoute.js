const express = require('express')
const router = express.Router()
const Book = require('../models/Book')

router.get('/books', async(req,res)=>{
  try {
    const allBooks = await Book.find({})
    res.send(allBooks)
  } catch (error) {
    console.log(error.message)
  }
})

module.exports = router