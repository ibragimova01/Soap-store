import React, { useState } from "react";
import { useSelector } from "react-redux";
import OrderRow from "./orderRow";
import DataTable from 'react-data-table-component';

function IndividualOrders() {
  const columns = [
    {
      name: 'Title',
      selector: 'title',
      sortable: true,
    },
    {
      name: 'Year',
      selector: 'year',
      sortable: true,
    },
  ];
  const orders = useSelector((state) => state.orders);
  const cartOrders = orders.items.filter((element) => {
    return element.type === "individual" 
  });
  if (orders.loading) {
    return <h1>loading...</h1>;
  }
    return (
      <div className="row">
      
        <div className="col">
          <h1>Individual</h1>
          {cartOrders &&
          cartOrders.map((order) => {
            return (
              <div key={order.id} className="col-12">
                <OrderRow order={order} />
              </div>
            );
          })}
          <DataTable
        title="Arnold Movies"
        columns={columns}
        data={data}
      />
        </div>
      </div>
    )
}

export default IndividualOrders;