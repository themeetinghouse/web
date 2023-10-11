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
  // validate all fields here just in case! return error if any are missing
  const idempotency = event.arguments.idempotency;
  const amount = event.arguments.amount;
  const fund = event.arguments.fund;
  const paymentMethodId = event.arguments.paymentMethodId;
  const user = await TMHDB.getUser(event.identity.username);
  // validate that amount is a number
  // validate that fund is a string
  // validate that paymentMethodId is a string
  // validate that user is an object
  // validate that user.stripeCustomerID is a string
  // validate that idempotency is a string
  // validate that amount is greater than 0
  // validate that fund is a valid fund
  // validate that paymentMethodId is a valid payment method
  // validate that user.stripeCustomerID is a valid customer
  // validate that idempotency is unique
  // validate that the user has a stripe customer id
  // validate that the user has a valid payment method
  const isAmountValid = RegExp('^[0-9]*$').test(amount);
  if (!isAmountValid) {
    return { message: 'Amount is not a valid number.' };
  }

  console.log({ paymentMethodId });
  // get customer payment methods
  // if the payment method belongs to the customer
  // then we will proceed.
  // otherwise we will decline the request and return a message with the error.
  const paymentMethods = await TMHStripe.listPaymentMethods(
    user.stripeCustomerID,
    'card'
  );
  console.log({ paymentMethods });
  console.log({ paymentMethods2: paymentMethods.data });
  const paymentMethod = paymentMethods.data.find(
    (paymentMethod) => paymentMethod.id == paymentMethodId
  );
  console.log({ paymentMethod });
  if (!paymentMethod) {
    return {
      message: `Payment method ${paymentMethodId} does not belong to customer ${user.stripeCustomerID}.`,
    };
  }
  console.log({ user });
  const inDollars = amount * 100;
  const invoiceItem: Stripe.InvoiceItemCreateParams = {
    customer: user.stripeCustomerID,
    price_data: {
      currency: 'cad',
      product: fund,
      unit_amount: parseFloat(inDollars.toString()),
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
      let sum =
        parseFloat(userTotal.toString()) + parseFloat(amount.toString());
      const updatedUser = await TMHDB.updateUser(
        event.identity.username,
        'total',
        sum
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
