
import React from 'react';

import { withRouter, RouteComponentProps } from 'react-router-dom';

import { Helmet } from 'react-helmet'
import ErrorBoundary from 'components/ErrorBoundry';

const HeaderItem = React.lazy(() => import('./HeaderItem'));
const InstagramItem = React.lazy(() => import('./InstagramItem'));
const SimpleItem = React.lazy(() => import('./SimpleItem'));
const SearchItem = React.lazy(() => import('./SearchItem'));
const IFrameItem = React.lazy(() => import('./IFrameItem'));
const WeatherItem = React.lazy(() => import('./WeatherItem'));
const HomeMenu = React.lazy(() => import('../Menu/HomeMenu'));
const HomeFooter = React.lazy(() => import('../Menu/HomeFooter'));
const FAQItem = React.lazy(() => import('./FAQItem'));
const ContentItem = React.lazy(() => import('./ContentItem'));
const GiveItem = React.lazy(() => import('./GiveItem'));
const Give2Item = React.lazy(() => import('./Give2Item'));
const ListItem = React.lazy(() => import('./ListItem'));
const VideoPlayer = React.lazy(() => import('./VideoPlayer'));
const VideoPlayerLive = React.lazy(() => import('./VideoPlayerLive'));
const SVGItem = React.lazy(() => import('./SVGItem'));
const HeroItem = React.lazy(() => import('./HeroItem'));
const TeachingItem = React.lazy(() => import('./TeachingItem'));
const DistanceGroupItem = React.lazy(() => import('./DistanceGroupItem'));
const SundayMorningItem = React.lazy(() => import('./SundayMorningItem'));
const HomeChurchItem = React.lazy(() => import('./HomeChurchItem'));
const FormItem = React.lazy(() => import('./FormItem'));
const GoContentItem = React.lazy(() => import('./GoContentItem'));
const PodcastItem = React.lazy(() => import('./PodcastItem'));

interface Props extends RouteComponentProps {
  content: any
  data: any
}
interface State {
  data: any
}

class RenderRouter extends React.Component<Props, State> {

  renderItemNow(item:any, index:any) {
    switch (item.type) {
      case "header": return (<HeaderItem key={index} content={item}></HeaderItem>)
      case "content":return (<ContentItem key={index} content={item}></ContentItem>)
      case "videoPlayer":return (<VideoPlayer data={this.props.data} key={index} content={item}></VideoPlayer>);
      case "liveVideoPlayer":return (<VideoPlayerLive data={this.props.data} key={index} content={item}></VideoPlayerLive>);
      case "list":return (<ListItem pageConfig={this.props.content.page.pageConfig} data={this.props.data} key={index} content={item}></ListItem>);
      case "svg":return (<SVGItem key={index} content={item}></SVGItem>);
      case "hero":return (<HeroItem data={this.props.data} key={index} content={item}></HeroItem>);
      case "goContent":return (<GoContentItem key={index} content={item}></GoContentItem>);
      case "teaching":return (<TeachingItem key={index} content={item}></TeachingItem>);
      case "sunday-morning":return (<SundayMorningItem key={index} content={item}></SundayMorningItem>);
      case "distance-groups":return (<DistanceGroupItem key={index} content={item}></DistanceGroupItem>);
      case "home-church":return (<HomeChurchItem key={index} content={item}></HomeChurchItem>);
      case "form":return (<FormItem key={index} content={item}></FormItem>);
      case "instagram":return (<InstagramItem key={index} content={item}></InstagramItem>);
      case "iframe":return (<IFrameItem key={index} content={item}></IFrameItem>);
      case "search":return (<SearchItem key={index} content={item}></SearchItem>);
      case "give":return (<GiveItem key={index} content={item}></GiveItem>);
      case "give2":return (<Give2Item key={index} content={item}></Give2Item>);
      case "faq":return (<FAQItem key={index} content={item}></FAQItem>);
      case "simple":return (<SimpleItem key={index} content={item}></SimpleItem>);
      case "podcasts":return (<PodcastItem data={this.props.data} key={index} content={item}></PodcastItem>)
      case "weather":return (<WeatherItem data={this.props.data} key={index} content={item}></WeatherItem>);
      default: return null
    }      

    
  }
  renderItem() {
    if (this.props.content != null)
      return this.props.content.page.content.map((item: any, index: any) => {
        console.log(item.type)
        return <ErrorBoundary>
          {this.renderItemNow(item,index)}
        </ErrorBoundary>

      })
    else return null
    }
  render() {
    return (

      this.props.content != null ? (
        <div>
          <Helmet>
            <title>{this.props.content.page.title}</title>
            <meta name="keywords" content={this.props.content.page.keywords}></meta>
            <meta name="description" content={this.props.content.page.description}></meta>
          </Helmet>
          <HomeMenu pageConfig={this.props.content.page.pageConfig} ></HomeMenu>
          {this.renderItem()}
          {this.props.content.page.pageConfig.showFooter ? <HomeFooter></HomeFooter> : null}
        </div>)
        : null
    )


  }
}
export default withRouter(RenderRouter);