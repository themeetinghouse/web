import React from 'react';
import './badge.scss';

interface Props {
  children?: string | null;
}

export default function Badge({ children }: Props) {
  return <div className="tmh-badge">{children}</div>;
}
