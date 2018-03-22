import React, { Component } from 'react';

import '../../Assets/css/style.css';

class Footer extends Component {
  render() {
    return (
      //Footer should contain 
      //social media mock links
      //author name >>> See example.
      <div>
        <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Footer Content</h5>
                <p className="grey-text text-lighten-4">Community for Woman to share Code, Questions, Help, Support and Love for Tech.</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Links</h5>
                <div className="listVerts">
                  <a className="grey-text text-lighten-3" href="#!"><img src="twitter.png" className="twitter" alt="twitter" /></a>
                  <a className="grey-text text-lighten-3" href="#!"><img src="facebook.png" className="facebook" alt="facebook" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            Bruna Garcia © 2014 Copyright Text
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;