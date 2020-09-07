
import React, { EventHandler, SyntheticEvent } from 'react';
import "./BlogItem.scss"
import * as customQueries from '../../graphql-custom/customQueries';
import * as queries from '../../graphql/queries';
import Amplify, { API } from 'aws-amplify';
import awsmobile from '../../aws-exports';
import moment from 'moment'
import { GRAPHQL_AUTH_MODE, GraphQLResult } from '@aws-amplify/api/lib/types';
import { Link, LinkButton } from 'components/Link/Link';
import { GetBlogSeriesQuery, GetBlogByBlogStatusQuery } from 'API';
import { BlogItemContent } from '../types';

Amplify.configure(awsmobile);

type BlogSeries = NonNullable<NonNullable<GetBlogSeriesQuery['getBlogSeries']>['blogs']>['items'];
type BlogSeriesPosts = Array<NonNullable<NonNullable<BlogSeries>[0]>['blogPost']>
type Blogs = NonNullable<GetBlogByBlogStatusQuery['getBlogByBlogStatus']>['items'];

interface Props {
    content: BlogItemContent
}

interface State {
    blogs: Blogs;
    blogSeries: BlogSeries;
    publishedOnly: BlogSeriesPosts | Blogs;
}

class BlogItem extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            blogs: [],
            blogSeries: [],
            publishedOnly: [],
        }

        if (this.props.content.blogSeries)
            this.getBlogSeries();
        else
            this.getBlogsByStatus();

    }

    async getBlogsByStatus(): Promise<void> {
        try {
            const json = await API.graphql({
                query: customQueries.getBlogByBlogStatus,
                variables: { blogStatus: this.props.content.status, sortDirection: this.props.content.sortOrder, limit: this.props.content.limit },
                authMode: GRAPHQL_AUTH_MODE.API_KEY
            }) as GraphQLResult<GetBlogByBlogStatusQuery>;

            console.debug(json.data?.getBlogByBlogStatus);

            if (json.data?.getBlogByBlogStatus?.items) {
                this.setState({
                    blogs: json.data.getBlogByBlogStatus.items
                })
                const today = moment();
                if (this.state.blogs) {
                    const dateChecked =
                        this.state.blogs.filter(post =>
                            (post?.publishedDate && moment(post?.publishedDate, 'YYYY-MM-DD').isSameOrBefore(today)) && (post?.expirationDate === 'none' || moment(post?.expirationDate, 'YYYY-MM-DD').isAfter(today)))
                    console.debug(dateChecked)
                    this.setState({ publishedOnly: dateChecked })
                }
            }
        } catch (e) {
            console.error(e)
        }
    }

    async getBlogSeries(): Promise<void> {
        try {
            const json = await API.graphql({
                query: queries.getBlogSeries,
                variables: { id: this.props.content.blogSeries },
                authMode: GRAPHQL_AUTH_MODE.API_KEY
            }) as GraphQLResult<GetBlogSeriesQuery>;

            console.debug(json.data?.getBlogSeries);

            if (json.data?.getBlogSeries?.blogs?.items) {
                this.setState({
                    blogSeries: json.data.getBlogSeries.blogs.items
                })

                if (this.state.blogSeries) {
                    const today = moment();
                    const publishedOnly: NonNullable<NonNullable<NonNullable<NonNullable<NonNullable<GetBlogSeriesQuery['getBlogSeries']>['blogs']>['items']>[0]>['blogPost']>[] = [];
                    this.state.blogSeries.forEach(item => {
                        if ((item?.blogPost?.publishedDate && moment(item?.blogPost?.publishedDate, 'YYYY-MM-DD').isSameOrBefore(today))
                            && (item?.blogPost?.expirationDate === 'none' || moment(item?.blogPost?.expirationDate, 'YYYY-MM-DD').isAfter(today))
                            && (item?.blogPost.blogStatus === 'Live')) {
                            publishedOnly.push(item?.blogPost);
                        }
                    })
                    console.debug(publishedOnly)
                    this.setState({ publishedOnly })
                }
            }
        } catch (e) {
            console.error(e)
        }
    }

    fallbackToImage(fallbackUrl: string): EventHandler<SyntheticEvent<HTMLImageElement>> {
        return function (event: SyntheticEvent<HTMLImageElement>) {
            if (!event.currentTarget.src.endsWith(fallbackUrl)) {
                event.currentTarget.src = fallbackUrl;
                event.currentTarget.srcset = '';
            }
        };
    }

    render() {
        if (this.state.publishedOnly === null) {
            return null;
        }
        if (this.state.publishedOnly.length === 0) {
            return null
        }

        switch (this.props.content.style) {
            case 'hero':
                return <div className="blog-item">
                    <div className="blog" >
                        <h1 className="blog-h1" >{this.props.content.header1}</h1>
                        <div className="blog-blackbox" >
                            <div className="blog-post-title" >{this.state.publishedOnly[0]?.blogTitle}</div>
                            <div className="blogdiv blogauthor" >by <span className="author-underline">{this.state.publishedOnly[0]?.author}</span> on {this.state.publishedOnly[0]?.publishedDate}</div>
                            <div className="blogdiv blogdescription" >{this.state.publishedOnly[0]?.description}</div>
                            <div className="blogdiv2" >
                                <LinkButton size="lg" to={"/posts/" + this.state.publishedOnly[0]?.id}>Read More</LinkButton>
                            </div>
                            <div>
                                <Link to={"/posts/" + this.state.publishedOnly[0]?.id}>
                                    <img
                                        alt="TBD" className="blog-image-desktop"
                                        src={"/static/photos/blogs/baby-hero/" + this.state.publishedOnly[0]?.blogTitle?.replace(/\?|[']/g, "") + ".jpg"}
                                        onError={this.fallbackToImage('/static/photos/blogs/baby-hero/fallback.jpg')}
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className="mobile-image-container">
                            <Link to={"/posts/" + this.state.publishedOnly[0]?.id}>
                                <img alt="TBD" className="blog-image-mobile"
                                    src={"/static/photos/blogs/baby-hero/" + this.state.publishedOnly[0]?.blogTitle?.replace(/\?|[']/g, "") + ".jpg"}
                                    onError={this.fallbackToImage('/static/photos/blogs/baby-hero/fallback.jpg')} />
                            </Link>
                        </div>
                    </div>
                </div>
            case 'twoImage':
                return <div className="blog-item">
                    <div className="blog twoImage" >
                        <h1 className="blog-h1 twoImage" >{this.props.content.header1}</h1>
                        {this.state.publishedOnly.slice(0, 2).map((item, index) => {
                            return (
                                <div key={index} className="BlogTwoImageItem">
                                    <Link to={"/posts/" + item?.id}>
                                        <img alt={item?.id + " series image"}
                                            className="BlogSquareImage twoImage"
                                            src={"/static/photos/blogs/square/" + item?.blogTitle?.replace(/\?|[']/g, "") + ".jpg"}
                                            onError={this.fallbackToImage('/static/photos/blogs/square/fallback.jpg')} />
                                        <img alt={item?.id + " series image"}
                                            className="BlogBannerImage twoImage"
                                            src={"/static/photos/blogs/banner/" + item?.blogTitle?.replace(/\?|[']/g, "") + ".jpg"}
                                            onError={this.fallbackToImage('/static/photos/blogs/banner/fallback.jpg')} />
                                    </Link>
                                    <div className="BlogTwoImageTextContainer">
                                        <div className="blog-post-title twoImage">{item?.blogTitle}</div>
                                        <div className="blogauthor twoImage">by <span className="author-only">{item?.author}</span> on {item?.publishedDate}</div>
                                        <div className="blogdescription twoImage">{item?.description}</div>
                                        <Link className="blog-read-more" to={"/posts/" + item?.id}>Read More</Link>
                                    </div>
                                </div>
                            )
                        }
                        )}
                        {this.state.publishedOnly.length === 1 ? <div className="BlogTwoImageItem"></div> : null}
                        <LinkButton size="lg" className="inverted twoImageButton" to="/blog">View All Blogs</LinkButton>
                    </div>
                </div>

        }
    }
}

export default BlogItem
