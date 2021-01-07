import React from 'react';
import Notes from './Notes';
import { API, Analytics } from '__mocks__/aws-amplify';
import { Route } from 'react-router-dom';
import { MemoryRouter, MemoryRouterProps } from 'react-router';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

interface Props {
  content: any;
  data: any;
}

const MockRouter = ({ content, data }: Props) => {
  return (
    <>
      <div data-testid="router-content">{content.page.content[0].bar}</div>
      <div data-testid="router-data">{data.id}</div>
    </>
  );
};

// eslint-disable-next-line react/display-name
jest.mock('../RenderRouter/RenderRouter', () => (props: any) => (
  <MockRouter {...props} />
));

beforeEach(() => {
  Analytics.record.mockResolvedValue({});

  jest.spyOn(window, 'fetch').mockResolvedValueOnce(
    new Response(
      JSON.stringify({
        page: { content: [{ bar: 'foo' }] },
      })
    )
  );
});

function Wrapper({
  children,
  ...props
}: React.PropsWithChildren<MemoryRouterProps>) {
  return (
    <MemoryRouter {...props}>
      <Route path="/notes/:date?">{children}</Route>
    </MemoryRouter>
  );
}

/*
 * Tests use the week of 2020-06-21 (Sunday) to 2020-06-27 (Saturday).
 */

describe('no date', () => {
  afterEach(() => {
    API.graphql.mockReset();
  });

  test('return previous Sunday', async () => {
    API.graphql.mockResolvedValue({
      data: {
        getNotes: {},
      },
    });
    jest
      .spyOn(Date, 'now')
      .mockReturnValue(new Date('2020-06-25T00:00:00-04:00').valueOf());

    await act(async () => {
      render(
        <Wrapper initialEntries={['/notes']}>
          <Notes />
        </Wrapper>
      );
    });

    expect(API.graphql).toBeCalledWith(
      expect.objectContaining({
        variables: {
          id: '2020-06-21',
        },
      })
    );
  });

  test('return this Sunday', async () => {
    API.graphql.mockResolvedValue({
      data: {
        getNotes: {},
      },
    });
    jest
      .spyOn(Date, 'now')
      .mockReturnValue(new Date('2020-06-28T00:00:00-04:00').valueOf());

    await act(async () => {
      render(
        <Wrapper initialEntries={['/notes']}>
          <Notes />
        </Wrapper>
      );
    });

    expect(API.graphql).toBeCalledWith(
      expect.objectContaining({
        variables: {
          id: '2020-06-28',
        },
      })
    );
  });

  test('explicit date', async () => {
    API.graphql.mockResolvedValue({
      data: {
        getNotes: {},
      },
    });

    await act(async () => {
      render(
        <Wrapper initialEntries={['/notes/2020-06-25']}>
          <Notes />
        </Wrapper>
      );
    });

    expect(API.graphql).toBeCalledWith(
      expect.objectContaining({
        variables: {
          id: '2020-06-25',
        },
      })
    );
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
        <Wrapper initialEntries={['/notes']}>
          <Notes />
        </Wrapper>
      );
    });

    expect(screen.getByTestId('router-data').textContent).toBe('note1');
    expect(screen.getByTestId('router-content').textContent).toBe('foo');
  });
});
