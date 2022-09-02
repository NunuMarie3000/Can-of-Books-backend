const express = require('express')
const router = express.Router()
const Book = require('../models/Book')

router.post('/books', async(req,res)=>{
  try {
    // using object literal syntax
    // const { title, image, description, status} = req.body
    // const newBook = await Book.create({
    //   title,
    //   image,
    //   description,
    //   status
    // })
    // not object literal
    const newBook = await Book.create(req.body)
    await newBook.save()
    console.log(newBook)
    res.status(201).send(newBook) 
  } catch (error) {
    console.log(error.message)
    res.send(error)
  }
})

module.exports = router