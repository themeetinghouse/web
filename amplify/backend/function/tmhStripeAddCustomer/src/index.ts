/* Amplify Params - DO NOT EDIT
	API_THEMEETINGHOUSE_GRAPHQLAPIENDPOINTOUTPUT
	API_THEMEETINGHOUSE_GRAPHQLAPIIDOUTPUT
	API_THEMEETINGHOUSE_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */
import TMHDB from '../../themeetinghousetmhShared/opt/TMHDB';
import TMHStripe from '../../themeetinghousetmhShared/opt/TMHStripe';
export const handler = async (event) => {
  const stripeSecret = '';
  const customer = {
    name: event.arguments.firstName + ' ' + event.arguments.lastName,
    phone: event.arguments.phone,
    address: event.arguments.billingAddress,
    description: 'This is a description',
    email: event.arguments.email,
    metadata: {
      userID: event.identity.username,
    },
  };
  const idempotency = event.arguments.idempotency;
  const userID = event.identity.username;

  const userInfo = await TMHDB.getUser(userID);
  var customerResult;
  if (userInfo.stripeCustomerID == null) {
    customerResult = await TMHStripe.createCustomer(
      stripeSecret,
      customer,
      idempotency
    );
    const updateUserA = TMHDB.updateUser(
      userID,
      'stripeCustomerID',
      customerResult.id
    );
  } else {
    console.log(userInfo.stripeCustomerID);
    customerResult = await TMHStripe.updateCustomer(
      userInfo.stripeCustomerID,
      stripeSecret,
      customer,
      idempotency
    );
  }

  const response = {
    statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  },
    body: JSON.stringify('Hello from Lambda!'),
  };
  return response;
};
