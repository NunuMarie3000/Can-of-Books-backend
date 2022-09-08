const { default: axios } = require('axios')
const express = require('express')
const router = express.Router()

router.get('/protected', async (req,res)=>{
  try {
    // req.auth not req.user
  // need to extract jwt from the header
  const accessToken = req.headers.authorization.split(' ')[1]
  const response = await axios.get(`${process.env.ISSUER}userinfo`, {
    headers: {
      authorization: `Bearer ${accessToken}`
    }
  })
  const userInfo = response.data
  console.log(userInfo)
  res.send(userInfo)
  // res.send('hello from protected')
  } catch (error) {
    res.send(error.message)
  }
})

module.exports = router