/* Amplify Params - DO NOT EDIT
	API_THEMEETINGHOUSE_GRAPHQLAPIENDPOINTOUTPUT
	API_THEMEETINGHOUSE_GRAPHQLAPIIDOUTPUT
	API_THEMEETINGHOUSE_GRAPHQLAPIKEYOUTPUT
	AUTH_COGNITODEVTMH_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT */
var aws = require('aws-sdk');
const cognitoClient = new aws.CognitoIdentityServiceProvider({
  UserPoolId: process.env.AUTH_COGNITODEVTMH_USERPOOLID,
});

async function getUser(event) {
  const username = event.identity.username;
  let request = {
    UserPoolId: process.env.AUTH_COGNITODEVTMH_USERPOOLID,
    Filter: `username = "${username}"`,
    Limit: 1,
  };
  let data = await cognitoClient.listUsers(request).promise();
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
async function f1SearchPeople(email) {
  console.log('f1SearchPeople invoke started');
  var lambda = new aws.Lambda({
    region: process.env.REGION, //change to your region
  });
  const payload = { arguments: { itemId: email } };

  const params = {
    FunctionName: 'F1SearchPeople',
    Payload: JSON.stringify(payload),
  };

  const LambdaPromise = (params) => lambda.invoke(params).promise();

  const responseFromLambda2 = await LambdaPromise(params);
  return JSON.parse(responseFromLambda2.Payload);
}
exports.handler = async (event) => {
  // TODO implement
  console.log({ event: event });
  var user = await getUser(event);
  if (user.email_verified == 'true') {
    const people = await f1SearchPeople(user.email);
    const f1UserId = people.results.person[0].id;
    const f1HouseholdID = people.results.person[0]['@householdID'];
    console.log({ f1UserId: f1UserId, f1HouseholdID: f1HouseholdID });
    //TODO SAVE TO DB
  }

  const response = {
    statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  },
    body: JSON.stringify('Hello from Lambda!'),
  };
  return response;
};
