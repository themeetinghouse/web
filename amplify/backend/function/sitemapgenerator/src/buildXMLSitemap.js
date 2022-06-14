import { listContentPagesFromS3 } from './S3Handler.js';
import axios from 'axios';

export const getVideoByVideoType = `query GetVideoByVideoType(
  $videoTypes: String!
  $publishedDate: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelVideoFilterInput
  $limit: Int
  $nextToken: String
) {
  getVideoByVideoType(
    videoTypes: $videoTypes
    publishedDate: $publishedDate
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      episodeTitle
      episodeNumber
      seriesTitle
      series {
        id
      }
      publishedDate
      description
      thumbnailDescription
      length
      viewCount
      YoutubeIdent
      Youtube {
        snippet {
          thumbnails {
            default {
              url
            }
            medium {
              url
            }
            high {
              url
            }
            standard {
              url
            }
            maxres {
              url
            }
          }
        }
      }
      videoTypes
      notesURL
      videoURL
      audioURL
    }
    nextToken
  }
}
`;

const fetchVideos = async () => {
  let videos = [];
  const loadNext = async (nextToken = null) => {
    try {
      const graphqlData = await axios({
        url: process.env.API_THEMEETINGHOUSE_GRAPHQLAPIENDPOINTOUTPUT,
        method: 'post',
        headers: {
          'x-api-key': process.env.API_THEMEETINGHOUSE_GRAPHQLAPIKEYOUTPUT,
        },
        data: {
          query: getVideoByVideoType,
          variables: {
            videoTypes: 'adult-sunday',
            limit: 200,
            sortDirection: 'DESC',
            nextToken: nextToken,
          },
        },
      });
      videos = [
        ...videos,
        ...graphqlData?.data?.data?.getVideoByVideoType?.items,
      ];
      if (graphqlData.data.data?.getVideoByVideoType?.nextToken) {
        await loadNext(graphqlData.data.data?.getVideoByVideoType?.nextToken);
      }
    } catch (err) {
      console.log('appsync error: ', err);
    }
  };
  await loadNext();
  return videos;
};

export const buildSiteMapIndex = (siteMapNames) => {
  return `<?xml version="1.0" encoding="utf-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${siteMapNames
  .map((siteMapName) => {
    return `  <sitemap>
  <loc>https://www.themeetinghouse.com/static/${siteMapName}.xml</loc>
</sitemap>`;
  })
  .join('\n')}  
</sitemapindex>`;
};
const buildVideoLinksString = async () => {
  const videos = await fetchVideos();
  const videoLinks = videos
    .map((video) => {
      return `  <url>
    <loc><![CDATA[https://www.themeetinghouse.com/videos/${encodeURI(
      video?.seriesTitle
    )}/${video?.id}]]></loc>
    <lastmod>${video.publishedDate}</lastmod>
  </url>`;
    })
    .join('\n');
  return videoLinks;
};
const formatXMLSiteMap = (dataFromS3, videoData) => {
  let siteMap1Content = '';
  if (dataFromS3) {
    siteMap1Content = dataFromS3
      .map((page) => {
        return `  <url>
    <loc>https://www.themeetinghouse.com/${page.name}</loc>
    <lastmod>${page.lastModified}</lastmod>
    <changefreq>daily</changefreq>
  </url>`;
      })
      .join('\n');
    return `<?xml version="1.0" encoding="utf-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${siteMap1Content}
${videoData}
</urlset>`.replace(',', ' ');
  }
};
export const buildXMLSitemap = async () => {
  try {
    const dataFromS3 = await listContentPagesFromS3();
    const videos = await buildVideoLinksString();
    return formatXMLSiteMap(dataFromS3, videos);
  } catch (error) {
    console.error('ERROR. Failed to create XML sitemap.');
  }
};
