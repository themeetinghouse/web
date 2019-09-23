const s3Handler =require("./s3Handler.js");
const sharp = require("sharp");
class ResizerHandler {
    constructor() { }

    async process(event) {
        console.log(event)
        const { proxy } = event.pathParameters
        var proxy1 = (proxy[0] == '/') ? proxy.substr(1) : proxy;
        const query=proxy1.slice(0,proxy1.indexOf("/"))
        const proxy3=proxy1.slice(proxy1.indexOf("/")+1)
        const size=proxy3.slice(0,proxy3.indexOf("/"))
        const image=proxy3.slice(proxy3.indexOf("/")+1)
        return await this.resize(size, image)
    }
    async resize(size, path) {
        console.log(size)
        console.log(path)
        try {
//            const sizeArray = .split('/')
            const begin = "cache"
            const width = parseInt(size)
            const Key = path
            const format = Key.split('.')[1]
            console.log(format)
            const formatLong= format=="png"?"png":"jpeg"
            console.log(formatLong)
            const newKey = '' + begin + '/' + width + '/' + path
            const Bucket = process.env.HOSTING_S3ANDCLOUDFRONT_HOSTINGBUCKETNAME
            console.log(Bucket)
            console.log(Key)
            console.log(newKey)
            const streamResize = sharp()
                .resize(width)
                .toFormat(formatLong,{"options":{"progressive":true}})

            const readStream = s3Handler.readStream({ Bucket, Key })
            const { writeStream, uploaded } = s3Handler.writeStream({ Bucket, Key: newKey,format:formatLong })

            readStream
                .pipe(streamResize)
                .pipe(writeStream)

            await uploaded
            return newKey
        }
        catch(e)
        {
            console.log(e)
        }
    }
}
module.exports = new ResizerHandler()