import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../header/logo.png";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import "../header/header.css";

class Header extends Component {
  render() {
    return (
      <Navbar
        className="navbar"
        collapseOnSelect
        expand="md"
      >
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <NavLink exact to="/">
            <img
              src={logo}
              height="60"
              width="100"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </NavLink>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto ">
              <NavLink className="mx-2 nav-title" to ="/">
                <i className="fa fa-home m-icons"/>
              </NavLink>
              <NavLink className="mx-2 nav-title" to="/order-list">
                Список заказов
              </NavLink>
              <NavLink className="mx-2 nav-title" to="/order">
                Мыло на заказ
              </NavLink>
              <NavLink className="mx-2 nav-title" to="/catalog">
                {" "}
                Каталог
              </NavLink>
              <NavLink className="mx-2 position-relative" to="/cart">
                <i className="fa fa-cart-plus m-icons" />
                <span className="badge cart-status badge-pill badge-danger">
                  {this.props.shoppingCart.total}
                </span>
              </NavLink>
              <NavLink className="mx-2 nav-title" to="/login">
                Войти
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    shoppingCart: state.shoppingCart,
  };
};

export default connect(mapStateToProps)(Header);
