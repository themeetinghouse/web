import Analytics from '@aws-amplify/analytics';
import React, { ReactElement, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import GenericModalPage from '../RenderRouter/GenericModalPage';
const RenderRouter = React.lazy(() => import('../RenderRouter/RenderRouter'));
const VideoOverlay = React.lazy(() => import('../VideoOverlay/VideoOverlay'));
const S3_BUCKET =
  'https://themeetinghouse-usercontentstoragetmhusercontent-tmhprod.s3.amazonaws.com/public/';

const notFoundPageContent = fetch('/static/content/404.json')
  .then((response) => response.json())
  .catch((e: any) => console.log({ e: e }));

export default function ContentPage(): ReactElement | null {
  const history = useHistory();
  const location = useLocation();

  const [content, setContent] = useState<any>(null);
  const [pages, setPages] = useState<Record<string, any>>({});
  let site = window.location.hostname.split('.')[0];
  if (site == 'www' || site == 'themeetinghouse') site = 'homepage';
  console.log({ site: site });
  const jsonFile = location.pathname.slice(1) || site || 'homepage';
  useEffect(() => {
    Analytics.record({
      name: 'pageVisit',
      attributes: { page: jsonFile },
    }).catch((e: any) => {
      console.log({ e: e });
    });
  }, [jsonFile]);

  useEffect(() => {
    (async () => {
      let content;
      try {
        content = pages[jsonFile];
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
        const location =
          S3_BUCKET + 'savedContent/' + jsonFile.toLowerCase() + '.json';
        console.log(location);
        const response2 = await fetch(location);
        content = await response2.json();
        setPages({
          [jsonFile]: content,
          ...pages,
        });
      }

      Analytics.record({
        name: 'error',
        attributes: { page: jsonFile },
      }).catch((e: any) => {
        console.log({ e: e });
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
  const {
    showGenericModalPage,
    isPopup = false,
    navigateOnPopupClose,
  } = content.page.pageConfig ?? {};
  if (showGenericModalPage && isPopup) {
    return (
      <GenericModalPage
        onClose={() => {
          if (navigateOnPopupClose) {
            history.push(navigateOnPopupClose);
          } else {
            history.goBack();
          }
        }}
        content={content}
        data={{ id: undefined }}
      ></GenericModalPage>
    );
  }
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
