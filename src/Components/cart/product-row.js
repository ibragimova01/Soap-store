import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addProduct,
  removeProduct,
  deleteProduct,
} from "../../store/actions/cartActions";

class CartProductRow extends Component {
  shop(product) {
    this.props.addProduct(product);
  }
  remove(id) {
    this.props.removeProduct(id);
  }
  deleteCartProduct(product) {
    this.props.deleteProduct(product);
  }

  render() {
    let width = {
      width: "100px",
    };
    let image = {
      minWidth: "100px",
      height: "100px",
    };

    const { product } = this.props;
    return (
      <div className="row border-top border-bottom py-3 align-items-center">
        <div className="col-2 col-md-4 col-lg-4 order-0 d-flex align-items-center">
          <img src={`./assets/images/${product.image}`} style={image} alt="" />
          <p className=" m-0 ml-3 font-weight-bold">{product.title}</p>
        </div>
        <div className="col-2 col-md-2 my-3 my-md-0 col-lg-2 order-2">
          <p className=" m-0">
            <span className="d-inline-block d-md-none">Цена:&nbsp;</span>
            {product.price} сом
          </p>
        </div>
        <div className="col-lg-2 col-md-3 col-2 my-3 my-md-0 order-3">
          <div
            className="d-flex ml-auto ml-md-0 justify-content-between align-items-center"
            style={width}
          >
            <span
              className="pointer cart-btn rounded-circle p-2 remove_book d-flex justify-content-center align-items-center"
              onClick={() => {
                this.remove(product.id);
              }}
            >
              -
            </span>
            <span className="mx-2">{product.quantity}</span>
            <span
              className="pointer cart-btn rounded-circle buy_book p-2 d-flex justify-content-center align-items-center"
              onClick={() => {
                this.shop(product);
              }}
            >
              +
            </span>
          </div>
        </div>
        <div className="col-lg-3 col-md-2 col-1 order-5 d-flex align-items-center">
          <p className="d-none m-0 text-left font-weight-bold">
            <span className="d-inline-block d-md-none">Итого:&nbsp;</span>
            {product.quantity * product.price} сом
          </p>
        </div>
        <div className="col-1 align-self-md-center align-self-start order-1 order-md-last">
          <span
            className="pointer cart-btn rounded-circle d-flex justify-content-center align-items-center p-2 delete_book"
            onClick={() => {
              this.deleteCartProduct(product);
            }}
          >
            &times;
          </span>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addProduct: (product) => dispatch(addProduct(product)),
    removeProduct: (id) => dispatch(removeProduct(id)),
    deleteProduct: (product) => dispatch(deleteProduct(product)),
  };
};

export default connect(null, mapDispatchToProps)(CartProductRow);