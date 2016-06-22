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

function showBookmark(state = false, action) {
  switch (action.type) {
    case 'TOGGLE_BOOKMARK':
      return !state
    default:
      return state
  }
}

function bookmark(state, action){
  switch(action.type) {
    case 'EDIT_BOOKMARK':
      return action.title
    default:
      return state
  }
}

function bookmarkList(state = [], action){
  switch (action.type) {
    case 'EDIT_BOOKMARK':
      if (_.indexOf(state, action.title) !== -1) {
        return _.without(state, action.title)
      }
      return [
        ...state,
        bookmark(undefined, action)
      ]
    default:
      return state
  }
}

const rootReducer = combineReducers({
  pagesByTitle,
  selectedPage,
  imageByTitle,
  showBookmark,
  bookmarkList
})

export default rootReducer