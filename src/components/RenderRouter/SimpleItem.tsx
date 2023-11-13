import React from 'react';
import './SimpleItem.scss';
import ReactGA from 'react-ga';
import { Storage } from '@aws-amplify/storage';
import { Link } from 'react-router-dom';

if (window.location.hostname === 'localhost') {
  ReactGA.initialize('UA-4554612-19');
} else if (window.location.hostname.includes('beta')) {
  ReactGA.initialize('UA-4554612-19');
} else {
  ReactGA.initialize('UA-4554612-3');
}
type SimpleItemProps = {
  content: any;
};

export function SimpleContentLink({
  href,
  className,
  label,
}: {
  href: string;
  className: string;
  label: string;
}) {
  const [link, setLink] = React.useState(href);
  React.useEffect(() => {
    (async () => {
      try {
        if (href.includes('editor/pdfs')) {
          const newLink = await Storage.get(href);
          setLink(newLink);
        } else {
          setLink(href);
        }
      } catch (e) {
        console.error({ e });
      }
    })();
  }, [href]);
  return (
    <Link className={className} to={link}>
      {label}
    </Link>
  );
}

export default function ContentItem(props: SimpleItemProps) {
  const { content } = props;
  return (
    <div className="simpleItemDiv1">
      <form>
        <h1 className="SimpleItemH1">{content.header1}</h1>
        <h2 className="SimpleItemH2">{content.header2}</h2>
        <hr className="SimpleItemHR" />
        {content.text.map((item: any) => {
          return item.type === 'video' ? (
            <iframe
              title="Youtube Player"
              className={item.class}
              allowFullScreen
              src={
                'https://www.youtube.com/embed/' +
                item.id +
                '?color=white&autoplay=0&cc_load_policy=1&showTitle=0&controls=1&modestbranding=1&rel=0'
              }
              frameBorder="0"
              allow="speakers; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          ) : item.type === 'link' ? (
            <SimpleContentLink
              href={item.href}
              className={item.class}
              label={item.text}
            />
          ) : (
            <div className={item.class}>{item.text}</div>
          );
        })}

        <div className="SimpleItemText">{content.text2}</div>
        <div className="SimpleItemText">{content.text3}</div>
        <div className="SimpleItemText">{content.text4}</div>
        <div className="SimpleItemText">{content.text5}</div>

        {content.hasBigBottom ? (
          <div className="SimpleItemBigBottom"></div>
        ) : (
          <div className="SimpleItemBottom"></div>
        )}
      </form>
    </div>
  );
}
