import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { selectTitle, fetchPagesIfNeeded } from '../actions'

import ItemLink from '../containers/itemAction'
import FetchPage from '../containers/fetchpage'
import FetchImage from '../containers/fetchimage'
import FetchBookmark from '../containers/fetchbookmark'
import CloseBookmark from '../containers/closebookmark'

const pageList = ['Monkey Majik','React (JavaScript library)','Node.js','Underscore.js','Neo4j','Badminton','D3.js','HAECO','Aeronautics','Hong Kong']

class Wrapper extends Component {
  constructor(props) {
    super(props)
  }

  // Invoked Once, Immediately after initial rendering
  componentDidMount() {
    const { dispatch, selectedPage } = this.props
    dispatch(fetchPagesIfNeeded(selectedPage))
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedPage !== this.props.selectedPage) {
      const { dispatch, selectedPage } = nextProps
      dispatch(fetchPagesIfNeeded(selectedPage))
    }
  }

  render() {
    const { selectedPage, pages, isFetching, showBookmark, bookmarkList } = this.props
    return (
      <div className="contentWrapper">
        <div className="pageNav">
          {showBookmark &&
          <div className="bookmarkContainer">
            <CloseBookmark />
            <h2>BOOKMARKED PAGES</h2>
            <FetchBookmark bookmarkList={bookmarkList}/>
          </div>
          }
          {!showBookmark &&
            <ul className="pageItem">
            {pageList.map((page, i) =>
              <ItemLink item={page}  key={i}/>
            )}
            </ul>
          }
        </div>
        <div className="pageContent">
          <FetchPage pages={pages} />
          <FetchImage pageimage={pages.pageimage}/>
        </div>
      </div>
    )
  }
}

Wrapper.propTypes = {
  pages: PropTypes.any.isRequired,
  selectedPage: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  showBookmark: PropTypes.bool.isRequired
}

function mapStateToProps(state) {
  // connecting state datat to the components as props
  const { selectedPage, pagesByTitle, showBookmark, bookmarkList } = state

  // Mapping the state props (pagesbytitle) to the components
  const {
    isFetching,
    items: pages
  } = pagesByTitle[selectedPage] || {
    isFetching: true,
    items: []
  }


  return {
    selectedPage,
    pages,
    isFetching,
    showBookmark,
    bookmarkList
  }
}

export default connect(mapStateToProps)(Wrapper)