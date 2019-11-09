/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION
var hostingS3AndCloudFrontHostingBucketName = process.env.HOSTING_S3ANDCLOUDFRONT_HOSTINGBUCKETNAME

Amplify Params - DO NOT EDIT */
/*
exports.handler = function (event, context) { //eslint-disable-line
  console.log(`value1 = ${event.key1}`);
  console.log(`value2 = ${event.key2}`);
  console.log(`value3 = ${event.key3}`);
  var environment = process.env.ENV;
  var region = process.env.REGION;
  var hostingS3AndCloudFrontHostingBucketName = process.env.HOSTING_S3ANDCLOUDFRONT_HOSTINGBUCKETNAME;
  console.log(hostingS3AndCloudFrontHostingBucketName);
  console.log(environment);
  console.log(region);

  context.done(null, 'Hello World'); // SUCCESS with message
};*/
const  resizeHandler = require("./resizeHandler.js");

exports.handler = async event => {
  try {
    const imagePath = await resizeHandler.process(event);
    var URLBase
    if (process.env.ENV==="dev")
      URLBase= "https://beta.themeetinghouse.com"
    else if (process.env.ENV==="tmhprod")
      URLBase= "https://www.themeetinghouse.com"
    else
      URLBase= "https://www.themeetinghouse.com"
    const URL = `http://${process.env.HOSTING_S3ANDCLOUDFRONT_HOSTINGBUCKETNAME}.s3-website.${
      process.env.REGION
    }.amazonaws.com`;

    return {
      headers: { location: `${URLBase}/${imagePath}` },
      statusCode: 301,
      body: ""
    };
  } catch (error) {
    console.log(error);
    return new Error(error);
  }
};
