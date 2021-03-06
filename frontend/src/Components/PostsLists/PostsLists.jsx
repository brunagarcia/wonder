import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Collection, CollectionItem } from 'react-materialize'

import '../../Assets/css/style.css';

class PostLists extends Component {
  render() {
    
    const { posts } = this.props;
    let postJSX = posts.map((post, i) => {

      return <CollectionItem key={i}>
        <Link to={`/listposts/${post._id}`} 
              className="titleList"> {post.title} 
        </Link>
        <br/>
        <div className="chip">
          {post.type}
        </div>
        <div className="user-container">
          by <span className="userList"> {post.user_name} </span>
        </div>
      </CollectionItem>
    })

    return (
      <Collection>
      {/* <p> hello </p> */}
        {postJSX}
      </Collection>

    );
  }
}

export default PostLists;