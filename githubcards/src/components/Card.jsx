import React, { Component } from "react";
import "./Card.css";
class Card extends Component {
  state = {};
  render() {
    const { userData } = this.props;
    return (
      <div>
        <div className="w3-container">
          <h2>Photo Card</h2>

          <div className="w3-card-4" style={{ width: "70%" }}>
            <img
              src="https://www.w3schools.com/w3css/img_snowtops.jpg"
              alt="Norway"
              style={{ width: "100%" }}
            />
            <div className="w3-container">
              <h1>Full Name:</h1>
              <p>{userData.login}</p>
              <h1>Bio:</h1>
              <p>{userData.bio}</p>
              <h1>Username:</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;

/*
White-space: pre-line

to keep lines
*/
