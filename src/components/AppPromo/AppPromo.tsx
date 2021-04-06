import { useState } from 'react';
import { isAndroid, isIOS } from 'react-device-detect';
import { Button, Fade } from 'reactstrap';
import './AppPromo.scss';

export default function AppPromo() {
  const [isOpen, setIsOpen] = useState(true);

  return isAndroid || isIOS ? (
    <Fade className="app-promo" in={isOpen}>
      <Button
        close
        style={{ opacity: 1, color: 'white' }}
        onClick={() => setIsOpen(false)}
        className="close-btn-custom"
      >
        <span>&#x2715;</span>
      </Button>
      <div className="vl" />
      <div className="promo-text">Notes are better in the app</div>
      <a
        className="download-btn"
        href={
          isIOS
            ? 'https://apps.apple.com/app/apple-store/id917315049?pt=1963922&ct=notes-page&mt=8'
            : 'https://play.google.com/store/apps/details?id=org.tmh.takenote&utm_source=website&utm_medium=notes-page'
        }
        target="_blank"
        rel="noopener noreferrer"
      >
        Open
      </a>
    </Fade>
  ) : null;
}
