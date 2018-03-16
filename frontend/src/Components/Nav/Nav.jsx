import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import '../../Assets/css/style.css';

class Nav extends Component {
  render() {
    return (
        <nav className="nav-extended">
          <div className="nav-wrapper">
            <a className="brand-logo left "><img src="/logo.png" alt="logo"/></a>

            <a data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons"></i></a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="/" className="nav-link">
                  Home
                </Link>   
              </li>
              <li>
                <Link to="/posting" className="nav-link">
                  Post it!
                </Link>   
              </li>
              <li>
              <Link to="/listposts" className="nav-link">
                Posts
              </Link> 
              </li>
            </ul>
          </div>
        </nav>

        // <ul className="sidenav" id="mobile-demo">
        //   <li><a href="collapsible.html">Log in</a></li>
        // </ul>
    );
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