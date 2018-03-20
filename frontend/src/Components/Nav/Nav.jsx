import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Navbar } from 'react-materialize';

import '../../Assets/css/style.css';

//todo
// --Fix Name on Nav.
// --Fix responsive Nav.
// --Fix Buttons space between.


class Nav extends Component {

  render() {
    const logo = <img src="/logo.png" alt="Logo"/>
    const { login, logout} = this.props
    return (
      <div className="nav-parent">
          {!this.props.logStatus ?
          <Navbar brand={logo} right>
            <Button onClick={login} className="waves-effect btn-small">
              Log in with Google
            </Button>   
          </Navbar>
           : 
          <Navbar brand={logo} right>
            <span className="nav-text"> Hello {this.props.user.displayName} </span>
            <Button className="waves-effect btn-small">
              <Link to="/home/posting">
                New Post!
              </Link>
            </Button>              
            <Button waves="light" onClick={logout}>
                Log out!
            </Button> 
        </Navbar>
        } 
        </div>
    )
  }
}

export default Nav;


/* <Navbar brand={Img} right>
<NavItem href='#'>
  <Link to="/" className="nav-link" >
    Home
  </Link>
</NavItem>

<NavItem href='#'>
  <Link to="/posting" className="nav-link" href="#">
    Post it!
  </Link>
</NavItem>

<NavItem href='#'>
  <Link to="/listposts" className="nav-link" href="#">
  Posts
  </Link>
</NavItem> 
</Navbar> */