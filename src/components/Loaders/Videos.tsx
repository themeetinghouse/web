import { GetSeriesQuery, GetVideoQuery } from 'API';
import { API, Analytics } from 'aws-amplify';
import { ReactElement, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as customQueries from '../../graphql-custom/customQueries';
import VideoOverlay from '../VideoOverlay/VideoOverlay';
import { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';

interface Params {
  isPlaylist?: boolean;
}

export default function Videos({ isPlaylist }: Params): ReactElement | null {
  const navigate = useNavigate();
  const params = useParams<{
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
    }).catch((e: any) => {
      console.log(e);
    });
  }, []);

  useEffect(() => {
    (async () => {
      if (params.episode != null)
        try {
          const json = await (API.graphql({
            query: customQueries.getVideo,
            variables: { id: params.episode },
            authMode: GRAPHQL_AUTH_MODE.API_KEY,
          }) as Promise<GraphQLResult<GetVideoQuery>>);

          if (!json.data?.getVideo) navigate('/not-found', { replace: true });
          if (json.data?.getVideo?.series?.seriesType?.includes('hidden'))
            navigate('/not-found', { replace: true });
          else setData(json.data?.getVideo);
        } catch (e) {
          console.error(e);
          Analytics.record({
            name: 'error',
            attributes: { page: 'video-player' },
          }).catch((e: any) => {
            console.log(e);
          });
          navigate('/not-found', { replace: true });
        }
      else {
        try {
          const json = await (API.graphql({
            query: customQueries.getSeries,
            variables: { id: params.series },
            authMode: GRAPHQL_AUTH_MODE.API_KEY,
          }) as Promise<GraphQLResult<GetSeriesQuery>>);

          if (!json.data?.getSeries) navigate('/not-found', { replace: true });
          else {
            const videos = json.data?.getSeries?.videos?.items;
            if (videos == null || videos == undefined)
              navigate('/not-found', { replace: true });
            else if (videos[0] == null || videos[0] == undefined)
              navigate('/not-found', { replace: true });
            else if (json.data?.getSeries?.seriesType?.includes('hidden'))
              navigate('/not-found', { replace: true });
            else setData(videos[0] as any);
          }
        } catch (e) {
          console.error(e);
          Analytics.record({
            name: 'error',
            attributes: { page: 'video-player' },
          }).catch((e: any) => {
            console.log(e);
          });
          navigate('/not-found', { replace: true });
        }
      }
    })();
  }, [params.episode]);

  return (
    <VideoOverlay
      onClose={() => navigate(-1)}
      data={data}
      isPlaylist={isPlaylist}
    />
  );
}
