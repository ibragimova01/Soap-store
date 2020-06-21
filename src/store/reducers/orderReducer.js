import axios from "axios";

const initState = {
  items: [],
  loading: true
};

const add = (order, state) => {
  state = {
    ...state,
    items: [...state.items, order],
  };

  axios.post("https://lavanda-5003b.firebaseio.com/orders.json", order)
  .then(data => {
    console.log(data)
    alert("success")
  })
  .catch(data =>{
    console.log(data)
    alert("error")
  })
  return state;
};

const orderReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_ORDER":
      state = add(action.order, state);
      break;
    default:
      axios.get("https://lavanda-5003b.firebaseio.com/orders.json")
      .then(data =>{
        
        state.items = []
        for(let key in data.data) {
          state.items.push(data.data[key])
        }
        state.loading = false
        
        
      })
    
      .catch(data =>{
        console.log(data)
        alert("error products")
      })
      break;
  }
  return state;
};

export default orderReducer;
