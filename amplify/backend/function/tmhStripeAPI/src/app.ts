/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	API_THEMEETINGHOUSE_GRAPHQLAPIIDOUTPUT
	API_THEMEETINGHOUSE_GRAPHQLAPIENDPOINTOUTPUT
	API_THEMEETINGHOUSE_GRAPHQLAPIKEYOUTPUT
	identityPoolId
	userPoolId
	userPoolWebClientId
Amplify Params - DO NOT EDIT */

import express from 'express';
import bodyParser from 'body-parser';
import awsServerlessExpressMiddleware from 'aws-serverless-express/middleware';
import TMHDB from '../../themeetinghousetmhShared/lib/nodejs/TMHDB';
import TMHStripe from '../../themeetinghousetmhShared/lib/nodejs/TMHStripe';

const app = express();
app.use('/webhook', express.raw({ type: 'application/json' }));
app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

app.post('/webhook', async function (req, res) {
  const signature = req.headers['stripe-signature'];
  console.log({ signature });
  const body = req.body;
  console.log({ body });

  try {
    const eventResult = (await TMHStripe.constructEvent(
      body,
      signature as string
    )) as any;
    console.log({ eventResult });

    switch (eventResult.type) {
      case 'charge.succeeded':
        const chargeObject = eventResult?.data.object;
        console.log({ chargeObject });
        console.log({ [`eventResult.data.object`]: eventResult.data.object });
        if (!chargeObject) {
          console.log('No charge object');
          res.status(401).json({ message: 'No charge object' });
        }
        const userEmail = chargeObject.billing_details?.email;
        const amount = chargeObject.amount / 100;
        const user = await TMHDB.getUser(userEmail);
        if (user.stripeCustomerID === eventResult.data.object.customer) {
          const userTotal = user.total ? user.total : 0;
          let sum =
            parseFloat(userTotal.toString()) + parseFloat(amount.toString());
          const updatedUser = await TMHDB.updateUser(userEmail, 'total', sum);
          res.status(200).json({ message: 'User updated' });
        } else {
          console.log('User does not match customer');
          res.status(401).json({ message: 'User does not match customer' });
        }
        break;
      default:
        console.log(`Unhandled event type: ${eventResult.type}`);
        res.status(500).json({ message: 'Unhandled event type' });
    }
  } catch (error) {
    console.error('Webhook processing error:', error);
    res.status(500).json({ error: 'Webhook processing error' });
  }
});

app.listen(3000, function () {
  console.log('App started');
});

export default app;
