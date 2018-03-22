import React, { Component } from 'react';
import { Modal, Button, Icon } from 'react-materialize';
import { Link } from 'react-router-dom';

import '../../Assets/css/style.css';
import axios from 'axios';

//todo:
// --Add Mock Comments 
//      --Save button on comments.

class SinglePost extends Component {
  constructor(){
    super()

    this.state = {
      singlePost: [],
      commentsJSX: null
    }
  }

  componentWillMount(){
    let objectId = this.props.match.params.objectId;
    axios.get(`http://localhost:8080/listposts/${objectId}`)
    .then((response) => {
      console.log(response.data);
      this.setState({
        singlePost: response.data,
        commentsJSX: response.data.comments.map((comment)=>{
          return <div className="cart-comment">
                {comment}
              </div>
        })

      })
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render(){
    return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <div className="card">
            <div className="card-content">
              <span className="card-title">{this.state.singlePost.title}</span>
              <div className="cart-body">
                {this.state.singlePost.body}
              </div>
              <br/><br/>
              <p className="cart-author">{this.state.singlePost.user_name}</p>
            </div>
            <br/>
            <div className="chip">
              {this.state.singlePost.type}
            </div>
            <br/>
            {this.state.commentsJSX ? <div> <span className="card-title">Comments:</span>
              <span> {this.state.commentsJSX} </span>
            </div>
             : null }
            
            
            {/* Modal Content */}
            <div className="button-wrap">
            <Modal
              header='Input your comment:'
              trigger={<Button className="single-post">
                    <Icon>comment</Icon>
                  </Button>}>
              <form>
              <textarea name="body" id="textarea1" className="materialize-textarea input-field"></textarea>
              <label>Input comment:</label>
              </form>
              </Modal>  
              <Link to='/home'>
                <Button className="single-post">
                  <Icon>close</Icon>
                </Button>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default SinglePost;