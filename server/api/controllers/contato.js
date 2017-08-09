module.exports = function (app) {
  const controller = {}
  const Contatos = app.models.contato

  /**
   * fucao que listas todos os contatos
   */
  controller.listaContatos = (req, res) => {
    Contatos.find().exec()
      .then(
        contatos => {
          res.json(contatos)
        },
        erro => {
          console.error(erro)
          res.status(500).json(erro)
        }
    )
  }

  /**
   * funcao que lista o contato pelo id
   */
  controller.listaContatoId = (req, res) => {
    const _id = req.params.id
    Contatos.findById(_id).exec()
      .then(contato => {
        if (!contato) throw new Error('Contato não encontrado')
        res.json(contato)
      },
        erro => {
          console.log(erro)
          res.status(404).json(erro)
        }
    )
  }

  /**
   * funcao que adciona um contato
   */
  controller.addContato = (req, res) => {
    const contato = req.body
    Contatos.create(contato,
      (erro, contato) => {
        if (erro) {
          console.log(erro)
          res.status(500).json(erro)
        }
        res.status(201).json(contato)
      })
  }

  controller.deleteContato = (req, res) => {
    const query = {'_id': req.params.id}
    Contatos.remove(query, erro => {
      if (erro) {
        console.error(erro)
        res.status(500).json(erro)
      } else {
        res.status(204).end()
      }
    })
  }

  controller.updateContato = (req, res) => {
    const id = req.params.id
    Contatos.findByIdAndUpdate(id, req.body,
      (erro, contato) => {
        if (erro) {
          console.error(erro)
          res.status(500).json(erro)
        } else {
          res.json(contato)
        }
      })
  }

  return controller
}
