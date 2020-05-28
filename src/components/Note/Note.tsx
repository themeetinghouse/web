
import React from 'react';
import RenderRouter from '../RenderRouter/RenderRouter'
import Amplify from 'aws-amplify';
import awsconfig from '../../../src/aws-exports';

Amplify.configure(awsconfig);

interface Props {
  data: any
  content?: any
}
interface State {
  data: any
  content: any

}
export default class VideoPlayer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      data: props.data,
      content: this.props.content
    }
  }
  componentDidUpdate(prevProps: Props) {
    if (this.props.data !== prevProps.data) {
      if (this.props.data === null) {
        this.setState({ content: null })
      }
      else {

        fetch('/static/content/notes.json').then(function (response) {
          return response.json();
        })
          .then((myJson) => {
            this.setState({ content: myJson });
          })
      }
    }
  }

  render() {
    return (
      <div>
        <RenderRouter data={this.props.data} content={this.state.content}></RenderRouter>
      </div>)
  }
}