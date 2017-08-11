module.exports = function (app) {
  const controller = {}
  const Book = app.models.book

  controller.populateBank = (req, res) => {
    const Client = require('node-rest-client').Client
    const client = new Client()

    console.log('entrou')
    client.get('https://www.googleapis.com/books/v1/volumes?q=maxResults:0&q=language:pt',
    (data, response) => {
      // parsed response body as js object console.log(data)
      // res.send(data)
      // res.send(response)
      // raw response
      const books = data.items.map(book => ({
        title: book.volumeInfo.title,
        description: book.volumeInfo.description,
        authors: book.volumeInfo.authors,
        pageCount: book.volumeInfo.pageCount,
        isbn: book.volumeInfo.isbn,
        language: book.volumeInfo.language,
        imageLinks: book.volumeInfo.imageLinks.thumbnail | ''
      }))

      console.log(books)
      books.map(book => {
        Book.create(book,
            (erro, Book) => {
              if (erro) {
                res.status(500).json(erro)
              }
              res.status(201).json(book)
            })
      })
    })
  }

  return controller
}
