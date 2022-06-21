import { useEffect, useState } from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import { useHistory } from 'react-router-dom';
import './HorizMenu.scss';

type NavItem = {
  name: string;
  location: string;
  children?: NavItems;
};
type NavItems = Array<NavItem>;
interface Props {
  open: boolean;
  toggle: () => void;
  navigationItems: NavItems;
}
export default function HorizMenu({
  open,
  toggle,
  navigationItems,
}: Props): JSX.Element {
  const history = useHistory();
  const [navItems, setNavItems] = useState<NavItems>();
  useEffect(() => {
    const fetchNavItems = async () => {
      try {
        const response = await fetch('/static/data/MainMenu.json');
        const json = await response.json();
        console.log({ json: json });
        if (json) {
          setNavItems(json);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchNavItems(); // only fetches if there are items already in the nav, preferred for nav in auth flow
  }, []);

  return (
    <div
      className={'MyAccountNavContainer'}
      style={
        open
          ? {
              minHeight: '10vw',
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
        {navItems?.map((item) => {
          return (
            <a href={item.location} key={item.name} className="navItem">
              {item.name}
            </a>
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
      <div style={{ height: 50 }}></div>
    </div>
  );
}
