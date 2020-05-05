const initState = {
  

    // step 1
    color: '',
    
    // step 2
    jobTitle: '',
    jobCompany: '',

    //final step
    firstName: '',
    lastName: '',
    comment: '',
    phone: ''
}

const add = (order, state) => {
  state = {
    ...state, 
    color: order.color,
     jobTitle: order.jobTitle,
     jobCompany: order.jobCompany,

     firstName: order.firstName,
     lastName:  order.lastName,
     comment:  order.comment,
     phone:  order.phone,
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