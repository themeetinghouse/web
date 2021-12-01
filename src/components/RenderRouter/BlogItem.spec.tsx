import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, MemoryRouterProps, Route } from 'react-router-dom';
import BlogItem from './BlogItem';
import { API } from 'aws-amplify';
type BuildPropsArgs = {
  style: 'multiImage' | 'hero' | 'featured';
  blogSeries?: string;
  hideAllBlogsButton?: boolean;
};

const buildProps = ({
  style,
  blogSeries,
  hideAllBlogsButton,
}: BuildPropsArgs) => {
  return {
    content: {
      type: 'blog',
      style,
      status: 'Live',
      header1: 'Mock header',
      blogSeries,
      description: 'Mock description',
      hideAllBlogsButton,
    },
  } as any;
};

jest.mock('moment', () => () => {
  return {
    format: () => '2020-01-01',
    isAfter: () => true,
    isSameOrBefore: () => true,
  };
});

const setWindowWidth = (value: number) => {
  global.innerWidth = value;
  global.dispatchEvent(new Event('resize'));
};

const blog1 = {
  id: '123',
  author: 'Luke Skywalker',
  publishedDate: '2015-01-01',
  expirationDate: 'none',
  blogStatus: 'Live',
  description: 'abc',
  blogTitle: 'the title',
};

const blog2 = {
  id: '456',
  author: 'Obi-Wan Kenobi',
  publishedDate: '2014-01-01',
  expirationDate: 'none',
  blogStatus: 'Live',
  description: 'xyz',
  blogTitle: 'some title',
};

const blogData = [blog1, blog2];

const blogSeriesData = [
  {
    blogPost: blog1,
  },
  {
    blogPost: blog2,
  },
  {
    blogPost: {
      id: '789',
      author: 'Master Yoda',
      publishedDate: '2012-01-01',
      expirationDate: 'none',
      blogStatus: 'Live',
      description: 'foo bar',
      blogTitle: 'another title',
    },
  },
  {
    blogPost: {
      id: '101',
      author: 'Ahsoka Tano',
      publishedDate: '2009-01-01',
      expirationDate: 'none',
      blogStatus: 'Live',
      description: 'thing stuff items words',
      blogTitle: 'more title',
    },
  },
];

