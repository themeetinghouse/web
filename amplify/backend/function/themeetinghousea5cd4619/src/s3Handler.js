const AWS = require("aws-sdk");
const stream = require("stream");

const S3 = new AWS.S3();

class S3Handler {
  constructor() {}

  readStream({ Bucket, Key }) {
      console.log("read")
      console.log(Key)
    return S3.getObject({ Bucket:Bucket, Key:Key }).createReadStream().on('error', error => {
       console.log("read")
       console.log(error)
    });;
  }

  writeStream({ Bucket, Key, format }) {
      console.log("write")
      console.log(format)
    const passThrough = new stream.PassThrough();
    return {
      writeStream: passThrough,
      uploaded: S3.upload({
          ACL:"public-read",
        ContentType: "image/"+format,
        Body: passThrough,
        Bucket: Bucket,
        Key: Key
      }).promise().catch((error)=>{console.log("write");console.log(error)})
    };
  }
}

module.exports = new S3Handler();