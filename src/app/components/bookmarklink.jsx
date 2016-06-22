import React, { PropTypes, Component } from 'react'

export default class BookmarkLink extends Component {
  render() {
    const { onClick, bookmarkList } = this.props
    return (
      <div className="utilBar">
        <a onClick={onClick} className="navLink">BOOKMARK ({bookmarkList.length})</a>
      </div>
    )
  }
}

BookmarkLink.propTypes = {
  onClick: PropTypes.func.isRequired
}