import React, { Component } from 'react';
import Nav from '../Nav/Nav';

import '../../Assets/css/style.css';


class Header extends Component {
  render() {
    return (
      <div>
      <Nav />
      </div>
    );
  }
}

export default Header;


/* <div>
<nav className="nav-extended">
  <div className="nav-wrapper">
    <a href="#" className="brand-logo left "><img src="/logo.png" alt="logo"/></a>

    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons"></i></a>
    <ul id="nav-mobile" className="right hide-on-med-and-down">
      <li><a href="collapsible.html">JavaScript</a></li>
    </ul>
  </div>
</nav>

<ul className="sidenav" id="mobile-demo">
  <li><a href="collapsible.html">Log in</a></li>
</ul>
</div> */
