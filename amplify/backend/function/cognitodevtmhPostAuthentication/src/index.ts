/* Amplify Params - DO NOT EDIT
	API_THEMEETINGHOUSE_GRAPHQLAPIENDPOINTOUTPUT
	API_THEMEETINGHOUSE_GRAPHQLAPIIDOUTPUT
	API_THEMEETINGHOUSE_GRAPHQLAPIKEYOUTPUT
	AUTH_COGNITODEVTMH_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT */
const {
  CognitoIdentityProvider,
} = require('@aws-sdk/client-cognito-identity-provider');

const { DynamoDB } = require('@aws-sdk/client-dynamodb');

const { Lambda } = require('@aws-sdk/client-lambda');

const { SecretsManager } = require('@aws-sdk/client-secrets-manager');

const cognitoClient = new CognitoIdentityProvider({
  region: process.env.REGION,
});

async function getUser(id: string, event: any) {
  try {
    console.log('Starting Get User');
    var ddb = new DynamoDB({
      apiVersion: '2012-08-10',
      region: process.env.REGION,
    });

    var params = {
      ExpressionAttributeValues: {
        ':username': { S: id },
      },
      KeyConditionExpression: 'id = :username',
      ProjectionExpression: 'id, f1PersonId, f1HouseholdId',
      TableName:
        'TMHUser-' +
        process.env.API_THEMEETINGHOUSE_GRAPHQLAPIIDOUTPUT +
        '-' +
        process.env.ENV,
    };
    const result = await ddb.query(params);
    console.log({ getUser: result });
    if (result.Items.length > 0) return result.Items[0];
    else return null;
  } catch (e) {
    console.log({ error: e });
    return null;
  }
}
async function updateUser(item, event) {
  console.log('Starting updateUser');
  try {
    var ddb = new DynamoDB({
      apiVersion: '2012-08-10',
      region: process.env.REGION,
    });

    var params = {
      TableName:
        'TMHUser-' +
        process.env.API_THEMEETINGHOUSE_GRAPHQLAPIIDOUTPUT +
        '-' +
        process.env.ENV,
      Key: {
        id: item.id,
      },
      UpdateExpression: 'set f1PersonId = :r, f1HouseholdId=:p',
      ExpressionAttributeValues: {
        ':r': item.f1PersonId,
        ':p': item.f1HouseholdId,
      },
      ReturnValues: 'UPDATED_NEW',
    };

    const result = await ddb.updateItem(params);
    console.log({ getUser: result });
    if (result.Items.length > 0) return result.Items[0];
    else return null;
  } catch (e) {
    console.log({ error: e });
    return null;
  }
}
async function createUser(item, event) {
  console.log('Starting createUser');
  try {
    var ddb = new DynamoDB({
      apiVersion: '2012-08-10',
      region: process.env.REGION,
    });
    var date = new Date().toISOString();
    var item: any = {
      id: { S: item.id },
      __typename: { S: 'TMHUser' },
      billingAddress: {
        M: {},
      },
      given_name: { S: '' },
      family_name: { S: '' },
      createdAt: { S: date },
      updatedAt: { S: date },
      joined: { S: date },
      owner: { S: item.id },
      f1PersonId: item.f1PersonId ? { S: item.f1PersonId } : null,
      f1HouseholdId: item.f1PersonId ? { S: item.f1HouseholdId } : null,
      email: { S: item.email },
      phone: item.phone_number ? { S: item.phone_number } : null,
    };

    console.log({ item: item });
    var params = {
      TableName:
        'TMHUser-' +
        process.env.API_THEMEETINGHOUSE_GRAPHQLAPIIDOUTPUT +
        '-' +
        process.env.ENV,
      Item: item,
    };

    const result = await ddb.putItem(params);
    console.log({ getUser: result });
    if (result.Items.length > 0) return result.Items[0];
    else return null;
  } catch (e) {
    console.log({ error: e });
    return null;
  }
}
async function getCognitoUser(event) {
  const username = event.userName;
  let request = {
    UserPoolId: process.env.userPoolId,
    Filter: `username = "${username}"`,
    Limit: 1,
  };
  console.log(request);
  console.log(process.env);
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
  console.log(event);
  var secretName = 'tmhweb/' + process.env.ENV + '/secrets',
    secret,
    decodedBinarySecret;
  var client = new SecretsManager({
    region: process.env.REGION,
  });
  try {
    const data = await client.getSecretValue({ SecretId: secretName });
    if ('SecretString' in data) {
      secret = JSON.parse(data.SecretString);
    } else {
      decodedBinarySecret = data.SecretBinary.toString('base64');
    }
    console.log('Loading Secret Done');
    if (event.userName == secret.adminUser) {
      console.log('Logged in as Admin - stop here');
      return event;
    } else {
      console.log('Not logged in as Admin - continuing');
    }
    console.log('Logged in');
    console.log({ event: event });
    var cognitoUser: any = await getCognitoUser(event);
    if (cognitoUser.email_verified == 'true') {
      const user = await getUser(cognitoUser.Username, event);
      console.log({ user: user });
      if (
        user == null ||
        (user != null &&
          (user.f1PersonId == null || user.f1HouseholdId == null))
      ) {
        console.log('Not sure if user is in f1');
        const people = await f1SearchPeople(cognitoUser.email);
        const f1PersonId = people.results.person[0].id;
        const f1HouseholdId = people.results.person[0]['@householdID'];
        console.log({
          cognitoUser: cognitoUser,
          f1UserId: f1PersonId,
          f1HouseholdId: f1HouseholdId,
        });

        console.log('Updating');
        if (user == null) {
          const createdUser = await createUser(
            {
              id: cognitoUser.Username,
              f1PersonId: f1PersonId,
              f1HouseholdId: f1HouseholdId,
              email: cognitoUser.email,
              phone_number: cognitoUser.phone_number,
            },
            event
          );
          console.log('User is in f1, created user in dynamo');
          console.log({ createdUser: createdUser });
        } else {
          const updatedUser = await updateUser(
            {
              id: cognitoUser.Username,
              f1PersonId: f1PersonId,
              f1HouseholdId: f1HouseholdId,
            },
            event
          );
          console.log('User is in f1, added info to dynamo');
          console.log({ updatedUser: updatedUser });
        }
      } else {
        console.log('User is in F1');
      }
    }
    console.log('DONE');
    return event;
  } catch (error) {
    console.log('DONE2');
    console.log({ ERROR: error });
    return event;
  }
};
