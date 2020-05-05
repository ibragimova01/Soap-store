import React, { Component, useState } from 'react';
import { SwatchesPicker } from 'react-color';

class ColorPicker extends Component  {
  state = {
    color: '#ff0000'
  }
  handleChangeComplete = (color, event) => {
this.setState({color:color.hex})
this.props.handleChange('color')
  };
  
  render () {
    return (
      <>
        <SwatchesPicker
        color={this.state.color} 
        onChangeComplete={()=> this.handleChangeComplete}
        />
      </>
      
    )
   }
  }

export default ColorPicker
