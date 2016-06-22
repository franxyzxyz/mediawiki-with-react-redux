import React from 'react'
import '../fonts/league-spartan-master/_webfonts/stylesheet.scss'
import '../styles/index.scss'
import Wrapper from '../containers/app'
import ViewBookmark from '../containers/viewbookmark'
import PopUpContainer from '../containers/popup'

const App = () => (
  <div>
    <h1>POCKET - wiki</h1>
    <ViewBookmark />
    <Wrapper />
    <PopUpContainer />
  </div>
)

export default App