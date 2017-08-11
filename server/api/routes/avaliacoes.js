module.exports = app => {
  const controller = app.controllers.avaliacoes
      // organnizacao das rotas
  app.all('/', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers',
      'X-Requested-With')
    next()
  })

  app
    .route('/api/avaliacao')
    .get(controller.listAvaliacoes)
    .post(controller.addAvaliacao)

  app
    .route('/api/avaliacao/:id')
    .get(controller.listAvaliacaoId)
    .delete(controller.deleteAvaliacao)
    .put(controller.updateAvaliacao)
}
