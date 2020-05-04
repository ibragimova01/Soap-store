import React, { Component } from 'react'

class AllInfo extends Component {
  back = e => {
    e.preventDefault()
    this.props.prevStep();
  }
  render() {
    const { firstName, lastName, jobTitle, jobCompany } = this.props;
    return (
      <>
        <h2>результат</h2>
    first Name <b>{firstName}</b><br/>
    last Name <b>{lastName}</b><br/>
    job <b>{jobTitle}</b><br/>
    Company <b>{jobCompany}</b><br/>
    <button className="Back" onClick={this.back}>
      Back
    </button>
      </>
    )
  }
}

export default AllInfo
