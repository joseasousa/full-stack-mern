const http = require('http')
const app = require('./config/express')()

const mongodbUrl = process.env.MONGODB_URL || 'mongodb://localhost/biblioteca'
require('./config/database')(mongodbUrl)

http.createServer(app).listen(app.get('port'), () => {
  console.log(`Express Server escutando na porta ${app.get('port')}`)
})
