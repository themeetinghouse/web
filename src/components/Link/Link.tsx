import React, { ReactElement } from 'react';
import { Link as RRLink, NavLink as RRNavLink, LinkProps, NavLinkProps } from 'react-router-dom';
import { ButtonProps as RSButtonProps, Button, NavLink as RSNavLink } from 'reactstrap';
import './Link.scss';

const newWindowProps = {
    target: '_blank',
    rel: 'noopener noreferrer',
};

type Props = React.PropsWithoutRef<LinkProps> & React.RefAttributes<HTMLAnchorElement> & {
    newWindow?: boolean;
}

export function Link({ to, newWindow, ...props }: Props): ReactElement<Props> {
    if (newWindow) {
        props = { ...newWindowProps, ...props };
    }
    const regex = new RegExp(/https:\/\/|mailto|.pdf/)
    return typeof to === 'string' && regex.test(to)
        ? <a href={to} {...props}>{props.children}</a>
        : <RRLink to={to} {...props}>{props.children}</RRLink>
}

export function NavLink(props: NavLinkProps): ReactElement<NavLinkProps> {
    return <RSNavLink tag={RRNavLink} {...props}>{props.children}</RSNavLink>
}

type ButtonProps = React.PropsWithoutRef<RSButtonProps> & Props;

export function LinkButton({ className = '', ...props }: ButtonProps): ReactElement<ButtonProps> {
    className += ' button-link';
    return <Button tag={Link} className={className} {...(props as RSButtonProps)}>{props.children}</Button>
}