import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Button,
  NavItem,
} from 'reactstrap';
import HamburgerMenu from 'react-hamburger-menu';
import './menu.scss';
import moment from 'moment-timezone';

import { Link } from 'components/Link/Link';

import RSNavLinkWrapper from './RSNavLinkWrapper';
import TMHLogo from './TMHLogo';
import ExpandButton from './ExpandButton';
import YellowAnnouncement from 'components/AnnouncementBar/YellowAnnouncement';
import { useEditorPageContext } from 'pages/admin/Editor/contexts/EditorPageContext';
import { useHistory } from 'react-router-dom';
import useHandleNavSize from './useHandleNavSize';
import useFetchNavItems from './useFetchNavItems';
import useAndUpdateNavColor from './useAndUpdateNavColor';

const VideoOverlay = React.lazy(() => import('../VideoOverlay/VideoOverlay'));
const AnnouncementBar = React.lazy(
  () => import('../AnnouncementBar/AnnouncementBar')
);

interface SubMenuItem {
  name: string;
  location: string;
}

interface MainMenuItem {
  name: string;
  location: string;
  children?: SubMenuItem[];
}

interface Props {
  pageConfig?: any;
}

function HomeMenuContainer(props: { children: any }) {
  const { state } = useEditorPageContext();
  const { content } = state;
  return (
    <div
      style={
        content ? { zIndex: 100000, visibility: 'hidden' } : { zIndex: 100000 }
      }
    >
      {props.children}
    </div>
  );
}

export default function HomeMenu(props: Props) {
  const { pageConfig } = props;

  const { position } = useHandleNavSize();
  const { MainMenuItems } = useFetchNavItems(pageConfig);
  const showLive = pageConfig.showLive;
  const showLogoText = pageConfig.showLogoText;
  const isSearch = pageConfig.isSearch;
  const showSearch = pageConfig.showSearch;
  const showMenu = pageConfig.showMenu;

  const { color } = useAndUpdateNavColor(pageConfig.logoColor, 'tmhlogo');

  const [overlayType, setOverlayType] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [logoOffset, setLogoOffset] = useState(false);
  const [expandParentNavItem, setExpandParentNavItem] = useState<any>(null);
  const showNotes =
    moment.tz('America/Toronto').isoWeekday() === 7 ||
    (moment.tz('America/Toronto').isoWeekday() === 1 &&
      moment.tz('America/Toronto').hour() <= 12);

  const history = useHistory();

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return !isSearch ? (
    <HomeMenuContainer>
      <AnnouncementBar
        setShowBar={(val) => setLogoOffset(val)}
        showLive={showLive}
      />
      {pageConfig.showYellowBar && !logoOffset ? (
        <YellowAnnouncement
          title={pageConfig.showYellowBar.text}
          onClick={() => {
            if (pageConfig.showYellowBar.action.includes('http')) {
              window.open(pageConfig.showYellowBar.action, '_blank');
            } else {
              history.push(pageConfig.showYellowBar.action);
            }
          }}
        />
      ) : null}

      <div>
        <div
          className={
            color === 'white' ? 'navbar-custom white' : 'navbar-custom'
          }
          style={{ zIndex: pageConfig.isModal ? 'unset' : 1000 }}
          id="navbar"
        >
          <NavbarBrand tag={Link} className="brand" to="/">
            <TMHLogo
              offset={logoOffset || pageConfig.showYellowBar}
              color={color}
              showLogoText={showLogoText}
            />
          </NavbarBrand>

          {showSearch ? (
            <div>
              <Button
                aria-label="Search the meeting house website"
                className={`search ${
                  pageConfig.showYellowBar || logoOffset ? 'offset' : ''
                }`}
                onClick={() => setOverlayType('search')}
              >
                <img src="/static/svg/Search.svg" alt="Search" />
              </Button>
              <VideoOverlay
                onClose={() => setOverlayType(null)}
                data={overlayType}
                whiteBackdrop={true}
              ></VideoOverlay>
            </div>
          ) : null}
          {showMenu ? (
            <Navbar
              color="white"
              expand="md"
              className={'navbar fixed-left'}
              style={{ zIndex: 1000 }}
            >
              <NavbarToggler onClick={toggle}>
                <HamburgerMenu
                  isOpen={isOpen}
                  menuClicked={toggle}
                  width={24}
                  height={16}
                  strokeWidth={2}
                  borderRadius={45}
                  color="black"
                />
              </NavbarToggler>
              <div className="navbar-expander">&nbsp;</div>
              <Collapse
                className={logoOffset ? 'barOffset' : ''}
                isOpen={isOpen}
                navbar
              >
                <Nav
                  navbar
                  className={
                    pageConfig.movingMenu
                      ? 'ml-auto ' + position
                      : 'ml-auto fixed'
                  }
                >
                  {MainMenuItems
                    ? MainMenuItems.map((item: MainMenuItem) => {
                        const shouldExpand =
                          expandParentNavItem === item.location ||
                          location.pathname === item.location ||
                          item.children?.some(
                            (a) => a.location === location.pathname
                          );
                        return (
                          <NavItem
                            style={{
                              zIndex: 10000,
                            }}
                            key={item.location}
                          >
                            <RSNavLinkWrapper
                              expand={expandParentNavItem}
                              className="bigNav"
                              item={item}
                            />
                            {item.children != null && item.children.length ? (
                              <ExpandButton
                                expand={expandParentNavItem}
                                item={item.location}
                                shouldExpand={shouldExpand}
                                setExpand={() =>
                                  setExpandParentNavItem(
                                    expandParentNavItem === item.location
                                      ? null
                                      : item.location
                                  )
                                }
                              />
                            ) : null}
                            {shouldExpand
                              ? item.children
                                  ?.filter((i) =>
                                    i.name === 'Notes' ? showNotes : true
                                  )
                                  .map((item2) => (
                                    <RSNavLinkWrapper
                                      expand={expandParentNavItem}
                                      key={item2?.location}
                                      className="smallNav"
                                      item={item2}
                                    />
                                  ))
                              : null}
                          </NavItem>
                        );
                      })
                    : null}
                </Nav>
              </Collapse>
            </Navbar>
          ) : null}
        </div>
      </div>
    </HomeMenuContainer>
  ) : null;
}
