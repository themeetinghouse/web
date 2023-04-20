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
const zlib = require('zlib');

const getVideo = /* GraphQL */ `
  query GetVideo($id: ID!) {
    getVideo(id: $id) {
      id
      seriesTitle
      episodeTitle
      description
    }
  }
`;

const getBlog = /* GraphQL */ `
  query GetBlog($id: ID!) {
    getBlog(id: $id) {
      id
      blogTitle
      description
      babyHeroImage {
        src
        alt
      }
    }
  }
`;

const getNotes = /* GraphQL */ `
  query GetNotes($id: ID!) {
    getNotes(id: $id) {
      id
      title
    }
  }
`;

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

  const head =
    '<!DOCTYPE html><html lang="en-US"><head><title>The Meeting House</title>' +
    tags +
    '</head><body>no content</body></html>';
  console.log(head);
  const buffer = zlib.gzipSync(head);
  return buffer.toString('base64');
}

function success(body) {
  return buildResponse(200, body);
}

function failure(body) {
  return buildResponse(400, body.toString('base64'));
}
function buildResponse(statusCode, body) {
  const response = {
    statusDescription: 'OK',
    status: statusCode,
    headers: {
      'cache-control': [
        {
          key: 'Cache-Control',
          value: 'max-age=100',
        },
      ],
      'content-type': [
        {
          key: 'Content-Type',
          value: 'text/html; charset=utf-8',
        },
      ],
      'content-encoding': [
        {
          key: 'Content-Encoding',
          value: 'gzip',
        },
      ],
    },
    bodyEncoding: 'base64',
    body: body,
  };
  return response;
}

async function readData(url, apiKey, query, id) {
  try {
    const graphqlData = await axios({
      url: url,
      method: 'post',
      headers: {
        'x-api-key': apiKey,
      },
      data: {
        query: query,
        variables: {
          id: id,
        },
      },
    });
    return graphqlData.data.data;
  } catch (err) {
    console.log('appsync error: ', err);
  }
}

async function readFromS3(bucket, filename) {
  const params = { Bucket: bucket, Key: filename };
  try {
    const data = await s3.getObject(params).promise();
    const res = data.Body.toString();
    return JSON.parse(res);
  } catch (err) {
    console.error(err);
  }
}

