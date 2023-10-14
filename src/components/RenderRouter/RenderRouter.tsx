import ErrorBoundary from 'components/ErrorBoundry';
import HomeFooter from 'components/Menu/HomeFooter';
import HomeMenu from 'components/Menu/HomeMenu';
import HorizMenu from 'components/Menu/HorizMenu';
import TMHCarousel from 'components/TMHCarousel/TMHCarousel';
import moment from 'moment';
import React from 'react';
import { Helmet } from 'react-helmet';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import AppPromo from '../AppPromo/AppPromo';
import BlogItem from './BlogItem';
import ContentItem from './ContentItem';
import EventPage from './EventPage';
import { GEProvider } from './GiveComponents/GEContext';
import HeroItem from './HeroItem';
import ListItem from './ListItem';
import RenderRouterItemWrapper from './RenderRouterItemWrapper';
import EditorToolbar from 'pages/admin/Editor/EditorToolbar';
const CombinedMap = React.lazy(() => import('./CombinedMap'));
const SimpleItem = React.lazy(() => import('./SimpleItem'));
const SearchItem = React.lazy(() => import('./SearchItem'));
const IFrameItem = React.lazy(() => import('./IFrameItem'));
const WeatherItem = React.lazy(() => import('./WeatherItem'));
const FAQItem = React.lazy(() => import('./FAQItem'));
const GiveItem = React.lazy(() => import('./GiveItem'));
const NewGiveItem = React.lazy(() => import('./NewGiveItem'));
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
const RegatherItem = React.lazy(() => import('./RegatherItem'));

const VideoPlayerLiveLeadersDay = React.lazy(
  () => import('./VideoPlayerLive_leadersday')
);
const SearchResult = React.lazy(() => import('./SearchResult'));

interface Props extends RouteComponentProps {
  content: any;
  data: any;
}
type State = { content: any };
export function RenderItem({
  item,
  index,
  content,
  data,
}: {
  item: any;
  index: any;
  content?: any;
  data?: any;
}) {
  switch (item.type) {
    case 'timer':
      if (moment(item.after) > moment())
        return item.contentNow.map((item: any, index2: any) => (
          <RenderItem key={index2} item={item} index={index + 'now' + index2} />
        ));
      else
        return item.contentFuture.map((item: any, index2: any) => (
          <RenderItem key={index2} item={item} index={index + 'now' + index2} />
        ));
    case 'video-archive':
    case 'series-archive':
      return (
        <ArchiveItem
          pageConfig={content.page.pageConfig}
          key={index}
          content={item}
          data={data}
        />
      );
    case 'content':
      return <ContentItem nextItem={index + 1} key={index} content={item} />;
    case 'videoPlayer':
      return <VideoPlayer data={data} key={index} content={item} />;
    case 'blog':
      return <BlogItem key={index} content={item} />;
    case 'post':
      return <BlogReader data={data} key={index} style={item.style} />;
    case 'liveVideoPlayer':
      return <VideoPlayerLive key={index} content={item} />;
    case 'liveVideoPlayer2':
      return <VideoPlayerLiveLeadersDay key={index} content={item} />;
    case 'horizontal-list':
      return <TMHCarousel key={index} content={item} />;
    case 'map':
      return <CombinedMap key={index} content={item} />;
    case 'list':
      return (
        <ListItem
          pageConfig={content?.page?.pageConfig}
          data={data}
          key={index}
          content={item}
        />
      );
    case 'hero':
      return <HeroItem data={data} key={index} content={item} />;
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
    case 'give2':
      console.log('give2');
      return (
        <GEProvider>
          <NewGiveItem content={item} />
        </GEProvider>
      );
    case 'give':
      return <GiveItem key={index} content={item} />;
    case 'regather':
      return <RegatherItem key={index} content={item} />;
    case 'event':
      return <EventPage key={index} />;
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
      return <WeatherItem data={data} key={index} content={item} />;
    case 'teachingsearch':
      return <TeachingSearch key={index} content={item} />;
    case 'podcast-player':
      return <PodcastPlayer key={index} data={data} />;
    default:
      return null;
  }
}
class RenderRouter extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { content: props.content };
  }
  renderItemNow(item: any, index: any): JSX.Element | null {
    switch (item.type) {
      case 'timer':
        if (moment(item.after) > moment())
          return item.contentNow.map((item: any, index2: any) =>
            this.renderItemNow(item, index + 'now' + index2)
          );
        else
          return item.contentFuture.map((item: any, index2: any) =>
            this.renderItemNow(item, index + 'now' + index2)
          );
      case 'video-archive':
      case 'series-archive':
        return (
          <ArchiveItem
            pageConfig={this.state.content.page.pageConfig}
            key={index}
            content={item}
            data={this.props.data}
          />
        );
      case 'content':
        return <ContentItem nextItem={index + 1} key={index} content={item} />;
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
      case 'horizontal-list':
        return <TMHCarousel key={index} content={item} />;
      case 'map':
        return <CombinedMap key={index} content={item} />;
      case 'list':
        return (
          <ListItem
            pageConfig={this.state.content.page.pageConfig}
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
      case 'give2':
        return (
          <GEProvider>
            <NewGiveItem content={item} />
          </GEProvider>
        );
      case 'give':
        return <GiveItem key={index} content={item} />;
      case 'regather':
        return <RegatherItem key={index} content={item} />;
      case 'event':
        return <EventPage key={index} />;
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
  componentDidUpdate(prevProps: Props) {
    if (prevProps.content !== this.props.content) {
      this.setState({ content: this.props.content });
    }
  }
  renderItem() {
    if (this.state.content != null) {
      return this.state.content.page.content.map((item: any, index: any) => {
        console.log({ type: item.type });
        return (
          <ErrorBoundary key={index}>
            <RenderRouterItemWrapper index={index}>
              <ErrorBoundary>
                <EditorToolbar item={item} index={index} />
              </ErrorBoundary>
              <ErrorBoundary>{this.renderItemNow(item, index)}</ErrorBoundary>
            </RenderRouterItemWrapper>
          </ErrorBoundary>
        );
      });
    } else return null;
  }
  render() {
    if (!this.state.content) return null;
    return (
      <>
        <Helmet>
          <title>{this.state.content.page.title}</title>
          <meta name="keywords" content={this.state.content.page.keywords} />
          <meta
            name="description"
            content={this.state.content.page.description}
          />
        </Helmet>

        {this.renderItem()}
        {this.state.content.page.pageConfig.showFooter ? <HomeFooter /> : null}
        {this.state.content.page.name === 'notes' ? <AppPromo /> : null}
        {this.state.content.page.pageConfig.menuType == 'horiz' ? (
          <HorizMenu navigationItems={[]} toggle={() => null} open={false} />
        ) : (
          <HomeMenu pageConfig={this.state.content.page.pageConfig} />
        )}
      </>
    );
  }
}
export default withRouter(RenderRouter);
