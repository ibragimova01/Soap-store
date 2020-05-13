import React from "react";
import OrderRow from "./order-row"

const OrderIndex = ({orders}) => {
  if(orders.items.length) {
    return (
      <div className="row">
        {orders.items && orders.items.map((order) => {  
return (
  <div key={order.id} className="col-12">
    <OrderRow order={order}/>
    </div>
)
          })}
      </div>
    )
  }

  return (
    <div>
      Заказов нет!
    </div>
  )
}

export default OrderIndex