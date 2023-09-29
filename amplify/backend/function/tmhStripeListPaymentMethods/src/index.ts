/* Amplify Params - DO NOT EDIT
	API_THEMEETINGHOUSE_GRAPHQLAPIENDPOINTOUTPUT
	API_THEMEETINGHOUSE_GRAPHQLAPIIDOUTPUT
	API_THEMEETINGHOUSE_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

import Stripe from 'stripe';
import TMHDB from '../../themeetinghousetmhShared/lib/nodejs/TMHDB';
import TMHStripe from '../../themeetinghousetmhShared/lib/nodejs/TMHStripe';
export const handler = async (event) => {
  // TODO implement

  const user = await TMHDB.getUser(event.identity.username);
  console.log({ userExists: user });
  if (user.stripeCustomerID) {
    const customerResult = await TMHStripe.listPaymentMethods(
      user.stripeCustomerID,
      'card'
    );
    console.log({ customerResult });
    return customerResult;
  } else {
    return null;
  }
};
