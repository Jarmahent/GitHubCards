import React, { Component } from "react";
import "./Card3.scss";

class Card3 extends Component {
  profileLink = (event) =>{
    window.location.href = "https://google.com";
  }


  render() {
    const {userData} = this.props;
    return (
      <div className="Card3">
        <div className="frame">
          <div className="center">
            <div className="profile">
              <div className="image">
                <div className="circle-1" />
                <div className="circle-2" />
                <img
                  src={userData.avatar_url}
                  width={70}
                  height={70}
                  alt="/public/images/notfound.png"
                />
              </div>
              <div className="name">{userData.name}</div>
              <div className="job">{userData.login}</div>
              <div className="actions">
                <button className="btn"
                  onClick={() => window.location.href=userData.html_url}>
                  Profile
                </button>


                <button className="btn">Email</button>
              </div>
            </div>
            <div className="stats">
              <div className="box">
                <span className="value">{userData.followers}</span>
                <span className="parameter">Followers</span>
              </div>
              <div className="box">
                <span className="value">{userData.following}</span>
                <span className="parameter">Following</span>
              </div>
              <div className="box">
                <span
                  className="value">{userData.public_repos}</span>
                <span className="parameter">Repositories</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card3;
