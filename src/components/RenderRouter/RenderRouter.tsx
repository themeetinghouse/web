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
import AppPromo from '../AppPromo/AppPromo';

const SimpleItem = React.lazy(() => import('./SimpleItem'));
const SearchItem = React.lazy(() => import('./SearchItem'));
const IFrameItem = React.lazy(() => import('./IFrameItem'));
const WeatherItem = React.lazy(() => import('./WeatherItem'));
const FAQItem = React.lazy(() => import('./FAQItem'));
const GiveItem = React.lazy(() => import('./GiveItem'));
const Give2Item = React.lazy(() => import('./Give2Item'));
const VideoPlayer = React.lazy(() => import('./VideoPlayer'));
const VideoPlayerLive = React.lazy(() => import('./VideoPlayerLive'));
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
const PodcastPlayer = React.lazy(() => import('./PodcastPlayer'));
const VideoPlayerLiveLeadersDay = React.lazy(
  () => import('./VideoPlayerLive_leadersday')
);
const SearchResult = React.lazy(() => import('./SearchResult'));

interface Props extends RouteComponentProps {
  content: any;
  data: any;
}

class RenderRouter extends React.Component<Props> {
  renderItemNow(item: any, index: any) {
    switch (item.type) {
      case 'video-archive':
      case 'series-archive':
        return (
          <ArchiveItem
            pageConfig={this.props.content.page.pageConfig}
            key={index}
            content={item}
            data={this.props.data}
          />
        );
      case 'content':
        return <ContentItem key={index} content={item} />;
      case 'videoPlayer':
        return (
          <VideoPlayer data={this.props.data} key={index} content={item} />
        );
      case 'blog':
        return <BlogItem key={index} content={item} />;
      case 'post':
        return (
          <BlogReader data={this.props.data} key={index} style={item.style} />
        );
      case 'liveVideoPlayer':
        return <VideoPlayerLive key={index} content={item} />;
      case 'liveVideoPlayer2':
        return <VideoPlayerLiveLeadersDay key={index} content={item} />;
      case 'list':
        return (
          <ListItem
            pageConfig={this.props.content.page.pageConfig}
            data={this.props.data}
            key={index}
            content={item}
          />
        );
      case 'hero':
        return <HeroItem data={this.props.data} key={index} content={item} />;
      case 'goContent':
      case 'goLink':
        return <GoContentItem key={index} content={item} />;
      case 'teaching':
        return <TeachingItem key={index} content={item} />;
      case 'sunday-morning':
        return <SundayMorningItem key={index} content={item} />;
      case 'distance-groups':
        return <DistanceGroupItem key={index} content={item} />;
      case 'home-church':
        return <HomeChurchItem key={index} content={item} />;
      case 'form':
        return <FormItem key={index} content={item} />;
      case 'iframe':
        return <IFrameItem key={index} content={item} />;
      case 'search':
        return <SearchItem key={index} content={item} />;
      case 'payment':
        return <PaymentItem key={index} content={item} />;
      case 'give':
        return <GiveItem key={index} content={item} />;
      case 'searchResult':
        return <SearchResult key={index} content={item} />;
      case 'give2':
        return <Give2Item key={index} content={item} />;
      case 'faq':
        return <FAQItem key={index} content={item} />;
      case 'simple':
        return <SimpleItem key={index} content={item} />;
      case 'podcasts':
        return <PodcastItem key={index} content={item} />;
      case 'weather':
        return (
          <WeatherItem data={this.props.data} key={index} content={item} />
        );
      case 'teachingsearch':
        return <TeachingSearch key={index} content={item} />;
      case 'podcast-player':
        return <PodcastPlayer key={index} data={this.props.data} />;
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
    if (!this.props.content) return null;

    return (
      <>
        <Helmet>
          <title>{this.props.content.page.title}</title>
          <meta name="keywords" content={this.props.content.page.keywords} />
          <meta
            name="description"
            content={this.props.content.page.description}
          />
        </Helmet>
        <HomeMenu pageConfig={this.props.content.page.pageConfig} />
        {this.renderItem()}
        {this.props.content.page.pageConfig.showFooter ? <HomeFooter /> : null}
        {this.props.content.page.name === 'notes' ? <AppPromo /> : null}
      </>
    );
  }
}
export default withRouter(RenderRouter);
