import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RenderRouter from '../RenderRouter/RenderRouter';
import { Analytics, Storage } from 'aws-amplify';

const Archive = () => {
  const { archiveType, subclass } =
    useParams<Record<string, string | undefined>>();
  const [content, setContent] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let contentUrl;
        if (archiveType === 'series') {
          contentUrl = await Storage.get('savedContent/series-archive.json');
        } else {
          contentUrl = await Storage.get('savedContent/video-archive.json');
        }
        const response = await fetch(contentUrl);
        const data = await response.json();
        setContent(data);
      } catch (error: unknown) {
        console.error({ 'Error fetching archive': error });
      }
    };

    fetchData();

    // Record page visit when component mounts
    Analytics.record({
      name: 'pageVisit',
      attributes: { page: 'archive' },
    }).catch((error: unknown) => {
      console.error({ 'Error recording page visit': error });
    });
  }, [archiveType]);

  return <RenderRouter data={subclass} content={content}></RenderRouter>;
};

export default Archive;
