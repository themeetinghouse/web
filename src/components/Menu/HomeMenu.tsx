import { Auth } from 'aws-amplify';
import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Button
} from 'reactstrap';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import VideoOverlay from "../VideoOverlay/VideoOverlay";
import HamburgerMenu from 'react-hamburger-menu';
import "./menu.scss"
import moment from 'moment-timezone'
import * as queries from '../../graphql/queries';
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api/lib/types';
import { API } from 'aws-amplify';
import { ListLivestreamsQuery } from '../../API';
import { Link, NavLink } from 'components/Link/Link';

interface SubMenuItem {
  name: string;
  location: string;
}

interface MainMenuItem {
  name: string;
  location: string,
  children?: SubMenuItem[];
}

interface Props extends RouteComponentProps {
  pageConfig: any

}
interface State {
  MainMenuItems: any,
  overlayType: string | null,
  isOpen: boolean,
  userName: string,
  windowHeight: number,
  position: string,
  logoColor: string,
  showLogoText: boolean,
  showSearch: boolean,
  showMenu: boolean,
  movingMenu: boolean,
  showLive: boolean,
  showLiveEvent: boolean,
  liveTitle?: string | null,
  expand: any
  showNotes: boolean
}

class HomeMenu extends React.Component<Props, State>  {
  constructor(props: any) {
    super(props);
    fetch('/static/data/MainMenu.json').then(function (response) {
      return response.json();
    })
      .then((myJson) => {
        this.setState({ MainMenuItems: myJson });
      })

    this.toggle = this.toggle.bind(this);
    this.state = {
      MainMenuItems: null,
      overlayType: null,
      isOpen: false,
      userName: "",
      liveTitle: "",
      windowHeight: 0,
      position: "unfix",
      movingMenu: this.props.pageConfig.movingMenu,
      logoColor: this.props.pageConfig.logoColor,
      showLogoText: this.props.pageConfig.showLogoText,
      showSearch: this.props.pageConfig.showSearch,
      showMenu: this.props.pageConfig.showMenu,
      showLive: this.props.pageConfig.showLive,
      showLiveEvent: false,
      expand: null,
      showNotes: moment.tz('America/Toronto').isoWeekday() === 7 || (moment.tz('America/Toronto').isoWeekday() === 1 && moment.tz('America/Toronto').hour() <= 12)
    };
    this.getLive()
    this.handleScroll = this.handleScroll.bind(this)
  }

  async getLive() {
    const today = moment.tz("America/Toronto").format('YYYY-MM-DD')
    try {
      const json: any = await API.graphql({
        query: queries.listLivestreams,
        variables: { filter: { date: { eq: today } } },
        authMode: GRAPHQL_AUTH_MODE.API_KEY
      });
      const livestreams: ListLivestreamsQuery = json.data
      livestreams?.listLivestreams?.items?.forEach(item => {
        const rightNow = moment().tz("America/Toronto").format('HH:mm')
        const showTime = item?.startTime && item?.endTime && rightNow >= item.startTime && rightNow <= item.endTime

        if (showTime && this.state.showLive) {
          console.log("ShowLive")
          this.setState({ liveTitle: item?.homepageLink, showLiveEvent: true })
        }
      })
    } catch (err) {
      console.error(err)
    }
  }

  getWindowHeight() {
    const deviceWindow = document.getElementById('navbar');
    if (deviceWindow != null) {
      const deviceWindowHeight = window.outerHeight
      //    console.log("from getinitiatlhight" + deviceWindowHeight);
      this.setState({
        windowHeight: deviceWindowHeight
      });
    }
  }
  handleScroll() {
    this.getWindowHeight();
    //  console.log("scrolll" + this.state.windowHeight);
    if (window.scrollY <= this.state.windowHeight - ((this.state.windowHeight / 100) * 20)) {
      this.setState({ position: "unfix" })
      //     console.log("unfix");
    } else if (window.scrollY > this.state.windowHeight - ((this.state.windowHeight / 100) * 20)) {
      this.setState({ position: "fix" })
      //      console.log("fix");
    }
  }
  getState = async () => {
    Auth.currentAuthenticatedUser().then(user => {
      console.log(user.username);
      this.setState({ userName: user.username });
    }
    ).catch(err => {
      console.log("no user" + err);
      this.setState({ userName: "No User" });
    }
    )
  };


  componentDidMount() {
    this.getState();
    window.addEventListener('scroll', this.handleScroll);
    this.getWindowHeight();
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
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
    // console.log(this.state.position)
    return (

      <div className={this.state.logoColor === "white" ? "navbar-custom white" : "navbar-custom"} id="navbar">
        <NavbarBrand tag={Link} className="brand" to="/">
          <img src={"/static/logos/house-" + this.state.logoColor + ".png"} alt="Logo: Stylized House" className="logoHouse" />
          {this.state.showLogoText ? (<img src={"/static/logos/tmh-text-" + this.state.logoColor + ".png"} alt="Logo: The Meeting House" className="logoText" />) : null}
        </NavbarBrand>
        {this.state.showLiveEvent ? <Link className="liveEvent" to="/live">{this.state.liveTitle}</Link> : null}
        {this.state.showSearch
          ? <div>
            <img src="/static/svg/Search.svg" className="search" alt="Search" onClick={() => this.setState({ overlayType: 'search' })} />
            <VideoOverlay onClose={() => this.setState({ overlayType: null })} data={this.state.overlayType}></VideoOverlay>
          </div>
          : null}
        {this.state.showMenu ? <Navbar color="white" expand="md" className={"navbar fixed-left"}>
          <NavbarToggler onClick={this.toggle}>
            <HamburgerMenu isOpen={this.state.isOpen} menuClicked={this.toggle.bind(this)} width={24} height={16} strokeWidth={2} borderRadius={45} color="black" />
          </NavbarToggler>
          <div className="navbar-expander">&nbsp;</div>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar className={this.state.movingMenu ? "ml-auto " + this.state.position : "ml-auto fixed"}>
              {
                this.state.MainMenuItems ?
                  this.state.MainMenuItems.map((item: MainMenuItem) => {
                    const shouldExpand = (
                      this.state.expand === item.location ||
                      this.props.location.pathname === item.location ||
                      item.children?.some(a => a.location === this.props.location.pathname)
                    );
                    return (
                      <div key={item.location} className="linkContainer">
                        <NavLink
                          className="bigNav"
                          activeStyle={{ fontWeight: 'bold' }}
                          style={{ display: 'inline-block' }}
                          key={item.location}
                          to={item.location}>
                          {item.name}
                        </NavLink>
                        {item.children != null ?
                          <Button className="expanderButton" onClick={() => { this.setState({ expand: this.state.expand === item.location ? null : item.location }) }}>
                            <div className={shouldExpand ? "vertical-line xstate" : "vertical-line"}></div>
                            <div className={shouldExpand ? "horizontal-line xstate" : "horizontal-line"}></div>
                          </Button>
                          : null}
                        {(shouldExpand ?
                          item.children?.filter(i => i.name === 'Notes' ? this.state.showNotes : true).map(item2 =>
                            <NavLink
                              className="smallNav"
                              key={item2.location}
                              to={item2.location}
                              activeStyle={{ fontWeight: 'bold' }}>
                              {item2.name}
                            </NavLink>
                          )
                          : null)}
                      </div>
                    )
                  }) : null
              }
            </Nav>
          </Collapse>
        </Navbar> : null}
      </div>
    );
  }
}
export default withRouter(HomeMenu)
