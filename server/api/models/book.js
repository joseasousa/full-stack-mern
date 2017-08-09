const mongoose = require('mongoose')

module.exports = () => {
  const schema = mongoose.Schema({
    title: {
      type: String
    },
    description: {
      type: String
    },
    authors: [String],
    pageCount: {
      type: Number
    },
    isbn: {
      type: Number
    },
    language: {
      type: String
    },
    imageLinks: {
      type: String
    }
  })

  return mongoose.model('Book', schema)
}
