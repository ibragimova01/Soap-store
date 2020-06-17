import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../header/logo.png";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import "../header/header.css";
import { logout } from "../../store/actions/userActions";

class Header extends Component {
  loggedUser = () => {

    const {users} = this.props
    const foundUser = users.find(u => u.logged===true)
    console.log(foundUser, foundUser===undefined)
    if(foundUser===undefined) {
      return false
    } else {
      return foundUser ? foundUser : false
    }
  }
  logout(user) {
    this.props.logout(user)
  }
  render() {
    const user = this.loggedUser()
    return (
      <Navbar
        className="navbar"
        collapseOnSelect
        expand="md"
        fixed="top"
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
              {
                this.loggedUser()
                ?
              <NavLink className="mx-2 nav-title" to="/order-list">
                Список заказов
              </NavLink>
                :
              ""
              }
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
              {
                
                this.loggedUser()
                ?
              <NavLink to="/" className="mx-2 nav-title" onClick={() => {this.logout(user)}}>
                {user.email.charAt(0)}
                &nbsp;
                Выйти
              </NavLink>
                :
              <NavLink className="mx-2 nav-title" to="/login">
                Войти
              </NavLink>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

const mapDispatchToProps = { logout };


const mapStateToProps = (state) => {
  return {
    shoppingCart: state.shoppingCart,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
