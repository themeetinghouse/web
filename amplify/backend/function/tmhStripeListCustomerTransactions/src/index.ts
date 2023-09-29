/* Amplify Params - DO NOT EDIT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
import Stripe from 'stripe';
import TMHStripe from '../../themeetinghousetmhShared/lib/nodejs/TMHStripe';
import TMHDB from '../../themeetinghousetmhShared/lib/nodejs/TMHDB';
export const handler = async (event) => {
  console.log({ username: event.identity.username });
  const user = await TMHDB.getUser(event.identity.username);
  console.log({ user });
  const stripeCustomerID = user.stripeCustomerID;
  if (!stripeCustomerID) {
    return {
      transactions: [],
      error: 'No Stripe customer ID found.',
    };
  }
  try {
    const response = await TMHStripe.listCustomerTransactions(stripeCustomerID);
    console.log({ response });
    const transactions = response.data.map(
      (invoice: Stripe.Invoice & { charge: any }) => {
        console.log({ invoice });
        return {
          currency: invoice.currency.toUpperCase(),
          amount: invoice.charge.amount / 100,
          date: invoice.created,
          fund: {
            name: invoice.lines.data[0].description,
            id: invoice.lines.data[0].price.product,
          },
          paymentMethod: `${invoice.charge.payment_method_details.card.brand.toUpperCase()} (${
            invoice.charge.payment_method_details.card.last4
          })`,
          transactionNumber: invoice.charge.id,
        };
      }
    );
    console.log({ transactions });
    return { transactions };
  } catch (error) {
    console.error({ error });
    return {
      transactions: [],
      error: 'Failed to fetch transactions from Stripe.',
    };
  }
};
