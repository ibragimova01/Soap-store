const initState = {
  items:[],
  total:0,
  totalSum:0
}

const add = (product, state) => {
let findedProduct = state.items.find(e => e.id === product.id)

  if (findedProduct) {
    state = {
      ...state,
      total: state.total + 1,
      totalSum: state.totalSum + findedProduct.price,
      items: state.items.map((item) => {
        item = {...item};
        if (item.id === product.id) {
          item.quantity+=1
        }
        return item
      })
    }
  } else {
    product.quantity = 1;
    state = {
      ...state,
      total: state.total + 1,
      totalSum: state.totalSum + product.price,
      items: [...state.items, product]
    }
    
  }
  return state
}

const remove = (id, state) => {
let findedProduct = state.items.find(e => e.id === id)

if (findedProduct.quantity > 1) {
  state = {
      ...state,
      total: state.total - 1,
      totalSum: state.totalSum - findedProduct.price,
      items: state.items.map((item) => {
        item = {...item};
        if (item.id === id) {
          item.quantity-=1
        }
        return item
      })
    }
} else {
  state = {
      ...state,
      total: state.total - 1,
      totalSum: state.totalSum - findedProduct.price,
      items: state.items.filter((item) => {
        return item.id !== id
      })
    }
}
return state
}

const deleteProduct = (product, state) => {
  let findedProduct = state.items.find(e => e.id === product.id)
  if  (findedProduct) {
    
    state = {
      ...state, 
      totalSum: state.totalSum - findedProduct.price * findedProduct.quantity, 
      total: state.total - findedProduct.quantity,
      items: state.items.filter(item => {
        return item.id !== product.id
      })
  
    }
  }
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
  case "DELETE_PRODUCT":
    state = deleteProduct(action.product, state)
    break
  default:
    break
}
console.log(state)
return state 
}
export default cartReducer