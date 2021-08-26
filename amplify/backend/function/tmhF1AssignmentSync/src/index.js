/* Amplify Params - DO NOT EDIT
	API_THEMEETINGHOUSE_GRAPHQLAPIENDPOINTOUTPUT
	API_THEMEETINGHOUSE_GRAPHQLAPIIDOUTPUT
	API_THEMEETINGHOUSE_GRAPHQLAPIKEYOUTPUT
	ENV
	FUNCTION_GETBIBLEPASSAGE_NAME
	REGION
Amplify Params - DO NOT EDIT */
'use strict';

global.crypto = require('crypto');
const Amplify = require('aws-amplify');
global.fetch = require('node-fetch');
const queries = require('./queries');
const mutations = require('./mutations');
//const apiKey = 'da2-6zfuocqmhvecrfkng7hx2oipni';
const apiKey = 'da2-zrd5a3b2izccrajf3vt3dcj4au';
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
async function f1ListAllActivities() {
  var page = 0;
  var allActivities = [];
  while (true) {
    page++;
    const act = await f1ListActivities(page);

    if (act.length == 0) break;
    allActivities.push(...act);
  }
  return allActivities;
}
async function f1ListActivities(page) {
  try {
    console.log('Starting f1ListActivities');
    const json = await Amplify.API.graphql({
      query: queries.f1ListActivities,
      authMode: 'API_KEY',
      variables: { page: page.toString() },
    });
    console.log('Done Get f1ListActivities');

    var result;
    if (json.data.F1ListActivities) result = json.data.F1ListActivities;
    else result = [];
    return result;
  } catch (json) {
    console.log({ 'Error getting recipients': json.errors });
    var result;
    if (json.data.F1ListActivities) result = json.data.F1ListActivities;
    else result = [];
    return result;
  }
}

async function addGroup(item) {
  const zz = { ...item, personId: item.person.id };
  try {
    const json = await Amplify.API.graphql({
      query: mutations.createF1Assignments,
      authMode: 'AMAZON_COGNITO_USER_POOLS',
      variables: { input: zz },
    });
  } catch (json) {
    console.log(item);
    console.log(json);
    console.log({ 'Error getting addGroup': json.errors });
    console.log({ 'Error getting addGroup': json.errors[0].path });
    console.log({ 'Error getting addGroup': json.errors[0].locations });
  }
}
async function updateGroup(item) {
  const zz = { ...item, personId: item.person.id };
  try {
    const json = await Amplify.API.graphql({
      query: mutations.updateF1Assignments,
      authMode: 'AMAZON_COGNITO_USER_POOLS',
      variables: { input: zz },
    });
  } catch (json) {
    console.log({ 'Error getting updateGroup': json.errors });
    console.log(json);
  }
}
async function deleteGroup(item) {
  const zz = { ...item, personId: item.person.id };
  try {
    const json = await Amplify.API.graphql({
      query: mutations.deleteF1Assignments,
      authMode: 'AMAZON_COGNITO_USER_POOLS',
      variables: { input: { id: zz.id } },
    });
  } catch (json) {
    console.log({ 'Error getting deleteGroup': json.errors });
    console.log(json);
  }
}

async function getAllAssignments(nextToken) {
  try {
    console.log('Starting getAllAssignments');
    const json = await Amplify.API.graphql({
      query: queries.listF1Assignmentss,
      variables: {
        nextToken: nextToken,
      },
      authMode: 'API_KEY',
    });
    console.log('Done Get listF1Assignmentss');

    if (json.data.listF1Assignmentss.nextToken != null)
      return [
        ...json.data.listF1Assignmentss.items,
        ...(await getAllAssignments(json.data.listF1Assignmentss.nextToken)),
      ];
    else return json.data.listF1Assignmentss.items;
  } catch (json) {
    console.log({ 'Error getting recipients': json.errors });
    console.log(json);
    if (json.data.listF1Assignmentss.nextToken != null)
      return [
        ...json.data.listF1Assignmentss.items,
        ...(await getAllAssignments(json.data.listF1Assignmentss.nextToken)),
      ];
    else return json.data.listF1ListAssignments.items;
  }
}
async function getRetryableGraphQLOperationPromise(query, args, retry) {
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
      return getRetryableGraphQLOperationPromise(query, args, --retry);
    } else return Promise.resolve(null);
  }
}
function uniqBy(a, key) {
  return [...new Map(a.map((x) => [key(x), x])).values()];
}
async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}
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
      const allGroupsFromF1 = [];
      const locationsLoaded = [];
      const groupTypes = await f1ListAllActivities();
      console.log({ ActivityCount: groupTypes.length });
      await asyncForEach(groupTypes, async (groupTypeItem) => {
        const f1LocationId = groupTypeItem.id;
        var page = 0;
        while (true) {
          page = page + 1;
          const listGroupsResponse = await getRetryableGraphQLOperationPromise(
            queries.f1ListAssignments,
            { itemId: f1LocationId, page: page.toString() },
            5
          );
          if (listGroupsResponse.data.F1ListAssignments.length == 0) break;
          var openGroupsForLocation;
          if (listGroupsResponse.data.F1ListAssignments)
            openGroupsForLocation = listGroupsResponse.data.F1ListAssignments;
          else openGroupsForLocation = [];

          allGroupsFromF1.push(...openGroupsForLocation);
        }
      });
      const allGroupsFromDynamo = await getAllAssignments(null);
      const allGroupsFromDynamoUniq = uniqBy(allGroupsFromDynamo, (x) => x.id);
      const allGroupsFromF1Uniq = uniqBy(allGroupsFromF1, (x) => x.id);
      console.log({
        allGroupsFromF1: allGroupsFromF1.length,
        allGroupsFromDynamo: allGroupsFromDynamo.length,
        allGroupsFromDynamoUniq: allGroupsFromDynamoUniq.length,
        allGroupsFromF1Uniq: allGroupsFromF1Uniq.length,
      });

      let update = allGroupsFromF1Uniq.filter((x) =>
        allGroupsFromDynamoUniq.map((y) => y.id).includes(x.id)
      );
      let add = allGroupsFromF1Uniq.filter(
        (x) => !allGroupsFromDynamoUniq.map((y) => y.id).includes(x.id)
      );
      let deleteIt = allGroupsFromDynamoUniq.filter(
        (x) => !allGroupsFromF1Uniq.map((y) => y.id).includes(x.id)
      );
      console.log({
        add: add.length,
        update: update.length,
        delete: deleteIt.length,
      });
      console.log('Add Groups');
      await asyncForEach(add, async (item) => {
        await addGroup(item);
      });
      console.log('Update Groups');
      await asyncForEach(update, async (item) => {
        await updateGroup(item);
      });
      console.log('Delete Groups');
      await asyncForEach(deleteIt, async (item) => {
        await deleteGroup(item);
      });
    } catch (e) {
      console.log({ 'Login Error': e });
    }
  } catch (error) {
    console.log(error);
    return { statusCode: '402', error: { message: error.message } };
  }
}

exports.handler = async (event) => {
  await Execute(event);
  return Promise.resolve('Successfully processed DynamoDB record');
};
