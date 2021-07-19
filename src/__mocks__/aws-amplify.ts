import { GraphQLResult } from '@aws-amplify/api';

const Amplify = {
  configure: jest.fn(),
};

export const Analytics = {
  record: jest.fn(),
};

export const API = {
  graphql: jest
    .fn()
    .mockImplementation((): Promise<GraphQLResult> => Promise.resolve({})),
};

export function graphqlOperation(
  query: any,
  variables?: Record<string, unknown>
) {
  return {
    query,
    variables,
  };
}

export default Amplify;
