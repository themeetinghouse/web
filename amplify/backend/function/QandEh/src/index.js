const { SES } = require('@aws-sdk/client-ses');
const ses = new SES();

exports.handler = (event, context, callback) => {
  const message = event.arguments.body;
  console.log(message);
  const params = {
    Destination: {
      ToAddresses: ['ask@themeetinghouse.com'],
    },
    ReplyToAddresses: [event.arguments.email],
    Message: {
      Body: {
        Text: {
          Data: message,
        },
      },
      Subject: {
        Data: 'Teaching Q&A',
      },
    },
    Source: 'donot-reply@themeetinghouse.com',
  };

  ses.sendEmail(params, function (err, data) {
    callback(null, { err: err, data: data });
    if (err) {
      console.log(err);
      context.fail(err);
    } else {
      console.log(data);
      context.succeed(event);
    }
  });
};
