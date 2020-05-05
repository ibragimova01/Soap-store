export const addOrder = order => {
  return (dispatch, getState) => {
    dispatch({ type: "ADD_ORDER", order })
  }
}