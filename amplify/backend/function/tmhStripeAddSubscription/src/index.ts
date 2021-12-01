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
  const amount = event.arguments.amount;
  const fund = event.arguments.fund;
  const frequency = event.arguments.frequency;
  const user = await TMHDB.getUser(event.identity.username);
  let recurring = null;
  if (frequency == 'Every week') recurring = { interval: 'week' };
  else if (frequency == 'Every 2 weeks')
    recurring = { interval: 'week', interval_count: 2 };
  else if (frequency == 'Every month') recurring = { interval: 'month' };
  else throw 'No Interval set';
  //else if ('1st & 15th monthly') recurring = { interval: 'week' };
  //else recurring = { interval: 'week' };
  const subscription: Stripe.SubscriptionCreateParams = {
    customer: user.stripeCustomerID,
    items: [
      {
        price_data: {
          currency: 'cad',
          product: fund,
          recurring: recurring,
          unit_amount: amount,
          tax_behavior: 'inclusive',
        },
        metadata: { WebDonation: 'true' },
        quantity: 1,
      },
    ],
  };
  if (user.stripeCustomerID)
    return TMHStripe.createSubscription(subscription, idempotency);

  return null;
};
