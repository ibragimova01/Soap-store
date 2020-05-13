import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addOrder } from '../../store/actions/orderActions'

class AllInfo extends Component {

  addOrder() {
    const order={
      color: this.props.color,
      firstName: this.props.firstName,
      phone: this.props.phone,
      comment: this.props.comment,
      image: this.props.image,
      oil: this.props.oil,
      extract: this.props.extract
    }
    this.props.addOrder(order)
  }

  back = e => {
    e.preventDefault()
    this.props.prevStep();
  }
  render() {
    const { firstName, phone, color, comment, oil, extract} = this.props;
    return (
      <>
        <h3>результат</h3>
    Цвет <div style={{background: color, width: '30px', height: '30px', borderRadius: '50%'}}></div><br/>
    Имя <b>{firstName}</b><br/>
    Телефон <b>{phone}</b><br/>
    Комментарии <b>{comment}</b><br/>
    Масло <b>{oil}</b><br/>
    
    <button className="Back" onClick={this.back}>
      Back
    </button>
    <button onClick={() => {this.addOrder()}}>Отправить</button>
    </>
    )
  }
}

const mapDispatchToProps =(dispatch) => {
  return {
    addOrder: (order) => dispatch(addOrder(order))
  }
}
export default connect(null, mapDispatchToProps)(AllInfo)
