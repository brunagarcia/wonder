import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { provider, auth } from '../../client';
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
      logStatus: false,
      fireRedirect: false
    }
  }

  //Login Function
  login = () => {
        auth().signInWithPopup(provider)
        .then((result) => {
          const user = result.user
        this.setState({
          user,
          logStatus: true
        });
        axios.post('http://localhost:8080/adduser', {
          name: user.displayName,
          email: user.email
        })    
      }).catch(error => {
        console.log(error)
      })
  }


  logout = () => {
    console.log("oh wow, you are logged out!")
    auth().signOut()
      .then(() => {
        this.setState({
          logStatus: false,
          user: null
        });
      }).catch(function(error) {
       console.log(error)
      });
  }
  
  //Keeping the user logged after refreshing page.
  componentDidMount() {
    auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ 
          user,
          logStatus: true
        });
      } 
    });
  }


  //Get posts from server and display in ListPosts Component.
  componentWillMount(){
    axios.get('http://localhost:8080/getposts')
    .then((response) => {
      this.setState({
        posts: response.data
      })
    })
    .catch((error) => {
      console.log(error);
    })
  }
  

  //Get posts function:
  addPosts = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/add', {
      user_name: e.target.user_name.defaultValue,
      user_email: e.target.user_email.defaultValue,
      title: e.target.title.value,
      body: e.target.body.value,
      type: e.target.type.value
    }).then(() => {
      this.setState({
        fireRedirect: true
      })


    })
  }

  render() {
    return (
      <div className="App">
      
      {/* Routes */}
      <Switch>
        <Route 
          exact path='/home' 
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
          path='/home/posting' 
          render={ () => {
            return <Post
            addPosts={this.addPosts}
            user={this.state.user}
            fireRedirect={this.state.fireRedirect} 
             />
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

