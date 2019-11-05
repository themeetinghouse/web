var aws = require('aws-sdk');
var ses = new aws.SES();

exports.handler = (event, context, callback) => {
     console.log(event);
     console.log(context);
     var params = {
        Destination: {
            ToAddresses: ["george_vic_bell@hotmail.com"]
        },
        Message: {
            Body: {
                Text: { Data: "Test"
                    
                }
                
            },
            
            Subject: { Data: "Test Email"
                
            }
        },
        Source: "donotreply@themeetinghouse.com"
    };

    
     ses.sendEmail(params, function (err, data) {
        callback(null, {err: err, data: data});
        if (err) {
            console.log(err);
            context.fail(err);
        } else {
            
            console.log(data);
            context.succeed(event);
        }
    });
};