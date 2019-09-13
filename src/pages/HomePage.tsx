import React from 'react';
import RenderRouter from '../components/RenderRouter/RenderRouter'
import '../custom.scss';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import Amplify, { Analytics } from 'aws-amplify';
import awsconfig from '../../src/aws-exports';

Amplify.configure(awsconfig);

interface Props extends RouteComponentProps {
  match: any
  isVideo?: string
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
    console.log(props)
    var jsonFile
    if (this.props.isVideo === "true") {
      jsonFile = "homepage"
    }
    else {
      jsonFile = props.match.params.id
      if (props.match.params.id === "")
        jsonFile = "homepage"
      if (props.match.params.id == null)
        jsonFile = "homepage"
    }
    Analytics.record({
      name: 'pageVisit',
      attributes: { page: jsonFile }
    });
    fetch('/static/content/' + jsonFile.toLowerCase() + '.json').then(function (response) {
      console.log(response)
      return response.json();
    })
      .then((myJson) => {
      
        this.setState({ content: myJson });
      }).catch((e)=>{console.log(e)})
  }
  render() {
    return (

      <RenderRouter data={null} content={this.state.content}></RenderRouter>

    )
  }
}
export default withRouter(HomePage);

