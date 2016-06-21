import React from 'react'
import 'babel-polyfill'

export function selectTitle (title) {
  return {
    type: 'SELECT_TITLE',
    title
  }
}