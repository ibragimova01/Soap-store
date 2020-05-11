const initState = {
  

    // step 1
    color: '',
    
    // step 2
    oil: '',

    //final step
    firstName: '',
    phone: '',
    comment: '',
    image: null
}

const add = (order, state) => {
  state = {
    ...state, 
      color: order.color,
      oil: order.oil,

      firstName: order.firstName,
      comment:  order.comment,
      phone:  order.phone,
      image: order.image
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