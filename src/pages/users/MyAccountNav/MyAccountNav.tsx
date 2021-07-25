import './MyAccountNav.scss';
import { Link, useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import HamburgerMenu from 'react-hamburger-menu';
import { useState } from 'react';
import { useEffect } from 'react';

type NavItem = {
  label: string;
  link: string;
  custom?: boolean;
};
type NavItems = Array<NavItem>;
interface Props {
  open: boolean;
  toggle: () => void;
  navigationItems: NavItems;
}
export default function MyAccountNav({
  open,
  toggle,
  navigationItems,
}: Props): JSX.Element {
  const history = useHistory();
  const [navItems, setNavItems] = useState<NavItems>(navigationItems);
  useEffect(() => {
    const fetchNavItems = async () => {
      try {
        const response = await fetch(
          '/static/content/account-portal/custom-nav-items.json'
        );
        const json = await response.json();
        if (json?.page?.content?.[0].items) {
          const filterMalformed = json?.page?.content?.[0].items.filter(
            (navItem: any) => navItem.label && navItem.link && navItem.custom
          );
          setNavItems((prev) => [...prev, ...filterMalformed]);
        }
      } catch (err) {
        console.log(err);
      }
    };
    if (navigationItems.length) fetchNavItems(); // only fetches if there are items already in the nav, preferred for nav in auth flow
  }, []);

  const { pathname } = useLocation();
  const { url } = useRouteMatch();
  return (
    <div
      className={'MyAccountNavContainer'}
      style={
        open
          ? {
              minHeight: '100vh',
              backgroundColor: '#1a1a1a',
            }
          : {}
      }
    >
      <div className="MyAccountTMHLogoContainer">
        <img
          onClick={() => history.push('/')}
          alt="The Meeting House, Home"
          className="MyAccountTMHLogo"
          src="/static/logos/tmh-logo-userportal.svg"
        />
      </div>
      <nav className={open ? 'MyAccountNav' : 'MyAccountNav hide'}>
        {navItems.map(({ label, link, custom }) => {
          return custom ? (
            <a href={link} className="navItem">
              {label}
            </a>
          ) : (
            <Link
              key={label}
              className={
                pathname === '/account' + link ||
                (pathname === '/account' && link === '/')
                  ? 'navItem active'
                  : 'navItem'
              }
              to={`${url}${link !== '/' ? link : ''}`}
            >
              {label}
            </Link>
          );
        })}
      </nav>
      {navigationItems.length ? (
        <div tabIndex={0} className="hamburgerToggle">
          <HamburgerMenu
            isOpen={open}
            menuClicked={() => toggle()}
            width={32}
            height={16}
            strokeWidth={1.5}
            color="white"
          />
        </div>
      ) : null}
      <div style={{ height: 200 }}></div>
    </div>
  );
}
