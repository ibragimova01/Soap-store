import productReducer from "./productReducer";
import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import orderReducer from "./orderReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  product: productReducer,
  shoppingCart: cartReducer,
  orders: orderReducer,
  users: userReducer
});

export default rootReducer;
