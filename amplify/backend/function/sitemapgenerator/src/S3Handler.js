import { S3 } from '@aws-sdk/client-s3';
const S3 = new S3();

export const listContentPagesFromS3 = async () => {
  try {
    const params = {
      Bucket: process.env.HOSTING_S3ANDCLOUDFRONT_HOSTINGBUCKETNAME,
      Prefix: 'static/content/',
    };
    // listObjectsV2 is limited to 1000 pages.
    const data = await S3.listObjectsV2(params);
    let pages = [];
    if (data?.Contents?.length) {
      pages = data?.Contents?.filter((page) => page.Key.includes('.json')).map(
        (page) => {
          const fullPath = page?.Key?.split('.json')?.[0]?.split('/');
          const pageName = fullPath[fullPath.length - 1];
          return {
            name: pageName,
            lastModified: page.LastModified.toISOString().split('T')?.[0],
          };
        }
      );
    }
    return pages;
  } catch (error) {
    console.error({ 'failed to list S3 objects': error });
  }
};

export const readFromS3 = async (key) => {
  try {
    const params = {
      Bucket: process.env.HOSTING_S3ANDCLOUDFRONT_HOSTINGBUCKETNAME,
      Key: key,
    };
    const data = await S3.getObject(params);
    return data.Body.toString();
  } catch (error) {
    console.error({ 'failed to read from S3': error });
  }
};

export const writeToS3 = async (body, path, key, ext) => {
  const determineContentType = () => {
    switch (ext) {
      case '.xml':
        return 'text/xml';
      case '.txt':
        return 'text/plain';
      default:
        return 'text/plain';
    }
  };
  const contentType = determineContentType();
  try {
    const params = {
      Bucket: process.env.HOSTING_S3ANDCLOUDFRONT_HOSTINGBUCKETNAME,
      Key: `${path}${key}${ext}`,
      Body: body,
      ContentType: contentType,
    };
    await S3.putObject(params);
  } catch (error) {
    console.error({ 'failed to write to S3': error });
  }
};
