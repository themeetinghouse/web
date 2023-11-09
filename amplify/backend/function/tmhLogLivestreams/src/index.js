/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  for (const record of event.Records) {
    console.log('ADynamoDB Record: %j', record.dynamodb);
    console.log(
      `${record.eventName} was performed on ${
        record.dynamodb.Keys.id.S
      } at ${new Date(
        record.dynamodb.ApproximateCreationDateTime * 1000
      ).toUTCString()}`
    );
    const currentImage =
      record.eventName === 'REMOVE'
        ? record.dynamodb.OldImage
        : record.dynamodb.NewImage;
    console.log({
      livestreamData: {
        date: currentImage.date.S,
        liveVimeoId: currentImage.liveVimeoId.S,
        liveYoutubeId: currentImage.liveYoutubeId.S,
        showKids: currentImage.showKids.BOOL,
        showChat: currentImage.showChat.BOOL,
        zoom: currentImage.zoom,
        menu: currentImage.menu,
        prerollYoutubeId: currentImage.prerollYoutubeId.S,
        createdAt: currentImage.createdAt.S,
        homepageLink: currentImage.homepageLink.S,
        startTime: currentImage.startTime.S,
        videoStartTime: currentImage.videoStartTime.S,
        endTime: currentImage.endTime.S,
        id: currentImage.id.S,
        updatedAt: currentImage.updatedAt.S,
      },
    });
  }
  return Promise.resolve('Successfully processed DynamoDB record');
};
