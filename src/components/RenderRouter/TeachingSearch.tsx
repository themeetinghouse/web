import React, { useEffect, useState } from 'react';
import './TeachingSearch.scss';
import { useNavigate } from 'react-router-dom';
import { API, graphqlOperation } from 'aws-amplify';
import * as customQueries from '../../graphql-custom/customQueries';
import {
  SearchVideosQuery,
  SearchVideosQueryVariables,
  SearchBlogsQuery,
  SearchBlogsQueryVariables,
} from 'API';
import { GraphQLResult } from '@aws-amplify/api';

import { SearchBarContentProp } from '../types';
import { Link } from 'components/Link/Link';

interface Props {
  content: SearchBarContentProp;
}

type Videos = NonNullable<
  NonNullable<SearchVideosQuery['searchVideos']>['items']
>;
type Blogs = NonNullable<NonNullable<SearchBlogsQuery['searchBlogs']>['items']>;

export default function TeachingSearch(props: Props) {
  const navigate = useNavigate();
  const [videos, setVideos] = useState<Videos>([]);
  const [blogs, setBlogs] = useState<Blogs>([]);
  const [currentInput, setCurrentInput] = useState('');

  useEffect(() => {
    if (videos.length) {
      const getVideos = document.getElementsByClassName('ListItem');
      if (getVideos[0]) {
        getVideos[0].setAttribute('style', 'opacity: 0.5');
      }
    } else {
      const getVideos = document.getElementsByClassName('ListItem');
      if (getVideos[0]) {
        getVideos[0].setAttribute('style', 'opacity: 1');
      }
    }
  }, [videos]);

  useEffect(() => {
    if (blogs.length) {
      const getBlogs = document.getElementsByClassName('BlogItem');
      if (getBlogs[0]) {
        getBlogs[0].setAttribute('style', 'opacity: 0.5');
      }
    } else {
      const getBlogs = document.getElementsByClassName('BlogItem');
      if (getBlogs[0]) {
        getBlogs[0].setAttribute('style', 'opacity: 1');
      }
    }
  }, [blogs]);

  async function searchBlogs(e: React.ChangeEvent<HTMLInputElement>) {
    const targetValue = e.target.value;
    setCurrentInput(targetValue);
    try {
      const query: SearchBlogsQueryVariables = {
        filter: {
          blogStatus: { eq: props.content.subclass },
          or: [
            { blogTitle: { matchPhrasePrefix: targetValue.toLowerCase() } },
            { tags: { matchPhrasePrefix: targetValue.toLowerCase() } },
            { description: { matchPhrasePrefix: targetValue.toLowerCase() } },
          ],
        },
        limit: 10,
      };
      const json = (await API.graphql(
        graphqlOperation(customQueries.searchBlogs, query)
      )) as GraphQLResult<SearchBlogsQuery>;
      setBlogs(json?.data?.searchBlogs?.items ?? []);
    } catch (err) {
      console.error(err);
    }
  }

  async function searchVideos(e: React.ChangeEvent<HTMLInputElement>) {
    const targetValue = e.target.value;
    setCurrentInput(targetValue);
    try {
      const query: SearchVideosQueryVariables = {
        filter: {
          videoTypes: { eq: props.content.subclass },
          or: [
            { seriesTitle: { matchPhrasePrefix: targetValue.toLowerCase() } },
            { episodeTitle: { matchPhrasePrefix: targetValue.toLowerCase() } },
          ],
        },
        limit: 10,
      };
      const json = (await API.graphql(
        graphqlOperation(customQueries.searchVideos, query)
      )) as GraphQLResult<SearchVideosQuery>;
      if (json?.data?.searchVideos?.items)
        setVideos(json?.data?.searchVideos?.items ?? []);
    } catch (err) {
      console.error(err);
    }
  }

  function formatVideoDuration(length: string): string {
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

  function openVideo(item: Videos[0]) {
    if (item && item?.series) {
      navigate('/videos/' + item.series.id + '/' + item.id, { state: 'as' });
    }
  }

  switch (props.content.style) {
    case 'teaching':
      return (
        <div className="TeachingSearchItem">
          <div className="Header1">{props.content.header1}</div>
          <div className="SearchBar">
            <img
              src="/static/svg/Search.svg"
              alt=""
              className="SearchIcon"
            ></img>
            <input
              className="TeachingSearchItemInput"
              value={currentInput}
              onChange={(e) => {
                searchVideos(e);
              }}
              placeholder={props.content.text1}
              aria-label="search"
            ></input>
            {videos.length && currentInput ? (
              <button
                aria-label="Close search bar"
                onClick={() => {
                  setVideos([]);
                  setCurrentInput('');
                }}
                className="CloseTeachingSearchButton"
              >
                <img
                  src="/static/svg/Close-Cancel.svg"
                  alt=""
                  className="CloseTeachingSearch"
                ></img>
              </button>
            ) : null}
          </div>
          <div
            className={
              videos.length && currentInput
                ? 'TeachingSearchItemDiv ShowResults'
                : 'TeachingSearchItemDiv'
            }
          >
            {videos.length && currentInput ? (
              <div className="TeachingSearchNumberOfVideos">
                {videos.length} Videos
              </div>
            ) : null}
            {videos.length && currentInput
              ? videos.map((item) => {
                  if (item?.episodeTitle)
                    return (
                      <div
                        tabIndex={0}
                        key={item.id}
                        onClick={() => {
                          openVideo(item);
                        }}
                        className="TeachingSearchResultItem FocusableVideo"
                      >
                        <div className="Content">
                          <div className="Details">
                            <div className="Title">{item.episodeTitle}</div>
                            <div className="RightContainer1">
                              {item.publishedDate ? (
                                <div className="Date">{item.publishedDate}</div>
                              ) : null}
                              {item.length ? (
                                <div className="Length">
                                  &nbsp;• {formatVideoDuration(item.length)}
                                </div>
                              ) : null}
                            </div>
                          </div>
                          <div className="Description">{item.description}</div>
                        </div>
                      </div>
                    );
                  else return null;
                })
              : null}
          </div>
        </div>
      );
    case 'blog':
      return (
        <div className="TeachingSearchItem">
          <div className="Header1">{props.content.header1}</div>
          <div className="SearchBar">
            <img
              src="/static/svg/Search.svg"
              alt=""
              className="SearchIcon"
            ></img>
            <input
              className="TeachingSearchItemInput"
              value={currentInput}
              onChange={(e) => {
                searchBlogs(e);
              }}
              placeholder={props.content.text1}
              aria-label="search"
            ></input>
            {blogs.length && currentInput ? (
              <button
                aria-label="Close search bar"
                onClick={() => {
                  setBlogs([]);
                  setCurrentInput('');
                }}
                className="CloseTeachingSearchButton"
              >
                <img
                  src="/static/svg/Close-Cancel.svg"
                  alt=""
                  className="CloseTeachingSearch"
                ></img>
              </button>
            ) : null}
          </div>
          <div
            className={
              blogs.length && currentInput
                ? 'TeachingSearchItemDiv ShowResults'
                : 'TeachingSearchItemDiv'
            }
          >
            {blogs.length && currentInput ? (
              <div className="TeachingSearchNumberOfVideos">
                {blogs.length} Posts
              </div>
            ) : null}
            {blogs.length && currentInput
              ? blogs.map((item) => {
                  if (item?.blogTitle)
                    return (
                      <Link
                        key={item.id}
                        to={`/posts/${item.id}`}
                        className="BlogLink"
                        aria-label={item.blogTitle}
                      >
                        <div className="TeachingSearchResultItem">
                          <div className="Content">
                            <div className="Details">
                              <div className="Title">{item.blogTitle}</div>
                              <div className="RightContainer1">
                                {item.publishedDate ? (
                                  <div className="Date">
                                    {item.publishedDate}
                                  </div>
                                ) : null}
                              </div>
                            </div>
                            <div className="Description">
                              {item.description}
                            </div>
                          </div>
                        </div>
                      </Link>
                    );
                  else return null;
                })
              : null}
          </div>
        </div>
      );
  }
}
