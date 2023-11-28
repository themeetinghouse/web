const { Upload } = require('@aws-sdk/lib-storage');
const { S3 } = require('@aws-sdk/client-s3');

const stream = require('stream');

const S3 = new S3();

class S3Handler {
  constructor() {}

  readStream(Bucket, Key) {
    return S3.getObject({ Bucket: Bucket, Key: decodeURIComponent(Key) })
      .createReadStream()
      .on('error', (error) => {
        console.log({
          ReadError: error,
          Bucket: Bucket,
          Key: decodeURIComponent(Key),
        });
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
      uploaded: new Upload({
        client: S3,

        params: {
          ACL: 'public-read',
          ContentType: 'image/' + format,
          CacheControl: 'public, s-max-age=604800, max-age=604800, immutable',

          Body: passThrough,
          Bucket: Bucket,
          Key: decodeURIComponent(Key),
        },
      })
        .done()
        .catch((error) => {
          //console.log("writeStream Error");
          console.log(error);
        }),
    };
  }
}

module.exports = new S3Handler();
