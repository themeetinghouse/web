import React from 'react';
import RenderRouter from '../components/RenderRouter/RenderRouter'
import '../custom.scss';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import Amplify, { Analytics } from 'aws-amplify';
import awsconfig from '../../src/aws-exports';
import VideoOverlay from '../components/VideoOverlay/VideoOverlay'
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
      jsonFile = "video-player"
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
    if (jsonFile === "test") {
      fetch('/static/content/' + jsonFile.toLowerCase() + '.json').then(function (response) {
        console.log(response)
        return response.json();
      })
        .then((myJson) => {
          console.log(myJson)
          this.setState({ content: myJson });
          myJson.page.test.map((items:any) => {
            fetch('/static/content/' + items.toLowerCase() + '.json').then(function (response) {
              console.log(response)
              return response.json();
            })
              .then((myJson2) => {
                var c=this.state.content
                c.page.content=c.page.content.concat(myJson2.page.content)
                this.setState({ content:  c});
              }).catch((e) => { console.log(e) })
          })
        }).catch((e) => { console.log(e) })
    } else {
      fetch('/static/content/' + jsonFile.toLowerCase() + '.json').then(function (response) {
        console.log(response)
        return response.json();
      })
        .then((myJson) => {

          this.setState({ content: myJson });
        }).catch((e) => { console.log(e) })
    }
    this.navigateHome = this.navigateHome.bind(this);
  }
  navigateHome() {
    this.props.history.push("/", "as")
    const unblock = this.props.history.block('Are you sure you want to leave this page?');
    unblock();

  }
  render() {
    if (this.props.isVideo === "true")
      return <VideoOverlay onClose={() => { this.navigateHome() }} data={{ id: this.props.match.params.episode }}></VideoOverlay>
    else if (this.state.content && this.state.content.page.pageConfig.isPopup === true)
      return <VideoOverlay onClose={() => { this.navigateHome() }} content={this.state.content} data={{ id: this.props.match.params.episode }}></VideoOverlay>
    else
      return (
        <RenderRouter data={null} content={this.state.content}></RenderRouter>

      )
  }
}
export default withRouter(HomePage);

