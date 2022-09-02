const express = require('express')
const router = express.Router()

router.get('/', (req,res)=>{
  console.log('this the homepage')
  res.send('homepage')
})

module.exports = router