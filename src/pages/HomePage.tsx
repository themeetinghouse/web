import React from 'react';
import RenderRouter from '../components/RenderRouter/RenderRouter'
import '../custom.scss';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import Amplify, { Analytics } from 'aws-amplify';
import awsconfig from '../../src/aws-exports';
import VideoOverlay from '../components/VideoOverlay/VideoOverlay'
import ReactGA from 'react-ga';
Amplify.configure(awsconfig);
ReactGA.initialize('UA-4554612-19');
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
    fetch('/static/data/redirect.json').then(function (response) {
      return response.json();
    })
      .then((myJson) => {
        console.log(props.match.params.id)
        ReactGA.pageview(window.location.pathname + window.location.search);
        Analytics.record({
          name: 'pageForward',
          attributes: { page: props.match.params.id }
        });
        var forwardTo = myJson.filter((a: any) => { return a.id === props.match.params.id })
        console.log(forwardTo)
        if (forwardTo.length > 0)
          this.navigateUrl(forwardTo[0].to)
      })

    var jsonFile:any
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
    ReactGA.pageview(window.location.pathname + window.location.search);
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
          myJson.page.test.forEach((items: any) => {
            fetch('/static/content/' + items.toLowerCase() + '.json').then(function (response) {
              console.log(response)
              return response.json();
            })
              .then((myJson2) => {
                var c = this.state.content
                c.page.content = c.page.content.concat(myJson2.page.content)
                this.setState({ content: c });
              }).catch((e) => { console.log(e) })
          })
        }).catch((e) => { 
          console.log(e) 
        })
    } else {
      fetch('/static/content/' + jsonFile.toLowerCase() + '.json').then(function (response) {
        console.log(response)
        return response.json();
      })
        .then((myJson) => {

          this.setState({ content: myJson });
        }).catch((e) => { 
          Analytics.record({
            name: 'error',
            attributes: { page: jsonFile }
          });
          fetch('/static/content/404.json').then(function (response) {
            console.log(response)
            return response.json();
          })
            .then((myJson) => {
    
              this.setState({ content: myJson });
            }).catch((e) => { 
              console.log(e)
            })
        })
    }
    this.navigateHome = this.navigateHome.bind(this);
  }
  navigateUrl(to:string){
    window.location.href=to;
  }

  navigateTo(uri: any) {
    console.log("Navigate to:"+ uri)
    this.props.history.push(uri, "as")
    const unblock = this.props.history.block('Are you sure you want to leave this page?');
    unblock();

  }
  navigateHome(to:any) {
    this.props.history.push(to, "as")
    const unblock = this.props.history.block('Are you sure you want to leave this page?');
    unblock();

  }
  render() {
    if (this.props.isVideo === "true")
      return <VideoOverlay onClose={() => { this.navigateHome("/") }} data={{ id: this.props.match.params.episode }}></VideoOverlay>
    else if (this.state.content && this.state.content.page.pageConfig.isPopup === true)
      return <VideoOverlay onClose={() => { this.navigateHome(this.state.content.page.pageConfig.navigateOnPopupClose) }} content={this.state.content} data={{ id: this.props.match.params.episode }}></VideoOverlay>
    else
      return (
        <RenderRouter data={null} content={this.state.content}></RenderRouter>

      )
  }
}
export default withRouter(HomePage);

