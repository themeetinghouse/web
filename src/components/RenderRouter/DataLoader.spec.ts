import DataLoader from './DataLoader';
import { API } from '__mocks__/aws-amplify';
import { ModelSortDirection } from 'API';
import awsmobile from 'aws-exports';
import Amplify from 'aws-amplify';
Amplify.configure(awsmobile);
describe('series', () => {
  test('return series data', async () => {
    API.graphql.mockResolvedValue({
      data: {
        getSeries: {
          id: 'series1',
          videos: {
            items: [{ id: 'video1' }],
          },
        },
      },
    });

    const data = await DataLoader.getSeriesVideos({
      class: 'videos',

      selector: 'sameSeries',

      id: 'series1',
    });

    expect(data).toEqual([{ id: 'video1' }]);
  });

  test('return no videos when the series is empty', async () => {
    API.graphql.mockResolvedValue({});

    const data = await DataLoader.getSeriesVideos({
      class: 'videos',

      selector: 'sameSeries',

      id: 'series1',
    });

    expect(data).toEqual([]);
  });

  test('handle errors', async () => {
    const err = new Error('test error');
    API.graphql.mockRejectedValue(err);

    await expect(
      DataLoader.getSeriesVideos({
        class: 'videos',

        selector: 'sameSeries',

        id: 'series1',
      })
    ).resolves.toEqual([]);
  });
});

describe('videos', () => {
  beforeEach(() => {
    API.graphql.mockResolvedValue({
      data: {
        getVideoByVideoType: {
          items: [
            { id: 'video1', seriesTitle: 'series1' },
            { id: 'video2', seriesTitle: 'series2' },
          ],
        },
      },
    });
  });

  test('return all video data', async () => {
    const callback = jest.fn();
    await DataLoader.getVideos(
      {
        class: 'videos',

        selector: 'all',

        sortOrder: ModelSortDirection.ASC,
        subclass: 'Youtube',
      },
      callback,
      () => {
        false;
      }
    );

    expect(callback).toHaveBeenCalledWith([
      { id: 'video1', seriesTitle: 'series1' },
      { id: 'video2', seriesTitle: 'series2' },
    ]);
  });

  test('filter video data', async () => {
    const callback = jest.fn();
    await DataLoader.getVideos(
      {
        class: 'videos',

        selector: 'series1',

        sortOrder: ModelSortDirection.ASC,
        subclass: 'Youtube',
      },
      callback,
      () => {
        false;
      }
    );

    expect(callback).toHaveBeenCalledWith([
      { id: 'video1', seriesTitle: 'series1' },
    ]);
  });

  test('page through data', async () => {
    API.graphql
      .mockResolvedValueOnce({
        data: {
          getVideoByVideoType: {
            items: [{ id: 'video1', seriesTitle: 'series1' }],
            nextToken: 'abc',
          },
        },
      })
      .mockResolvedValueOnce({
        data: {
          getVideoByVideoType: {
            items: [{ id: 'video2', seriesTitle: 'series2' }],
          },
        },
      });

    const callback = jest.fn();
    await DataLoader.getVideos(
      {
        class: 'videos',

        selector: 'all',

        sortOrder: ModelSortDirection.ASC,
        subclass: 'Youtube',
      },
      callback,
      () => {
        false;
      }
    );

    expect(callback).toHaveBeenCalledWith([
      { id: 'video1', seriesTitle: 'series1' },
    ]);
    expect(callback).toHaveBeenCalledWith([
      { id: 'video2', seriesTitle: 'series2' },
    ]);
  });

  test('handle errors', async () => {
    API.graphql.mockRejectedValueOnce({
      data: {
        getVideoByVideoType: {
          items: [{ id: 'video1', seriesTitle: 'series1' }],
        },
      },
    });

    const callback = jest.fn();
    await DataLoader.getVideos(
      {
        class: 'videos',

        selector: 'all',

        sortOrder: ModelSortDirection.ASC,
        subclass: 'Youtube',
      },
      callback,
      () => {
        false;
      }
    );

    expect(callback).toHaveBeenCalledWith([
      { id: 'video1', seriesTitle: 'series1' },
    ]);
  });
});

