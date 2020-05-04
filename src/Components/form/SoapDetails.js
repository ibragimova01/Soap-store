import React, { Component } from 'react'

class SoapDetails extends Component {
  continue = e => {
    e.preventDefault()
    this.props.nextStep();
  }
  back = e => {
    e.preventDefault()
    this.props.prevStep();
  }

  render() {
    const {handleChange, jobTitle, jobCompany} = this.props;
    return (
      <>
        <h1>Введите данные</h1>
        <label>
          <input
            type="text"
            name="jobTitle"
            placeholder="job "
            value={jobTitle}
            onChange={handleChange('jobTitle')}
          />
        </label>
        <label>
          <input
            type="text"
            name="jobCompany"
            placeholder="Company"
            value={jobCompany}
            onChange={handleChange('jobCompany')}
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

export default SoapDetails
