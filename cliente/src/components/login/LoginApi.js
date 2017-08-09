import axios from 'axios'

const api = 'http://localhost:5001/api/user/login'

export const login = (user, password) => (
  axios.get(api, {
    params: {
      user,
      password
    }
  })
)
