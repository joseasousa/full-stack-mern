module.exports = app => {
  const controller = {}
  const Book = app.models.book

  /**
   * fucao que listas todos os Book
   */
  controller.listBooks = (req, res) => {
    Book.find().exec()
      .then(
        book => {
          res.json(book)
        },
        erro => {
          console.error(erro)
          res.status(500).json(erro)
        }
    )
  }

  /**
   * funcao que lista o Book pelo id
   */
  controller.listaBookId = (req, res) => {
    const _id = req.params.id
    Book.findById(_id).exec()
      .then(book => {
        if (!book) throw new Error('Livro não encontrado')
        res.json(book)
      },
        erro => {
          console.log(erro)
          res.status(404).json(erro)
        }
    )
  }
 
  controller.addBook = (req, res) => {
    const book = req.body
    Book.create(book,
      (erro, Book) => {
        if (erro) {
          console.log(erro)
          res.status(500).json(erro)
        }
        res.status(201).json(book)
      })
  }

  controller.deleteBook = (req, res) => {
    const query = {'_id': req.params.id}
    Book.remove(query, erro => {
      if (erro) {
        console.error(erro)
        res.status(500).json(erro)
      } else {
        res.status(204).end()
      }
    })
  }

  controller.updateBook = (req, res) => {
    const id = req.params.id
    Book.findByIdAndUpdate(id, req.body,
      (erro, Book) => {
        if (erro) {
          console.error(erro)
          res.status(500).json(erro)
        } else {
          res.json(Book)
        }
      })
  }

  return controller
}
