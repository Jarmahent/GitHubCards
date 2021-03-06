import React, { Component } from "react";
import "./Card2.css";
class Card2 extends Component {
  render() {
    const { userData } = this.props;

    return (
      <div className="Card2">
        <div className="title">
          <p>{userData.login}</p>
        </div>
        <div className="box gallery">
          <div className="card">
            <div className="background">
              <img alt="/public/images/notfound.png" src={userData.avatar_url} />
              <div className="column col1" />
              <div className="column col2" />
              <div className="column col3" />
              <div className="column col4" />
              <div className="column col5" />
            </div>
            <div  className="overlay" />



            <div className="info">
              <h2>
                <a href={userData.html_url}>{userData.bio}</a>
              </h2>
              <div className="foot">
                <i className="line" />
                <span className="date">{userData.name}</span>
                <a href={userData.html_url} className="social">
                  <i className="fa fa-github-square" />
                </a>
                <a href={userData.email} className="social">
                  <i className="fa fa-envelope-o" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card2;
