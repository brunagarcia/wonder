import React, { Component } from 'react';
import { Row, Input, Button, Modal } from 'react-materialize'

import '../../Assets/css/style.css';

class Post extends Component {
  render() {
    return (
      
        <div className="wrapForm">
        <Modal
          header='Modal Header'
          fixedFooter
          trigger={<Button>New Post</Button>}>

        <h3> Share with your community! </h3>
        <br/>

        <form onSubmit={(event) => {this.props.getPosts(event)}}>
          <div className="input-field col s12">
            <input  className="input-field" name="user_id" id="userName" type="text" />
            <label> Your user-name: </label>
          </div>
          <br/>
          
          <div className="input-field col s12">
            <input className="input-field" name="title" id="title" type="text" />
            <label> Title </label>
          </div>
          <br/>
          <div className="input-field col s12">
            <input name="body" id="body" type="text" data-length="400" />
            <label> Input Text </label>
          </div>
          <br/>
          <Row>
            <Input s={12} name="type" type='select' defaultValue='Choose the type of text:'>
              <option value='Code'>Code</option>
              <option value='Personal'>Personal</option>
              <option value='Work'>Work</option>
            </Input>
          </Row>

          <br/><br/>

          
        </form>
        </Modal>
      </div>

    );
  }
}

export default Post;