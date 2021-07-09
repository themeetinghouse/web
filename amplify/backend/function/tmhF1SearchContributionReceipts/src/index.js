'use strict';

global.crypto = require('crypto');
const Amplify = require('aws-amplify');
global.fetch = require('node-fetch');
const queries = require('./queries');
const mutations = require('./mutations');
const apiKey = 'da2-6zfuocqmhvecrfkng7hx2oipni';

Amplify.default.configure({
  aws_appsync_graphqlEndpoint:
    process.env.API_THEMEETINGHOUSE_GRAPHQLAPIENDPOINTOUTPUT,
  aws_appsync_region: process.env.region,
  aws_appsync_authenticationType: 'AMAZON_COGNITO_USER_POOLS',
  aws_appsync_apiKey: apiKey,
  Auth: {
    mandatorySignIn: false,
    region: process.env.region,
    userPoolId: process.env.userPoolId,
    identityPoolRegion: process.env.region,
    userPoolWebClientId: process.env.userPoolWebClientId,
    identityPoolId: process.env.identityPoolId,
    apiKey: apiKey,
  },
});
async function Execute(event) {
  var AWS = require('aws-sdk'),
    region = 'us-east-1',
    secretName = 'tmhweb/' + process.env.ENV + '/secrets',
    secret,
    decodedBinarySecret;

  // Create a Secrets Manager client
  var client = new AWS.SecretsManager({
    region: region,
  });
  try {
    const data = await client
      .getSecretValue({ SecretId: secretName })
      .promise();

    if ('SecretString' in data) {
      secret = JSON.parse(data.SecretString);
    } else {
      let buff = new Buffer(data.SecretBinary, 'base64');
      decodedBinarySecret = buff.toString('ascii');
    }
    console.log('Loading Secret Done');

    try {
      await Amplify.Auth.signIn(secret.adminUser, secret.adminPW);
      const currentSession = await Amplify.Auth.currentSession();
      Amplify.default.configure({
        Authorization: currentSession.getIdToken().getJwtToken(),
      });
      console.log('Logged in');

      return {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
      };
    } catch (e) {
      return { statusCode: '401', error: 'Login Error' + e };
    }
  } catch (error) {
    console.log(error);
    return { statusCode: '402', error: { message: error.message } };
  }
}
exports.handler = async (event) => {
  // TODO implement

  return await Execute(event);
};
