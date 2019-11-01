const s3Handler = require("./s3Handler.js");
const sharp = require("sharp");
class ResizerHandler {
    constructor() { }

    async process(event) {
        const { proxy } = event.pathParameters
        var proxy1 = (proxy[0] == '/') ? proxy.substr(1) : proxy;
        const query = proxy1.slice(0, proxy1.indexOf("/"))
        const proxy3 = proxy1.slice(proxy1.indexOf("/") + 1)
        const size = proxy3.slice(0, proxy3.indexOf("/"))
        const image = proxy3.slice(proxy3.indexOf("/") + 1)
        return await this.resize(size, image)
    }
    async resize(size, path) {
//        console.log("Size:" + size)
//        console.log("Path:" + path)
        try {
            //            const sizeArray = .split('/')
            const begin = "cached"
            const width = parseInt(size)
            const Key = path
            const format = Key.split('.')[1]
            const formatLong = format == "png" ? "png" : "jpeg"
            const newKey = '' + begin + '/' + width + '/' + path
            const Bucket = process.env.HOSTING_S3ANDCLOUDFRONT_HOSTINGBUCKETNAME
//            console.log("Bucket:" + Bucket)
//            console.log("Key: " + Key)
//            console.log("NewKey:" + newKey)
            const streamResize = sharp()
                .resize(width)
                .toFormat(formatLong, { "options": { "progressive": true } })

            const readStream = s3Handler.readStream({ Bucket, Key })
            const { writeStream, uploaded } = s3Handler.writeStream({ Bucket, Key: newKey, format: formatLong })
            var doLoad = false;
            try {
                const httpResponse = s3Handler.exists(Bucket, newKey).promise()
                await httpResponse
            } catch (e) {
                doLoad = true
            }
//            console.log("Doload: "+doLoad)
            if (doLoad) {
                readStream
                    .pipe(streamResize)
                    .pipe(writeStream)
                await uploaded
            }
            return newKey
        }
        catch (e) {
//            console.log("caught")
            console.log(e)
        }
    }
}
module.exports = new ResizerHandler()