/*import * as aws from 'aws-sdk';
import API, { GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import Amplify from '@aws-amplify/core';
import * as queries from './queries';
import * as mutations from './mutations';

Amplify.configure({
  aws_appsync_graphqlEndpoint:
    process.env.API_THEMEETINGHOUSE_GRAPHQLAPIENDPOINTOUTPUT,
  aws_appsync_region: process.env.region,
  aws_appsync_authenticationType: 'AMAZON_COGNITO_USER_POOLS',

  Auth: {
    mandatorySignIn: false,
    region: process.env.region,
    userPoolId: process.env.userPoolId,
    identityPoolRegion: process.env.region,
    userPoolWebClientId: process.env.userPoolWebClientId,
    identityPoolId: process.env.identityPoolId,
  },
});
const cognitoClient = new aws.CognitoIdentityServiceProvider({
  //UserPoolId: process.env.AUTH_COGNITODEVTMH_USERPOOLID,
});

async function getUser(id) {
  try {
    console.log('Starting getUser');
    const json = await API.graphql({
      query: queries.getTmhUser,
      variables: {
        id: id,
      },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    });
    return json.data.getTMHUser;
  } catch (e) {
    console.log(e);
  }
}
*/
exports.handler = (event, context, callback) => {
  console.log(event);
  console.log(event.request);
  event.response = {
    claimsOverrideDetails: {
      groupOverrideDetails: {
        groupsToOverride:
          event.request.groupConfiguration.groupsToOverride.concat(['test1']),
      },
    },
  };
  // insert code to be executed by your lambda trigger
  callback(null, event);
};
