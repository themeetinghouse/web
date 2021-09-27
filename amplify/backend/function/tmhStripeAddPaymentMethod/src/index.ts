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
  const idempotency = event.arguments.idempotency;
  const paymentId = event.arguments.id;

  const user = await TMHDB.getUser(event.identity.username);
  const setupIntent: Stripe.SetupIntentCreateParams = {
    confirm: true,
    customer: user.stripeCustomerID,
    payment_method: paymentId,
  };
  if (user.stripeCustomerID) {
    const setupIntentResult = await TMHStripe.createSetupIntent(
      setupIntent,
      idempotency
    );
    await TMHStripe.updateCustomer(
      user.stripeCustomerID,
      {
        invoice_settings: { default_payment_method: paymentId },
      },
      idempotency + '2'
    );
    console.log(setupIntentResult);
    return setupIntentResult;
  }
  const response = {
    statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  },
    body: JSON.stringify('Hello from Lambda!'),
  };
  return response;
};
