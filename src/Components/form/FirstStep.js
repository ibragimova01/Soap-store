import React, { Component } from "react";
import ColorPicker from "./ColorPicker";

class FirstStep extends Component {
  continue = (e) => {
    this.props.nextStep();
  };
  render() {
    const { handleChange } = this.props;
    return (
      <div>
        <h3>Выберите цвет мыла</h3>
        <ColorPicker handleChange={handleChange} />
        <button className="Next" onClick={this.continue}>
          Next
        </button>
      </div>
    );
  }
}

export default FirstStep;
