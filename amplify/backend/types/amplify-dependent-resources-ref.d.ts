export type AmplifyDependentResourcesAttributes = {
  auth: {
    cognitodevtmh: {
      IdentityPoolId: 'string';
      IdentityPoolName: 'string';
      UserPoolId: 'string';
      UserPoolArn: 'string';
      UserPoolName: 'string';
      AppClientIDWeb: 'string';
      AppClientID: 'string';
      CreatedSNSRole: 'string';
      GoogleWebClient: 'string';
      FacebookWebClient: 'string';
      AmazonWebClient: 'string';
    };
    userPoolGroups: {
      adminGroupRole: 'string';
      BloggersGroupRole: 'string';
      ElderGroupRole: 'string';
      InstagramGroupRole: 'string';
      NotesGroupRole: 'string';
      PaymentServiceGroupRole: 'string';
    };
  };
  api: {
    themeetinghouse: {
      GraphQLAPIKeyOutput: 'string';
      GraphQLAPIIdOutput: 'string';
      GraphQLAPIEndpointOutput: 'string';
    };
    image: {
      RootUrl: 'string';
      ApiName: 'string';
      ApiId: 'string';
    };
    AdminQueries: {
      RootUrl: 'string';
      ApiName: 'string';
      ApiId: 'string';
    };
  };
  hosting: {
    S3AndCloudFront: {
      Region: 'string';
      HostingBucketName: 'string';
      WebsiteURL: 'string';
      S3BucketSecureURL: 'string';
      CloudFrontDistributionID: 'string';
      CloudFrontDomainName: 'string';
      CloudFrontSecureURL: 'string';
    };
  };
  function: {
    themeetinghousea5cd4619: {
      Name: 'string';
      Arn: 'string';
      Region: 'string';
      LambdaExecutionRole: 'string';
    };
    emailHomeChurch: {
      Name: 'string';
      Arn: 'string';
      Region: 'string';
      LambdaExecutionRole: 'string';
    };
    socialBotHandler: {
      Name: 'string';
      Arn: 'string';
      Region: 'string';
      LambdaExecutionRole: 'string';
    };
    S3Triggerd90d52fa: {
      Name: 'string';
      Arn: 'string';
      Region: 'string';
      LambdaExecutionRole: 'string';
    };
    tmhMetadataFacebook: {
      Name: 'string';
      Arn: 'string';
      Region: 'string';
      LambdaExecutionRole: 'string';
    };
    QandEh: {
      Name: 'string';
      Arn: 'string';
      Region: 'string';
      LambdaExecutionRole: 'string';
    };
    getBiblePassage: {
      Name: 'string';
      Arn: 'string';
      Region: 'string';
      LambdaExecutionRole: 'string';
    };
    tmhF1HomeChurch: {
      Name: 'string';
      Arn: 'string';
      Region: 'string';
      LambdaExecutionRole: 'string';
      CloudWatchEventRule: 'string';
    };
    tmhnotespdf: {
      Name: 'string';
      Arn: 'string';
      Region: 'string';
      LambdaExecutionRole: 'string';
    };
    tmhF1SyncGroupPermissions: {
      Name: 'string';
      Arn: 'string';
      Region: 'string';
      LambdaExecutionRole: 'string';
    };
    themeetinghousetmhShared: {
      Arn: 'string';
    };
    tmhStripeListPaymentMethods: {
      Name: 'string';
      Arn: 'string';
      Region: 'string';
      LambdaExecutionRole: 'string';
    };
    tmhStripeAddCustomer: {
      Name: 'string';
      Arn: 'string';
      Region: 'string';
      LambdaExecutionRole: 'string';
    };
    tmhStripeAddPaymentMethod: {
      Name: 'string';
      Arn: 'string';
      Region: 'string';
      LambdaExecutionRole: 'string';
    };
    tmhStripeListSubscriptions: {
      Name: 'string';
      Arn: 'string';
      Region: 'string';
      LambdaExecutionRole: 'string';
    };
    tmhStripeAddSubscription: {
      Name: 'string';
      Arn: 'string';
      Region: 'string';
      LambdaExecutionRole: 'string';
    };
    tmhStripeDeleteSubscription: {
      Name: 'string';
      Arn: 'string';
      Region: 'string';
      LambdaExecutionRole: 'string';
    };
    AdminQueriesb1fe1491: {
      Name: 'string';
      Arn: 'string';
      Region: 'string';
      LambdaExecutionRole: 'string';
    };
    cognitodevtmhPreSignup: {
      Name: 'string';
      Arn: 'string';
      LambdaExecutionRole: 'string';
      Region: 'string';
    };
    tmhF1AssignmentSync: {
      Name: 'string';
      Arn: 'string';
      Region: 'string';
      LambdaExecutionRole: 'string';
      CloudWatchEventRule: 'string';
    };
    cognitodevtmhPreTokenGeneration: {
      Name: 'string';
      Arn: 'string';
      LambdaExecutionRole: 'string';
      Region: 'string';
    };
    AdminQueriesa1b7e2e8: {
      Name: 'string';
      Arn: 'string';
      Region: 'string';
      LambdaExecutionRole: 'string';
    };
    tmhF1LinkUser: {
      Name: 'string';
      Arn: 'string';
      Region: 'string';
      LambdaExecutionRole: 'string';
    };
    cognitodevtmhPostAuthentication: {
      Name: 'string';
      Arn: 'string';
      LambdaExecutionRole: 'string';
      Region: 'string';
    };
    tmhPinpointCreateCampaign: {
      Name: 'string';
      Arn: 'string';
      Region: 'string';
      LambdaExecutionRole: 'string';
    };
    tmhPinpointListSegments: {
      Name: 'string';
      Arn: 'string';
      Region: 'string';
      LambdaExecutionRole: 'string';
    };
    tmhPinpointCleanupEndpoints: {
      Name: 'string';
      Arn: 'string';
      Region: 'string';
      LambdaExecutionRole: 'string';
      CloudWatchEventRule: 'string';
    };
    tmhF1SearchContributionReceipts: {
      Name: 'string';
      Arn: 'string';
      Region: 'string';
      LambdaExecutionRole: 'string';
    };
    tmhStripeAddPayment: {
      Name: 'string';
      Arn: 'string';
      Region: 'string';
      LambdaExecutionRole: 'string';
    };
    tmhStripeDeletePaymentMethod: {
      Name: 'string';
      Arn: 'string';
      Region: 'string';
      LambdaExecutionRole: 'string';
    };
    sitemapgenerator: {
      Name: 'string';
      Arn: 'string';
      Region: 'string';
      LambdaExecutionRole: 'string';
      CloudWatchEventRule: 'string';
    };
    tmhClearCache: {
      Name: 'string';
      Arn: 'string';
      Region: 'string';
      LambdaExecutionRole: 'string';
    };
  };
  analytics: {
    themeetinghouse: {
      Region: 'string';
      Id: 'string';
      appName: 'string';
    };
  };
  storage: {
    tmhusercontent: {
      BucketName: 'string';
      Region: 'string';
    };
  };
};
