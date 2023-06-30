import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import RenderRouter from '../RenderRouter/RenderRouter';
import { Analytics, Storage } from 'aws-amplify';

const seriesContent = Storage.get('savedContent/series-archive.json')
  .then(async (url) => {
    const response = await fetch(url);
    return response.json();
  })
  .catch((e) => console.log(e));

const videoContent = Storage.get('savedContent/video-archive.json')
  .then(async (url) => {
    const response = await fetch(url);
    return response.json();
  })
  .catch((e) => console.log(e));

interface Params {
  archiveType: string;
  subclass: string;
}

interface State {
  content: any;
}

export default class Archive extends React.Component<
  RouteComponentProps<Params>,
  State
> {
  constructor(props: RouteComponentProps<Params>) {
    super(props);
    this.state = {
      content: null,
    };
    let page: Promise<any>;
    const { archiveType } = this.props.match.params;
    if (archiveType === 'series') page = seriesContent;
    else page = videoContent;

    page.then((myJson) => this.setState({ content: myJson }));
  }

  componentDidMount() {
    Analytics.record({
      name: 'pageVisit',
      attributes: { page: 'archive' },
    }).catch((e: any) => {
      console.log(e);
    });
  }

  render() {
    return (
      <RenderRouter
        data={this.props.match.params.subclass}
        content={this.state.content}
      ></RenderRouter>
    );
  }
}
