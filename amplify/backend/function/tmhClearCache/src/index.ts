/* Amplify Params - DO NOT EDIT
	ENV
	HOSTING_S3ANDCLOUDFRONT_HOSTINGBUCKETNAME
	REGION
Amplify Params - DO NOT EDIT */

import {
  CloudFrontClient,
  CreateInvalidationCommand,
} from '@aws-sdk/client-cloudfront';
import { deleteRecursive } from './deleteRecursive';

const client = new CloudFrontClient({
  region: process.env.REGION,
});

export const handler = async (event) => {
  try {
    console.log(event);
    await deleteRecursive(
      process.env.HOSTING_S3ANDCLOUDFRONT_HOSTINGBUCKETNAME,
      'cached'
    );

    var params = {
      DistributionId: process.env.DISTRIBUTION_ID /* required */,
      InvalidationBatch: {
        /* required */ CallerReference: Date.now().toString() /* required */,
        Paths: {
          /* required */ Quantity: 1 /* required */,
          Items: [
            '/*',
            /* more items */
          ],
        },
      },
    };
    const command = new CreateInvalidationCommand(params);
    const createInvalidationResponse = await client.send(command);
    console.log({ createInvalidationResponse });
    const response = {
      statusCode: 200,
    };
    return response;
  } catch (error: any) {
    console.log({ ERROR: error });
    return { statusCode: '402', error: { message: error.message } };
  }
};
