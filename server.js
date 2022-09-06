'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')

const app = express();
app.use(cors());
app.use(bodyParser.json())
const mongoose = require('mongoose')

// const bookRoute = require('./routes/bookRoute')
// const bookPostRoute = require('./routes/bookPostRoute')
// const bookDeleteRoute = require('./routes/bookDeleteRoute')
// const bookUpdateRoute = require('./routes/bookUpdateRoute')
const booksRoutes = require('./routes/booksRoutes')
const home = require('./routes/home')
const test = require('./routes/test')

mongoose.connect(process.env.MONGODB_CONNECTION_STRING, ()=>{
  console.log('connected')
},
err=>console.log(err))

app.use(home)
app.use(test)
// app.use(bookRoute)
// app.use(bookPostRoute)
// app.use(bookDeleteRoute)
// app.use(bookUpdateRoute)
app.use('/books', booksRoutes)


app.listen(process.env.PORT, ()=>console.log('server up and running'))