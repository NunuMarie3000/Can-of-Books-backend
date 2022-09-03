const express = require('express')
const router = express.Router()
const Book = require('../models/Book')

router.delete('/books/:id', async(req,res)=>{
  // the id is just gonna be the numbers and stuff, not the objectId(""), just the stuff in quotation marks
  try {
    let toDeleteId = req.params.id
    // deletes one book who's id equals the req params
    await Book.deleteOne({_id: {$eq: toDeleteId}})
    // const allBooks = await Book.find()
    res.status(200).send('Book deleted')
  } catch (error) {
    console.log(error.message)
    res.send(error)
  }
})

module.exports = router