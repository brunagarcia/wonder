import React, { Component } from 'react';
import '../../Assets/css/style.css';

import PostLists from '../PostsLists/PostsLists';
import Nav from '../Nav/Nav';

class Home extends Component {  

  render() {
    console.log("props on home");
    console.log(this.props);
    return (
      <div>
      <Nav
        user={this.props.user}
        logout={this.props.logout}
        login={this.props.login}
        logStatus={this.props.logStatus}
      />
      <PostLists posts={this.props.posts}/>
      </div>
    );
  }; 
};

export default Home;

 