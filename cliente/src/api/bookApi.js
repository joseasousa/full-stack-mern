import axios from 'axios'

const URI = ''

export default getBookAPI = () => (
    axios.get(URI)
)