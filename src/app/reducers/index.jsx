import React from 'react'
import { combineReducers } from 'redux'

function selectedPage (state = 'Monkey_Majik', action){
  switch(action.type) {
    case 'SELECT_TITLE':
      return action.title
    default:
      return state
  }
}


function pages (state = {
  isFetching: false,
  items: []
}, action) {
  switch (action.type) {
    case 'REQUEST_PAGES':
      return _.assign({}, state, {
        isFetching: true,
      })
    case 'RECEIVE_POSTS':
      return _.assign({}, state, {
        isFetching: false,
        items: action.pages
      })
    default:
      return state
  }
}


function pagesByTitle(state = {}, action){
  switch (action.type) {
    case 'REQUEST_PAGES':
    case 'RECEIVE_POSTS':
      return _.assign({}, state, {
        [action.title]: pages(state[action.title], action)
      })
    default:
      return state
  }
}


const rootReducer = combineReducers({
  pagesByTitle,
  selectedPage
})

export default rootReducer