
import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Button } from 'reactstrap';
import PropTypes from "prop-types";
import { withCookies } from 'react-cookie';
import "./BlogItem.scss"
import * as queries from '../../graphql/queries';
import Amplify, { API } from 'aws-amplify';
import awsmobile from '../../aws-exports';
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api/lib/types';

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
    overlayData: any
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
            overlayData: null
        }
        const getBlogByBlogStatus:any = API.graphql({
            query: queries.getBlogByBlogStatus,
            variables: { blogStatus: this.state.content.status, sortDirection: this.state.content.sortOrder, limit: 2 },
            authMode: GRAPHQL_AUTH_MODE.API_KEY
        });
        getBlogByBlogStatus.then((json: any) => {
            console.log("Success queries.getBlogByBlogStatus: " + json);
            console.log(json)
            this.setState({
                listData: json.data.getBlogByBlogStatus.items
            })
        }).catch((e: any) => { console.log(e) })
    }

    handleClick(data: any) {
        this.setState({
            overlayData: data

        })
    }

    navigateUrlNewWindow(to: string) {
        window.open(
          to,
          '_blank' // <- This is what makes it open in a new window.
        );
      }
    
    render() {
       
        if (this.state.content.style === "hero") {
            console.log(this.props.content.class)
            return (
                this.state.listData !== null ?
                    (this.state.listData.length === this.props.content.options.length) || (this.props.content.options.length === 0) ?
                        <div className="blog" >
                            
                            <h1 className="blog-h1" >{this.props.content.header1}</h1>
                            <div className="blog-blackbox" >
                                <div className="blog-post-title" >{this.state.listData[0].blogTitle}</div>
                                <div className="blogdiv blogauthor" >by <span className="author-underline">{this.state.listData[0].author}</span> on {this.state.listData[0].publishedDate}</div>
                                <div className="blogdiv blogdescription" >{this.state.listData[0].description}</div>
                                <div className="blogdiv2" >
                                    <Button size="lg" className="blogButton" >Read More</Button>
                                </div>
                                <div><img alt="TBD" className="blog-image-desktop" src={"/static/photos/blogs/baby-hero/baby-hero-" + this.state.listData[0].blogTitle + ".jpg"} /></div>
                            </div>
                            {
                            //image here
                            }
                        </div> : null
                    : null
            )
        }
        else return null
    }
}


export default withCookies(withRouter(BlogItem))
