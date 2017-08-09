const mongoose = require('mongoose')

module.exports = (uri) => {
  mongoose.connect(uri, { useMongoClient: true })
  mongoose.Promise = Promise
  const db = mongoose.connection

  db.on('connected', () => {
    console.log(`Mongoose Conectado em ${uri}`)
  })

  db.on('disconnected', () => {
    console.log(`Mongoose Desconectado em ${uri}`)
  })

  db.on('error', () => {
    console.log(`Mongoose Conectado em ${uri}`)
  })

  process.on('SIGINT', () => {
    db.close(() => {
      console.log('Mongoose! Desconectado pelo termino')

      process.exit(0)
    })
  })
}
