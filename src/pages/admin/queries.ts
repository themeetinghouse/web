export const getInstagram = /* GraphQL */ `
  query GetInstagram($id: ID!) {
    getInstagram(id: $id) {
      id
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
      }
      nextToken
    }
  }
`;

export const listSpeakerVideos = `
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
    items {
      id
      speakerVideosSpeakerId
      speakerVideosVideoId
      videoPublishedDate
      video{
        publishedDate
      }
    }
    nextToken
  }
}
`

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
