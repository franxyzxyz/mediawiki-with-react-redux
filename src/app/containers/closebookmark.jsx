import { connect } from 'react-redux'
import { toggleBookmark } from '../actions'
import CloseBookmarkElem from '../components/closebookmark'

const mapStateToProps = (state, ownProps) => {
  return {
    onClick: ownProps.onClick
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(toggleBookmark())
    }
  }
}

const CloseBookmark = connect(
  mapStateToProps,
  mapDispatchToProps
)(CloseBookmarkElem)

export default CloseBookmark