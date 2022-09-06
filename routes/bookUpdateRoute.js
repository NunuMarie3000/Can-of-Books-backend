const express = require('express')
const router = express.Router()
const Book = require('../models/Book')

router.put('/books/:id', async(req,res)=>{
  // the id is just gonna be the numbers and stuff, not the objectId(""), just the stuff in quotation marks
  try {
    // we have the id, then we need to
    // use the id to find it in let bookToUpdate = Book.find({}).where("_id").equals(toUpdateId)
    // i can make this less verbose by creating static method in the schema
    // once i have the book, i need to update it with whatever's in the request body
    // so...
    // to be fair, i could just use Book.findOneAndUpdate(), but Kyle from webdevsimplified said he stays away...so imma stay away too
    let toUpdateId = req.params.id
    await Book.find({}).where("_id").equals(toUpdateId).updateOne(req.body)
    let updatedBook = await Book.find({}).where("_id").equals(toUpdateId)
    // i wanna return the updated book
    res.status(202).send(updatedBook)
  } catch (error) {
    console.log(error.message)
    res.send(error)
  }
})

module.exports = router