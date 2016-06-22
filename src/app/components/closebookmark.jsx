import React, { PropTypes, Component } from 'react'

export default class CloseBookmarkElem extends Component {
  render() {
    const { onClick } = this.props
    return (
      <span className="float-right close"><i className="material-icons" onClick={onClick}>close</i></span>
    )
  }
}

CloseBookmarkElem.propTypes = {
  onClick: PropTypes.func.isRequired
}