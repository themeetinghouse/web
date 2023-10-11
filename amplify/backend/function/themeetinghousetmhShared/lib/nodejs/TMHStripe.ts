import { set } from 'date-fns';
import Stripe from 'stripe';
export default class TMHStripe {
  static async getSecret(name: string) {
    try {
      console.log('Loading Secret ', name);
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
      console.log('Loading Secret Done!');
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

  static async listCustomerTransactions(
    stripeCustomerID: string
  ): Promise<Stripe.Response<Stripe.ApiList<Stripe.Invoice>>> {
    const stripe = new Stripe(await this.getSecret('stripeSecret'), {
      apiVersion: '2020-08-27',
    });
    const customerInvoices = await stripe.invoices.list({
      customer: stripeCustomerID,
      expand: ['data.charge'],
      status: 'paid',
      limit: 100,
    });
    return customerInvoices;
  }

  static async setCustomerDefaultPaymentMethod(
    stripeCustomerID: string,
    paymentMethodId: string,
    idempotency: string
  ): Promise<Stripe.Response<Stripe.Customer>> {
    const stripe = new Stripe(await this.getSecret('stripeSecret'), {
      apiVersion: '2020-08-27',
    });
    console.log({ stripeCustomerID, paymentMethodId });
    const customerResult = await stripe.customers.update(stripeCustomerID, {
      invoice_settings: { default_payment_method: paymentMethodId },
    });
    return customerResult;
  }

  static async finalizeInvoice(
    invoiceId: string,
    idempotency: string
  ): Promise<Stripe.Response<Stripe.Invoice>> {
    const stripe = new Stripe(await this.getSecret('stripeSecret'), {
      apiVersion: '2020-08-27',
    });
    const invoiceResult = await stripe.invoices.finalizeInvoice(invoiceId, {
      idempotencyKey: idempotency + 'CC',
    });
    console.log({ invoiceResult });
    return invoiceResult;
  }
  static async payInvoice(
    invoiceId: string,
    idempotency: string
  ): Promise<Stripe.Response<Stripe.Invoice>> {
    const stripe = new Stripe(await this.getSecret('stripeSecret'), {
      apiVersion: '2020-08-27',
    });
    console.log({ invoiceId });
    const invoiceResult = await stripe.invoices.pay(invoiceId, {
      idempotencyKey: idempotency + 'CC',
    });
    console.log({ invoiceResult });
    return invoiceResult;
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
    const customerResult = await stripe.customers.listPaymentMethods(
      stripeCustomerID,
      { type: 'card' }
    );
    return customerResult;
  }
  static async getPaymentMethod(
    paymentMethodId: string
  ): Promise<Stripe.Response<Stripe.PaymentMethod>> {
    const stripe = new Stripe(await this.getSecret('stripeSecret'), {
      apiVersion: '2020-08-27',
    });
    const customerResult = await stripe.paymentMethods.retrieve(
      paymentMethodId
    );
    return customerResult;
  }
  static async detatchPaymentMethod(
    paymentMethodId: string
  ): Promise<Stripe.Response<Stripe.PaymentMethod>> {
    const stripe = new Stripe(await this.getSecret('stripeSecret'), {
      apiVersion: '2020-08-27',
    });
    const customerResult = await stripe.paymentMethods.detach(paymentMethodId);
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
  static async listProducts(): Promise<Stripe.Product[]> {
    const stripe = new Stripe(await this.getSecret('stripeSecret'), {
      apiVersion: '2020-08-27',
    });
    const productsList = await stripe.products.list();
    const products = productsList.data;
    return products;
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
  static async getSubscription(
    subscriptionId: string
  ): Promise<Stripe.Response<Stripe.Subscription>> {
    const stripe = new Stripe(await this.getSecret('stripeSecret'), {
      apiVersion: '2020-08-27',
    });
    const subscriptionResult = await stripe.subscriptions.retrieve(
      subscriptionId
    );
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
