import React, { Component } from "react";
import "./App.css";
import SearchBox from "./components/SearchBox";
import Card from "./components/Card";

class App extends Component {
  state = {
    users: []
  };

  //
  // 1. Get a searched User
  //

  getUser = user => {
    fetch(`/getUser?user=${user}`)
      .then(res => res.json())
      .then(user_data => {
        console.log(user_data)
        this.setState({
          users: user_data
         });
      });
      console.log(user)
  };

  render() {
    console.log(this.state.users.length);
    if (this.state.users.length === 0) {
      return (
        <div>
          <div className="cardContainer roboto">
            <SearchBox getUser={this.getUser.bind(this)} />
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="cardContainer roboto">
            <SearchBox getUser={this.getUser.bind(this)} />
            <Card userData={this.state.users} />
          </div>
        </div>
      );
    }
  }
}

export default App;
