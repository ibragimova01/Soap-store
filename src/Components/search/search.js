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
    
      console.log(event.target.value)
  }

  handleSubmit(event) {
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <h6>Поиск</h6>
            <input
              onChange={this.handleChange}
              type='text'
              className='search'
            />
          </form>
    )
  }
}

export default Search