const express = require('express')
const router = express.Router()
const axios = require('axios')
const Book = require('../models/Book')
const checkUser = require('../funcs/checkUser')
const verifyJwt = require('../funcs/verifyJwt')

// READ ALL
router.get('/', verifyJwt, async (req, res) => {
  try {
    // req.auth not req.user
    // need to extract jwt from the header
    const accessToken = req.headers.authorization.split(' ')[1]
    const response = await axios.get(`${process.env.ISSUER}userinfo`, {
      headers: {
        authorization: `Bearer ${accessToken}`
      }
    })
    // i wanna extract userinfo and create a new user for db
    // then i can have that user create books with their email linked and only return books linked with that users' email
    const userInfo = response.data
    // this is returning my mongodb user with an id, email, and name
    const user = await checkUser(userInfo)

    const allBooks = await Book.find({}).where("user").equals(user[0].email)
    // res.status(200).send(allBooks)
    res.status(200).json({
      books: allBooks,
      userInfo: user
    })
  } catch (error) {
    res.send(error.message)
  }
})

// CREATE ONE
router.post('/', verifyJwt, async (req, res) => {
  try {
    const accessToken = req.headers.authorization.split(' ')[1]
    await axios.get(`${process.env.ISSUER}userinfo`, {
      headers: {
        authorization: `Bearer ${accessToken}`
      }
    })

    const newBook = await Book.create(req.body)
    await newBook.save()
    res.status(201).send(newBook)
  } catch (error) {
    console.log(error.message)
    res.send(error)
  }
})

// UPDATE ONE
router.put('/:id', async (req, res) => {
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
    // let updatedBook = await Book.find({}).where("_id").equals(toUpdateId)
    res.status(202).send('book updated')
  } catch (error) {
    console.log(error.message)
    res.send(error)
  }
})

// DELETE ONE
router.delete('/:id', async (req, res) => {
  // the id is just gonna be the numbers and stuff, not the objectId(""), just the stuff in quotation marks
  try {
    let toDeleteId = req.params.id
    // deletes one book who's id equals the req params
    await Book.deleteOne({ _id: { $eq: toDeleteId } })
    // const allBooks = await Book.find()
    res.status(200).send('Book deleted')
  } catch (error) {
    console.log(error.message)
    res.send(error)
  }
})

module.exports = router