describe('speakers', () => {
  test('return all speaker data', async () => {
    API.graphql.mockResolvedValueOnce({
      data: {
        listSpeakers: {
          items: [{ id: 'speaker1' }],
        },
      },
    });

    const callback = jest.fn();
    await DataLoader.getSpeakers(
      {
        class: 'speakers',
      },
      callback
    );

    expect(callback).toHaveBeenCalledWith([{ id: 'speaker1' }]);
  });

  test('page through data', async () => {
    API.graphql
      .mockResolvedValueOnce({
        data: {
          listSpeakers: {
            items: [{ id: 'speaker1' }],
            nextToken: 'abc',
          },
        },
      })
      .mockResolvedValueOnce({
        data: {
          listSpeakers: {
            items: [{ id: 'speaker2' }],
          },
        },
      });

    const callback = jest.fn();
    await DataLoader.getSpeakers(
      {
        class: 'speakers',
      },
      callback
    );

    expect(callback).toHaveBeenCalledWith([{ id: 'speaker1' }]);
    expect(callback).toHaveBeenCalledWith([{ id: 'speaker2' }]);
  });

  test('handle errors', async () => {
    API.graphql.mockRejectedValue({
      data: {
        listSpeakers: {
          items: [{ id: 'speaker1' }],
        },
      },
    });

    const callback = jest.fn();

    await DataLoader.getSpeakers(
      {
        class: 'speakers',
      },
      callback
    );

    expect(callback).not.toHaveBeenCalled();
  });
});

describe('blogs', () => {
  test('return all blog data', async () => {
    API.graphql.mockResolvedValueOnce({
      data: {
        getBlogByBlogStatus: {
          items: [{ id: 'blog1' }],
        },
      },
    });

    const callback = jest.fn();
    await DataLoader.getBlogs(
      {
        class: 'blogs',
        status: 'Live',
        selector: 'all',
        sortOrder: ModelSortDirection['DESC'],
      },
      callback,
      () => {
        false;
      }
    );

    expect(callback).toHaveBeenCalledWith([{ id: 'blog1' }]);
  });

  test('page through data', async () => {
    API.graphql
      .mockResolvedValueOnce({
        data: {
          getBlogByBlogStatus: {
            items: [{ id: 'blog1' }],
            nextToken: 'abc',
          },
        },
      })
      .mockResolvedValueOnce({
        data: {
          getBlogByBlogStatus: {
            items: [{ id: 'blog2' }],
          },
        },
      });

    const callback = jest.fn();
    await DataLoader.getBlogs(
      {
        class: 'blogs',
        status: 'Live',
        selector: 'all',
        sortOrder: ModelSortDirection['DESC'],
      },
      callback,
      () => {
        false;
      }
    );

    expect(callback).toHaveBeenCalledWith([{ id: 'blog1' }]);

    await DataLoader.getBlogs(
      {
        class: 'blogs',
        status: 'Live',
        selector: 'all',
        sortOrder: ModelSortDirection['DESC'],
      },
      callback,
      () => {
        false;
      }
    );

    expect(callback).toHaveBeenCalledWith([{ id: 'blog2' }]);
  });

  test('handle errors', async () => {
    API.graphql.mockRejectedValue({
      data: {
        getBlogByBlogStatus: {
          items: [{ id: 'blog1' }],
        },
      },
    });

    const callback = jest.fn();

    await DataLoader.getBlogs(
      {
        class: 'blogs',
        status: 'Live',
        selector: 'all',
        sortOrder: ModelSortDirection['DESC'],
      },
      callback,
      () => {
        false;
      }
    );

    expect(callback).not.toHaveBeenCalled();
  });
});

