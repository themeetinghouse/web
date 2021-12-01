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
  const idempotency = event.arguments.idempotency;

  const user = await TMHDB.getUser(event.identity.username);
  let params: Stripe.SubscriptionListParams = {
    customer: user.stripeCustomerID,
  };
  if (event.arguments.starting_after != '')
    params = { ...params, starting_after: event.arguments.starting_after };
  if (user.stripeCustomerID)
    return await TMHStripe.listSubscription(params, 'card');

  return null;
};
