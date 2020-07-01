import 'bootstrap/dist/css/bootstrap.min.css';
import { Auth } from 'aws-amplify';
import React from 'react';
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
  DropdownItem
} from 'reactstrap';
import { EmptyProps } from '../../utils';

import "../../bootstrap-override.css"
import "./adminmenu.scss"

interface State {
  isOpen: boolean,
  userName: string
}
export default class Menu extends React.Component<EmptyProps, State> {
  constructor(props: EmptyProps) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      userName: ""
    };
  }
  async getState() {
    try {
      const user = await Auth.currentAuthenticatedUser()
      console.log(user.username);
      this.setState({ userName: user.username });
    } catch (e) {
      console.error(e)
      console.log("no user")
      this.setState({ userName: "No User" });
    }
  }

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
      <div className="navbar-custom">
        <Navbar className="admin" color="dark" dark expand="md" >
          <NavbarBrand href="/admin">The Meeting House - Admin</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {/*              <NavItem>
                <NavLink href="/admin/videos">Videos</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/admin/news">News</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/admin/blog">Blogs</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/admin/events">Events</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/admin/locations">Locations</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/admin/prayer">Prayer</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/admin/homechurch">Home Church</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/admin/giving">Giving</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/admin/compassion">Compassion</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/admin/legal">Legal</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/admin/imports">Imports</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/admin/import-kids">Import Kids</NavLink>
</NavItem>*/}
              <NavItem>
                <NavLink href="/admin/add-live">Livestream</NavLink>
              </NavItem>
              <NavItem><NavLink> | </NavLink></NavItem>
              <NavItem>
                <NavLink href="/admin/create-notes">Notes</NavLink>
              </NavItem>
              <NavItem><NavLink> | </NavLink></NavItem>
              <NavItem>
                <NavLink href="/admin/create-blog">Blog</NavLink>
              </NavItem>
              <NavItem><NavLink> | </NavLink></NavItem>
              <NavItem>
                <NavLink href="/admin/import-video">Import Video</NavLink>
              </NavItem>
              <NavItem><NavLink> | </NavLink></NavItem>
              <NavItem>
                <NavLink href="https://github.com/themeetinghouse">GitHub</NavLink>
              </NavItem>
              <NavItem><NavLink> | </NavLink></NavItem>
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
