import React, { Component } from 'react';
// import { StickyContainer, Sticky } from 'react-sticky';
import '../../Assets/css/style.css';

import Nav from '../Nav/Nav';
import Search from '../Search/Search';
import PostLists from '../PostsLists/PostsLists';
import Footer from '../Footer/Footer';

class Home extends Component {  

  componentDidMount() {
    this.props.toggleRedirect();
  }

  render() {
    console.log("props on home");
    console.log(this.props)
    return (
      <div>
      {/* <StickyContainer>
        <Sticky topOffset={0}>
        {
            ({}) => {
              return (
          <div> */}
          <Nav
            user={this.props.user}
            logout={this.props.logout}
            login={this.props.login}
            logStatus={this.props.logStatus}
          />
          <Search searchPosts={this.props.searchPosts} />
          {/* </div>
        )
      }
    }
        </Sticky>
  </StickyContainer> */}
      <PostLists posts={this.props.posts}/>
      <Footer />
      </div>
    );
  }; 
};

export default Home;

 