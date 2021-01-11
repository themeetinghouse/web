import React from 'react';
import './badge.scss';

interface Props {
  children?: string | null;
  style?: React.CSSProperties;
}

export default function Badge({ children, style }: Props) {
  return (
    <div style={style} className="tmh-badge">
      <div style={{ display: 'flex' }}>
        {children?.includes('Family Friendly') ? (
          <img
            style={{
              width: 16,
              height: 13,
              alignSelf: 'center',
              marginRight: 8,
            }}
            src="/static/svg/Family Friendly.svg"
            alt="Family Icon"
          />
        ) : children?.includes('Young Adult') ? (
          ''
        ) : null}
        {children}
      </div>
    </div>
  );
}
