import { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api/lib/types';
import { GetVideoQuery } from 'API';
import { API, Analytics } from 'aws-amplify';
import React, { ReactElement, useEffect, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import * as queries from '../graphql/queries';
import VideoOverlay from './VideoOverlay/VideoOverlay';

export default function Videos(): ReactElement | null {
    const history = useHistory();
    const match = useRouteMatch<{ episode?: string }>();

    const [data, setData] = useState<GetVideoQuery['getVideo'] | null | undefined>(null);

    useEffect(() => {
        Analytics.record({
            name: 'pageVisit',
            attributes: { page: 'video-player' }
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
                setData(json.data?.getVideo);
            } catch (e) {
                console.error(e);
            }
        })();
    }, [match.params.episode]);

    return <VideoOverlay onClose={() => history.push("/")} data={data} > </VideoOverlay>
} 