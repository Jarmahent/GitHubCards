import React, { Component } from 'react';
import "./SearchBox.css";

class SearchBox extends Component {

  render() {
    return (
      <div>
        <form method="post">
          <input type="text" className="textbox" placeholder="Search" />
          <input title="Search" value="🔍" type="submit" className="button" />
        </form>
      </div>
    );
  }

}

export default SearchBox;
