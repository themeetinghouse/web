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
import { useHistory, useRouteMatch } from 'react-router-dom';
import { getBlog } from '../../graphql-custom/customQueries';
import RenderRouter from '../RenderRouter/RenderRouter';
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

  const match = useRouteMatch<{ blog: string }>();
  const history = useHistory();
  // Configure the plugin after adding it to the Analytics module

  useEffect(() => {
    Auth.currentCredentials().then((a) => {
      Analytics.record(
        {
          name: 'Interactions',
          attributes: {
            user_id: a.identityId,
            itemId: match.params.blog,
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
    console.log('RECORDING PERSONALIZE');
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
      try {
        const json = await (API.graphql({
          query: getBlog,
          variables: { id: match.params.blog },
          authMode: GRAPHQL_AUTH_MODE.API_KEY,
        }) as Promise<GraphQLResult<GetBlogQuery>>);
        if (!json.data?.getBlog) history.replace('/not-found');
        else setData(json.data?.getBlog);
      } catch (e) {
        console.error(e);
        Analytics.record({
          name: 'error',
          attributes: { page: 'blog-post' },
        }).catch((e: any) => {
          console.log({ e: e });
        });
        history.replace('/not-found');
      }
    };
    load();
  }, [match.params.blog, history]);

  if (!data || !content) {
    return null;
  }

  return <RenderRouter data={data} content={content}></RenderRouter>;
}
