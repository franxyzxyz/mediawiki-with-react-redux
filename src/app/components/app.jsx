import React from 'react'
import '../fonts/league-spartan-master/_webfonts/stylesheet.scss'
import '../styles/index.scss'
import Wrapper from '../containers/app'
import ViewBookmark from '../containers/viewbookmark'

const App = () => (
  <div>
    <h1>POCKET - wiki</h1>
    <ViewBookmark />
    <Wrapper />
  </div>
)

export default App