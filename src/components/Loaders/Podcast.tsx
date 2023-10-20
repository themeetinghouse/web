import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import VideoOverlay from '../../components/VideoOverlay/VideoOverlay';
import { Storage } from 'aws-amplify';
export default function Podcast() {
  const params = useParams<{ pod?: string }>();
  const [content, setContent] = useState<Record<string, unknown>>();
  const navigate = useNavigate();

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
      onClose={() => navigate(-1)}
      content={content}
      data={params.pod}
    />
  );
}
