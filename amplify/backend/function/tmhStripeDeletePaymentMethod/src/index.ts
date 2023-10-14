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
  const paymentMethodId = event.arguments.paymentMethodId;
  console.log({ paymentMethodId });

  try {
    const user = await TMHDB.getUser(event.identity.username);
    if (user.stripeCustomerID) {
      if (
        (await TMHStripe.getPaymentMethod(paymentMethodId)).customer ==
        user.stripeCustomerID
      ) {
        const result = await TMHStripe.detatchPaymentMethod(paymentMethodId);
        return true;
      }
      return false;
    }
    return false;
  } catch (error) {
    console.log({ error });
    return false;
  }
};
