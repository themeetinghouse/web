﻿import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Button,
  NavItem,
} from 'reactstrap';

import { withRouter, RouteComponentProps } from 'react-router-dom';
import HamburgerMenu from 'react-hamburger-menu';
import './menu.scss';
import moment from 'moment-timezone';

import { Link } from 'components/Link/Link';

import RSNavLinkWrapper from './RSNavLinkWrapper';
import TMHLogo from './TMHLogo';
import ExpandButton from './ExpandButton';
const VideoOverlay = React.lazy(() => import('../VideoOverlay/VideoOverlay'));
const AnnouncementBar = React.lazy(
  () => import('../../components/AnnouncementBar/AnnouncementBar')
);

interface SubMenuItem {
  name: string;
  location: string;
}

interface MainMenuItem {
  name: string;
  location: string;
  children?: SubMenuItem[];
}

interface Props extends RouteComponentProps {
  pageConfig: any;
}
interface State {
  MainMenuItems: any;
  overlayType: string | null;
  isOpen: boolean;
  windowHeight: number;
  position: string;
  logoColor: string;
  showLogoText: boolean;
  isSearch: boolean;
  showSearch: boolean;
  showMenu: boolean;
  movingMenu: boolean;
  showLive: boolean;
  isModal: boolean;
  expand: any;
  showNotes: boolean;
  logoOffset: boolean;
}

class HomeMenu extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    if (this.props.pageConfig.menuType == 'youth')
      fetch('/static/data/YouthMenu.json')
        .then(function (response) {
          return response.json();
        })
        .then((myJson) => {
          this.setState({ MainMenuItems: myJson });
        })
        .catch((e: any) => console.log(e));
    else
      fetch('/static/data/MainMenu.json')
        .then(function (response) {
          return response.json();
        })
        .then((myJson) => {
          this.setState({ MainMenuItems: myJson });
        })
        .catch((e: any) => console.log(e));

    this.toggle = this.toggle.bind(this);
    this.state = {
      MainMenuItems: null,
      overlayType: null,
      isOpen: false,
      windowHeight: 0,
      position: 'unfix',
      movingMenu: this.props.pageConfig.movingMenu,
      logoColor: this.props.pageConfig.logoColor,
      showLogoText: this.props.pageConfig.showLogoText,
      isSearch: this.props.pageConfig.isSearch ?? false,
      isModal: this.props.pageConfig.isModal ?? false,
      showSearch: this.props.pageConfig.showSearch,
      showMenu: this.props.pageConfig.showMenu,
      showLive: this.props.pageConfig.showLive,
      logoOffset: false,
      expand: null,
      showNotes:
        moment.tz('America/Toronto').isoWeekday() === 7 ||
        (moment.tz('America/Toronto').isoWeekday() === 1 &&
          moment.tz('America/Toronto').hour() <= 12),
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  getWindowHeight() {
    const deviceWindow = document.getElementById('navbar');
    if (deviceWindow != null) {
      const deviceWindowHeight = window.outerHeight;
      //    console.log("from getinitiatlhight" + deviceWindowHeight);
      this.setState({
        windowHeight: deviceWindowHeight,
      });
    }
  }
  handleScroll() {
    this.getWindowHeight();
    //  console.log("scrolll" + this.state.windowHeight);
    if (
      window.scrollY <=
      this.state.windowHeight - (this.state.windowHeight / 100) * 20
    ) {
      this.setState({ position: 'unfix' });
      //     console.log("unfix");
    } else if (
      window.scrollY >
      this.state.windowHeight - (this.state.windowHeight / 100) * 20
    ) {
      this.setState({ position: 'fix' });
      //      console.log("fix");
    }
  }

  async componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.getWindowHeight();
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return !this.state.isSearch ? (
      <div style={{ zIndex: 100000 }}>
        <AnnouncementBar
          setShowBar={(val) => this.setState({ logoOffset: val })}
          showLive={this.state.showLive}
        />
        <div>
          <div
            className={
              this.state.logoColor === 'white'
                ? 'navbar-custom white'
                : 'navbar-custom'
            }
            style={{ zIndex: this.state.isModal ? 'unset' : 1000 }}
            id="navbar"
          >
            <NavbarBrand tag={Link} className="brand" to="/">
              <TMHLogo
                offset={this.state.logoOffset}
                logoColor={this.state.logoColor}
                showLogoText={this.state.showLogoText}
              />
            </NavbarBrand>

            {this.state.showSearch ? (
              <div>
                <Button
                  className="search"
                  onClick={() => this.setState({ overlayType: 'search' })}
                >
                  <img src="/static/svg/Search.svg" alt="Search" />
                </Button>
                <VideoOverlay
                  onClose={() => this.setState({ overlayType: null })}
                  data={this.state.overlayType}
                  whiteBackdrop={true}
                ></VideoOverlay>
              </div>
            ) : null}
            {this.state.showMenu ? (
              <Navbar
                color="white"
                expand="md"
                className={'navbar fixed-left'}
                style={{ zIndex: 1000 }}
              >
                <NavbarToggler onClick={this.toggle}>
                  <HamburgerMenu
                    isOpen={this.state.isOpen}
                    menuClicked={this.toggle.bind(this)}
                    width={24}
                    height={16}
                    strokeWidth={2}
                    borderRadius={45}
                    color="black"
                  />
                </NavbarToggler>
                <div className="navbar-expander">&nbsp;</div>
                <Collapse
                  className={this.state.logoOffset ? 'barOffset' : ''}
                  isOpen={this.state.isOpen}
                  navbar
                >
                  <Nav
                    navbar
                    className={
                      this.state.movingMenu
                        ? 'ml-auto ' + this.state.position
                        : 'ml-auto fixed'
                    }
                  >
                    {this.state.MainMenuItems
                      ? this.state.MainMenuItems.map((item: MainMenuItem) => {
                          const shouldExpand =
                            this.state.expand === item.location ||
                            this.props.location.pathname === item.location ||
                            item.children?.some(
                              (a) => a.location === this.props.location.pathname
                            );
                          return (
                            <NavItem
                              style={{
                                zIndex: 10000,
                              }}
                              key={item.location}
                            >
                              <RSNavLinkWrapper
                                expand={this.state.expand}
                                className="bigNav"
                                item={item}
                              />
                              {item.children != null ? (
                                <ExpandButton
                                  expand={this.state.expand}
                                  item={item.location}
                                  shouldExpand={shouldExpand}
                                  setExpand={() =>
                                    this.setState({
                                      expand:
                                        this.state.expand === item.location
                                          ? null
                                          : item.location,
                                    })
                                  }
                                />
                              ) : null}
                              {shouldExpand
                                ? item.children
                                    ?.filter((i) =>
                                      i.name === 'Notes'
                                        ? this.state.showNotes
                                        : true
                                    )
                                    .map((item2) => (
                                      <RSNavLinkWrapper
                                        expand={this.state.expand}
                                        key={item2?.location}
                                        className="smallNav"
                                        item={item2}
                                      />
                                    ))
                                : null}
                            </NavItem>
                          );
                        })
                      : null}
                  </Nav>
                </Collapse>
              </Navbar>
            ) : null}
          </div>
        </div>
      </div>
    ) : null;
  }
}
export default withRouter(HomeMenu);
