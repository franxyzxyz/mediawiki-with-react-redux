import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchImageIfNeeded } from '../actions'
import ImgLink from '../components/image'

class FetchImage extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { dispatch, selectedPage, pageimage } = this.props
    if (pageimage) {
      dispatch(fetchImageIfNeeded(selectedPage))
    }
  }

  componentWillReceiveProps(nextProps) {
    const { dispatch, selectedPage } = this.props

    if (!_.isEmpty(nextProps.pageimage)){
      dispatch(fetchImageIfNeeded(selectedPage, 'File:' + nextProps.pageimage))
      // console.log(nextProps.pageimage)
    }
    // if (!_.isEmpty(nextProps.pages)) {
    //   let img = nextProps.pages.pageimage? 'File:'+nextProps.pages.pageimage : nextProps.pages.images[0].title;
    //   if (!_.isEmpty(img)){
    //     dispatch(fetchImageIfNeeded(nextProps.pages.title, img))
    //   }
    // }
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
  const { imageByTitle, selectedPage } = state
  const { image } = imageByTitle[selectedPage] || {
    image: ""
  }

  return {
    image: image,
    selectedPage,
    pageimage: ownProps.pageimage || ""
  }
}

export default connect(mapStateToProps)(FetchImage)