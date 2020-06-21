import React from "react";
import DataTable, { createTheme } from 'react-data-table-component';

function OrderDetails({data}) {
  const columns = [
    {
      name: 'Title',
      selector: 'title',
      sortable: true,
    },
    {
      name: 'Quantity',
      selector: 'quantity',
      sortable: true,
    },
    {
      name: 'price',
      selector: 'price',
      sortable: true,
    },
  ];
  
  createTheme('solarized', {
    text: {
      primary: '#268bd2',
      secondary: '#2aa198',
    },
    background: {
      default: '#002b36',
    },
    context: {
      background: '#cb4b16',
      text: '#FFFFFF',
    },
    divider: {
      default: '#073642',
    },
    action: {
      button: 'rgba(0,0,0,.54)',
      hover: 'rgba(0,0,0,.08)',
      disabled: 'rgba(0,0,0,.12)',
    },
  });
  return (
    
      <div className="col bg-secondary">
          <DataTable
            title="Items"
            columns={columns}
            data={data.cart.items}
            theme="solarized"
          />
      </div>
    
  );
}

export default OrderDetails;
