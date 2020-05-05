import React, { Component } from 'react';
import ColorPicker from './ColorPicker';

class FirstStep extends Component {
  continue = e => {
    e.preventDefault()
    this.props.nextStep();
  }
  render() {
    
    return (
      <div>
        <h3>Выберите цвет основы</h3>
        <ColorPicker/>
        <button className='Next' onClick={this.continue}>Дальше</button >
      </div>
    )
  }
}

export default FirstStep
