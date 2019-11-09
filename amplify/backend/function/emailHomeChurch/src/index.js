var aws = require('aws-sdk');
var ses = new aws.SES();

exports.handler = (event, context, callback) => {
    var message="Name: "+ event.arguments.name + "\n"+
     "Email: "+event.arguments.email +"\n"+
     "Message: "+event.arguments.message+"\n"+
     "Homechurch Id:" +event.arguments.homeChurchId+"\n"
    console.log(message)
     var params = {
        Destination: {
            ToAddresses: ["george.bell@themeetinghouse.com"]
        },
        Message: {
            Body: {
                Text: { Data: message
                    
                }
                
            },
            
            Subject: { Data: "Homechurch Inquiry"
                
            }
        },
        Source: "donot-reply@themeetinghouse.com"
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