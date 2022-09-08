'use strict';
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')

const { expressjwt: jwt } = require("express-jwt");
const jwks = require('jwks-rsa')
// const axios = require('axios')

const mongoose = require('mongoose')

const booksRoutes = require('./routes/booksRoutes')
const home = require('./routes/home')
const test = require('./routes/test');
const protectedRoute = require('./routes/protectedRoute')
const unprotectedRoute = require('./routes/unprotectedRoute')

mongoose.connect(process.env.MONGODB_CONNECTION_STRING, ()=>{
  console.log('connected')
},
err=>console.log(err))

app.use(cors());
app.use(bodyParser.json())

const verifyJwt = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: process.env.JWKSURI
  }),
  audience: process.env.AUDIENCE,
  issuer: process.env.ISSUER,
  algorithms: ['RS256']
}).unless({path: ['/unprotected']})

app.use(verifyJwt)
app.use(home)
app.use(test)
app.use('/books', booksRoutes)
app.use(protectedRoute)
app.use(unprotectedRoute)


app.listen(process.env.PORT, ()=>console.log('server up and running'))