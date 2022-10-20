import { Auth } from 'aws-amplify';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink as RSNavLink,
  UncontrolledDropdown,
} from 'reactstrap';
import { EmptyProps } from '../../utils';
import { Link } from '../Link/Link';
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
                <Link to="/account/admin/livestream">Livestream</Link>
              </NavItem>
              <NavItem>
                <Link to="/account/admin/create-notes">Notes</Link>
              </NavItem>
              <NavItem>
                <Link to="/account/admin/create-blog">Blog</Link>
              </NavItem>
              <NavItem>
                <Link to="/account/admin/import-video">Import Video</Link>
              </NavItem>
              <NavItem>
                <Link to="/account/admin/move-video">George Temp</Link>
              </NavItem>
              <NavItem>
                <Link to="/account/admin/announcements">Announcements</Link>
              </NavItem>
              <NavItem>
                <Link to="/account/admin/homechurches">Homechurches</Link>
              </NavItem>
              <NavItem>
                <Link to="/account/admin/redirects">Redirects</Link>
              </NavItem>
              <NavItem>
                <Link to="/account/admin/people">People</Link>
              </NavItem>
              <NavItem>
                <Link to="/account/admin/editor">Editor</Link>
              </NavItem>
              <NavItem>
                <Link to="/account/admin/clearcache">Clear Cache</Link>
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
