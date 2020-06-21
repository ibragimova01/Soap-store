import React from "react";
import { useSelector } from "react-redux";
import OrderRow from "./orderRow";
import DataTable from 'react-data-table-component';
import OrderDetails from "./orderDetails";

function CartOrders() {
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
  ];
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
          <DataTable
            title="Individual orders"
            columns={columns}
            data={cartOrders}
            expandableRows
            expandableRowsComponent={<OrderDetails />}
          />
      </div>
    </div>
  );
}

export default CartOrders;
