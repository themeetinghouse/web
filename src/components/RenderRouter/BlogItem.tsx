
import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Button } from 'reactstrap';
import PropTypes from "prop-types";
import { withCookies } from 'react-cookie';
import "./BlogItem.scss"
import * as queries from '../../graphql/queries';
import Amplify, { API } from 'aws-amplify';
import awsmobile from '../../aws-exports';
import format from 'date-fns/format';
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api/lib/types';
import { Helmet } from 'react-helmet';

//needs an changes from video content to blog content...

//import uuidv4 from 'uuid/v4'
Amplify.configure(awsmobile);

interface Props extends RouteComponentProps {
    content: any,
    cookies: any
}
interface State {
    content: any,
    listData: any,
    overlayData: any,
    publishedOnly: any
}
class BlogItem extends React.Component<Props, State> {

    static contextTypes = {
        router: PropTypes.object,
        history: PropTypes.object
    }

    constructor(props: Props, context: any) {
        super(props, context);
        console.log(context);
        this.state = {
            content: props.content,
            listData: null,
            overlayData: null,
            publishedOnly: null
        }
        const getBlogByBlogStatus: any = API.graphql({
            query: queries.getBlogByBlogStatus,
            variables: { blogStatus: this.state.content.status, sortDirection: this.state.content.sortOrder },
            authMode: GRAPHQL_AUTH_MODE.API_KEY
        });
        getBlogByBlogStatus.then((json: any) => {
            console.log("Success queries.getBlogByBlogStatus: " + json);
            console.log(json)
            this.setState({
                listData: json.data.getBlogByBlogStatus.items
            })
            const today = format(new Date(), "yyyy-MM-dd")
            const dateChecked = this.state.listData.filter((post: any) => post.publishedDate <= today && (post.expirationDate >= today || post.expirationDate))
            this.setState({ publishedOnly: dateChecked })
            console.log(this.state.publishedOnly)
        }).catch((e: any) => { console.log(e) })
    }

    navigateUrl(to: string) {
        window.location.href = to;
    }

    render() {
        if (this.state.content.style === "hero") {
            console.log(this.props.content.class)
            return (
                this.state.publishedOnly !== null ?
                    <div className="blog" >
                        <Helmet>
                            <meta property="og:url" content={"https://www.themeetinghouse.com/blogs"} />
                            <meta property="og:title" content={this.state.publishedOnly[0].blogTitle} />
                            <meta property="og:description" content="" />
                            <meta property="og:type" content="website" />
                            <meta property="fb:app_id" content="" />
                            <meta property="og:image" content={"https://www.themeetinghouse.com/static/photos/blogs/baby-hero/" + this.state.publishedOnly[0].blogTitle.replace(/\?|[']/g, "") + ".jpg"} />
                            <meta property="og:image:secure_url" content={"https://www.themeetinghouse.com/static/photos/blogs/baby-hero/" + this.state.publishedOnly[0].blogTitle.replace(/\?|[']/g, "") + ".jpg"} />
                            <meta property="og:image:type" content="image/jpeg" />
                        </Helmet>
                        <h1 className="blog-h1" >{this.props.content.header1}</h1>
                        <div className="blog-blackbox" >
                            <div className="blog-post-title" >{this.state.publishedOnly[0].blogTitle}</div>
                            <div className="blogdiv blogauthor" >by <span className="author-underline">{this.state.publishedOnly[0].author}</span> on {this.state.publishedOnly[0].publishedDate}</div>
                            <div className="blogdiv blogdescription" >{this.state.publishedOnly[0].description}</div>
                            <div className="blogdiv2" >
                                <Button size="lg" className="blogButton" onClick={() => this.navigateUrl("/posts/" + this.state.publishedOnly[0].id)}>Read More</Button>
                            </div>
                            <div><img alt="TBD" className="blog-image-desktop" src={"/static/photos/blogs/baby-hero/" + this.state.publishedOnly[0].blogTitle.replace(/\?|[']/g, "") + ".jpg"} onClick={() => this.navigateUrl("/posts/" + this.state.publishedOnly[0].id)} /></div>
                        </div>
                        <div className="mobile-image-container"><img alt="TBD" className="blog-image-mobile" src={"/static/photos/blogs/baby-hero/" + this.state.publishedOnly[0].blogTitle.replace(/\?|[']/g, "") + ".jpg"} onClick={() => this.navigateUrl("/posts/" + this.state.publishedOnly[0].id)} /></div>
                    </div> : null
            )
        } else if (this.state.content.style === "twoImage") {
            console.log(this.props.content.class)
            return (
                this.state.publishedOnly !== null ?
                    <div className="blog twoImage" >
                        <h1 className="blog-h1 twoImage" >{this.props.content.header1}</h1>
                        {this.state.publishedOnly.slice(0, 2).map((item: any, index: any) => {
                            return (
                                <div key={index} className="BlogTwoImageItem">
                                    <img alt={item.id + " series image"}
                                        className="BlogSquareImage twoImage"
                                        src={"/static/photos/blogs/square/" + item.blogTitle.replace(/\?|[']/g, "") + ".jpg"}
                                        onClick={() => this.navigateUrl("/posts/" + item.id)} />
                                    <img alt={item.id + " series image"}
                                        className="BlogBannerImage twoImage"
                                        src={"/static/photos/blogs/banner/" + item.blogTitle.replace(/\?|[']/g, "") + ".jpg"}
                                        onClick={() => this.navigateUrl("/posts/" + item.id)} />
                                    <div className="BlogTwoImageTextContainer">
                                        <div className="blog-post-title twoImage">{item.blogTitle}</div>
                                        <div className="blogauthor twoImage">by <span className="author-only">{item.author}</span> on {item.publishedDate}</div>
                                        <div className="blogdescription twoImage">{item.description}</div>
                                        <a className="blog-read-more" href={"/posts/" + item.id}>Read More</a>
                                    </div>
                                </div>
                            )
                        }
                        )}
                        <Button size="lg" className="twoImageButton" onClick={() => this.navigateUrl("/blog")}>View All Blogs</Button>
                    </div> : null
            )
        }
        else return null
    }
}


export default withCookies(withRouter(BlogItem))
