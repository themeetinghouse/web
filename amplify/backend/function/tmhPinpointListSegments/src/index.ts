/* Amplify Params - DO NOT EDIT
	ANALYTICS_THEMEETINGHOUSE_ID
	ANALYTICS_THEMEETINGHOUSE_REGION
	ENV
	REGION
Amplify Params - DO NOT EDIT */
var AWS = require('aws-sdk');
export const handler = async (event) => {
  try {
    const pinpoint = new AWS.Pinpoint({ apiVersion: '2016-12-01' });
    var params = {
      ApplicationId: process.env.ANALYTICS_THEMEETINGHOUSE_ID /* required */,
      PageSize: '20',
      Token: event.arguments.nextToken,
    };

    const segments = await pinpoint.getSegments(params).promise();
    console.log(segments);
    console.log(segments.SegmentsResponse.Item);
    const response = {
      statusCode: 200,
      Item: segments.SegmentsResponse.Item,
      NextToken: segments.SegmentsResponse.NextToken,
    };
    return response;
  } catch (error: any) {
    console.log({ ERROR: error });
    return { statusCode: '402', error: { message: error.message } };
  }
};
