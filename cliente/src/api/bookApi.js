import axios from 'axios'

const URL = 'http://localhost:5001/api/books'
const ISBNURL = 'https://www.googleapis.com/books/v1/volumes?q=isbn:'

export const getBooksApi = () => axios.get(URL)

export const getBookISBNApi = isbn => axios.get(ISBNURL + isbn)

export const addBookApi = Book => (
    axios.post(URL, Book)
)
