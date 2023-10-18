import React, { EventHandler, SyntheticEvent } from 'react';
import { RouteComponentProps, useHistory } from 'react-router-dom';
import { withCookies } from 'react-cookie';
import './TeachingItem.scss';
import * as customQueries from '../../graphql-custom/customQueries';
import { API } from 'aws-amplify';
import VideoOverlay from '../VideoOverlay/VideoOverlay';
import { LinkButton } from 'components/Link/Link';
import { Button } from 'reactstrap';
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import FadeImage from 'components/ScaledImage/FadeImage';

interface Props {
  content: any;
  cookies: any;
}
interface TeachingItemProps extends Props {
  history: RouteComponentProps['history'];
}
interface State {
  content: any;
  selection: string | null;
  listData: any;
  teachingId: any;
  overlayData: any;
}
class TeachingItem extends React.Component<TeachingItemProps, State> {
  constructor(props: TeachingItemProps) {
    super(props);
    const { cookies } = props;
    if (cookies.get(this.props.content.group) == null)
      cookies.set(this.props.content.group, this.props.content.options[0], {
        path: '/',
      });
    const teachingId =
      this.props.content.options.length <= 1
        ? 0
        : this.props.content.options.indexOf(
            cookies.get(this.props.content.group)
          );
    this.state = {
      content: props.content,
      selection: cookies.get(this.props.content.group),
      teachingId: teachingId,
      listData: null,
      overlayData: null,
    };
    if (this.props.content.class === 'teaching-sunday') {
      const getVideoByVideoType: any = API.graphql({
        query: customQueries.getVideoByVideoType,
        variables: {
          sortDirection: this.state.content.sortOrder,
          limit: 2,
          videoTypes: this.state.content.subclass,
          publishedDate: { lt: 'a' },
        },
        authMode: GRAPHQL_AUTH_MODE.API_KEY,
      });
      getVideoByVideoType
        .then((json: any) => {
          console.log('Success customQueries.getVideoByVideoType: ' + json);
          console.log(json);
          this.setState({
            listData: json.data.getVideoByVideoType.items,
          });
        })
        .catch((e: any) => {
          console.log(e);
        });
    } else if (this.props.content.class === 'bbq') {
      const getVideoByVideoType: any = API.graphql({
        query: customQueries.getVideoByVideoType,
        variables: {
          sortDirection: this.state.content.sortOrder,
          limit: 2,
          videoTypes: this.state.content.subclass,
          publishedDate: { lt: 'a' },
        },
        authMode: GRAPHQL_AUTH_MODE.API_KEY,
      });
      getVideoByVideoType
        .then((json: any) => {
          console.log('Success customQueries.getVideoByVideoType: ' + json);
          console.log(json);
          this.setState({
            listData: json.data.getVideoByVideoType.items,
          });
        })
        .catch((e: any) => {
          console.log(e);
        });
    } else if (this.props.content.class === 'teaching-kids-youth') {
      console.log('teaching-kids-youth');
      const getVideoByVideoType1: any = API.graphql({
        query: customQueries.getVideoByVideoType,
        variables: {
          sortDirection: this.state.content.sortOrder,
          limit: 1,
          videoTypes: 'ky-kids',
          publishedDate: { lt: 'a' },
        },
        authMode: GRAPHQL_AUTH_MODE.API_KEY,
      });
      const getVideoByVideoType2: any = API.graphql({
        query: customQueries.getVideoByVideoType,
        variables: {
          sortDirection: this.state.content.sortOrder,
          limit: 1,
          videoTypes: 'ky-jrhigh',
          publishedDate: { lt: 'a' },
        },
        authMode: GRAPHQL_AUTH_MODE.API_KEY,
      });
      const getVideoByVideoType3: any = API.graphql({
        query: customQueries.getVideoByVideoType,
        variables: {
          sortDirection: this.state.content.sortOrder,
          limit: 1,
          videoTypes: 'ky-youth',
          publishedDate: { lt: 'a' },
        },
        authMode: GRAPHQL_AUTH_MODE.API_KEY,
      });
      const getVideoByVideoType4: any = API.graphql({
        query: customQueries.getVideoByVideoType,
        variables: {
          sortDirection: this.state.content.sortOrder,
          limit: 1,
          videoTypes: 'ky-srhigh',
          publishedDate: { lt: 'a' },
        },
        authMode: GRAPHQL_AUTH_MODE.API_KEY,
      });
      getVideoByVideoType1
        .then((json1: any) => {
          console.log({ 'Success customQueries.getVideoByVideoType: ': json1 });
          this.setState({
            listData: json1.data.getVideoByVideoType.items,
          });
          getVideoByVideoType2
            .then((json2: any) => {
              console.log({
                'Success customQueries.getVideoByVideoType: ': json2,
              });
              this.setState({
                listData: this.state.listData.concat(
                  json2.data.getVideoByVideoType.items
                ),
              });
              getVideoByVideoType3
                .then((json3: any) => {
                  console.log({
                    'Success customQueries.getVideoByVideoType: ': json3,
                  });
                  this.setState({
                    listData: this.state.listData.concat(
                      json3.data.getVideoByVideoType.items
                    ),
                  });
                  getVideoByVideoType4
                    .then((json4: any) => {
                      console.log({
                        'Success customQueries.getVideoByVideoType: ': json4,
                      });
                      this.setState({
                        listData: this.state.listData.concat(
                          json4.data.getVideoByVideoType.items
                        ),
                      });
                    })
                    .catch((e: any) => {
                      console.log(e);
                    });
                })
                .catch((e: any) => {
                  console.log(e);
                });
            })
            .catch((e: any) => {
              console.log(e);
            });
        })
        .catch((e: any) => {
          console.log(e);
        });
    }
  }
  videoOverlayClose() {
    this.setState({
      overlayData: null,
    });
  }
  handleClick(data: any) {
    this.setState({
      overlayData: data,
    });
    if (data.series) {
      this.props.history.push(`/videos/${data.series.id}/${data.id}`);
    }
  }
  setSelection(selection: string) {
    const { cookies } = this.props;
    cookies.set(this.props.content.group, selection, { path: '/' });
    const teachingId = this.props.content.options.indexOf(
      cookies.get(this.props.content.group)
    );
    this.setState({
      selection: selection,
      teachingId: teachingId,
    });
  }

