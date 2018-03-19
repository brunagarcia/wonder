import React, { Component } from 'react';
import { Button, Navbar, NavItem } from 'react-materialize';

import '../../Assets/css/style.css';

// const modalActive = () => {
//   <Modal
//     header='Modal Header'
//     fixedFooter
//     trigger={<Button class="waves-effect waves-light btn-small              buttonHome">
//             New Post!
//               </Button>
//             }>

//   <h3> Share with your community! </h3>
//   <br/>

//   <form onSubmit={(event) => {this.props.getPosts(event)}}>
//     <div className="input-field col s12">
//       <input  className="input-field" name="user_id" id="userName" type="text" />
//       <label> Your user-name: </label>
//     </div>
//     <br/>
    
//     <div className="input-field col s12">
//       <input className="input-field" name="title" id="title" type="text" />
//       <label> Title </label>
//     </div>
//     <br/>
//     <div className="input-field col s12">
//       <input name="body" id="body" type="text" data-length="400" />
//       <label> Input Text </label>
//     </div>
//     <br/>
//     <Row>
//       <Input s={12} name="type" type='select' defaultValue='Choose the type of text:'>
//         <option value='Code'>Code</option>
//         <option value='Personal'>Personal</option>
//         <option value='Work'>Work</option>
//       </Input>
//     </Row>

//     <br/><br/>
  
//   </form>
//   </Modal>
// }

class Nav extends Component {
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     user: props.user
  //   }
  // }

  render() {
    const logo = <img src="/logo.png" alt="Logo"/>
    return (
      <div className="nav-parent">
          {!this.props.logStatus ?
          <Navbar brand={logo} right>
            <NavItem>
                <Button onClick={this.props.login()} className="waves-effect waves-light btn-small buttonHome">
                  Log in with Google
                </Button> 
            </NavItem>
          </Navbar>
           : 
          
          <Navbar brand={logo} right>
            <NavItem className="nav-link"> Hello {this.props.user.displayName} </NavItem>
            <NavItem to="/posting" className="nav-link"> 
              <Button className="waves-effect waves-light btn-small      buttonHome">
                  New Post!
              </Button>              
            </NavItem>
            <NavItem className="nav-link">      
                <Button waves="light" onClick={this.props.logout()}>
                  Log out!
                </Button>
            </NavItem>
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