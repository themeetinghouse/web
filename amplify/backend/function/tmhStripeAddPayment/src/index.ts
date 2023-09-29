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
  const paymentMethodId = event.arguments.paymentMethodId;
  const user = await TMHDB.getUser(event.identity.username);
  console.log({ user });
  const inDollars = amount * 100;
  const invoiceItem: Stripe.InvoiceItemCreateParams = {
    customer: user.stripeCustomerID,
    price_data: {
      currency: 'cad',
      product: fund,
      unit_amount: inDollars,
      tax_behavior: 'inclusive',
    },
    quantity: 1,
    metadata: { WebDonation: 'true' },
  };

  const invoice: Stripe.InvoiceCreateParams = {
    customer: user.stripeCustomerID,
    auto_advance: true,
  };
  if (paymentMethodId) {
    invoice.default_payment_method = paymentMethodId;
  }
  console.log({ invoice }, { idempotency });
  if (user.stripeCustomerID) {
    try {
      const createInvoiceItemResult = await TMHStripe.createInvoiceItem(
        invoiceItem,
        idempotency
      );
      console.log({ createInvoiceItemResult });
      const createInvoiceResult = await TMHStripe.createInvoice(
        invoice,
        idempotency + '2'
      );
      console.log({ createInvoiceResult });
      const finalizedInvoice = await TMHStripe.finalizeInvoice(
        createInvoiceResult.id,
        idempotency + '3'
      );
      console.log({ finalizedInvoice });
      const paidInvoice = await TMHStripe.payInvoice(
        finalizedInvoice.id,
        idempotency + '4'
      );
      console.log({ paidInvoice });
      const userTotal = user.total ? user.total : 0;
      const updatedUser = await TMHDB.updateUser(
        event.identity.username,
        'total',
        userTotal + amount
      );
      console.log({ updatedUser });
      return { message: 'SUCCESS' };
    } catch (error) {
      console.log({ error });
      return { message: 'FAILED' };
    }
  } else {
    return { message: 'No stripe customer ID' };
  }
};
