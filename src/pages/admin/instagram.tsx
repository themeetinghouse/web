import React from 'react';
import { AmplifyAuthenticator } from '@aws-amplify/ui-react';
import Amplify from 'aws-amplify';
import awsmobile from '../../aws-exports';

Amplify.configure(awsmobile);
const federated = {
    facebookAppId: '579712102531269'
};

const locations = [
    "themeetinghousealliston",
    "tmhsandbanks",
    "tmhancaster",
    "tmhbrampton",
    "tmhbrantford",
    "tmhburlington",
    "tmhdowntownham",
    "tmhdowntowntoronto",
    "tmhhammountain",
    "tmheasttoronto",
    "tmhhighpark",
    "tmhkitchener",
    "themeetinghouseldn",
    "newmarket.tmh",
    "tmhoakville",
    "tmhottawa",
    "tmhrichmond",
    "tmhuptowntoronto",
    "tmhwaterloo",
]

class Index extends React.Component {

    getPosts() {
        for (const location of locations) {
            this.getPostsForLocation(location);
        }
    }

    async getPostsForLocation(location: string): Promise<void> {

        const url = `https://www.instagram.com/${location}/?__a=1`;
        const images: any[] = [];
        try {
            const res = await fetch(url);
            if (res.status !== 200) {
                console.error({ 'Error': res.status })
            }
            const json = await res.json();
            const media = json.graphql.user.edge_owner_to_timeline_media.edges;
            media.forEach((elem: any) => {
                if (elem.node['__typename'] === 'GraphImage' || elem.node['__typename'] === 'GraphSidecar') {
                    images.push({
                        thumbnails: elem.node.thumbnail_resources,
                        id: elem.node.shortcode,
                        alt: elem.node.accessibility_caption,
                        locationId: location
                    })
                }
            })
            console.debug(images)
        } catch (e) {
            console.error(e)
        }
    }

    render() {
        return (
            <AmplifyAuthenticator federated={federated}>
                <button id="get-posts-button" onClick={() => this.getPosts()}>Get Posts</button>
            </AmplifyAuthenticator>
        );
    }
}
export default Index; 