import * as aws from 'aws-sdk';
import API, { GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import Amplify from '@aws-amplify/core';
import * as queries from './queries';

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

async function getUser(id: string) {
  try {
    console.log({ 'Starting getUser': id });
    const json: any = await API.graphql({
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
async function f1SearchContributionReceipts(householdId: string) {
  console.log('f1SearchContributionReceipts invoke started');
  var lambda = new aws.Lambda({
    region: process.env.REGION, //change to your region
  });
  const payload = { arguments: { itemId: householdId } };

  const params = {
    FunctionName: 'F1SearchContributionReceipts',
    Payload: JSON.stringify(payload),
  };

  const LambdaPromise = (params) => lambda.invoke(params).promise();

  const responseFromLambda2 = await LambdaPromise(params);
  console.log({ responseFromLambda2: responseFromLambda2 });
  return JSON.parse(responseFromLambda2.Payload.toString());
}
export const handler = async (event) => {
  var secretName = 'tmhweb/' + process.env.ENV + '/secrets',
    secret,
    decodedBinarySecret;
  // Create a Secrets Manager client
  var client = new aws.SecretsManager({
    region: process.env.REGION,
  });
  try {
    const data = await client
      .getSecretValue({ SecretId: secretName })
      .promise();

    if ('SecretString' in data) {
      secret = JSON.parse(data.SecretString);
    } else {
      decodedBinarySecret = data.SecretBinary.toString('base64');
    }
    console.log('Loading Secret Done');
    try {
      await Amplify.Auth.signIn(secret.adminUser, secret.adminPW);
      const currentSession = await Amplify.Auth.currentSession();
      Amplify.configure({
        Authorization: currentSession.getIdToken().getJwtToken(),
      });
      console.log('Logged in');
      const user = await getUser(event.identity.username);
      if (user.f1HouseholdId == null)
        return { statusCode: 402, error: { message: 'No Household Id found' } };
      const result = await f1SearchContributionReceipts(user.f1HouseholdId);
      const z = {
        statusCode: 200,
        results: result.results,
      };
      console.log(z);
      return z;
    } catch (e) {
      console.log({ error: e });
      return { statusCode: '401', error: 'Login Error' + e };
    }
  } catch (error) {
    console.log({ ERROR: error });
    return { statusCode: '402', error: { message: error.message } };
  }
};
