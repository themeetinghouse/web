import './MyAccountNav.scss';
import { Link, useLocation, useRouteMatch } from 'react-router-dom';
import HamburgerMenu from 'react-hamburger-menu';
import { useState } from 'react';
interface Props {
  open: boolean;
  toggle: () => void;
}
export default function MyAccountNav({ open, toggle }: Props): JSX.Element {
  const [navItems] = useState([
    { name: 'Home', path: '/' },
    { name: 'Give', path: '/give' },
    { name: 'Transactions', path: '/transactions' },
    { name: 'Payment Methods', path: '/payments' },
  ]);
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
        {navItems.map(({ name, path }, index) => {
          return (
            <Link
              key={name}
              className={
                pathname === '/account' + path ||
                (pathname === '/account' && path === '/')
                  ? 'navItem active'
                  : 'navItem'
              }
              to={`${url}${path !== '/' ? path : ''}`}
            >
              {name}
            </Link>
          );
        })}
      </nav>
      <div aria-role="button" tabIndex={0} className="hamburgerToggle">
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
