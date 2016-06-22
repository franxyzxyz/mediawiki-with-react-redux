import React from 'react'
import { combineReducers } from 'redux'
import { snakeCase } from '../utilities/helper'

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


function getImage (state = {
  isFetchingImage: false,
  image: "",
  imgTitle: ""
}, action){
  switch(action.type){
    case 'REQUEST_IMAGE':
      return _.assign({}, state, {
        isFetchingImage: true
      })
    case 'RECEIVE_IMAGE':
      return _.assign({}, state, {
        isFetchingImage: false,
        image: action.image,
        imgTitle: action.imgTitle
      })
  }
}

function imageByTitle(state = {}, action){
  switch (action.type) {
    case 'REQUEST_IMAGE':
    case 'RECEIVE_IMAGE':
      if (!action.title) return state
      return _.assign({}, state, {
        [snakeCase(action.title)]: getImage(state[snakeCase(action.title)], action)
      })
    default:
      return state
  }
}


const rootReducer = combineReducers({
  pagesByTitle,
  selectedPage,
  imageByTitle
})

export default rootReducer