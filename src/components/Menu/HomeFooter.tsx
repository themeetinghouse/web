import { Link } from 'components/Link/Link';
import { Col, Container, Row } from 'reactstrap';
import './HomeFooter.scss';

export default function HomeFooter() {
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
      platform: 'YouTube',
      link: 'https://www.youtube.com/themeetinghouse',
      svg: '/static/svg/Youtube.svg',
    },
    {
      platform: 'Instagram',
      link: 'https://www.instagram.com/themeetinghouse',
      svg: '/static/svg/Instagram.svg',
    },
    {
      platform: 'TikTok',
      link: 'https://www.tiktok.com/@themeetinghouse?lang=en',
      svg: '/static/svg/tiktok.svg',
    },
    {
      platform: 'RSS Blog',
      link: 'https://www.themeetinghouse.com/static/sitemap2.xml',
      svg: '/static/svg/rss.svg',
    },
    {
      platform: 'Discord',
      link: 'https://discord.gg/f2XEMyNVVr',
      svg: '/static/svg/Discord.svg',
    },
  ];

  return (
    <div className="HomeFooter footer">
      <Container fluid>
        <Row>
          <Col md="6">
            <div className="text-left">
              <Link className="FooterNavLink" to="/connect">
                Connect
              </Link>
              <Link className="FooterNavLink" to="/about-us">
                About Us
              </Link>
              <Link className="FooterNavLink" to="/careers">
                Staff &amp; Careers
              </Link>
              <Link
                className="FooterNavLink"
                target="_blank"
                rel="noopener noreferrer"
                to="http://www.tmhrentals.com"
              >
                Oakville Facility Rentals
              </Link>
            </div>
            <br />
            <br />
          </Col>
          <Col md="6">
            <p className="HomeFooterP">
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
          </Col>
        </Row>
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
              >
                <img
                  className="FooterSocialImg"
                  src={item.svg}
                  alt={item.platform + ' Logo'}
                  width={24}
                  height={24}
                />
                <span className="social-platform-name">{item.platform}</span>
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
        <p className="HomeFooterCopyright">
          All Rights Reserved. &copy; {new Date().getFullYear()} The Meeting
          House
        </p>
      </Container>
    </div>
  );
}
