import React, { Component } from "react";
import "./App.css";
import SearchBox from "./components/SearchBox";
import Card from "./components/Card";
import Card2 from "./components/Card2";
import Card3 from './components/Card3';
import defaultUser1 from './defaults/default_mstraughan86.json';

class App extends Component {
  state = {
    users: []
  };

  componentWillMount(){
    this.getUser("mstraughan86");
  }


  //
  // 1. Get a searched User
  //

  getUser = user => {

    fetch(`https://flask-backend.nanoapp.io/getUser?username=${user}&access_token=2h9ax83ctkxaysx2ttch`)
      .then(res => res.json())
      .then(user_data => {
        this.setState({
          users: user_data
        });
        console.log(user_data)
      }).catch((error) =>{
        this.setState({
          users: defaultUser1
        })
      });

  };

  render() {

    if (this.state.users.length === 0) {
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
