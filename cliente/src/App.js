import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import {createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddeware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import Login from './components/login'
import Form from './components/form'
import 'bootstrap-css-only'
import reducers from './reducers'

const sagamiddleware = createSagaMiddeware()
const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(sagamiddleware)
  )
)
class App extends Component {
  render () {
    return (
      <Provider store={store} >
        <div className='container'>
          <Route path='/login' render={() => (<Login className='row' />)} />
          <Route exact path='/' render={() => (<Form />)} />
        </div>
      </Provider>
    )
  }
}

export default App
