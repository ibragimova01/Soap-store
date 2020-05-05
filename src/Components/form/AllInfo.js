import React, { Component } from 'react'

class AllInfo extends Component {
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
    <button>Отправить</button>
    </>
    )
  }
}

export default AllInfo
