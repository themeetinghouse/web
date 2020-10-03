import { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api/lib/types';
import { GetBlogQuery } from 'API';
import { API, Analytics } from 'aws-amplify';
import React, { ReactElement, useEffect, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import * as queries from '../../graphql/queries';
import RenderRouter from '../RenderRouter/RenderRouter';

export default function Blog(): ReactElement | null {
  const [data, setData] = useState<GetBlogQuery['getBlog'] | null | undefined>(null);
  const [content, setContent] = useState(null);

  const match = useRouteMatch<{ blog: string }>();
  const history = useHistory();

  useEffect(() => {
    Analytics.record({
      name: 'pageVisit',
      attributes: { page: 'blog-post' }
    });

    (async () => {
      const response = await fetch('/static/content/blog-post.json');
      const myJson = await response.json();
      setContent(myJson);
    })();
  }, []);

  useEffect(() => {
    const load = async () => {
      try {
        const json = await (API.graphql({
          query: queries.getBlog,
          variables: { id: match.params.blog },
          authMode: GRAPHQL_AUTH_MODE.API_KEY
        }) as Promise<GraphQLResult<GetBlogQuery>>);
        if (!json.data?.getBlog)
          history.replace("/not-found")
        else
          setData(json.data?.getBlog)
      } catch (e) {
        console.error(e)
        Analytics.record({
          name: 'error',
          attributes: { page: 'blog-post' }
        });
        history.replace("/not-found")
      }
    }
    load();
  }, [match.params.blog, history]);

  if (!data || !content) {
    return null;
  }

  return <RenderRouter data={data} content={content}></RenderRouter>
}