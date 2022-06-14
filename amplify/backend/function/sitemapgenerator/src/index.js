/* Amplify Params - DO NOT EDIT
	API_THEMEETINGHOUSE_GRAPHQLAPIENDPOINTOUTPUT
	API_THEMEETINGHOUSE_GRAPHQLAPIIDOUTPUT
	API_THEMEETINGHOUSE_GRAPHQLAPIKEYOUTPUT
	ENV
	HOSTING_S3ANDCLOUDFRONT_HOSTINGBUCKETNAME
	REGION
Amplify Params - DO NOT EDIT */ /**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

import { readFromS3, writeToS3 } from './S3Handler.js';
import { buildBlogSitemap } from './buildBlogRSS.js';
import { buildXMLSitemap } from './buildXMLSitemap.js';
import { buildSiteMapIndex } from './buildXMLSitemap.js';

export const handler = async () => {
  const siteMapNames = ['sitemap1', 'sitemap2'];
  const siteMapIndex = buildSiteMapIndex(siteMapNames);
  const blogRSS = await buildBlogSitemap();
  const XMLSitemap = await buildXMLSitemap();
  await writeToS3(siteMapIndex, 'static/', 'sitemap_index', '.xml');
  await writeToS3(XMLSitemap, 'static/', siteMapNames[0], '.xml');
  await writeToS3(blogRSS, 'static/', siteMapNames[1], '.xml');
  const robots = await readFromS3('robots.txt');
  if (!robots.includes('Sitemap:')) {
    console.log('Sitemap not found in robots.txt. Writing...');
    const robotsWithSitemap = `${robots}\nSitemap: https://www.themeetinghouse.com/static/sitemap_index.xml`;
    await writeToS3(robotsWithSitemap, '', 'robots', '.txt');
  }

  return {
    statusCode: 200,
    body: 'OK',
  };
};
