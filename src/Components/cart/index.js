import React, { Component } from "react";
import {addProduct} from "../../store/actions/cartActions";
import {connect} from "react-redux";
import CartProductRow from "./product-row";
import { Link } from "react-router-dom";
import "./cart.css";
import PersonalInfo from "../form/PersonalInfo"
import {addOrder} from "../../store/actions/orderActions";

class CartIndex extends Component {
  state = {
    firstName: '',
    phone: '', 
    comment: ''
  }
  addOrder() {
    const {shoppingCart} = this.props
    const order={
      id: Math.random(),
      firstName: this.state.firstName,
      phone: this.state.phone,
      comment: this.state.comment,
      cart: shoppingCart,
      type: 'cart'
    }
    console.log(order)
    this.props.addOrder(order)
  }
  handleChange = input => e => {
    this.setState({[input]: e.target.value});
    console.log(e.target.value, input)
  }
  render() {
    const { firstName, phone, comment} = this.state
    const {shoppingCart} = this.props

    console.log(shoppingCart)

    if (shoppingCart.items.length) {
      let background = {
        background: "rgba(0, 0, 0, 0.03)"
      }
      return (
        <div className="container">
        <div className="row d-none d-md-flex">
              <div className="col-4 h3">
                  Товар
              </div>
              <div className="col-2 h3">
                  Цена
              </div>
              <div className="col-2 h3">
                  Кол-во
              </div>
              <div className="col-3 h3">
                  Сумма
              </div>
          </div>
      
          {shoppingCart.items && shoppingCart.items.map((product) => {  
return (
  <div key={product.id}><CartProductRow product={product} /></div>
)
          })}
          <div className="row ">
            <div className="col-12">
              <PersonalInfo
              handleChange = {this.handleChange}
              firstName = {firstName}
              phone = {phone}
              comment ={comment}
              />
            </div>
          </div>
          <div className="row justify-content-end mt-5 py-5">
              <div className="col-12 col-sm-8 col-md-5 col-lg-4 d-flex p-3" style={background}>
                  <div className="col-6 m-0 h6 font-weight-bold">
                      Итого
                  </div>
                  <div className="col-6 m-0 h5 font-weight-bold">
                      {shoppingCart.totalSum } сом
                  </div>
              </div>
              <div className="w-100"></div>
              <div className="col-12 col-sm-8 col-md-5 col-lg-4 p-0 mt-1">
                  <button onClick={() => {this.addOrder()}} className="btn btn-danger border-0 w-100 text-light">
                      <div className="bg-danger rounded text-center font-weight-bold h6 m-0 p-4">
                          Оформить заказ
                      </div>
                  </button>
              </div>
              
          </div>
          </div>
      )
    }

    return (
      <div className="container">
      <h1 className="text-uppercase h3 py-4">Корзина</h1>
          
      
          <div className="row justify-content-center">
              <p className="h3 text-muted">Корзина пуста!</p>
          </div>
    </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addProduct: (product) => dispatch(addProduct(product)),
    addOrder: (order) => dispatch(addOrder(order))
  }
}


export default connect(null, mapDispatchToProps)(CartIndex);

