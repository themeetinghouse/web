import { GetSeriesQuery, GetVideoQuery } from 'API';
import { API, Analytics } from 'aws-amplify';
import { ReactElement, useEffect, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import * as customQueries from '../../graphql-custom/customQueries';
import VideoOverlay from '../VideoOverlay/VideoOverlay';
import { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';

interface Params {
  isPlaylist?: boolean;
}

export default function Videos({ isPlaylist }: Params): ReactElement | null {
  const history = useHistory();
  const match = useRouteMatch<{
    episode?: string | undefined;
    series?: string;
  }>();

  const [data, setData] = useState<
    GetVideoQuery['getVideo'] | null | undefined
  >(null);

  useEffect(() => {
    Analytics.record({
      name: 'pageVisit',
      attributes: { page: 'video-player' },
    }).catch((e) => {
      console.log(e);
    });
  }, []);

  useEffect(() => {
    (async () => {
      if (match.params.episode != null)
        try {
          const json = await (API.graphql({
            query: customQueries.getVideo,
            variables: { id: match.params.episode },
            authMode: GRAPHQL_AUTH_MODE.API_KEY,
          }) as Promise<GraphQLResult<GetVideoQuery>>);

          if (!json.data?.getVideo) history.replace('/not-found');
          if (json.data?.getVideo?.series?.seriesType?.includes('hidden'))
            history.replace('/not-found');
          else setData(json.data?.getVideo);
        } catch (e) {
          console.error(e);
          Analytics.record({
            name: 'error',
            attributes: { page: 'video-player' },
          }).catch((e) => {
            console.log(e);
          });
          history.replace('/not-found');
        }
      else {
        try {
          const json = await (API.graphql({
            query: customQueries.getSeries,
            variables: { id: match.params.series },
            authMode: GRAPHQL_AUTH_MODE.API_KEY,
          }) as Promise<GraphQLResult<GetSeriesQuery>>);

          if (!json.data?.getSeries) history.replace('/not-found');
          else {
            const videos = json.data?.getSeries?.videos?.items;
            if (videos == null || videos == undefined)
              history.replace('/not-found');
            else if (videos[0] == null || videos[0] == undefined)
              history.replace('/not-found');
            else setData(videos[0] as any);
          }
        } catch (e) {
          console.error(e);
          Analytics.record({
            name: 'error',
            attributes: { page: 'video-player' },
          }).catch((e) => {
            console.log(e);
          });
          history.replace('/not-found');
        }
      }
    })();
  }, [match.params.episode, history]);

  return (
    <VideoOverlay
      onClose={() => history.goBack()}
      data={data}
      isPlaylist={isPlaylist}
    />
  );
}
