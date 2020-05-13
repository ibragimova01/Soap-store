import React from "react";

const OrderRow = ({order}) => {
  return (
    <div> 
      <p>
        {order.id}
      </p>
    </div>
  )
}

export default OrderRow