
import React from 'react';

import { withRouter, RouteComponentProps } from 'react-router-dom';

import { Helmet } from 'react-helmet'

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

  renderItem() {
    if (this.props.content != null)
      return this.props.content.page.content.map((item: any, index: any) => {
        console.log(item.type)
        if (item.type === "header")
          return (<HeaderItem key={index} content={item}></HeaderItem>)
        else if (item.type === "content")
          return (<ContentItem key={index} content={item}></ContentItem>);
        else if (item.type === "videoPlayer")
          return (<VideoPlayer data={this.props.data} key={index} content={item}></VideoPlayer>);
        else if (item.type === "liveVideoPlayer")
          return (<VideoPlayerLive data={this.props.data} key={index} content={item}></VideoPlayerLive>);
        else if (item.type === "list")
          return (<ListItem pageConfig={this.props.content.page.pageConfig} data={this.props.data} key={index} content={item}></ListItem>);
        else if (item.type === "svg")
          return (<SVGItem key={index} content={item}></SVGItem>);
        else if (item.type === "hero")
          return (<HeroItem data={this.props.data} key={index} content={item}></HeroItem>);
        else if (item.type === "goContent")
          return (<GoContentItem key={index} content={item}></GoContentItem>);
        else if (item.type === "teaching")
          return (<TeachingItem key={index} content={item}></TeachingItem>);
        else if (item.type === "sunday-morning")
          return (<SundayMorningItem key={index} content={item}></SundayMorningItem>);
        else if (item.type === "distance-groups")
          return (<DistanceGroupItem key={index} content={item}></DistanceGroupItem>);
        else if (item.type === "home-church")
          return (<HomeChurchItem key={index} content={item}></HomeChurchItem>);
        else if (item.type === "form")
          return (<FormItem key={index} content={item}></FormItem>);
        else if (item.type === "instagram")
          return (<InstagramItem key={index} content={item}></InstagramItem>);
        else if (item.type === "iframe")
          return (<IFrameItem key={index} content={item}></IFrameItem>);
        else if (item.type === "search")
          return (<SearchItem key={index} content={item}></SearchItem>);
        else if (item.type === "give")
          return (<GiveItem key={index} content={item}></GiveItem>);
        else if (item.type === "give2")
          return (<Give2Item key={index} content={item}></Give2Item>);
        else if (item.type === "faq")
          return (<FAQItem key={index} content={item}></FAQItem>);
        else if (item.type === "simple")
          return (<SimpleItem key={index} content={item}></SimpleItem>);
        else if (item.type === "podcasts")
          return (<PodcastItem data={this.props.data} key={index} content={item}></PodcastItem>)
        else if (item.type === "weather")
          return (<WeatherItem data={this.props.data} key={index} content={item}></WeatherItem>);
        else return null
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