const blogsByVideoData = {
  data: {
    getVideo: {
      id: 'O4Pqvv4ciP8',
      series: {
        id: 'Jesus and Justice',
        blogPosts: {
          items: [
            {
              id: "I'm a Bit Weary-Jesus and Justice",
              videoSeriesId: 'Jesus and Justice',
              blogId: "I'm a Bit Weary",
              createdAt: '2021-07-19T03:13:49.157Z',
              updatedAt: '2021-07-19T03:13:49.157Z',
              blog: {
                id: "I'm a Bit Weary",
                author: 'Quincy Bergman',
                createdBy: null,
                createdDate: null,
                publishedDate: '2020-06-10',
                expirationDate: 'none',
                blogStatus: 'Live',
                description:
                  'Your brother is a bit weary and a bit burdened, and then I remember I prayed a long time ago for God to break my heart with the things that break His heart ... He answers prayer.',
                blogTitle: "I'm a Bit Weary",
                topics: null,
                tags: ['racism', 'social justice', 'community', 'rest'],
                hiddenMainIndex: null,
                squareImage: null,
                createdAt: '2020-06-03T13:16:13.579184Z',
                updatedAt: '2021-07-19T03:13:51.201Z',
              },
            },
            {
              id: 'No More-Jesus and Justice',
              videoSeriesId: 'Jesus and Justice',
              blogId: 'No More',
              createdAt: '2021-07-19T03:13:13.669Z',
              updatedAt: '2021-07-19T03:13:13.669Z',
              blog: {
                id: 'No More',
                author: 'Natalie Frisk',
                createdBy: null,
                createdDate: null,
                publishedDate: '2020-06-17',
                expirationDate: 'none',
                blogStatus: 'Live',
                description:
                  'I will do the hard work and look outside of my own spheres to discover a greater level of understanding and empathy. I will recognize my privilege and do what I can to lay it down to raise others up.',
                blogTitle: 'No More',
                topics: null,
                tags: ['racism', 'social justice', 'christianity'],
                hiddenMainIndex: null,
                squareImage: null,
                createdAt: '2020-06-10T20:55:29.086Z',
                updatedAt: '2021-07-19T03:13:15.586Z',
              },
            },
            {
              id: 'Racism and Justice-Jesus and Justice',
              videoSeriesId: 'Jesus and Justice',
              blogId: 'Racism and Justice',
              createdAt: '2021-07-19T03:11:35.564Z',
              updatedAt: '2021-07-19T03:11:35.564Z',
              blog: {
                id: 'Racism and Justice',
                author: 'Christine Gerber',
                createdBy: null,
                createdDate: null,
                publishedDate: '2020-06-03',
                expirationDate: 'none',
                blogStatus: 'Live',
                description:
                  'Justice is not something added on to our faith, it is at the core of our faith.',
                blogTitle: 'Racism and Justice',
                topics: null,
                tags: ['racism', 'social justice'],
                hiddenMainIndex: null,
                squareImage: null,
                createdAt: '2020-06-03T14:21:24.606635Z',
                updatedAt: '2021-07-19T03:11:37.346Z',
              },
            },
            {
              id: 'mock 4th post-Jesus and Justice',
              videoSeriesId: 'Jesus and Justice',
              blogId: 'Racism and Justice',
              createdAt: '2021-07-19T03:11:35.564Z',
              updatedAt: '2021-07-19T03:11:35.564Z',
              blog: {
                id: 'mock 4th post',
                author: 'Tony Stark',
                createdBy: null,
                createdDate: null,
                publishedDate: '2017-07-07',
                expirationDate: 'none',
                blogStatus: 'Live',
                description: 'I am Iron Man.',
                blogTitle: 'Iron Man',
                topics: null,
                tags: ['Marvel'],
                hiddenMainIndex: null,
                squareImage: null,
                createdAt: '2020-06-03T14:21:24.606635Z',
                updatedAt: '2021-07-19T03:11:37.346Z',
              },
            },
          ],
          nextToken: null,
        },
      },
    },
  },
};

