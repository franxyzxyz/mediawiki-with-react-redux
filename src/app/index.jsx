import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import App from './components/App'

// Load Reducer
import rootReducer from './reducers'


let store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware
  )
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)