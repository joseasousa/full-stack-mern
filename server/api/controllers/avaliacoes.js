module.exports = app => {
  const controller = {}
  const Avaliacoes = app.models.avaliacoes

  controller.listAvaliacoes = (req, res) => {
    Avaliacoes.find().exec()
    .then(
          avaliacoes => {
            res.json(avaliacoes)
          },
          error => {
            res.status(500).json(error)
          }
      )
  }

  controller.listAvaliacaoId = (req, res) => {
    const _id = req.params.id
    Avaliacoes.find(_id).exec().then(
          avaliacoes => {
            if (!avaliacoes) throw new Error('Livro não encontrado')
            res.json(avaliacoes)
          },
          error => {
            res.status(500).json(error)
          }
      )
  }

  controller.addAvaliacao = (req, res) => {
    const avaliacao = req.body
    Avaliacoes.create(avaliacao,
      (erro, avaliacoes) => {
        if (erro) {
          console.log(erro)
          res.status(500).json(erro)
        }
        res.status(201).json(avaliacao)
      })
  }

  controller.deleteAvaliacao = (req, res) => {
    const query = {'_id': req.params.id}
    Avaliacoes.remove(query, erro => {
      if (erro) {
        console.error(erro)
        res.status(500).json(erro)
      } else {
        res.status(204).end()
      }
    })
  }

  controller.updateAvaliacao = (req, res) => {
    const id = req.params.id
    Avaliacoes.findByIdAndUpdate(id, req.body,
      (erro, avaliacao) => {
        if (erro) {
          console.error(erro)
          res.status(500).json(erro)
        } else {
          res.json(avaliacao)
        }
      })
  }

  return controller
}
