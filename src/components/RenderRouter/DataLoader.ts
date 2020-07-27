import * as queries from '../../graphql/queries';
import * as customQueries from '../../graphql-custom/customQueries';
import { GRAPHQL_AUTH_MODE, GraphQLResult } from '@aws-amplify/api/lib/types';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsmobile from '../../aws-exports';
import moment from 'moment';
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
} from 'API';

Amplify.configure(awsmobile);

export interface DataLoaderQuery {
  class: string;
}

export interface CustomPlaylistQuery extends DataLoaderQuery {
  class: 'videos' | 'curious' | 'watch-page';

  selector: 'custom-playlist';

  playlist: string;

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

  status: string;
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

export interface StaffData {
  Staff?: boolean;
  FirstName: string;
  LastName: string;
  Phone: string;
  Position: string;
  sites: string[];
  Email: string;
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

export interface EventQuery extends DataLoaderQuery {
  class: 'events';

  facebookEvents: string[] | null;
}

export interface CompassionQuery extends DataLoaderQuery {
  class: 'compassion';
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

  filterField?: 'id';
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
  | CustomPlaylistQuery;

export type SeriesData = NonNullable<
  NonNullable<NonNullable<GetSeriesQuery['getSeries']>['videos']>['items']
>[0];

export type SeriesByTypeData = NonNullable<
  NonNullable<GetSeriesBySeriesTypeQuery['getSeriesBySeriesType']>['items']
>[0];

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

export type CustomPlaylistVideoData = NonNullable<
  NonNullable<
    NonNullable<
      NonNullable<GetCustomPlaylistQuery['getCustomPlaylist']>['videos']
    >['items']
  >[0]
>['video'];

function parseFBDate(date: string): Date {
  return new Date(
    date.substring(0, date.length - 2) + ':' + date.substring(date.length - 2)
  );
}

export default class DataLoader {
  static async getVideosCustomPlaylist(
    query: CustomPlaylistQuery
  ): Promise<CustomPlaylistVideoData[]> {
    try {
      const variables: GetCustomPlaylistQueryVariables = {
        id: query.playlist,
      };
      const getCustomPlaylist = (await API.graphql({
        query: customQueries.getCustomPlaylist,
        variables,
        authMode: GRAPHQL_AUTH_MODE.API_KEY,
      })) as GraphQLResult<GetCustomPlaylistQuery>;
      console.log('Success queries.getCustomPlaylist: ' + getCustomPlaylist);
      console.log(getCustomPlaylist);
      const loadedVideos: CustomPlaylistVideoData[] = [];
      for (const item of getCustomPlaylist.data?.getCustomPlaylist?.videos
        ?.items ?? []) {
        loadedVideos.push(item?.video ?? null);
      }
      console.log(loadedVideos);
      return loadedVideos;
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
          dataLoaded(e.data.getVideoByVideoType.items);
        }
      } else {
        if (e.data) {
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
    dataLoaded: OnDataListener<VideoByVideoTypeData[]>,
    nextToken: string | null = null
  ): Promise<void> {
    if (query.numberOfDays > 365) {
      console.error('Warning: numberOfDays cannot be greater than 365')
      return;
    }
    if (!query.minViews) {
      console.error('Warning: minViews must be declared')
      return;
    }
    const startDate = moment().subtract(query.numberOfDays, 'days').format('YYYY-MM-DD')
    const variables: GetVideoByVideoTypeQueryVariables = {
      nextToken: nextToken,
      limit: 20,
      videoTypes: query.subclass,
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
      dataLoaded(items.filter((item: VideoByVideoTypeData) => item?.viewCount ? parseInt(item?.viewCount,10) >= query.minViews : false))
      if (json?.data?.getVideoByVideoType?.nextToken) {
        await this.getPopularVideos(
          query,
          dataLoaded,
          json.data.getVideoByVideoType.nextToken
        );
      }
    } catch (e) {
      console.error({ 'Error: ': e });
      if (e.data) {
        dataLoaded(e.data.getVideoByVideoType.items.filter((item: VideoByVideoTypeData) => item?.viewCount ? parseInt(item?.viewCount,10) >= query.minViews : false));
      }
      if (e.data) {
        if (e.data.getVideoByVideoType.nextToken) {
          await this.getPopularVideos(
            query,
            dataLoaded,
            e.data.getVideoByVideoType.nextToken
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

  static async getBlogs(
    query: BlogQuery,
    dataLoaded: OnDataListener<BlogData[]>,
    nextToken: string | null = null
  ): Promise<void> {
    const vars: GetBlogByBlogStatusQueryVariables = {
      nextToken: nextToken,
      blogStatus: query.status,
      limit: 200,
    };
    const getBlogByBlogStatus = API.graphql(
      graphqlOperation(customQueries.getBlogByBlogStatus, vars)
    ) as Promise<GraphQLResult<GetBlogByBlogStatusQuery>>;
    try {
      const json = await getBlogByBlogStatus;
      console.debug('Success queries.getBlogByBlogStatus: ' + json);
      console.debug(json);

      dataLoaded(json?.data?.getBlogByBlogStatus?.items ?? []);

      const nextToken = json?.data?.getBlogByBlogStatus?.nextToken;
      if (nextToken) {
        await this.getBlogs(query, dataLoaded, nextToken);
      }
    } catch (e) {
      console.error(e);
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

  static sortStaff(list: StaffData[]): StaffData[] {
    return list.sort((a, b) => {
      if (a.Position.includes('Lead Pastor') && b.Position.includes('Lead Pastor'))
        return a.LastName.localeCompare(b.LastName);
      else if (a.Position.includes('Lead Pastor'))
        return -1;
      else if (b.Position.includes('Lead Pastor'))
        return 1;
      else
        return a.LastName.localeCompare(b.LastName);
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
    if (window.location.hostname === 'localhost')
      return events;
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
    const response = await fetch('/static/data/locations.json');
    const data: LocationData[] = await response.json();
    return data.filter((location) => {
      if (!query.filterField) {
        return true;
      }
      return location[query.filterField as 'id'] === query.filterValue;
    });
  }
}
