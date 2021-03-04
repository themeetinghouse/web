const s3Handler = require('./s3Handler.js');
const sharp = require('sharp');
class ResizerHandler {
  constructor() {}

  async process(event) {
    const { proxy } = event.pathParameters;
    var proxy1 = proxy[0] == '/' ? proxy.substr(1) : proxy;
    const query = proxy1.slice(0, proxy1.indexOf('/'));
    const proxy3 = proxy1.slice(proxy1.indexOf('/') + 1);
    const size = proxy3.slice(0, proxy3.indexOf('/'));
    const image = proxy3.slice(proxy3.indexOf('/') + 1);
    return await this.resize(size, image, size.includes('webp'));
  }
  async resize(size, path, isWebP) {
    //        console.log("Size:" + size)
    //        console.log("Path:" + path)
    try {
      //            const sizeArray = .split('/')
      if (isWebP) {
        console.log({ path: path });
        console.log({ size: size });
        console.log({ isWebP: isWebP });
      }
      const begin = 'cached';
      const width = parseInt(size.replace('webp', ''));
      const Key = path;
      const format = Key.split('.')[1];
      var formatLong = format == 'png' ? 'png' : 'jpeg';
      if (isWebP) formatLong = 'webp';
      const newKey = '' + begin + '/' + width + '/' + path;
      const Bucket = process.env.HOSTING_S3ANDCLOUDFRONT_HOSTINGBUCKETNAME;
      const originalKey = Key.replace('.webp', '.jpg');
      if (isWebP) {
        console.log(
          'originalKey (encoded): ' + decodeURIComponent(originalKey)
        );
        console.log('NewKey:' + newKey);
      }
      const streamResize = sharp()
        .resize(width)
        .toFormat(formatLong, { options: { quality: 80 } });
      const readStream = s3Handler.readStream(Bucket, originalKey);
      const { writeStream, uploaded } = s3Handler.writeStream({
        Bucket,
        Key: newKey,
        format: formatLong,
      });
      var doLoad = false;
      try {
        const httpResponse = s3Handler.exists(Bucket, newKey).promise();
        await httpResponse;
      } catch (e) {
        doLoad = true;
      }
      //            console.log("Doload: "+doLoad)
      if (doLoad) {
        readStream.pipe(streamResize).pipe(writeStream);
        await uploaded;
      }
      return newKey;
    } catch (e) {
      //            console.log("caught")
      console.log(e);
    }
  }
}
module.exports = new ResizerHandler();
