import { useState, useEffect } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import VideoOverlay from '../../components/VideoOverlay/VideoOverlay';
import { Storage } from 'aws-amplify';
export default function Podcast() {
  const match = useRouteMatch<{ pod?: string }>();
  const [content, setContent] = useState<Record<string, unknown>>();
  const history = useHistory();

  useEffect(() => {
    async function fetchPageData() {
      const podcastPlayerURL = await Storage.get(
        'savedContent/podcast-player.json'
      );
      const response = await fetch(podcastPlayerURL);
      const json = await response.json();
      setContent(json);
    }

    fetchPageData();
  }, []);

  if (!content) return null;

  return (
    <VideoOverlay
      onClose={() => history.goBack()}
      content={content}
      data={match.params.pod}
    />
  );
}
