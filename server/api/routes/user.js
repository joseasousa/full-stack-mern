module.exports = app => {
  const controller = app.controllers.user
    // organnizacao das rotas
  app.route('/api/user')
        .get(controller.listUsers)
        .post(controller.addUser)

  app.route('/api/user/login')
        .get(controller.login)

  app.route('/api/user/:id')
        .get(controller.listUserId)
        .delete(controller.deletUser)
        .put(controller.updateUser)
}
