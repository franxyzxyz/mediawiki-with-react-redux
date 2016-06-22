import React from 'react'
import 'babel-polyfill'

export function selectTitle (title) {
  return {
    type: 'SELECT_TITLE',
    title
  }
}

export function requestPages (title) {
  return {
    type: 'REQUEST_PAGES',
    title
  }
}

export function receivePages (title, json) {
  return {
    type: 'RECEIVE_POSTS',
    title,
    pages: json[0]
  }
}

export function fetchPages (title) {
  return dispatch => {
    /*
      Dispatch 2 actions
        1. Dispatch request page action
        2. Fetch data from mediawiki and dispatch received page upon successful return
     */
    dispatch(requestPages(title))
    return $.getJSON(`http://en.wikipedia.org/w/api.php?action=query&prop=categories|images|pageimages&rvprop=content&titles=${title}&format=json&callback=?`)
      .then(function(data){
        dispatch(receivePages(title, _.values(data.query.pages)))
      })
  }
}

/*
  Avoid repetitive external api call
 */
export function shouldFetchPages(state, title){
  const pages = state.pagesByTitle[title]
  if (!pages){
    return true
  } else if (pages.isFetching) {
    return false
  }
}

export function fetchPagesIfNeeded(title){
  return (dispatch, getState) => {
    if (shouldFetchPages(getState(), title)) {
      return dispatch(fetchPages(title))
    }
  }
}