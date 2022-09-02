const Book = require('../models/Book')

const seedBooks = async()=>{
  const book1 = Book.create({
    title:"Children of Blood and Bone",
    image: "https://images-na.ssl-images-amazon.com/images/I/A1e37vzc5VL.jpg",
    description: "An amazing book by Tomi Adeyemi",
    status: "isAvailable"
  })
  const book2 = Book.create({
    title:"Children of Virtue and Vengeance",
    image: "https://images-na.ssl-images-amazon.com/images/I/91TVZ3soQwL.jpg",
    description: "An amazing second book by Tomi Adeyemi",
    status: "isAvailable"
  })
  const book3 = Book.create({
    title:"Children of ....",
    image: "https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg",
    description: "An amazing third book by Tomi Adeyemi",
    status: "notAvailable"
  })
  await book1.save()
  await book2.save()
  await book3.save()
}
seedBooks()