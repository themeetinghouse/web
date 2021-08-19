exports.handler = (event, context, callback) => {
  // insert code to be executed by your lambda trigger
  const emailList = [
    'george.bell@jesuscollective.com',
    'login.test.0@jesuscollective.com',
    'login.test.1@jesuscollective.com',
    'login.test.2@jesuscollective.com',
    'login.test.3@jesuscollective.com',
    'login.test.4@jesuscollective.com',
    'login.test.5@jesuscollective.com',
    'login.test.6@jesuscollective.com',
    'login.test.7@jesuscollective.com',
    'login.test.8@jesuscollective.com',
    'login.test.9@jesuscollective.com',
    'test1@jesuscollective.com',
    'test2@jesuscollective.com',
    'test3@jesuscollective.com',
    'admin1@jesuscollective.com',
    'partner1@jesuscollective.com',
    'friend1@jesuscollective.com',
    'nosubscription1@jesuscollective.com',
    'ky1@jesuscollective.com',
    'ky2@jesuscollective.com',
    'ky3@jesuscollective.com',
    'ky4@jesuscollective.com',
    'invited1@jesuscollective.com',
    'courseuser1@jesuscollective.com',
    'courseuser2@jesuscollective.com',
    'courseuser3@jesuscollective.com',
    'courseuser4@jesuscollective.com',
    'coursecoach1@jesuscollective.com',
    'coursecoach2@jesuscollective.com',
    'coursecoach3@jesuscollective.com',
    'coursecoach4@jesuscollective.com',
    'legacyusergroup1@jesuscollective.com',
  ];
  if (
    process.env.ENV == 'payments' &&
    emailList.includes(event.request.userAttributes.email)
  ) {
    event.response.autoConfirmUser = 'true';
    event.response.autoVerifyPhone = 'true';
    event.response.autoVerifyEmail = 'true';
  }
  callback(null, event);
};
