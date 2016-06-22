import React, { PropTypes, Component } from 'react'
import { trimmer } from '../utilities/helper'
export default class Pages extends Component {

  render() {
    const { title, images, categories } = this.props.pages
    return (
      <div>
        <h1>{ title }</h1>
        <div className="category">
        {!_.isEmpty(categories) && categories.map((cat, i) =>
            <div key={i} className="subcat"> { trimmer("Category:", cat.title) }</div>
          )
        }

        </div>
      </div>
    )
  }
}

Pages.propTypes = {
  pages: PropTypes.any.isRequired
}