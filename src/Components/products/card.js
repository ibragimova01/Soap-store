
import React, { Component } from "react";
import {addProduct} from "../../store/actions/cartActions";
import {connect} from "react-redux";

 class ProductCard extends Component {
  shop(product) {
    this.props.addProduct(product)
  }
  render() {
    return (
      <div className="card" key = {this.props.product.id}>
        <img src={`./assets/images/${this.props.product.image}`} className="card-img-top" alt="..."/>
        <div className="card-body">
    <h5 className="card-title">{this.props.product.title}</h5>
          <p className="card-text">{this.props.product.price}</p>
          <button onClick={() => {this.shop(this.props.product)}} href="#" className="btn btn-primary">В корзину</button>
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

