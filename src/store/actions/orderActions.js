export const addOrder = (order) => {
  return (dispatch) => {
    dispatch({ type: "ADD_ORDER", order });
  };
};
