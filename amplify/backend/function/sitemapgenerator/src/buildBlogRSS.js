import axios from 'axios';

const listBlogs = `
query ListBlogs(
  $filter: ModelBlogFilterInput
  $limit: Int
  $nextToken: String
) {
  listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      author
      publishedDate
      createdAt
      expirationDate
      description
      blogTitle
      hiddenMainIndex
      squareImage { 
        src
      }
    }
    nextToken
  }
}
`;

const fetchBlogs = async () => {
  let blogs = [];
  const loadNext = async (nextToken = null) => {
    try {
      const graphqlData = await axios({
        url: process.env.API_THEMEETINGHOUSE_GRAPHQLAPIENDPOINTOUTPUT,
        method: 'post',
        headers: {
          'x-api-key': process.env.API_THEMEETINGHOUSE_GRAPHQLAPIKEYOUTPUT,
        },
        data: {
          query: listBlogs,
          variables: {
            limit: 200,
            sortDirection: 'DESC',
            nextToken: nextToken,
          },
        },
      });
      blogs = [...blogs, ...graphqlData?.data?.data?.listBlogs?.items];
      if (graphqlData.data.data?.listBlogs?.nextToken) {
        await loadNext(graphqlData.data.data?.listBlogs?.nextToken);
      }
    } catch (err) {
      console.log('appsync error: ', err);
    }
  };
  await loadNext();
  // TODO: Should filter after expiredDate passed?
  return blogs
    .filter((a) => !Boolean(a.hiddenMainIndex))
    .sort((a, b) => a.publishedDate.localeCompare(b.publishedDate));
};

const formatBlogRSS = (blogs) => {
  return `<?xml version="1.0" encoding="utf-8"?>
<rss version="2.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/">
    <channel>
        <title>The Meeting House Blog</title>
        <link>http://www.themeetinghouse.com/static/sitemap2.xml</link>
        <description>The Meeting House Blog Feed</description>
        <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
        <docs>https://validator.w3.org/feed/docs/rss2.html</docs>
        <language>en</language>
        <copyright>All Rights Reserved. © ${new Date().getFullYear()} The Meeting House</copyright>
    ${blogs
      .map((blog) => {
        return `    <item>
            <title><![CDATA[${blog.blogTitle}]]></title>
            ${
              blog.description
                ? `<description><![CDATA[${blog.description}]]></description>`
                : ''
            }
            <link><![CDATA[${encodeURI(
              `https://www.themeetinghouse.com/posts/${blog.id}`
            )}]]></link>
            <pubDate>${new Date(blog.createdAt).toUTCString()}</pubDate>
            ${
              blog?.squareImage?.src
                ? `<enclosure url="${encodeURI(
                    blog?.squareImage?.src
                  )}" length="0" type="image/jpg" />`
                : ''
            }
            <guid isPermaLink="true"><![CDATA[${encodeURI(
              `https://www.themeetinghouse.com/posts/${blog.id}`
            )}]]></guid>
        </item>
    `;
      })
      .join('')}
    </channel>
</rss>`;
};

export const buildBlogSitemap = async () => {
  try {
    const blogData = await fetchBlogs();
    return formatBlogRSS(blogData);
  } catch (error) {
    console.error('Error building blog sitemap: ', error);
  }
};
