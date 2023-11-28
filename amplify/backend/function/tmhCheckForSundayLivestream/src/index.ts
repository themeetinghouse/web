/* Amplify Params - DO NOT EDIT
	API_THEMEETINGHOUSE_GRAPHQLAPIENDPOINTOUTPUT
	API_THEMEETINGHOUSE_GRAPHQLAPIIDOUTPUT
	API_THEMEETINGHOUSE_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

import TMHDB from '../../themeetinghousetmhShared/lib/nodejs/TMHDB';
import { addDays, format, startOfWeek } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
const { SES } = require('@aws-sdk/client-ses');

const ses = new SES();
const region = process.env.REGION;
if (!region) throw new Error('REGION is not defined');

function getNextSundayInEST(): string {
  const timeZone = 'America/New_York';
  const nowInEST = utcToZonedTime(new Date(), timeZone);
  const nextSundayInEST = startOfWeek(addDays(nowInEST, 7), {
    weekStartsOn: 0,
  });
  return format(nextSundayInEST, 'yyyy-MM-dd');
}

async function sendEmail(to: string, subject: string, body: string) {
  const params = {
    Destination: { ToAddresses: [to] },
    Message: {
      Body: { Text: { Data: body } },
      Subject: { Data: subject },
    },
    Source: 'donot-reply@themeetinghouse.com',
  };
  return ses.sendEmail(params);
}

export const handler = async (event) => {
  try {
    const dateToCheck = event?.date || getNextSundayInEST();
    const email = event?.email || 'aaron.sawczak@themeetinghouse.com';
    const livestreams = await TMHDB.listLivestreams(dateToCheck);

    if (livestreams.length === 0) {
      await sendEmail(
        email,
        'TMH Warning - Livestream not set',
        `There are no livestreams set for ${dateToCheck}. Please create a livestream for this date. Login as an admin at https://themeetinghouse.com/account/admin/livestream to create a livestream`
      );
      return {
        statusCode: 200,
        body: `Livestream not found for ${dateToCheck}. Email has sent to ${email}`,
      };
    }

    return {
      statusCode: 200,
      body: 'Success. Livestream has already been set.',
    };
  } catch (error: unknown) {
    console.error({ error });
    const e = error as { message: string };
    return {
      statusCode: 500,
      body: e.message || 'Internal Server Error',
    };
  }
};
