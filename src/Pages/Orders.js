import React, { Component } from 'react'
import {useSelector} from "react-redux";
import OrderIndex from "../Components/orders/index"

function Orders() {
  const orders =  useSelector((state) => state.orders)
    return (
      <div>
        <OrderIndex orders={orders}/>
      </div>
    )
}

export default Orders
