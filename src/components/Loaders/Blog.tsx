import { GetBlogQuery } from 'API';
import { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';

import {
  API,
  Analytics,
  AmazonPersonalizeProvider,
  Auth,
  Storage,
} from 'aws-amplify';
import { ReactElement, useEffect, useState } from 'react';
import { getBlog } from '../../graphql-custom/customQueries';
import RenderRouter from '../RenderRouter/RenderRouter';
import { useNavigate, useParams } from 'react-router-dom';
Analytics.addPluggable(new AmazonPersonalizeProvider());
Analytics.configure({
  AmazonPersonalize: {
    // REQUIRED - The trackingId to track the events
    trackingId: 'c417af3e-693d-4e7d-a2c2-deb6b3015e08',
    region: 'us-east-1',
  },
});
export default function Blog(): ReactElement | null {
  const [data, setData] = useState<GetBlogQuery['getBlog'] | null | undefined>(
    null
  );
  const [content, setContent] = useState(null);

  const params = useParams();
  const navigate = useNavigate();
  // Configure the plugin after adding it to the Analytics module

  useEffect(() => {
    Auth.currentCredentials().then((a) => {
      if (!params.blog) return;
      Analytics.record(
        {
          name: 'Interactions',
          attributes: {
            user_id: a.identityId,
            itemId: params.blog,
            TIMESTAMP: Date.now().toString(),
          },
        },
        'AmazonPersonalize'
      )
        .then((e: any) => {
          console.log({ e: e });
        })
        .catch((e: any) => {
          console.log({ PersonalizeError: e });
        });
    });
    Analytics.record({
      name: 'pageVisit',
      attributes: { page: 'blog-post' },
    }).catch((e: any) => {
      console.log({ e: e });
    });

    (async () => {
      const blogPostUrl = await Storage.get('savedContent/blog-post.json');

      const response = await fetch(blogPostUrl);
      const myJson = await response.json();
      setContent(myJson);
    })();
  }, []);

  useEffect(() => {
    const load = async () => {
      if (!params.blog) return;
      try {
        const json = await (API.graphql({
          query: getBlog,
          variables: { id: params.blog },
          authMode: GRAPHQL_AUTH_MODE.API_KEY,
        }) as Promise<GraphQLResult<GetBlogQuery>>);
        if (!json.data?.getBlog) navigate('/not-found', { replace: true });
        else setData(json.data?.getBlog);
      } catch (e) {
        console.error(e);
        Analytics.record({
          name: 'error',
          attributes: { page: 'blog-post' },
        }).catch((e: any) => {
          console.log({ e: e });
        });
        navigate('/not-found', { replace: true });
      }
    };
    load();
  }, [params.blog]);

  if (!data || !content) {
    return null;
  }

  return <RenderRouter data={data} content={content}></RenderRouter>;
}
