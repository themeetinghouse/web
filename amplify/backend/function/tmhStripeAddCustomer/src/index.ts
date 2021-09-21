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
  console.log({ userInfo: userInfo });

  const customer: Stripe.CustomerCreateParams = {
    name: userInfo.given_name + ' ' + userInfo.family_name,
    phone: userInfo.phone,
    address: userInfo.billingAddress,
    description: 'This is a description',
    email: userInfo.email,
    metadata: {
      userID: event.identity.username,
    },
  };

  console.log({ customer: customer });
  var customerResult;
  if (userInfo.stripeCustomerID == null) {
    customerResult = await TMHStripe.createCustomer(customer, idempotency);
    const updateUserA = await TMHDB.updateUser(
      userID,
      'stripeCustomerID',
      customerResult.id
    );
  } else {
    console.log(userInfo.stripeCustomerID);
    customerResult = await TMHStripe.updateCustomer(
      userInfo.stripeCustomerID,
      customer,
      idempotency
    );
  }
  console.log({ customerResult: customerResult });
  return customerResult;
};
