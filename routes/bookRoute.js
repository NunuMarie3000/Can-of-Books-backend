const express = require('express')
const router = express.Router()
const Book = require('../models/Book')

router.get('/books', async(req,res)=>{
  try {
    const allBooks = await Book.find({})
    res.status(200).send(allBooks)
  } catch (error) {
    console.log(error.message)
    res.send(error)
  }
})

module.exports = router