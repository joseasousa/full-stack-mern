import { put } from 'redux-saga/effects'
import axios from 'axios'
import { loadUserSuccess } from '../actions'

const URL = 'http://localhost:5001/api/user/login'

function * login (User) {
  const { user, password } = User.User

  const dados = yield axios.get(URL, {
    params: {
      user,
      password
    }
  })

  localStorage.setItem('user', JSON.stringify(dados.data))
  
  yield put(loadUserSuccess(dados.data))
}

export default login
