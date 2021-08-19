import * as queries from '../../graphql/queries';
import * as customQueries from '../../graphql-custom/customQueries';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsmobile from '../../aws-exports';
import moment from 'moment';
import { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';

import {
  GetSeriesQuery,
  GetSeriesQueryVariables,
  GetVideoByVideoTypeQuery,
  GetVideoByVideoTypeQueryVariables,
  ModelSortDirection,
  ListSpeakersQuery,
  ListSpeakersQueryVariables,
  GetBlogByBlogStatusQuery,
  GetBlogByBlogStatusQueryVariables,
  GetSeriesBySeriesTypeQuery,
  GetSeriesBySeriesTypeQueryVariables,
  GetFbEventsQuery,
  GetFbEventsQueryVariables,
  GetCustomPlaylistQuery,
  GetCustomPlaylistQueryVariables,
  ListCustomPlaylistsQuery,
  ListCustomPlaylistsQueryVariables,
  ListF1ListGroup2sQuery,
  ListF1ListGroup2sQueryVariables,
  GetBlogQuery,
  SearchBlogsQuery,
  SearchBlogsQueryVariables,
  GetInstaPhotosQueryVariables,
  GetInstaPhotosQuery,
} from '../../API';

Amplify.configure(awsmobile);

export interface DataLoaderQuery {
  class: string;
}

export interface CustomPlaylistsQuery extends DataLoaderQuery {
  class: 'playlists';
  forceToTop: string[];
}

export interface SeriesCollectionQuery extends DataLoaderQuery {
  class: 'series-collection';
  collection: string[];
}

export interface CustomPlaylistQuery extends DataLoaderQuery {
  class:
    | 'videos'
    | 'curious'
    | 'watch-page'
    | 'watch-page-playlist'
    | 'random-suggested-playlist'
    | 'custom-playlist';

  selector: 'custom-playlist';
  playlist?: string;
  limit?: number;
}

export interface VideoSeriesQuery extends DataLoaderQuery {
  class: 'videos' | 'curious' | 'watch-page';

  selector?: string;

  sortOrder: ModelSortDirection;
  subclass: string;
  limit?: number;
}

export interface PopularVideosQuery extends VideoSeriesQuery {
  numberOfDays: number;
  minViews: number;
  numberOfVideos?: number;
}

export interface SeriesQuery extends DataLoaderQuery {
  class: 'videos' | 'curious' | 'watch-page';

  selector: 'sameSeries' | 'highlights';

  id: string;
  limit?: number;
}

export interface SpeakerQuery extends DataLoaderQuery {
  class: 'speakers';
}

export interface BlogQuery extends DataLoaderQuery {
  class: 'blogs';
  status: 'Live' | 'Unlisted';
  selector: 'all' | 'similar';
  sortOrder: ModelSortDirection;
  loadPer?: number;
}

export interface SeriesByTypeQuery extends DataLoaderQuery {
  class: 'series';

  sortOrder: ModelSortDirection;
  subclass: string;
  selector?: string;
  limit?: number;
}

export interface StaffQuery extends DataLoaderQuery {
  class: 'staff';

  filterField: string;
}

export interface InstaQuery extends DataLoaderQuery {
  class: 'instagram';
  filterValue: string;
  limit?: number;
}

export interface StaffData {
  Staff?: boolean;
  FirstName: string;
  LastName: string;
  Phone: string;
  Position: string;
  sites: string[];
  Email: string;
  instagram?: string;
  twitter?: string;
}

export interface OverseerQuery extends DataLoaderQuery {
  class: 'overseers';
}

export interface OverseerData {
  FirstName: string;
  LastName: string;
  Position: string;
  sites: string[];
}

export type PeopleData = StaffData | OverseerData;

export interface EventQuery extends DataLoaderQuery {
  class: 'events';

  facebookEvents: string[] | null;
}

export interface CompassionQuery extends DataLoaderQuery {
  class: 'compassion';
}
export interface UserDefinedQuery extends DataLoaderQuery {
  class: 'user-defined';
}

export interface CompassionData {
  id: number;
  sites: string[];
  name: string;
  description: string;
  website: string;
  image: string;
  imagealt: string;
}

export interface LocationQuery extends DataLoaderQuery {
  class: 'locations';
  alternate?: string;
  filterField?: string;
  filterValue?: string;
}

export interface LocationData {
  id: string;
  name: string;
  pastorEmail: string;
  location: {
    longitude: number;
    latitude: number;
    address: string;
  };
  serviceTimes: string[];
  youth: {
    age: string;
    location: {
      name: string;
      googleMapLink: string;
    };
    time: string;
    facebook: string;
    instagram: string;
    mainContact: {
      name: string;
      email: string;
      phone: string;
    };
  };
}

type OnDataListener<T> = (data: T) => void;

export type DataQuery =
  | SpeakerQuery
  | StaffQuery
  | OverseerQuery
  | EventQuery
  | CompassionQuery
  | VideoSeriesQuery
  | PopularVideosQuery
  | SeriesQuery
  | SeriesByTypeQuery
  | BlogQuery
  | CustomPlaylistQuery
  | SeriesCollectionQuery
  | CustomPlaylistsQuery
  | InstaQuery
  | UserDefinedQuery;

export type SeriesData = NonNullable<
  NonNullable<NonNullable<GetSeriesQuery['getSeries']>['videos']>['items']
>[0];

export type SeriesByTypeData = NonNullable<
  NonNullable<GetSeriesBySeriesTypeQuery['getSeriesBySeriesType']>['items']
>[0];

export type SeriesCollectionData = NonNullable<GetSeriesQuery>['getSeries'];

export type VideoByVideoTypeData = NonNullable<
  NonNullable<GetVideoByVideoTypeQuery['getVideoByVideoType']>['items']
>[0];

export type SpeakerData = NonNullable<
  NonNullable<ListSpeakersQuery['listSpeakers']>['items']
>[0];

export type BlogData = NonNullable<
  NonNullable<GetBlogByBlogStatusQuery['getBlogByBlogStatus']>['items']
>[0];

export type EventData = NonNullable<
  NonNullable<GetFbEventsQuery['getFBEvents']>['data']
>[0];

export type ListF1ListGroup2sData = NonNullable<
  NonNullable<ListF1ListGroup2sQuery['listF1ListGroup2s']>['items']
>[0];

export type CustomPlaylistsData = NonNullable<
  NonNullable<ListCustomPlaylistsQuery['listCustomPlaylists']>['items']
>[0];

export type RandomCustomPlaylistData = NonNullable<
  NonNullable<NonNullable<CustomPlaylistsData>['videos']>['items']
>[0];

export type CustomPlaylistVideoData = NonNullable<
  NonNullable<
    NonNullable<
      NonNullable<GetCustomPlaylistQuery['getCustomPlaylist']>['videos']
    >['items']
  >[0]
>['video'];

export type InstagramData = NonNullable<
  NonNullable<GetInstaPhotosQuery['getInstaPhotos']>['data']
>[0];

function parseFBDate(date: string): Date {
  return new Date(
    date.substring(0, date.length - 2) + ':' + date.substring(date.length - 2)
  );
}

export default class DataLoader {
  static async getVideosCustomPlaylistById(
    playlist: string
  ): Promise<CustomPlaylistVideoData[]> {
    try {
      const variables: GetCustomPlaylistQueryVariables = {
        id: playlist,
      };
      const getCustomPlaylist = (await API.graphql({
        query: customQueries.getCustomPlaylist,
        variables,
        authMode: GRAPHQL_AUTH_MODE.API_KEY,
      })) as GraphQLResult<GetCustomPlaylistQuery>;

      return (
        getCustomPlaylist.data?.getCustomPlaylist?.videos?.items?.flatMap(
          (item) => (item?.video ? item?.video : [])
        ) ?? []
      );
    } catch (e) {
      console.error(e);
    }
    return [];
  }
  static async getSeriesVideos(query: SeriesQuery): Promise<SeriesData[]> {
    const variables: GetSeriesQueryVariables = {
      id: query.id,
    };
    const getSeries = API.graphql({
      query: customQueries.getSeries,
      variables: variables,
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    }) as Promise<GraphQLResult<GetSeriesQuery>>;

    try {
      const json = await getSeries;
      console.debug('Success queries.getSeries: ' + json);
      console.debug(json);
      return json.data?.getSeries?.videos?.items ?? [];
    } catch (e) {
      console.error(e);
    }
    return [];
  }

  static async getVideos(
    query: VideoSeriesQuery,
    dataLoaded: OnDataListener<VideoByVideoTypeData[]>,
    checkNextToken: (data: null) => void,
    nextToken: string | null = null
  ): Promise<void> {
    const variables: GetVideoByVideoTypeQueryVariables = {
      nextToken: nextToken,
      sortDirection: query.sortOrder,
      limit: query.limit ?? 50,
      videoTypes: query.subclass,
      publishedDate: { lt: 'a' },
    };
    const getVideoByVideoType = API.graphql({
      query: customQueries.getVideoByVideoType,
      variables,
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    }) as Promise<GraphQLResult<GetVideoByVideoTypeQuery>>;
    try {
      const json = await getVideoByVideoType;
      console.debug('Success queries.getVideoByVideoType: ' + json);
      console.debug(json);
      const items = json?.data?.getVideoByVideoType?.items ?? [];
      if (!query.selector || query.selector === 'all' || query.limit) {
        dataLoaded(items);
      } else {
        dataLoaded(
          items.filter((item) => item?.seriesTitle === query.selector)
        );
      }
      if (!json?.data?.getVideoByVideoType?.nextToken) {
        checkNextToken(null);
      }
      if (json?.data?.getVideoByVideoType?.nextToken && !query.limit) {
        await this.getVideos(
          query,
          dataLoaded,
          checkNextToken,
          json.data.getVideoByVideoType.nextToken
        );
      }
    } catch (e) {
      console.error({ 'Error: ': e });
      if (!query.selector || query.selector === 'all' || query.limit) {
        if (e.data) {
          if (e.data.getVideoByVideoType)
            dataLoaded(e.data.getVideoByVideoType.items);
        }
      } else {
        if (e.data) {
          if (e.data.getVideoByVideoType)
            dataLoaded(
              e.data.getVideoByVideoType.items.filter(
                (item: any) => item.seriesTitle === query.selector
              )
            );
        }
      }
      if (!e?.data?.getVideoByVideoType?.nextToken) {
        checkNextToken(null);
      }
      if (e.data) {
        if (e.data.getVideoByVideoType.nextToken && !query.limit) {
          await this.getVideos(
            query,
            dataLoaded,
            checkNextToken,
            e.data.getVideoByVideoType.nextToken
          );
        }
      }
    }
  }

  static async getPopularVideos(
    query: PopularVideosQuery,
    dataLoaded: OnDataListener<VideoByVideoTypeData[]>
  ): Promise<void> {
    if (query.numberOfDays > 365) {
      console.error('Warning: numberOfDays cannot be greater than 365');
      return;
    }
    if (query.minViews === undefined) {
      console.error('Warning: minViews must be declared');
      return;
    }
    const startDate = moment()
      .subtract(query.numberOfDays, 'days')
      .format('YYYY-MM-DD');
    const variables: GetVideoByVideoTypeQueryVariables = {
      videoTypes: query.subclass,
      limit: 50,
      publishedDate: { gt: startDate },
    };
    const getVideoByVideoType = API.graphql({
      query: customQueries.getVideoByVideoType,
      variables,
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    }) as Promise<GraphQLResult<GetVideoByVideoTypeQuery>>;
    try {
      const json = await getVideoByVideoType;
      console.debug('Success queries.getVideoByVideoType: ' + json);
      console.debug(json);
      const items = json?.data?.getVideoByVideoType?.items ?? [];
      if (query.numberOfVideos) {
        dataLoaded(
          items
            .sort(
              (a, b) =>
                parseInt(a?.viewCount ?? '0', 10) -
                parseInt(b?.viewCount ?? '0', 10)
            )
            .slice(0, query.numberOfVideos)
        );
      } else {
        dataLoaded(
          items.filter((item) =>
            item?.viewCount
              ? parseInt(item?.viewCount, 10) >= query.minViews
              : false
          )
        );
      }
    } catch (e) {
      console.error({ 'Error: ': e });
      if (e.data?.getVideoByVideoType?.items) {
        if (query.numberOfVideos) {
          dataLoaded(
            e.data.getVideoByVideoType.items
              .sort(
                (a: VideoByVideoTypeData, b: VideoByVideoTypeData) =>
                  parseInt(a?.viewCount ?? '0', 10) -
                  parseInt(b?.viewCount ?? '0', 10)
              )
              .slice(0, query.numberOfVideos)
          );
        } else {
          dataLoaded(
            e.data.getVideoByVideoType.items.filter(
              (item: VideoByVideoTypeData) =>
                item?.viewCount
                  ? parseInt(item?.viewCount, 10) >= query.minViews
                  : false
            )
          );
        }
      }
    }
  }

  static async getSpeakers(
    query: SpeakerQuery,
    dataLoaded: OnDataListener<SpeakerData[]>,
    nextToken: string | null = null
  ): Promise<void> {
    const variables: ListSpeakersQueryVariables = {
      nextToken: nextToken,
      limit: 20,
    };
    const listSpeakers = API.graphql(
      graphqlOperation(queries.listSpeakers, variables)
    ) as Promise<GraphQLResult<ListSpeakersQuery>>;
    try {
      const json = await listSpeakers;
      console.debug('Success queries.listSpeakers: ' + json);
      console.debug(json);

      dataLoaded(json?.data?.listSpeakers?.items ?? []);

      const nextToken = json?.data?.listSpeakers?.nextToken;
      if (nextToken) {
        await this.getSpeakers(query, dataLoaded, nextToken);
      }
    } catch (e) {
      console.error(e);
    }
  }

  static async getSimilarBlogs(
    query: BlogQuery,
    postId: string,
    dataLoaded: OnDataListener<BlogData[]>
  ): Promise<void> {
    const getBlog = (await API.graphql(
      graphqlOperation(customQueries.getBlogForSearch, { id: postId })
    )) as GraphQLResult<GetBlogQuery>;

    const blogTags = getBlog.data?.getBlog?.tags?.filter(
      (tag) => !['The Meeting House', 'church'].includes(tag ?? '')
    );

    let blogTag1;
    let blogTag2;
    let blogTag3;
    if (blogTags?.length && blogTags.length > 0) {
      blogTag1 = blogTags[0] ?? '';
      blogTag2 = blogTags[1] ?? '';
      blogTag3 = blogTags[2] ?? '';
    }

    const blogAuthor = getBlog.data?.getBlog?.author;

    const vars: SearchBlogsQueryVariables = {
      limit: 3,
      filter: {
        id: { ne: postId },
        blogStatus: { eq: query.status },
        or: [
          { author: { matchPhrase: blogAuthor } },
          { tags: { matchPhrase: blogTag1 } },
          { tags: { matchPhrase: blogTag2 } },
          { tags: { matchPhrase: blogTag3 } },
          { description: { matchPhrase: blogTag1 } },
        ],
      },
    };
    const searchBlogs = API.graphql(
      graphqlOperation(customQueries.searchBlogs, vars)
    ) as Promise<GraphQLResult<SearchBlogsQuery>>;
    try {
      const json = await searchBlogs;
      console.debug('Success customQueries.searchBlogs: ' + json);
      console.debug(json);

      dataLoaded(json?.data?.searchBlogs?.items ?? []);
    } catch (e) {
      console.error(e);
    }
  }

  static async getBlogs(
    query: BlogQuery,
    dataLoaded: OnDataListener<BlogData[]>,
    storeNextToken: (nextToken: string | null | undefined) => void,
    nextToken: string | null = null
  ): Promise<void> {
    const vars: GetBlogByBlogStatusQueryVariables = {
      nextToken: nextToken,
      blogStatus: query.status,
      sortDirection: query.sortOrder,
      limit: query.loadPer,
      filter: { hiddenMainIndex: { ne: true } },
    };
    const getBlogByBlogStatus = API.graphql(
      graphqlOperation(customQueries.getBlogByBlogStatus, vars)
    ) as Promise<GraphQLResult<GetBlogByBlogStatusQuery>>;
    try {
      const json = await getBlogByBlogStatus;
      console.debug('Success queries.getBlogByBlogStatus: ' + json);
      console.debug(json);

      dataLoaded(json?.data?.getBlogByBlogStatus?.items ?? []);
      storeNextToken(json?.data?.getBlogByBlogStatus?.nextToken);
    } catch (e) {
      console.error(e);
    }
  }

  static async getSeriesCollection(
    query: SeriesCollectionQuery,
    dataLoaded: OnDataListener<SeriesCollectionData[]>
  ): Promise<void> {
    let temp: SeriesCollectionData[] = [];
    for (let i = 0; i < query.collection.length; i++) {
      try {
        const getSeries = API.graphql({
          query: customQueries.getSeries,
          variables: { id: query.collection[i] },
          authMode: GRAPHQL_AUTH_MODE.API_KEY,
        }) as Promise<GraphQLResult<GetSeriesQuery>>;
        const json = await getSeries;
        console.debug({ 'Success queries.getSeries': json });
        if (json?.data?.getSeries) temp.push(json?.data?.getSeries);
        if ((i + 1) % 5 === 0 || i === query.collection.length - 1) {
          dataLoaded(temp);
          temp = [];
        }
      } catch (e) {
        console.error(e);
      }
    }
  }

  static async getSeriesByType(
    query: SeriesByTypeQuery,
    dataLoaded: OnDataListener<SeriesByTypeData[]>,
    checkNextToken: (data: null) => void,
    nextToken: string | null = null
  ): Promise<void> {
    const variables: GetSeriesBySeriesTypeQueryVariables = {
      nextToken: nextToken,
      sortDirection: query.sortOrder,
      limit: query.limit ?? 20,
      seriesType: query.subclass,
      startDate: { lt: 'a' },
    };
    const getSeriesBySeriesType = API.graphql({
      query: customQueries.getSeriesBySeriesType,
      variables,
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    }) as Promise<GraphQLResult<GetSeriesBySeriesTypeQuery>>;
    try {
      const json = await getSeriesBySeriesType;
      console.debug({ 'Success queries.getSeriesBySeriesType': json });
      dataLoaded(json?.data?.getSeriesBySeriesType?.items ?? []);
      if (!json?.data?.getSeriesBySeriesType?.nextToken) {
        checkNextToken(null);
      }
      if (json?.data?.getSeriesBySeriesType?.nextToken && !query.limit) {
        await this.getSeriesByType(
          query,
          dataLoaded,
          checkNextToken,
          json.data.getSeriesBySeriesType.nextToken
        );
      }
    } catch (e) {
      console.error(e);
    }
  }

  static async getRandomPlaylist(
    dataLoaded: OnDataListener<RandomCustomPlaylistData[]>,
    playlistId: (id: string) => void
  ): Promise<void> {
    const variables: ListCustomPlaylistsQueryVariables = {
      limit: 20,
    };
    try {
      const listCustomPlaylists = API.graphql({
        query: customQueries.listCustomPlaylists,
        variables,
        authMode: GRAPHQL_AUTH_MODE.API_KEY,
      }) as Promise<GraphQLResult<ListCustomPlaylistsQuery>>;
      const json = await listCustomPlaylists;
      if (json?.data?.listCustomPlaylists) {
        const max = json?.data?.listCustomPlaylists?.items?.length;
        if (max) {
          let loop = true;
          while (loop) {
            const index = Math.floor(Math.random() * Math.floor(max));
            if (
              json?.data?.listCustomPlaylists?.items &&
              json?.data?.listCustomPlaylists?.items.length > index &&
              json?.data?.listCustomPlaylists?.items[index]?.videos?.items
            ) {
              if (
                json?.data?.listCustomPlaylists?.items[index]?.videos?.items
                  ?.length
              ) {
                dataLoaded(
                  json?.data?.listCustomPlaylists?.items[index]?.videos
                    ?.items ?? []
                );
                playlistId(
                  json.data.listCustomPlaylists?.items[index]?.id ?? 'error'
                );
                loop = false;
              }
            }
          }
        }
      }
    } catch (e) {
      console.error(e);
    }
  }

  static async listHomeChurches(
    dataLoaded: OnDataListener<ListF1ListGroup2sData[]>,
    dataFinished: OnDataListener<ListF1ListGroup2sQuery[]>,
    nextToken: string | null = null
  ): Promise<void> {
    const variables: ListF1ListGroup2sQueryVariables = {
      nextToken: nextToken,
      limit: 20,
    };
    const listCustomPlaylists = API.graphql({
      query: queries.listF1ListGroup2s,
      variables,
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    }) as Promise<GraphQLResult<ListF1ListGroup2sQuery>>;
    try {
      const json = await listCustomPlaylists;
      console.debug({ 'Success queries.listF1ListGroup2s': json });
      dataLoaded(json?.data?.listF1ListGroup2s?.items ?? []);
      if (json?.data?.listF1ListGroup2s?.nextToken) {
        await this.listHomeChurches(
          dataLoaded,
          dataFinished,
          json.data.listF1ListGroup2s.nextToken
        );
      } else {
        dataFinished([]);
      }
    } catch (e) {
      console.error(e);
    }
  }

  static async listCustomPlaylists(
    dataLoaded: OnDataListener<CustomPlaylistsData[]>,
    nextToken: string | null = null
  ): Promise<void> {
    const variables: ListCustomPlaylistsQueryVariables = {
      nextToken: nextToken,
      limit: 20,
    };
    const listCustomPlaylists = API.graphql({
      query: customQueries.listCustomPlaylists,
      variables,
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    }) as Promise<GraphQLResult<ListCustomPlaylistsQuery>>;
    try {
      const json = await listCustomPlaylists;
      console.debug({ 'Success queries.listCustomPlaylists': json });
      dataLoaded(json?.data?.listCustomPlaylists?.items ?? []);
      if (json?.data?.listCustomPlaylists?.nextToken) {
        await this.listCustomPlaylists(
          dataLoaded,
          json.data.listCustomPlaylists.nextToken
        );
      }
    } catch (e) {
      console.error(e);
    }
  }

  static sortStaff(list: StaffData[]): StaffData[] {
    return list.sort((a, b) => {
      if (
        a.Position.includes('Lead Pastor') &&
        b.Position.includes('Lead Pastor')
      )
        return a.LastName.localeCompare(b.LastName);
      else if (a.Position.includes('Lead Pastor')) return -1;
      else if (b.Position.includes('Lead Pastor')) return 1;
      else return a.LastName.localeCompare(b.LastName);
    });
  }

  private static async getEvents(eventId: string): Promise<EventData[]> {
    const variables: GetFbEventsQueryVariables = {
      pageId: eventId,
    };
    const getFbEvents = API.graphql({
      query: queries.getFbEvents,
      variables,
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    }) as Promise<GraphQLResult<GetFbEventsQuery>>;
    try {
      const json = await getFbEvents;
      console.debug('Success queries.getFBEvents: ' + json);
      console.debug(json);
      const events = json?.data?.getFBEvents?.data ?? [];
      return this.filterEvents(events).sort((a, b) => {
        if (!a?.start_time) {
          return -1;
        }
        if (!b?.start_time) {
          return 1;
        }
        const aTime = parseFBDate(a.start_time);
        const bTime = parseFBDate(b.start_time);
        return aTime.valueOf() - bTime.valueOf();
      });
    } catch (e) {
      console.error(e);
      return [];
    }
  }

  static filterEvents(events: EventData[]): EventData[] {
    if (window.location.hostname === 'localhost') return events;
    else
      return events.filter((item) => {
        if (!item?.start_time) {
          return false;
        }
        return new Date() < parseFBDate(item.start_time);
      });
  }

  static async loadStaff(query: StaffQuery): Promise<StaffData[]> {
    let response = await fetch('/static/data/staff.json');
    const staff: StaffData[] = await response.json();
    if (query.filterField === 'sites') {
      response = await fetch('/static/data/coordinators.json');
      const coordinators: StaffData[] = await response.json();
      return this.sortStaff(staff).concat(coordinators);
    } else {
      return staff;
    }
  }

  static async loadInsta(query: InstaQuery): Promise<InstagramData[]> {
    let id = '';
    switch (query.filterValue) {
      case 'alliston':
        id = '17841433891090773';
        break;
      case 'sandbanks':
        id = '17841400321603203';
        break;
      case 'ancaster':
        id = '17841408879897536';
        break;
      case 'brampton':
        id = '17841411750520408';
        break;
      case 'brantford':
        id = '17841428047284261';
        break;
      case 'burlington':
        id = '17841408871557337';
        break;
      case 'hamilton-downtown':
        id = '17841417565818186';
        break;
      case 'toronto-downtown':
        id = '17841408838131893';
        break;
      case 'hamilton-mountain':
        id = '17841411488786563';
        break;
      case 'toronto-east':
        id = '17841409652026703';
        break;
      case 'toronto-high-park':
        id = '17841432164905254';
        break;
      case 'kitchener':
        id = '17841425888842969';
        break;
      case 'london':
        id = '17841408115069699';
        break;
      case 'newmarket':
        id = '17841421476822902';
        break;
      case 'oakville':
        id = '17841408641187599';
        break;
      case 'ottawa':
        id = '17841408719847486';
        break;
      case 'owen-sound':
        id = '17841400321603203';
        break;
      case 'parry-sound':
        id = '17841443108276837';
        break;
      case 'richmond-hill':
        id = '17841413912356153';
        break;
      case 'toronto-uptown':
        id = '17841409652056784';
        break;
      case 'waterloo':
        id = '17841417962985605';
        break;
      default:
        id = '17841400321603203';
    }

    const variables: GetInstaPhotosQueryVariables = {
      pageId: id,
    };
    const getInsta = API.graphql({
      query: queries.getInstaPhotos,
      variables,
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    }) as Promise<GraphQLResult<GetInstaPhotosQuery>>;

    try {
      const json = await getInsta;

      if (!json?.data?.getInstaPhotos?.data) {
        return [];
      }

      const { data } = json.data.getInstaPhotos;
      const { length } = data;
      const photos = [];
      let i = 0;

      while (i < length && photos.length < (query.limit ?? 8)) {
        if (data[i]?.media_type !== 'VIDEO') photos.push(data[i]);
        i++;
      }

      return photos;
    } catch (e) {
      console.error(e);
    }

    return [];
  }

  static async loadOverseers(): Promise<OverseerData[]> {
    const response = await fetch('/static/data/overseers.json');
    return response.json();
  }

  static async loadEvents(query: EventQuery): Promise<EventData[]> {
    if (query.facebookEvents !== null) {
      const events = await Promise.all(
        query.facebookEvents.map((facebookEventQuery) =>
          this.getEvents(facebookEventQuery)
        )
      );
      return events.reduce((acc, events) => acc.concat(events), []);
    } else {
      return this.getEvents('155800937784104');
    }
  }

  static async loadCompassion(): Promise<CompassionData[]> {
    const response = await fetch('/static/data/compassion.json');
    return response.json();
  }

  static async getLocations(query: LocationQuery): Promise<LocationData[]> {
    let response;
    if (query.alternate === 'christmas')
      response = await fetch('/static/data/christmas.json');
    else if (query.alternate === 'easter')
      response = await fetch('/static/data/easter.json');
    else response = await fetch('/static/data/locations.json');
    const data: LocationData[] = await response.json();
    return data
      .filter((location) => {
        if (!query.filterField) {
          return true;
        }
        return location[query.filterField as 'id'] === query.filterValue;
      })
      .sort((a, b) => {
        return a.name == 'Global' ? -1 : a.name?.localeCompare(b.name);
      });
  }
}
