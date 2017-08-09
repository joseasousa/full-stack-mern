import {put, call} from 'redux-saga/effects'

const URL = 'http://localhost:5001/api/user/login'

function * login (axios) {
    const dados = yield call(axios.get(URL))
    yield put()
}

export default login
