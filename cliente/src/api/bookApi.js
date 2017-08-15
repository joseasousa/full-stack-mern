import axios from 'axios'

const URI = ''

export default getBook = () => (
    axios.get(URI)
)

import axios from 'axios'

const URL = 'http://localhost:5001/api/books'

export const getBooksApi = () => (
    axios.get(URL)