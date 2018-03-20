import React, { Component } from 'react';

import axios from 'axios';
import '../../Assets/css/style.css';


//todo
//Search Functionality
//Search style


class Search extends Component {
  render() {
    return (
      <div className="searchWrapper">
        <form className=" hide-on-med-and-down" id="form1">
          <div className="input-field search">
            <input id="search" type="search" required onkeyup="getBlogs(this.value,0);"/>
            <label className="label-icon" for="search"><i className="material-icons">search</i></label>
            <i className="material-icons">close</i>
            <div id="searchResults" ></div>
          </div>
      </form>
      </div>
    );
  }
}

export default Search;