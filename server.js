'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')

const mongoose = require('mongoose')

const booksRoutes = require('./routes/booksRoutes')
const home = require('./routes/home')
const test = require('./routes/test');
const verifyJwt = require('./auth0/verifyJwt')
const errMiddleware = require('./funcs/error')

mongoose.connect(process.env.MONGODB_CONNECTION_STRING, ()=>{
  console.log('connected')
},
err=>console.log(err))

app.use(cors());
app.use(bodyParser.json())
app.use(verifyJwt)
// app.use(errMiddleware)
app.use(home)
app.use(test)
app.use('/books', booksRoutes)


app.listen(process.env.PORT, ()=>console.log('server up and running'))