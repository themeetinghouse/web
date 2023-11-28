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
  let message = '';
  console.log({ setupIntent });
  if (user.stripeCustomerID) {
    try {
      const setupIntentResult = await TMHStripe.createSetupIntent(
        setupIntent,
        idempotency
      );
      console.log({ setupIntentResult });
      await TMHStripe.updateCustomer(
        user.stripeCustomerID,
        {
          invoice_settings: { default_payment_method: paymentId },
        },
        idempotency + '2'
      );
      console.log({ setupIntentResult });
      if (setupIntentResult.status === 'succeeded') {
        message = 'Payment method added successfully';
      } else {
        message = 'Error adding payment method';
      }
    } catch (error) {
      console.log(error);
      message = 'Error adding payment method';
    } finally {
      return message;
    }
  } else {
    console.log('No customer ID found');
    message = 'Error no customer ID found';
  }
  return message;
};
