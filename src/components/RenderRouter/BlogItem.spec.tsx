import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
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
  publishedDate: '2010-01-01',
  expirationDate: 'none',
  blogStatus: 'Live',
  description: 'abc',
  blogTitle: 'the title',
};

const blog2 = {
  id: '456',
  author: 'Obi-Wan Kenobi',
  publishedDate: '2011-01-01',
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
      publishedDate: '2013-01-01',
      expirationDate: 'none',
      blogStatus: 'Live',
      description: 'thing stuff items words',
      blogTitle: 'more title',
    },
  },
];

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
        'by Luke Skywalker on 2010-01-01'
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
