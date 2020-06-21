import React, { Component } from "react";
import "./search.css";

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
      <form className="search-form"  onSubmit={this.handleSubmit}>
        <i className="fa fa-search" aria-hidden="true"></i>
        <input
          name="search"
          onChange={this.props.SearchFilter}
          type="text"
          className="search"
          placeholder="Поиск"
        />
      </form>
    );
  }
}

export default Search;
