import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
// import { reduxForm } from 'redux-form';

import firebase, { provider, auth } from '../../client';
import axios from 'axios';
import '../../Assets/css/style.css';

import Home from '../Home/Home';
import Post from '../Post/Post';
import SinglePost from '../SinglePost/SinglePost';


class App extends Component {
  constructor(){
    super()

    this.state = {
      posts: [],
      user: null,
      logStatus: false
    }
  }

  //Login and Log out function!
  login = () => {
    auth().signInWithPopup(provider)
      .then((result) => {
        const user = result.user
      this.setState({
        user,
        logStatus: true
      });
      axios.post('http://localhost:8080/adduser', {
        name: String(firebase.auth().currentUser.displayName),
        email: String(firebase.auth().currentUser.email)
      })    
    })
    // console.log(this.state.user)
  }


  logout = () => {
    console.log("oh wow, you are logged out!")
    auth().signOut()
      .then(() => {
        this.setState({
          logStatus: false,
          user: null
        });
      });
  }
  
  // componentDidMount(){
  //   firebase.auth().onAuthStateChanged((user) => {
  //     if (user) {
  //       console.log("User is signed")
  //       console.log(this.state.logStatus)
  //     } else {
  //       console.log("No user is signed in")
  //       this.setState({
  //         user: null,
  //         logStatus: false
  //       })
  //     }
  //   })
  // }


  //Get posts from server and display in ListPosts Component.
  componentWillMount(){
    axios.get('http://localhost:8080/getposts')
    .then((response) => {
      // console.log("Component Will Mount")
      // console.log(response)
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
    axios.post('http://localhost:8080/add', {
      user_id: e.target.user_id.value,
      title: e.target.title.value,
      body: e.target.body.value,
      type: e.target.type.value
    }).then(() => {
      e.onSubmitSuccess('/listposts')
    })
  }

  render() {
    return (
      <div className="App">
      
      {/* Routes */}
      <Switch>
        <Route 
          exact path='/' 
          render={ () => {
            return <Home 
                posts={this.state.posts}
                user={this.state.user}
                logout={this.logout}
                login={this.login}
                logStatus={this.state.logStatus}
              />
          }} 
        />
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

      </Switch>
    </div>
    );
  }
}

export default App;

