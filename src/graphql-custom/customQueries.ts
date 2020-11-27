export const getBlogSeries = /* GraphQL */ `
  query GetBlogSeries($id: ID!) {
    getBlogSeries(id: $id) {
      id
      title
      blogs {
        items {
          id
          blogSeriesID
          blogPostID
          createdAt
          updatedAt
          blogPost {
            id
            author
            publishedDate
            expirationDate
            blogStatus
            description
            blogTitle
          }
        }
        nextToken
      }
    }
  }
`;

export const listCustomPlaylists = /* GraphQL */ `
  query ListCustomPlaylists(
    $filter: ModelCustomPlaylistFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomPlaylists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        videos {
          items {
            id
            videoID
            customPlaylistID
            video {
              id
              episodeTitle
              episodeNumber
              seriesTitle
              publishedDate
              length
              Youtube {
                snippet {
                  thumbnails {
                    default {
                      url
                    }
                    medium {
                      url
                    }
                    high {
                      url
                    }
                    standard {
                      url
                    }
                    maxres {
                      url
                    }
                  }
                }
              }
            }
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;

export const getBlogByBlogStatus = /* GraphQL */ `
  query GetBlogByBlogStatus(
    $blogStatus: String
    $publishedDate: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelBlogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getBlogByBlogStatus(
      blogStatus: $blogStatus
      publishedDate: $publishedDate
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        author
        createdBy
        createdDate
        publishedDate
        expirationDate
        blogStatus
        description
        blogTitle
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

export const getSeries = `query GetSeries($id: ID!) {
  getSeries(id: $id) {
    id
    videos {
      items {
        id
        createdBy
        createdDate
        speakers {
          items {
            id
            video {
              id
              createdBy
              createdDate      
              speakers {
                nextToken
              }
              episodeTitle
              originalEpisodeTitle
              episodeNumber
              seriesTitle
              series {
                id
                seriesType
                title
                description
                image
                startDate
                endDate
              }
              publishedDate
              recordedDate
              description
              referencedMedia
              campaigns
              bibleVerses
              topics
              qandeh
              length
              YoutubeIdent
              Youtube {
                id
                kind
                etag
              }
              videoTypes
              notesURL
              videoURL
              audioURL
            }
            speaker {
              id
              name
              image
              videos {
                nextToken
              }
            }
          }
          nextToken
        }
        episodeTitle
        originalEpisodeTitle
        episodeNumber
        seriesTitle
        series {
          id
        }
        publishedDate
        recordedDate
        description
        referencedMedia
        campaigns
        bibleVerses
        topics
        qandeh
        length
        YoutubeIdent
        Youtube {
          snippet {
            thumbnails {
              default {
                url
              }
              medium {
                url
              }
              high {
                url
              }
              standard {
                url
              }
              maxres {
                url
              }
            }
          }
        }
        videoTypes
        notesURL
        videoURL
        audioURL
      }
      nextToken
    }
    seriesType
    title
    description
    image
    startDate
    endDate
  }
}
`;
export const listSeriess = `query ListSeriess(
  $filter: ModelSeriesFilterInput
  $limit: Int
  $nextToken: String
) {
  listSeriess(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      seriesType
      title
      description
      image
      startDate
      endDate
    }
    nextToken
  }
}
`;
export const getSeriesBySeriesType = `query GetSeriesBySeriesType(
  $seriesType: String
  $startDate: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelSeriesFilterInput
  $limit: Int
  $nextToken: String
) {
  getSeriesBySeriesType(
    seriesType: $seriesType
    startDate: $startDate
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      videos {
        items {
          id
          episodeTitle
          episodeNumber
          seriesTitle
          series {
            id
          }
          publishedDate
          description
          length
          YoutubeIdent
          videoTypes
          notesURL
          videoURL
          audioURL
        }
        nextToken
      }
      seriesType
      title
      description
      image
      startDate
      endDate
    }
    nextToken
  }
}
`;

export const getBlogForSearch = /* GraphQL */ `
  query GetBlog($id: ID!) {
    getBlog(id: $id) {
      id
      author
      tags
    }
  }
`;

export const getBlog = /* GraphQL */ `
  query GetBlog($id: ID!) {
    getBlog(id: $id) {
      id
      author
      createdBy
      createdDate
      publishedDate
      expirationDate
      blogStatus
      description
      content
      blogTitle
      topics
      tags
    }
  }
`;
export const listSpeakerVideoss = /* GraphQL */ `
  query ListSpeakerVideoss(
    $id: ID
    $filter: ModelSpeakerVideosFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listSpeakerVideoss(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items{
        id
        speakerVideosSpeakerId
        speakerVideosVideoId
        videoPublishedDate
      }
      nextToken
    }
  }
`;
export const getSpeakerVideos = `query GetVideo($id: ID!) {
  getVideo(id: $id) {
    id
    speakers {
      items {
        id
        video {
          id
        }
      }
    }
  }
}
`;
export const getVideo = `query GetVideo($id: ID!) {
  getVideo(id: $id) {
    id
    episodeTitle
    originalEpisodeTitle
    episodeNumber
    seriesTitle
    series {
      id
      seriesType
      title
      description
      image
      startDate
      endDate
    }
    speakers {
      items {
        id
        video {
          id
        }
      }
    }
    publishedDate
    recordedDate
    description
    length
    YoutubeIdent
    videoTypes
    notesURL
    videoURL
    audioURL
  }
}
`;

export const listVideos = `query ListVideos(
  $filter: ModelVideoFilterInput
  $limit: Int
  $nextToken: String
) {
  listVideos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      createdBy
      createdDate
      speakers {
        items {
          speaker{
            id
          }
        }
      }
      episodeTitle
      originalEpisodeTitle
      episodeNumber
      seriesTitle
      series {
        id
        seriesType
        title
        description
        image
        startDate
        endDate
      }
      publishedDate
      recordedDate
      description
      referencedMedia
      campaigns
      bibleVerses
      topics
      qandeh
      length
      YoutubeIdent
      Youtube {
        id
        kind
        etag
        snippet {
          publishedAt
          title
          description
          thumbnails {
            default {
              url
              width
              height
            }
            medium {
              url
              width
              height
            }
            high {
              url
              width
              height
            }
            standard {
              url
              width
              height
            }
            maxres {
              url
              width
              height
            }
          }
          channelTitle
          localized {
            title
            description
          }
        }
        contentDetails {
          videoId
          videoPublishedAt
          duration
          dimension
          definition
          caption
          licensedContent
          projection
        }
        status {
          uploadStatus
          privacyStatus
          license
          embeddable
          publicStatsViewable
        }
      }
      videoTypes
      notesURL
      videoURL
      audioURL

    }
    nextToken
  }
}
`;
export const getVideoByYoutubeIdent = `query GetVideoByYoutubeIdent(
  $YoutubeIdent: String
  $sortDirection: ModelSortDirection
  $filter: ModelVideoFilterInput
  $limit: Int
  $nextToken: String
) {
  getVideoByYoutubeIdent(
    YoutubeIdent: $YoutubeIdent
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      createdBy
      createdDate
      episodeTitle
      originalEpisodeTitle
      episodeNumber
      seriesTitle
      videoTypes
      notesURL
      videoURL
      audioURL

    }
    nextToken
  }
}
`;
export const getNotesCustom = `query GetNotes($id: ID!) {
  getNotes(id: $id) {
    id
    pdf
    title
    content
    questions
  }
}
`;

export const getVideoByVideoType = `query GetVideoByVideoType(
  $videoTypes: String
  $publishedDate: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelVideoFilterInput
  $limit: Int
  $nextToken: String
) {
  getVideoByVideoType(
    videoTypes: $videoTypes
    publishedDate: $publishedDate
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      episodeTitle
      episodeNumber
      seriesTitle
      series {
        id
      }
      publishedDate
      description
      length
      viewCount
      YoutubeIdent
      Youtube {
        snippet {
          thumbnails {
            default {
              url
            }
            medium {
              url
            }
            high {
              url
            }
            standard {
              url
            }
            maxres {
              url
            }
          }
        }
      }
      videoTypes
      notesURL
      videoURL
      audioURL
    }
    nextToken
  }
}
`;
export const searchBlogs = /* GraphQL */ `
  query SearchBlogs(
    $filter: SearchableBlogFilterInput
    $sort: SearchableBlogSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchBlogs(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
        id
        author
        publishedDate
        expirationDate
        blogStatus
        description
        blogTitle
        hiddenMainIndex
      }
      nextToken
      total
    }
  }
`;
export const searchVideos = `query SearchVideos(
  $filter: SearchableVideoFilterInput
  $sort: SearchableVideoSortInput
  $limit: Int
  $nextToken: String
) {
  searchVideos(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      episodeTitle
      episodeNumber
      series {
        id
        title
      }
      publishedDate
      description
      length
      videoTypes
    }
    nextToken
    total
  }
}
`;

export const getCustomPlaylist = `
  query GetCustomPlaylist($id: ID!) {
    getCustomPlaylist(id: $id) {
      id
      seriesType
      title
      description
      createdAt
      updatedAt
      videos {
        items {
          id
          videoID
          customPlaylistID
          createdAt
          updatedAt
          video {
            id
            createdBy
            createdDate
            episodeTitle
            originalEpisodeTitle
            episodeNumber
            seriesTitle
            publishedDate
            recordedDate
            description
            closedCaptioning
            referencedMedia
            campaigns
            bibleVerses
            topics
            qandeh
            length
            YoutubeIdent
            Youtube {
              id
              kind
              etag
              snippet {
                publishedAt
                title
                description
                thumbnails {
                  default {
                    url
                    width
                    height
                  }
                  medium {
                    url
                    width
                    height
                  }
                  high {
                    url
                    width
                    height
                  }
                  standard {
                    url
                    width
                    height
                  }
                  maxres {
                    url
                    width
                    height
                  }
                }
                channelTitle
                localized {
                  title
                  description
                }
              }
              contentDetails {
                videoId
                videoPublishedAt
                duration
                dimension
                definition
                caption
                licensedContent
                projection
              }
              status {
                uploadStatus
                privacyStatus
                license
                embeddable
                publicStatsViewable
              }
            }
            videoTypes
            notesURL
            videoURL
            audioURL
            createdAt
            updatedAt
            series {
              id
              seriesType
              title
              description
              image
              startDate
              endDate
              createdAt
              updatedAt
              videos {
                items {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  publishedDate
                  recordedDate
                  description
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  createdAt
                  updatedAt
                }
                nextToken
              }
              blogs {
                items {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogStatus
                  description
                  content
                  blogTitle
                  topics
                  tags
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
          }
        }
        nextToken
      }
    }
  }
`;
