import React from 'react';
import RenderRouter from '../components/RenderRouter/RenderRouter'
import '../custom.scss';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import Amplify, { Analytics } from 'aws-amplify';
import awsconfig from '../../src/aws-exports';

Amplify.configure(awsconfig);

interface Props extends RouteComponentProps {
  match: any

}
interface State {
  content: any
}
class HomePage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      content: null
    }
    var jsonFile = props.match.params.id
    if (props.match.params.id === "")
      jsonFile = "homepage"
    if (props.match.params.id == null)
      jsonFile = "homepage"
    Analytics.record({
      name: 'pageVisit',
      attributes: { page: jsonFile }
    });
    fetch('./static/content/' + jsonFile.toLowerCase() + '.json').then(function (response) {
      return response.json();
    })
      .then((myJson) => {
        this.setState({ content: myJson });
      })
  }
  render() {
    return (
      
        <RenderRouter content={this.state.content}></RenderRouter>
     
    )
  }
}
export default withRouter(HomePage);

