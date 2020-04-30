import  React, { Component } from "react";
import {connect} from "react-redux";
import BackBtn from "../Components/back-btn";
import "../index.css";


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
      <div className="details-inner">
        <div className="details-container">
        <div className="img-box">
          <img src={`../assets/images/${this.state.product.image}`} className="details-img" alt="..."/>
        </div>
        <div className="details">
      <div className="content">
        <h2 className='title'>{this.state.product.title}</h2>
        <p>
        {this.state.product.description}
        </p>
        <h3>{this.state.product.price} сом</h3>
        <BackBtn/>
      </div>
    </div>
    </div>
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