// /models/User.js
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
    phone: {
      type: String
    },
    user: {
      type: String,
      index: {
        require: true
      }
    },
    password: {
      type: String
    }
  })

  return mongoose.model('User', schema)
}
