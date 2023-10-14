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
    console.log({ user });
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
    const subscriptionResult = await TMHStripe.pauseSubscription(
      subscriptionID
    );
    console.log({ subscriptionResult });
    if (subscriptionResult.pause_collection) {
      return { message: 'SUCCESS' };
    }
    return { message: 'FAILED' };
  } catch (error) {
    console.error({ error });
    return { message: 'FAILED' };
  }
};
