import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Pages from '../components/page'

class FetchPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { pages } = this.props
    return (
      <Pages pages={pages}/>
    )
  }
}

FetchPage.propTypes = {
  pages: PropTypes.any.isRequired,
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => {
  const { pagesByTitle, selectedPage } = state

  return {
    pages: ownProps.pages
  }
}

export default connect(mapStateToProps)(FetchPage)