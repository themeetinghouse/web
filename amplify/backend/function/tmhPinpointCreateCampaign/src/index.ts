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
      WriteCampaignRequest: {
        /* required */ Name: event.arguments.name,
        Description: event.arguments.description,
        SegmentId: event.arguments.segmentId,
        SegmentVersion: event.arguments.segmentVersion,
        IsPaused: false,
        MessageConfiguration: {
          APNSMessage: event.arguments.appleMessage,
          GCMMessage: event.arguments.androidMessage,
        },
        Schedule: event.arguments.schedule,
      },
    };
    const campaign = await pinpoint.createCampaign(params).promise();
    console.log(campaign);

    return true;
  } catch (error: any) {
    console.log({ ERROR: error });
    return { statusCode: '402', error: { message: error.message } };
  }
};
