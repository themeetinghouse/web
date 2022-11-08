import { API } from '@aws-amplify/api';
//import * as Linking from 'expo-linking';
//import * as Sentry from '@sentry/browser';
import { GraphQLResult } from '@aws-amplify/api';
import { TmhClearCacheQuery } from 'API';
import * as queries from '../../../src/graphql/queries';

export function ClearCache() {
  const clearCache = async () => {
    try {
      const tmhClearCache = (await API.graphql({
        query: queries.tmhClearCache,
        authMode: 'AMAZON_COGNITO_USER_POOLS',
      })) as GraphQLResult<TmhClearCacheQuery>;
      console.log(tmhClearCache);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <button
      onClick={() => {
        clearCache();
      }}
    >
      GO
    </button>
  );
}
