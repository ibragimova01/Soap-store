const initState = {
  shoppingCart: {
    items:[],
    total:0,
    totalSum:0
  }
}

const add = (product, state) => {
  let findedProduct = state.shoppingCart.items.find(e => e.id === product.id)

    if (findedProduct) {
      findedProduct.quantity+=1;
      state.shoppingCart.total+=1;
      state.shoppingCart.totalSum+=findedProduct.price;
    } else {
      product.quantity = 1;
      state.shoppingCart.items.push(product);
      state.shoppingCart.total+=1;
      state.shoppingCart.totalSum+=product.price;
    }
    console.log(state.shoppingCart)
    return state
}

const remove = (id, state) => {
  let findedProduct = state.shoppingCart.items.find(e => e.id === id)

  if (findedProduct.quantity > 1) {
    findedProduct.quantity-=1;
    state.shoppingCart.total-=1;
    state.shoppingCart.totalSum-=findedProduct.price;
  } else {
    state.shoppingCart.items = state.shoppingCart.items.filter(product => {
      return findedProduct.id !== product.id
    })
  
    state.shoppingCart.total-=1;
    state.shoppingCart.totalSum-=findedProduct.price;
  }
  console.log(state.shoppingCart)
  return state
}

const cartReducer = (state = initState, action) => {
  switch(action.type) {
    case "ADD_PRODUCT":
      state = add(action.product, state) 
      break 
    case "REMOVE_PRODUCT":
      state = remove(action.id, state)
      break
    default:
      break
  }
  return state 
}
export default cartReducer 
