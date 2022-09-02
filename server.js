'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3001;

const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_CONNECTION_STRING, ()=>{
  console.log('connected')
},
err=>console.log(err))
// const Book = require('./models/Book')
const bookRoute = require('./routes/bookRoute')
// const seedBooks = require('./funcs/seedBooks')
// seedBooks()

app.get('/', (req,res)=>{
  res.send('homepage')
})

app.get('/test', (req, res) => {
  res.send('test request received')
})

app.use(bookRoute)

app.listen(PORT, () => console.log(`listening on ${PORT}`));
