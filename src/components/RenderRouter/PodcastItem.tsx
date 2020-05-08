
import React from 'react';
import "./PodcastItem.scss"

interface Props {
  content: any,
  data: any
}
interface State {
  data: any,
  content: any,
}

export default class PodcastItem extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      content: props.content,
      data: props.data
    }
  }

  render() {
    if (this.state.data.videoTypes === "adult-sunday") {
      return (
        <div className="PodcastItem">
          <div className="PodcastHeader"></div>

            <div className="PodcastItemDiv1">
            test
            </div>

            <div className="PodcastItemDiv1">
            test
            </div>
        </div>
      )
    } else {
      return null
    }
  }
}
