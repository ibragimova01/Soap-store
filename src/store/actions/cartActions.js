export const addProduct = (product) => {
  return (dispatch) => {
    dispatch({ type: "ADD_PRODUCT", product });
  };
};

export const removeProduct = (id) => {
  return (dispatch) => {
    dispatch({ type: "REMOVE_PRODUCT", id });
  };
};

export const deleteProduct = (product) => {
  return (dispatch) => {
    dispatch({ type: "DELETE_PRODUCT", product });
  };
};
