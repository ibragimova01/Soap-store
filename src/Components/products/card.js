import React, { Component } from "react";
import {addProduct} from "../../store/actions/cartActions";
import {connect} from "react-redux";
import "./card.css";

 class ProductCard extends Component {
  shop(product) {
    this.props.addProduct(product)
  }
  render() {
    return (
      <div className="card" key = {this.props.product.id}>
        <div className="card-img__wrapper">
            <img src={`./assets/images/${this.props.product.image}`} className="card-img card-img-top" alt="..."/>
        </div>
        <div className="card-body">
    <h5 className="card-title">{this.props.product.title}</h5>
          <p className="card-price">{this.props.product.price} сом</p>
          <button onClick={() => {this.shop(this.props.product)}} className="btn-card btn-primary">В корзину</button>
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

export default connect(null, mapDispatchToProps)(ProductCard)

