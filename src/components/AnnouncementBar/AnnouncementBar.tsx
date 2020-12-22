import React from 'react';
import './AnnouncementBar.scss';
type Props = {
  bannerMessage: string;
};
export const AnnouncementBar = ({ bannerMessage }: Props) => {
  return (
    <div className="AnnouncementBarContainer">
      <p className="bannerMessage">{bannerMessage}</p>
    </div>
  );
};
