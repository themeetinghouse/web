/* Amplify Params - DO NOT EDIT
	API_THEMEETINGHOUSE_GRAPHQLAPIENDPOINTOUTPUT
	API_THEMEETINGHOUSE_GRAPHQLAPIIDOUTPUT
	ENV
	HOSTING_S3ANDCLOUDFRONT_HOSTINGBUCKETNAME
	REGION
Amplify Params - DO NOT EDIT */

const AWS = require('aws-sdk');
const s3 = new AWS.S3();
const axios = require('axios');
const gql = require('graphql-tag');
const graphql = require('graphql');
const { print } = graphql;

const getVideo = gql`
  query getVideo($id: ID!) {
    getVideo($id: ID!) {
        id
        seriesTitle
        episodeTitle
        description
    }
  }
`

const getBlog = gql`
  query getBlog($id: ID!) {
    getBlog($id: ID!) {
        id
        blogTitle
        description
    }
  }
`

const getNotes = gql`
  query getNotes($id: ID!) {
    getNotes($id: ID!) {
        id
        title
    }
  }
`

function createMarkup(url, image, description, title, type) {
    let tags = '';

    // og tags
    tags += `<meta property="og:type" content="${type}" />`;
    tags += `<meta property="og:title" content="${title}" />`;
    tags += `<meta property="og:description" content="${description}" />`;
    tags += `<meta property="og:image" content="${image}" />`;
    tags += `<meta property="og:url" content="${url}" />`;

    // twitter tags
    tags += `<meta property="twitter:title" content="${title}" />`;
    tags += `<meta property="twitter:creator" content="@themeetinghouse" />`;
    tags += `<meta property="twitter:image" content="${image}" />`;
    tags += `<meta property="twitter:description" content="${description}" />`;
    tags += `<meta property="twitter:url" content="${url}" />`;
    tags += `<meta property="twitter:card" content="summary" />`;

    const head = "<!DOCTYPE html><html lang=\"en-US\"><head><title>The Meeting House</title>" + tags + "</head><body>no content</body></html>";
    console.log(head)
    const buffer = zlib.gzipSync(head);
    return buffer.toString('base64');
}

function success(body) {
    return buildResponse(200, body);
}

function failure(body) {
    return buildResponse(400, body);
}

function buildResponse(statusCode, body) {
    const response = {
        statusDescription: "OK",
        status: statusCode,
        headers: {
            'cache-control': [{
                key: 'Cache-Control',
                value: 'max-age=100'
            }],
            'content-type': [{
                key: 'Content-Type',
                value: 'text/html; charset=utf-8'
            }],
            'content-encoding': [{
                key: 'Content-Encoding',
                value: 'gzip'
            }],
        },
        bodyEncoding: 'base64',
        body: body
    };
    return response
}

async function readData(url, apiKey, query, id) {
    try {
        const graphqlData = await axios({
          url: url,
          method: 'post',
          headers: {
            'x-api-key': apiKey
          },
          data: {
            query: print(query),
            variables: {
                id: id
            }
          }
        });
        const body = {
            graphqlData: graphqlData.data.data.query
        }
        return {
            statusCode: 200,
            body: JSON.parse(body),
            headers: {
                "Access-Control-Allow-Origin": "*",
            }
        }
      } catch (err) {
        console.log('appsync error: ', err);
      }
}

async function readFromS3(bucket, filename) {
    const params = { Bucket: bucket, Key: filename };
    try {
        const data = await s3.getObject(params).promise();
        const res = data.Body.toString();
        return JSON.parse(res)
    } catch(err) {
        console.error(err)
    }
}

