import React, { Component } from 'react'
import PersonalInfo from './PersonalInfo';
import JobDetails from './SoapDetails';
import AllInfo from './AllInfo';
import FirstStep from './FirstStep';

class Main extends Component {
  state = {
    step: 1,

    // step 1
    color: '',
    
    // step 2
    jobTitle: '',
    jobCompany: '',

    //final step
    firstName: '',
    phone: '',
    comment: '',
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
setColor = (color) => {
  this.setState({
    color: color
  })
  console.log(this.state.color);
}
  showStep = () => {
    const {step, firstName, phone, comment, jobTitle, jobCompany, color} = this.state;
    if(step === 1)
    return (
      <FirstStep
      color={color}
      nextStep = {this.nextStep}
      handleChange = {this.setColor}
      />
      );
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
      <JobDetails
      handleChange = {this.handleChange}
      nextStep = {this.nextStep}
      prevStep = {this.prevStep}
      jobTitle = {jobTitle}
      jobCompany = {jobCompany}
    />
      );
      if(step === 4)
    return (
    <PersonalInfo
      handleChange = {this.handleChange}
      nextStep = {this.nextStep}
      prevStep = {this.prevStep}
      firstName = {firstName}
      phone = {phone}
      comment ={comment}
    />);
    if(step === 5)
    return (
      <AllInfo
      firstName = {firstName}
      phone = {phone}
      comment ={comment}
      jobTitle = {jobTitle}
      jobCompany = {jobCompany}
      prevStep = {this.prevStep}
      nextStep = {this.nextStep}
      color = {color}
      />
      );
  }
  render() {
    const {step} = this.state;
    return (
        <>
        <h2> Шаг {step} из 5</h2>
        {this.showStep()}
        </>
    )
  }
}

export default Main;