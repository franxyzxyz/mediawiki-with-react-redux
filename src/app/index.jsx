import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import App from './components/App'

// Load Reducer
import rootReducer from './reducers'

const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {}

import { addBookmark } from './actions'

let store = createStore(
  rootReducer,
  persistedState,
  applyMiddleware(
    thunkMiddleware
  )
)

/**
 * Subscribe the state to localstorag for easier retrieval
 */
store.subscribe(()=>{
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)