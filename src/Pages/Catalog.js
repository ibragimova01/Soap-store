import React, { Component } from "react";
import ProductList from "../Components/products/list";
import {connect} from "react-redux";
import Search from "../Components/search/search"

class Catalog extends Component {
  state = {
    products: null,
    search: ""
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
      products: products,
      search: e.target.value.toLowerCase()

    })
  }
  render() {
    return (
      <div className="container">
        <div className="row">
      <Search SearchFilter={this.SearchFilter} search={this.state.search}/>
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