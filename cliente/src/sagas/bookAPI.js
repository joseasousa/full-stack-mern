import { put } from 'redux-saga/effects'
import { getBooksApi } from '../api'
import { loadBookSuccess } from '../actions'

function * getBooks () {
  const Books = yield getBooksApi()
  yield put(loadBookSuccess(Books.data))
}

export default getBooks
