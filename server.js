'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')

const app = express();
app.use(cors());
app.use(bodyParser.json())
const mongoose = require('mongoose')

// const Book = require('./models/Book')
// const bookRoute = require('./routes/bookRoute')
// const seedBooks = require('./funcs/seedBooks')
// seedBooks()

mongoose.connect(process.env.MONGODB_CONNECTION_STRING, ()=>{
  console.log('connected')
},
err=>console.log(err))

app.get('/', (req,res)=>{
  console.log('this the homepage')
  res.send('homepage')
})

app.get('/test', (req, res) => {
  console.log('this the test route')
  res.send('test request received')
})

const Book = require('./models/Book')

app.get('/books', async(req,res)=>{
  try {
    const allBooks = await Book.find({})
    res.send(allBooks)
  } catch (error) {
    console.log(error.message)
  }
})

// app.use(bookRoute)


app.listen(process.env.PORT, ()=>console.log('server up and running'))