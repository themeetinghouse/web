import Stripe from 'stripe';
if (process.env.ENV == 'payments') var stripeSecret = 'abc';
else var stripeSecret = 'def';
export default class TMHStripe {
  static async createCustomer(
    customer: Stripe.CustomerCreateParams,
    idempotency: string
  ) {
    const stripe = new Stripe(stripeSecret, {
      apiVersion: '2020-08-27',
    });
    const customerResult = await stripe.customers.create(customer, {
      idempotencyKey: idempotency + 'CC',
    });
    return customerResult;
  }
  static async updateCustomer(
    stripeCustomerID: string,
    customer: Stripe.CustomerUpdateParams,
    idempotency: string
  ) {
    const stripe = new Stripe(stripeSecret, {
      apiVersion: '2020-08-27',
    });
    const customerResult = await stripe.customers.update(
      stripeCustomerID,
      customer,
      {
        idempotencyKey: idempotency + 'CC',
      }
    );
    return customerResult;
  }

  static async createPaymentMethod(
    paymentMethod: Stripe.PaymentMethodCreateParams,
    idempotency: string
  ): Promise<Stripe.Response<Stripe.PaymentMethod>> {
    const stripe = new Stripe(stripeSecret, {
      apiVersion: '2020-08-27',
    });
    const paymentMethodResult = await stripe.paymentMethods.create(
      paymentMethod,
      {
        idempotencyKey: idempotency + 'CC',
      }
    );
    return paymentMethodResult;
  }
  static async listPaymentMethods(
    stripeCustomerID: string,
    type: Stripe.PaymentMethodListParams.Type
  ): Promise<Stripe.Response<Stripe.ApiList<Stripe.PaymentMethod>>> {
    const stripe = new Stripe(stripeSecret, {
      apiVersion: '2020-08-27',
    });
    const customerResult = await stripe.paymentMethods.list({
      customer: stripeCustomerID,
      type: type,
    });
    return customerResult;
  }

  static async createSubscription(
    subscription: Stripe.SubscriptionCreateParams,
    idempotency: string
  ): Promise<Stripe.Response<Stripe.Subscription>> {
    const stripe = new Stripe(stripeSecret, {
      apiVersion: '2020-08-27',
    });
    const subscriptionResult = await stripe.subscriptions.create(subscription, {
      idempotencyKey: idempotency + 'CC',
    });
    return subscriptionResult;
  }

  static async deleteSubscription(
    subscriptionId: string,
    idempotency: string
  ): Promise<Stripe.Response<Stripe.Subscription>> {
    const stripe = new Stripe(stripeSecret, {
      apiVersion: '2020-08-27',
    });
    const subscriptionResult = await stripe.subscriptions.del(subscriptionId, {
      idempotencyKey: idempotency + 'CC',
    });
    return subscriptionResult;
  }
  static async listSubscription(
    subscription: Stripe.SubscriptionListParams,
    idempotency: string
  ): Promise<Stripe.Response<Stripe.ApiList<Stripe.Subscription>>> {
    const stripe = new Stripe(stripeSecret, {
      apiVersion: '2020-08-27',
    });
    const subscriptionResult = await stripe.subscriptions.list(subscription, {
      idempotencyKey: idempotency + 'CC',
    });
    return subscriptionResult;
  }
}
