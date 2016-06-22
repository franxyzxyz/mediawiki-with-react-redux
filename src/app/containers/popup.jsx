import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import PopUp from '../components/popup'
import { disabledPopUp } from '../actions'

class PopUpContainer extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(disabledPopUp())
  }
  render() {
    const { popup } = this.props
    return (
      <PopUp popup={popup}/>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    popup: state.popup
  }
}

// const PopUpContainer = connect(
//   mapStateToProps
// )(PopUp)

export default connect(mapStateToProps)(PopUpContainer)