describe('series by type', () => {
  test('return all series data', async () => {
    API.graphql.mockResolvedValueOnce({
      data: {
        getSeriesBySeriesType: {
          items: [{ id: 'series1' }],
        },
      },
    });

    const callback = jest.fn();
    await DataLoader.getSeriesByType(
      {
        class: 'series',

        sortOrder: ModelSortDirection.ASC,
        subclass: 'Youtube',
      },
      callback,
      () => {
        false;
      }
    );

    expect(callback).toHaveBeenCalledWith([{ id: 'series1' }]);
  });

  test('page through data', async () => {
    API.graphql
      .mockResolvedValueOnce({
        data: {
          getSeriesBySeriesType: {
            items: [{ id: 'series1' }],
            nextToken: 'abc',
          },
        },
      })
      .mockResolvedValueOnce({
        data: {
          getSeriesBySeriesType: {
            items: [{ id: 'series2' }],
          },
        },
      });

    const callback = jest.fn();
    await DataLoader.getSeriesByType(
      {
        class: 'series',

        sortOrder: ModelSortDirection.ASC,
        subclass: 'Youtube',
      },
      callback,
      () => {
        false;
      }
    );

    expect(callback).toHaveBeenCalledWith([{ id: 'series1' }]);
    expect(callback).toHaveBeenCalledWith([{ id: 'series2' }]);
  });

  test('handle errors', async () => {
    API.graphql.mockRejectedValue({
      data: {
        getSeriesBySeriesType: {
          items: [{ id: 'series1' }],
        },
      },
    });

    const callback = jest.fn();

    await DataLoader.getSeriesByType(
      {
        class: 'series',

        sortOrder: ModelSortDirection.ASC,
        subclass: 'Youtube',
      },
      callback,
      () => {
        false;
      }
    );

    expect(callback).not.toHaveBeenCalled();
  });
});

describe('staff', () => {
  const staffPerson = {
    FirstName: 'staff',
    LastName: 'person',
  };
  const coordinatorPerson = {
    FirstName: 'coordinator',
    LastName: 'person',
  };

  let fetchSpy: jest.SpyInstance;

  beforeEach(() => {
    fetchSpy = jest
      .spyOn(global, 'fetch')
      .mockResolvedValueOnce(new Response(JSON.stringify([staffPerson])))
      .mockResolvedValueOnce(new Response(JSON.stringify([coordinatorPerson])));
  });

  afterEach(() => {
    fetchSpy.mockReset();
  });

  test('load staff', async () => {
    const data = await DataLoader.loadStaff({
      class: 'staff',

      filterField: '',
    });

    expect(data).toEqual([staffPerson]);
    expect(fetchSpy).toHaveBeenCalledWith('/static/data/staff.json');
  });

  test('load coordinators', async () => {
    const data = await DataLoader.loadStaff({
      class: 'staff',

      filterField: 'sites',
    });

    expect(data).toEqual([staffPerson, coordinatorPerson]);
    expect(fetchSpy).toHaveBeenCalledWith('/static/data/staff.json');
    expect(fetchSpy).toHaveBeenCalledWith('/static/data/coordinators.json');
  });

  test('sorts lead pastors to the front', async () => {
    fetchSpy.mockReset();
    fetchSpy
      .mockResolvedValueOnce(
        new Response(
          JSON.stringify([
            { LastName: 'xyz', Position: 'Teaching Pastor' },
            { LastName: 'abc', Position: 'Music Pastor' },
            { LastName: 'xyz', Position: 'Site Y Lead Pastor' },
            { LastName: 'def', Position: 'Site X Lead Pastor' },
          ])
        )
      )
      .mockResolvedValueOnce(new Response('[]'));
    const data = await DataLoader.loadStaff({
      class: 'staff',

      filterField: 'sites',
    });

    expect(data).toEqual([
      { LastName: 'def', Position: 'Site X Lead Pastor' },
      { LastName: 'xyz', Position: 'Site Y Lead Pastor' },
      { LastName: 'abc', Position: 'Music Pastor' },
      { LastName: 'xyz', Position: 'Teaching Pastor' },
    ]);
  });
});

