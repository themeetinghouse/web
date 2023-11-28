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
  const userID = event.identity.username;
  const userInfo = await TMHDB.getUser(userID);
  console.log({ userInfo });
  console.log({ userID });
  const customer: Stripe.CustomerCreateParams = {
    name: userInfo.given_name + ' ' + userInfo.family_name,
    phone: userInfo.phone,
    address: userInfo.billingAddress,
    description: 'Customer was created on the TMH Website',
    email: userInfo.email,
    metadata: {
      userID: event.identity.username,
    },
  };
  console.log({ customer });
  let customerResult;
  let message = '';
  if (!userInfo.stripeCustomerID) {
    customerResult = await TMHStripe.createCustomer(customer, idempotency);
    const updateUserA = await TMHDB.updateUser(
      userID,
      'stripeCustomerID',
      customerResult.id
    );
    message = 'Customer created and user updated';
    console.log({ updateUserA });
  } else {
    console.log({ stripeCustomerID: userInfo.stripeCustomerID });
    message =
      'Customer already created. Updating with latest billing information.';
    customerResult = await TMHStripe.updateCustomer(
      userInfo.stripeCustomerID,
      customer,
      idempotency
    );
  }
  console.log({ customerResult });
  return {
    message,
  };
};
