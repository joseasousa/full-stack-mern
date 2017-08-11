
module.exports = app => {
  const controller = app.controllers.utils
  app.all('/', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'X-Requested-With')
    next()
  })

    // organnizacao das rotas
  app.route('/api/util').get(controller.populateBank)
}
