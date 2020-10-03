import { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api/lib/types';
import { GetVideoQuery } from 'API';
import { API, Analytics } from 'aws-amplify';
import React, { ReactElement, useEffect, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import * as queries from '../../graphql/queries';
import VideoOverlay from '../VideoOverlay/VideoOverlay';

interface Params {
    isPlaylist?: boolean
}

export default function Videos({ isPlaylist }: Params): ReactElement | null {
    const history = useHistory();
    const match = useRouteMatch<{ episode?: string }>();

    const [data, setData] = useState<GetVideoQuery['getVideo'] | null | undefined>(null);

    useEffect(() => {
        Analytics.record({
            name: 'pageVisit',
            attributes: { page: isPlaylist ? 'video-playlist' : 'video-player' }
        });
    }, []);

    useEffect(() => {
        (async () => {
            try {
                const json = await (API.graphql({
                    query: queries.getVideo,
                    variables: { id: match.params.episode },
                    authMode: GRAPHQL_AUTH_MODE.API_KEY
                }) as Promise<GraphQLResult<GetVideoQuery>>);

                if (!json.data?.getVideo)
                    history.replace("/not-found")
                else
                    setData(json.data?.getVideo);
            } catch (e) {
                console.error(e);
                Analytics.record({
                    name: 'error',
                    attributes: { page: isPlaylist ? 'video-playlist' : 'video-player' }
                });
                history.replace("/not-found")
            }
        })();
    }, [match.params.episode]);

    return <VideoOverlay onClose={() => history.push("/")} data={data} isPlaylist={isPlaylist} />
} 