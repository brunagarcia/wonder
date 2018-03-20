import React, { Component } from 'react';
import { Row, Input, Button, Modal } from 'react-materialize';
import { Redirect } from 'react-router-dom';

import '../../Assets/css/style.css';

//todo
//Make list render after submit.
//Persist state if URL is used.
//Fix form colors.

class Post extends Component {
  render() {
    const { from } = this.props.location || '/'
    const { fireRedirect, user } = this.props
    return (
      
        <div className="wrapForm">

        <h4> Share with your community {user.displayName}!</h4>
        <br/>

        <form onSubmit={(event) => {this.props.addPosts(event)}}>
          <div className="input-field col s12">
            <input className="hidden" name="user_name" defaultValue={user.displayName} />
            <input className="input-field hidden" name="user_email" defaultValue={user.email} />
          </div>
          <br/>
          
          <div className="input-field col s12">
            <input className="input-field" name="title" id="title" type="text" />
            <label> Title </label>
          </div>

          <br/>

          <div class="input-field col s12">
            <textarea name="body" id="textarea1" className="materialize-textarea input-field"></textarea>
            <label for="textarea1">Input text:</label>
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

          <Button className="buttons"> Post it </Button>

        </form>
        {fireRedirect && (
          <Redirect to={from || '/home'}/>
        )}
      </div>
    );
  }
}

export default Post;