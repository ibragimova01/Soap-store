import React, { Component } from 'react'
import PersonalInfo from './PersonalInfo';
import JobDetails from './SoapDetails';
import AllInfo from './AllInfo';

class Main extends Component {
  state = {
    step:1,

    //step1
    firstName: '',
    lastName: '',
    email: '',

    // step 2
    jobTitle: '',
    jobCompany: ''
  }

  nextStep = () => {
    const { step } = this.state;

    this.setState({
        step: step + 1
    });
}
prevStep = () => {
  const { step } = this.state;
  this.setState({
      step: step - 1
  });
}
handleChange = input => e => {
  this.setState({[input]: e.target.value});
}
  showStep = () => {
    const {step, firstName, lastName, jobTitle, jobCompany} = this.state;
    if(step === 1)
    return (
    <PersonalInfo
      handleChange = {this.handleChange}
      nextStep = {this.nextStep}
      firstName = {firstName}
      lastName = {lastName}
    />);
    if(step === 2)
    return (
    <JobDetails
      handleChange = {this.handleChange}
      nextStep = {this.nextStep}
      prevStep = {this.prevStep}
      jobTitle = {jobTitle}
      jobCompany = {jobCompany}
    />
    );
    if(step === 3)
    return (
      <AllInfo
      firstName = {firstName}
      lastName = {lastName}
      jobTitle = {jobTitle}
      jobCompany = {jobCompany}
      prevStep = {this.prevStep}
      />
      );
  }
  render() {
    const {step} = this.state;
    return (
        <>
        <h2> Шаг {step} из 3.</h2>
        {this.showStep()}
        </>
    )
  }
}

export default Main;