import React, { Component } from "react";
import "./Card.css";
class Card extends Component {
  state = {};
  render() {
    const { userData } = this.props;
    return (
      <div>
        <div className="container">
          <div className="images">
            <img src={userData.avatar_url} />
          </div>
          <div className="product">
            <p>Github Card by KevinTweaks</p>
            <h1>{userData.name}</h1>
            <h2><a href={userData.html_url}>{userData.login}</a></h2>
            <p className="desc">{userData.bio}</p>
            <div className="buttons">
              <button className="add">Followers</button>
              <button className="like">
                <span>{userData.followers}</span>
              </button>
            </div>
            <div className="buttons">
              <button className="add">Following</button>
              <button className="like">
                <span>{userData.following}</span>
              </button>
              <p id="email">{userData.email}</p>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
