import { connect } from 'react-redux'
import { toggleBookmark } from '../actions'
import BookmarkLink from '../components/bookmarklink'

const mapStateToProps = (state, ownProps) => {
  return {
    onClick: ownProps.onClick,
    bookmarkList: state.bookmarkList
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(toggleBookmark())
    }
  }
}

const ViewBookmark = connect(
  mapStateToProps,
  mapDispatchToProps
)(BookmarkLink)

export default ViewBookmark