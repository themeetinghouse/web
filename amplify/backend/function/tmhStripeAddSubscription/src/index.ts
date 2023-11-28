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
  const frequency = event.arguments.frequency;
  const paymentMethodId = event.arguments.paymentMethodId;
  let startDate = event.arguments.startDate;
  console.log({ startDate });
  console.log({ amount, fund, frequency, paymentMethodId, startDate });
  if (!amount || !fund || !frequency)
    return { message: 'Unable to validate donation details.' };
  try {
    const user = await TMHDB.getUser(event.identity.username);
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

    const paymentMethods = await TMHStripe.listPaymentMethods(
      user.stripeCustomerID,
      'card'
    );
    console.log({ paymentMethods });
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
    if (!user.stripeCustomerID) {
      return { message: `Unable to determine user's Stripe customer id.` };
    }
    let recurring = null;
    if (frequency == 'Every week') recurring = { interval: 'week' };
    else if (frequency == 'Every 2 weeks')
      recurring = { interval: 'week', interval_count: 2 };
    else recurring = { interval: 'month' };
    //else if ('1st & 15th monthly') recurring = { interval: 'week' };
    //else recurring = { interval: 'week' };
    const inCents = amount * 100;
    console.log({ inCents });
    const subscription: Stripe.SubscriptionCreateParams = {
      customer: user.stripeCustomerID,
      proration_behavior: 'none',
      items: [
        {
          price_data: {
            currency: 'cad',
            product: fund,
            recurring: recurring,
            unit_amount: parseFloat(inCents.toString()),
            tax_behavior: 'inclusive',
          },

          metadata: { WebDonation: 'true' },
          quantity: 1,
        },
      ],
    };
    const oneHour = 3600;
    const oneDay = 86400;
    const oneWeek = 604800;
    const twoWeeks = 1209600;
    const oneMonth = 2592000;
    if (startDate) {
      const currentTime = Math.round(Date.now() / 1000);
      if (startDate < currentTime) {
        // if it is in the past, fix drift
        // subscription.billing_cycle_anchor = Math.round(currentTime + 180);
        // do not set billing_cycle_anchor
      } else if (startDate - currentTime < 86400) {
        // if it is today, apply a 2 minute forward drift
        // subscription.billing_cycle_anchor = Math.round(currentTime + 180);
        // do not set billing_cycle_anchor
      } else {
        if (frequency === 'Every week' && startDate - currentTime > oneWeek) {
          subscription.proration_behavior = 'create_prorations';
          subscription.trial_end = Math.round(startDate);
          subscription.billing_cycle_anchor = Math.round(startDate);
        } else if (
          frequency === 'Every 2 weeks' &&
          startDate - currentTime > twoWeeks
        ) {
          subscription.proration_behavior = 'create_prorations';
          subscription.trial_end = Math.round(startDate);
          subscription.billing_cycle_anchor = Math.round(startDate);
        } else if (
          frequency === 'Every month' &&
          startDate - currentTime > oneMonth
        ) {
          subscription.proration_behavior = 'create_prorations';
          subscription.trial_end = Math.round(startDate + 60);
          subscription.billing_cycle_anchor = Math.round(startDate + 60);
        } else {
          subscription.billing_cycle_anchor = Math.round(startDate + 60);
        }
      }
    } else {
      // if no start date, set to 2 minutes in the future
      // subscription.billing_cycle_anchor = Math.round(Date.now() / 1000 + 180);
    }
    if (paymentMethodId) subscription.default_payment_method = paymentMethodId;
    try {
      const newSub = await TMHStripe.createSubscription(
        subscription,
        idempotency
      );

      console.log({ newSub });
      return { message: 'SUCCESS' };
    } catch (err) {
      console.log({ err });
      let message = '';
      if (err instanceof Stripe.errors.StripeError) {
        switch (err.type) {
          case 'StripeCardError':
            message = `A payment error occurred: ${err.message}`;
            break;
          case 'StripeInvalidRequestError':
            message = 'An invalid request occurred.';
            break;
          default:
            message = 'Another problem occurred, maybe unrelated to Stripe.';
            break;
        }
        return { message };
      }
      return { message: 'FAILED' };
    }
  } catch (error) {
    console.log(error);
    return { message: 'FAILED' };
  }
};
