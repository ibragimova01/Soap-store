import React, { Component } from "react";
import {
  Navbar,
  Nav,
  Container
} from "react-bootstrap";
import logo from "../header/logo.png";
import { Switch, Route, NavLink } from "react-router-dom";
import Catalog from '../../Pages/Catalog';
import Cart from '../../Pages/Cart';
import { connect } from 'react-redux';
import "../header/header.css";

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar className="navbar" collapseOnSelect expand="md" bg="light" variant="light" >
          <Container>
            <Navbar.Brand to="/">
              <img
                src={logo}
                height="60"
                width="100"
                className="d-inline-block align-top"
                alt="Logo"
              />
            </Navbar.Brand>
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto ">
              <NavLink className="mx-2 nav-title" to ="/catalog"> Каталог</NavLink>
              <NavLink className="mx-2 position-relative" to ="/cart"><i className="fa fa-cart-plus m-icons"/><span className="badge cart-status badge-pill badge-danger">{this.props.shoppingCart.total}</span></NavLink>
            </Nav>
            </Navbar.Collapse>
          </Container>
          </Navbar>
            <Switch>
              <Route exact path="/catalog" component={Catalog} />
              <Route exact path="/cart" component={Cart} />
            </Switch>
          </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    shoppingCart: state.shoppingCart
  }
}

export default connect(mapStateToProps)(Header)