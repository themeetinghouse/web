/* Amplify Params - DO NOT EDIT
	API_THEMEETINGHOUSE_GRAPHQLAPIENDPOINTOUTPUT
	API_THEMEETINGHOUSE_GRAPHQLAPIIDOUTPUT
	API_THEMEETINGHOUSE_GRAPHQLAPIKEYOUTPUT
	AUTH_COGNITODEVTMH_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT */

import { CognitoIdentityProvider } from '@aws-sdk/client-cognito-identity-provider';
import { Lambda } from '@aws-sdk/client-lambda';
import { SecretsManager } from '@aws-sdk/client-secrets-manager';
import { API, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
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
const cognitoClient = new CognitoIdentityProvider({});

async function getUser(id: string) {
  try {
    console.log('Starting getUser');
    const json: any = await API.graphql({
      query: queries.getTmhUser,
      variables: {
        id: id,
      },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    });
    return json.data.getTMHUser;
  } catch (e: any) {
    console.log({ error: e });
    if (e.data.getTMHUser) return e.data.getTMHUser;
  }
}
async function updateUser(item) {
  console.log('Starting updateUser');
  try {
    const json: any = await API.graphql({
      query: mutations.updateTmhUser,
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      variables: { input: item },
    });
    return json.data.updateTMHUser;
  } catch (json: any) {
    console.log({ 'Error getting updateGroup': json.errors });
    console.log(json);
  }
}
async function getCognitoUser(event) {
  const username = event.identity.username;
  let request = {
    UserPoolId: process.env.AUTH_COGNITODEVTMH_USERPOOLID,
    Filter: `username = "${username}"`,
    Limit: 1,
  };
  let data = await cognitoClient.listUsers(request);
  if (!data.Users || data.Users.length < 1) {
    return null;
  }
  const user = data.Users[0];

  const result = {
    Username: user.Username,
  };
  user.Attributes.forEach((x) => (result[x.Name] = x.Value));

  return result;
}
async function f1SearchPeople(email: string) {
  console.log('f1SearchPeople invoke started');
  var lambda = new Lambda({
    //change to your region
    region: process.env.REGION,
  });
  const payload = { arguments: { itemId: email } };

  const params = {
    FunctionName: 'F1SearchPeople',
    Payload: JSON.stringify(payload),
  };

  const LambdaPromise = (params) => lambda.invoke(params);

  const responseFromLambda2 = await LambdaPromise(params);
  return JSON.parse(responseFromLambda2.Payload.toString());
}
export const handler = async (event) => {
  var secretName = 'tmhweb/' + process.env.ENV + '/secrets',
    secret,
    decodedBinarySecret;
  // Create a Secrets Manager client
  var client = new SecretsManager({
    region: process.env.REGION,
  });
  try {
    const data = await client.getSecretValue({ SecretId: secretName });

    if ('SecretString' in data) {
      secret = JSON.parse(data.SecretString);
    } else {
      decodedBinarySecret = Buffer.from(data.SecretBinary).toString('base64');
    }
    console.log('Loading Secret Done');

    await Amplify.Auth.signIn(secret.adminUser, secret.adminPW);
    const currentSession = await Amplify.Auth.currentSession();
    Amplify.configure({
      Authorization: currentSession.getIdToken().getJwtToken(),
    });
    console.log('Logged in');
    console.log({ event: event });
    var cognitoUser: any = await getCognitoUser(event);
    if (cognitoUser.email_verified == 'true') {
      const people = await f1SearchPeople(cognitoUser.email);
      const f1UserId = people.results.person[0].id;
      const f1HouseholdID = people.results.person[0]['@householdID'];
      console.log({
        cognitoUser: cognitoUser,
        f1UserId: f1UserId,
        f1HouseholdID: f1HouseholdID,
      });

      const user = await getUser(cognitoUser.Username);
      console.log({ user: user });
      if (
        user != null &&
        (user.f1PersonId == null || user.f1HouseholdId == null)
      ) {
        console.log('Updating');
        const updatedUser = await updateUser({
          id: cognitoUser.Username,
          f1PersonId: f1UserId,
          f1HouseholdId: f1HouseholdID,
        });
        console.log({ updatedUser: updatedUser });
      } //TODO SAVE TO DB
    }

    const response = {
      statusCode: 200,
      //  Uncomment below to enable CORS requests
      //  headers: {
      //      "Access-Control-Allow-Origin": "*",
      //      "Access-Control-Allow-Headers": "*"
      //  },

      body: JSON.stringify(true),
    };
    return response;
  } catch (error: any) {
    console.log({ ERROR: error });
    return { statusCode: '402', error: { message: error.message } };
  }
};
