import { API } from 'aws-amplify';
import { GRAPHQL_AUTH_MODE, GraphQLResult } from '@aws-amplify/api';
import {
  listRedirects,
  getRedirect as getRedirectQuery,
} from 'graphql/queries';
import { ListRedirectsQuery, GetRedirectQuery } from 'API';

const REDIRECT_LIMIT = 1000;

export type Redirects = NonNullable<
  NonNullable<ListRedirectsQuery['listRedirects']>['items']
>;

export const getRedirects = () => {
  return API.graphql({
    query: listRedirects,
    variables: { limit: REDIRECT_LIMIT },
    authMode: GRAPHQL_AUTH_MODE.API_KEY,
  }) as Promise<GraphQLResult<ListRedirectsQuery>>;
};

export type Redirect = GetRedirectQuery['getRedirect'];

export const getRedirect = (id: string) => {
  return API.graphql({
    query: getRedirectQuery,
    variables: { id },
    authMode: GRAPHQL_AUTH_MODE.API_KEY,
  }) as Promise<GraphQLResult<GetRedirectQuery>>;
};
