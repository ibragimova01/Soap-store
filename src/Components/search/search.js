import React, {Component} from 'react'

class Search extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    
  }

  render() {
    return (
      <div>
        <h6>Поиск</h6>
        <div >
          <form onSubmit={this.handleSubmit}>
            <input
              onChange={this.handleChange}
              type='text'
              className='form-control'
            />
          </form>
        </div>
      </div>
    )
  }
}

export default Search