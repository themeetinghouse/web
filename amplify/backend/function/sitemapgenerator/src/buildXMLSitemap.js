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

const fetchPlaylists = async () => {
  try {
    const idsToFilter = [
      '',
      'after-party',
      'youth-watchparty',
      'adult-sunday-teaser',
      'bbq',
      'Christmas-eves',
      'Christmas-shorts',
      'Christmas-funny',
      'q-eh',
      'Annual Report',
      'Home Church Hangouts',
      'compassion-training',
      'kidmax-live',
      'kids-training',
      'connect training',
      'HC101',
      'HC102',
      'FallHC2021',
      'tech-training',
      'parish-leadership',
      'regather-internal',
      'regather-external',
    ]; // add playlists to be filtered here
    const response = await axios.get(
      'https://www.themeetinghouse.com/static/data/import-video.json'
    );
    const playlistIds = response?.data?.map((playlist) => playlist.id) ?? [];
    const filteredIds = playlistIds.filter(
      (id) =>
        !id.includes('hidden') &&
        id !== idsToFilter.find((filterId) => filterId === id)
    );
    console.log({ 'fetching the following playlists': filteredIds });
    return filteredIds;
  } catch (error) {
    console.error({ 'failed to get playlists': error });
    return [];
  }
};

const fetchVideos = async (playlistId) => {
  let requestCounter = 0;
  let videos = [];
  const loadNext = async (nextToken = null) => {
    ++requestCounter;
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
            videoTypes: playlistId,
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
  console.log({ [playlistId]: `${requestCounter} requests` });
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
  const playlistIds = await fetchPlaylists();
  const loadAllVideos = async (playlistIds) => {
    const requests = playlistIds.map((playlistId) => fetchVideos(playlistId));
    const results = await Promise.all(requests);
    return results.flat();
  };
  const videos = await loadAllVideos(playlistIds);
  console.log('#', videos.length, ' videos to be indexed.');
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
