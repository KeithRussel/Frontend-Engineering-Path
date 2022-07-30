import React from "react";
import "./SearchBar.css";

export class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
    };

    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }
  search() {
    this.props.onSearch(this.state.searchTerm);
  }
  handleTermChange(event) {
    this.setState({ searchTerm: event.target.value });
  }
  render() {
    return (
      <div className="SearchBar">
        <input
          onChange={this.handleTermChange}
          placeholder="Enter A Song, Album, or Artist"
        />
        <button className="SearchButton" onClick={this.search}>
          SEARCH
        </button>
      </div>
    );
  }
}
