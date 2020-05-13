import React, { Component } from "react";
import ProductList from "../Components/products/list";
import {connect} from "react-redux";
import Search from "../Components/search/search"

class Catalog extends Component {
  state = {
    products: null
  }
  componentDidMount() {
    setTimeout( () => {
      this.setState({
        products: this.props.products
      })
    }, 100)
  }
 
  SearchFilter = e => {
    const products = this.props.products.filter(product => {
      return product.title.toLowerCase().includes(e.target.value.toLowerCase())
    }) 
    this.setState({
      products: products
    })
  }
  render() {
    return (
      <div className="container">
        <div className="row">
      <Search SearchFilter={this.SearchFilter}/>
      </div>
        <ProductList products={this.state.products}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    products: state.product.products
  }
}

export default connect(mapStateToProps)(Catalog)