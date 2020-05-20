const initState = {
  items: [],
};

const add = (order, state) => {
  state = {
    ...state,
    items: [...state.items, order],
  };
  return state;
};

const orderReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_ORDER":
      state = add(action.order, state);
      break;
    default:
      break;
  }
  return state;
};

export default orderReducer;
