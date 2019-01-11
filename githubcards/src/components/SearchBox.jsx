import React, { Component } from "react";
import "./SearchBox.css";

class SearchBox extends Component {
  state = {
    user: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitUser = event => {
    event.preventDefault();
    let user = this.state;
    console.log(user);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitUser}>
          <input
            name="user"
            type="text"
            value={this.state.user}
            className="textbox"
            placeholder="Search"
            onChange={this.handleChange}
          />
          <input title="Search" value="🔍" type="submit" className="button" />
        </form>
      </div>
    );
  }
}

export default SearchBox;
