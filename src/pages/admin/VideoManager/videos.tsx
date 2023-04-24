import { useState } from 'react';
import ToggleNavigationBar from '../../../components/ToggleNavBar/ToggleNavigationBar';
import styles from './videos.module.scss';
import ManageSpeaker from './Speakers/ManageSpeaker';
import ManageSeries from './Series/ManageSeries';
import ManageVideos from './Videos/ManageVideos';
import ManageCustomPlaylists from './CustomPlaylists/ManageCustomPlaylists';

export default function VideoManager() {
  const pages = ['Videos', 'Series', 'Speakers', 'Custom Playlists'];
  const [currentPage, setCurrentPage] = useState(pages[0]);
  return (
    <div className={styles['VideoManagerContainer']}>
      <h1>Media Content Manager</h1>
      <ToggleNavigationBar
        style={{ marginTop: 20, marginBottom: 20 }}
        setCurrentPage={setCurrentPage}
        pages={pages}
        currentPage={currentPage}
      />
      {currentPage === 'Videos' ? <ManageVideos /> : null}
      {currentPage === 'Series' ? <ManageSeries /> : null}
      {currentPage === 'Speakers' ? <ManageSpeaker /> : null}
      {currentPage === 'Custom Playlists' ? <ManageCustomPlaylists /> : null}
    </div>
  );
}
