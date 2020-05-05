import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addOrder } from '../../store/actions/orderActions'
class AllInfo extends Component {

  addOrder() {
    const order={
      color: this.props.color,
      firstName: this.props.firstName,
      phone: this.props.phone,
      jobTitle: this.props.jobTitle,
      jobCompany: this.props.jobCompany,
      comment: this.props.comment
    }
    this.props.addOrder(order)
  }

  back = e => {
    e.preventDefault()
    this.props.prevStep();
  }
  render() {
    const { firstName, phone, jobTitle, jobCompany, color, comment} = this.props;
    return (
      <>
        <h3>результат</h3>
    Цвет <b>{color}</b><br/>
    job <b>{jobTitle}</b><br/>
    Company <b>{jobCompany}</b><br/>
    Имя <b>{firstName}</b><br/>
    Телефон <b>{phone}</b><br/>
    Комментарии <b>{comment}</b><br/>
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
