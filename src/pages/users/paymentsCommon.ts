import API, { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import {
  GetTMHUserQuery,
  TmhF1SearchContributionReceiptsQuery,
  TmhStripeListPaymentMethodsQuery,
} from 'API';
import { Auth } from 'aws-amplify';
import * as queries from '../../graphql/queries';

export default class PaymentsCommon {
  static getPaymentMethods = async () => {
    try {
      const tmhStripeListPaymentMethods = (await API.graphql({
        query: queries.tmhStripeListPaymentMethods,
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })) as GraphQLResult<TmhStripeListPaymentMethodsQuery>;
      console.log(tmhStripeListPaymentMethods);
      return tmhStripeListPaymentMethods.data?.tmhStripeListPaymentMethods;
    } catch (e) {
      console.log({ Error: e });
    }
  };
  static getReceipts = async (): Promise<
    NonNullable<
      NonNullable<
        GraphQLResult<TmhF1SearchContributionReceiptsQuery>['data']
      >['tmhF1SearchContributionReceipts']
    >['results']
  > => {
    const tmhF1SearchContributionReceipts = (await API.graphql({
      query: queries.tmhF1SearchContributionReceipts,
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<TmhF1SearchContributionReceiptsQuery>;
    console.log(tmhF1SearchContributionReceipts);
    return tmhF1SearchContributionReceipts.data?.tmhF1SearchContributionReceipts
      ?.results;
  };
  static getCurrentUserProfile = async (): Promise<
    GraphQLResult<GetTMHUserQuery>
  > => {
    const user = await Auth.currentAuthenticatedUser().catch(() => {
      console.log('No current authenticated user');
    });
    console.log(user);
    const tmhUser = (await API.graphql({
      query: queries.getTMHUser,
      variables: {
        id: user?.username,
      },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<GetTMHUserQuery>;
    console.log(tmhUser);
    return tmhUser;
  };
}
