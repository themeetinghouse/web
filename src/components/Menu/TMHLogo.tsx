import './menu.scss';

type TMHLogoProps = {
  color: string;
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

export default function TMHLogo(props: TMHLogoProps) {
  const { color, offset, showLogoText } = props;
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
