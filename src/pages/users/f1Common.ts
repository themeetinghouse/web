import API, { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import {
  F1SearchContributionReceiptsResultType,
  TmhF1SearchContributionReceiptsQuery,
} from 'API';
import * as queries from '../../../src/graphql/queries';

export default class f1Common {
  static getReceipts = async (
    setLastTransacs: React.Dispatch<
      React.SetStateAction<
        F1SearchContributionReceiptsResultType | null | undefined
      >
    >,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      const tmhF1SearchContributionReceipts = (await API.graphql({
        query: queries.tmhF1SearchContributionReceipts,
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })) as GraphQLResult<TmhF1SearchContributionReceiptsQuery>;
      console.log(tmhF1SearchContributionReceipts);
      setLastTransacs(
        tmhF1SearchContributionReceipts.data?.tmhF1SearchContributionReceipts
          ?.results
      );

      setIsLoading(false);
    } catch (e) {
      console.log({ Error: e });
    }
  };
}
