import React, { Component, useState } from 'react';
import { SwatchesPicker } from 'react-color';

class ColorPicker extends Component  {
  state = {
    color: '#e91e63',
    background: {
      background: '#e91e63'
    }
  }
  handleChangeComplete = (color, event) => {
    this.setState({
      color: color.hex,
      background: {
        background: color.hex
      }
    });
    console.log(this.state, this.props)
    this.props.handleChange(color.hex);
  };
  
  render () {
    return (
      <div style={this.state.background}>
        <SwatchesPicker
        color={this.state.color} 
        // onChange={this.handleChangeComplete}
        onChangeComplete={this.handleChangeComplete}
        />
      </div>
      
    )
   }

  }

export default ColorPicker
