import { put } from 'redux-saga/effects'
import { userLoginApi } from '../api'
import { loadUserSuccess } from '../actions'

function * login (User) {
  const { user, password } = User.User

  const dados = yield userLoginApi({user, password})

  localStorage.setItem('user', JSON.stringify(dados.data))

  yield put(loadUserSuccess(dados.data))
}

export default login
