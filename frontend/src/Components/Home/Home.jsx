import React, { Component } from 'react';
import '../../Assets/css/style.css';

import Nav from '../Nav/Nav';
import Search from '../Search/Search';
import PostLists from '../PostsLists/PostsLists';

class Home extends Component {  

  render() {
    console.log("props on home");
    console.log(this.props)
    return (
      <div>
      <Nav
        user={this.props.user}
        logout={this.props.logout}
        login={this.props.login}
        logStatus={this.props.logStatus}
      />
      <Search />
      <PostLists posts={this.props.posts}/>
      </div>
    );
  }; 
};

export default Home;

 