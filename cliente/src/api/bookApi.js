import axios from 'axios'

const URL = 'http://localhost:5001/api/books'

export const getBooksApi = () => axios.get(URL)
