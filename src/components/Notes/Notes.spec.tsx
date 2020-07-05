import React from 'react';
import Notes from './Notes';
import { API } from '__mocks__/aws-amplify';
import { Route } from 'react-router-dom';
import { MemoryRouter, MemoryRouterProps } from 'react-router';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

jest.mock('components/RenderRouter/RenderRouter', () => jest.fn(() => <div />));

let renderRouterMock: jest.Mock<JSX.Element, []>;

beforeAll(async () => {
  renderRouterMock = await import('components/RenderRouter/RenderRouter');

})

beforeEach(() => {
  jest.spyOn(window, 'fetch')
    .mockResolvedValueOnce(new Response(JSON.stringify({
      page: {},
    })));
})

function Wrapper({ children, ...props }: React.PropsWithChildren<MemoryRouterProps>) {
  return (
    <MemoryRouter {...props}>
      <Route path="/notes/:date?">
        {children}
      </Route>
    </MemoryRouter>
  )
}

/*
 * Tests use the week of 2020-06-21 (Sunday) to 2020-06-27 (Saturday).
 */

describe('no date', () => {
  afterEach(() => {
    API.graphql.mockReset();
  })

  test('return previous Sunday', async () => {
    API.graphql.mockResolvedValue({
      data: {
        getNotes: {},
      },
    });
    jest.spyOn(Date, 'now').mockReturnValue(new Date('2020-06-25T00:00:00-04:00').valueOf());

    await act(async () => {
      render(
        <Wrapper initialEntries={["/notes"]}>
          <Notes />
        </Wrapper>
      );
    });

    expect(API.graphql).toBeCalledWith(jasmine.objectContaining({
      variables: {
        id: '2020-06-21',
      },
    }));
  });

  test('return this Sunday', async () => {
    API.graphql.mockResolvedValue({
      data: {
        getNotes: {},
      },
    });
    jest.spyOn(Date, 'now').mockReturnValue(new Date('2020-06-28T00:00:00-04:00').valueOf());

    await act(async () => {
      render(
        <Wrapper initialEntries={["/notes"]}>
          <Notes />
        </Wrapper>
      );
    });

    expect(API.graphql).toBeCalledWith(jasmine.objectContaining({
      variables: {
        id: '2020-06-28',
      },
    }));
  });

  test('explicit date', async () => {
    API.graphql.mockResolvedValue({
      data: {
        getNotes: {},
      },
    });

    await act(async () => {
      render(
        <Wrapper initialEntries={["/notes/2020-06-25"]}>
          <Notes />
        </Wrapper>
      );
    });

    expect(API.graphql).toBeCalledWith(jasmine.objectContaining({
      variables: {
        id: '2020-06-25',
      },
    }));
  });
});

describe('note data', () => {
  test('pass note data ', async () => {
    API.graphql.mockResolvedValue({
      data: {
        getNotes: {
          id: 'note1',
        },
      },
    });

    await act(async () => {
      render(
        <Wrapper initialEntries={["/notes"]}>
          <Notes />
        </Wrapper>
      );
    });

    expect(renderRouterMock).toHaveBeenCalledWith(
      {
        data: {
          id: 'note1',
        },
        content: {
          page: {},
        },
      },
      {},
    );
  });
});