const express = require('express')
const router = express.Router()

router.get('/test', (req,res)=>{
  console.log('this the test')
  res.send('test')
})

module.exports = router