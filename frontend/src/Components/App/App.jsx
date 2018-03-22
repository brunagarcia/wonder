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
      fireRedirect: true,
      searchInput: null
    }
  }

  //Functions
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

  searchPosts = (event) => {
    event.persist();
    this.setState({
      searchInput: event.target.value
    })
    axios.get('http://localhost:8080/getfilterposts', {
      params: this.state.searchInput
    }).then(response => {
        const searchResults = response.data
        this.setState({
          posts: searchResults
        })
    }).catch(error => {
      console.log(error);
    })
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
      // comments: -- to be added when change database
      user_name: e.target.user_name.defaultValue,
      user_email: e.target.user_email.defaultValue,
      title: e.target.title.value,
      body: e.target.body.value,
      type: e.target.type.value
    })
    .then((response) => {
      console.log(response)
      this.setState({
        posts: response.data,
        fireRedirect: true
      })
    })
  }

  toggleRedirect = () => {
    this.setState({
      fireRedirect: !this.state.fireRedirect
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
                searchPosts={this.searchPosts}
                logout={this.logout}
                login={this.login}
                logStatus={this.state.logStatus}
                toggleRedirect={this.toggleRedirect}
              />
          }} 
        />
        <Route 
          path='/home/posting' 
          render={ () => {
            console.log(this.state.fireRedirect)
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

