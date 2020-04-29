import  React, { Component } from "react";
import {connect} from "react-redux";
import BackBtn from "../Components/back-btn"


class Details extends Component {
  state = {
    product:{}
  }
  componentDidMount() {
    let id = this.props.match.params.details_id;


    const { products } = this.props
    const product = products.find(e => e.id == id)


    this.setState({
      product: {...product}
    }) 
  
  }
  
  render() {
    
    return (
      <div className="detailsContainer">
        <h4>{this.state.product.title}</h4>
        <span>{this.state.product.price} сом</span>
        <div>{this.state.product.info}</div>
        <div>{this.state.product.description}</div>
        <img src={`../assets/images/${this.state.product.image}`} className="details-img" alt="..."/>
        <BackBtn/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    products: state.product.products
  }
}

export default connect(mapStateToProps)(Details)