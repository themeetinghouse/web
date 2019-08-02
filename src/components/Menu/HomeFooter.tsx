//import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { NavLink } from 'reactstrap';
//const bootstrap = require('react-bootstrap');
//import Popper from 'popper.js'
//import Head from 'next/head'
//import "../../bootstrap-override.css"
//import console = require('console');
//import "./menu.scss"
import { MDBRow, MDBCol, MDBFooter, MDBContainer } from 'mdbreact'
export default class HomeFooter extends React.Component {
  render() {
    return (
      <MDBFooter color="black" style={{ color: "#1A1A1A", backgroundColor: "#EFEFF0", paddingTop:"2vw", marginTop:"2vw"}} className="footer font-small">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="6">
              <NavLink style={{ lineHeight: "32px", fontWeight: "bold", fontSize: "22px", color: "#1A1A1A" }} href="/about-us">About Us</NavLink>
              <NavLink style={{ lineHeight: "32px", fontWeight: "bold", fontSize: "22px", color: "#1A1A1A" }} href="contact">Contact</NavLink>
              <NavLink style={{ lineHeight: "32px", fontWeight: "bold", fontSize: "22px", color: "#1A1A1A" }} href="http://www.tmhrentals.com">Oakville Facility Rentals</NavLink>
              <br />
              <br />
              <img src="/static/google-play-badge.png" width="135" height="52" alt="Download App on Google Play Store" />
              <a href="https://apps.apple.com/us/app/meeting-house/id917315049?mt=8"><img src="/static/AppleStore-badge.svg" width="135" height="38" alt="Download App on Apple Store" /></a>
            </MDBCol>
            <MDBCol md="6">
              <p style={{ lineHeight: "16px", fontSize: "12px", color: "#1A1A1A" }}>
                <b>Main Office</b><br />
                2700 Bristol Circle<br />
                Oakville, ON L6H 6E1<br /><br />
                <b>Phone</b><br />
                (905) 287 - 7000<br /><br />
                <b>Email</b><br />
                <a href="mailto:info@themeetinghouse.com" style={{ color: "#1A1A1A" }}>info@themeetinghouse.com</a></p>
            </MDBCol>
          </MDBRow>
          <br />
          <br />
          <div style={{ fontSize: "12px", fontWeight: "bold" }}>
            <a href="https://www.facebook.com/themeetinghousechurch/" style={{ color: "#1A1A1A" }}><img style={{ marginRight: "0.5vw", }} src="/static/svg/Facebook.svg" alt="Facebook Logo" />Facebook</a>
            <a href="https://twitter.com/TheMeetingHouse" style={{ color: "#1A1A1A" }}><img style={{ marginRight: "0.5vw", marginLeft: "3vw" }} src="/static/svg/Twitter.svg" alt="Twitter Logo" />Twitter</a>
            <a href="https://www.youtube.com/themeetinghouse" style={{ color: "#1A1A1A" }}><img style={{ marginRight: "0.5vw", marginLeft: "3vw" }} src="/static/svg/Youtube.svg" alt="Youtube Logo" />Youtube</a>
            <a href="https://www.instagram.com/themeetinghouse/" style={{ color: "#1A1A1A" }}><img style={{ marginRight: "0.5vw", marginLeft: "3vw" }} src="/static/svg/Instagram.svg" alt="Instagram Logo" />Instagram</a>
          </div>
          <br />
          <br />
          <br />
          <p style={{ fontSize: "12px", margin: "0px", padding: "5px", color: "#646469" }}>             All Rights Reserved. &copy; {new Date().getFullYear()} The Meeting House</p>
        </MDBContainer>
      </MDBFooter>
    );
  }
}