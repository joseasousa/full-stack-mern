import { takeEvery } from 'redux-saga/effects'
import login from './userAPI'

function * index () {
  yield [takeEvery('LOAD_USER_LOGIN', login)]
}

export default index
