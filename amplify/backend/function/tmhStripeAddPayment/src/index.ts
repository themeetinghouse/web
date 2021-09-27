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
  const invoiceItem: Stripe.InvoiceItemCreateParams = {
    customer: user.stripeCustomerID,
    price_data: {
      currency: 'cad',
      product: fund,
      unit_amount: amount,
      tax_behavior: 'inclusive',
    },
    quantity: 1,
    metadata: { WebDonation: 'true' },
  };
  const invoice: Stripe.InvoiceCreateParams = {
    customer: user.stripeCustomerID,
    auto_advance: true,
  };
  if (user.stripeCustomerID) {
    await TMHStripe.createInvoiceItem(invoiceItem, idempotency);
    return await TMHStripe.createInvoice(invoice, idempotency + '2');
  }
  return null;
};
