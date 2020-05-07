import React, { Component } from 'react'

class ImageUploader extends Component {
  state = {
    selectedFile: null
  }
  continue = e => {
    e.preventDefault()
    this.props.nextStep();
  }
  back = e => {
    e.preventDefault()
    this.props.prevStep();
  }
  fileSelectHandler = event => {
    this.setState({
        selectedFile: event.target.files[0]
    })
    setTimeout(() =>  {
      console.log(this.state)
      this.props.handleChange(this.state.selectedFile)
    }, 100)
  }

  render() {
    return (
      <>
        <h3> Загрузите изображение (например, логотип) для нанесения на мыло</h3>
        <input type="file"  onChange={this.fileSelectHandler}/>
        <button className='Back' onClick={this.back}>Back</button >
        <button className='Next' onClick={this.continue}>Next</button >
      </>
    )
  }
}

export default ImageUploader
