import React, { EventHandler, SyntheticEvent } from 'react';
import './BlogItem.scss';
import * as customQueries from '../../graphql-custom/customQueries';
import { API } from 'aws-amplify';
import moment from 'moment';
import { GRAPHQL_AUTH_MODE, GraphQLResult } from '@aws-amplify/api/lib/types';
import { Link, LinkButton } from 'components/Link/Link';
import {
  GetBlogSeriesQuery,
  GetBlogByBlogStatusQuery,
  GetBlogByBlogStatusQueryVariables,
  ModelSortDirection,
} from 'API';
import { BlogItemContent } from '../types';
import ScaledImage from '../ScaledImage/ScaledImage';

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
  blogs: Blogs;
  blogSeries: BlogSeries;
  publishedOnly: NonNullable<BlogSeriesPosts | Blogs>;
  screenWidth: number;
}

class BlogItem extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      blogs: [],
      blogSeries: [],
      publishedOnly: [],
      screenWidth: window.innerWidth,
    };

    if (this.props.content.blogSeries) this.getBlogSeries();
    else this.getBlogsByStatus();
  }

  componentDidMount() {
    window.addEventListener('resize', () =>
      this.setState({ screenWidth: window.innerWidth })
    );
  }

  componentWillUnmount() {
    window.removeEventListener('resize', () =>
      this.setState({ screenWidth: window.innerWidth })
    );
  }

  async getBlogsByStatus(nextToken?: string): Promise<void> {
    try {
      const today = moment();
      const todayString = today.format('YYYY-MM-DD');
      const queryVariables: GetBlogByBlogStatusQueryVariables = {
        publishedDate: { le: todayString },
        blogStatus: this.props.content.status,
        sortDirection:
          ModelSortDirection[this.props.content.sortOrder ?? 'DESC'],
        limit: this.props.content.limit,
        filter: { hiddenMainIndex: { ne: true } },
        nextToken: nextToken,
      };
      const json = (await API.graphql({
        query: customQueries.getBlogByBlogStatus,
        variables: queryVariables,
        authMode: GRAPHQL_AUTH_MODE.API_KEY,
      })) as GraphQLResult<GetBlogByBlogStatusQuery>;

      console.debug(json.data?.getBlogByBlogStatus);

      if (json.data?.getBlogByBlogStatus?.items) {
        this.setState({
          blogs: json.data.getBlogByBlogStatus.items,
        });
        if (this.state.blogs) {
          const dateChecked = this.state.blogs.filter(
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
          this.state.publishedOnly.length < (this.props.content.limit ?? 2) &&
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
    try {
      const today = moment();
      const json = (await API.graphql({
        query: customQueries.getBlogSeries,
        variables: { id: this.props.content.blogSeries },
        authMode: GRAPHQL_AUTH_MODE.API_KEY,
      })) as GraphQLResult<GetBlogSeriesQuery>;

      console.debug(json.data?.getBlogSeries);

      if (json.data?.getBlogSeries?.blogs?.items) {
        this.setState({
          blogSeries: json.data.getBlogSeries.blogs.items,
        });
        if (this.state.blogSeries) {
          const publishedOnly: NonNullable<
            NonNullable<
              NonNullable<
                NonNullable<
                  NonNullable<GetBlogSeriesQuery['getBlogSeries']>['blogs']
                >['items']
              >[0]
            >['blogPost']
          >[] = [];
          this.state.blogSeries.forEach((item) => {
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
              item?.blogPost.blogStatus === this.props.content.status
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

  fallbackToImage(
    fallbackUrl: string
  ): EventHandler<SyntheticEvent<HTMLImageElement>> {
    return function (event: SyntheticEvent<HTMLImageElement>) {
      if (!event.currentTarget.src.endsWith(fallbackUrl)) {
        event.currentTarget.src = fallbackUrl;
        event.currentTarget.srcset = '';
      }
    };
  }

  getImageURI(
    title: string | undefined | null,
    style: 'baby-hero' | 'banner' | 'square'
  ): string {
    if (!title) return '';
    return (
      `/static/photos/blogs/${style}/` +
      encodeURIComponent(title.replace(/\?|[']/g, '')) +
      '.jpg'
    );
  }

  render() {
    if (this.state.publishedOnly?.length === 0 || !this.state.publishedOnly) {
      return null;
    }

    switch (this.props.content.style) {
      case 'hero':
        return (
          <div className="blog-item">
            <div className="blog">
              <h1 className="blog-h1">{this.props.content.header1}</h1>
              <div className="blog-blackbox">
                <div className="blog-post-title">
                  {this.state.publishedOnly[0]?.blogTitle}
                </div>
                <div className="blogdiv blogauthor">
                  by{' '}
                  <span className="author-underline">
                    {this.state.publishedOnly[0]?.author}
                  </span>{' '}
                  on {this.state.publishedOnly[0]?.publishedDate}
                </div>
                <div className="blogdiv blogdescription">
                  {this.state.publishedOnly[0]?.description}
                </div>
                <div className="blogdiv2">
                  <LinkButton
                    size="lg"
                    to={'/posts/' + this.state.publishedOnly[0]?.id}
                  >
                    Read More
                  </LinkButton>
                </div>
                <div>
                  <Link
                    to={'/posts/' + this.state.publishedOnly[0]?.id}
                    tabIndex={-1}
                  >
                    <img
                      alt="TBD"
                      className="blog-image-desktop"
                      src={this.getImageURI(
                        this.state.publishedOnly[0]?.blogTitle,
                        'baby-hero'
                      )}
                      onError={this.fallbackToImage(
                        '/static/photos/blogs/baby-hero/fallback.jpg'
                      )}
                    />
                  </Link>
                </div>
              </div>
              <div className="mobile-image-container">
                <Link
                  to={'/posts/' + this.state.publishedOnly[0]?.id}
                  tabIndex={-1}
                >
                  <img
                    alt="TBD"
                    className="blog-image-mobile"
                    src={this.getImageURI(
                      this.state.publishedOnly[0]?.blogTitle,
                      'baby-hero'
                    )}
                    onError={this.fallbackToImage(
                      '/static/photos/blogs/baby-hero/fallback.jpg'
                    )}
                  />
                </Link>
              </div>
            </div>
          </div>
        );
      case 'multiImage':
        return (
          <div className="blog-item">
            <div className="blog multiImage">
              <h1 className="blog-h1 multiImage">
                {this.props.content.header1}
              </h1>
              {this.state.publishedOnly
                .slice(0, this.props.content.limit)
                .map((item, index) => {
                  const imageSquare = {
                    src: this.getImageURI(item?.blogTitle, 'square'),
                    alt: `blog post:" ${item?.id}`,
                  };
                  const imageBanner = {
                    src: this.getImageURI(item?.blogTitle, 'banner'),
                    alt: `blog post:" ${item?.id}`,
                  };
                  return (
                    <div key={index} className="BlogMultiImageItem">
                      <Link className="BlogLink" to={'/posts/' + item?.id}>
                        {this.state.screenWidth >= 768 ? (
                          <ScaledImage
                            image={imageBanner}
                            className="BlogBannerImage multiImage"
                            fallbackUrl="/static/photos/blogs/banner/fallback.jpg"
                            breakpointSizes={{
                              320: 160,
                              480: 240,
                              640: 320,
                              1280: 640,
                              1920: 960,
                              2560: 1280,
                            }}
                          />
                        ) : (
                          <ScaledImage
                            image={imageSquare}
                            className="BlogSquareImage multiImage"
                            fallbackUrl="/static/photos/blogs/square/fallback.jpg"
                            breakpointSizes={{
                              320: 320,
                              480: 480,
                              640: 640,
                              1280: 1280,
                              1920: 1920,
                              2560: 2560,
                            }}
                          />
                        )}
                        <div className="BlogMultiImageTextContainer">
                          <div className="BlogTitle multiImage">
                            {item?.blogTitle}
                          </div>
                          <div className="blogauthor multiImage">
                            by{' '}
                            <span className="author-only">{item?.author}</span>{' '}
                            on {item?.publishedDate}
                          </div>
                          <div className="blogdescription multiImage">
                            {item?.description}
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              {!this.props.content.hideAllBlogsButton ? (
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
              ) : null}
            </div>
          </div>
        );
      default:
        return null;
    }
  }
}

export default BlogItem;
