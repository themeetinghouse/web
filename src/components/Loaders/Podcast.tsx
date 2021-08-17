import { useState, useEffect } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import VideoOverlay from '@themeetinghouse/tmh-render-router/build/webpack-render-router';
export default function Podcast() {
  const match = useRouteMatch<{ pod?: string }>();
  const [content, setContent] = useState<Record<string, unknown>>();
  const history = useHistory();

  useEffect(() => {
    async function fetchPageData() {
      const response = await fetch('/static/content/podcast-player.json');
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
