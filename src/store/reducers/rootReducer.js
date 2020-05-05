import productReducer from "./productReducer"
import { combineReducers } from "redux"
import cartReducer from "./cartReducer"
import orderReducer from "./orderReducer"

const rootReducer = combineReducers({
  product: productReducer, 
  shoppingCart: cartReducer,
  order: orderReducer
})

export default rootReducer 