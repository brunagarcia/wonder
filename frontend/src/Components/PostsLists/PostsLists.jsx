import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Collection, CollectionItem } from 'react-materialize'

import '../../Assets/css/style.css';

class PostLists extends Component {
  render() {
    const postsList = this.props.posts;
    console.log(postsList);
    let postJSX = postsList.map((post, i) => {
      return <CollectionItem key={i}>
        <Link to={`/listposts/${post._id}`} className="titleList"> {post.title} </Link>
        <br/>
        <div className="chip">
          {post.type}
        </div>
        <div className="userList">
          {post.user_id}
        </div>
      </CollectionItem>
    })

    return (
      <Collection>
        {postJSX}
      </Collection>

    );
  }
}

export default PostLists;