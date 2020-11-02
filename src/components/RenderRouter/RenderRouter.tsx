import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ErrorBoundary from 'components/ErrorBoundry';
import ContentItem from './ContentItem';
import BlogItem from './BlogItem';
import ListItem from './ListItem';
import HeroItem from './HeroItem';
import HomeMenu from 'components/Menu/HomeMenu';
import HomeFooter from 'components/Menu/HomeFooter';

const HeaderItem = React.lazy(() => import('./HeaderItem'));
const InstagramItem = React.lazy(() => import('./InstagramItem'));
const SimpleItem = React.lazy(() => import('./SimpleItem'));
const SearchItem = React.lazy(() => import('./SearchItem'));
const IFrameItem = React.lazy(() => import('./IFrameItem'));
const WeatherItem = React.lazy(() => import('./WeatherItem'));
const FAQItem = React.lazy(() => import('./FAQItem'));
const GiveItem = React.lazy(() => import('./GiveItem'));
const Give2Item = React.lazy(() => import('./Give2Item'));
const VideoPlayer = React.lazy(() => import('./VideoPlayer'));
const VideoPlayerLive = React.lazy(() => import('./VideoPlayerLive'));
const VideoPlayerLiveLeadersDay = React.lazy(
  () => import('./VideoPlayerLive_leadersday')
);
const SVGItem = React.lazy(() => import('./SVGItem'));
const TeachingItem = React.lazy(() => import('./TeachingItem'));
const DistanceGroupItem = React.lazy(() => import('./DistanceGroupItem'));
const SundayMorningItem = React.lazy(() => import('./SundayMorningItem'));
const HomeChurchItem = React.lazy(() => import('./HomeChurchItem'));
const FormItem = React.lazy(() => import('./FormItem'));
const GoContentItem = React.lazy(() => import('./GoContentItem'));
const PodcastItem = React.lazy(() => import('./PodcastItem'));
const BlogReader = React.lazy(() => import('./BlogReader'));
const ArchiveItem = React.lazy(() => import('./ArchiveItem'));
const PaymentItem = React.lazy(() => import('./PaymentItem'));
const TeachingSearch = React.lazy(() => import('./TeachingSearch'));

interface Props extends RouteComponentProps {
  content: any;
  data: any;
}
interface State {
  data: any;
}

class RenderRouter extends React.Component<Props, State> {
  renderItemNow(item: any, index: any) {
    switch (item.type) {
      case 'og-tags':
        return null;
      case 'video-archive':
      case 'series-archive':
        return (
          <ArchiveItem
            pageConfig={this.props.content.page.pageConfig}
            key={index}
            content={item}
            data={this.props.data}
          ></ArchiveItem>
        );
      case 'header':
        return <HeaderItem key={index} content={item}></HeaderItem>;
      case 'content':
        return <ContentItem key={index} content={item}></ContentItem>;
      case 'videoPlayer':
        return (
          <VideoPlayer
            data={this.props.data}
            key={index}
            content={item}
          ></VideoPlayer>
        );
      case 'blog':
        return <BlogItem key={index} content={item}></BlogItem>;
      case 'post':
        return (
          <BlogReader
            data={this.props.data}
            key={index}
            content={item}
          ></BlogReader>
        );
      case 'liveVideoPlayer':
        return <VideoPlayerLive key={index} content={item}></VideoPlayerLive>;
      case 'liveVideoPlayer2':
        return (
          <VideoPlayerLiveLeadersDay
            key={index}
            content={item}
          ></VideoPlayerLiveLeadersDay>
        );
      case 'list':
        return (
          <ListItem
            pageConfig={this.props.content.page.pageConfig}
            data={this.props.data}
            key={index}
            content={item}
          ></ListItem>
        );
      case 'svg':
        return <SVGItem key={index} content={item}></SVGItem>;
      case 'hero':
        return (
          <HeroItem
            data={this.props.data}
            key={index}
            content={item}
          ></HeroItem>
        );
      case 'goContent':
        return <GoContentItem key={index} content={item}></GoContentItem>;
      case 'teaching':
        return <TeachingItem key={index} content={item}></TeachingItem>;
      case 'sunday-morning':
        return (
          <SundayMorningItem key={index} content={item}></SundayMorningItem>
        );
      case 'distance-groups':
        return (
          <DistanceGroupItem key={index} content={item}></DistanceGroupItem>
        );
      case 'home-church':
        return <HomeChurchItem key={index} content={item}></HomeChurchItem>;
      case 'form':
        return <FormItem key={index} content={item}></FormItem>;
      case 'instagram':
        return <InstagramItem key={index} content={item}></InstagramItem>;
      case 'iframe':
        return <IFrameItem key={index} content={item}></IFrameItem>;
      case 'search':
        return <SearchItem key={index} content={item}></SearchItem>;
      case 'payment':
        return <PaymentItem key={index} content={item}></PaymentItem>;
      case 'give':
        return <GiveItem key={index} content={item}></GiveItem>;
      case 'give2':
        return <Give2Item key={index} content={item}></Give2Item>;
      case 'faq':
        return <FAQItem key={index} content={item}></FAQItem>;
      case 'simple':
        return <SimpleItem key={index} content={item}></SimpleItem>;
      case 'podcasts':
        return (
          <PodcastItem
            data={this.props.data}
            key={index}
            content={item}
          ></PodcastItem>
        );
      case 'weather':
        return (
          <WeatherItem
            data={this.props.data}
            key={index}
            content={item}
          ></WeatherItem>
        );
      case 'teachingsearch':
        return <TeachingSearch key={index} content={item}></TeachingSearch>;
      default:
        return null;
    }
  }
  renderItem() {
    if (this.props.content != null)
      return this.props.content.page.content.map((item: any, index: any) => {
        console.log(item.type);
        return (
          <ErrorBoundary key={index}>
            {this.renderItemNow(item, index)}
          </ErrorBoundary>
        );
      });
    else return null;
  }
  render() {
    return this.props.content != null ? (
      <div>
        <Helmet>
          <title>{this.props.content.page.title}</title>
          <meta
            name="keywords"
            content={this.props.content.page.keywords}
          ></meta>
          <meta
            name="description"
            content={this.props.content.page.description}
          ></meta>
        </Helmet>
        <HomeMenu pageConfig={this.props.content.page.pageConfig}></HomeMenu>
        {this.renderItem()}
        {this.props.content.page.pageConfig.showFooter ? (
          <HomeFooter></HomeFooter>
        ) : null}
      </div>
    ) : null;
  }
}
export default withRouter(RenderRouter);
