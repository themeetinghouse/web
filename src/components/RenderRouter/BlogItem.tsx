import React from 'react';
import { API, GRAPHQL_AUTH_MODE, GraphQLResult } from '@aws-amplify/api';
import {
  getBlogSeries,
  getBlogByBlogStatus,
} from 'graphql-custom/customQueries';
import moment from 'moment';
import { Link, LinkButton } from 'components/Link/Link';
import {
  GetBlogSeriesQuery,
  GetBlogByBlogStatusQuery,
  GetBlogByBlogStatusQueryVariables,
  ModelSortDirection,
} from 'API';
import { BlogItemContent } from 'components/types';
import { BlogImage } from 'components/ScaledImage';
import HorizontalScrollList from './HorizontalScrollList';
import './BlogItem.scss';

// Helper components
interface BlogPreviewTextProps {
  title: string;
  author: string;
  publishedDate: string;
  description: string;
  color: 'white' | 'black';
  featuredStyle?: boolean;
}

const BlogPreviewText = ({
  title,
  author,
  publishedDate,
  description,
  color,
  featuredStyle,
}: BlogPreviewTextProps) => (
  <div className={`BlogPreviewTextContainer${featuredStyle ? ' feat' : ''}`}>
    <div className={`BlogPreviewTitle ${color}`}>{title}</div>
    <div className="BlogPreviewAuthorDate">
      by <span className={`BlogPreviewAuthor ${color}`}>{author}</span> on{' '}
      {publishedDate}
    </div>
    <div className={`BlogPreviewDescription ${color}`}>{description}</div>
  </div>
);

interface FeaturedBlogListProps {
  children: React.ReactNode;
  screenWidth: number;
}

const FeaturedBlogList = ({ children, screenWidth }: FeaturedBlogListProps) => {
  if (screenWidth > DESKTOP_BREAKPOINT) {
    return <HorizontalScrollList darkMode>{children}</HorizontalScrollList>;
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
type BlogSeriesPosts = Array<
  NonNullable<NonNullable<BlogSeries>[0]>['blogPost']
>;
type Blogs = NonNullable<
  GetBlogByBlogStatusQuery['getBlogByBlogStatus']
>['items'];

interface Props {
  content: BlogItemContent;
}

interface State {
  publishedOnly: NonNullable<BlogSeriesPosts | Blogs>;
  screenWidth: number;
}

const DESKTOP_BREAKPOINT = 1024;
const MOBILE_BREAKPOINT = 768;

class BlogItem extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      publishedOnly: [],
      screenWidth: window.innerWidth,
    };
  }

  async componentDidMount() {
    window.addEventListener('resize', () =>
      this.setState({ screenWidth: window.innerWidth })
    );

    if (this.props.content.blogSeries) {
      await this.getBlogSeries();
    } else {
      await this.getBlogsByStatus();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', () =>
      this.setState({ screenWidth: window.innerWidth })
    );
  }

  async getBlogsByStatus(nextToken?: string): Promise<void> {
    const { status, sortOrder, limit } = this.props.content;

    try {
      const today = moment();
      const todayString = today.format('YYYY-MM-DD');
      const queryVariables: GetBlogByBlogStatusQueryVariables = {
        publishedDate: { le: todayString },
        blogStatus: status,
        sortDirection: ModelSortDirection[sortOrder ?? 'DESC'],
        limit: limit,
        filter: { hiddenMainIndex: { ne: true } },
        nextToken: nextToken,
      };
      const json = (await API.graphql({
        query: getBlogByBlogStatus,
        variables: queryVariables,
        authMode: GRAPHQL_AUTH_MODE.API_KEY,
      })) as GraphQLResult<GetBlogByBlogStatusQuery>;

      console.debug(json.data?.getBlogByBlogStatus);

      if (json.data?.getBlogByBlogStatus?.items) {
        const blogs = json.data.getBlogByBlogStatus.items;

        if (blogs.length > 0) {
          const dateChecked = blogs.filter(
            (post) =>
              post?.expirationDate === 'none' ||
              moment(post?.expirationDate, 'YYYY-MM-DD').isAfter(today)
          );
          console.debug(dateChecked);
          this.setState({
            publishedOnly: this.state.publishedOnly.concat(dateChecked),
          });
        }

        if (
          this.state.publishedOnly.length < (limit ?? 2) &&
          json.data.getBlogByBlogStatus.nextToken
        ) {
          this.getBlogsByStatus(json.data.getBlogByBlogStatus.nextToken);
        }
      }
    } catch (e) {
      console.error(e);
    }
  }

  async getBlogSeries(): Promise<void> {
    const { blogSeries: id, status } = this.props.content;

    try {
      const today = moment();
      const json = (await API.graphql({
        query: getBlogSeries,
        variables: { id },
        authMode: GRAPHQL_AUTH_MODE.API_KEY,
      })) as GraphQLResult<GetBlogSeriesQuery>;

      console.debug(json.data?.getBlogSeries);

      if (json.data?.getBlogSeries?.blogs?.items) {
        const series = json.data.getBlogSeries.blogs.items;

        if (series.length > 0) {
          const publishedOnly: NonNullable<
            NonNullable<
              NonNullable<
                NonNullable<
                  NonNullable<GetBlogSeriesQuery['getBlogSeries']>['blogs']
                >['items']
              >[0]
            >['blogPost']
          >[] = [];
          series.forEach((item) => {
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
              publishedOnly.push(item?.blogPost);
            }
          });
          console.debug(publishedOnly);
          this.setState({ publishedOnly });
        }
      }
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    const { screenWidth, publishedOnly } = this.state;
    const { description, header1, style, limit, hideAllBlogsButton } =
      this.props.content;

    if (publishedOnly?.length === 0 || !publishedOnly) {
      return null;
    }

    const isDesktop = screenWidth >= MOBILE_BREAKPOINT;

    if (style === 'hero') {
      const blog = publishedOnly[0];

      return (
        <div className="blog-item">
          <div className="blog">
            <h1 className="blog-h1 tmh-header1 b">{header1}</h1>
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
      );
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

      return (
        <div className="blog-item">
          <div className="blog multiImage">
            <h2 className="tmh-header2 blog-multiImage-h2 b">{header1}</h2>
            {publishedOnly.slice(0, limit).map((item, index) => {
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
      );
    }

    if (style === 'featured') {
      return (
        <div className="blog-item">
          <div className="featured-blog-container">
            <h1 className="tmh-header1 w">{header1}</h1>
            <h3 className="featured-blog-description">{description}</h3>
            <div className="featured-blog-list-wrapper">
              <FeaturedBlogList screenWidth={screenWidth}>
                {publishedOnly
                  ?.slice(0, !isDesktop ? 3 : undefined) // show max 3 posts on mobile
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
                            color="white"
                            featuredStyle
                          />
                        </Link>
                      </div>
                    );
                  })}
              </FeaturedBlogList>
            </div>
          </div>
        </div>
      );
    }

    return null;
  }
}

export default BlogItem;
