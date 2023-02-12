import { useState } from 'react';
import moment from 'moment';
import { Announcement as AnnouncementType } from '../../../API';
import './Announcement.scss';

type AnnouncementProps = {
  announcement: AnnouncementType;
  deleteAnnouncement: (announcement: AnnouncementType) => void;
  setCurrentAnnouncement: (announcement: AnnouncementType) => void;
  setOpenEditModal: (open: boolean) => void;
};

export default function Announcement({
  announcement,
  deleteAnnouncement,
  setCurrentAnnouncement,
  setOpenEditModal,
}: AnnouncementProps) {
  const [uri, setUri] = useState(announcement.image ?? '');
  const [isDeleteHovered, setIsDeleteHovered] = useState(false);
  const isExpired = moment(announcement.expirationDate).isBefore(
    moment().format('YYYY-MM-DD')
  );
  return (
    <div
      className={`AnnouncementBox`}
      onClick={(e) => {
        e.stopPropagation();
        setCurrentAnnouncement(announcement);
        setOpenEditModal(true);
      }}
    >
      <div
        className={`AnnouncementStatusContainer ${
          !isExpired ? ' upcoming' : ''
        }`}
      >
        <span
          className={`AnnouncementStatusLabel ${!isExpired ? 'upcoming' : ''}`}
        >
          {isExpired ? 'Expired' : 'Upcoming'}
        </span>
      </div>
      <img
        className="AnnouncementImage"
        onError={() => setUri('/static/photos/blogs/baby-hero/fallback.jpg')}
        src={uri}
      />

      <div className="AnnouncementBoxInfo">
        <span className="AnnouncementInfo title">{announcement?.title}</span>
        <b className="AnnouncementInfo date">
          Scheduled {moment(announcement?.publishedDate).fromNow()}
        </b>

        <b className="AnnouncementInfo date">
          {isExpired
            ? `Expired ${moment(announcement?.expirationDate).fromNow()}`
            : `Expires ${moment(announcement?.expirationDate).fromNow()}`}
        </b>
      </div>
      <div className="AnnouncementIcons">
        <div
          onMouseEnter={() => setIsDeleteHovered(true)}
          onMouseLeave={() => setIsDeleteHovered(false)}
          onClick={(e) => {
            e.stopPropagation();
            if (
              confirm(
                'Are you sure you want to delete all instances of this announcement?'
              )
            ) {
              deleteAnnouncement(announcement);
            }
          }}
          className="AnnouncementIconContainer"
        >
          <img
            className="AnnouncementIcon"
            width={24}
            height={24}
            alt="Delete Icon"
            src={
              isDeleteHovered
                ? '/static/svg/Delete-Red.svg'
                : '/static/svg/Delete.svg'
            }
          ></img>
        </div>
        <div
          onClick={(e) => {
            e.stopPropagation();
            setCurrentAnnouncement(announcement);
            setOpenEditModal(true);
          }}
          className="AnnouncementIconContainer rightIcon"
        >
          <img
            className="AnnouncementIcon"
            width={24}
            height={24}
            alt="Edit Icon"
            src="/static/svg/More.svg"
          ></img>
        </div>
      </div>
    </div>
  );
}
