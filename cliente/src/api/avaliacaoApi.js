import axios from 'axios'

const URL = 'http://localhost:5001/api/avaliacao'

export const addAvaliacaoApi = avaliacao => (
  axios.post(URL, avaliacao)
)
