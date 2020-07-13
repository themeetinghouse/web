
import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { tmhImageUrl } from 'components/ScaledImage/ScaledImage';

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

    ogImage() {
        try {
            const imageUrl = tmhImageUrl(1920, this.state.content.image);
            return (
                <Helmet>
                    <meta property="og:url" content={this.state.content.url} />
                    <meta property="og:title" content={this.state.content.title} />
                    <meta property="og:description" content={this.state.content.description} />
                    <meta property="og:type" content="website" />
                    <meta property="fb:app_id" content="579712102531269" />

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