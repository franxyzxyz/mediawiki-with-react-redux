import React, { PropTypes, Component } from 'react'

export default class PopUp extends Component {
  render() {
    const { popup } = this.props
    return (
      <div>
      {popup &&
        <div className="popUp">
          <i className="material-icons">favorite</i>
        </div>
      }
      </div>
    )
  }
}

PopUp.propTypes = {
  popup: PropTypes.bool.isRequired
}