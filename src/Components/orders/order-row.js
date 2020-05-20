import React from "react";

const OrderRow = ({ order }) => {
  if (order.type === "cart")
    return (
      <div>
        Id: {order.id}, name: {order.firstName}, phone number: {order.phone},
        comments: {order.comment}, totalProducts: {order.cart.total}, totalSum:{" "}
        {order.cart.totalSum}
      </div>
    );

  return (
    <div>
      Id: {order.id}, oil: {order.oil}, extract: {order.extract}, color:{" "}
      {order.color}, img: {order.image && order.image.name}, name:{" "}
      {order.firstName}, phone number: {order.phone}, comments: {order.comment}
    </div>
  );
};

export default OrderRow;