exports.handler = async (event) => {
    const request = event.Records[0].cf.request;
    const userAgent = request.headers['user-agent'][0].value;
    const path =  request.path ? request.path.split('/') : request.path;
    const tmhUrl = 'https://themeetinghouse.com'
    const imageUrl = 'https://themeetinghouse.com/cache/1920'

    let prerender = false;
    // user agent is known social bot
    if (userAgent.match(/twitterbot|facebookexternalhit|linkedinbot|embedly|quora link preview|pinterest|slackbot/i)) {
        prerender = true;
    }
    // rendered page is requested by special query string
    if (request.querystring.match(/_escaped_fragment_/)) {
        prerender = true;
    }
    // request targets non-html files
    if (request.uri.match(/\.(js|css|xml|less|png|jpg|jpeg|gif|pdf|doc|txt|ico|rss|zip|mp3|rar|exe|wmv|doc|avi|ppt|mpg|mpeg|tif|wav|mov|psd|ai|xls|mp4|m4a|swf|dat|dmg|iso|flv|m4v|torrent|ttf|woff|svg|eot)/i)) {
        prerender = false;
    }

    const bucket = process.env.HOSTING_S3ANDCLOUDFRONT_HOSTINGBUCKETNAME
    const url = process.env.API_THEMEETINGHOUSE_GRAPHQLAPIENDPOINTOUTPUT
    const apiKey = process.env.API_KEY

    if (prerender) {
        if (path && path.length > 2) {
            // handle dynamic pages
            switch(path[1]) {
                case 'posts':
                    const id = path[2];
                    const data = await readData(url, apiKey, getBlog, id);
                    const json = data.body.graphqlData;

                    const blogId = json.id;
                    const blogTitle = json.blogTitle;
                    const processedBlogTitle = blogTitle.replace(/\?|[']/g, "");
                    const description = json.description;

                    const base64EncodedBody = createMarkup(`${tmhUrl}/posts/${blogId}`, `${tmhUrl}/static/photos/blogs/baby-hero/${processedBlogTitle}.jpg`, description, blogTitle, 'article');
                    return success(base64EncodedBody);
                case 'videos':
                    const id = path[3];
                    const data = await readData(url, apiKey, getVideo, id);
                    const json = data.body.graphqlData;

                    const videoId = json.id;
                    const seriesTitle = json.seriesTitle;
                    const videoTitle = json.videoTitle;
                    const description = json.description;

                    const base64EncodedBody = createMarkup(`${tmhUrl}/videos/${seriesTitle}/${videoId}`, `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`, description, videoTitle, 'website');
                    return success(base64EncodedBody);
                case 'notes':
                    const id = path[2];
                    const data = await readData(url, apiKey, getNotes, id);
                    const json = data.body.graphqlData;

                    const noteTitle = json.title;
                    const noteId = json.id;
                    const image = `${imageUrl}/static/images/og-images/teaching-curated.jpg`;
                    const description = 'The Meeting House - Notes';
                    
                    const base64EncodedBody = createMarkup(`${tmhUrl}/notes/${noteId}`, image, description, noteTitle, 'website');
                    return success(base64EncodedBody);
                case 'archive':

                    if ((path[2] === 'series' || path[2] === 'video') && path[3]) {
                        const json = await readFromS3(bucket, `static/content/${path[2]}-archive.json`);
                        const og = json.content[0];
                        if (og.type === 'og-tags') {
                            const image = imageUrl + og.image;
                            const url = `${tmhUrl}/archive/${path[2]}/${path[3]}`;
                            const title = og.title;
                            const description = og.description;
    
                            const base64EncodedBody = createMarkup(url, image, description, title, 'website');
                            return success(base64EncodedBody);
                        }
                        return failure(`og-tags not found in ${path[3]}-archive.json`);
                    }
                    return failure('unhandled path: ', path);
                default:
                    return failure('unhandled path: ', path);
            }
        } else if (path && path.length > 1 && path[1] !== "") {
            // handle static pages
            let json;
            if (path[1] === 'notes') {
                json = await readFromS3(bucket, 'static/content/notes-reader.json');
            } else {
                json = await readFromS3(bucket, `static/content/${path[1]}.json`);
            }

            const og = json.content[0];
            if (og.type === 'og-tags') {
                const image = imageUrl + og.image;
                const url = og.url;
                const title = og.title;
                const description = og.description;

                const base64EncodedBody = createMarkup(url, image, description, title, 'website');
                return success(base64EncodedBody);
            }
            return failure(`og-tags not found in ${path[1]}.json`);
        } else if (path && path.length > 1 && path[1] === "") {
            // handle homepage
            const json = readFromS3(bucket, 'static/content/homepage.json');
            const og = json.content[0];
            if (og.type === 'og-tags') {
                const image = imageUrl + og.image;
                const url = og.url;
                const title = og.title;
                const description = og.description;

                const base64EncodedBody = createMarkup(url, image, description, title, 'website');
                return success(base64EncodedBody);
            }
            return failure('og-tags not found in homepage.json');
        } else {
            return failure('unhandled path: ', path);
        }
    }
};
