import React, { PropTypes, Component } from 'react'

export default class ImgLink extends Component {
  render() {
    const { image } = this.props
    return (
      <img src={image} className="pageImg"/>
    )
  }
}

ImgLink.propTypes = {
  image: PropTypes.any.isRequired
}