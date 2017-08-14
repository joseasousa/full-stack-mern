const mongoose = require('mongoose')

module.exports = () => {
  const schema = mongoose.Schema({
    estado: {
      type: String
    },
    nota: {
      type: Number
    },
    observacoes: {
      type: String
    },
    user: {
      type: String
    },
    book: {
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
    }
  })

  return mongoose.model('Avaliacoes', schema)
}
