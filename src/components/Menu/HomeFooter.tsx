import { Link } from 'components/Link/Link';
import { Col, Container, Row } from 'reactstrap';
import './HomeFooter.scss';
import { useEffect, useState } from 'react';
import { Storage } from 'aws-amplify';
export default function HomeFooter() {
  const [footerData, setFooterData] = useState<any>(null);
  useEffect(() => {
    (async () => {
      try {
        const url = await Storage.get('editor/footer.json');
        const response = await fetch(url);
        const json = await response.json();
        setFooterData(json);
      } catch (error) {
        console.error({ error });
        setFooterData(fallbackData);
      }
    })();
  }, []);
  if (!footerData) return null;
  return (
    <div className="HomeFooter footer">
      <Container fluid>
        <Row>
          <Col md="6">
            <div className="text-left">
              {footerData?.navLinks?.map((item: any) => {
                const linksProps: any = {
                  className: 'FooterNavLink',
                  to: item.link,
                };
                console.log({ navLINK: item.link });
                if (
                  item.link.includes('http') ||
                  item.link.includes('www') ||
                  item.link.includes('https') ||
                  item.link[0] !== '/'
                ) {
                  linksProps['target'] = '_blank';
                  linksProps['rel'] = 'noopener noreferrer';
                  const url = !item.link.includes('http')
                    ? `https://${item.link}`
                    : item.link;
                  return (
                    <a key={item.link} href={url} {...linksProps}>
                      {item.label}
                    </a>
                  );
                }

                return (
                  <Link key={item.link} {...linksProps}>
                    {item.label}
                  </Link>
                );
              })}
            </div>
            <br />
            <br />
          </Col>
          <Col md="6">
            <p className="HomeFooterP">
              {footerData?.contact?.name ? (
                <>
                  <b>{footerData?.contact?.name}</b>
                  <br />
                </>
              ) : null}
              {footerData?.contact?.address1 ? (
                <>
                  <a
                    href="https://goo.gl/maps/TqH1eGQ4pDxDZmqr7"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    2700 Bristol Circle
                  </a>
                  <br />
                </>
              ) : null}
              {footerData?.contact?.address2 ? (
                <>
                  {footerData?.contact?.address2}
                  <br />
                </>
              ) : null}

              {footerData?.contact?.country ? (
                <>{footerData?.contact?.country}</>
              ) : null}
              <br />
              <br />
              {footerData?.contact?.phone ? (
                <>
                  <b>Phone</b>
                  <br />
                  <a href={`tel:+1-${footerData.contact.phone}`}>
                    {footerData.contact.phone}
                  </a>
                </>
              ) : null}
              <br />
              <br />
              {footerData?.contact?.email ? (
                <>
                  <b>Email</b>
                  <br />
                  <a href={`mailto:${footerData?.contact?.email}`}>
                    {footerData?.contact?.email}
                  </a>
                </>
              ) : null}
            </p>
          </Col>
        </Row>
        <br />
        <br />
        <div className="FooterSocial">
          {footerData?.socials?.map((item: any) => {
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
          {footerData?.appBadges?.map((item: any) => {
            return (
              <a
                key={item.platform}
                className="app-download-link"
                href={item.link}
                rel="noopener noreferrer"
                target="_blank"
              >
                <img className="store-badge" src={item.svg} alt={item.alt} />
              </a>
            );
          })}
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

const fallbackData = {
  socials: [
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
  ],
  navLinks: [
    {
      label: 'Connect',
      link: '/connect',
    },
    {
      label: 'About',
      link: '/about-us',
    },
    {
      label: 'Staff & Careers',
      link: '/careers',
    },
    {
      label: 'Oakville Facility Rentals',
      link: 'http://www.tmhrentals.com',
    },
  ],
  appBadges: [
    {
      link: 'https://apps.apple.com/app/apple-store/id917315049?pt=1963922&ct=website&mt=8',
      svg: '/static/black-download-on-the-app-store.svg',
      alt: 'Download on the App Store',
    },
    {
      link: 'https://play.google.com/store/apps/details?id=org.tmh.takenote&utm_source=website&utm_medium=website',
      svg: '/static/google-play-badge.png',
      alt: 'Get it on Google Play',
    },
  ],
  contact: {
    email: 'hello@themeetinghouse.com',
    phone: '905-287-7000',
    name: 'Main Office',
    address1: '2700 Bristol Circle',
    address2: 'Oakville, ON L6H 6E1',
    country: 'Canada',
  },
};