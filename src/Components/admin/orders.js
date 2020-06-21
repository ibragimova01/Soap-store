import React from "react";
import { useSelector } from "react-redux";
import OrderRow from "./orderRow";

function CartOrders() {
  const orders = useSelector((state) => state.orders);
  const cartOrders = orders.items.filter((element) => {
    return element.type === "cart" 
      
  });
  console.log(cartOrders, orders);
  if (orders.loading) {
    return <h1>loading...</h1>;
  }
  return (
    <div className="row">
      <div className="col">
        <h1>Orders</h1>
        {cartOrders &&
          cartOrders.map((order) => {
            return (
              <div key={order.id} className="col-12">
                <OrderRow order={order} />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default CartOrders;
