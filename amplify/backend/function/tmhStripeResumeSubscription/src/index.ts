/* Amplify Params - DO NOT EDIT
	API_THEMEETINGHOUSE_GRAPHQLAPIENDPOINTOUTPUT
	API_THEMEETINGHOUSE_GRAPHQLAPIIDOUTPUT
	API_THEMEETINGHOUSE_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
import TMHDB from '../../themeetinghousetmhShared/lib/nodejs/TMHDB';
import TMHStripe from '../../themeetinghousetmhShared/lib/nodejs/TMHStripe';

export const handler = async (event) => {
  try {
    const subscriptionID = event.arguments.subscriptionID;
    const user = await TMHDB.getUser(event.identity.username);
    console.log({ subscriptionID });
    if (!subscriptionID) {
      console.error('Subscription ID not provided');
      return { message: 'FAILED' };
    }
    const subscription = await TMHStripe.getSubscription(subscriptionID);
    if (subscription.customer != user.stripeCustomerID) {
      console.error(
        'Subscription does not belong to user',
        subscriptionID,
        user.stripeCustomerID
      );
      return { message: 'FAILED' };
    }
    const subscriptionResult = await TMHStripe.resumeSubscription(
      subscriptionID
    );
    console.log({ subscriptionResult });
    if (!subscriptionResult.pause_collection) {
      return { message: 'SUCCESS' };
    }
    return { message: 'FAILED' };
  } catch (error) {
    console.error({ error });
    return { message: 'FAILED' };
  }
};
