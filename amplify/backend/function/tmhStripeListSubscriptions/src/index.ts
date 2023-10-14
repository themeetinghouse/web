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
  try {
    const user = await TMHDB.getUser(event.identity.username);
    console.log({ user });
    let params: Stripe.SubscriptionListParams = {
      customer: user.stripeCustomerID,
      expand: ['data.plan.product', 'data.default_payment_method'],
    };
    if (event.arguments.starting_after != '')
      params = { ...params, starting_after: event.arguments.starting_after };
    if (user.stripeCustomerID) {
      const userSubscriptions = await TMHStripe.listSubscription(
        params,
        'card'
      );
      const subscriptions = userSubscriptions.data.map((subscription: any) => {
        console.log({ subscription });
        const amount = subscription?.items?.data?.[0]?.price?.unit_amount;
        const fund = subscription?.plan?.product?.name;
        const frequency = subscription?.plan?.interval;
        const frequency_interval = subscription?.plan?.interval_count;
        const startDate = subscription?.billing_cycle_anchor;
        const nextPayment = subscription?.current_period_end;
        const cardBrand = subscription?.default_payment_method
          ? subscription?.default_payment_method?.card?.brand
          : '';
        const cardLast4 = subscription?.default_payment_method
          ? subscription?.default_payment_method?.card?.last4
          : '';
        // add leading zero to month if less than 10
        const cardExpiry =
          subscription?.default_payment_method?.card?.exp_month < 10
            ? '0' +
              subscription?.default_payment_method?.card?.exp_month +
              '/' +
              subscription?.default_payment_method?.card?.exp_year
                ?.toString()
                ?.slice(2)
            : subscription?.default_payment_method?.card?.exp_month +
              '/' +
              subscription?.default_payment_method?.card?.exp_year
                ?.toString()
                ?.slice(2);
        const subObject = {
          id: subscription.id,
          unit_amount: amount / 100,
          name: fund,
          interval: frequency,
          interval_count: frequency_interval,
          isPaused: Boolean(subscription?.pause_collection),
          billing_cycle_anchor: startDate,
          current_period_end: nextPayment,
          cardBrand: cardBrand,
          cardLast4: cardLast4,
          cardExpiry: cardExpiry,
          status: subscription?.status,
          paymentID: subscription?.default_payment_method?.id,
        };
        console.log({ subObject });
        return subObject;
      });
      return { subscriptions, has_more: userSubscriptions.has_more };
    }
    console.log("User doesn't have a stripe customer ID");
    return {
      subscriptions: [],
      has_more: false,
    };
  } catch (error) {
    console.log({ error });
    return {
      subscriptions: [],
      has_more: false,
    };
  }
};
