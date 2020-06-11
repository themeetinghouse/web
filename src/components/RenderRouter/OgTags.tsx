
import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Helmet } from "react-helmet";

interface Props extends RouteComponentProps {
    content: any;
}
interface State {
    content: any;
}
class Tags extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            content: props.content
        }

    }

    imgUrl(size: any) {
        if (window.location.hostname === "localhost")
            return "https://localhost:3006"
        else if (window.location.hostname.includes("beta"))
            return "https://beta.themeetinghouse.com/cache/" + size
        else
            return "https://www.themeetinghouse.com/cache/" + size
    }

    ogImage() {
        let imageUrl = null;
        try {
            imageUrl = this.imgUrl(1920) + this.state.content.image;
            return (
                <Helmet>
                    <meta property="og:url" content={this.state.content.url} />
                    <meta property="og:title" content={this.state.content.title} />
                    <meta property="og:description" content={this.state.content.description} />
                    <meta property="og:type" content="website" />
                    <meta property="fb:app_id" content="" />

                    <meta property="og:image" content={imageUrl} />
                    <meta property="og:image:secure_url" content={imageUrl} />
                    <meta property="og:image:type" content="image/jpeg" />
                </Helmet>
            )
        } catch (e) {
            console.error(e)
            return null
        }
    }

    render() {
        return this.ogImage()
    }
}

export default withRouter(Tags)