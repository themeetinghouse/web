/* Amplify Params - DO NOT EDIT
	ANALYTICS_THEMEETINGHOUSE_ID
	ANALYTICS_THEMEETINGHOUSE_REGION
	ENV
	REGION
Amplify Params - DO NOT EDIT */
import * as aws from 'aws-sdk';
import API, { GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import Amplify from '@aws-amplify/core';

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

    await Amplify.Auth.signIn(secret.adminUser, secret.adminPW);
    const currentSession = await Amplify.Auth.currentSession();
    Amplify.configure({
      Authorization: currentSession.getIdToken().getJwtToken(),
    });
    console.log('Logged in');
    console.log({ event: event });

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
  } catch (error) {
    console.log({ ERROR: error });
    return { statusCode: '402', error: { message: error.message } };
  }
};
