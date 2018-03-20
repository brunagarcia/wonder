import React, { Component } from 'react';

import '../../Assets/css/style.css';
import axios from 'axios';

//todo:
// --Create back button on bottom of the comment
// --Add Comments
// --Align content

class SinglePost extends Component {
  constructor(){
    super()

    this.state = {
      singlePost: []
    }
  }
  componentWillMount(){
    let objectId = this.props.match.params.objectId;
    axios.get(`http://localhost:8080/listposts/${objectId}`)
    .then((response) => {
      console.log(response.data);
      this.setState({
        singlePost: response.data
      })
    })
    .catch((error) => {
      console.log(error);
  });
}

  render(){
    return (
      <div className="row">
      <div className="col">
        <div className="card">
          <div className="card-content">
            <span className="card-title">{this.state.singlePost.title}</span>
            <p>{this.state.singlePost.body}</p>
            <p>{this.state.singlePost.user_name}</p>
          </div>

          <div className="card-action">
            <a >Comment link will go here!</a>

          </div>
          <div className="chip">
          {this.state.singlePost.type}
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default SinglePost;