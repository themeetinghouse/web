import './MyAccountNav.scss';
import { Link, useLocation, useRouteMatch } from 'react-router-dom';
import HamburgerMenu from 'react-hamburger-menu';
import { useState } from 'react';
export default function MyAccountNav(): JSX.Element {
  const [openDrawer, setOpenDrawer] = useState(false);
  const a = useLocation();
  const { url } = useRouteMatch();
  return (
    <div
      className="MyAccountNavContainer"
      style={
        openDrawer
          ? {
              minHeight: '100vh',
              backgroundColor: '#1a1a1a',
              paddingTop: 40,
            }
          : {}
      }
    >
      <div
        className="MyAccountTMHLogoContainer"
        style={openDrawer ? { top: 40 } : {}}
      >
        <img
          className="MyAccountTMHLogo"
          src="/static/logos/tmh-logo-userportal.svg"
        />
      </div>
      <nav className={openDrawer ? 'MyAccountNavDrawer' : 'MyAccountNav'}>
        <Link
          className={a.pathname === '/account' ? 'active' : ''}
          to={`${url}`}
        >
          Home
        </Link>
        <Link
          className={a.pathname === '/account/give' ? 'active' : ''}
          to={`${url}/give`}
        >
          Give
        </Link>
        <Link
          className={a.pathname === '/account/transactions' ? 'active' : ''}
          to={`${url}/transactions`}
        >
          Transactions
        </Link>
        <Link
          className={a.pathname === '/account/payments' ? 'active' : ''}
          to={`${url}/payments`}
        >
          Payment Methods
        </Link>
      </nav>
      <div className="hamburgerToggle">
        <HamburgerMenu
          isOpen={openDrawer}
          menuClicked={() => setOpenDrawer((prev) => !prev)}
          width={32}
          height={16}
          strokeWidth={2}
          color="white"
        />
      </div>
      <div style={{ height: 200 }}></div>
    </div>
  );
}
