import React from "react";

const OrderRow = ({order}) => {
  if ( order.type == "cart")
  return (
    <div> 
      <p>
      Id: {order.id},
      name: {order.firstName},
      phone number: {order.phone},
      comments: {order.comment},
      totalProducts: {order.cart.total},
      totalSum: {order.cart.totalSum}
      </p>
    </div>
  )


  return (
    <div> 
      <p>
      Id: {order.id},
      oil: {order.oil},
      extract: {order.extract},
      color: {order.color},
      img: {order.image && order.image.name},
      name: {order.firstName},
      phone number: {order.phone},
      comments: {order.comment}
      </p>
    </div>
  )
}

export default OrderRow