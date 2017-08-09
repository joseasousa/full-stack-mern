// /models/contato.js
var mongoose = require('mongoose')

module.exports = () => {
  var schema = mongoose.Schema({
    nome: {
      type: String,
      require: true
    },
    email: {
      type: String,
      index: {
        unique: true
      }
    },
    telefone: {
      type: String
    }
  })

  return mongoose.model('Contato', schema)
}
