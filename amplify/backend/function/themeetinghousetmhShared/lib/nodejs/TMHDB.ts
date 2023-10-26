import { API, GRAPHQL_AUTH_MODE, GraphQLResult } from '@aws-amplify/api';
import Amplify from '@aws-amplify/core';
import * as queries from './queries';
import * as mutations from './mutations';
const aws = require('aws-sdk');
const apiKey = 'da2-e4tke5ydc5hffgrwy5e36qdrmu';

Amplify.configure({
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
export default class TMHDB {
  static async ensureLogin() {
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
  static async listLivestreams(date: string) {
    try {
      const livestreams = (await API.graphql({
        query: queries.listLivestreams,
        variables: { filter: { date: { eq: date } } },
        authMode: 'API_KEY',
      })) as GraphQLResult<any>;
      return livestreams?.data?.listLivestreams?.items ?? [];
    } catch (error) {
      console.error({ failedToListLivestreams: error });
      return [];
    }
  }
  static async getRetryableGraphQLOperationPromise(query, args, retry) {
    if (args.itemId.length == 0) return Promise.resolve(null);
    if (!retry) retry = 5;
    const qry = Amplify.API.graphql({
      query: query,
      variables: args,
      authMode: 'API_KEY',
    });

    try {
      return await qry;
    } catch (error) {
      console.log('Promise failure caught: %o', error);
      if (retry > 0) {
        console.log(retry);
        return TMHDB.getRetryableGraphQLOperationPromise(query, args, --retry);
      } else return Promise.resolve(null);
    }
  }
  static async getAllGroups(nextToken) {
    try {
      const login = await TMHDB.ensureLogin();
      if (login != null) return login;

      console.log('Starting getAllGroups');
      const json = await Amplify.API.graphql({
        query: queries.listF1ListGroup2s,
        variables: {
          nextToken: nextToken,
        },
        authMode: 'API_KEY',
      });
      console.log('Done Get listF1ListGroup2s');
      console.log(json);
      if (json.data.listF1ListGroup2s.nextToken != null)
        return [
          ...json.data.listF1ListGroup2s.items,
          ...(await TMHDB.getAllGroups(json.data.listF1ListGroup2s.nextToken)),
        ];
      else return json.data.listF1ListGroup2s.items;
    } catch (json: any) {
      console.log({ 'Error getting recipients': json.errors });
      console.log(json);
      if (json.data.listF1ListGroup2s.nextToken != null)
        return [
          ...json.data.listF1ListGroup2s.items,
          ...(await TMHDB.getAllGroups(json.data.listF1ListGroup2s.nextToken)),
        ];
      else return json.data.listF1ListGroup2s.items;
    }
  }
  static async addGroup(item) {
    try {
      //const login = await TMHDB.ensureLogin();
      //if (login != null) return login;

      const json = await API.graphql({
        query: mutations.createF1ListGroup2,
        authMode: 'AMAZON_COGNITO_USER_POOLS',
        variables: { input: item },
      });
    } catch (json: any) {
      console.log(item);
      console.log(json);
      console.log({ 'Error getting addGroup': json.errors });
      console.log({ 'Error getting addGroup': json.errors[0].path });
      console.log({ 'Error getting addGroup': json.errors[0].locations });
    }
  }

  static async updateGroup(item) {
    try {
      // const login = await TMHDB.ensureLogin();
      // if (login != null) return login;

      const json = await API.graphql({
        query: mutations.updateF1ListGroup2,
        authMode: 'AMAZON_COGNITO_USER_POOLS',
        variables: { input: item },
      });
    } catch (json: any) {
      console.log({ 'Error getting updateGroup': json.errors });
      console.log(json);
    }
  }
  static async deleteGroup(item) {
    try {
      // const login = await TMHDB.ensureLogin();
      // if (login != null) return login;

      const json = await API.graphql({
        query: mutations.deleteF1ListGroup2,
        authMode: 'AMAZON_COGNITO_USER_POOLS',
        variables: { input: { id: item.id } },
      });
    } catch (json: any) {
      console.log({ 'Error getting deleteGroup': json.errors });
      console.log(json);
    }
  }

  static async f1ListAllActivities() {
    var page = 0;
    var allActivities = [];
    while (true) {
      page++;
      const act = await TMHDB.f1ListActivities(page);

      if (act.length == 0) break;
      allActivities.push(...act);
    }
    return allActivities;
  }
  static async f1ListActivities(page) {
    try {
      console.log('Starting f1ListActivities');
      const json: any = await API.graphql({
        query: queries.f1ListActivities,
        authMode: 'API_KEY',
        variables: { page: page.toString() },
      });
      console.log('Done Get f1ListActivities');

      var result;
      if (json.data.F1ListActivities) result = json.data.F1ListActivities;
      else result = [];
      return result;
    } catch (json: any) {
      console.log({ 'Error getting recipients': json.errors });
      var result;
      if (json.data.F1ListActivities) result = json.data.F1ListActivities;
      else result = [];
      return result;
    }
  }

  static async getAllAssignments(nextToken) {
    try {
      console.log('Starting getAllAssignments');
      const json: any = await API.graphql({
        query: queries.listF1Assignments,
        variables: {
          nextToken: nextToken,
        },
        authMode: 'API_KEY',
      });
      console.log('Done Get listF1Assignments');

      if (json.data.listF1Assignments.nextToken != null)
        return [
          ...json.data.listF1Assignments.items,
          ...(await TMHDB.getAllAssignments(
            json.data.listF1Assignments.nextToken
          )),
        ];
      else return json.data.listF1Assignments.items;
    } catch (json: any) {
      console.log({ 'Error getting recipients': json.errors });
      console.log(json);
      if (json.data.listF1Assignments.nextToken != null)
        return [
          ...json.data.listF1Assignments.items,
          ...(await TMHDB.getAllAssignments(
            json.data.listF1Assignments.nextToken
          )),
        ];
      else return json.data.listF1Assignments.items;
    }
  }
  static async addGroupAssignment(item) {
    const zz = { ...item, personId: item.person.id };
    try {
      const login = await TMHDB.ensureLogin();
      if (login != null) return login;

      const json = await API.graphql({
        query: mutations.createF1Assignments,
        authMode: 'AMAZON_COGNITO_USER_POOLS',
        variables: { input: zz },
      });
    } catch (json: any) {
      console.log(item);
      console.log(json);
      console.log({ 'Error getting addGroup': json.errors });
      console.log({ 'Error getting addGroup': json.errors[0].path });
      console.log({ 'Error getting addGroup': json.errors[0].locations });
    }
  }
  static async updateGroupAssignment(item) {
    const zz = { ...item, personId: item.person.id };
    try {
      const login = await TMHDB.ensureLogin();
      if (login != null) return login;

      const json = await API.graphql({
        query: mutations.updateF1Assignments,
        authMode: 'AMAZON_COGNITO_USER_POOLS',
        variables: { input: zz },
      });
    } catch (json: any) {
      console.log({ 'Error getting updateGroup': json.errors });
      console.log(json);
    }
  }
  static async deleteGroupAssignment(item) {
    const zz = { ...item, personId: item.person.id };
    try {
      const login = await TMHDB.ensureLogin();
      if (login != null) return login;

      const json = await Amplify.API.graphql({
        query: mutations.deleteF1Assignments,
        authMode: 'AMAZON_COGNITO_USER_POOLS',
        variables: { input: { id: zz.id } },
      });
    } catch (json: any) {
      console.log({ 'Error getting deleteGroup': json.errors });
      console.log(json);
    }
  }
  static async f1SearchContributionReceipts(householdId: string) {
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
  static async f1ListGroupTypes() {
    try {
      const login = await TMHDB.ensureLogin();
      if (login != null) return login;

      console.log('Starting groupMemberByGroup');
      const json: any = await API.graphql({
        query: queries.f1ListGroupTypes,
        authMode: 'API_KEY',
      });
      console.log('Done Get f1ListGroupTypes');
      var result;
      if (json.data.F1ListGroupTypes.groupTypes.groupType)
        result = json.data.F1ListGroupTypes.groupTypes.groupType.filter(
          (item) => item.isWebEnabled == 'true'
        );
      else result = [];
      return result;
    } catch (json: any) {
      console.log({ 'Error getting recipients': json.errors });
      var result;
      if (json.data.F1ListGroupTypes.groupTypes.groupType)
        result = json.data.F1ListGroupTypes.groupTypes.groupType.filter(
          (item) => item.isWebEnabled == 'true'
        );
      else result = [];
      return result;
    }
  }
  static async getUser(id: string) {
    try {
      const login = await TMHDB.ensureLogin();
      if (login != null) return login;
      console.log({ 'Starting getUser': id });
      const json: any = await API.graphql({
        query: queries.getTMHUser,
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
        query: mutations.updateTMHUser,
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
