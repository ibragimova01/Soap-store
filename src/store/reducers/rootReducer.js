import productReducer from "./productReducer"
import { combineReducers } from "redux"
import cartReducer from "./cartReducer"

const rootReducer = combineReducers({
  product: productReducer, 
  shoppingCart: cartReducer
})

export default rootReducer 