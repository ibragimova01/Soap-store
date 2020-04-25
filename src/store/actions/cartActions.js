export const addProduct = product => {
  return (dispatch, getState) => {
    dispatch({ type: "ADD_PRODUCT", product })
  }
}

export const removeProduct = id => {
  return (dispatch, getState) => {
    dispatch({ type: "REMOVE_PRODUCT", id })
  }
}