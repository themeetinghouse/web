import Analytics from '@aws-amplify/analytics';
import React from 'react';
import { ReactElement, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
const RenderRouter = React.lazy(() => import('../RenderRouter/RenderRouter'));
const VideoOverlay = React.lazy(() => import('../VideoOverlay/VideoOverlay'));

const notFoundPageContent = fetch('/static/content/404.json').then((response) =>
  response.json()
);

export default function ContentPage(): ReactElement | null {
  const history = useHistory();
  const location = useLocation();

  const [content, setContent] = useState<any>(null);
  const [pages, setPages] = useState<Record<string, any>>({});

  const jsonFile = location.pathname.slice(1) || 'homepage';

  useEffect(() => {
    Analytics.record({
      name: 'pageVisit',
      attributes: { page: jsonFile },
    }).catch((e) => {
      console.log(e);
    });
  }, [jsonFile]);

  useEffect(() => {
    (async () => {
      try {
        let content = pages[jsonFile];
        if (!content) {
          const response = await fetch(
            '/static/content/' + jsonFile.toLowerCase() + '.json'
          );
          content = await response.json();
          setPages({
            [jsonFile]: content,
            ...pages,
          });
        }
        setContent(content);
        return;
      } catch (e) {
        console.error(e);
      }

      Analytics.record({
        name: 'error',
        attributes: { page: jsonFile },
      }).catch((e) => {
        console.log(e);
      });
      setContent(await notFoundPageContent);
    })();
  }, [jsonFile, pages]);

  if (!content) {
    return null;
  }

  if (content.page.pageConfig.weatherAlert && location.pathname === '/') {
    history.push('/weather');
  }

  const { isPopup = false, navigateOnPopupClose = '/' } =
    content.page.pageConfig ?? {};

  return isPopup ? (
    <VideoOverlay
      onClose={() => history.push(navigateOnPopupClose)}
      content={content}
      data={{ id: undefined }}
    ></VideoOverlay>
  ) : (
    <RenderRouter data={null} content={content}></RenderRouter>
  );
}
