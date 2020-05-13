const initState = {

    orders: [

    ]
}

const add = (order, state) => {
  state = {
    ...state, 
    orders: [...state.orders, order]
  }
  console.log(state)
  return state
}

const orderReducer = (state = initState, action) => {

  switch(action.type) {
    case 'ADD_ORDER' :
      state = add(action.order, state) 
      break
    default:
      break
  }
  return state
}

export default orderReducer