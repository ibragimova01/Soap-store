import React from "react";
import { useSelector } from "react-redux";
import OrderIndex from "../Components/orders/index";
import axios from "axios";

function Orders() {
  const orders = useSelector((state) => state.orders);
  const products = useSelector((state) => state.product.products);

  const handleSubmit =() => {
    console.log(products)
    products.forEach(element => {
      axios.post("https://lavanda-5003b.firebaseio.com/products.json", 
      element)
      .then(data =>{
        console.log(data)
  
      })
      .catch(data =>{
        console.log(data)
      })
    });
  }

  return (
    <div className="container">
      <button onClick={handleSubmit}>Import products to firebase</button>
      <OrderIndex orders={orders} />
    </div>
  );
}

export default Orders;
