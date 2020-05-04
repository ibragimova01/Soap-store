import React, { Component } from "react";
import {addProduct} from "../../store/actions/cartActions";
import {connect} from "react-redux";
import CartProductRow from "./product-row";
import { Link } from "react-router-dom";
import "./cart.css";

class CartIndex extends Component {
  render() {
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
                  <Link to="#" className="btn btn-danger border-0 w-100 text-light">
                      <div className="bg-danger rounded text-center font-weight-bold h6 m-0 p-4">
                          Оформить заказ
                      </div>
                  </Link>
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
    addProduct: (product) => dispatch(addProduct(product)) 
  }
}


export default connect(null, mapDispatchToProps)(CartIndex);