  fallbackToImage(
    fallbackUrl: string
  ): EventHandler<SyntheticEvent<HTMLImageElement>> {
    return function (event: SyntheticEvent<HTMLImageElement>) {
      if (!event.currentTarget.src.endsWith(fallbackUrl)) {
        event.currentTarget.src = fallbackUrl;
        event.currentTarget.srcset = '';
      }
    };
  }

  formatVideoDuration(length: string): string {
    let duration = parseInt(length, 10);
    let hours = 0;
    if (duration < 60) {
      return length + 'm';
    }
    while (duration > 59) {
      duration -= 60;
      hours += 1;
    }
    return `${hours.toString()}h ${duration.toString()}m`;
  }
  determineTeachingImageSrc(): string {
    return this.state.content.class === 'teaching-sunday' ||
      this.state.listData[this.state.teachingId].videoTypes === 'ky-kids' ||
      this.state.listData[this.state.teachingId].videoTypes === 'ky-youth' ||
      this.state.listData[this.state.teachingId].videoTypes === 'ky-jrhigh' ||
      this.state.listData[this.state.teachingId].videoTypes === 'ky-srhigh' ||
      (this.state.listData[this.state.teachingId].videoTypes === 'bbq' &&
        this.state.listData[this.state.teachingId].seriesTitle != null)
      ? this.state.listData[this.state.teachingId].series.babyHeroImage.src
      : this.state.listData[this.state.teachingId].Youtube.snippet.thumbnails
          .maxres.url;
  }
  render() {
    // const [cookies, setCookie] = useCookies([this.props.content.group]);
    if (this.state.content.style === 'hero') {
      return this.state.listData !== null ? (
        this.state.listData.length === this.props.content.options.length ||
        this.props.content.options.length === 0 ? (
          <div className="teaching">
            <h1 className="teaching-h1">{this.props.content.header1}</h1>
            <div className="teaching-blackbox">
              <div className="teachingdiv">
                {this.state.listData[this.state.teachingId].publishedDate}
              </div>
              <div className="teaching-episode-title">
                {this.state.listData[this.state.teachingId].episodeTitle}
              </div>
              <div className="teachingdiv teachingseriestitle">
                {this.state.listData[this.state.teachingId].episodeNumber ===
                null
                  ? null
                  : 'E' +
                    this.state.listData[this.state.teachingId].episodeNumber +
                    '. '}
                <span
                  className="titleOnly"
                  onClick={() => {
                    this.handleClick(
                      this.state.listData[this.state.teachingId]
                    );
                  }}
                >
                  {this.state.listData[this.state.teachingId].seriesTitle}
                </span>
                {this.state.listData[this.state.teachingId].length
                  ? ` • ${this.formatVideoDuration(
                      this.state.listData[this.state.teachingId].length
                    )}`
                  : null}
              </div>
              <div className="teachingdiv teachingdescription">
                {this.state.listData[this.state.teachingId].description}
              </div>
              <div className="teachingdiv2">
                <Button
                  size="lg"
                  className="teachingButton"
                  onClick={() => {
                    this.handleClick(
                      this.state.listData[this.state.teachingId]
                    );
                  }}
                >
                  <img
                    className="teachingButton-icon"
                    src="/static/svg/Youtube.svg"
                    alt="watch icon"
                  />
                  Watch
                </Button>
                {this.state.listData[this.state.teachingId].notesURL != null ? (
                  <LinkButton
                    size="lg"
                    className="teachingButton"
                    newWindow={this.state.listData[
                      this.state.teachingId
                    ].notesURL.includes('media')}
                    to={this.state.listData[this.state.teachingId].notesURL}
                  >
                    <img
                      className="teachingButton-icon"
                      src="/static/svg/Notes.svg"
                      alt="notes icon"
                    />
                    Notes
                  </LinkButton>
                ) : null}
              </div>
              <div>
                a
                <FadeImage
                  className="teaching-image-desktop"
                  onClick={() =>
                    this.handleClick(this.state.listData[this.state.teachingId])
                  }
                  imageSrc={this.determineTeachingImageSrc()}
                  alt={`${
                    this.state.listData[this.state.teachingId].seriesTitle
                  } series`}
                />
              </div>
            </div>
            <div className="mobile-image-container">
              <FadeImage
                className="teaching-image-mobile"
                onClick={() =>
                  this.handleClick(this.state.listData[this.state.teachingId])
                }
                imageSrc={this.determineTeachingImageSrc()}
                alt={`${
                  this.state.listData[this.state.teachingId].seriesTitle
                } series`}
              />
            </div>
            <div className="teaching-mostrecent">Most recent</div>
            <div className="teaching-options">
              {this.props.content.options.map((item: any, index: any) => {
                return (
                  <span
                    key={index}
                    className={
                      this.state.selection === item
                        ? 'teaching-span TeachingSelected'
                        : 'teaching-span TeachingUnselected'
                    }
                    onClick={() => {
                      this.setSelection(item);
                    }}
                  >
                    {item}
                  </span>
                );
              })}
            </div>
            <VideoOverlay
              onClose={() => {
                this.videoOverlayClose();
              }}
              data={this.state.overlayData}
            ></VideoOverlay>
          </div>
        ) : null
      ) : null;
    } else return null;
  }
}
function TeachingItemWrapper(props: Props) {
  const history = useHistory();
  return <TeachingItem {...props} history={history} />;
}

export default withCookies(TeachingItemWrapper);
