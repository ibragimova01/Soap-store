import React, { useState } from "react";
import IndividualOrders from "./individual";
import CartOrders from "./orders";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Admin() {
  const orders = useSelector(state => state.orders) 
  const cartOrders = orders.items.map(element => {
    if( element.type === "cart") { return element }
  })
  console.log(cartOrders, orders)
    return (
      <BrowserRouter>
      <div className="row">
        <nav className="nav col-3 flex-column">
          <Link className="nav-link active" to="/admin/orders">Обычные заказы</Link>
          <Link className="nav-link" to="/admin/individual">Индивидуальные заказы</Link>
        </nav>
        <div className="col">
        <Switch>
          <Route path="/admin/orders" component={CartOrders} />
          <Route path="/admin/individual" component={IndividualOrders} />
        </Switch>
        </div>
      </div>
      </BrowserRouter>
    )
}

export default Admin;