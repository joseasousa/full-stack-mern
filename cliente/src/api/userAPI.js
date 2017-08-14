import axios from 'axios'

const URL = 'http://localhost:5001/api/user'

export const userLoginApi = p => {
  const { user, password } = p
  return axios.get(URL + '/login', { params:
    { user, password }
  })
}

export const getUsersApi = () => (
    axios.get(URL)
)

export const addUserApi = User => (
    axios.put(URL, User)
)
