import React, { Component } from "react";
import "./App.css";
import SearchBox from "./components/SearchBox";
import Card from "./components/Card";
import Card2 from "./components/Card2";
import Card3 from './components/Card3';

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
        console.log(user_data);
        this.setState({
          users: user_data
        });
      });
    console.log(user);
  };

  render() {
    console.log(this.state.users.length);
    if (this.state.users.length === 0) {
      const userData = this.getUser("mstraughan86");
      return (
        <div>
          <div className="cardContainer">
            <SearchBox getUser={this.getUser.bind(this)} />
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="cardContainer">
            <SearchBox getUser={this.getUser.bind(this)} />
          </div>
          <div className="cards">
            <Card3 userData={this.state.users} />
            <Card2 userData={this.state.users} />
            <Card userData={this.state.users} />

          </div>
        </div>
      );
    }
  }
}

export default App;
