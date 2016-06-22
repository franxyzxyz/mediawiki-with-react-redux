import React, { PropTypes, Component } from 'react'

export default class Item extends Component {
  render() {
    const { item, onClick, onFav, showBookmark } = this.props
    return (
      <li>
        <a onClick={onClick}>{item}</a>
        {!showBookmark &&
          <a><i className="material-icons hearted" onClick={onFav}>favorite</i></a>
        }
        {showBookmark &&
          <a><i className="material-icons close" onClick={onFav}>close</i></a>
        }
      </li>
    )
  }
}

Item.propTypes = {
  item: PropTypes.any.isRequired,
  onClick: PropTypes.func.isRequired,
  onFav: PropTypes.func.isRequired,
  showBookmark: PropTypes.bool.isRequired
}