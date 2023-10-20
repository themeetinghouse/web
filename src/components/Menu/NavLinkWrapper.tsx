import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import useAndUpdateNavColor from './useAndUpdateNavColor';

type NavLinkWrapperProps = {
  item: any;
  className: string;
  expand: any;
};
export default function NavLinkWrapper(props: NavLinkWrapperProps) {
  const { item, className, expand } = props;
  const { color, forceCheck } = useAndUpdateNavColor('#1A1A1A', item.location);

  useEffect(() => {
    forceCheck();
  }, [expand]);

  return (
    <NavLink
      id={item.location}
      className={className}
      style={({ isActive }) => ({
        fontWeight: isActive ? 'bold' : 'normal',
        display: className === 'bigNav' ? 'inline-block' : 'block',
        color: color ?? '#1A1A1A',
        transition: 'all 0.2s ease-in-out',
        textDecoration: 'none',
      })}
      key={item.location}
      to={{ pathname: item.location }}
    >
      {item.name}
    </NavLink>
  );
}
