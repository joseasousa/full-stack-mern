module.exports = app => {
  const controller = app.controllers.contato
    // organnizacao das rotas
  app.all('/', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'X-Requested-With')
    next()
  })

  app
    .route('/api/contatos')
    .get(controller.listaContatos)
    .post(controller.addContato)

  app
    .route('/api/contatos/:id')
    .get(controller.listaContatoId)
    .delete(controller.deleteContato)
    .put(controller.updateContato)
}
