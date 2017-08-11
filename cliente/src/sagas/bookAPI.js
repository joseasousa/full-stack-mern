import { put } from 'redux-saga/effects'
import axios from 'axios'
import { loadBookSuccess } from '../actions'

const URL = 'http://localhost:5001/api/books'

function * getBooks () {
  const Books = yield axios.get(URL)
  yield put(loadBookSuccess(Books.data))
}

export default getBooks
