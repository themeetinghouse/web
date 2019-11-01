//import 'bootstrap/dist/css/bootstrap.min.css';
//import '../../src/custom.scss';
import { Auth } from 'aws-amplify';
import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink
} from 'reactstrap';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import VideoOverlay from "../VideoOverlay/VideoOverlay";
import MainMenuItems from './MainMenu.json';
import "./menu.scss"

interface Props extends RouteComponentProps {
  //logoColor?:string,
  pageConfig:any
  
}
interface State {
  urlHistoryState:any,
  overlayData:any,
  isOpen: boolean,
  userName: String,
  windowHeight: number,
  position: string,
  logoColor: string,
  showLogoText: boolean,
  showSearch:boolean,
  showMenu:boolean,
  movingMenu:boolean
}
//const bootstrap = require('react-bootstrap');

//import Popper from 'popper.js'
//import Head from 'next/head'
//import "../../bootstrap-override.css"
//import console = require('console');
class HomeMenu extends React.Component<Props, State>  {
  constructor(props: any) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      urlHistoryState:null,
      overlayData:null,
      isOpen: false,
      userName: "",
      windowHeight: 0,
      position: "unfix",
      movingMenu: this.props.pageConfig.movingMenu,
      logoColor: this.props.pageConfig.logoColor,
      showLogoText: this.props.pageConfig.showLogoText,
      showSearch: this.props.pageConfig.showSearch,
      showMenu: this.props.pageConfig.showMenu
    };
    this.handleScroll = this.handleScroll.bind(this)

  }

  getWindowHeight() {
    let deviceWindow = document.getElementById('navbar');
    if (deviceWindow != null) {
      let deviceWindowHeight = window.outerHeight
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

  videoOverlayClose() {
    this.setState({
      overlayData: null
    })
    window.history.pushState({},"Videos",this.state.urlHistoryState, )

  }
  handleSearchClick(data: any) {
    this.setState({
      overlayData: data,
      urlHistoryState: window.location.href
    })
    window.history.pushState({},"Videos","search", )
   
  }
  render() {
    // console.log(this.state.position)
    return (
 
      <div className={"navbar-custom " + this.state.logoColor} id="navbar">
        <NavbarBrand className="brand" href="/">
          <img src={"/static/logos/house-" + this.state.logoColor + ".png"} alt="Logo: Stylized House" className="logoHouse" onClick={() => { this.props.history.push("/") }} />
          {this.state.showLogoText ? (<img src={"/static/logos/tmh-text-" + this.state.logoColor + ".png"} alt="Logo: The Meeting House" className="logoText" onClick={() => { this.props.history.push("/") }} />) : null}
        </NavbarBrand>
        {this.state.showSearch ? <div><img src="/static/svg/Search.svg" className="search" alt="Search" onClick={()=>{this.handleSearchClick("search")}} /> 
        <VideoOverlay onClose={() => { this.videoOverlayClose() }} data={this.state.overlayData}></VideoOverlay></div>
:null}
        {this.state.showMenu ? <Navbar color="white" expand="md" className={"navbar fixed-left"}>
          <NavbarToggler className={"navbar-light"} onClick={this.toggle} />
          <div className="navbar-expander">&nbsp;</div>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar className={this.state.movingMenu?"ml-auto " + this.state.position:"ml-auto fixed"}>
              {
                MainMenuItems.map((item) => {
                  return (
                    <div key={item.location}>
                      <NavLink className="bigNav" key={item.location} href={item.location}>
                        {item.name}
                      </NavLink>
                      {(this.props.location.pathname === item.location || (item.children != null && item.children.map(a => a.location).includes(this.props.location.pathname)) ?
                        (item.children != null ?

                          item.children.map((item2) => {
                            return (<NavLink className="smallNav" key={item2.location} href={item2.location}>{item2.name}</NavLink>)
                          }) : null)
                        : null)}
                    </div>
                  )
                })
              }
            </Nav>
          </Collapse>
        </Navbar>:null}
      </div>
    );
  }
}
export default withRouter(HomeMenu)
