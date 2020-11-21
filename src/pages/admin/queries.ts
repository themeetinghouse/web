export const getInstagram = /* GraphQL */ `
  query GetInstagram($id: ID!) {
    getInstagram(id: $id) {
      id
    }
  }
`;

export const listSpeakerVideoss = /* GraphQL */ `
  query ListSpeakerVideoss(
    $filter: ModelSpeakerVideosFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSpeakerVideoss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
        video{
          id
        }
        speaker {
          id
          name
          image
          createdAt
          updatedAt
          videos {
            items {
              id
              createdAt
              updatedAt
              speaker {
                id
                name
                image
                createdAt
                updatedAt
                videos {
                  nextToken
                }
              }
              video {
                id
                createdBy
                createdDate
                episodeTitle
                originalEpisodeTitle
                episodeNumber
                publishedDate

              }
            }
            nextToken
          }
        }

      }
      nextToken
    }
  }
`;
export const listSpeakers = /* GraphQL */ `
  query ListSpeakers(
    $filter: ModelSpeakerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSpeakers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        videos {
          items{
            id
          }
        }
      }
      nextToken
    }
  }
`;
export const listCustomPlaylistsAdmin = /* GraphQL */ `
  query ListCustomPlaylists(
    $filter: ModelCustomPlaylistFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomPlaylists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
      }
      nextToken
    }
  }
`;

export const getVideoAdmin = /* GraphQL */ `
  query GetVideo($id: ID!) {
    getVideo(id: $id) {
      id
      customPlaylistIDs
    }
  }
`;

export const getVideoByVideoTypeAdmin = /* GraphQL */ `
  query GetVideoByVideoType(
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
        speakers {
          items {
            speaker{
              id
            }
          }
        }
        length
        viewCount
        YoutubeIdent
        Youtube {
          snippet {
            publishedAt
            title
            description
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

export const getSeriesBySeriesTypeAdmin = /* GraphQL */ `
  query GetSeriesBySeriesType(
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
      }
      nextToken
    }
  }
`;
