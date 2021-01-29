import 'bootstrap/dist/css/bootstrap.min.css';
import { Auth } from 'aws-amplify';
import React from 'react';
import { NavLink } from '../Link/Link';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink as RSNavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { EmptyProps } from '../../utils';
import './adminmenu.scss';

interface State {
  isOpen: boolean;
  userName: string;
}
export default class Menu extends React.Component<EmptyProps, State> {
  constructor(props: EmptyProps) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      userName: '',
    };
  }
  async getState() {
    try {
      const user = await Auth.currentAuthenticatedUser();
      console.log(user.username);
      this.setState({ userName: user.username });
    } catch (e) {
      console.error(e);
      console.log('no user');
      this.setState({ userName: 'No User' });
    }
  }

  componentDidMount() {
    this.getState();
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  signOut = () => {
    Auth.signOut()
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="navbar-custom">
        <Navbar className="admin" color="dark" dark expand="md">
          <NavbarBrand href="/admin">The Meeting House - Admin</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink to="/admin/livestream">Livestream</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/admin/create-notes">Notes</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/admin/create-blog">Blog</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/admin/import-video">Import Video</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/admin/announcements">Announcements</NavLink>
              </NavItem>
              <NavItem>
                <RSNavLink href="https://github.com/themeetinghouse">
                  GitHub
                </RSNavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  {this.state.userName}
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Profile</DropdownItem>
                  <DropdownItem>
                    <div onClick={this.signOut}>Logout</div>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
