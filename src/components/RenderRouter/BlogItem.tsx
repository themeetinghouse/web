import { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import { API } from 'aws-amplify';
import {
  getBlogByBlogStatus,
  getBlogsByVideoForWatchPage,
  getBlogSeries,
} from 'graphql-custom/customQueries';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import {
  GetBlogByBlogStatusQuery,
  GetBlogByBlogStatusQueryVariables,
  GetBlogSeriesQuery,
  GetVideoQuery,
  GetVideoQueryVariables,
  ModelSortDirection,
} from 'API';
import { Link, LinkButton } from 'components/Link/Link';
import { BlogImage } from 'components/ScaledImage';
import { BlogItemContent } from 'components/types';
import moment from 'moment';
import './BlogItem.scss';
import HorizontalScrollList from './HorizontalScrollList';

// Helper components
interface BlogPreviewTextProps {
  title: string;
  author: string;
  publishedDate: string;
  description: string;
  color: 'white' | 'black';
  style?: 'feat-blog' | 'watch-page-blog' | '';
}

const BlogPreviewText = ({
  title,
  author,
  publishedDate,
  description,
  color,
  style = '',
}: BlogPreviewTextProps) => (
  <div className={`BlogPreviewTextContainer ${style}`}>
    <div className={`BlogPreviewTitle tmh-${color}`}>{title}</div>
    <div className={`BlogPreviewAuthorDate ${style} ${color}-blog`}>
      by <span className={`BlogPreviewAuthor tmh-${color}`}>{author}</span> on{' '}
      {publishedDate}
    </div>
    <div className={`BlogPreviewDescription tmh-${color} ${style}`}>
      {description}
    </div>
  </div>
);

interface FeaturedBlogListProps {
  children: React.ReactNode;
  screenWidth: number;
  backgroundColor: 'white' | 'black';
}

const FeaturedBlogList = ({
  children,
  screenWidth,
  backgroundColor,
}: FeaturedBlogListProps) => {
  if (screenWidth > DESKTOP_BREAKPOINT) {
    return (
      <HorizontalScrollList darkMode={backgroundColor === 'black'}>
        {children}
      </HorizontalScrollList>
    );
  }

  return (
    <div data-testid="non-scrolling-list" className="featured-blog-list">
      {children}
    </div>
  );
};

type BlogSeries = NonNullable<
  NonNullable<GetBlogSeriesQuery['getBlogSeries']>['blogs']
>['items'];

type BlogSeriesPost = NonNullable<NonNullable<BlogSeries>[0]>['blogPost'];

type Blog = NonNullable<
  NonNullable<GetBlogByBlogStatusQuery['getBlogByBlogStatus']>['items']
>[0];

type VideoSeries = NonNullable<
  NonNullable<GetVideoQuery['getVideo']>['series']
>;

type VideoSeriesBlog = NonNullable<
  NonNullable<NonNullable<VideoSeries['blogPosts']>['items']>[0]
>['blog'];

interface Props {
  content: BlogItemContent;
}

const DESKTOP_BREAKPOINT = 1024;
const MOBILE_BREAKPOINT = 768;
const invertBlackWhite = { black: 'white', white: 'black' } as const;

const BlogItem = ({ content }: Props) => {
  const [blogs, setBlogs] = useState<
    BlogSeriesPost[] | Blog[] | VideoSeriesBlog[]
  >([]);
  const [sliceIndex, setSliceIndex] = useState(3);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const params = useParams<{ episode: string }>();
  useEffect(() => {
    const fetchData = async () => {
      if (content.blogSeries) {
        await fetchBlogSeries();
      } else if (content.style === 'watch-page') {
        await fetchBlogsByVideo();
      } else {
        await fetchBlogsByStatus();
      }
    };

    fetchData();

    window.addEventListener('resize', () => setScreenWidth(window.innerWidth));

    return () =>
      window.removeEventListener('resize', () =>
        setScreenWidth(window.innerWidth)
      );
  }, []);

  const sortAndSetBlogs = (
    blogs: BlogSeriesPost[] | Blog[] | VideoSeriesBlog[]
  ) => {
    setBlogs(
      blogs.sort((a, b) =>
        (b?.publishedDate ?? '').localeCompare(a?.publishedDate ?? '')
      )
    );
  };

  const fetchBlogsByVideo = async (): Promise<void> => {
    const id = params?.episode;

    if (id) {
      try {
        const variables: GetVideoQueryVariables = {
          id,
        };
        const json = (await API.graphql({
          query: getBlogsByVideoForWatchPage,
          variables,
          authMode: GRAPHQL_AUTH_MODE.API_KEY,
        })) as GraphQLResult<GetVideoQuery>;
        const blogs = json?.data?.getVideo?.series?.blogPosts?.items;

        const today = moment();
        if (blogs && blogs.length > 0) {
          const publishedOnly = blogs.map((item) => {
            if (item) {
              const { blog } = item;
              if (
                blog &&
                blog.publishedDate &&
                moment(blog?.publishedDate, 'YYYY-MM-DD').isSameOrBefore(
                  today
                ) &&
                (blog.expirationDate === 'none' ||
                  moment(blog?.expirationDate, 'YYYY-MM-DD').isAfter(today)) &&
                blog.blogStatus === 'Live'
              ) {
                return blog;
              }
            }
          });

          sortAndSetBlogs(
            (publishedOnly?.filter(Boolean) ?? []) as VideoSeriesBlog[]
          );
        }
      } catch (e) {
        console.error(e);
      }
    }
  };

  const fetchBlogsByStatus = async (nextToken?: string): Promise<void> => {
    const { status, sortOrder, limit } = content;

    try {
      const today = moment();
      const todayString = today.format('YYYY-MM-DD');
      const queryVariables: GetBlogByBlogStatusQueryVariables = {
        publishedDate: { le: todayString },
        blogStatus: status ?? '',
        sortDirection: ModelSortDirection[sortOrder ?? 'DESC'],
        limit: 100,
        filter: { hiddenMainIndex: { ne: true } },
        nextToken,
      };
      const json = (await API.graphql({
        query: getBlogByBlogStatus,
        variables: queryVariables,
        authMode: GRAPHQL_AUTH_MODE.API_KEY,
      })) as GraphQLResult<GetBlogByBlogStatusQuery>;

      if (json.data?.getBlogByBlogStatus?.items) {
        const blogsData = json.data.getBlogByBlogStatus.items;

        if (blogsData.length > 0) {
          const dateChecked = blogsData.filter(
            (post) =>
              post?.expirationDate === 'none' ||
              moment(post?.expirationDate, 'YYYY-MM-DD').isAfter(today)
          );
          const z = [...blogs, ...dateChecked.filter(Boolean)] as Blog[];

          sortAndSetBlogs(z);
        }

        if (
          blogsData.length < (limit ?? 2) &&
          json.data.getBlogByBlogStatus.nextToken
        ) {
          fetchBlogsByStatus(json.data.getBlogByBlogStatus.nextToken);
        }
      }
    } catch (e) {
      console.error(e);
    }
  };

  const fetchBlogSeries = async (): Promise<void> => {
    const { blogSeries: id, status } = content;

    try {
      const today = moment();
      const json = (await API.graphql({
        query: getBlogSeries,
        variables: { id },
        authMode: GRAPHQL_AUTH_MODE.API_KEY,
      })) as GraphQLResult<GetBlogSeriesQuery>;

      if (json.data?.getBlogSeries?.blogs?.items) {
        const series = json.data.getBlogSeries.blogs.items;

        if (series.length > 0) {
          const publishedOnly = series.map((item) => {
            if (
              item?.blogPost?.publishedDate &&
              moment(
                item?.blogPost?.publishedDate,
                'YYYY-MM-DD'
              ).isSameOrBefore(today) &&
              (item?.blogPost?.expirationDate === 'none' ||
                moment(item?.blogPost?.expirationDate, 'YYYY-MM-DD').isAfter(
                  today
                )) &&
              item?.blogPost.blogStatus === status
            ) {
              return item?.blogPost;
            }
          });
          sortAndSetBlogs(publishedOnly.filter(Boolean));
        }
      }
    } catch (e) {
      console.error(e);
    }
  };

  const { description, header1, header2, style, limit, hideAllBlogsButton } =
    content;

  const isDesktop = screenWidth >= MOBILE_BREAKPOINT;

  if (style === 'hero') {
    let blog = blogs.length > 0 && blogs[0];
    const tempBlogs = blogs as Blog[];
    let filtered: Blog[] = [];
    if (
      blog &&
      blog?.blogSeriesId &&
      blog?.blogSeriesId !== 'NullValueString' &&
      blog?.blogSeriesId !== 'nonEmptyVoidStringValue' &&
      blog?.blogSeriesId !== ''
    ) {
      console.log('BLOG SERIES ID: ', blog?.blogSeriesId);
      // this condition might not be necessary since query may have filtered Unlisted blogs
      filtered =
        tempBlogs?.filter(
          (blog) =>
            blog?.blogSeriesId === blog?.blogSeriesId &&
            blog?.blogStatus === 'Live'
        ) ?? [];
      const latestIndexInSeries = Math.max(
        ...filtered.map((blog) =>
          blog?.blogSeriesIndex ? blog.blogSeriesIndex : 0
        )
      );
      blog = filtered.find(
        (blog) => blog?.blogSeriesIndex === latestIndexInSeries
      );
      console.log({ latestIndexInSeries });
    } else {
      console.log('HERO BLOG POST DOES NOT BELONG TO A SERIES', { blog });
    }
    return blog ? (
      <div className="blog-item">
        <div className="blog">
          <h1 className="blog-h1 tmh-header1 b">
            {header1}
            <a
              href={'https://www.themeetinghouse.com/static/sitemap2.xml'}
              rel="noopener noreferrer"
              target="_blank"
              style={{ marginLeft: 8 }}
            >
              <img
                src={'/static/svg/rss-orange.svg'}
                alt={'RSS Logo'}
                width={24}
                height={24}
              />
            </a>
          </h1>
          <div className="blog-blackbox">
            <div className="blog-post-title">{blog?.blogTitle}</div>
            <div className="blogdiv blogauthor">
              by <span className="author-underline">{blog?.author}</span> on{' '}
              {blog?.publishedDate}
            </div>
            <div className="blogdiv blogdescription">{blog?.description}</div>
            <div className="blogdiv2">
              <LinkButton size="lg" to={'/posts/' + blog?.id}>
                Read More
              </LinkButton>
            </div>
            {isDesktop && (
              <div>
                <Link to={'/posts/' + blog?.id} tabIndex={-1}>
                  <BlogImage
                    data-testid="desktop-image"
                    blogTitle={blog?.blogTitle}
                    imageType="baby-hero"
                    className="blog-image-desktop"
                    breakpointSizes={{
                      640: 640,
                      1920: 960,
                      2560: 1280,
                    }}
                    image={blog?.babyHeroImage}
                  />
                </Link>
              </div>
            )}
          </div>
          {!isDesktop && (
            <div className="mobile-image-container">
              <Link to={'/posts/' + blog?.id} tabIndex={-1}>
                <BlogImage
                  data-testid="mobile-image"
                  blogTitle={blog?.blogTitle}
                  imageType="baby-hero"
                  className="blog-image-mobile"
                  breakpointSizes={{
                    320: 320,
                    480: 480,
                    640: 640,
                  }}
                  image={blog?.babyHeroImage}
                />
              </Link>
            </div>
          )}
        </div>
      </div>
    ) : null;
  }

  const breakpointSizes = isDesktop
    ? {
        320: 160,
        480: 240,
        640: 320,
        1280: 640,
        1920: 960,
        2560: 1280,
      }
    : {
        320: 320,
        480: 480,
        640: 640,
        1280: 1280,
        1920: 1920,
        2560: 2560,
      };

  if (style === 'multiImage') {
    const imageType = isDesktop ? 'banner' : 'square';

    return blogs.length > 0 ? (
      <div className="blog-item">
        <div className="blog multiImage">
          <h2 className="tmh-header2 blog-multiImage-h2 b">{header1}</h2>

          {blogs.slice(0, limit).map((item, index) => {
            return (
              <div key={index} className="BlogMultiImageItem">
                <Link className="blog-item-link" to={'/posts/' + item?.id}>
                  <BlogImage
                    data-testid="blog-image"
                    imageType={imageType}
                    blogTitle={item?.blogTitle}
                    image={isDesktop ? item?.bannerImage : item?.squareImage}
                    className={`blog-${imageType}-image multiImage`}
                    fallbackUrl={`/static/photos/blogs/${imageType}/fallback.jpg`}
                    breakpointSizes={breakpointSizes}
                  />
                  <BlogPreviewText
                    title={item?.blogTitle ?? ''}
                    author={item?.author ?? ''}
                    publishedDate={item?.publishedDate ?? ''}
                    description={item?.description ?? ''}
                    color="black"
                  />
                </Link>
              </div>
            );
          })}
          {!hideAllBlogsButton && (
            <>
              <br />
              <LinkButton
                size="lg"
                className="inverted multiImageButton"
                to="/blog"
              >
                View All Blogs
              </LinkButton>
            </>
          )}
        </div>
      </div>
    ) : null;
  }

  if (style === 'featured') {
    const { backgroundColor = 'black', lessPadding = false } = content;
    const headerColor = backgroundColor === 'black' ? 'w' : 'b';

    return blogs.length > 0 ? (
      <div className="blog-item">
        <div
          className={`featured-blog-container ${backgroundColor} ${
            lessPadding ? 'less-padding' : ''
          }`}
        >
          {header1 ? (
            <h1 className={`tmh-header1 ${headerColor}`}>{header1}</h1>
          ) : header2 ? (
            <h2 className={`tmh-header2 ${headerColor}`}>{header2}</h2>
          ) : null}
          {description ? (
            <h3 className={`featured-blog-description ${backgroundColor}`}>
              {description}
            </h3>
          ) : null}
          <div className="featured-blog-list-wrapper">
            <FeaturedBlogList
              screenWidth={screenWidth}
              backgroundColor={backgroundColor}
            >
              {blogs
                .slice(0, !isDesktop ? 3 : undefined) // show max 3 posts on mobile
                .map((blog) => {
                  return (
                    <div className="featured-blog-item" key={blog?.id}>
                      <Link
                        className="blog-item-link"
                        to={'/posts/' + blog?.id}
                      >
                        <BlogImage
                          data-testid="blog-image"
                          image={blog?.babyHeroImage}
                          blogTitle={blog?.blogTitle}
                          imageType="baby-hero"
                          className="featured-blog-image"
                          fallbackUrl="/static/photos/blogs/baby-hero/fallback.jpg"
                          breakpointSizes={breakpointSizes}
                        />
                        <BlogPreviewText
                          title={blog?.blogTitle ?? ''}
                          author={blog?.author ?? ''}
                          publishedDate={blog?.publishedDate ?? ''}
                          description={blog?.description ?? ''}
                          color={invertBlackWhite[backgroundColor]}
                          style="feat-blog"
                        />
                      </Link>
                    </div>
                  );
                })}
            </FeaturedBlogList>
          </div>
        </div>
      </div>
    ) : null;
  }

  if (style === 'watch-page') {
    return blogs.length > 0 ? (
      <div className="blog-item">
        <div className="watch-page-suggested-reads">
          <h2 className="suggested-reads-header tmh-header2 w">
            Suggested Reads
          </h2>
          <div className="suggested-reads-list">
            {blogs.slice(0, sliceIndex).map((blog) => {
              return (
                <Link
                  key={blog?.id}
                  className="blog-item-link"
                  to={'/posts/' + blog?.id}
                >
                  <div className="suggested-reads-item">
                    <BlogImage
                      data-testid="blog-image"
                      image={blog?.squareImage}
                      blogTitle={blog?.blogTitle}
                      imageType="square"
                      className="suggested-image"
                      fallbackUrl="/static/photos/square/baby-hero/fallback.jpg"
                      breakpointSizes={{
                        320: 160,
                        480: 160,
                        640: 160,
                        1280: 160,
                        1920: 160,
                        2560: 160,
                      }}
                    />
                    <div className="suggested-reads-sub-container">
                      <BlogPreviewText
                        title={blog?.blogTitle ?? ''}
                        author={blog?.author ?? ''}
                        publishedDate={blog?.publishedDate ?? ''}
                        description={blog?.description ?? ''}
                        color="white"
                        style="watch-page-blog"
                      />
                      <img
                        className="suggested-blog-arrow"
                        alt=""
                        src="/static/svg/ArrowRight.svg"
                        width={24}
                        height={24}
                      />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          {sliceIndex < blogs.length && (
            <button
              className="load-more-suggested-reads"
              onClick={() => setSliceIndex(sliceIndex + 3)}
            >
              Load More
            </button>
          )}
          <div className="v-player-hr" />
        </div>
      </div>
    ) : null;
  }

  return null;
};

export default BlogItem;
