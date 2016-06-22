import { connect } from 'react-redux'
import { toggleBookmark } from '../actions'
import BookmarkList from '../components/bookmarklist'

const mapStateToProps = (state, ownProps) => {
  return {
    bookmarkList: state.bookmarkList
  }
}

const FetchBookmarkList = connect(
  mapStateToProps
)(BookmarkList)

export default FetchBookmarkList