module.exports = app => {
  const controller = {}
  const Users = app.models.user

  /**
   * fucao que listas todos os users
   */
  controller.listUsers = (req, res) => {
    Users
      .find()
      .exec()
      .then(contatos => res.json(contatos), error => {
        console.log(error)
      })
  }

  /**
   * funcao que lista o user pelo id
   */
  controller.listUserId = (req, res) => {
    const _id = req.params.id
    Users
      .findById(_id)
      .exec()
      .then((user) => {
        if (!user) {
          throw new Error('Usuario não encontrado')
        }
        res.json(user)
      }, function (erro) {
        console.log(erro)
        res
          .status(404)
          .json(erro)
      })
  }

  controller.login = (req, res) => {
    const user = req.query.user
    const password = req.query.password
    Users
      .find({user, password})
      .exec()
      .then(contatos => res.json(contatos), error => {
        console.log('error: ', error)
      })
  }

  /**
   * funcao que adciona um user
   */
  controller.addUser = (req, res) => {
    const user = req.body
    Users.create(user, (erro, user) => {
      if (erro) {
        console.log(erro)
        res
          .status(500)
          .json(erro)
      }
      res
        .status(201)
        .json(user)
    })
  }

  controller.deletUser = (req, res) => {
    const query = {
      '_id': req.params.id
    }
    Users.remove(query, (erro) => {
      if (erro) {
        console.error(erro)
        res
          .status(500)
          .json(erro)
      } else {
        res
          .status(204)
          .end()
      }
    })
  }

  controller.updateUser = (req, res) => {
    const id = req.params.id
    Users.findByIdAndUpdate(id, req.body, (erro, user) => {
      if (erro) {
        console.error(erro)
        res
          .status(500)
          .json(erro)
      } else {
        res.json(user)
      }
    })
  }

  return controller
}
