import React, { Component } from 'react';
import { Modal, Button, Icon } from 'react-materialize'

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
        <div className="chip">
          {this.state.singlePost.type}
          </div>
          <div className="card-content">
            <span className="card-title">{this.state.singlePost.title}</span>
            <p className="cart-body">{this.state.singlePost.body}</p>
            <p className="cart-author">{this.state.singlePost.user_name}</p>
          </div>

          <div>
          <Modal
            header='Input your comment:'
            trigger={<Button className="submit"><Icon>comment</Icon></Button>}>
            <form>
            <textarea name="body" id="textarea1" className="materialize-textarea input-field"></textarea>
            <label for="textarea1">Input comment:</label>
            </form>
            </Modal>  
          </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SinglePost;