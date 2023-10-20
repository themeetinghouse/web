import { Analytics } from '@aws-amplify/analytics';
import React, { ReactElement, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import GenericModalPage from '../RenderRouter/GenericModalPage';
import DataLoader from '../RenderRouter/DataLoader';
import { Storage } from 'aws-amplify';
const RenderRouter = React.lazy(() => import('../RenderRouter/RenderRouter'));

export default function ContentPage(): ReactElement | null {
  const navigate = useNavigate();
  const location = useLocation();

  const [content, setContent] = useState<any>(null);
  const [pages, setPages] = useState<Record<string, any>>({});
  let site = window.location.hostname.split('.')[0];
  if (site == 'www' || site == 'themeetinghouse' || site === 'localhost')
    site = 'homepage';
  const jsonFile = location.pathname.slice(1) || site || 'homepage';
  console.log({ pages });
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
      const errorUrl = await Storage.get('savedContent/404.json');
      try {
        content = pages[jsonFile];
        if (!content) {
          const location = await Storage.get(
            'savedContent/' + jsonFile.toLowerCase() + '.json'
          );
          const response = await fetch(location);

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
        const location = await Storage.get(
          'savedContent/' + jsonFile.toLowerCase() + '.json'
        );
        console.log({ location });
        try {
          const response2 = await fetch(location);
          content = await response2.json();
          setPages({
            [jsonFile]: content,
            ...pages,
          });
          return;
        } catch (error) {
          console.log('error');
          if (window.location.href.includes('communities')) {
            const locationId = window.location.href
              .split('communities/')
              .at(-1)
              ?.toLowerCase();
            console.log({ locationId });
            if (!locationId) {
              const response3 = await fetch(errorUrl);
              content = await response3.json();
              setPages({
                [jsonFile]: content,
                ...pages,
              });
              return;
            }
            const TMHLocationData = await DataLoader.getTMHLocation(locationId);
            if (!TMHLocationData.data?.getTMHLocation) {
              const response3 = await fetch(errorUrl);
              content = await response3.json();
              setPages({
                [jsonFile]: content,
                ...pages,
              });
              return;
            }
            console.log({ TMHLocationData });
            const communitiesUrl = await Storage.get(
              'savedContent/communities.json'
            );
            const response3 = await fetch(communitiesUrl);

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

          const response3 = await fetch(errorUrl);
          content = await response3.json();
          setPages({
            [jsonFile]: content,
            ...pages,
          });
          return;
        }
      }
    })();
  }, [jsonFile, pages]);
  if (!content) {
    return null;
  }
  if (content.page.pageConfig.weatherAlert && location.pathname === '/') {
    navigate('/weather');
  }
  const { showGenericModalPage, isPopup, navigateOnPopupClose } =
    content.page.pageConfig ?? {};
  return showGenericModalPage || isPopup ? (
    <GenericModalPage
      onClose={() => {
        if (navigateOnPopupClose) {
          navigate(navigateOnPopupClose);
        } else {
          navigate(-1);
        }
      }}
      content={content}
      data={{ id: undefined }}
    ></GenericModalPage>
  ) : (
    <RenderRouter data={null} content={content}></RenderRouter>
  );
}
