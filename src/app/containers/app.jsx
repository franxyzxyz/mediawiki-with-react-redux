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
    const { selectedPage, pages, isFetching, showBookmark, bookmarkList, imageByTitle } = this.props
    const { image } = imageByTitle[selectedPage] || { image: ""}
    const style = {
      backgroundImage: 'url(' + image + ')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }
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
        <div className="pageContent" style={style}>
          <div className="deco">
            <FetchPage pages={pages}/>
            <FetchImage pageimage={pages}/>
          </div>
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
  const { selectedPage, pagesByTitle, showBookmark, bookmarkList, imageByTitle } = state

  // Mapping the state props (pagesbytitle) to the components
  const {
    isFetching,
    items: pages
  } = pagesByTitle[selectedPage] || {
    isFetching: true,
    items: []
  }
  // console.log(pages)
  // const pageimage = pages.pageimage? 'File:' + pages.pageimage : (_.sample(pages.images).title || "")

  return {
    selectedPage,
    pages,
    isFetching,
    showBookmark,
    bookmarkList,
    imageByTitle
  }
}

export default connect(mapStateToProps)(Wrapper)