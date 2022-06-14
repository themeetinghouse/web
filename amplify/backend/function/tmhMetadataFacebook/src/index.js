const chromium = require('chrome-aws-lambda');
const puppeteer = require('puppeteer-core');
const zlib = require('zlib');

function success(body) {
  return buildResponse(200, body);
}

function failure(body) {
  return buildResponse(400, body);
}

function buildResponse(statusCode, body) {
  const response = {
    statusDescription: 'OK',
    status: statusCode,
    headers: {
      'cache-control': [
        {
          key: 'Cache-Control',
          value: 'max-age=100',
        },
      ],
      'content-type': [
        {
          key: 'Content-Type',
          value: 'text/html; charset=utf-8',
        },
      ],
      'content-encoding': [
        {
          key: 'Content-Encoding',
          value: '',
        },
      ],
    },
    bodyEncoding: 'base64',
    body: body,
  };
  return response;
}

exports.handler = async (event, context, callback) => {
  'use strict';
  const request = event.Records[0].cf.request;
  const userAgent = request.headers['user-agent'][0].value;

  let prerender = 0;
  // user agent is known social bot
  if (
    userAgent.match(
      /twitterbot|facebookexternalhit|linkedinbot|embedly|quora link preview|pinterest|slackbot/i
    )
  ) {
    prerender = 1;
  }
  // rendered page is requested by special query string
  if (request.querystring.match(/_escaped_fragment_/)) {
    prerender = 1;
  }
  // request is coming from prerender.io, so serve original page
  if (userAgent.match(/Prerender/)) {
    prerender = 0;
  }
  // request targets non-html files
  if (
    request.uri.match(
      /\.(js|css|xml|less|png|jpg|jpeg|gif|pdf|doc|txt|ico|rss|zip|mp3|rar|exe|wmv|doc|avi|ppt|mpg|mpeg|tif|wav|mov|psd|ai|xls|mp4|m4a|swf|dat|dmg|iso|flv|m4v|torrent|ttf|woff|svg|eot)/i
    )
  ) {
    prerender = 0;
  }

  if (prerender === 1) {
    const browser = await puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath,
      headless: chromium.headless,
    });

    try {
      let page = await browser.newPage();
      console.log(request.uri);
      if (request.uri == '/index.html')
        await page.goto('https://www.themeetinghouse.com/');
      else await page.goto('https://www.themeetinghouse.com' + request.uri);
      // await page.waitForSelector("meta[property='og:image:type']")
      const result = await page.content();
      browser.close();
      var head =
        '<!DOCTYPE html><html lang="en-US"><head><title>The Meeting House</title>' +
        result.match(/<meta[^>]+>/gi).join('') +
        '</head><body>no content</body></html>';
      console.log(head);
      const buffer = zlib.Sync(head);
      const base64EncodedBody = buffer.toString('base64');
      return success(base64EncodedBody);
    } catch (e) {
      return failure(
        'Could not render!' +
          e.message +
          ' ' +
          'https://www.themeetinghouse.com' +
          request.uri
      );
    }
  }
  callback(null, request);
};
