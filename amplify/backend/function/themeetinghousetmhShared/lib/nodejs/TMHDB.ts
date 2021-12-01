import API, { GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import Amplify from '@aws-amplify/core';
import * as queries from './queries';
import * as mutations from './mutations';
const aws = require('aws-sdk');

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
export default class TMHDB {
  static async ensureLogin() {
    console.log('Starting Login');
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
        return null;
      } catch (e: any) {
        console.log({ error: e });
        return { statusCode: '401', error: 'Login Error' + e };
      }
    } catch (error: any) {
      console.log({ ERROR: error });
      return { statusCode: '402', error: { message: error.message } };
    }
  }
  static async getUser(id: string) {
    try {
      const login = await TMHDB.ensureLogin();
      if (login != null) return login;
      console.log({ 'Starting getUser': id });
      const json: any = await API.graphql({
        query: queries.getTmhUser,
        variables: {
          id: id,
        },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      });
      return json.data.getTMHUser;
    } catch (e: any) {
      console.log({ error: e.errors });
      if (e.data.getTMHUser != null) return e.data.getTMHUser;
      return null;
    }
  }
  static async updateUser(
    id: string,
    field: string,
    value: string | number | boolean
  ) {
    console.log({ 'Updating User': id });
    try {
      console.log('Done Auth');
      var queryA = {
        query: mutations.updateTmhUser,
        variables: {
          input: {
            id: id,
            [field]: value,
          },
        },
        authMode: 'AMAZON_COGNITO_USER_POOLS',
      };
      var json = await Amplify.API.graphql(queryA);
      console.log('Done Update Users');
      return true;
    } catch (json: any) {
      if (json && json.data && json.data.getUser) {
        return true;
      }
      console.log({ 'Error Updating user': json });
      console.log({ 'Error Updating user': json.errors });
      console.log({ 'Error Updating user': json.errors[0].path });
      console.log({ 'Error Updating user': json.errors[0].locations });
      return false;
    }
  }
}
