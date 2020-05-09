import React, { Component } from 'react'

class Select extends Component {
  constructor(props) {
    super(props)

    this.state = {
      topic: 'olive'
    }
  }
  handleTopicChange = event => {
    this.setState({
      topic: event.target.value
    })
  }
  continue = e => {
    e.preventDefault()
    this.props.nextStep();
  }
  back = e => {
    e.preventDefault()
    this.props.prevStep();
  }
  render() {
    return (
      <form>
        <span>Выберите масло: </span>
        <select value={this.state.topic} onChange={this.handleTopicChange}>
          <option value="coconut">Кокосовое</option>
          <option value="olive">Оливковое</option>
          <option value="castor">Касторовое</option>
        </select>
        <button className="Back" onClick={this.back}>
          Back 
        </button>
        <button className="Next" onClick={this.continue}>
          Next 
        </button>
      </form>
    )
  }
}

export default Select
