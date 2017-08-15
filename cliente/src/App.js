import React from 'react'
import { Route } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddeware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import Login from './components/login'
import Form from './components/form'
import reducers from './reducers'
import Avaliacoes from './components/avaliacoes'
import sagas from './sagas'

import 'bootstrap-css-only'

const sagamiddleware = createSagaMiddeware()
const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(sagamiddleware)
  )
)

sagamiddleware.run(sagas)

class App extends React.Component {
  render () {
    return (
      <Provider store={store} >
        <div className='container'>
          <Route exact path='/' render={() => (<Form />)} />
          <Route path='/login' render={() => (<Login redirectTo='/' className='row' />)} />
          <Route path='/admin' render={() => (<Login redirectTo='/' className='row' />)} />
          <Route path='/avaliacoes' render={() => (<Avaliacoes />)} />
        </div>
      </Provider>
    )
  }
}

export default App
