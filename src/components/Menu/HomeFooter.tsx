import React from 'react';
import { NavLink as RSNavLink } from 'reactstrap';
import { isMobileOnly } from 'react-device-detect';
import './HomeFooter.scss';
import { MDBRow, MDBCol, MDBFooter, MDBContainer } from 'mdbreact';
import { NavLink } from 'components/Link/Link';

const socialLinks = [
  {
    platform: 'Facebook',
    link: 'https://www.facebook.com/themeetinghousechurch',
    svg: '/static/svg/Facebook.svg',
  },
  {
    platform: 'Twitter',
    link: 'https://twitter.com/TheMeetingHouse',
    svg: '/static/svg/Twitter.svg',
  },
  {
    platform: 'Youtube',
    link: 'https://www.youtube.com/themeetinghouse',
    svg: '/static/svg/Youtube.svg',
  },
  {
    platform: 'Instagram',
    link: 'https://www.instagram.com/themeetinghouse',
    svg: '/static/svg/Instagram.svg',
  },
];

export default class HomeFooter extends React.Component {
  render() {
    return (
      <MDBFooter color="black" className="HomeFooter footer font-small ">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="6">
              <div style={{ textAlign: 'left' }}>
                <NavLink className="FooterNavLink" to="/connect">
                  Connect
                </NavLink>
                <NavLink className="FooterNavLink" to="/about-us">
                  About Us
                </NavLink>
                <NavLink className="FooterNavLink" to="/careers">
                  Staff &amp; Careers
                </NavLink>
                <RSNavLink
                  className="FooterNavLink"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://www.tmhrentals.com"
                >
                  Oakville Facility Rentals
                </RSNavLink>
              </div>
              <br />
              <br />
            </MDBCol>
            <MDBCol md="6">
              <p
                className="HomeFooterP"
                style={{
                  lineHeight: '16px',
                  fontSize: '12px',
                  fontFamily: 'Graphik Web',
                  color: '#1A1A1A',
                }}
              >
                <b>Main Office</b>
                <br />
                <a
                  href="https://goo.gl/maps/TqH1eGQ4pDxDZmqr7"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  2700 Bristol Circle
                </a>
                <br />
                Oakville, ON L6H 6E1
                <br />
                Canada
                <br />
                <br />
                <b>Phone</b>
                <br />
                <a href="tel:+1-905-287-7000">905-287-7000</a>
                <br />
                <br />
                <b>Email</b>
                <br />
                <a href="mailto:hello@themeetinghouse.com">
                  hello@themeetinghouse.com
                </a>
              </p>
            </MDBCol>
          </MDBRow>
          <br />
          <br />
          <div className="FooterSocial">
            {socialLinks.map((item) => {
              return (
                <a
                  key={item.platform}
                  href={item.link}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="link-plain FooterSocialA"
                  style={{ whiteSpace: 'nowrap', color: '#1A1A1A' }}
                >
                  <img
                    style={{
                      marginRight: '0.5vw',
                      marginTop: '2.5vw',
                      marginBottom: '2.5vw',
                    }}
                    className="FooterSocialImg"
                    src={item.svg}
                    alt={item.platform + ' Logo'}
                  />
                  {isMobileOnly ? '' : item.platform}
                </a>
              );
            })}
          </div>
          <div className="AppBadges">
            <a
              className="app-download-link"
              rel="noopener noreferrer"
              target="_blank"
              href="https://apps.apple.com/app/apple-store/id917315049?pt=1963922&ct=website&mt=8"
            >
              <img
                src="/static/black-download-on-the-app-store.svg"
                alt="Download on the App Store"
                className="app-store-badge"
              />
            </a>
            <a
              className="app-download-link"
              rel="noopener noreferrer"
              target="_blank"
              href="https://play.google.com/store/apps/details?id=org.tmh.takenote&utm_source=website&utm_medium=website"
            >
              <img
                src="/static/google-play-badge.png"
                alt="Get it on Google Play"
                className="play-store-badge"
              />
            </a>
          </div>
          <br />
          <br />
          <br />
          <p
            className="HomeFooterCopyright"
            style={{
              fontFamily: 'Graphik Web',
              fontSize: '12px',
              margin: '0px',
              padding: '5px',
              color: '#646469',
            }}
          >
            {' '}
            All Rights Reserved. &copy; {new Date().getFullYear()} The Meeting
            House
          </p>
        </MDBContainer>
      </MDBFooter>
    );
  }
}
