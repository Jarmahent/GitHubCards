import React, { Component } from "react";
import "./App.css";
import SearchBox from "./components/SearchBox";
import Card from "./components/Card";

class App extends Component {
  state = {
    users: []
  };

  getUser = () => {};

  componentDidMount() {
    fetch("/users")
      .then(res => res.json())
      .then(users => {
        this.setState({ users });
      });
  }
  render() {
    return (
      <div>
        <div className="cardContainer roboto">
          <SearchBox />
          <Card userData={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
