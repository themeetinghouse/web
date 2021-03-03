import './AnnouncementBar.scss';
type Props = {
  bannerMessage: string;
};
const AnnouncementBar = ({ bannerMessage }: Props) => {
  return (
    <div className="AnnouncementBarContainer">
      <p className="bannerMessage">{bannerMessage}</p>
    </div>
  );
};
export default AnnouncementBar;
