import React, { Component } from "react";

class Search extends Component {
  state = {
    value: "",
  };

  handleChange = (event) => {};

  handleSubmit = (event) => {
    event.preventDefault();
    const { history } = this.props;
    if (history) {
      history.push({
        search: "?search=" + this.props.search,
      });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h6>Поиск</h6>
        <input
          name="search"
          onChange={this.props.SearchFilter}
          type="text"
          className="search"
        />
      </form>
    );
  }
}

export default Search;
