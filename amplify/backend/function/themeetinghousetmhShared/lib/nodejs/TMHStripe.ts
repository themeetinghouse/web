import Stripe from 'stripe';
export default class TMHStripe {
  static async getSecret(name: string) {
    try {
      var AWS = require('aws-sdk'),
        region = 'us-east-1',
        secretName = 'tmhweb/' + process.env.ENV + '/secrets',
        secret,
        decodedBinarySecret;

      // Create a Secrets Manager client
      var client = new AWS.SecretsManager({
        region: region,
      });
      const data = await client
        .getSecretValue({ SecretId: secretName })
        .promise();

      if ('SecretString' in data) {
        secret = JSON.parse(data.SecretString);
      } else {
        let buff = new Buffer(data.SecretBinary, 'base64');
        decodedBinarySecret = buff.toString('ascii');
      }
      console.log('Loading Secret Done');

      return secret[name];
    } catch (e) {
      console.log({ error: e });
      throw 'Secret not loaded';
    }
  }
  static async createCustomer(
    customer: Stripe.CustomerCreateParams,
    idempotency: string
  ): Promise<Stripe.Response<Stripe.Customer>> {
    const stripe = new Stripe(await this.getSecret('stripeSecret'), {
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
  ): Promise<Stripe.Response<Stripe.Customer>> {
    const stripe = new Stripe(await this.getSecret('stripeSecret'), {
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

  static async createSetupIntent(
    setupIntent: Stripe.SetupIntentCreateParams,
    idempotency: string
  ): Promise<Stripe.Response<Stripe.SetupIntent>> {
    const stripe = new Stripe(await this.getSecret('stripeSecret'), {
      apiVersion: '2020-08-27',
    });
    const paymentMethodResult = await stripe.setupIntents.create(setupIntent, {
      idempotencyKey: idempotency + 'CC',
    });
    return paymentMethodResult;
  }
  static async createPaymentMethod(
    paymentMethod: Stripe.PaymentMethodCreateParams,
    idempotency: string
  ): Promise<Stripe.Response<Stripe.PaymentMethod>> {
    const stripe = new Stripe(await this.getSecret('stripeSecret'), {
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
    const stripe = new Stripe(await this.getSecret('stripeSecret'), {
      apiVersion: '2020-08-27',
    });
    const customerResult = await stripe.paymentMethods.list({
      customer: stripeCustomerID,
      type: type,
    });
    return customerResult;
  }
  static async createInvoiceItem(
    payment: Stripe.InvoiceItemCreateParams,
    idempotency: string
  ): Promise<Stripe.Response<Stripe.InvoiceItem>> {
    const stripe = new Stripe(await this.getSecret('stripeSecret'), {
      apiVersion: '2020-08-27',
    });
    const subscriptionResult = await stripe.invoiceItems.create(payment, {
      idempotencyKey: idempotency + 'CC',
    });
    return subscriptionResult;
  }
  static async createInvoice(
    payment: Stripe.InvoiceCreateParams,
    idempotency: string
  ): Promise<Stripe.Response<Stripe.Invoice>> {
    const stripe = new Stripe(await this.getSecret('stripeSecret'), {
      apiVersion: '2020-08-27',
    });
    const subscriptionResult = await stripe.invoices.create(payment, {
      idempotencyKey: idempotency + 'CC',
    });
    return subscriptionResult;
  }
  static async createPayment(
    payment: Stripe.PaymentIntentCreateParams,
    idempotency: string
  ): Promise<Stripe.Response<Stripe.PaymentIntent>> {
    const stripe = new Stripe(await this.getSecret('stripeSecret'), {
      apiVersion: '2020-08-27',
    });
    const subscriptionResult = await stripe.paymentIntents.create(payment, {
      idempotencyKey: idempotency + 'CC',
    });
    return subscriptionResult;
  }
  static async createSubscription(
    subscription: Stripe.SubscriptionCreateParams,
    idempotency: string
  ): Promise<Stripe.Response<Stripe.Subscription>> {
    const stripe = new Stripe(await this.getSecret('stripeSecret'), {
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
    const stripe = new Stripe(await this.getSecret('stripeSecret'), {
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
    const stripe = new Stripe(await this.getSecret('stripeSecret'), {
      apiVersion: '2020-08-27',
    });
    const subscriptionResult = await stripe.subscriptions.list(subscription, {
      idempotencyKey: idempotency + 'CC',
    });
    return subscriptionResult;
  }
}
