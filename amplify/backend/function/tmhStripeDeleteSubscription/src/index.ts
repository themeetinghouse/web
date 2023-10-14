/* Amplify Params - DO NOT EDIT
	API_THEMEETINGHOUSE_GRAPHQLAPIENDPOINTOUTPUT
	API_THEMEETINGHOUSE_GRAPHQLAPIIDOUTPUT
	API_THEMEETINGHOUSE_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

import TMHDB from '../../themeetinghousetmhShared/lib/nodejs/TMHDB';
import TMHStripe from '../../themeetinghousetmhShared/lib/nodejs/TMHStripe';
export const handler = async (event) => {
  // TODO implement
  const subscriptionId = event.arguments.subscriptionId;
  try {
    const user = await TMHDB.getUser(event.identity.username);
    if (!user.stripeCustomerID) return { message: 'FAILED' };
    if (
      (await TMHStripe.getSubscription(subscriptionId)).customer ==
      user.stripeCustomerID
    ) {
      const deleteSub = await TMHStripe.deleteSubscription(
        subscriptionId,
        'card'
      );
      console.log({ deleteSub });
      return { message: 'SUCCESS' };
    }
    return { message: 'FAILED' };
  } catch (error) {
    console.log({ error });
    return { message: 'FAILED' };
  }
};