describe('overseers', () => {
  test('load overseers', async () => {
    const overseer1 = {
      FirstName: 'overseer',
    };
    const fetchSpy = jest
      .spyOn(global, 'fetch')
      .mockResolvedValueOnce(new Response(JSON.stringify([overseer1])));

    const data = await DataLoader.loadOverseers();

    expect(data).toEqual([overseer1]);
    expect(fetchSpy).toHaveBeenCalledWith('/static/data/overseers.json');
  });
});

describe('events', () => {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  function fbDate(date: Date) {
    return date.toISOString().replace('Z', '-0500');
  }

  const originalLocation = window.location;

  beforeAll(() => {
    Object.defineProperty(window, 'location', {
      value: {
        hostname: 'https://themeetinghouse.com',
      },
    });
  });

  afterAll(() => {
    Object.defineProperty(window, 'location', { value: originalLocation });
  });

  test('return future events', async () => {
    const pastEvent = {
      id: 'event1',
      start_time: fbDate(yesterday),
    };
    const futureEvent = {
      id: 'event2',
      start_time: fbDate(tomorrow),
    };

    API.graphql.mockResolvedValueOnce({
      data: {
        getFBEvents: {
          data: [pastEvent, futureEvent],
        },
      },
    });

    const data = await DataLoader.loadEvents({
      class: 'events',

      facebookEvents: null,
    });

    expect(data).toEqual([futureEvent]);
  });

  test('load multiple events', async () => {
    const futureEvent1 = {
      id: 'event1',
      start_time: fbDate(tomorrow),
    };
    const futureEvent2 = {
      id: 'event2',
      start_time: fbDate(tomorrow),
    };

    API.graphql
      .mockResolvedValueOnce({
        data: {
          getFBEvents: {
            data: [futureEvent1],
          },
        },
      })
      .mockResolvedValueOnce({
        data: {
          getFBEvents: {
            data: [futureEvent2],
          },
        },
      });

    const data = await DataLoader.loadEvents({
      class: 'events',

      facebookEvents: ['abc', 'def'],
    });

    expect(data).toEqual([futureEvent1, futureEvent2]);
  });

  test('sort events', async () => {
    const tomorrowEvent = {
      event: 'event1',
      start_time: fbDate(tomorrow),
    };
    const nextDayDate = new Date(tomorrow);
    nextDayDate.setDate(nextDayDate.getDate() + 1);
    const nextDayEvent = {
      event: 'event2',
      start_time: fbDate(nextDayDate),
    };
    API.graphql.mockResolvedValueOnce({
      data: {
        getFBEvents: {
          data: [nextDayEvent, tomorrowEvent],
        },
      },
    });

    const data = await DataLoader.loadEvents({
      class: 'events',

      facebookEvents: ['xyz'],
    });

    expect(data).toEqual([tomorrowEvent, nextDayEvent]);
  });
});

describe('compassion', () => {
  test('load compassion', async () => {
    const compassion1 = {
      id: 'compassion1',
    };
    const fetchSpy = jest
      .spyOn(global, 'fetch')
      .mockResolvedValueOnce(new Response(JSON.stringify([compassion1])));

    const data = await DataLoader.loadCompassion();

    expect(data).toEqual([compassion1]);
    expect(fetchSpy).toHaveBeenCalledWith('/static/data/compassion.json');
  });
});

describe('locations', () => {
  const mockLocations = [{ id: 'oakville' }, { id: 'waterloo' }];

  beforeEach(() => {
    jest
      .spyOn(global, 'fetch')
      .mockResolvedValue(new Response(JSON.stringify(mockLocations)));
  });

  test('return all locations without filter', async () => {
    const data = await DataLoader.getLocations({
      class: 'locations',
    });

    expect(data).toEqual(mockLocations);
  });

  test('return empty array with non-existent location', async () => {
    const data = await DataLoader.getLocations({
      class: 'locations',
      filterField: 'id',
      filterValue: 'not-a-real-locations',
    });

    expect(data).toEqual([]);
  });

  test('filter location data', async () => {
    const data = await DataLoader.getLocations({
      class: 'locations',
      filterField: 'id',
      filterValue: 'waterloo',
    });

    expect(data).toEqual([{ id: 'waterloo' }]);
  });
});
