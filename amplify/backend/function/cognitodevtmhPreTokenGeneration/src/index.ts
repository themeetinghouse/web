const { DynamoDB } = require('@aws-sdk/client-dynamodb');

export const handler = async (event) => {
  var results3 = [];
  try {
    var ddb = new DynamoDB({
      apiVersion: '2012-08-10',
      region: process.env.REGION,
    });

    var params = {
      ExpressionAttributeValues: {
        ':username': { S: event.userName },
      },
      KeyConditionExpression: 'id = :username',
      ProjectionExpression: 'id, f1PersonId',
      TableName:
        'TMHUser-' +
        process.env.API_THEMEETINGHOUSE_GRAPHQLAPIIDOUTPUT +
        '-' +
        process.env.ENV,
    };
    const result = await ddb.query(params);
    console.log(result);
    if (result.Items.length > 0) {
      var params2 = {
        ExpressionAttributeValues: {
          ':personId': { S: result.Items[0].f1PersonId.S },
        },
        KeyConditionExpression: 'personId = :personId',
        ProjectionExpression: 'id, personId, activity, #t',
        ExpressionAttributeNames: { '#t': 'type' },
        IndexName: 'assignmentByPersonId',
        TableName:
          'F1Assignments-' +
          process.env.API_THEMEETINGHOUSE_GRAPHQLAPIIDOUTPUT +
          '-' +
          process.env.ENV,
      };
      const result2 = await ddb.query(params2);
      results3 = result2.Items.map((e) => {
        return e.type.M.name.S;
      });
    }
    //const user = await TMHDB.getUser(event.username);
    //console.log(user);
    //console.log(user.f1PersonId);
  } catch (e) {
    console.log(e);
  }
  event.response = {
    claimsOverrideDetails: {
      groupOverrideDetails: {
        groupsToOverride:
          event.request.groupConfiguration.groupsToOverride.concat(...results3),
      },
    },
  };
  return event;
};
