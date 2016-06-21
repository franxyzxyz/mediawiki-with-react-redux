import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { selectTitle } from '../actions'

const pageList = ['Monkey_Majik','React_(JavaScript_library)','Node.js','Lodash','Neo4j','Badminton','D3.js','HAECO','Aeronautics','Hong_Kong']

class Wrapper extends Component {
  constructor(props) {
    super(props)
  }

  // Invoked Once, Immediately after initial rendering
  componentDidMount() {
    const { dispatch, selectedPage } = this.props
    dispatch(selectTitle(selectedPage))
  }

  render() {
    return (
      <div>
        <ul className="pageItem">
        {pageList.map((page, i) =>
          <li key={i}>
            {page}
          </li>
        )}
        </ul>
      </div>
    )
  }
}

Wrapper.propTypes = {
  selectedPage: PropTypes.string.isRequired
}

function mapStateToProps(state) {
  // connecting state datat to the components as props
  const { selectedPage } = state

  return {
    selectedPage
  }
}

export default connect(mapStateToProps)(Wrapper)