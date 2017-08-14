import axios from 'axios'

const URL = 'http://localhost:5001/api/user/login'

export const userLogin = p => {
  const { user, password } = p
  return axios.get(URL, { params:
    { user, password }
  })
}

export const getUsers = () => (
    axios.get(URL)
)

export const addUser = User => (
    axios.put(URL, User)
)
