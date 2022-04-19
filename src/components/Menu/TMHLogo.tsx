import { useState } from 'react';
import './menu.scss';
import { flipElementColor } from './navUtils';

type TMHLogoProps = {
  logoColor: string;
  offset: boolean;
  showLogoText: boolean;
};
const hide = {
  opacity: 0,
  transition: 'all 0.2s ease-in-out',
};
const show = {
  opacity: 1,
  transition: 'all 0.2s ease-in-out',
};

const determineColor = (logoColor: string) => {
  if (logoColor === 'white') return '#FFFFFF';
  if (logoColor === 'black') return '#1A1A1A';
  return '#FFFFFF';
};

export default function TMHLogo(props: TMHLogoProps) {
  const { logoColor, offset, showLogoText } = props;
  const [color, setColor] = useState(determineColor(logoColor));
  if (determineColor(color) !== determineColor(logoColor)) {
    flipElementColor(
      'tmhlogo',
      '#FFFFFF',
      '#1A1A1A',
      color,
      setColor,
      ['oneImageBlackBox', 'partialNoFooter', 'divPartial', 'partialConnect'],
      30
    );
  }
  return (
    <div id="tmhlogo" className="logoContainer">
      {showLogoText ? (
        <>
          <img
            style={color === '#FFFFFF' ? show : hide}
            src={'/static/svg/Full.White.svg'}
            alt="Logo: The Meeting House"
            className={!offset ? 'logoHouse' : 'logoHouse logoOffset'}
          />

          <img
            style={color === '#1A1A1A' ? show : hide}
            src={'/static/svg/Full.svg'}
            alt="Logo: The Meeting House"
            className={!offset ? 'logoHouse' : 'logoHouse logoOffset'}
          />
        </>
      ) : (
        <>
          <img
            style={color === '#FFFFFF' ? show : hide}
            src={'/static/svg/Symbol.White.svg'}
            alt="Logo: Stylized House"
            className={!offset ? 'logoHouse ' : 'logoHouse logoOffset'}
          />

          <img
            style={color === '#1A1A1A' ? show : hide}
            src={'/static/svg/Symbol.svg'}
            alt="Logo: Stylized House"
            className={!offset ? 'logoHouse ' : 'logoHouse logoOffset'}
          />
        </>
      )}
    </div>
  );
}
