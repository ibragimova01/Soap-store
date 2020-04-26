import React, { Component } from "react";
import CartIndex from "../Components/cart/index";
import {connect} from "react-redux";

class Cart extends Component {

  render() {
    const {shoppingCart} = this.props
    console.log(shoppingCart)
    return (
      <CartIndex shoppingCart={shoppingCart}/>
    )
  }
}

const mapStateToProps = state => {
  return {
    shoppingCart: state.shoppingCart
  }
}


export default connect(mapStateToProps)(Cart)