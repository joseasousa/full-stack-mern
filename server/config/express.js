const express = require('express')
const load = require('consign')
const bodyParser = require('body-parser')
const compression = require('compression')
const port = 5001

module.exports = () => {
  const app = express()
  app.set('port', port)
  app.use(compression())

  app.use(express.static('./public'))
  // configuracao bodyParser e method override
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())
  app.use(require('method-override')())

  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    next()
  })

  load({cwd: 'api'})
    .include('models')
    .then('controllers')
    .then('routes')
    .into(app)

  return app
}
