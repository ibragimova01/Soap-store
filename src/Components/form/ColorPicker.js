import React, { Component } from "react";
import { SwatchesPicker } from "react-color";

class ColorPicker extends Component {
  state = {
    color: "#e91e63",
    background: {
      background: "#e91e63",
    },
  };
  componentDidMount() {
    setTimeout(() => {
      this.props.handleChange(this.state.color);
    }, 100);
  }
  handleChangeComplete = (color, event) => {
    this.setState({
      color: color.hex,
      background: {
        background: color.hex,
      },
    });
    this.props.handleChange(color.hex);
  };

  render() {
    return (
      <div style={this.state.background}>
        <SwatchesPicker
          color={this.state.color}
          onChangeComplete={this.handleChangeComplete}
        />
      </div>
    );
  }
}

export default ColorPicker;
