module.exports = app => {
  const controller = app.controllers.book
    // organnizacao das rotas
  app.all('/', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'X-Requested-With')
    next()
  })

  app
    .route('/api/books')
    .get(controller.listBooks)
    .post(controller.addBook)

  app
    .route('/api/books/:id')
    .get(controller.listaBookId)
    .delete(controller.deleteBook)
    .put(controller.updateBook)
}
