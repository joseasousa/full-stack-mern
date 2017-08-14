import axios from 'axios'

const URI = ''

export default getBook = () => (
    axios.get(URI)
)