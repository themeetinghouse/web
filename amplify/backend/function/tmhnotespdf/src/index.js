/* Amplify Params - DO NOT EDIT
	AUTH_COGNITODEVTMH_USERPOOLID
	ENV
	REGION
	STORAGE_TMHUSERCONTENT_BUCKETNAME
Amplify Params - DO NOT EDIT */

const fs = require('fs');
const path = require('path');
const utils = require('util');
const chromium = require('@sparticuz/chromium');
const puppeteer = require('puppeteer-core');
const hb = require('handlebars');
const readFile = utils.promisify(fs.readFile);

const {
  CognitoIdentityProvider,
} = require('@aws-sdk/client-cognito-identity-provider');

const { S3 } = require('@aws-sdk/client-s3');

const { v4: uuidv4 } = require('uuid');
const cognito = new CognitoIdentityProvider({
  // The transformation for apiVersion is not implemented.
  // Refer to UPGRADING.md on aws-sdk-js-v3 for changes needed.
  // Please create/upvote feature request on aws-sdk-js-codemod for apiVersion.
  apiVersion: '2016-04-18',
});
const s3 = new S3({
  //accessKeyId: process.env.s3AccessKeyId,
  //secretAccessKey: process.env.s3SecretAccessKey,
  region: 'us-east-1',
});

exports.handler = async (event) => {
  try {
    console.log({
      AUTH_COGNITODEVTMH_USERPOOLID: process.env,
    });
    console.log({ event });
    const groups = await cognito.adminListGroupsForUser({
      UserPoolId: process.env.userPoolId,
      Username: event.arguments.userId,
    });

    let inNotesGroups = false;

    groups.Groups.forEach((group) => {
      if (group.GroupName === 'Notes') {
        inNotesGroups = true;
      }
    });

    if (!inNotesGroups) {
      throw new Error('User not in "Notes" Cognito group');
    }

    // get html template
    const notesTemplatePath = path.resolve('./notes.html');
    const notesTemplateResp = await readFile(notesTemplatePath, 'utf8');

    // compile into handlebars template
    const template = hb.compile(notesTemplateResp, { strict: true });

    const notesHtml = event.arguments.notes;
    const questionsHtml = event.arguments.questions;
    const week = event.arguments.week;
    const title = event.arguments.title;

    if (questionsHtml && notesHtml && week && title) {
      // html is not escaped
      const notes = new hb.SafeString(notesHtml);
      const questions = new hb.SafeString(questionsHtml);

      // inject content into template
      const result = template({ questions, notes });

      // find banner image
      const imgStart = result.indexOf('<img');
      const imgEnd = result.slice(imgStart).indexOf('>') + imgStart;

      // content before and after banner image
      const htmlStart = result.slice(0, imgEnd + 1);
      const htmlEnd = result.slice(imgEnd + 1);

      // add week number and episode title below banner image
      const htmlMiddle = `<div style="font-size: 20px; font-weight: bold; margin-top: 12px">WEEK ${week}: ${title}</div><div style="border-bottom: 4px black solid"></div>`;

      // concat html
      const html = htmlStart + htmlMiddle + htmlEnd;

      const browser = await puppeteer.launch({
        args: chromium.args,
        defaultViewport: chromium.defaultViewport,
        executablePath: await chromium.executablePath(),
        headless: chromium.headless,
      });

      const page = await browser.newPage();
      await page.setContent(html, { waitUntil: 'networkidle2' });

      const pdfBuffer = await page.pdf({
        format: 'letter',
        margin: {
          top: '0.5in',
          bottom: '0.5in',
          left: '0.5in',
          right: '0.5in',
        },
      });

      const key = 'notes/note-' + uuidv4() + '.pdf';

      const params = {
        Bucket: process.env.STORAGE_TMHUSERCONTENT_BUCKETNAME,
        Key: key,
        ACL: 'public-read',
        Body: pdfBuffer,
        ContentType: 'application/pdf',
      };

      await s3.putObject(params);

      await browser.close();

      const response = {
        objectKey: key,
      };
      return response;
    }
  } catch (e) {
    console.log(e);
    throw new Error('Cannot not generate PDF');
  }

  throw new Error('Unknown');
};
