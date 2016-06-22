import { connect } from 'react-redux'
import { fetchPagesIfNeeded, fetchPages, selectTitle } from '../actions'
import Item from '../components/item'
import { snakeCase } from '../utilities/helper'

const mapStateToProps = (state, ownProps) => {
  return {
    item: ownProps.item,
    onClick: ownProps.onClick
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(selectTitle(snakeCase(ownProps.item)))
    }
  }
}

const ItemLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Item)

export default ItemLink