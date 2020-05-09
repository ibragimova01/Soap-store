import React, { Component } from 'react'
import PersonalInfo from './PersonalInfo';
import AllInfo from './AllInfo';
import FirstStep from './FirstStep';
import ImageUploader from './ImageUploader';
import Select from './Select';


class Main extends Component {
  state = {
    step: 1,

    // step 1
    color: '',
    image: null,
    // step 2
    topic: '',


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

setImage = (image) => {
  this.setState({
    image: image
  })
  console.log(this.state.image);
}

setTopic = (topic) => {
  this.setState({
    topic: topic
  })
  console.log(this.state.topic);
}

  showStep = () => {
    const {step, firstName, phone, comment, topic, color, image} = this.state;
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
    <ImageUploader
    prevStep = {this.prevStep}
    nextStep = {this.nextStep}
    handleChange = {this.setImage}
    />
    );
    if(step === 3)
    return (
      <Select
      handleChange = {this.setTopic}
      nextStep = {this.nextStep}
      prevStep = {this.prevStep}
      
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
      prevStep = {this.prevStep}
      nextStep = {this.nextStep}
      color = {color}
      image = {image}
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