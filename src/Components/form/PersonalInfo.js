import React, { Component } from 'react'

class PersonalInfo extends Component {
  continue = e => {
    e.preventDefault()
    this.props.nextStep();
  }
  back = e => {
    e.preventDefault()
    this.props.prevStep();
  }
  render() {
    const {handleChange, firstName, phone, comment} = this.props;
    return (
      <>
        <h3>Введите данные</h3>
        <label>
          <input
            type="text"
            name="firstName"
            placeholder="Имя"
            value={firstName}
            onChange={handleChange('firstName')}
          />
        </label>
        <label>
          <input
            type="text"
            name="phone"
            placeholder="Контактный телефон"
            value={phone}
            onChange={handleChange('phone')}
          />
        </label>
        <label>
          <textarea
            name="comment"
            placeholder="Коментарии"
            value={comment}
            onChange={handleChange('comment')}
          />
        </label>
        <button className="Back" onClick={this.back}>
          Back 
        </button>
        <button className="Next" onClick={this.continue}>
          Next 
        </button>
      </>
    )
  }
}

export default PersonalInfo

