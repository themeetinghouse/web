import { useContext, useEffect } from 'react';
import './NewGiveItem.scss';
import ReactGA from 'react-ga';
import { Link } from 'components/Link/Link';
import { GEContext } from './GiveComponents/GEContext';
import GiveExperience from './GiveComponents/GiveExperience';
//import { GEActionType, GEPage } from './GiveComponents/GETypes';

interface Props {
  content: any;
}
// name tbd
export default function NewGiveItem(props: Props): JSX.Element {
  const { state } = useContext(GEContext);
  const renderGiveOtherWays = () => {
    const links = props.content.extendedFamilyLinks ?? [];
    return (
      <div className="GiveExtendedContainer">
        <div className="GiveItemOtherWays">
          {props.content.extendedFamilyLinksTitle}
        </div>
        <div className="GiveExtendedContainer">
          <div className="GiveItemOtherWayGroup">
            {links.map((link: any) => (
              <a
                key={link.title}
                className="GiveItemOtherWay"
                rel="noreferrer"
                target="_blank"
                href={link.url}
              >
                <img src="/static/logos/house-black-sm.png" />
                <span>{link.title}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  };
  useEffect(() => {
    if (window.location.hostname === 'localhost')
      ReactGA.initialize('UA-4554612-19');
    else if (window.location.hostname.includes('beta'))
      ReactGA.initialize('UA-4554612-19');
    else ReactGA.initialize('UA-4554612-3');
  }, []);
  console.log(state);
  const renderGiveButtons = () => {
    return (
      <div className="GEButtonContainer">
        {/* <button
          className={`GEButton ${
            state.currentPage !== GEPage.ONLINE_BANKING ? 'GEButtonWhite' : ''
          }`}
          onClick={(e) => {
            e.preventDefault();
            dispatch({ type: GEActionType.NAVIGATE_GIVE_NOW });
          }}
        >
          Give Now
        </button> */}
        {/* <button
          className={`GEButton ${
            state.currentPage === GEPage.ONLINE_BANKING ? 'GEButtonWhite' : ''
          }`}
          onClick={(e) => {
            e.preventDefault();
            dispatch({
              type: GEActionType.NAVIGATE_ONLINE_BANKING,
              payload: props.content.onlineBankingInfo,
            });
          }}
        >
          Online Banking
        </button> */}
        <Link
          style={{
            color: 'white',

            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 12,
          }}
          to="/account/signin"
        >
          {state.user ? 'Click here to ' : 'Login to '}manage your giving
        </Link>
      </div>
    );
  };
  return (
    <>
      <div className="giveItemDiv1">
        <form>
          <h1 className="GiveItemH1">{props.content.header1}</h1>
          <h2 className="GiveItemH2">{props.content.header2}</h2>
          <hr className="GiveItemHR" />
          <div className="GiveItemText">{props.content.text1}</div>
          <div className="GiveItemText">{props.content.text2}</div>
          <div className="GiveItemText"></div>
          <div className="GiveItemText">{props.content.text4}</div>
          <div className="GiveItemText">{props.content.text5}</div>
          {renderGiveButtons()}

          <div className="GiveItemBottom"></div>
        </form>
      </div>

      <div className="giveItemDiv2">
        <div className="giveItemDiv3">
          {state.currentPage ? <GiveExperience /> : null}
          {renderGiveOtherWays()}
        </div>
      </div>
    </>
  );
}
