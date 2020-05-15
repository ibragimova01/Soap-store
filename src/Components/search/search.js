import React, {Component} from 'react'
import { withRouter } from "react-router-dom";

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
    event.preventDefault()
    const {history} = this.props
    console.log(history)
    if(history) {
      history.push({
        search: "?search="+this.props.search
      })
    }
    
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <h6>Поиск</h6>
            <input
              name="search"
              onChange={this.props.SearchFilter}
              type='text'
              className='search'
            />
          </form>
    )
  }
}

export default Search