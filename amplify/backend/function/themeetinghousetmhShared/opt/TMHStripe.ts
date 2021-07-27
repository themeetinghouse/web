export default class TMHStripe {
  static async updateCustomer(
    stripeCustomerID: string,
    stripeSecret: string,
    customer: any,
    idempotency: string
  ) {
    const stripe = require('stripe')(stripeSecret, {
      maxNetworkRetries: 5,
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
  static async createCustomer(
    stripeSecret: string,
    customer: any,
    idempotency: string
  ) {
    const stripe = require('stripe')(stripeSecret, {
      maxNetworkRetries: 5,
    });
    const customerResult = await stripe.customers.create(customer, {
      idempotencyKey: idempotency + 'CC',
    });
    return customerResult;
  }
  static async listPaymentMethods(
    stripeSecret: string,
    stripeCustomerID: string,
    type: string
  ) {
    const stripe = require('stripe')(stripeSecret, {
      maxNetworkRetries: 5,
    });
    const customerResult = await stripe.paymentMethods.list({
      customer: stripeCustomerID,
      type: type,
    });
    return customerResult;
  }
}
