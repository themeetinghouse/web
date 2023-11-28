/* Amplify Params - DO NOT EDIT
	ANALYTICS_THEMEETINGHOUSE_ID
	ANALYTICS_THEMEETINGHOUSE_REGION
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const {
  CognitoIdentityProvider,
} = require('@aws-sdk/client-cognito-identity-provider');
const { Pinpoint } = require('@aws-sdk/client-pinpoint');

async function getUsers(nextToken) {
  const cognito = new CognitoIdentityProvider();
  var params = {
    UserPoolId: process.env.AUTH_COGNITODEVTMH_USERPOOLID,
    Limit: 60,
    PaginationToken: nextToken,
  };
  const users = await cognito.listUsers(params);

  return users;
}

async function getAllUsers() {
  var allUsers = [];
  var users;
  var nextToken = null;
  do {
    users = await getUsers(nextToken);
    allUsers.push(...users.Users);
    nextToken = users.PaginationToken;
  } while (users.PaginationToken != null);

  return allUsers;
}

async function getInactiveEndpoints(user) {
  const pinpoint = new Pinpoint({
    // The key apiVersion is no longer supported in v3, and can be removed.
    // @deprecated The client uses the "latest" apiVersion.
    apiVersion: '2016-12-01',
  });
  var params = {
    ApplicationId: process.env.ANALYTICS_THEMEETINGHOUSE_ID,
    UserId: user.Attributes.filter((e) => e.Name == 'sub')[0].Value,
  };
  const endpoints = await pinpoint.getUserEndpoints(params);
  const inactiveEndpoints = endpoints.EndpointsResponse.Item.filter(
    (e) => e.EndpointStatus == 'INACTIVE'
  );
  console.log({ inactiveEndpoints: inactiveEndpoints });
  return inactiveEndpoints;
}
async function deleteEndpoint(endpointId) {
  const pinpoint = new Pinpoint({
    // The key apiVersion is no longer supported in v3, and can be removed.
    // @deprecated The client uses the "latest" apiVersion.
    apiVersion: '2016-12-01',
  });
  var params = {
    ApplicationId: process.env.ANALYTICS_THEMEETINGHOUSE_ID,
    EndpointId: endpointId,
  };
  const endpoint = await pinpoint.deleteEndpoint(params);
  return endpoint;
}
export const handler = async (event) => {
  try {
    const allUsers = await getAllUsers();
    const map = allUsers.map(async (user) => {
      try {
        const inactiveEndpoints = await getInactiveEndpoints(user);
        const map2 = inactiveEndpoints.map(async (endpoint) => {
          console.log({ deleting: endpoint.Id });
          return await deleteEndpoint(endpoint.Id);
        });
        await Promise.all(map2);
      } catch (e: any) {
        console.log(e);
      }
      console.log('Done2');
    });
    await Promise.all(map);
    console.log('DONE');
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
