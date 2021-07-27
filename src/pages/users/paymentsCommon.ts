import API, { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import {
  F1SearchContributionReceiptsResultType,
  GetTmhUserQuery,
  TmhF1SearchContributionReceiptsQuery,
} from 'API';
import { Auth } from 'aws-amplify';
import * as queries from '../../graphql/queries';

export default class PaymentsCommon {
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
  static getCurrentUserProfile = async (
    setUser: React.Dispatch<
      React.SetStateAction<
        | NonNullable<
            NonNullable<GraphQLResult<GetTmhUserQuery>['data']>['getTMHUser']
          >
        | null
        | undefined
      >
    >
  ) => {
    try {
      const user = await Auth.currentAuthenticatedUser().catch(() => {
        console.log('No current authenticated user');
      });
      console.log(user);
      const tmhUser = (await API.graphql({
        query: queries.getTmhUser,
        variables: {
          id: user?.username,
        },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })) as GraphQLResult<GetTmhUserQuery>;
      console.log(tmhUser);
      setUser(tmhUser?.data?.getTMHUser);
    } catch (e) {
      console.log({ Error: e });
    }
  };
}
