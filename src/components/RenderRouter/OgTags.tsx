
import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Helmet } from "react-helmet";

interface Props extends RouteComponentProps {
    content: any;
}
interface State {
    content: any;
    ogImageHeight: number;
}
class Tags extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            content: props.content,
            ogImageHeight: 0
        }

    }

    componentDidMount() {
        this.getHeight(this.imgUrl(1920) + this.state.content.image.src)
    }

    imgUrl(size: any) {
        if (window.location.hostname === "localhost")
            return "https://localhost:3006"
        else if (window.location.hostname.includes("beta"))
            return "https://beta.themeetinghouse.com/cache/" + size
        else
            return "https://www.themeetinghouse.com/cache/" + size
    }

    getHeight(url: string) {
        const img = new Image();
        img.src = url;
        img.onload = (): void => this.setState({ ogImageHeight: img.height })
    }

    ogImage() {
        let imageUrl = null;
        try {
            imageUrl = this.imgUrl(1920) + this.state.content.image;
            return (this.state.ogImageHeight ?
                <Helmet>
                    <meta property="og:url" content={this.state.content.url} />
                    <meta property="og:title" content={this.state.content.title} />
                    <meta property="og:description" content={this.state.content.description} />
                    <meta property="og:type" content="website" />
                    <meta property="fb:app_id" content="" />

                    <meta property="og:image" content={imageUrl} />
                    <meta property="og:image:secure_url" content={imageUrl} />
                    <meta property="og:image:type" content="image/jpeg" />
                    <meta property="og:image:width" content="1920" />
                    <meta property="og:image:height" content={this.state.ogImageHeight.toString()} />
                </Helmet> : null)
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