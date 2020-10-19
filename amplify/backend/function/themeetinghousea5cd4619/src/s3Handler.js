const AWS = require('aws-sdk');
const stream = require('stream');

const S3 = new AWS.S3();

class S3Handler {
  constructor() {}

  readStream({ Bucket, Key }) {
    return S3.getObject({ Bucket: Bucket, Key: decodeURIComponent(Key) })
      .createReadStream()
      .on('error', (error) => {
        console.log(error);
      });
  }
  exists(Bucket, Key) {
    return S3.headObject(
      { Bucket: Bucket, Key: decodeURIComponent(Key) },
      function (err, data) {
        if (err) console.log(err, err.stack);
        // an error occurred
        else data = data;
        //console.log(data);           // successful response
      }
    );
  }
  writeStream({ Bucket, Key, format }) {
    //    console.log("writeStream")
    const passThrough = new stream.PassThrough();
    return {
      writeStream: passThrough,
      uploaded: S3.upload({
        ACL: 'public-read',
        ContentType: 'image/' + format,
        Body: passThrough,
        Bucket: Bucket,
        Key: decodeURIComponent(Key),
      })
        .promise()
        .catch((error) => {
          //console.log("writeStream Error");
          console.log(error);
        }),
    };
  }
}

module.exports = new S3Handler();
