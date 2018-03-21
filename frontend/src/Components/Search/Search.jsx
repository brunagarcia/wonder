import React, { Component } from 'react';

import axios from 'axios';
import '../../Assets/css/style.css';


class Search extends Component {
  render() {
    console.log(this.props)
    const { searchPosts } = this.props
    return (
      <div className="searchWrapper">
        <form className=" hide-on-med-and-down" id="form1">
          <div className="input-field search">
            <input onChange={searchPosts} id="search" type="search" required/>
            <label className="label-icon"><i className="material-icons">search</i></label>
            <i className="material-icons close-icon">close</i>
            <div id="searchResults" ></div>
          </div>
      </form>
      </div>
    );
  }
}

export default Search;