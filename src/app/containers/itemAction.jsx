import { connect } from 'react-redux'
import { selectTitle, addBookmark, editBookmark, popUp, disabledPopUp } from '../actions'
import Item from '../components/item'
import { snakeCase } from '../utilities/helper'

const mapStateToProps = (state, ownProps) => {
  return {
    item: ownProps.item,
    onClick: ownProps.onClick,
    onFav: ownProps.onFav,
    showBookmark: state.showBookmark
  }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps;
  const { item } = ownProps
  const { showBookmark } = stateProps
  return {
    item,
    showBookmark,
    onClick: () => {
      dispatch(selectTitle(snakeCase(ownProps.item)))
    },
    onFav: () => {
      if (!showBookmark){
        dispatch(popUp());
        setTimeout(() => dispatch(disabledPopUp()), 500)
        dispatch(addBookmark(snakeCase(ownProps.item)))
      } else {
        dispatch(editBookmark(snakeCase(ownProps.item)))
      }
    }
  };

}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(selectTitle(snakeCase(ownProps.item)))
    },
    onFav: () => {
      dispatch(editBookmark(snakeCase(ownProps.item)))
      dispatch(popUp());
      setTimeout(() => dispatch(disabledPopUp()), 500)
    }
  }
}

const ItemLink = connect(
  mapStateToProps,
  null,
  mergeProps
)(Item)

export default ItemLink