describe('BlogItem', () => {
  Date.now = jest.fn(() => 1487076708000); // date in 2017

  describe('Desktop', () => {
    beforeEach(() => {
      setWindowWidth(1920);
    });

    it('renders hero style', async () => {
      const props = buildProps({ style: 'hero' });

      API.graphql = jest.fn().mockResolvedValueOnce({
        data: {
          getBlogByBlogStatus: {
            items: blogData,
            nextToken: null,
          },
        },
      });

      render(
        <MemoryRouter>
          <BlogItem {...props} />
        </MemoryRouter>
      );

      // allow component life cycle to complete
      await waitFor(() => {
        const header = screen.queryByText('Mock header');
        expect(header).toBeTruthy();
      });

      const title = screen.queryByText('the title');
      expect(title).toBeTruthy();

      const author = screen.queryByText('Luke Skywalker');
      expect(author?.parentElement?.textContent).toBe(
        'by Luke Skywalker on 2015-01-01'
      );

      const blogDescription = screen.queryByText('abc');
      expect(blogDescription).toBeTruthy();

      const propsDescription = screen.queryByText('Mock description');
      expect(propsDescription).toBeFalsy();

      const link = screen.queryByText('Read More');
      expect(link).toBeTruthy();
      expect(link?.getAttribute('href')).toBe('/posts/123');

      const imageDesktop = screen.queryByTestId('desktop-image');
      expect(imageDesktop).toBeTruthy();
      expect(imageDesktop?.getAttribute('src')).toBe(
        'https://localhost:3006/static/photos/blogs/baby-hero/the%20title.jpg '
      );

      const mobileImage = screen.queryByTestId('mobile-image');
      expect(mobileImage).toBeFalsy();
    });

    it('renders multiImage style', async () => {
      const props = buildProps({ style: 'multiImage', blogSeries: 'Series' });

      API.graphql = jest.fn().mockResolvedValueOnce({
        data: {
          getBlogSeries: {
            blogs: {
              items: blogSeriesData,
            },
          },
        },
      });

      render(
        <MemoryRouter>
          <BlogItem {...props} />
        </MemoryRouter>
      );

      // allow component life cycle to complete
      await waitFor(() => {
        const header = screen.queryByText('Mock header');
        expect(header).toBeTruthy();
      });

      const propsDescription = screen.queryByText('Mock description');
      expect(propsDescription).toBeFalsy();

      blogSeriesData.forEach(({ blogPost }, index) => {
        const title = screen.queryByText(blogPost.blogTitle);
        expect(title).toBeTruthy();

        const author = screen.queryByText(blogPost.author);
        expect(author?.parentElement?.textContent).toBe(
          `by ${blogPost.author} on ${blogPost.publishedDate}`
        );

        const blogDescription = screen.queryByText(blogPost.description);
        expect(blogDescription).toBeTruthy();

        const images = screen.queryAllByTestId('blog-image');
        expect(images[index]).toBeTruthy();
        expect(images[index]?.getAttribute('src')).toBe(
          `https://localhost:3006/static/photos/blogs/banner/${encodeURIComponent(
            blogPost.blogTitle
          )}.jpg `
        );
      });

      const viewAllBlogs = screen.queryByText('View All Blogs');
      expect(viewAllBlogs).toBeTruthy();
      expect(viewAllBlogs?.getAttribute('href')).toBe('/blog');
    });

    it('renders multiImage style; without "view all blogs" button', async () => {
      const props = buildProps({
        style: 'multiImage',
        blogSeries: 'Series',
        hideAllBlogsButton: true,
      });

      API.graphql = jest.fn().mockResolvedValueOnce({
        data: {
          getBlogSeries: {
            blogs: {
              items: blogSeriesData,
            },
          },
        },
      });

      render(
        <MemoryRouter>
          <BlogItem {...props} />
        </MemoryRouter>
      );

      // allow component life cycle to complete
      await waitFor(() => {
        const header = screen.queryByText('Mock header');
        expect(header).toBeTruthy();
      });

      const viewAllBlogs = screen.queryByText('View All Blogs');
      expect(viewAllBlogs).toBeFalsy();
    });

    it('renders featured style; with horizontal scroll list', async () => {
      const props = buildProps({
        style: 'featured',
        blogSeries: 'Series',
        hideAllBlogsButton: true,
      });

      API.graphql = jest.fn().mockResolvedValueOnce({
        data: {
          getBlogSeries: {
            blogs: {
              items: blogSeriesData,
            },
          },
        },
      });

      render(
        <MemoryRouter>
          <BlogItem {...props} />
        </MemoryRouter>
      );

      // allow component life cycle to complete
      await waitFor(() => {
        const header = screen.queryByText('Mock header');
        expect(header).toBeTruthy();
      });

      const propsDescription = screen.queryByText('Mock description');
      expect(propsDescription).toBeTruthy();

      const horizontalScrollList = screen.queryByTestId(
        'horizontal-scroll-list'
      );
      expect(horizontalScrollList).toBeTruthy();

      const nonScrollList = screen.queryByTestId('non-scrolling-list');
      expect(nonScrollList).toBeFalsy();

      blogSeriesData.forEach(({ blogPost }, index) => {
        const title = screen.queryByText(blogPost.blogTitle);
        expect(title).toBeTruthy();

        const author = screen.queryByText(blogPost.author);
        expect(author?.parentElement?.textContent).toBe(
          `by ${blogPost.author} on ${blogPost.publishedDate}`
        );

        const blogDescription = screen.queryByText(blogPost.description);
        expect(blogDescription).toBeTruthy();

        const images = screen.queryAllByTestId('blog-image');
        expect(images[index]).toBeTruthy();
        expect(images[index]?.getAttribute('src')).toBe(
          `https://localhost:3006/static/photos/blogs/baby-hero/${encodeURIComponent(
            blogPost.blogTitle
          )}.jpg `
        );
      });
    });

    it('renders watch-page style', async () => {
      function Router({
        children,
        initialEntries,
      }: React.PropsWithChildren<MemoryRouterProps>) {
        return (
          <MemoryRouter initialEntries={initialEntries}>
            <Route path="/videos/:series/:episode">{children}</Route>
          </MemoryRouter>
        );
      }

      API.graphql = jest.fn().mockResolvedValueOnce(blogsByVideoData);

      render(
        <Router initialEntries={['/videos/abc/123']}>
          <BlogItem content={{ style: 'watch-page', type: 'blog' }} />
        </Router>
      );

      // allow component life cycle to complete
      await waitFor(() => {
        const header = screen.queryByText('Suggested Reads');
        expect(header).toBeTruthy();
      });

      const loadMore = screen.getByText('Load More');
      expect(loadMore).toBeTruthy();

      const images = screen.queryAllByTestId('blog-image');
      expect(images.length).toBe(3);

      blogsByVideoData.data.getVideo.series.blogPosts.items.forEach(
        ({ blog }, index) => {
          const title = screen.queryByText(blog.blogTitle);
          const description = screen.queryByText(blog.description);
          const author = screen.queryByText(blog.author);

          if (index < 3) {
            expect(title).toBeTruthy();
            expect(description).toBeTruthy();
            expect(author?.parentElement?.textContent).toBe(
              `by ${blog.author} on ${blog.publishedDate}`
            );
          } else {
            expect(title).toBeFalsy();
            expect(description).toBeFalsy();
          }
        }
      );

      fireEvent.click(loadMore);

      await waitFor(() => {
        const loadMore = screen.queryByText('Load More');
        expect(loadMore).toBeFalsy();

        const images = screen.queryAllByTestId('blog-image');
        expect(images.length).toBe(4);

        const title = screen.queryByText('Iron Man');
        expect(title).toBeTruthy();

        const description = screen.queryByText('I am Iron Man.');
        expect(description).toBeTruthy();

        const author = screen.queryByText('Tony Stark');
        expect(author?.parentElement?.textContent).toBe(
          'by Tony Stark on 2017-07-07'
        );
      });
    });
  });

  describe('Mobile', () => {
    beforeEach(() => {
      setWindowWidth(300);
    });

    it('renders hero style', async () => {
      const props = buildProps({ style: 'hero' });

      API.graphql = jest.fn().mockResolvedValueOnce({
        data: {
          getBlogByBlogStatus: {
            items: blogData,
            nextToken: null,
          },
        },
      });

      render(
        <MemoryRouter>
          <BlogItem {...props} />
        </MemoryRouter>
      );

      // allow component life cycle to complete
      await waitFor(() => {
        const header = screen.queryByText('Mock header');
        expect(header).toBeTruthy();
      });

      const imageDesktop = screen.queryByTestId('desktop-image');
      expect(imageDesktop).toBeFalsy();

      const mobileImage = screen.queryByTestId('mobile-image');
      expect(mobileImage).toBeTruthy();
      expect(mobileImage?.getAttribute('src')).toBe(
        'https://localhost:3006/static/photos/blogs/baby-hero/the%20title.jpg '
      );
    });

    it('renders multiImage style', async () => {
      const props = buildProps({ style: 'multiImage', blogSeries: 'Series' });

      API.graphql = jest.fn().mockResolvedValueOnce({
        data: {
          getBlogSeries: {
            blogs: {
              items: blogSeriesData,
            },
          },
        },
      });

      render(
        <MemoryRouter>
          <BlogItem {...props} />
        </MemoryRouter>
      );

      // allow component life cycle to complete
      await waitFor(() => {
        const header = screen.queryByText('Mock header');
        expect(header).toBeTruthy();
      });

      blogSeriesData.forEach(({ blogPost }, index) => {
        const images = screen.queryAllByTestId('blog-image');
        expect(images[index]).toBeTruthy();
        expect(images[index]?.getAttribute('src')).toBe(
          `https://localhost:3006/static/photos/blogs/square/${encodeURIComponent(
            blogPost.blogTitle
          )}.jpg `
        );
      });
    });

    it('renders featured style; without horizontal scroll list, max 3 blogs render', async () => {
      const props = buildProps({
        style: 'featured',
        blogSeries: 'Series',
        hideAllBlogsButton: true,
      });

      API.graphql = jest.fn().mockResolvedValueOnce({
        data: {
          getBlogSeries: {
            blogs: {
              items: blogSeriesData,
            },
          },
        },
      });

      render(
        <MemoryRouter>
          <BlogItem {...props} />
        </MemoryRouter>
      );

      // allow component life cycle to complete
      await waitFor(() => {
        const header = screen.queryByText('Mock header');
        expect(header).toBeTruthy();
      });

      const horizontalScrollList = screen.queryByTestId(
        'horizontal-scroll-list'
      );
      expect(horizontalScrollList).toBeFalsy();

      const nonScrollList = screen.queryByTestId('non-scrolling-list');
      expect(nonScrollList).toBeTruthy();

      blogSeriesData.forEach(({ blogPost }, index) => {
        if (index < 3) {
          const title = screen.queryByText(blogPost.blogTitle);
          expect(title).toBeTruthy();

          const author = screen.queryByText(blogPost.author);
          expect(author?.parentElement?.textContent).toBe(
            `by ${blogPost.author} on ${blogPost.publishedDate}`
          );

          const blogDescription = screen.queryByText(blogPost.description);
          expect(blogDescription).toBeTruthy();

          const images = screen.queryAllByTestId('blog-image');
          expect(images[index]).toBeTruthy();
          expect(images[index]?.getAttribute('src')).toBe(
            `https://localhost:3006/static/photos/blogs/baby-hero/${encodeURIComponent(
              blogPost.blogTitle
            )}.jpg `
          );
        } else {
          const title = screen.queryByText(blogPost.blogTitle);
          expect(title).toBeFalsy();

          const author = screen.queryByText(blogPost.author);
          expect(author).toBeFalsy();
        }
      });
    });
  });

  describe('Tablet', () => {
    beforeEach(() => {
      setWindowWidth(850);
    });

    it('renders featured style; without horizontal scroll list', async () => {
      const props = buildProps({
        style: 'featured',
        blogSeries: 'Series',
        hideAllBlogsButton: true,
      });

      API.graphql = jest.fn().mockResolvedValueOnce({
        data: {
          getBlogSeries: {
            blogs: {
              items: blogSeriesData,
            },
          },
        },
      });

      render(
        <MemoryRouter>
          <BlogItem {...props} />
        </MemoryRouter>
      );

      // allow component life cycle to complete
      await waitFor(() => {
        const header = screen.queryByText('Mock header');
        expect(header).toBeTruthy();
      });

      const horizontalScrollList = screen.queryByTestId(
        'horizontal-scroll-list'
      );
      expect(horizontalScrollList).toBeFalsy();

      const nonScrollList = screen.queryByTestId('non-scrolling-list');
      expect(nonScrollList).toBeTruthy();

      blogSeriesData.forEach(({ blogPost }, index) => {
        const title = screen.queryByText(blogPost.blogTitle);
        expect(title).toBeTruthy();

        const author = screen.queryByText(blogPost.author);
        expect(author?.parentElement?.textContent).toBe(
          `by ${blogPost.author} on ${blogPost.publishedDate}`
        );

        const blogDescription = screen.queryByText(blogPost.description);
        expect(blogDescription).toBeTruthy();

        const images = screen.queryAllByTestId('blog-image');
        expect(images[index]).toBeTruthy();
        expect(images[index]?.getAttribute('src')).toBe(
          `https://localhost:3006/static/photos/blogs/baby-hero/${encodeURIComponent(
            blogPost.blogTitle
          )}.jpg `
        );
      });
    });
  });
});
