// const Book = require('../models/Book')
const Book = require('../models/Book')

const seedBooks = async()=>{
  const book1 = Book.create({
    title:"Children of Blood and Bone",
    description: "An amazing book by Tomi Adeyemi",
    status: "isAvailable"
  })
  const book2 = Book.create({
    title:"Children of Virtue and Vengeance",
    description: "An amazing second book by Tomi Adeyemi",
    status: "isAvailable"
  })
  const book3 = Book.create({
    title:"Children of ....",
    description: "An amazing third book by Tomi Adeyemi",
    status: "notAvailable"
  })
  await book1.save()
  await book2.save()
  await book3.save()
}

module.exports = seedBooks