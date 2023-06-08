import { NavLink as RSNavLink } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
import React, { useEffect } from 'react';
import { flipElementColor } from './navUtils';

type RSNavLinkWrapperProps = {
  item: any;
  className: string;
  expand: any;
};
export default function RSNavLinkWrapper(props: RSNavLinkWrapperProps) {
  const { item, className, expand } = props;
  const [color, setColor] = React.useState('#1A1A1A');
  flipElementColor(
    item.location,
    '#FFFFFF',
    '#1A1A1A',
    color,
    setColor,
    ['oneImageBlackBox', 'partialNoFooter', 'divPartial', 'partialConnect'],
    15
  );
  useEffect(() => {
    flipElementColor(
      item.location,
      '#FFFFFF',
      '#1A1A1A',
      color,
      setColor,
      ['oneImageBlackBox', 'partialNoFooter', 'divPartial', 'partialConnect'],
      15
    );
  }, [expand]);

  return (
    <RSNavLink
      tag={RRNavLink}
      id={item.location}
      className={className}
      activeStyle={{ fontWeight: 'bold' }}
      style={{
        display: className === 'bigNav' ? 'inline-block' : 'block',
        color: color ?? '#1A1A1A',
        transition: 'all 0.2s ease-in-out',
      }}
      key={item.location}
      to={{ pathname: item.location }}
    >
      {item.name}
    </RSNavLink>
  );
}
