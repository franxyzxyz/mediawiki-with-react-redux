import React from 'react'
import { combineReducers } from 'redux'

function selectedPage (state = 'Node.js', action){
  switch(action.type) {
    case 'SELECT_TITLE':
      return action.title
    default:
      return state
  }
}

const rootReducer = combineReducers({
  selectedPage
})

export default rootReducer