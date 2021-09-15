import React, { ReactElement } from 'react';
import { Link as RRLink, LinkProps } from 'react-router-dom';
import { ButtonProps as RSButtonProps, Button } from 'reactstrap';
import './Link.scss';

const newWindowProps = {
  target: '_blank',
  rel: 'noopener noreferrer',
};

type Props = React.PropsWithoutRef<LinkProps> &
  React.RefAttributes<HTMLAnchorElement> & {
    newWindow?: boolean;
  };

export function Link({ to, newWindow, ...props }: Props): ReactElement<Props> {
  if (newWindow) {
    props = { ...newWindowProps, ...props };
  }
  const regex = new RegExp(/https?:\/\/|mailto|.pdf/);
  return typeof to === 'string' && regex.test(to) ? (
    <a href={to} {...props}>
      {props.children}
    </a>
  ) : (
    <RRLink to={to} {...props}>
      {props.children}
    </RRLink>
  );
}

type ButtonProps = React.PropsWithoutRef<RSButtonProps> & Props;

export function LinkButton({
  className = '',
  ...props
}: ButtonProps): ReactElement<ButtonProps> {
  className += ' button-link';
  return (
    <Button tag={Link} className={className} {...(props as RSButtonProps)}>
      {props.children}
    </Button>
  );
}

export const ArrowLink = ({ to, className, ...props }: Props) => (
  <Link className={`tmh-arrow-link ${className}`} to={to} {...props}>
    {props.children}
    <img
      className="tmh-arrow-svg"
      alt=""
      src="/static/svg/ArrowRight black.svg"
      width={32}
      height={32}
    />
  </Link>
);
