import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import axios from 'axios';
import '../../Assets/css/style.css';

import Header from '../Header/Header';
// import Search from '../Search/Search';
// import Footer from '../Footer/Footer';
import Post from '../Post/Post';
import PostLists from '../PostsLists/PostsLists';
import SinglePost from '../SinglePost/SinglePost';

class App extends Component {
  constructor(){
    super()

    this.state = {
      //add user state phase 2
      posts: []
    }
  }

  //TODO:
  //redirect to list posts page ONSUBMIT! and clean form!


  //Get posts from server and display in ListPosts Component.
  componentWillMount(){
    axios.get('http://localhost:8080/getposts')
    .then((response) => {
      console.log("Component Will Mount")
      console.log(response)
      this.setState({
        posts: response.data
      })
    })
    .catch((error) => {
      console.log(error);
    })
  }
  

  //Get posts function:
  getPosts = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/add', {
      user_id: e.target.user_id.value,
      title: e.target.title.value,
      body: e.target.body.value,
      type: e.target.type.value
    }).then(() => {
        return <Link to="/listposts"/>
    })
  }

  render() {
    return (
      <div className="App">
      
      <Header />
      
      
      {/* //Routes */}
      <Switch>
        <Route 
          path='/posting' 
          render={ () => {
            return <Post getPosts={this.getPosts} />
          }} 
        />

        <Route
          path='/listposts/:objectId'
          render={ (props) => {
            return <SinglePost {...props}/>
          }}
          />
        
       
        <Route  
          exact path='/listposts' 
          render={() => { 
          return <PostLists posts={this.state.posts} />
          }}
          />
      </Switch>
    </div>
    );
  }
}

export default App;

