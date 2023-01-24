import './YellowAnnouncement.scss';

type YellowAnnouncementProps = {
  title: string;
  onClick: () => void;
};
export default function YellowAnnouncement(props: YellowAnnouncementProps) {
  const { title, onClick } = props;
  return (
    <button
      aria-label={title}
      style={{
        position: 'fixed',
        zIndex: 1000,
        top: 0,
        left: 0,
        padding: 0,
        margin: 0,
        border: 'none',
        outline: 'none !important',
        outlineOffset: 'none !important',
      }}
      className="ignore-onClickOutside"
      onClick={onClick}
    >
      <div className="AnnouncementContainer">
        <p className="AnnouncementMessage">{title}</p>
      </div>
    </button>
  );
}
