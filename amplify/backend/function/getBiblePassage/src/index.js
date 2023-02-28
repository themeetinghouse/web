exports.handler = async (event) => {
  const bibleId = event.arguments.bibleId;
  const passage = event.arguments.passage;

  var AWS = require('aws-sdk'),
    region = 'us-east-1',
    secretName = 'tmhweb/' + process.env.ENV + '/secrets',
    secret,
    decodedBinarySecret;

  // Create a Secrets Manager client
  var client = new AWS.SecretsManager({
    region: region,
  });
  try {
    const data = await client
      .getSecretValue({ SecretId: secretName })
      .promise();

    if ('SecretString' in data) {
      secret = JSON.parse(data.SecretString);
    } else {
      let buff = new Buffer.from(data.SecretBinary, 'base64');
      decodedBinarySecret = buff.toString('ascii');
    }
    console.log('Loading Secret Done');

    try {
      const data = await fetch(
        `https://api.scripture.api.bible/v1/bibles/${bibleId}/passages/${passage}?content-type=json&include-notes=false&include-titles=true&include-chapter-numbers=false&include-verse-numbers=true&include-verse-spans=false&use-org-id=false`,
        {
          headers: {
            'api-key': secret.bibleKey,
          },
        }
      );
      const json = await data.json();
      const temp = { ...json.data, content: JSON.stringify(json.data.content) };
      const res = { meta: json.meta, data: temp };
      console.log({ res });
      return res;
    } catch (error) {
      console.log(error);
    }
  } catch (error2) {
    console.log(error2);
    return { statusCode: '402', error: { message: error2.message } };
  }
};
