import React from 'react';
import RenderRouter from '../RenderRouter/RenderRouter'
import Amplify from 'aws-amplify';
import awsconfig from '../../../src/aws-exports';

Amplify.configure(awsconfig);

interface Props {
    data: any
    queryType: 'video' | 'series'
}
interface State {
    content: any
}
export default class VideoPlayer extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            content: null
        }
        switch (this.props.queryType) {
            case 'video':
                fetch('/static/content/video-archive.json').then(function (response) {
                    return response.json();
                }).then((myJson) => this.setState({ content: myJson }))
                break;

            case 'series':
                fetch('/static/content/series-archive.json').then(function (response) {
                    return response.json();
                }).then((myJson) => this.setState({ content: myJson }))
                break;
        }
    }

    render() {
        return (
            <div>
                <RenderRouter data={this.props.data} content={this.state.content}></RenderRouter>
            </div>)
    }
}