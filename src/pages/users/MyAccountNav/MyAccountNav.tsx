import './MyAccountNav.scss';
import { Link, useLocation, useRouteMatch } from 'react-router-dom';
import HamburgerMenu from 'react-hamburger-menu';
import { useState } from 'react';
import { useEffect } from 'react';
interface Props {
  open: boolean;
  toggle: () => void;
}
export default function MyAccountNav({ open, toggle }: Props): JSX.Element {
  const [navItems, setNavItems] = useState<Array<any>>([
    { label: 'Home', link: '/' },
    { label: 'Give', link: '/give' },
    { label: 'Transactions', link: '/transactions' },
    { label: 'Payment Methods', link: '/payments' },
    { label: 'Profile', link: '/profile' },
  ]);
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
    fetchNavItems();
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
          alt="Logo, Stylized House"
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
      <div style={{ height: 200 }}></div>
    </div>
  );
}
