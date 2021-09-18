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
      //  Uncomment below to enable CORS requests
      //  headers: {
      //      "Access-Control-Allow-Origin": "*",
      //      "Access-Control-Allow-Headers": "*"
      //  },

      body: JSON.stringify(segments.SegmentsResponse),
    };
    return response;
  } catch (error: any) {
    console.log({ ERROR: error });
    return { statusCode: '402', error: { message: error.message } };
  }
};
