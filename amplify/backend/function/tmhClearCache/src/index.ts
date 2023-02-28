/* Amplify Params - DO NOT EDIT
	ENV
	HOSTING_S3ANDCLOUDFRONT_HOSTINGBUCKETNAME
	REGION
Amplify Params - DO NOT EDIT */
const AWS = require('aws-sdk');
const S3 = new AWS.S3();
const cloudfront = new AWS.CloudFront();
import { deleteRecursive } from './deleteRecursive';
export const handler = async (event) => {
  try {
    console.log(event);
    await deleteRecursive(
      S3,
      process.env.HOSTING_S3ANDCLOUDFRONT_HOSTINGBUCKETNAME,
      'cached'
    );

    var params = {
      DistributionId: process.env.DISTRIBUTION_ID /* required */,
      InvalidationBatch: {
        /* required */ CallerReference: Date.now().toString() /* required */,
        Paths: {
          /* required */ Quantity: '1' /* required */,
          Items: [
            '/*',
            /* more items */
          ],
        },
      },
    };

    const z = await cloudfront.createInvalidation(params).promise();
    console.log(z);
    //   cloudfront.createInvalidation(params, function(err, data) {
    //     if (err) console.log(err, err.stack); // an error occurred
    //     else     console.log(data);           // successful response
    //   });

    const response = {
      statusCode: 200,
    };
    return response;
  } catch (error: any) {
    console.log({ ERROR: error });
    return { statusCode: '402', error: { message: error.message } };
  }
};
