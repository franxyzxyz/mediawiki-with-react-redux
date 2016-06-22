import React, { PropTypes, Component } from 'react'
import ItemLink from '../containers/itemAction'
import { reverseSnakeCase } from '../utilities/helper'

export default class BookmarkList extends Component {
  render() {
    const { bookmarkList } = this.props
    return (
      <div>
        <p className="bookmarkRecord">( {bookmarkList.length} RECORD{ bookmarkList.length > 1 &&
          <span>S</span>
        } FOUND )</p>
        <ul className="bookmarkList">
          {bookmarkList.map((bm, i) =>
            <ItemLink item={reverseSnakeCase(bm)} key={i}/>
          )}
        </ul>
      </div>
    )
  }
}

BookmarkList.propTypes = {
  bookmarkList: PropTypes.array.isRequired
}