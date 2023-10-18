import { NavLink as RSNavLink } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
import { useEffect } from 'react';
import useAndUpdateNavColor from './useAndUpdateNavColor';

type RSNavLinkWrapperProps = {
  item: any;
  className: string;
  expand: any;
};
export default function RSNavLinkWrapper(props: RSNavLinkWrapperProps) {
  const { item, className, expand } = props;
  const { color, forceCheck } = useAndUpdateNavColor('#1A1A1A', item.location);

  useEffect(() => {
    forceCheck();
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
