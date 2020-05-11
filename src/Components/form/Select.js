import React, { Component } from 'react'

class Select extends Component {
  constructor(props) {
    super(props)

    this.state = {
      oil: 'olive',
      extract: 'rose'
    }
  }
  handleOilChange = event => {
    this.setState({
      oil: event.target.value,
    })
  }
  handleExtractChange = event => {
    this.setState({
      extract: event.target.value
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
      <>
      <form>
        <p>Выберите растительное масло: </p>
        <select value={this.state.oil} onChange={this.handleOilChange}>
          <option value="coconut">Кокосовое</option>
          <option value="olive">Оливковое</option>
          <option value="castor">Касторовое</option>
        </select>
        <p>Выберите экстракт: </p>
        <select value={this.state.extract} onChange={this.handleExtractChange}>
          <option value="rose">Роза</option>
          <option value="vanila">Ваниль</option>
          <option value="chamomile">Ромашка</option>
        </select>
        <button className="Back" onClick={this.back}>
          Back 
        </button>
        <button className="Next" onClick={this.continue}>
          Next 
        </button>
      </form>
      </>
    )
  }
}

export default Select
