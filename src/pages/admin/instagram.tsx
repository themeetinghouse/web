import { useState } from 'react';
import { AmplifyAuthenticator } from '@aws-amplify/ui-react';
import Amplify from 'aws-amplify';
import awsmobile from '../../aws-exports';
import * as mutations from '../../graphql/mutations';
import * as adminQueries from './queries';
import { API } from 'aws-amplify';
import { CreateInstagramInput, GetInstagramQuery } from 'API';
import { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';

Amplify.configure(awsmobile);
const federated = {
  facebookAppId: '579712102531269',
};

const locations = [
  'themeetinghousealliston',
  'tmhsandbanks',
  'tmhancaster',
  'tmhbrampton',
  'tmhbrantford',
  'tmhburlington',
  'tmhdowntownham',
  'tmhdowntowntoronto',
  'tmhhammountain',
  'tmheasttoronto',
  'tmhhighpark',
  'tmhkitchener',
  'themeetinghouseldn',
  'newmarket.tmh',
  'tmhoakville',
  'tmhottawa',
  'tmhparrysound',
  'tmhrichmond',
  'tmhuptowntoronto',
  'tmhwaterloo',
  'themeetinghouse',
];

export default function Index(): JSX.Element {
  const [done, setDone] = useState(false);
  const [location, setLocation] = useState('');

  async function getPosts() {
    for (const location of locations) {
      setLocation(location);
      await getPostsForLocation(location);
    }
    setDone(true);
    setLocation('');
  }

  async function getPostsForLocation(location: string): Promise<void> {
    const url = `https://www.instagram.com/${location}/?__a=1`;
    const images: CreateInstagramInput[] = [];
    try {
      const res = await fetch(url);
      if (res.status !== 200) {
        console.error({ Error: res.status });
      }
      const json = await res.json();
      const media = json.graphql.user.edge_owner_to_timeline_media.edges;
      media.forEach((elem: any) => {
        if (
          elem.node['__typename'] === 'GraphImage' ||
          elem.node['__typename'] === 'GraphSidecar'
        ) {
          images.push({
            thumbnails: elem.node.thumbnail_resources,
            id: elem.node.shortcode,
            altText: elem.node.accessibility_caption,
            locationId: location,
            timestamp: elem.node.taken_at_timestamp,
          });
        }
      });
      let cnt = 0;
      for (const image of images) {
        try {
          const getInstagram = (await API.graphql({
            query: adminQueries.getInstagram,
            variables: { id: image.id },
            authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
          })) as GraphQLResult<GetInstagramQuery>;

          if (!getInstagram.data?.getInstagram) {
            const createInstagram = await API.graphql({
              query: mutations.createInstagram,
              variables: { input: image },
              authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
            });
            console.log(createInstagram);
          } else if (cnt <= 8) {
            const updateInstagram = await API.graphql({
              query: mutations.updateInstagram,
              variables: { input: image },
              authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
            });
            console.log(updateInstagram);
            cnt++;
          }
        } catch (e) {
          console.error(e);
        }
      }
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <AmplifyAuthenticator federated={federated}>
      <button id="get-posts-button" onClick={() => getPosts()}>
        Get Posts
      </button>
      <div>{location}</div>
      {done ? <div id="done-indicator">Done</div> : null}
    </AmplifyAuthenticator>
  );
}