exports.handler = async (event, context, callback) => {
  //console.log("Starting")
  const request = event.Records[0].cf.request;
  const userAgent = request.headers['user-agent'][0].value;
  const path = request.uri ? request.uri.split('/') : request.uri;
  const tmhUrl = 'https://themeetinghouse.com';
  const imageUrl = 'https://themeetinghouse.com/cache/1920';
  let prerender = false;
  // user agent is known social bot
  if (
    userAgent.match(
      /twitterbot|facebookexternalhit|linkedinbot|embedly|quora link preview|pinterest|slackbot/i
    )
  ) {
    prerender = true;
  }
  // rendered page is requested by special query string
  if (request.querystring.match(/_escaped_fragment_/)) {
    prerender = true;
  }
  // request targets non-html files
  if (
    request.uri.match(
      /\.(js|css|xml|less|png|jpg|jpeg|gif|pdf|doc|txt|ico|rss|zip|mp3|rar|exe|wmv|doc|avi|ppt|mpg|mpeg|tif|wav|mov|psd|ai|xls|mp4|m4a|swf|dat|dmg|iso|flv|m4v|torrent|ttf|woff|svg|eot)/i
    )
  ) {
    prerender = false;
  }
  const bucket = 'heeetingouse-20190312104205-hostingbucket-prodnew';
  const url =
    'https://ivmnti3f45d2phjrvkx62mxgyi.appsync-api.us-east-1.amazonaws.com/graphql';
  const apiKey = 'da2-e4tke5ydc5hffgrwy5e36qdrmu';
  if (prerender) {
    //console.log("Prerender")
    if (path && path.length > 2) {
      // handle dynamic pages
      switch (path[1]) {
        case 'posts':
          const id1 = decodeURI(path[2]);
          const data1 = (await readData(url, apiKey, getBlog, id1)).getBlog;

          const blogId1 = data1.id;
          const blogTitle1 = data1.blogTitle;
          const processedBlogTitle1 = blogTitle1.replace(/\?|[']/g, '');
          const description1 = data1.description;

          const base64EncodedBody1 = createMarkup(
            `${tmhUrl}/posts/${blogId1}`,
            typeof data1.babyHeroImage?.src === 'string' &&
              data1.babyHeroImage.src.length > 0
              ? data1.babyHeroImage.src
              : `${tmhUrl}/static/photos/blogs/baby-hero/${processedBlogTitle1}.jpg`,
            description1,
            blogTitle1,
            'article'
          );
          return success(base64EncodedBody1);
        case 'videos':
          const id2 = path[3];
          const data2 = (await readData(url, apiKey, getVideo, id2)).getVideo;

          const videoId2 = data2.id;
          const seriesTitle2 = data2.seriesTitle;
          const videoTitle2 = data2.episodeTitle;
          const description2 = data2.description;

          const base64EncodedBody2 = createMarkup(
            `${tmhUrl}/videos/${seriesTitle2}/${videoId2}`,
            `https://img.youtube.com/vi/${videoId2}/maxresdefault.jpg`,
            description2,
            videoTitle2,
            'website'
          );
          return success(base64EncodedBody2);
        case 'notes':
          const id3 = decodeURI(path[2]);
          const data3 = (await readData(url, apiKey, getNotes, id3)).getNotes;

          const noteTitle3 = data3.title;
          const noteId3 = data3.id;
          const image3 = `${imageUrl}/static/images/og-images/live.jpg`;
          const description3 = 'The Meeting House - Notes';

          const base64EncodedBody3 = createMarkup(
            `${tmhUrl}/notes/${noteId3}`,
            image3,
            description3,
            noteTitle3,
            'website'
          );
          return success(base64EncodedBody3);
        case 'archive':
          if ((path[2] === 'series' || path[2] === 'video') && path[3]) {
            const json = await readFromS3(
              bucket,
              `static/content/${path[2]}-archive.json`
            );
            const og = json.content[0];
            if (og.type === 'og-tags') {
              const image = imageUrl + og.image;
              const url = `${tmhUrl}/archive/${path[2]}/${path[3]}`;
              const title = og.title;
              const description = og.description;

              const base64EncodedBody = createMarkup(
                url,
                image,
                description,
                title,
                'website'
              );
              return success(base64EncodedBody);
            }
            return failure(`og-tags not found in ${path[3]}-archive.json`);
          }
          return failure(`unhandled path3: ${path}`);
        default:
          return failure(`unhandled path2: ${path}`);
      }
    } else if (path && path.length > 1 && path[1] !== '') {
      // handle static pages
      let json;
      if (path[1] === 'notes') {
        json = await readFromS3(bucket, 'static/content/notes-reader.json');
      } else if (path[1] === 'index.html') {
        json = await readFromS3(bucket, 'static/content/homepage.json');
      } else {
        json = await readFromS3(bucket, `static/content/${path[1]}.json`);
      }
      const og = json.page.content[0];
      if (og.type === 'og-tags') {
        const image = imageUrl + og.image;
        const url = og.url;
        const title = og.title;
        const description = og.description;

        const base64EncodedBody = createMarkup(
          url,
          image,
          description,
          title,
          'website'
        );
        return success(base64EncodedBody);
      }
      return failure(`og-tags not found in ${path[1]}.json`);
    } else if (path && path.length > 1 && path[1] === '') {
      // handle homepage
      const json = await readFromS3(bucket, 'static/content/homepage.json');
      const og = json.page.content[0];
      if (og.type === 'og-tags') {
        const image = imageUrl + og.image;
        const url = og.url;
        const title = og.title;
        const description = og.description;

        const base64EncodedBody = createMarkup(
          url,
          image,
          description,
          title,
          'website'
        );
        return success(base64EncodedBody);
      }
      return failure('og-tags not found in homepage.json');
    } else if (path.length == 0) {
      // handle homepage
      const json = await readFromS3(bucket, 'static/content/homepage.json');
      const og = json.page.content[0];
      if (og.type === 'og-tags') {
        const image = imageUrl + og.image;
        const url = og.url;
        const title = og.title;
        const description = og.description;

        const base64EncodedBody = createMarkup(
          url,
          image,
          description,
          title,
          'website'
        );
        return success(base64EncodedBody);
      }
      return failure('og-tags not found in homepage.json');
    } else {
      return failure(`unhandled path1: ${path}`);
    }
  }
  callback(null, request);
};
