const express = require('express')
const router = express.Router()

router.get('/unprotected', (req,res)=>{
  res.send('hello from unprotected')
})

module.exports = router