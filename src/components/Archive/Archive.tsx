import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import RenderRouter from '../RenderRouter/RenderRouter'
import Amplify from 'aws-amplify';
import awsconfig from '../../../src/aws-exports';

Amplify.configure(awsconfig);

interface Params {
    archiveType?: string;
    subclass?: string;
}

interface State {
    content: any
}
export default class Archive extends React.Component<RouteComponentProps<Params>, State> {
    constructor(props: RouteComponentProps<Params>) {
        super(props);
        this.state = {
            content: null
        }
        let pageType = ''
        if (this.props.match.params.archiveType === 'series')
            pageType = 'series-archive'
        else if (this.props.match.params.archiveType === 'video')
            pageType = 'video-archive'

        fetch(`/static/content/${pageType}.json`).then(function (response) {
            return response.json();
        }).then((myJson) => this.setState({ content: myJson }))
    }

    render() {
        return (
            <div>
                <RenderRouter data={this.props.match.params.subclass} content={this.state.content}></RenderRouter>
            </div>)
    }
}