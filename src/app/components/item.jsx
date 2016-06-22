import React, { PropTypes, Component } from 'react'

export default class Item extends Component {
  render() {
    const { item, onClick } = this.props
    return (
      <li onClick={onClick}>{item}</li>
    )
  }
}

Item.propTypes = {
  item: PropTypes.any.isRequired,
  onClick: PropTypes.func.isRequired
}