import './MyAccountNav.scss';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import HamburgerMenu from 'react-hamburger-menu';
import { useState } from 'react';
import { useEffect } from 'react';
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from 'reactstrap';
import { Auth } from 'aws-amplify';
import { useUser } from '../Auth/UserContext';

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
  const navigate = useNavigate();
  const { state } = useUser();
  const [navItems, setNavItems] = useState<NavItems>(navigationItems);
  const [userGroups, setUserGroups] = useState<any>([]);
  useEffect(() => {
    console.log('getting nav');
    const fetchNavItems = async () => {
      try {
        const user1 = await Auth.currentAuthenticatedUser();
        console.log({ user1 });
        const groups =
          user1.signInUserSession.accessToken.payload['cognito:groups'];
        console.log({ groups });
        setUserGroups(groups);
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
        console.error({ err });
      }
    };
    fetchNavItems();
  }, [navigationItems]);

  const { pathname } = useLocation();
  const isAdmin = userGroups?.includes('Admin');
  const isLocationManager = userGroups?.includes('LocationManager') || isAdmin;
  const isNotesManager = userGroups?.includes('Notes') || isAdmin;
  const isBlogsManager = userGroups?.includes('Bloggers') || isAdmin;
  const isEditorManager = userGroups?.includes('WebEditorManager') || isAdmin;
  const isGlobalContentManager =
    userGroups?.includes('GlobalContentManager') || isAdmin;
  const shouldShowAdmin =
    isAdmin ||
    isLocationManager ||
    isNotesManager ||
    isBlogsManager ||
    isEditorManager ||
    isGlobalContentManager;
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
          onClick={() => navigate('/')}
          alt="The Meeting House, Home"
          className="MyAccountTMHLogo"
          src="/static/logos/tmh-logo-userportal.svg"
        />
      </div>
      <nav className={open ? 'MyAccountNav' : 'MyAccountNav hide'}>
        {navItems
          .filter((item) => state.isProfileComplete)
          .filter((item) => {
            return (
              item.label !== 'Admin' ||
              (item.label === 'Admin' && shouldShowAdmin)
            );
          })
          .map(({ label, link, custom }) => {
            return custom ? (
              <a href={link} className="navItem">
                {label}
              </a>
            ) : label === 'Admin' ? (
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle className="navItem" nav>
                  {'Website Management'}
                </DropdownToggle>
                <DropdownMenu right>
                  {isGlobalContentManager ? (
                    <DropdownItem onClick={() => navigate(`admin/livestream`)}>
                      Livestream
                    </DropdownItem>
                  ) : null}
                  {isNotesManager ? (
                    <DropdownItem
                      onClick={() => navigate(`admin/create-notes`)}
                    >
                      Notes
                    </DropdownItem>
                  ) : null}
                  {isBlogsManager ? (
                    <DropdownItem onClick={() => navigate(`admin/create-blog`)}>
                      Blogs
                    </DropdownItem>
                  ) : null}
                  {isGlobalContentManager ? (
                    <DropdownItem onClick={() => navigate(`admin/videos`)}>
                      Media
                    </DropdownItem>
                  ) : null}
                  {isLocationManager ? (
                    <DropdownItem
                      onClick={() => navigate(`admin/announcements`)}
                    >
                      Announcements
                    </DropdownItem>
                  ) : null}
                  {isLocationManager ? (
                    <DropdownItem
                      onClick={() => navigate(`admin/homechurches`)}
                    >
                      Homechurches
                    </DropdownItem>
                  ) : null}
                  {isAdmin ? (
                    <DropdownItem onClick={() => navigate(`admin/redirects`)}>
                      URL Redirects
                    </DropdownItem>
                  ) : null}
                  {isLocationManager ? (
                    <DropdownItem onClick={() => navigate(`admin/locations`)}>
                      Locations
                    </DropdownItem>
                  ) : null}
                  {isLocationManager ? (
                    <DropdownItem onClick={() => navigate(`admin/compassion`)}>
                      Compassion Partners
                    </DropdownItem>
                  ) : null}
                  {isAdmin ? (
                    <DropdownItem onClick={() => navigate(`admin/permissions`)}>
                      User Permissions
                    </DropdownItem>
                  ) : null}
                  {isLocationManager ? (
                    <DropdownItem onClick={() => navigate(`admin/people`)}>
                      People
                    </DropdownItem>
                  ) : null}
                  {isGlobalContentManager || isEditorManager ? (
                    <DropdownItem onClick={() => navigate(`admin/editor`)}>
                      Web Editor
                    </DropdownItem>
                  ) : null}
                  {isAdmin ? (
                    <DropdownItem onClick={() => navigate(`admin/clearCache`)}>
                      Clear Cache
                    </DropdownItem>
                  ) : null}
                </DropdownMenu>
              </UncontrolledDropdown>
            ) : (
              <Link
                key={label}
                className={
                  pathname === '/account' + link ||
                  (pathname === '/account' && link === '/')
                    ? 'navItem active'
                    : 'navItem'
                }
                to={`${link !== '/' ? link : ''}`}
              >
                {label}
              </Link>
            );
          })}
      </nav>
      {!navigationItems.length ? (
        <img
          aria-label="Close"
          className="CloseButton"
          onClick={() => navigate('/')}
          src="/static/svg/Close-Cancel-White.svg"
        />
      ) : null}
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
