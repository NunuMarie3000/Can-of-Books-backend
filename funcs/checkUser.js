const User = require('../models/User')

const checkUser = async(user) => {
  try {
    if(await User.exists({email: user.email})) return User.find({}).where("email").equals(user.email)
  const newUser = await User.create({
    name: user.name,
    email: user.email,
  })
  await newUser.save()
  return newUser
  } catch (error) {
    console.log(error.message)
  }
}

module.exports = checkUser