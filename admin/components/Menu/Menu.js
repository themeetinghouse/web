import 'bootstrap/dist/css/bootstrap.min.css';
import Popper from 'popper.js';
import { Auth } from 'aws-amplify';
import React, { Container } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';



//const bootstrap = require('react-bootstrap');

//import Popper from 'popper.js'
//import Head from 'next/head'
import ReactDOM from 'react-dom';
import "../../bootstrap-override.css"
//import console = require('console');

export default class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      userName:  ""

    };
  }
    getState = async() => {
      Auth.currentAuthenticatedUser().then(user => {
        console.log(user.username);
        this.setState({userName:user.username});
      }
      ).catch(err => {
         console.log("no user");
         this.setState({userName:"No User"});
        }
      )};
      
  
    componentDidMount() {
      this.getState();
    }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  signOut = () => {
    Auth.signOut()
    .then(data => console.log(data))
    .catch(err => console.log(err));
  }

  
  render() {
    return (
      <div class="navbar-custom">
        <Navbar color="dark" dark expand="md" >
          <NavbarBrand href="/">The Meeting House - Admin</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/videos">Videos</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/news">News</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/blog">Blogs</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/events">Events</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/locations">Locations</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/prayer">Prayer</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/homechurch">Home Church</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/giving">Giving</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/compassion">Compassion</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/legal">Legal</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/themeetinghouse">GitHub</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  {this.state.userName}
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Profile
                  </DropdownItem>
                  <DropdownItem >
                  <div onClick={this.signOut}>
                    Logout
                    </div>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              {/*<UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>*/}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
