import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchImageIfNeeded } from '../actions'
import ImgLink from '../components/image'
import { trimmer } from '../utilities/helper'

class FetchImage extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { dispatch, selectedPage, pageimage } = this.props
    if (pageimage) {
      dispatch(fetchImageIfNeeded(selectedPage, 'File:' + pageimage))
    }
  }

  componentWillReceiveProps(nextProps) {
    const { dispatch } = this.props
    if (!_.isEmpty(nextProps.pageimage) && !nextProps.isFetching) {
      return dispatch(fetchImageIfNeeded(nextProps.selectedPage, 'File:' +  nextProps.pageimage))
    }
  }

  render() {
    const { image } = this.props
    return (
      <ImgLink image={image} />
    )
  }
}

FetchImage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  pageimage: PropTypes.string.isRequired
}

const mapStateToProps = (state, ownProps) => {
  const { imageByTitle, selectedPage, pagesByTitle } = state
  const { image } = imageByTitle[selectedPage] || {
    image: ""
  }
  const {
    isFetching,
  } = pagesByTitle[selectedPage] || {
    isFetching: true
  }

  const pageimage = !_.isEmpty(ownProps.pageimage)? (ownProps.pageimage.pageimage || trimmer('File:', _.sample(ownProps.pageimage.images).title)) : "";

  return {
    image: image,
    selectedPage,
    pagesByTitle,
    isFetching,
    pageimage: pageimage
  }
}

export default connect(mapStateToProps)(FetchImage)