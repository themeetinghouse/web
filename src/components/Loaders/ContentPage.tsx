import Analytics from '@aws-amplify/analytics';
import React, { ReactElement, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import GenericModalPage from '../RenderRouter/GenericModalPage';
import DataLoader from '../RenderRouter/DataLoader';

const RenderRouter = React.lazy(() => import('../RenderRouter/RenderRouter'));
const VideoOverlay = React.lazy(() => import('../VideoOverlay/VideoOverlay'));
const S3_BUCKET =
  'https://themeetinghouse-usercontent221608-prodnew.s3.amazonaws.com/public/';

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
      } catch (error1) {
        console.error({ error1 });
        const location =
          S3_BUCKET + 'savedContent/' + jsonFile.toLowerCase() + '.json';
        console.log(location);
        try {
          const response2 = await fetch(location);
          content = await response2.json();
          setPages({
            [jsonFile]: content,
            ...pages,
          });
        } catch (error) {
          if (window.location.href.includes('communities')) {
            const locationId = window.location.href
              .split('communities/')
              .at(-1)
              ?.toLowerCase();
            console.log({ locationId });
            if (!locationId) {
              const response3 = await fetch('/static/content/404.json');
              content = await response3.json();
              setPages({
                [jsonFile]: content,
                ...pages,
              });
              return;
            }
            const TMHLocationData = await DataLoader.getTMHLocation(locationId);
            if (!TMHLocationData.data?.getTMHLocation) {
              const response3 = await fetch('/static/content/404.json');
              content = await response3.json();
              setPages({
                [jsonFile]: content,
                ...pages,
              });
              return;
            }
            console.log({ TMHLocationData });
            const response3 = await fetch('/static/content/communities.json');
            content = await response3.json();
            const newContent = {
              ...content,
              page: {
                ...content.page,
                content: content.page.content.map((item: any) => {
                  if (item.type === 'hero' && item.style === 'locationPage') {
                    item.filterValue = TMHLocationData.data?.getTMHLocation?.id;
                  } else if (item.type === 'list' && item.style === 'staff') {
                    item.filterValue =
                      TMHLocationData.data?.getTMHLocation?.abbreviation;
                  } else if (item.type === 'list' && item.class === 'events') {
                    item.facebookEvents =
                      TMHLocationData.data?.getTMHLocation?.socials?.facebook?.map(
                        (facebook: any) => facebook.pageId
                      );
                  } else if (
                    item.type === 'list' &&
                    item.class === 'instagram'
                  ) {
                    item.filterValue = TMHLocationData.data?.getTMHLocation?.id;
                  } else if (
                    item.type === 'list' &&
                    item.class === 'compassion'
                  ) {
                    item.filterValue = TMHLocationData.data?.getTMHLocation?.id;
                  } else if (
                    item.type === 'hero' &&
                    item.style === 'partial' &&
                    item.link1Text.includes('Home Church')
                  ) {
                    item.link1Text = `Browse Home Churches in ${TMHLocationData.data?.getTMHLocation?.name}`;
                  }
                  return item;
                }),
                name: TMHLocationData.data.getTMHLocation.id,
                title: `The Meeting House - ${TMHLocationData.data.getTMHLocation.name}`,
              },
            };
            setPages({
              [jsonFile]: newContent,
              ...pages,
            });
            setContent(content);
            return;
          }

          console.error({ error });

          const response3 = await fetch('/static/content/404.json');
          content = await response3.json();
          setPages({
            [jsonFile]: content,
            ...pages,
          });
        }
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
  console.log(window.location.href);
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
