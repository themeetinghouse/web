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
  const amount = event.arguments.amount;
  const fund = event.arguments.fund;
  const paymentMethodId = event.arguments.paymentMethodId;
  const user = await TMHDB.getUser(event.identity.username);
  console.log({ amount, fund, paymentMethodId });
  const isAmountValid =
    amount &&
    RegExp('^[0-9]*.?[0-9]*$').test(amount) &&
    typeof amount === 'number' &&
    amount > 0 &&
    amount <= 999999;
  if (!isAmountValid) {
    console.log('Amount invalid', amount);
    return { message: 'Amount is not a valid number.' };
  }
  const isFundValid = fund && typeof fund === 'string' && fund.length > 0;
  if (!isFundValid) {
    console.log('Fund invalid', fund);
    return { message: 'Fund is not a valid string.' };
  }
  const isPaymentMethodIdValid =
    paymentMethodId &&
    typeof paymentMethodId === 'string' &&
    paymentMethodId.length > 0;
  if (!isPaymentMethodIdValid) {
    console.log('Payment method invalid', paymentMethodId);
    return { message: 'Payment method is not a valid string.' };
  }
  const isUserValid =
    user &&
    typeof user === 'object' &&
    user.stripeCustomerID &&
    typeof user.stripeCustomerID === 'string' &&
    user.stripeCustomerID.length > 0;
  if (!isUserValid) {
    console.log('User invalid', user);
    return { message: 'User is not a valid object.' };
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
      return { message: 'SUCCESS' };
    } catch (error) {
      console.log({ error });
      return { message: 'FAILED' };
    }
  } else {
    return { message: 'No stripe customer ID' };
  }
};
