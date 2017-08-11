import { takeEvery } from 'redux-saga/effects'
import login from './userAPI'
import getBooks from './bookAPI'

function * index () {
  yield [
    takeEvery('LOAD_LOGIN_REQUEST', login),
    takeEvery('LOAD_BOOK_REQUEST', getBooks)
  ]
}

export default index
