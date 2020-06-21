import React, { useState } from "react";
import { useSelector } from "react-redux";
import OrderRow from "./orderRow";
import DataTable from 'react-data-table-component';

function IndividualOrders() {
  const columns = [
    {
      name: 'First Name',
      selector: 'firstName',
      sortable: true,
    },
    {
      name: 'Phone',
      selector: 'phone',
      sortable: true,
    },
    {
      name: 'Comment',
      selector: 'comment',
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
          <DataTable
            title="Individual orders"
            columns={columns}
            data={cartOrders}
          />
        </div>
      </div>
    )
}

export default IndividualOrders;