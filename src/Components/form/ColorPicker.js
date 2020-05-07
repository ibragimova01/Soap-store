import React, { Component } from 'react';
import { SwatchesPicker } from 'react-color';

class ColorPicker extends Component  {
  state = {
    color: '#e91e63',
    background: {
      background: '#e91e63'
    }
  }
  componentDidMount(){
    this.props.handleChange(this.state.color);
    console.log(this.state, this.props)
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
        onChangeComplete={this.handleChangeComplete}
        />
      </div>
      
    )
    }
  }

export default ColorPicker
