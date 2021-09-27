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
  const user = await TMHDB.getUser(event.identity.username);
  const payment: Stripe.PaymentIntentCreateParams = {
    customer: user.stripeCustomerID,
    amount: amount,
    currency: 'cad',
    confirm: true,
    description: fund,
    metadata: { WebDonation: 'true' },
    statement_descriptor: 'TMH Web Donation',
  };
  if (user.stripeCustomerID)
    return TMHStripe.createPayment(payment, idempotency);

  return null;
};
