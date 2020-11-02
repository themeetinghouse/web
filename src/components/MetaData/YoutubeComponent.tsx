import './MetaData.css';
import React from 'react';
interface Props {
  videoId: string;
}
interface State {
  videoId: string;
}
export default class YoutubeComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      videoId: 'https://www.youtube.com/embed/' + props.videoId,
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps: Props) {
    // You don't have to do this check first, but it can help prevent an unneeded render
    if (
      'https://www.youtube.com/embed/' + nextProps.videoId !==
      this.state.videoId
    ) {
      this.setState({
        videoId: 'https://www.youtube.com/embed/' + nextProps.videoId,
      });
    }
  }
  render() {
    console.log('Set Youtube Video:' + this.state.videoId);
    return (
      <iframe
        title="Youtube"
        src={this.state.videoId}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    );
  }
}
