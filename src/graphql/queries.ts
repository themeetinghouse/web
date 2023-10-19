/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBiblePassage = /* GraphQL */ `
  query GetBiblePassage($bibleId: String, $passage: String) {
    getBiblePassage(bibleId: $bibleId, passage: $passage) {
      data {
        id
        bibleId
        orgId
        content
        reference
        copyright
        __typename
      }
      meta {
        fums
        fumsId
        fumsJsInclude
        fumsJs
        fumsNoScript
        __typename
      }
      __typename
    }
  }
`;
export const getYoutubeVideoSearch = /* GraphQL */ `
  query GetYoutubeVideoSearch($videoId: String) {
    getYoutubeVideoSearch(videoId: $videoId) {
      kind
      etag
      pageInfo {
        totalResults
        resultsPerPage
        __typename
      }
      nextPageToken
      items {
        id
        kind
        etag
        snippet {
          publishedAt
          channelId
          title
          description
          thumbnails {
            default {
              url
              width
              height
              __typename
            }
            medium {
              url
              width
              height
              __typename
            }
            high {
              url
              width
              height
              __typename
            }
            standard {
              url
              width
              height
              __typename
            }
            maxres {
              url
              width
              height
              __typename
            }
            __typename
          }
          channelTitle
          localized {
            title
            description
            __typename
          }
          __typename
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
          contentRating {
            acbRating
            agcomRating
            anatelRating
            bbfcRating
            bfvcRating
            bmukkRating
            catvRating
            catvfrRating
            cbfcRating
            cccRating
            cceRating
            chfilmRating
            chvrsRating
            cicfRating
            cnaRating
            cncRating
            csaRating
            cscfRating
            czfilmRating
            djctqRating
            djctqRatingReasons
            ecbmctRating
            eefilmRating
            egfilmRating
            eirinRating
            fcbmRating
            fcoRating
            fmocRating
            fpbRating
            fpbRatingReasons
            fskRating
            grfilmRating
            icaaRating
            ifcoRating
            ilfilmRating
            incaaRating
            kfcbRating
            kijkwijzerRating
            kmrbRating
            lsfRating
            mccaaRating
            mccypRating
            mcstRating
            mdaRating
            medietilsynetRating
            mekuRating
            mibacRating
            mocRating
            moctwRating
            mpaaRating
            mpaatRating
            mtrcbRating
            nbcRating
            nbcplRating
            nfrcRating
            nfvcbRating
            nkclvRating
            oflcRating
            pefilmRating
            rcnofRating
            resorteviolenciaRating
            rtcRating
            rteRating
            russiaRating
            skfilmRating
            smaisRating
            smsaRating
            tvpgRating
            ytRating
            __typename
          }
          regionRestriction {
            allowed
            blocked
            __typename
          }
          hasCustomThumbnail
          __typename
        }
        status {
          uploadStatus
          privacyStatus
          license
          embeddable
          publicStatsViewable
          __typename
        }
        statistics {
          viewCount
          likeCount
          dislikeCount
          favoriteCount
          commentCount
          __typename
        }
        __typename
      }
      __typename
    }
  }
`;
export const getYoutubePlaylistItems = /* GraphQL */ `
  query GetYoutubePlaylistItems($playlistId: String, $pageToken: String) {
    getYoutubePlaylistItems(playlistId: $playlistId, pageToken: $pageToken) {
      kind
      etag
      pageInfo {
        totalResults
        resultsPerPage
        __typename
      }
      nextPageToken
      items {
        id
        kind
        etag
        snippet {
          publishedAt
          channelId
          title
          description
          thumbnails {
            default {
              url
              width
              height
              __typename
            }
            medium {
              url
              width
              height
              __typename
            }
            high {
              url
              width
              height
              __typename
            }
            standard {
              url
              width
              height
              __typename
            }
            maxres {
              url
              width
              height
              __typename
            }
            __typename
          }
          channelTitle
          localized {
            title
            description
            __typename
          }
          __typename
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
          contentRating {
            acbRating
            agcomRating
            anatelRating
            bbfcRating
            bfvcRating
            bmukkRating
            catvRating
            catvfrRating
            cbfcRating
            cccRating
            cceRating
            chfilmRating
            chvrsRating
            cicfRating
            cnaRating
            cncRating
            csaRating
            cscfRating
            czfilmRating
            djctqRating
            djctqRatingReasons
            ecbmctRating
            eefilmRating
            egfilmRating
            eirinRating
            fcbmRating
            fcoRating
            fmocRating
            fpbRating
            fpbRatingReasons
            fskRating
            grfilmRating
            icaaRating
            ifcoRating
            ilfilmRating
            incaaRating
            kfcbRating
            kijkwijzerRating
            kmrbRating
            lsfRating
            mccaaRating
            mccypRating
            mcstRating
            mdaRating
            medietilsynetRating
            mekuRating
            mibacRating
            mocRating
            moctwRating
            mpaaRating
            mpaatRating
            mtrcbRating
            nbcRating
            nbcplRating
            nfrcRating
            nfvcbRating
            nkclvRating
            oflcRating
            pefilmRating
            rcnofRating
            resorteviolenciaRating
            rtcRating
            rteRating
            russiaRating
            skfilmRating
            smaisRating
            smsaRating
            tvpgRating
            ytRating
            __typename
          }
          regionRestriction {
            allowed
            blocked
            __typename
          }
          hasCustomThumbnail
          __typename
        }
        status {
          uploadStatus
          privacyStatus
          license
          embeddable
          publicStatsViewable
          __typename
        }
        statistics {
          viewCount
          likeCount
          dislikeCount
          favoriteCount
          commentCount
          __typename
        }
        __typename
      }
      __typename
    }
  }
`;
export const getYoutubeVideo = /* GraphQL */ `
  query GetYoutubeVideo($videoID: String) {
    getYoutubeVideo(videoID: $videoID) {
      kind
      etag
      pageInfo {
        totalResults
        resultsPerPage
        __typename
      }
      nextPageToken
      items {
        id
        kind
        etag
        snippet {
          publishedAt
          channelId
          title
          description
          thumbnails {
            default {
              url
              width
              height
              __typename
            }
            medium {
              url
              width
              height
              __typename
            }
            high {
              url
              width
              height
              __typename
            }
            standard {
              url
              width
              height
              __typename
            }
            maxres {
              url
              width
              height
              __typename
            }
            __typename
          }
          channelTitle
          localized {
            title
            description
            __typename
          }
          __typename
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
          contentRating {
            acbRating
            agcomRating
            anatelRating
            bbfcRating
            bfvcRating
            bmukkRating
            catvRating
            catvfrRating
            cbfcRating
            cccRating
            cceRating
            chfilmRating
            chvrsRating
            cicfRating
            cnaRating
            cncRating
            csaRating
            cscfRating
            czfilmRating
            djctqRating
            djctqRatingReasons
            ecbmctRating
            eefilmRating
            egfilmRating
            eirinRating
            fcbmRating
            fcoRating
            fmocRating
            fpbRating
            fpbRatingReasons
            fskRating
            grfilmRating
            icaaRating
            ifcoRating
            ilfilmRating
            incaaRating
            kfcbRating
            kijkwijzerRating
            kmrbRating
            lsfRating
            mccaaRating
            mccypRating
            mcstRating
            mdaRating
            medietilsynetRating
            mekuRating
            mibacRating
            mocRating
            moctwRating
            mpaaRating
            mpaatRating
            mtrcbRating
            nbcRating
            nbcplRating
            nfrcRating
            nfvcbRating
            nkclvRating
            oflcRating
            pefilmRating
            rcnofRating
            resorteviolenciaRating
            rtcRating
            rteRating
            russiaRating
            skfilmRating
            smaisRating
            smsaRating
            tvpgRating
            ytRating
            __typename
          }
          regionRestriction {
            allowed
            blocked
            __typename
          }
          hasCustomThumbnail
          __typename
        }
        status {
          uploadStatus
          privacyStatus
          license
          embeddable
          publicStatsViewable
          __typename
        }
        statistics {
          viewCount
          likeCount
          dislikeCount
          favoriteCount
          commentCount
          __typename
        }
        __typename
      }
      __typename
    }
  }
`;
export const getYoutubePlaylist = /* GraphQL */ `
  query GetYoutubePlaylist($nextPageToken: String) {
    getYoutubePlaylist(nextPageToken: $nextPageToken) {
      kind
      etag
      nextPageToken
      pageInfo {
        totalResults
        resultsPerPage
        __typename
      }
      items {
        kind
        etag
        id
        snippet {
          publishedAt
          channelId
          title
          description
          thumbnails {
            default {
              url
              width
              height
              __typename
            }
            medium {
              url
              width
              height
              __typename
            }
            high {
              url
              width
              height
              __typename
            }
            standard {
              url
              width
              height
              __typename
            }
            maxres {
              url
              width
              height
              __typename
            }
            __typename
          }
          channelTitle
          localized {
            title
            description
            __typename
          }
          __typename
        }
        __typename
      }
      __typename
    }
  }
`;
export const getYoutubeVideoContentDetails = /* GraphQL */ `
  query GetYoutubeVideoContentDetails($videoId: String) {
    getYoutubeVideoContentDetails(videoId: $videoId) {
      kind
      etag
      pageInfo {
        totalResults
        resultsPerPage
        __typename
      }
      nextPageToken
      items {
        id
        kind
        etag
        snippet {
          publishedAt
          channelId
          title
          description
          thumbnails {
            default {
              url
              width
              height
              __typename
            }
            medium {
              url
              width
              height
              __typename
            }
            high {
              url
              width
              height
              __typename
            }
            standard {
              url
              width
              height
              __typename
            }
            maxres {
              url
              width
              height
              __typename
            }
            __typename
          }
          channelTitle
          localized {
            title
            description
            __typename
          }
          __typename
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
          contentRating {
            acbRating
            agcomRating
            anatelRating
            bbfcRating
            bfvcRating
            bmukkRating
            catvRating
            catvfrRating
            cbfcRating
            cccRating
            cceRating
            chfilmRating
            chvrsRating
            cicfRating
            cnaRating
            cncRating
            csaRating
            cscfRating
            czfilmRating
            djctqRating
            djctqRatingReasons
            ecbmctRating
            eefilmRating
            egfilmRating
            eirinRating
            fcbmRating
            fcoRating
            fmocRating
            fpbRating
            fpbRatingReasons
            fskRating
            grfilmRating
            icaaRating
            ifcoRating
            ilfilmRating
            incaaRating
            kfcbRating
            kijkwijzerRating
            kmrbRating
            lsfRating
            mccaaRating
            mccypRating
            mcstRating
            mdaRating
            medietilsynetRating
            mekuRating
            mibacRating
            mocRating
            moctwRating
            mpaaRating
            mpaatRating
            mtrcbRating
            nbcRating
            nbcplRating
            nfrcRating
            nfvcbRating
            nkclvRating
            oflcRating
            pefilmRating
            rcnofRating
            resorteviolenciaRating
            rtcRating
            rteRating
            russiaRating
            skfilmRating
            smaisRating
            smsaRating
            tvpgRating
            ytRating
            __typename
          }
          regionRestriction {
            allowed
            blocked
            __typename
          }
          hasCustomThumbnail
          __typename
        }
        status {
          uploadStatus
          privacyStatus
          license
          embeddable
          publicStatsViewable
          __typename
        }
        statistics {
          viewCount
          likeCount
          dislikeCount
          favoriteCount
          commentCount
          __typename
        }
        __typename
      }
      __typename
    }
  }
`;
export const getYoutubeVideoStatistics = /* GraphQL */ `
  query GetYoutubeVideoStatistics($videoId: String) {
    getYoutubeVideoStatistics(videoId: $videoId) {
      kind
      etag
      pageInfo {
        totalResults
        resultsPerPage
        __typename
      }
      nextPageToken
      items {
        id
        kind
        etag
        snippet {
          publishedAt
          channelId
          title
          description
          thumbnails {
            default {
              url
              width
              height
              __typename
            }
            medium {
              url
              width
              height
              __typename
            }
            high {
              url
              width
              height
              __typename
            }
            standard {
              url
              width
              height
              __typename
            }
            maxres {
              url
              width
              height
              __typename
            }
            __typename
          }
          channelTitle
          localized {
            title
            description
            __typename
          }
          __typename
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
          contentRating {
            acbRating
            agcomRating
            anatelRating
            bbfcRating
            bfvcRating
            bmukkRating
            catvRating
            catvfrRating
            cbfcRating
            cccRating
            cceRating
            chfilmRating
            chvrsRating
            cicfRating
            cnaRating
            cncRating
            csaRating
            cscfRating
            czfilmRating
            djctqRating
            djctqRatingReasons
            ecbmctRating
            eefilmRating
            egfilmRating
            eirinRating
            fcbmRating
            fcoRating
            fmocRating
            fpbRating
            fpbRatingReasons
            fskRating
            grfilmRating
            icaaRating
            ifcoRating
            ilfilmRating
            incaaRating
            kfcbRating
            kijkwijzerRating
            kmrbRating
            lsfRating
            mccaaRating
            mccypRating
            mcstRating
            mdaRating
            medietilsynetRating
            mekuRating
            mibacRating
            mocRating
            moctwRating
            mpaaRating
            mpaatRating
            mtrcbRating
            nbcRating
            nbcplRating
            nfrcRating
            nfvcbRating
            nkclvRating
            oflcRating
            pefilmRating
            rcnofRating
            resorteviolenciaRating
            rtcRating
            rteRating
            russiaRating
            skfilmRating
            smaisRating
            smsaRating
            tvpgRating
            ytRating
            __typename
          }
          regionRestriction {
            allowed
            blocked
            __typename
          }
          hasCustomThumbnail
          __typename
        }
        status {
          uploadStatus
          privacyStatus
          license
          embeddable
          publicStatsViewable
          __typename
        }
        statistics {
          viewCount
          likeCount
          dislikeCount
          favoriteCount
          commentCount
          __typename
        }
        __typename
      }
      __typename
    }
  }
`;
export const getYoutubeCaptionlist = /* GraphQL */ `
  query GetYoutubeCaptionlist($videoId: String) {
    getYoutubeCaptionlist(videoId: $videoId) {
      kind
      etag
      items {
        kind
        etag
        id
        snippet {
          videoId
          lastUpdated
          trackKind
          language
          name
          audioTrackType
          isCC
          isLarge
          isEasyReader
          isDraft
          isAutoSynced
          status
          __typename
        }
        __typename
      }
      __typename
    }
  }
`;
export const downloadYoutubeCaption = /* GraphQL */ `
  query DownloadYoutubeCaption(
    $videoId: String
    $tlang: String
    $trackKind: String
    $name: String
  ) {
    downloadYoutubeCaption(
      videoId: $videoId
      tlang: $tlang
      trackKind: $trackKind
      name: $name
    ) {
      transcript {
        text {
          dur
          start
          content
          __typename
        }
        __typename
      }
      __typename
    }
  }
`;
export const getTakenoteSeries = /* GraphQL */ `
  query GetTakenoteSeries($user: Int, $start: Int, $count: Int) {
    getTakenoteSeries(user: $user, start: $start, count: $count) {
      id
      title
      description
      imageUrl
      public
      thumbnail
      startDate
      endDate
      sermonCommentCount
      homeChurchCommentCount
      __typename
    }
  }
`;
export const getTakenoteSermon = /* GraphQL */ `
  query GetTakenoteSermon($seriesId: String, $user: Int) {
    getTakenoteSermon(seriesId: $seriesId, user: $user) {
      id
      title
      speaker
      deliveryDate
      description
      audioUrl
      mediaEntries {
        id
        type
        contentType
        kind
        label
        url
        __typename
      }
      public
      series_FK
      sermonNoteCount
      quoteNoteCount
      homeChurchNoteCount
      sermonCommentCount
      __typename
    }
  }
`;
export const getTakenoteSermonVerses = /* GraphQL */ `
  query GetTakenoteSermonVerses($sermondId: String) {
    getTakenoteSermonVerses(sermondId: $sermondId) {
      sermonVerses {
        id
        chapterVerse
        translation
        content
        sermons_FK
        notes_FK
        __typename
      }
      __typename
    }
  }
`;
export const getTakenoteLocations = /* GraphQL */ `
  query GetTakenoteLocations {
    getTakenoteLocations {
      _id
      id
      name
      categories
      location {
        longitude
        latitude
        __typename
      }
      state
      __typename
    }
  }
`;
export const getFBEvents = /* GraphQL */ `
  query GetFBEvents($pageId: String) {
    getFBEvents(pageId: $pageId) {
      data {
        description
        end_time
        is_online
        online_event_format
        online_event_third_party_url
        name
        place {
          name
          location {
            city
            country
            latitude
            longitude
            state
            street
            zip
            __typename
          }
          id
          __typename
        }
        start_time
        id
        ticket_uri
        event_times {
          description
          start_time
          end_time
          name
          place {
            name
            location {
              city
              country
              latitude
              longitude
              state
              street
              zip
              __typename
            }
            id
            __typename
          }
          id
          ticket_uri
          cover {
            id
            offset_x
            offset_y
            source
            __typename
          }
          __typename
        }
        cover {
          id
          offset_x
          offset_y
          source
          __typename
        }
        picture {
          url
          __typename
        }
        __typename
      }
      paging {
        cursors {
          before
          after
          __typename
        }
        __typename
      }
      __typename
    }
  }
`;
export const getFBEvent = /* GraphQL */ `
  query GetFBEvent($eventId: String) {
    getFBEvent(eventId: $eventId) {
      description
      end_time
      is_online
      online_event_format
      online_event_third_party_url
      name
      place {
        name
        location {
          city
          country
          latitude
          longitude
          state
          street
          zip
          __typename
        }
        id
        __typename
      }
      start_time
      id
      ticket_uri
      event_times {
        description
        start_time
        end_time
        name
        place {
          name
          location {
            city
            country
            latitude
            longitude
            state
            street
            zip
            __typename
          }
          id
          __typename
        }
        id
        ticket_uri
        cover {
          id
          offset_x
          offset_y
          source
          __typename
        }
        __typename
      }
      cover {
        id
        offset_x
        offset_y
        source
        __typename
      }
      picture {
        url
        __typename
      }
      __typename
    }
  }
`;
export const getInstaPhotos = /* GraphQL */ `
  query GetInstaPhotos($pageId: String) {
    getInstaPhotos(pageId: $pageId) {
      data {
        id
        media_url
        caption
        comments_count
        like_count
        media_type
        thumbnail_url
        timestamp
        permalink
        shortcode
        __typename
      }
      paging {
        cursors {
          before
          after
          __typename
        }
        __typename
      }
      __typename
    }
  }
`;
export const getTakenoteNotes = /* GraphQL */ `
  query GetTakenoteNotes($sermonId: String, $noteType: String) {
    getTakenoteNotes(sermonId: $sermonId, noteType: $noteType) {
      homeChurchNotes {
        id
        noteType
        content
        position
        timecode
        sermons_FK
        __typename
      }
      sermonNotes {
        id
        noteType
        content
        position
        timecode
        sermons_FK
        __typename
      }
      sermonVerses {
        id
        chapterVerse
        translation
        content
        sermons_FK
        notes_FK
        __typename
      }
      homeChurchVerses {
        id
        chapterVerse
        translation
        content
        sermons_FK
        notes_FK
        __typename
      }
      __typename
    }
  }
`;
export const fuzzySearchVideos = /* GraphQL */ `
  query FuzzySearchVideos(
    $filter: String
    $sort: fuzzySearchableVideoSortInput
    $limit: Int
    $nextToken: String
  ) {
    fuzzySearchVideos(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        createdBy
        createdDate
        speakers {
          items {
            id
            speakerVideosSpeakerId
            video {
              id
              createdBy
              createdDate
              speakers {
                items {
                  id
                  speakerVideosSpeakerId
                  speakerVideosVideoId
                  videoPublishedDate
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              episodeTitle
              originalEpisodeTitle
              episodeNumber
              seriesTitle
              videoSeriesId
              series {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              customPlaylistIDs
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              publishedDate
              recordedDate
              description
              viewCount
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
                  channelId
                  title
                  description
                  channelTitle
                  __typename
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
                  hasCustomThumbnail
                  __typename
                }
                status {
                  uploadStatus
                  privacyStatus
                  license
                  embeddable
                  publicStatsViewable
                  __typename
                }
                __typename
              }
              videoTypes
              notesURL
              videoURL
              audioURL
              thumbnailDescription
              move
              createdAt
              updatedAt
              __typename
            }
            speakerVideosVideoId
            speaker {
              id
              name
              image
              videos {
                items {
                  id
                  speakerVideosSpeakerId
                  speakerVideosVideoId
                  videoPublishedDate
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              hidden
              createdAt
              updatedAt
              __typename
            }
            videoPublishedDate
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        episodeTitle
        originalEpisodeTitle
        episodeNumber
        seriesTitle
        videoSeriesId
        series {
          id
          videos {
            items {
              id
              createdBy
              createdDate
              speakers {
                items {
                  id
                  speakerVideosSpeakerId
                  speakerVideosVideoId
                  videoPublishedDate
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              episodeTitle
              originalEpisodeTitle
              episodeNumber
              seriesTitle
              videoSeriesId
              series {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              customPlaylistIDs
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              publishedDate
              recordedDate
              description
              viewCount
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
                  channelId
                  title
                  description
                  channelTitle
                  __typename
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
                  hasCustomThumbnail
                  __typename
                }
                status {
                  uploadStatus
                  privacyStatus
                  license
                  embeddable
                  publicStatsViewable
                  __typename
                }
                __typename
              }
              videoTypes
              notesURL
              videoURL
              audioURL
              thumbnailDescription
              move
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          blogs {
            items {
              id
              author
              createdBy
              createdDate
              publishedDate
              expirationDate
              videoSeries {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              series {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              blogSeriesId
              blogSeriesIndex
              blogSeries {
                items {
                  id
                  blogSeriesID
                  blogPostID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogStatus
              description
              thumbnailDescription
              content
              blogTitle
              topics
              tags
              hiddenMainIndex
              squareImage {
                src
                alt
                __typename
              }
              bannerImage {
                src
                alt
                __typename
              }
              babyHeroImage {
                src
                alt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          blogPosts {
            items {
              id
              videoSeriesId
              blogId
              blog {
                id
                author
                createdBy
                createdDate
                publishedDate
                expirationDate
                videoSeries {
                  nextToken
                  __typename
                }
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  __typename
                }
                blogSeriesId
                blogSeriesIndex
                blogSeries {
                  nextToken
                  __typename
                }
                blogStatus
                description
                thumbnailDescription
                content
                blogTitle
                topics
                tags
                hiddenMainIndex
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              videoSeries {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          seriesType
          title
          description
          thumbnailDescription
          image
          squareImage {
            src
            alt
            __typename
          }
          bannerImage {
            src
            alt
            __typename
          }
          babyHeroImage {
            src
            alt
            __typename
          }
          startDate
          endDate
          notes {
            items {
              id
              title
              content
              questions
              jsonContent
              jsonQuestions
              episodeDescription
              episodeNumber
              seriesId
              series {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              pdf
              topics
              tags
              verses {
                items {
                  id
                  key
                  offset
                  length
                  dataType
                  content
                  youVersionUri
                  noteId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        customPlaylistIDs
        customPlaylists {
          items {
            id
            videoID
            customPlaylistID
            customPlaylist {
              id
              videos {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              seriesType
              title
              description
              thumbnailDescription
              createdAt
              updatedAt
              __typename
            }
            video {
              id
              createdBy
              createdDate
              speakers {
                items {
                  id
                  speakerVideosSpeakerId
                  speakerVideosVideoId
                  videoPublishedDate
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              episodeTitle
              originalEpisodeTitle
              episodeNumber
              seriesTitle
              videoSeriesId
              series {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              customPlaylistIDs
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              publishedDate
              recordedDate
              description
              viewCount
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
                  channelId
                  title
                  description
                  channelTitle
                  __typename
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
                  hasCustomThumbnail
                  __typename
                }
                status {
                  uploadStatus
                  privacyStatus
                  license
                  embeddable
                  publicStatsViewable
                  __typename
                }
                __typename
              }
              videoTypes
              notesURL
              videoURL
              audioURL
              thumbnailDescription
              move
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        publishedDate
        recordedDate
        description
        viewCount
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
            channelId
            title
            description
            thumbnails {
              default {
                url
                width
                height
                __typename
              }
              medium {
                url
                width
                height
                __typename
              }
              high {
                url
                width
                height
                __typename
              }
              standard {
                url
                width
                height
                __typename
              }
              maxres {
                url
                width
                height
                __typename
              }
              __typename
            }
            channelTitle
            localized {
              title
              description
              __typename
            }
            __typename
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
            contentRating {
              acbRating
              agcomRating
              anatelRating
              bbfcRating
              bfvcRating
              bmukkRating
              catvRating
              catvfrRating
              cbfcRating
              cccRating
              cceRating
              chfilmRating
              chvrsRating
              cicfRating
              cnaRating
              cncRating
              csaRating
              cscfRating
              czfilmRating
              djctqRating
              djctqRatingReasons
              ecbmctRating
              eefilmRating
              egfilmRating
              eirinRating
              fcbmRating
              fcoRating
              fmocRating
              fpbRating
              fpbRatingReasons
              fskRating
              grfilmRating
              icaaRating
              ifcoRating
              ilfilmRating
              incaaRating
              kfcbRating
              kijkwijzerRating
              kmrbRating
              lsfRating
              mccaaRating
              mccypRating
              mcstRating
              mdaRating
              medietilsynetRating
              mekuRating
              mibacRating
              mocRating
              moctwRating
              mpaaRating
              mpaatRating
              mtrcbRating
              nbcRating
              nbcplRating
              nfrcRating
              nfvcbRating
              nkclvRating
              oflcRating
              pefilmRating
              rcnofRating
              resorteviolenciaRating
              rtcRating
              rteRating
              russiaRating
              skfilmRating
              smaisRating
              smsaRating
              tvpgRating
              ytRating
              __typename
            }
            regionRestriction {
              allowed
              blocked
              __typename
            }
            hasCustomThumbnail
            __typename
          }
          status {
            uploadStatus
            privacyStatus
            license
            embeddable
            publicStatsViewable
            __typename
          }
          __typename
        }
        videoTypes
        notesURL
        videoURL
        audioURL
        thumbnailDescription
        move
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const fuzzySearchVideosByType = /* GraphQL */ `
  query FuzzySearchVideosByType(
    $videoType: String
    $filter: String
    $sort: fuzzySearchableVideoSortInput
    $limit: Int
    $nextToken: String
  ) {
    fuzzySearchVideosByType(
      videoType: $videoType
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        createdBy
        createdDate
        speakers {
          items {
            id
            speakerVideosSpeakerId
            video {
              id
              createdBy
              createdDate
              speakers {
                items {
                  id
                  speakerVideosSpeakerId
                  speakerVideosVideoId
                  videoPublishedDate
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              episodeTitle
              originalEpisodeTitle
              episodeNumber
              seriesTitle
              videoSeriesId
              series {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              customPlaylistIDs
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              publishedDate
              recordedDate
              description
              viewCount
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
                  channelId
                  title
                  description
                  channelTitle
                  __typename
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
                  hasCustomThumbnail
                  __typename
                }
                status {
                  uploadStatus
                  privacyStatus
                  license
                  embeddable
                  publicStatsViewable
                  __typename
                }
                __typename
              }
              videoTypes
              notesURL
              videoURL
              audioURL
              thumbnailDescription
              move
              createdAt
              updatedAt
              __typename
            }
            speakerVideosVideoId
            speaker {
              id
              name
              image
              videos {
                items {
                  id
                  speakerVideosSpeakerId
                  speakerVideosVideoId
                  videoPublishedDate
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              hidden
              createdAt
              updatedAt
              __typename
            }
            videoPublishedDate
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        episodeTitle
        originalEpisodeTitle
        episodeNumber
        seriesTitle
        videoSeriesId
        series {
          id
          videos {
            items {
              id
              createdBy
              createdDate
              speakers {
                items {
                  id
                  speakerVideosSpeakerId
                  speakerVideosVideoId
                  videoPublishedDate
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              episodeTitle
              originalEpisodeTitle
              episodeNumber
              seriesTitle
              videoSeriesId
              series {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              customPlaylistIDs
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              publishedDate
              recordedDate
              description
              viewCount
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
                  channelId
                  title
                  description
                  channelTitle
                  __typename
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
                  hasCustomThumbnail
                  __typename
                }
                status {
                  uploadStatus
                  privacyStatus
                  license
                  embeddable
                  publicStatsViewable
                  __typename
                }
                __typename
              }
              videoTypes
              notesURL
              videoURL
              audioURL
              thumbnailDescription
              move
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          blogs {
            items {
              id
              author
              createdBy
              createdDate
              publishedDate
              expirationDate
              videoSeries {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              series {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              blogSeriesId
              blogSeriesIndex
              blogSeries {
                items {
                  id
                  blogSeriesID
                  blogPostID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogStatus
              description
              thumbnailDescription
              content
              blogTitle
              topics
              tags
              hiddenMainIndex
              squareImage {
                src
                alt
                __typename
              }
              bannerImage {
                src
                alt
                __typename
              }
              babyHeroImage {
                src
                alt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          blogPosts {
            items {
              id
              videoSeriesId
              blogId
              blog {
                id
                author
                createdBy
                createdDate
                publishedDate
                expirationDate
                videoSeries {
                  nextToken
                  __typename
                }
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  __typename
                }
                blogSeriesId
                blogSeriesIndex
                blogSeries {
                  nextToken
                  __typename
                }
                blogStatus
                description
                thumbnailDescription
                content
                blogTitle
                topics
                tags
                hiddenMainIndex
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              videoSeries {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          seriesType
          title
          description
          thumbnailDescription
          image
          squareImage {
            src
            alt
            __typename
          }
          bannerImage {
            src
            alt
            __typename
          }
          babyHeroImage {
            src
            alt
            __typename
          }
          startDate
          endDate
          notes {
            items {
              id
              title
              content
              questions
              jsonContent
              jsonQuestions
              episodeDescription
              episodeNumber
              seriesId
              series {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              pdf
              topics
              tags
              verses {
                items {
                  id
                  key
                  offset
                  length
                  dataType
                  content
                  youVersionUri
                  noteId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        customPlaylistIDs
        customPlaylists {
          items {
            id
            videoID
            customPlaylistID
            customPlaylist {
              id
              videos {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              seriesType
              title
              description
              thumbnailDescription
              createdAt
              updatedAt
              __typename
            }
            video {
              id
              createdBy
              createdDate
              speakers {
                items {
                  id
                  speakerVideosSpeakerId
                  speakerVideosVideoId
                  videoPublishedDate
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              episodeTitle
              originalEpisodeTitle
              episodeNumber
              seriesTitle
              videoSeriesId
              series {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              customPlaylistIDs
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              publishedDate
              recordedDate
              description
              viewCount
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
                  channelId
                  title
                  description
                  channelTitle
                  __typename
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
                  hasCustomThumbnail
                  __typename
                }
                status {
                  uploadStatus
                  privacyStatus
                  license
                  embeddable
                  publicStatsViewable
                  __typename
                }
                __typename
              }
              videoTypes
              notesURL
              videoURL
              audioURL
              thumbnailDescription
              move
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        publishedDate
        recordedDate
        description
        viewCount
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
            channelId
            title
            description
            thumbnails {
              default {
                url
                width
                height
                __typename
              }
              medium {
                url
                width
                height
                __typename
              }
              high {
                url
                width
                height
                __typename
              }
              standard {
                url
                width
                height
                __typename
              }
              maxres {
                url
                width
                height
                __typename
              }
              __typename
            }
            channelTitle
            localized {
              title
              description
              __typename
            }
            __typename
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
            contentRating {
              acbRating
              agcomRating
              anatelRating
              bbfcRating
              bfvcRating
              bmukkRating
              catvRating
              catvfrRating
              cbfcRating
              cccRating
              cceRating
              chfilmRating
              chvrsRating
              cicfRating
              cnaRating
              cncRating
              csaRating
              cscfRating
              czfilmRating
              djctqRating
              djctqRatingReasons
              ecbmctRating
              eefilmRating
              egfilmRating
              eirinRating
              fcbmRating
              fcoRating
              fmocRating
              fpbRating
              fpbRatingReasons
              fskRating
              grfilmRating
              icaaRating
              ifcoRating
              ilfilmRating
              incaaRating
              kfcbRating
              kijkwijzerRating
              kmrbRating
              lsfRating
              mccaaRating
              mccypRating
              mcstRating
              mdaRating
              medietilsynetRating
              mekuRating
              mibacRating
              mocRating
              moctwRating
              mpaaRating
              mpaatRating
              mtrcbRating
              nbcRating
              nbcplRating
              nfrcRating
              nfvcbRating
              nkclvRating
              oflcRating
              pefilmRating
              rcnofRating
              resorteviolenciaRating
              rtcRating
              rteRating
              russiaRating
              skfilmRating
              smaisRating
              smsaRating
              tvpgRating
              ytRating
              __typename
            }
            regionRestriction {
              allowed
              blocked
              __typename
            }
            hasCustomThumbnail
            __typename
          }
          status {
            uploadStatus
            privacyStatus
            license
            embeddable
            publicStatsViewable
            __typename
          }
          __typename
        }
        videoTypes
        notesURL
        videoURL
        audioURL
        thumbnailDescription
        move
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const F1ListActivities = /* GraphQL */ `
  query F1ListActivities($page: String) {
    F1ListActivities(page: $page) {
      id
      uri
      name
      description
      hasCheckin
      checkinMinutesBefore
      hasNameTag
      hasReceipt
      startAge
      endAge
      confidential
      requiresRegistration
      rosterBySchedule
      assignmentsOverrideClosedRoom
      autoAssignmentOption
      pagerEnabled
      webEnabled
      __typename
    }
  }
`;
export const F1ListAssignments = /* GraphQL */ `
  query F1ListAssignments($itemId: String, $page: String) {
    F1ListAssignments(itemId: $itemId, page: $page) {
      id
      personId
      uri
      type {
        name
        id
        uri
        __typename
      }
      person {
        id
        uri
        __typename
      }
      activity {
        name
        id
        uri
        __typename
      }
      schedule {
        id
        uri
        __typename
      }
      roster {
        id
        uri
        __typename
      }
      rosterFolder {
        id
        uri
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const F1ListGroupTypes = /* GraphQL */ `
  query F1ListGroupTypes {
    F1ListGroupTypes {
      groupTypes {
        groupType {
          id
          name
          description
          isWebEnabled
          isSearchable
          __typename
        }
        __typename
      }
      __typename
    }
  }
`;
export const F1ListGroups = /* GraphQL */ `
  query F1ListGroups($itemId: String) {
    F1ListGroups(itemId: $itemId) {
      groups {
        group {
          id
          name
          description
          startDate
          expirationDate
          isOpen
          isPublic
          hasChildcare
          isSearchable
          churchCampus {
            id
            name
            __typename
          }
          groupType {
            id
            name
            __typename
          }
          groupURL
          gender {
            name
            __typename
          }
          maritalStatus {
            name
            __typename
          }
          startAgeRange
          endAgeRange
          dateRangeType {
            id
            name
            __typename
          }
          leadersCount
          membersCount
          openProspectsCount
          event {
            id
            name
            __typename
          }
          createdDate
          lastUpdatedDate
          isLocationPrivate
          timeZone {
            id
            name
            __typename
          }
          location {
            id
            name
            description
            isOnline
            url
            address {
              address1
              address2
              address3
              city
              stProvince
              postalCode
              county
              country
              carrierRoute
              deliveryPoint
              latitude
              longitude
              createdDate
              lastUpdatedDate
              __typename
            }
            createdDate
            lastUpdatedDate
            __typename
          }
          schedule {
            id
            name
            description
            startTime
            endTime
            numberRecurrences
            startDate
            endDate
            recurrenceType {
              name
              __typename
            }
            recurrences {
              recurrence {
                recurrenceWeekly {
                  recurrenceFrequency
                  occurOnSunday
                  occurOnMonday
                  occurOnTuesday
                  occurOnWednesday
                  occurOnThursday
                  occurOnFriday
                  occurOnSaturday
                  __typename
                }
                recurrenceMonthly {
                  recurrenceFrequency
                  recurrenceOffset
                  monthDay
                  monthWeekDay
                  __typename
                }
                __typename
              }
              __typename
            }
            createdDate
            createByPerson
            lastUpdatedDate
            lastUpdatedByPerson
            __typename
          }
          __typename
        }
        __typename
      }
      __typename
    }
  }
`;
export const F1ListEventSchedules = /* GraphQL */ `
  query F1ListEventSchedules($itemId: [String]) {
    F1ListEventSchedules(itemId: $itemId) {
      id
      event {
        schedules {
          schedule {
            id
            name
            description
            startTime
            endTime
            numberRecurrences
            startDate
            endDate
            recurrenceType {
              name
              __typename
            }
            recurrences {
              recurrence {
                recurrenceWeekly {
                  recurrenceFrequency
                  occurOnSunday
                  occurOnMonday
                  occurOnTuesday
                  occurOnWednesday
                  occurOnThursday
                  occurOnFriday
                  occurOnSaturday
                  __typename
                }
                recurrenceMonthly {
                  recurrenceFrequency
                  recurrenceOffset
                  monthDay
                  monthWeekDay
                  __typename
                }
                __typename
              }
              __typename
            }
            createdDate
            createByPerson
            lastUpdatedDate
            lastUpdatedByPerson
            __typename
          }
          __typename
        }
        __typename
      }
      __typename
    }
  }
`;
export const F1ListTimezones = /* GraphQL */ `
  query F1ListTimezones($itemId: [String]) {
    F1ListTimezones(itemId: $itemId) {
      id
      info {
        timeZone {
          id
          name
          __typename
        }
        __typename
      }
      __typename
    }
  }
`;
export const emailHomeChurch = /* GraphQL */ `
  query EmailHomeChurch(
    $name: String
    $email: String
    $message: String
    $homeChurchId: String
  ) {
    emailHomeChurch(
      name: $name
      email: $email
      message: $message
      homeChurchId: $homeChurchId
    ) {
      err
      data
      __typename
    }
  }
`;
export const askQuestion = /* GraphQL */ `
  query AskQuestion($email: String, $body: String) {
    askQuestion(email: $email, body: $body) {
      err
      data
      __typename
    }
  }
`;
export const generatePdf = /* GraphQL */ `
  query GeneratePdf(
    $notes: String
    $questions: String
    $week: String
    $title: String
    $userId: String
  ) {
    generatePdf(
      notes: $notes
      questions: $questions
      week: $week
      title: $title
      userId: $userId
    ) {
      objectKey
      __typename
    }
  }
`;
export const tmhClearCache = /* GraphQL */ `
  query TmhClearCache($ignore: String) {
    tmhClearCache(ignore: $ignore)
  }
`;
export const tmhPinpointListSegments = /* GraphQL */ `
  query TmhPinpointListSegments($nextToken: String) {
    tmhPinpointListSegments(nextToken: $nextToken) {
      Item {
        Name
        Dimensions {
          Demographic {
            Channel {
              DimensionType
              Values
              __typename
            }
            Platform {
              DimensionType
              Values
              __typename
            }
            DeviceType {
              DimensionType
              Values
              __typename
            }
            AppVersion {
              DimensionType
              Values
              __typename
            }
            Make {
              DimensionType
              Values
              __typename
            }
            Model {
              DimensionType
              Values
              __typename
            }
            __typename
          }
          Location {
            Country {
              DimensionType
              Values
              __typename
            }
            GPSPoint {
              Coordinates {
                Latitude
                Longitude
                __typename
              }
              RangeInKilometers
              __typename
            }
            __typename
          }
          Behavior {
            Recency {
              RecencyType
              Duration
              __typename
            }
            __typename
          }
          Attributes
          Metrics
          UserAttributes
          __typename
        }
        SegmentGroups {
          Include
          Groups {
            Type
            Dimensions {
              Demographic {
                Channel {
                  DimensionType
                  Values
                  __typename
                }
                Platform {
                  DimensionType
                  Values
                  __typename
                }
                DeviceType {
                  DimensionType
                  Values
                  __typename
                }
                AppVersion {
                  DimensionType
                  Values
                  __typename
                }
                Make {
                  DimensionType
                  Values
                  __typename
                }
                Model {
                  DimensionType
                  Values
                  __typename
                }
                __typename
              }
              Location {
                Country {
                  DimensionType
                  Values
                  __typename
                }
                GPSPoint {
                  RangeInKilometers
                  __typename
                }
                __typename
              }
              Behavior {
                Recency {
                  RecencyType
                  Duration
                  __typename
                }
                __typename
              }
              Attributes
              Metrics
              UserAttributes
              __typename
            }
            SourceType
            SourceSegments {
              Id
              Version
              __typename
            }
            __typename
          }
          __typename
        }
        Id
        ApplicationId
        CreationDate
        LastModifiedDate
        Version
        SegmentType
        ImportDefinition {
          Size
          S3Url
          RoleArn
          ExternalId
          Format
          ChannelCounts
          __typename
        }
        Arn
        tags
        __typename
      }
      NextToken
      __typename
    }
  }
`;
export const tmhPinpointCreateCampaign = /* GraphQL */ `
  query TmhPinpointCreateCampaign(
    $name: String
    $description: String
    $segmentId: String
    $segmentVersion: String
    $schedule: PinpointScheduleInput
    $appleMessage: PinpointMessageInput
    $androidMessage: PinpointMessageInput
  ) {
    tmhPinpointCreateCampaign(
      name: $name
      description: $description
      segmentId: $segmentId
      segmentVersion: $segmentVersion
      schedule: $schedule
      appleMessage: $appleMessage
      androidMessage: $androidMessage
    )
  }
`;
export const tmhF1LinkUser = /* GraphQL */ `
  query TmhF1LinkUser {
    tmhF1LinkUser
  }
`;
export const tmhF1SyncGroupPermissions = /* GraphQL */ `
  query TmhF1SyncGroupPermissions {
    tmhF1SyncGroupPermissions
  }
`;
export const tmhF1SearchContributionReceipts = /* GraphQL */ `
  query TmhF1SearchContributionReceipts($pageId: String) {
    tmhF1SearchContributionReceipts(pageId: $pageId) {
      results {
        contributionReceipt {
          id
          accountReference
          amount
          receivedDate
          transmitDate
          returnDate
          retransmitDate
          glPostDate
          isSplit
          memo
          fund {
            id
            name
            fundTypeID
            __typename
          }
          subFund {
            id
            name
            __typename
          }
          account {
            id
            __typename
          }
          contributionType {
            id
            name
            __typename
          }
          contributionSubType {
            id
            name
            __typename
          }
          __typename
        }
        __typename
      }
      __typename
    }
  }
`;
export const tmhStripeAddCustomer = /* GraphQL */ `
  query TmhStripeAddCustomer(
    $idempotency: String
    $phone: String
    $email: String
    $firstName: String
    $lastName: String
    $orgName: String
    $billingAddress: StripeAddressInput
  ) {
    tmhStripeAddCustomer(
      idempotency: $idempotency
      phone: $phone
      email: $email
      firstName: $firstName
      lastName: $lastName
      orgName: $orgName
      billingAddress: $billingAddress
    ) {
      message
      __typename
    }
  }
`;
export const tmhStripeAttachPaymentMethod = /* GraphQL */ `
  query TmhStripeAttachPaymentMethod($id: String, $idempotency: String) {
    tmhStripeAttachPaymentMethod(id: $id, idempotency: $idempotency) {
      message
      __typename
    }
  }
`;
export const tmhStripeListPaymentMethods = /* GraphQL */ `
  query TmhStripeListPaymentMethods($pageId: String) {
    tmhStripeListPaymentMethods(pageId: $pageId) {
      data {
        id
        type
        card {
          brand
          last4
          exp_year
          exp_month
          funding
          country
          __typename
        }
        billing_details {
          email
          name
          phone
          address {
            city
            country
            line1
            line2
            postal_code
            state
            __typename
          }
          __typename
        }
        __typename
      }
      __typename
    }
  }
`;
export const tmhStripeListSubscriptions = /* GraphQL */ `
  query TmhStripeListSubscriptions($starting_after: String) {
    tmhStripeListSubscriptions(starting_after: $starting_after) {
      subscriptions {
        id
        unit_amount
        name
        interval
        interval_count
        current_period_end
        isPaused
        billing_cycle_anchor
        status
        cardBrand
        cardLast4
        cardExpiry
        paymentID
        __typename
      }
      has_more
      __typename
    }
  }
`;
export const tmhStripeDeleteSubscription = /* GraphQL */ `
  query TmhStripeDeleteSubscription($subscriptionId: String) {
    tmhStripeDeleteSubscription(subscriptionId: $subscriptionId) {
      message
      __typename
    }
  }
`;
export const tmhStripeAddSubscription = /* GraphQL */ `
  query TmhStripeAddSubscription(
    $idempotency: String
    $amount: Int
    $fund: String
    $frequency: String
    $paymentMethodId: String
    $startDate: Int
  ) {
    tmhStripeAddSubscription(
      idempotency: $idempotency
      amount: $amount
      fund: $fund
      frequency: $frequency
      paymentMethodId: $paymentMethodId
      startDate: $startDate
    ) {
      message
      __typename
    }
  }
`;
export const tmhStripeAddPayment = /* GraphQL */ `
  query TmhStripeAddPayment(
    $idempotency: String
    $amount: Int
    $fund: String
    $paymentMethodId: String
  ) {
    tmhStripeAddPayment(
      idempotency: $idempotency
      amount: $amount
      fund: $fund
      paymentMethodId: $paymentMethodId
    ) {
      message
      __typename
    }
  }
`;
export const tmhStripeDeletePaymentMethod = /* GraphQL */ `
  query TmhStripeDeletePaymentMethod($paymentMethodId: String) {
    tmhStripeDeletePaymentMethod(paymentMethodId: $paymentMethodId)
  }
`;
export const tmhStripeListProducts = /* GraphQL */ `
  query TmhStripeListProducts {
    tmhStripeListProducts {
      products {
        id
        object
        active
        attributes
        created
        default_price
        description
        features
        images
        livemode
        metadata
        name
        package_dimensions
        shippable
        statement_descriptor
        tax_code
        type
        unit_label
        updated
        url
        __typename
      }
      error
      __typename
    }
  }
`;
export const tmhStripeListCustomerTransactions = /* GraphQL */ `
  query TmhStripeListCustomerTransactions {
    tmhStripeListCustomerTransactions {
      transactions {
        transactionNumber
        date
        currency
        amount
        fund {
          name
          id
          __typename
        }
        paymentMethod
        __typename
      }
      error
      __typename
    }
  }
`;
export const tmhStripePauseSubscription = /* GraphQL */ `
  query TmhStripePauseSubscription($subscriptionID: String) {
    tmhStripePauseSubscription(subscriptionID: $subscriptionID) {
      message
      __typename
    }
  }
`;
export const tmhStripeResumeSubscription = /* GraphQL */ `
  query TmhStripeResumeSubscription($subscriptionID: String) {
    tmhStripeResumeSubscription(subscriptionID: $subscriptionID) {
      message
      __typename
    }
  }
`;
export const getF1Assignments = /* GraphQL */ `
  query GetF1Assignments($id: ID!) {
    getF1Assignments(id: $id) {
      id
      personId
      uri
      type {
        name
        id
        uri
        __typename
      }
      person {
        id
        uri
        __typename
      }
      activity {
        name
        id
        uri
        __typename
      }
      schedule {
        id
        uri
        __typename
      }
      roster {
        id
        uri
        __typename
      }
      rosterFolder {
        id
        uri
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listF1Assignments = /* GraphQL */ `
  query ListF1Assignments(
    $filter: ModelF1AssignmentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listF1Assignments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        personId
        uri
        type {
          name
          id
          uri
          __typename
        }
        person {
          id
          uri
          __typename
        }
        activity {
          name
          id
          uri
          __typename
        }
        schedule {
          id
          uri
          __typename
        }
        roster {
          id
          uri
          __typename
        }
        rosterFolder {
          id
          uri
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getAssignmentsByPersonId = /* GraphQL */ `
  query GetAssignmentsByPersonId(
    $personId: String!
    $id: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelF1AssignmentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getAssignmentsByPersonId(
      personId: $personId
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        personId
        uri
        type {
          name
          id
          uri
          __typename
        }
        person {
          id
          uri
          __typename
        }
        activity {
          name
          id
          uri
          __typename
        }
        schedule {
          id
          uri
          __typename
        }
        roster {
          id
          uri
          __typename
        }
        rosterFolder {
          id
          uri
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getHomeChurchInfo = /* GraphQL */ `
  query GetHomeChurchInfo($id: ID!) {
    getHomeChurchInfo(id: $id) {
      id
      elders
      customPills
      vaccinationRequired
      isOnline
      isYoungAdult
      isFamilyFriendly
      isHybrid
      onlineConnectUrl
      ageGroups
      petFree
      transitAccessible
      accessCode
      gender
      extendedDescription
      imageUrl
      imageAlt
      videoUrl
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listHomeChurchInfos = /* GraphQL */ `
  query ListHomeChurchInfos(
    $filter: ModelHomeChurchInfoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHomeChurchInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        elders
        customPills
        vaccinationRequired
        isOnline
        isYoungAdult
        isFamilyFriendly
        isHybrid
        onlineConnectUrl
        ageGroups
        petFree
        transitAccessible
        accessCode
        gender
        extendedDescription
        imageUrl
        imageAlt
        videoUrl
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getF1ListGroup2 = /* GraphQL */ `
  query GetF1ListGroup2($id: ID!) {
    getF1ListGroup2(id: $id) {
      id
      name
      description
      startDate
      expirationDate
      isOpen
      isPublic
      hasChildcare
      isSearchable
      churchCampus {
        id
        name
        __typename
      }
      groupType {
        id
        name
        __typename
      }
      groupURL
      gender {
        name
        __typename
      }
      maritalStatus {
        name
        __typename
      }
      startAgeRange
      endAgeRange
      dateRangeType {
        id
        name
        __typename
      }
      leadersCount
      membersCount
      openProspectsCount
      event {
        id
        name
        __typename
      }
      createdDate
      lastUpdatedDate
      isLocationPrivate
      timeZone {
        id
        name
        __typename
      }
      location {
        id
        name
        description
        isOnline
        url
        address {
          address1
          address2
          address3
          city
          stProvince
          postalCode
          county
          country
          carrierRoute
          deliveryPoint
          latitude
          longitude
          createdDate
          lastUpdatedDate
          __typename
        }
        createdDate
        lastUpdatedDate
        __typename
      }
      schedule {
        id
        name
        description
        startTime
        endTime
        numberRecurrences
        startDate
        endDate
        recurrenceType {
          name
          __typename
        }
        recurrences {
          recurrence {
            recurrenceWeekly {
              recurrenceFrequency
              occurOnSunday
              occurOnMonday
              occurOnTuesday
              occurOnWednesday
              occurOnThursday
              occurOnFriday
              occurOnSaturday
              __typename
            }
            recurrenceMonthly {
              recurrenceFrequency
              recurrenceOffset
              monthDay
              monthWeekDay
              __typename
            }
            __typename
          }
          __typename
        }
        createdDate
        createByPerson
        lastUpdatedDate
        lastUpdatedByPerson
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listF1ListGroup2s = /* GraphQL */ `
  query ListF1ListGroup2s(
    $filter: ModelF1ListGroup2FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listF1ListGroup2s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        startDate
        expirationDate
        isOpen
        isPublic
        hasChildcare
        isSearchable
        churchCampus {
          id
          name
          __typename
        }
        groupType {
          id
          name
          __typename
        }
        groupURL
        gender {
          name
          __typename
        }
        maritalStatus {
          name
          __typename
        }
        startAgeRange
        endAgeRange
        dateRangeType {
          id
          name
          __typename
        }
        leadersCount
        membersCount
        openProspectsCount
        event {
          id
          name
          __typename
        }
        createdDate
        lastUpdatedDate
        isLocationPrivate
        timeZone {
          id
          name
          __typename
        }
        location {
          id
          name
          description
          isOnline
          url
          address {
            address1
            address2
            address3
            city
            stProvince
            postalCode
            county
            country
            carrierRoute
            deliveryPoint
            latitude
            longitude
            createdDate
            lastUpdatedDate
            __typename
          }
          createdDate
          lastUpdatedDate
          __typename
        }
        schedule {
          id
          name
          description
          startTime
          endTime
          numberRecurrences
          startDate
          endDate
          recurrenceType {
            name
            __typename
          }
          recurrences {
            recurrence {
              recurrenceWeekly {
                recurrenceFrequency
                occurOnSunday
                occurOnMonday
                occurOnTuesday
                occurOnWednesday
                occurOnThursday
                occurOnFriday
                occurOnSaturday
                __typename
              }
              recurrenceMonthly {
                recurrenceFrequency
                recurrenceOffset
                monthDay
                monthWeekDay
                __typename
              }
              __typename
            }
            __typename
          }
          createdDate
          createByPerson
          lastUpdatedDate
          lastUpdatedByPerson
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const searchF1ListGroup2s = /* GraphQL */ `
  query SearchF1ListGroup2s(
    $filter: SearchableF1ListGroup2FilterInput
    $sort: [SearchableF1ListGroup2SortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableF1ListGroup2AggregationInput]
  ) {
    searchF1ListGroup2s(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        name
        description
        startDate
        expirationDate
        isOpen
        isPublic
        hasChildcare
        isSearchable
        churchCampus {
          id
          name
          __typename
        }
        groupType {
          id
          name
          __typename
        }
        groupURL
        gender {
          name
          __typename
        }
        maritalStatus {
          name
          __typename
        }
        startAgeRange
        endAgeRange
        dateRangeType {
          id
          name
          __typename
        }
        leadersCount
        membersCount
        openProspectsCount
        event {
          id
          name
          __typename
        }
        createdDate
        lastUpdatedDate
        isLocationPrivate
        timeZone {
          id
          name
          __typename
        }
        location {
          id
          name
          description
          isOnline
          url
          address {
            address1
            address2
            address3
            city
            stProvince
            postalCode
            county
            country
            carrierRoute
            deliveryPoint
            latitude
            longitude
            createdDate
            lastUpdatedDate
            __typename
          }
          createdDate
          lastUpdatedDate
          __typename
        }
        schedule {
          id
          name
          description
          startTime
          endTime
          numberRecurrences
          startDate
          endDate
          recurrenceType {
            name
            __typename
          }
          recurrences {
            recurrence {
              recurrenceWeekly {
                recurrenceFrequency
                occurOnSunday
                occurOnMonday
                occurOnTuesday
                occurOnWednesday
                occurOnThursday
                occurOnFriday
                occurOnSaturday
                __typename
              }
              recurrenceMonthly {
                recurrenceFrequency
                recurrenceOffset
                monthDay
                monthWeekDay
                __typename
              }
              __typename
            }
            __typename
          }
          createdDate
          createByPerson
          lastUpdatedDate
          lastUpdatedByPerson
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
              __typename
            }
          }
        }
        __typename
      }
      __typename
    }
  }
`;
export const getTNSeries = /* GraphQL */ `
  query GetTNSeries($id: ID!) {
    getTNSeries(id: $id) {
      id
      TNident
      title
      description
      imageUrl
      public
      thumbnail
      startDate
      endDate
      sermonCommentCount
      homeChurchCommentCount
      sermons {
        id
        TNident
        title
        speaker
        deliveryDate
        description
        audioUrl
        mediaEntries {
          type
          contentType
          kind
          label
          url
          __typename
        }
        public
        series_FK
        series {
          id
          TNident
          title
          description
          imageUrl
          public
          thumbnail
          startDate
          endDate
          sermonCommentCount
          homeChurchCommentCount
          sermons {
            id
            TNident
            title
            speaker
            deliveryDate
            description
            audioUrl
            mediaEntries {
              type
              contentType
              kind
              label
              url
              __typename
            }
            public
            series_FK
            series {
              id
              TNident
              title
              description
              imageUrl
              public
              thumbnail
              startDate
              endDate
              sermonCommentCount
              homeChurchCommentCount
              sermons {
                id
                TNident
                title
                speaker
                deliveryDate
                description
                audioUrl
                mediaEntries {
                  type
                  contentType
                  kind
                  label
                  url
                  __typename
                }
                public
                series_FK
                series {
                  id
                  TNident
                  title
                  description
                  imageUrl
                  public
                  thumbnail
                  startDate
                  endDate
                  sermonCommentCount
                  homeChurchCommentCount
                  createdAt
                  updatedAt
                  __typename
                }
                sermonNoteCount
                quoteNoteCount
                homeChurchNoteCount
                sermonCommentCount
                createdAt
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            sermonNoteCount
            quoteNoteCount
            homeChurchNoteCount
            sermonCommentCount
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        sermonNoteCount
        quoteNoteCount
        homeChurchNoteCount
        sermonCommentCount
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listTNSeries = /* GraphQL */ `
  query ListTNSeries(
    $id: ID
    $filter: ModelTNSeriesFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listTNSeries(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        TNident
        title
        description
        imageUrl
        public
        thumbnail
        startDate
        endDate
        sermonCommentCount
        homeChurchCommentCount
        sermons {
          id
          TNident
          title
          speaker
          deliveryDate
          description
          audioUrl
          mediaEntries {
            type
            contentType
            kind
            label
            url
            __typename
          }
          public
          series_FK
          series {
            id
            TNident
            title
            description
            imageUrl
            public
            thumbnail
            startDate
            endDate
            sermonCommentCount
            homeChurchCommentCount
            sermons {
              id
              TNident
              title
              speaker
              deliveryDate
              description
              audioUrl
              mediaEntries {
                type
                contentType
                kind
                label
                url
                __typename
              }
              public
              series_FK
              series {
                id
                TNident
                title
                description
                imageUrl
                public
                thumbnail
                startDate
                endDate
                sermonCommentCount
                homeChurchCommentCount
                sermons {
                  id
                  TNident
                  title
                  speaker
                  deliveryDate
                  description
                  audioUrl
                  public
                  series_FK
                  sermonNoteCount
                  quoteNoteCount
                  homeChurchNoteCount
                  sermonCommentCount
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              sermonNoteCount
              quoteNoteCount
              homeChurchNoteCount
              sermonCommentCount
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          sermonNoteCount
          quoteNoteCount
          homeChurchNoteCount
          sermonCommentCount
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTNSeriesByIdent = /* GraphQL */ `
  query GetTNSeriesByIdent(
    $TNident: String!
    $sortDirection: ModelSortDirection
    $filter: ModelTNSeriesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getTNSeriesByIdent(
      TNident: $TNident
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        TNident
        title
        description
        imageUrl
        public
        thumbnail
        startDate
        endDate
        sermonCommentCount
        homeChurchCommentCount
        sermons {
          id
          TNident
          title
          speaker
          deliveryDate
          description
          audioUrl
          mediaEntries {
            type
            contentType
            kind
            label
            url
            __typename
          }
          public
          series_FK
          series {
            id
            TNident
            title
            description
            imageUrl
            public
            thumbnail
            startDate
            endDate
            sermonCommentCount
            homeChurchCommentCount
            sermons {
              id
              TNident
              title
              speaker
              deliveryDate
              description
              audioUrl
              mediaEntries {
                type
                contentType
                kind
                label
                url
                __typename
              }
              public
              series_FK
              series {
                id
                TNident
                title
                description
                imageUrl
                public
                thumbnail
                startDate
                endDate
                sermonCommentCount
                homeChurchCommentCount
                sermons {
                  id
                  TNident
                  title
                  speaker
                  deliveryDate
                  description
                  audioUrl
                  public
                  series_FK
                  sermonNoteCount
                  quoteNoteCount
                  homeChurchNoteCount
                  sermonCommentCount
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              sermonNoteCount
              quoteNoteCount
              homeChurchNoteCount
              sermonCommentCount
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          sermonNoteCount
          quoteNoteCount
          homeChurchNoteCount
          sermonCommentCount
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTNSermon = /* GraphQL */ `
  query GetTNSermon($id: ID!) {
    getTNSermon(id: $id) {
      id
      TNident
      title
      speaker
      deliveryDate
      description
      audioUrl
      mediaEntries {
        type
        contentType
        kind
        label
        url
        __typename
      }
      public
      series_FK
      series {
        id
        TNident
        title
        description
        imageUrl
        public
        thumbnail
        startDate
        endDate
        sermonCommentCount
        homeChurchCommentCount
        sermons {
          id
          TNident
          title
          speaker
          deliveryDate
          description
          audioUrl
          mediaEntries {
            type
            contentType
            kind
            label
            url
            __typename
          }
          public
          series_FK
          series {
            id
            TNident
            title
            description
            imageUrl
            public
            thumbnail
            startDate
            endDate
            sermonCommentCount
            homeChurchCommentCount
            sermons {
              id
              TNident
              title
              speaker
              deliveryDate
              description
              audioUrl
              mediaEntries {
                type
                contentType
                kind
                label
                url
                __typename
              }
              public
              series_FK
              series {
                id
                TNident
                title
                description
                imageUrl
                public
                thumbnail
                startDate
                endDate
                sermonCommentCount
                homeChurchCommentCount
                sermons {
                  id
                  TNident
                  title
                  speaker
                  deliveryDate
                  description
                  audioUrl
                  public
                  series_FK
                  sermonNoteCount
                  quoteNoteCount
                  homeChurchNoteCount
                  sermonCommentCount
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              sermonNoteCount
              quoteNoteCount
              homeChurchNoteCount
              sermonCommentCount
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          sermonNoteCount
          quoteNoteCount
          homeChurchNoteCount
          sermonCommentCount
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      sermonNoteCount
      quoteNoteCount
      homeChurchNoteCount
      sermonCommentCount
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listTNSermons = /* GraphQL */ `
  query ListTNSermons(
    $id: ID
    $filter: ModelTNSermonFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listTNSermons(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        TNident
        title
        speaker
        deliveryDate
        description
        audioUrl
        mediaEntries {
          type
          contentType
          kind
          label
          url
          __typename
        }
        public
        series_FK
        series {
          id
          TNident
          title
          description
          imageUrl
          public
          thumbnail
          startDate
          endDate
          sermonCommentCount
          homeChurchCommentCount
          sermons {
            id
            TNident
            title
            speaker
            deliveryDate
            description
            audioUrl
            mediaEntries {
              type
              contentType
              kind
              label
              url
              __typename
            }
            public
            series_FK
            series {
              id
              TNident
              title
              description
              imageUrl
              public
              thumbnail
              startDate
              endDate
              sermonCommentCount
              homeChurchCommentCount
              sermons {
                id
                TNident
                title
                speaker
                deliveryDate
                description
                audioUrl
                mediaEntries {
                  type
                  contentType
                  kind
                  label
                  url
                  __typename
                }
                public
                series_FK
                series {
                  id
                  TNident
                  title
                  description
                  imageUrl
                  public
                  thumbnail
                  startDate
                  endDate
                  sermonCommentCount
                  homeChurchCommentCount
                  createdAt
                  updatedAt
                  __typename
                }
                sermonNoteCount
                quoteNoteCount
                homeChurchNoteCount
                sermonCommentCount
                createdAt
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            sermonNoteCount
            quoteNoteCount
            homeChurchNoteCount
            sermonCommentCount
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        sermonNoteCount
        quoteNoteCount
        homeChurchNoteCount
        sermonCommentCount
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTNSermonByIdent = /* GraphQL */ `
  query GetTNSermonByIdent(
    $TNident: String!
    $sortDirection: ModelSortDirection
    $filter: ModelTNSermonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getTNSermonByIdent(
      TNident: $TNident
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        TNident
        title
        speaker
        deliveryDate
        description
        audioUrl
        mediaEntries {
          type
          contentType
          kind
          label
          url
          __typename
        }
        public
        series_FK
        series {
          id
          TNident
          title
          description
          imageUrl
          public
          thumbnail
          startDate
          endDate
          sermonCommentCount
          homeChurchCommentCount
          sermons {
            id
            TNident
            title
            speaker
            deliveryDate
            description
            audioUrl
            mediaEntries {
              type
              contentType
              kind
              label
              url
              __typename
            }
            public
            series_FK
            series {
              id
              TNident
              title
              description
              imageUrl
              public
              thumbnail
              startDate
              endDate
              sermonCommentCount
              homeChurchCommentCount
              sermons {
                id
                TNident
                title
                speaker
                deliveryDate
                description
                audioUrl
                mediaEntries {
                  type
                  contentType
                  kind
                  label
                  url
                  __typename
                }
                public
                series_FK
                series {
                  id
                  TNident
                  title
                  description
                  imageUrl
                  public
                  thumbnail
                  startDate
                  endDate
                  sermonCommentCount
                  homeChurchCommentCount
                  createdAt
                  updatedAt
                  __typename
                }
                sermonNoteCount
                quoteNoteCount
                homeChurchNoteCount
                sermonCommentCount
                createdAt
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            sermonNoteCount
            quoteNoteCount
            homeChurchNoteCount
            sermonCommentCount
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        sermonNoteCount
        quoteNoteCount
        homeChurchNoteCount
        sermonCommentCount
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getLivestream = /* GraphQL */ `
  query GetLivestream($id: ID!) {
    getLivestream(id: $id) {
      id
      date
      startTime
      videoStartTime
      endTime
      prerollYoutubeId
      liveYoutubeId
      liveVimeoId
      showChat
      showKids
      eventTitle
      externalEventUrl
      menu {
        title
        link
        linkType
        __typename
      }
      zoom {
        title
        link
        __typename
      }
      livestreamSections {
        title
        links {
          title
          link
          __typename
        }
        __typename
      }
      titles
      homepageLink
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listLivestreams = /* GraphQL */ `
  query ListLivestreams(
    $filter: ModelLivestreamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLivestreams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        date
        startTime
        videoStartTime
        endTime
        prerollYoutubeId
        liveYoutubeId
        liveVimeoId
        showChat
        showKids
        eventTitle
        externalEventUrl
        menu {
          title
          link
          linkType
          __typename
        }
        zoom {
          title
          link
          __typename
        }
        livestreamSections {
          title
          links {
            title
            link
            __typename
          }
          __typename
        }
        titles
        homepageLink
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getRedirect = /* GraphQL */ `
  query GetRedirect($id: ID!) {
    getRedirect(id: $id) {
      id
      to
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listRedirects = /* GraphQL */ `
  query ListRedirects(
    $filter: ModelRedirectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRedirects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        to
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getAnnouncement = /* GraphQL */ `
  query GetAnnouncement($id: ID!) {
    getAnnouncement(id: $id) {
      id
      publishedDate
      expirationDate
      image
      parish
      crossRegional
      title
      description
      callToAction
      callToActionTitle
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listAnnouncements = /* GraphQL */ `
  query ListAnnouncements(
    $filter: ModelAnnouncementFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAnnouncements(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        publishedDate
        expirationDate
        image
        parish
        crossRegional
        title
        description
        callToAction
        callToActionTitle
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listAnnouncementsByParishByDate = /* GraphQL */ `
  query ListAnnouncementsByParishByDate(
    $crossRegional: String!
    $parishExpirationDatePublishedDate: ModelAnnouncementByParishByDateCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelAnnouncementFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAnnouncementsByParishByDate(
      crossRegional: $crossRegional
      parishExpirationDatePublishedDate: $parishExpirationDatePublishedDate
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        publishedDate
        expirationDate
        image
        parish
        crossRegional
        title
        description
        callToAction
        callToActionTitle
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getSpeaker = /* GraphQL */ `
  query GetSpeaker($id: ID!) {
    getSpeaker(id: $id) {
      id
      name
      image
      videos {
        items {
          id
          speakerVideosSpeakerId
          video {
            id
            createdBy
            createdDate
            speakers {
              items {
                id
                speakerVideosSpeakerId
                video {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  videoSeriesId
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
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
                  thumbnailDescription
                  move
                  createdAt
                  updatedAt
                  __typename
                }
                speakerVideosVideoId
                speaker {
                  id
                  name
                  image
                  hidden
                  createdAt
                  updatedAt
                  __typename
                }
                videoPublishedDate
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            episodeTitle
            originalEpisodeTitle
            episodeNumber
            seriesTitle
            videoSeriesId
            series {
              id
              videos {
                items {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  videoSeriesId
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
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
                  thumbnailDescription
                  move
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogs {
                items {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogSeriesId
                  blogSeriesIndex
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogPosts {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              seriesType
              title
              description
              thumbnailDescription
              image
              squareImage {
                src
                alt
                __typename
              }
              bannerImage {
                src
                alt
                __typename
              }
              babyHeroImage {
                src
                alt
                __typename
              }
              startDate
              endDate
              notes {
                items {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            customPlaylistIDs
            customPlaylists {
              items {
                id
                videoID
                customPlaylistID
                customPlaylist {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  createdAt
                  updatedAt
                  __typename
                }
                video {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  videoSeriesId
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
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
                  thumbnailDescription
                  move
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            publishedDate
            recordedDate
            description
            viewCount
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
                channelId
                title
                description
                thumbnails {
                  __typename
                }
                channelTitle
                localized {
                  title
                  description
                  __typename
                }
                __typename
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
                contentRating {
                  acbRating
                  agcomRating
                  anatelRating
                  bbfcRating
                  bfvcRating
                  bmukkRating
                  catvRating
                  catvfrRating
                  cbfcRating
                  cccRating
                  cceRating
                  chfilmRating
                  chvrsRating
                  cicfRating
                  cnaRating
                  cncRating
                  csaRating
                  cscfRating
                  czfilmRating
                  djctqRating
                  djctqRatingReasons
                  ecbmctRating
                  eefilmRating
                  egfilmRating
                  eirinRating
                  fcbmRating
                  fcoRating
                  fmocRating
                  fpbRating
                  fpbRatingReasons
                  fskRating
                  grfilmRating
                  icaaRating
                  ifcoRating
                  ilfilmRating
                  incaaRating
                  kfcbRating
                  kijkwijzerRating
                  kmrbRating
                  lsfRating
                  mccaaRating
                  mccypRating
                  mcstRating
                  mdaRating
                  medietilsynetRating
                  mekuRating
                  mibacRating
                  mocRating
                  moctwRating
                  mpaaRating
                  mpaatRating
                  mtrcbRating
                  nbcRating
                  nbcplRating
                  nfrcRating
                  nfvcbRating
                  nkclvRating
                  oflcRating
                  pefilmRating
                  rcnofRating
                  resorteviolenciaRating
                  rtcRating
                  rteRating
                  russiaRating
                  skfilmRating
                  smaisRating
                  smsaRating
                  tvpgRating
                  ytRating
                  __typename
                }
                regionRestriction {
                  allowed
                  blocked
                  __typename
                }
                hasCustomThumbnail
                __typename
              }
              status {
                uploadStatus
                privacyStatus
                license
                embeddable
                publicStatsViewable
                __typename
              }
              __typename
            }
            videoTypes
            notesURL
            videoURL
            audioURL
            thumbnailDescription
            move
            createdAt
            updatedAt
            __typename
          }
          speakerVideosVideoId
          speaker {
            id
            name
            image
            videos {
              items {
                id
                speakerVideosSpeakerId
                video {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  videoSeriesId
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
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
                  thumbnailDescription
                  move
                  createdAt
                  updatedAt
                  __typename
                }
                speakerVideosVideoId
                speaker {
                  id
                  name
                  image
                  hidden
                  createdAt
                  updatedAt
                  __typename
                }
                videoPublishedDate
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            hidden
            createdAt
            updatedAt
            __typename
          }
          videoPublishedDate
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      hidden
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listSpeakers = /* GraphQL */ `
  query ListSpeakers(
    $id: ID
    $filter: ModelSpeakerFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listSpeakers(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        name
        image
        videos {
          items {
            id
            speakerVideosSpeakerId
            video {
              id
              createdBy
              createdDate
              speakers {
                items {
                  id
                  speakerVideosSpeakerId
                  speakerVideosVideoId
                  videoPublishedDate
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              episodeTitle
              originalEpisodeTitle
              episodeNumber
              seriesTitle
              videoSeriesId
              series {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              customPlaylistIDs
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              publishedDate
              recordedDate
              description
              viewCount
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
                  channelId
                  title
                  description
                  channelTitle
                  __typename
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
                  hasCustomThumbnail
                  __typename
                }
                status {
                  uploadStatus
                  privacyStatus
                  license
                  embeddable
                  publicStatsViewable
                  __typename
                }
                __typename
              }
              videoTypes
              notesURL
              videoURL
              audioURL
              thumbnailDescription
              move
              createdAt
              updatedAt
              __typename
            }
            speakerVideosVideoId
            speaker {
              id
              name
              image
              videos {
                items {
                  id
                  speakerVideosSpeakerId
                  speakerVideosVideoId
                  videoPublishedDate
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              hidden
              createdAt
              updatedAt
              __typename
            }
            videoPublishedDate
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        hidden
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getSpeakerVideos = /* GraphQL */ `
  query GetSpeakerVideos($id: ID!) {
    getSpeakerVideos(id: $id) {
      id
      speakerVideosSpeakerId
      video {
        id
        createdBy
        createdDate
        speakers {
          items {
            id
            speakerVideosSpeakerId
            video {
              id
              createdBy
              createdDate
              speakers {
                items {
                  id
                  speakerVideosSpeakerId
                  speakerVideosVideoId
                  videoPublishedDate
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              episodeTitle
              originalEpisodeTitle
              episodeNumber
              seriesTitle
              videoSeriesId
              series {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              customPlaylistIDs
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              publishedDate
              recordedDate
              description
              viewCount
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
                  channelId
                  title
                  description
                  channelTitle
                  __typename
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
                  hasCustomThumbnail
                  __typename
                }
                status {
                  uploadStatus
                  privacyStatus
                  license
                  embeddable
                  publicStatsViewable
                  __typename
                }
                __typename
              }
              videoTypes
              notesURL
              videoURL
              audioURL
              thumbnailDescription
              move
              createdAt
              updatedAt
              __typename
            }
            speakerVideosVideoId
            speaker {
              id
              name
              image
              videos {
                items {
                  id
                  speakerVideosSpeakerId
                  speakerVideosVideoId
                  videoPublishedDate
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              hidden
              createdAt
              updatedAt
              __typename
            }
            videoPublishedDate
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        episodeTitle
        originalEpisodeTitle
        episodeNumber
        seriesTitle
        videoSeriesId
        series {
          id
          videos {
            items {
              id
              createdBy
              createdDate
              speakers {
                items {
                  id
                  speakerVideosSpeakerId
                  speakerVideosVideoId
                  videoPublishedDate
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              episodeTitle
              originalEpisodeTitle
              episodeNumber
              seriesTitle
              videoSeriesId
              series {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              customPlaylistIDs
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              publishedDate
              recordedDate
              description
              viewCount
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
                  channelId
                  title
                  description
                  channelTitle
                  __typename
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
                  hasCustomThumbnail
                  __typename
                }
                status {
                  uploadStatus
                  privacyStatus
                  license
                  embeddable
                  publicStatsViewable
                  __typename
                }
                __typename
              }
              videoTypes
              notesURL
              videoURL
              audioURL
              thumbnailDescription
              move
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          blogs {
            items {
              id
              author
              createdBy
              createdDate
              publishedDate
              expirationDate
              videoSeries {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              series {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              blogSeriesId
              blogSeriesIndex
              blogSeries {
                items {
                  id
                  blogSeriesID
                  blogPostID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogStatus
              description
              thumbnailDescription
              content
              blogTitle
              topics
              tags
              hiddenMainIndex
              squareImage {
                src
                alt
                __typename
              }
              bannerImage {
                src
                alt
                __typename
              }
              babyHeroImage {
                src
                alt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          blogPosts {
            items {
              id
              videoSeriesId
              blogId
              blog {
                id
                author
                createdBy
                createdDate
                publishedDate
                expirationDate
                videoSeries {
                  nextToken
                  __typename
                }
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  __typename
                }
                blogSeriesId
                blogSeriesIndex
                blogSeries {
                  nextToken
                  __typename
                }
                blogStatus
                description
                thumbnailDescription
                content
                blogTitle
                topics
                tags
                hiddenMainIndex
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              videoSeries {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          seriesType
          title
          description
          thumbnailDescription
          image
          squareImage {
            src
            alt
            __typename
          }
          bannerImage {
            src
            alt
            __typename
          }
          babyHeroImage {
            src
            alt
            __typename
          }
          startDate
          endDate
          notes {
            items {
              id
              title
              content
              questions
              jsonContent
              jsonQuestions
              episodeDescription
              episodeNumber
              seriesId
              series {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              pdf
              topics
              tags
              verses {
                items {
                  id
                  key
                  offset
                  length
                  dataType
                  content
                  youVersionUri
                  noteId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        customPlaylistIDs
        customPlaylists {
          items {
            id
            videoID
            customPlaylistID
            customPlaylist {
              id
              videos {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              seriesType
              title
              description
              thumbnailDescription
              createdAt
              updatedAt
              __typename
            }
            video {
              id
              createdBy
              createdDate
              speakers {
                items {
                  id
                  speakerVideosSpeakerId
                  speakerVideosVideoId
                  videoPublishedDate
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              episodeTitle
              originalEpisodeTitle
              episodeNumber
              seriesTitle
              videoSeriesId
              series {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              customPlaylistIDs
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              publishedDate
              recordedDate
              description
              viewCount
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
                  channelId
                  title
                  description
                  channelTitle
                  __typename
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
                  hasCustomThumbnail
                  __typename
                }
                status {
                  uploadStatus
                  privacyStatus
                  license
                  embeddable
                  publicStatsViewable
                  __typename
                }
                __typename
              }
              videoTypes
              notesURL
              videoURL
              audioURL
              thumbnailDescription
              move
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        publishedDate
        recordedDate
        description
        viewCount
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
            channelId
            title
            description
            thumbnails {
              default {
                url
                width
                height
                __typename
              }
              medium {
                url
                width
                height
                __typename
              }
              high {
                url
                width
                height
                __typename
              }
              standard {
                url
                width
                height
                __typename
              }
              maxres {
                url
                width
                height
                __typename
              }
              __typename
            }
            channelTitle
            localized {
              title
              description
              __typename
            }
            __typename
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
            contentRating {
              acbRating
              agcomRating
              anatelRating
              bbfcRating
              bfvcRating
              bmukkRating
              catvRating
              catvfrRating
              cbfcRating
              cccRating
              cceRating
              chfilmRating
              chvrsRating
              cicfRating
              cnaRating
              cncRating
              csaRating
              cscfRating
              czfilmRating
              djctqRating
              djctqRatingReasons
              ecbmctRating
              eefilmRating
              egfilmRating
              eirinRating
              fcbmRating
              fcoRating
              fmocRating
              fpbRating
              fpbRatingReasons
              fskRating
              grfilmRating
              icaaRating
              ifcoRating
              ilfilmRating
              incaaRating
              kfcbRating
              kijkwijzerRating
              kmrbRating
              lsfRating
              mccaaRating
              mccypRating
              mcstRating
              mdaRating
              medietilsynetRating
              mekuRating
              mibacRating
              mocRating
              moctwRating
              mpaaRating
              mpaatRating
              mtrcbRating
              nbcRating
              nbcplRating
              nfrcRating
              nfvcbRating
              nkclvRating
              oflcRating
              pefilmRating
              rcnofRating
              resorteviolenciaRating
              rtcRating
              rteRating
              russiaRating
              skfilmRating
              smaisRating
              smsaRating
              tvpgRating
              ytRating
              __typename
            }
            regionRestriction {
              allowed
              blocked
              __typename
            }
            hasCustomThumbnail
            __typename
          }
          status {
            uploadStatus
            privacyStatus
            license
            embeddable
            publicStatsViewable
            __typename
          }
          __typename
        }
        videoTypes
        notesURL
        videoURL
        audioURL
        thumbnailDescription
        move
        createdAt
        updatedAt
        __typename
      }
      speakerVideosVideoId
      speaker {
        id
        name
        image
        videos {
          items {
            id
            speakerVideosSpeakerId
            video {
              id
              createdBy
              createdDate
              speakers {
                items {
                  id
                  speakerVideosSpeakerId
                  speakerVideosVideoId
                  videoPublishedDate
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              episodeTitle
              originalEpisodeTitle
              episodeNumber
              seriesTitle
              videoSeriesId
              series {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              customPlaylistIDs
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              publishedDate
              recordedDate
              description
              viewCount
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
                  channelId
                  title
                  description
                  channelTitle
                  __typename
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
                  hasCustomThumbnail
                  __typename
                }
                status {
                  uploadStatus
                  privacyStatus
                  license
                  embeddable
                  publicStatsViewable
                  __typename
                }
                __typename
              }
              videoTypes
              notesURL
              videoURL
              audioURL
              thumbnailDescription
              move
              createdAt
              updatedAt
              __typename
            }
            speakerVideosVideoId
            speaker {
              id
              name
              image
              videos {
                items {
                  id
                  speakerVideosSpeakerId
                  speakerVideosVideoId
                  videoPublishedDate
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              hidden
              createdAt
              updatedAt
              __typename
            }
            videoPublishedDate
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        hidden
        createdAt
        updatedAt
        __typename
      }
      videoPublishedDate
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listSpeakerVideos = /* GraphQL */ `
  query ListSpeakerVideos(
    $id: ID
    $filter: ModelSpeakerVideosFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listSpeakerVideos(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        speakerVideosSpeakerId
        video {
          id
          createdBy
          createdDate
          speakers {
            items {
              id
              speakerVideosSpeakerId
              video {
                id
                createdBy
                createdDate
                speakers {
                  nextToken
                  __typename
                }
                episodeTitle
                originalEpisodeTitle
                episodeNumber
                seriesTitle
                videoSeriesId
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  __typename
                }
                customPlaylistIDs
                customPlaylists {
                  nextToken
                  __typename
                }
                publishedDate
                recordedDate
                description
                viewCount
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
                  __typename
                }
                videoTypes
                notesURL
                videoURL
                audioURL
                thumbnailDescription
                move
                createdAt
                updatedAt
                __typename
              }
              speakerVideosVideoId
              speaker {
                id
                name
                image
                videos {
                  nextToken
                  __typename
                }
                hidden
                createdAt
                updatedAt
                __typename
              }
              videoPublishedDate
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          episodeTitle
          originalEpisodeTitle
          episodeNumber
          seriesTitle
          videoSeriesId
          series {
            id
            videos {
              items {
                id
                createdBy
                createdDate
                speakers {
                  nextToken
                  __typename
                }
                episodeTitle
                originalEpisodeTitle
                episodeNumber
                seriesTitle
                videoSeriesId
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  __typename
                }
                customPlaylistIDs
                customPlaylists {
                  nextToken
                  __typename
                }
                publishedDate
                recordedDate
                description
                viewCount
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
                  __typename
                }
                videoTypes
                notesURL
                videoURL
                audioURL
                thumbnailDescription
                move
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            blogs {
              items {
                id
                author
                createdBy
                createdDate
                publishedDate
                expirationDate
                videoSeries {
                  nextToken
                  __typename
                }
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  __typename
                }
                blogSeriesId
                blogSeriesIndex
                blogSeries {
                  nextToken
                  __typename
                }
                blogStatus
                description
                thumbnailDescription
                content
                blogTitle
                topics
                tags
                hiddenMainIndex
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            blogPosts {
              items {
                id
                videoSeriesId
                blogId
                blog {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogSeriesId
                  blogSeriesIndex
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                  __typename
                }
                videoSeries {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            seriesType
            title
            description
            thumbnailDescription
            image
            squareImage {
              src
              alt
              __typename
            }
            bannerImage {
              src
              alt
              __typename
            }
            babyHeroImage {
              src
              alt
              __typename
            }
            startDate
            endDate
            notes {
              items {
                id
                title
                content
                questions
                jsonContent
                jsonQuestions
                episodeDescription
                episodeNumber
                seriesId
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  __typename
                }
                pdf
                topics
                tags
                verses {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          customPlaylistIDs
          customPlaylists {
            items {
              id
              videoID
              customPlaylistID
              customPlaylist {
                id
                videos {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                createdAt
                updatedAt
                __typename
              }
              video {
                id
                createdBy
                createdDate
                speakers {
                  nextToken
                  __typename
                }
                episodeTitle
                originalEpisodeTitle
                episodeNumber
                seriesTitle
                videoSeriesId
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  __typename
                }
                customPlaylistIDs
                customPlaylists {
                  nextToken
                  __typename
                }
                publishedDate
                recordedDate
                description
                viewCount
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
                  __typename
                }
                videoTypes
                notesURL
                videoURL
                audioURL
                thumbnailDescription
                move
                createdAt
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          publishedDate
          recordedDate
          description
          viewCount
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
              channelId
              title
              description
              thumbnails {
                default {
                  url
                  width
                  height
                  __typename
                }
                medium {
                  url
                  width
                  height
                  __typename
                }
                high {
                  url
                  width
                  height
                  __typename
                }
                standard {
                  url
                  width
                  height
                  __typename
                }
                maxres {
                  url
                  width
                  height
                  __typename
                }
                __typename
              }
              channelTitle
              localized {
                title
                description
                __typename
              }
              __typename
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
              contentRating {
                acbRating
                agcomRating
                anatelRating
                bbfcRating
                bfvcRating
                bmukkRating
                catvRating
                catvfrRating
                cbfcRating
                cccRating
                cceRating
                chfilmRating
                chvrsRating
                cicfRating
                cnaRating
                cncRating
                csaRating
                cscfRating
                czfilmRating
                djctqRating
                djctqRatingReasons
                ecbmctRating
                eefilmRating
                egfilmRating
                eirinRating
                fcbmRating
                fcoRating
                fmocRating
                fpbRating
                fpbRatingReasons
                fskRating
                grfilmRating
                icaaRating
                ifcoRating
                ilfilmRating
                incaaRating
                kfcbRating
                kijkwijzerRating
                kmrbRating
                lsfRating
                mccaaRating
                mccypRating
                mcstRating
                mdaRating
                medietilsynetRating
                mekuRating
                mibacRating
                mocRating
                moctwRating
                mpaaRating
                mpaatRating
                mtrcbRating
                nbcRating
                nbcplRating
                nfrcRating
                nfvcbRating
                nkclvRating
                oflcRating
                pefilmRating
                rcnofRating
                resorteviolenciaRating
                rtcRating
                rteRating
                russiaRating
                skfilmRating
                smaisRating
                smsaRating
                tvpgRating
                ytRating
                __typename
              }
              regionRestriction {
                allowed
                blocked
                __typename
              }
              hasCustomThumbnail
              __typename
            }
            status {
              uploadStatus
              privacyStatus
              license
              embeddable
              publicStatsViewable
              __typename
            }
            __typename
          }
          videoTypes
          notesURL
          videoURL
          audioURL
          thumbnailDescription
          move
          createdAt
          updatedAt
          __typename
        }
        speakerVideosVideoId
        speaker {
          id
          name
          image
          videos {
            items {
              id
              speakerVideosSpeakerId
              video {
                id
                createdBy
                createdDate
                speakers {
                  nextToken
                  __typename
                }
                episodeTitle
                originalEpisodeTitle
                episodeNumber
                seriesTitle
                videoSeriesId
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  __typename
                }
                customPlaylistIDs
                customPlaylists {
                  nextToken
                  __typename
                }
                publishedDate
                recordedDate
                description
                viewCount
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
                  __typename
                }
                videoTypes
                notesURL
                videoURL
                audioURL
                thumbnailDescription
                move
                createdAt
                updatedAt
                __typename
              }
              speakerVideosVideoId
              speaker {
                id
                name
                image
                videos {
                  nextToken
                  __typename
                }
                hidden
                createdAt
                updatedAt
                __typename
              }
              videoPublishedDate
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          hidden
          createdAt
          updatedAt
          __typename
        }
        videoPublishedDate
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getSeries = /* GraphQL */ `
  query GetSeries($id: ID!) {
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
              speakerVideosSpeakerId
              video {
                id
                createdBy
                createdDate
                speakers {
                  nextToken
                  __typename
                }
                episodeTitle
                originalEpisodeTitle
                episodeNumber
                seriesTitle
                videoSeriesId
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  __typename
                }
                customPlaylistIDs
                customPlaylists {
                  nextToken
                  __typename
                }
                publishedDate
                recordedDate
                description
                viewCount
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
                  __typename
                }
                videoTypes
                notesURL
                videoURL
                audioURL
                thumbnailDescription
                move
                createdAt
                updatedAt
                __typename
              }
              speakerVideosVideoId
              speaker {
                id
                name
                image
                videos {
                  nextToken
                  __typename
                }
                hidden
                createdAt
                updatedAt
                __typename
              }
              videoPublishedDate
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          episodeTitle
          originalEpisodeTitle
          episodeNumber
          seriesTitle
          videoSeriesId
          series {
            id
            videos {
              items {
                id
                createdBy
                createdDate
                speakers {
                  nextToken
                  __typename
                }
                episodeTitle
                originalEpisodeTitle
                episodeNumber
                seriesTitle
                videoSeriesId
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  __typename
                }
                customPlaylistIDs
                customPlaylists {
                  nextToken
                  __typename
                }
                publishedDate
                recordedDate
                description
                viewCount
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
                  __typename
                }
                videoTypes
                notesURL
                videoURL
                audioURL
                thumbnailDescription
                move
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            blogs {
              items {
                id
                author
                createdBy
                createdDate
                publishedDate
                expirationDate
                videoSeries {
                  nextToken
                  __typename
                }
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  __typename
                }
                blogSeriesId
                blogSeriesIndex
                blogSeries {
                  nextToken
                  __typename
                }
                blogStatus
                description
                thumbnailDescription
                content
                blogTitle
                topics
                tags
                hiddenMainIndex
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            blogPosts {
              items {
                id
                videoSeriesId
                blogId
                blog {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogSeriesId
                  blogSeriesIndex
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                  __typename
                }
                videoSeries {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            seriesType
            title
            description
            thumbnailDescription
            image
            squareImage {
              src
              alt
              __typename
            }
            bannerImage {
              src
              alt
              __typename
            }
            babyHeroImage {
              src
              alt
              __typename
            }
            startDate
            endDate
            notes {
              items {
                id
                title
                content
                questions
                jsonContent
                jsonQuestions
                episodeDescription
                episodeNumber
                seriesId
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  __typename
                }
                pdf
                topics
                tags
                verses {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          customPlaylistIDs
          customPlaylists {
            items {
              id
              videoID
              customPlaylistID
              customPlaylist {
                id
                videos {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                createdAt
                updatedAt
                __typename
              }
              video {
                id
                createdBy
                createdDate
                speakers {
                  nextToken
                  __typename
                }
                episodeTitle
                originalEpisodeTitle
                episodeNumber
                seriesTitle
                videoSeriesId
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  __typename
                }
                customPlaylistIDs
                customPlaylists {
                  nextToken
                  __typename
                }
                publishedDate
                recordedDate
                description
                viewCount
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
                  __typename
                }
                videoTypes
                notesURL
                videoURL
                audioURL
                thumbnailDescription
                move
                createdAt
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          publishedDate
          recordedDate
          description
          viewCount
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
              channelId
              title
              description
              thumbnails {
                default {
                  url
                  width
                  height
                  __typename
                }
                medium {
                  url
                  width
                  height
                  __typename
                }
                high {
                  url
                  width
                  height
                  __typename
                }
                standard {
                  url
                  width
                  height
                  __typename
                }
                maxres {
                  url
                  width
                  height
                  __typename
                }
                __typename
              }
              channelTitle
              localized {
                title
                description
                __typename
              }
              __typename
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
              contentRating {
                acbRating
                agcomRating
                anatelRating
                bbfcRating
                bfvcRating
                bmukkRating
                catvRating
                catvfrRating
                cbfcRating
                cccRating
                cceRating
                chfilmRating
                chvrsRating
                cicfRating
                cnaRating
                cncRating
                csaRating
                cscfRating
                czfilmRating
                djctqRating
                djctqRatingReasons
                ecbmctRating
                eefilmRating
                egfilmRating
                eirinRating
                fcbmRating
                fcoRating
                fmocRating
                fpbRating
                fpbRatingReasons
                fskRating
                grfilmRating
                icaaRating
                ifcoRating
                ilfilmRating
                incaaRating
                kfcbRating
                kijkwijzerRating
                kmrbRating
                lsfRating
                mccaaRating
                mccypRating
                mcstRating
                mdaRating
                medietilsynetRating
                mekuRating
                mibacRating
                mocRating
                moctwRating
                mpaaRating
                mpaatRating
                mtrcbRating
                nbcRating
                nbcplRating
                nfrcRating
                nfvcbRating
                nkclvRating
                oflcRating
                pefilmRating
                rcnofRating
                resorteviolenciaRating
                rtcRating
                rteRating
                russiaRating
                skfilmRating
                smaisRating
                smsaRating
                tvpgRating
                ytRating
                __typename
              }
              regionRestriction {
                allowed
                blocked
                __typename
              }
              hasCustomThumbnail
              __typename
            }
            status {
              uploadStatus
              privacyStatus
              license
              embeddable
              publicStatsViewable
              __typename
            }
            __typename
          }
          videoTypes
          notesURL
          videoURL
          audioURL
          thumbnailDescription
          move
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      blogs {
        items {
          id
          author
          createdBy
          createdDate
          publishedDate
          expirationDate
          videoSeries {
            items {
              id
              videoSeriesId
              blogId
              blog {
                id
                author
                createdBy
                createdDate
                publishedDate
                expirationDate
                videoSeries {
                  nextToken
                  __typename
                }
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  __typename
                }
                blogSeriesId
                blogSeriesIndex
                blogSeries {
                  nextToken
                  __typename
                }
                blogStatus
                description
                thumbnailDescription
                content
                blogTitle
                topics
                tags
                hiddenMainIndex
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              videoSeries {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          series {
            id
            videos {
              items {
                id
                createdBy
                createdDate
                speakers {
                  nextToken
                  __typename
                }
                episodeTitle
                originalEpisodeTitle
                episodeNumber
                seriesTitle
                videoSeriesId
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  __typename
                }
                customPlaylistIDs
                customPlaylists {
                  nextToken
                  __typename
                }
                publishedDate
                recordedDate
                description
                viewCount
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
                  __typename
                }
                videoTypes
                notesURL
                videoURL
                audioURL
                thumbnailDescription
                move
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            blogs {
              items {
                id
                author
                createdBy
                createdDate
                publishedDate
                expirationDate
                videoSeries {
                  nextToken
                  __typename
                }
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  __typename
                }
                blogSeriesId
                blogSeriesIndex
                blogSeries {
                  nextToken
                  __typename
                }
                blogStatus
                description
                thumbnailDescription
                content
                blogTitle
                topics
                tags
                hiddenMainIndex
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            blogPosts {
              items {
                id
                videoSeriesId
                blogId
                blog {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogSeriesId
                  blogSeriesIndex
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                  __typename
                }
                videoSeries {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            seriesType
            title
            description
            thumbnailDescription
            image
            squareImage {
              src
              alt
              __typename
            }
            bannerImage {
              src
              alt
              __typename
            }
            babyHeroImage {
              src
              alt
              __typename
            }
            startDate
            endDate
            notes {
              items {
                id
                title
                content
                questions
                jsonContent
                jsonQuestions
                episodeDescription
                episodeNumber
                seriesId
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  __typename
                }
                pdf
                topics
                tags
                verses {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          blogSeriesId
          blogSeriesIndex
          blogSeries {
            items {
              id
              blogSeriesID
              blogPostID
              blogSeries {
                id
                blogs {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                startDate
                endDate
                createdAt
                updatedAt
                __typename
              }
              blogPost {
                id
                author
                createdBy
                createdDate
                publishedDate
                expirationDate
                videoSeries {
                  nextToken
                  __typename
                }
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  __typename
                }
                blogSeriesId
                blogSeriesIndex
                blogSeries {
                  nextToken
                  __typename
                }
                blogStatus
                description
                thumbnailDescription
                content
                blogTitle
                topics
                tags
                hiddenMainIndex
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          blogStatus
          description
          thumbnailDescription
          content
          blogTitle
          topics
          tags
          hiddenMainIndex
          squareImage {
            src
            alt
            __typename
          }
          bannerImage {
            src
            alt
            __typename
          }
          babyHeroImage {
            src
            alt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      blogPosts {
        items {
          id
          videoSeriesId
          blogId
          blog {
            id
            author
            createdBy
            createdDate
            publishedDate
            expirationDate
            videoSeries {
              items {
                id
                videoSeriesId
                blogId
                blog {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogSeriesId
                  blogSeriesIndex
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                  __typename
                }
                videoSeries {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            series {
              id
              videos {
                items {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  videoSeriesId
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
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
                  thumbnailDescription
                  move
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogs {
                items {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogSeriesId
                  blogSeriesIndex
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogPosts {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              seriesType
              title
              description
              thumbnailDescription
              image
              squareImage {
                src
                alt
                __typename
              }
              bannerImage {
                src
                alt
                __typename
              }
              babyHeroImage {
                src
                alt
                __typename
              }
              startDate
              endDate
              notes {
                items {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            blogSeriesId
            blogSeriesIndex
            blogSeries {
              items {
                id
                blogSeriesID
                blogPostID
                blogSeries {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  __typename
                }
                blogPost {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogSeriesId
                  blogSeriesIndex
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            blogStatus
            description
            thumbnailDescription
            content
            blogTitle
            topics
            tags
            hiddenMainIndex
            squareImage {
              src
              alt
              __typename
            }
            bannerImage {
              src
              alt
              __typename
            }
            babyHeroImage {
              src
              alt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          videoSeries {
            id
            videos {
              items {
                id
                createdBy
                createdDate
                speakers {
                  nextToken
                  __typename
                }
                episodeTitle
                originalEpisodeTitle
                episodeNumber
                seriesTitle
                videoSeriesId
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  __typename
                }
                customPlaylistIDs
                customPlaylists {
                  nextToken
                  __typename
                }
                publishedDate
                recordedDate
                description
                viewCount
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
                  __typename
                }
                videoTypes
                notesURL
                videoURL
                audioURL
                thumbnailDescription
                move
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            blogs {
              items {
                id
                author
                createdBy
                createdDate
                publishedDate
                expirationDate
                videoSeries {
                  nextToken
                  __typename
                }
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  __typename
                }
                blogSeriesId
                blogSeriesIndex
                blogSeries {
                  nextToken
                  __typename
                }
                blogStatus
                description
                thumbnailDescription
                content
                blogTitle
                topics
                tags
                hiddenMainIndex
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            blogPosts {
              items {
                id
                videoSeriesId
                blogId
                blog {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogSeriesId
                  blogSeriesIndex
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                  __typename
                }
                videoSeries {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            seriesType
            title
            description
            thumbnailDescription
            image
            squareImage {
              src
              alt
              __typename
            }
            bannerImage {
              src
              alt
              __typename
            }
            babyHeroImage {
              src
              alt
              __typename
            }
            startDate
            endDate
            notes {
              items {
                id
                title
                content
                questions
                jsonContent
                jsonQuestions
                episodeDescription
                episodeNumber
                seriesId
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  __typename
                }
                pdf
                topics
                tags
                verses {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      seriesType
      title
      description
      thumbnailDescription
      image
      squareImage {
        src
        alt
        __typename
      }
      bannerImage {
        src
        alt
        __typename
      }
      babyHeroImage {
        src
        alt
        __typename
      }
      startDate
      endDate
      notes {
        items {
          id
          title
          content
          questions
          jsonContent
          jsonQuestions
          episodeDescription
          episodeNumber
          seriesId
          series {
            id
            videos {
              items {
                id
                createdBy
                createdDate
                speakers {
                  nextToken
                  __typename
                }
                episodeTitle
                originalEpisodeTitle
                episodeNumber
                seriesTitle
                videoSeriesId
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  __typename
                }
                customPlaylistIDs
                customPlaylists {
                  nextToken
                  __typename
                }
                publishedDate
                recordedDate
                description
                viewCount
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
                  __typename
                }
                videoTypes
                notesURL
                videoURL
                audioURL
                thumbnailDescription
                move
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            blogs {
              items {
                id
                author
                createdBy
                createdDate
                publishedDate
                expirationDate
                videoSeries {
                  nextToken
                  __typename
                }
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  __typename
                }
                blogSeriesId
                blogSeriesIndex
                blogSeries {
                  nextToken
                  __typename
                }
                blogStatus
                description
                thumbnailDescription
                content
                blogTitle
                topics
                tags
                hiddenMainIndex
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            blogPosts {
              items {
                id
                videoSeriesId
                blogId
                blog {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogSeriesId
                  blogSeriesIndex
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                  __typename
                }
                videoSeries {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            seriesType
            title
            description
            thumbnailDescription
            image
            squareImage {
              src
              alt
              __typename
            }
            bannerImage {
              src
              alt
              __typename
            }
            babyHeroImage {
              src
              alt
              __typename
            }
            startDate
            endDate
            notes {
              items {
                id
                title
                content
                questions
                jsonContent
                jsonQuestions
                episodeDescription
                episodeNumber
                seriesId
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  __typename
                }
                pdf
                topics
                tags
                verses {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          pdf
          topics
          tags
          verses {
            items {
              id
              key
              offset
              length
              dataType
              content
              youVersionUri
              noteId
              note {
                id
                title
                content
                questions
                jsonContent
                jsonQuestions
                episodeDescription
                episodeNumber
                seriesId
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  __typename
                }
                pdf
                topics
                tags
                verses {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listSeries = /* GraphQL */ `
  query ListSeries(
    $filter: ModelSeriesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSeries(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        videos {
          items {
            id
            createdBy
            createdDate
            speakers {
              items {
                id
                speakerVideosSpeakerId
                video {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  videoSeriesId
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
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
                  thumbnailDescription
                  move
                  createdAt
                  updatedAt
                  __typename
                }
                speakerVideosVideoId
                speaker {
                  id
                  name
                  image
                  hidden
                  createdAt
                  updatedAt
                  __typename
                }
                videoPublishedDate
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            episodeTitle
            originalEpisodeTitle
            episodeNumber
            seriesTitle
            videoSeriesId
            series {
              id
              videos {
                items {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  videoSeriesId
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
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
                  thumbnailDescription
                  move
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogs {
                items {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogSeriesId
                  blogSeriesIndex
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogPosts {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              seriesType
              title
              description
              thumbnailDescription
              image
              squareImage {
                src
                alt
                __typename
              }
              bannerImage {
                src
                alt
                __typename
              }
              babyHeroImage {
                src
                alt
                __typename
              }
              startDate
              endDate
              notes {
                items {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            customPlaylistIDs
            customPlaylists {
              items {
                id
                videoID
                customPlaylistID
                customPlaylist {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  createdAt
                  updatedAt
                  __typename
                }
                video {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  videoSeriesId
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
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
                  thumbnailDescription
                  move
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            publishedDate
            recordedDate
            description
            viewCount
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
                channelId
                title
                description
                thumbnails {
                  __typename
                }
                channelTitle
                localized {
                  title
                  description
                  __typename
                }
                __typename
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
                contentRating {
                  acbRating
                  agcomRating
                  anatelRating
                  bbfcRating
                  bfvcRating
                  bmukkRating
                  catvRating
                  catvfrRating
                  cbfcRating
                  cccRating
                  cceRating
                  chfilmRating
                  chvrsRating
                  cicfRating
                  cnaRating
                  cncRating
                  csaRating
                  cscfRating
                  czfilmRating
                  djctqRating
                  djctqRatingReasons
                  ecbmctRating
                  eefilmRating
                  egfilmRating
                  eirinRating
                  fcbmRating
                  fcoRating
                  fmocRating
                  fpbRating
                  fpbRatingReasons
                  fskRating
                  grfilmRating
                  icaaRating
                  ifcoRating
                  ilfilmRating
                  incaaRating
                  kfcbRating
                  kijkwijzerRating
                  kmrbRating
                  lsfRating
                  mccaaRating
                  mccypRating
                  mcstRating
                  mdaRating
                  medietilsynetRating
                  mekuRating
                  mibacRating
                  mocRating
                  moctwRating
                  mpaaRating
                  mpaatRating
                  mtrcbRating
                  nbcRating
                  nbcplRating
                  nfrcRating
                  nfvcbRating
                  nkclvRating
                  oflcRating
                  pefilmRating
                  rcnofRating
                  resorteviolenciaRating
                  rtcRating
                  rteRating
                  russiaRating
                  skfilmRating
                  smaisRating
                  smsaRating
                  tvpgRating
                  ytRating
                  __typename
                }
                regionRestriction {
                  allowed
                  blocked
                  __typename
                }
                hasCustomThumbnail
                __typename
              }
              status {
                uploadStatus
                privacyStatus
                license
                embeddable
                publicStatsViewable
                __typename
              }
              __typename
            }
            videoTypes
            notesURL
            videoURL
            audioURL
            thumbnailDescription
            move
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        blogs {
          items {
            id
            author
            createdBy
            createdDate
            publishedDate
            expirationDate
            videoSeries {
              items {
                id
                videoSeriesId
                blogId
                blog {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogSeriesId
                  blogSeriesIndex
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                  __typename
                }
                videoSeries {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            series {
              id
              videos {
                items {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  videoSeriesId
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
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
                  thumbnailDescription
                  move
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogs {
                items {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogSeriesId
                  blogSeriesIndex
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogPosts {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              seriesType
              title
              description
              thumbnailDescription
              image
              squareImage {
                src
                alt
                __typename
              }
              bannerImage {
                src
                alt
                __typename
              }
              babyHeroImage {
                src
                alt
                __typename
              }
              startDate
              endDate
              notes {
                items {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            blogSeriesId
            blogSeriesIndex
            blogSeries {
              items {
                id
                blogSeriesID
                blogPostID
                blogSeries {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  __typename
                }
                blogPost {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogSeriesId
                  blogSeriesIndex
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            blogStatus
            description
            thumbnailDescription
            content
            blogTitle
            topics
            tags
            hiddenMainIndex
            squareImage {
              src
              alt
              __typename
            }
            bannerImage {
              src
              alt
              __typename
            }
            babyHeroImage {
              src
              alt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        blogPosts {
          items {
            id
            videoSeriesId
            blogId
            blog {
              id
              author
              createdBy
              createdDate
              publishedDate
              expirationDate
              videoSeries {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              series {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              blogSeriesId
              blogSeriesIndex
              blogSeries {
                items {
                  id
                  blogSeriesID
                  blogPostID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogStatus
              description
              thumbnailDescription
              content
              blogTitle
              topics
              tags
              hiddenMainIndex
              squareImage {
                src
                alt
                __typename
              }
              bannerImage {
                src
                alt
                __typename
              }
              babyHeroImage {
                src
                alt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            videoSeries {
              id
              videos {
                items {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  videoSeriesId
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
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
                  thumbnailDescription
                  move
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogs {
                items {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogSeriesId
                  blogSeriesIndex
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogPosts {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              seriesType
              title
              description
              thumbnailDescription
              image
              squareImage {
                src
                alt
                __typename
              }
              bannerImage {
                src
                alt
                __typename
              }
              babyHeroImage {
                src
                alt
                __typename
              }
              startDate
              endDate
              notes {
                items {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        seriesType
        title
        description
        thumbnailDescription
        image
        squareImage {
          src
          alt
          __typename
        }
        bannerImage {
          src
          alt
          __typename
        }
        babyHeroImage {
          src
          alt
          __typename
        }
        startDate
        endDate
        notes {
          items {
            id
            title
            content
            questions
            jsonContent
            jsonQuestions
            episodeDescription
            episodeNumber
            seriesId
            series {
              id
              videos {
                items {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  videoSeriesId
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
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
                  thumbnailDescription
                  move
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogs {
                items {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogSeriesId
                  blogSeriesIndex
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogPosts {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              seriesType
              title
              description
              thumbnailDescription
              image
              squareImage {
                src
                alt
                __typename
              }
              bannerImage {
                src
                alt
                __typename
              }
              babyHeroImage {
                src
                alt
                __typename
              }
              startDate
              endDate
              notes {
                items {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            pdf
            topics
            tags
            verses {
              items {
                id
                key
                offset
                length
                dataType
                content
                youVersionUri
                noteId
                note {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getSeriesBySeriesType = /* GraphQL */ `
  query GetSeriesBySeriesType(
    $seriesType: String!
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
            createdBy
            createdDate
            speakers {
              items {
                id
                speakerVideosSpeakerId
                video {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  videoSeriesId
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
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
                  thumbnailDescription
                  move
                  createdAt
                  updatedAt
                  __typename
                }
                speakerVideosVideoId
                speaker {
                  id
                  name
                  image
                  hidden
                  createdAt
                  updatedAt
                  __typename
                }
                videoPublishedDate
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            episodeTitle
            originalEpisodeTitle
            episodeNumber
            seriesTitle
            videoSeriesId
            series {
              id
              videos {
                items {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  videoSeriesId
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
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
                  thumbnailDescription
                  move
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogs {
                items {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogSeriesId
                  blogSeriesIndex
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogPosts {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              seriesType
              title
              description
              thumbnailDescription
              image
              squareImage {
                src
                alt
                __typename
              }
              bannerImage {
                src
                alt
                __typename
              }
              babyHeroImage {
                src
                alt
                __typename
              }
              startDate
              endDate
              notes {
                items {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            customPlaylistIDs
            customPlaylists {
              items {
                id
                videoID
                customPlaylistID
                customPlaylist {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  createdAt
                  updatedAt
                  __typename
                }
                video {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  videoSeriesId
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
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
                  thumbnailDescription
                  move
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            publishedDate
            recordedDate
            description
            viewCount
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
                channelId
                title
                description
                thumbnails {
                  __typename
                }
                channelTitle
                localized {
                  title
                  description
                  __typename
                }
                __typename
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
                contentRating {
                  acbRating
                  agcomRating
                  anatelRating
                  bbfcRating
                  bfvcRating
                  bmukkRating
                  catvRating
                  catvfrRating
                  cbfcRating
                  cccRating
                  cceRating
                  chfilmRating
                  chvrsRating
                  cicfRating
                  cnaRating
                  cncRating
                  csaRating
                  cscfRating
                  czfilmRating
                  djctqRating
                  djctqRatingReasons
                  ecbmctRating
                  eefilmRating
                  egfilmRating
                  eirinRating
                  fcbmRating
                  fcoRating
                  fmocRating
                  fpbRating
                  fpbRatingReasons
                  fskRating
                  grfilmRating
                  icaaRating
                  ifcoRating
                  ilfilmRating
                  incaaRating
                  kfcbRating
                  kijkwijzerRating
                  kmrbRating
                  lsfRating
                  mccaaRating
                  mccypRating
                  mcstRating
                  mdaRating
                  medietilsynetRating
                  mekuRating
                  mibacRating
                  mocRating
                  moctwRating
                  mpaaRating
                  mpaatRating
                  mtrcbRating
                  nbcRating
                  nbcplRating
                  nfrcRating
                  nfvcbRating
                  nkclvRating
                  oflcRating
                  pefilmRating
                  rcnofRating
                  resorteviolenciaRating
                  rtcRating
                  rteRating
                  russiaRating
                  skfilmRating
                  smaisRating
                  smsaRating
                  tvpgRating
                  ytRating
                  __typename
                }
                regionRestriction {
                  allowed
                  blocked
                  __typename
                }
                hasCustomThumbnail
                __typename
              }
              status {
                uploadStatus
                privacyStatus
                license
                embeddable
                publicStatsViewable
                __typename
              }
              __typename
            }
            videoTypes
            notesURL
            videoURL
            audioURL
            thumbnailDescription
            move
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        blogs {
          items {
            id
            author
            createdBy
            createdDate
            publishedDate
            expirationDate
            videoSeries {
              items {
                id
                videoSeriesId
                blogId
                blog {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogSeriesId
                  blogSeriesIndex
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                  __typename
                }
                videoSeries {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            series {
              id
              videos {
                items {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  videoSeriesId
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
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
                  thumbnailDescription
                  move
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogs {
                items {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogSeriesId
                  blogSeriesIndex
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogPosts {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              seriesType
              title
              description
              thumbnailDescription
              image
              squareImage {
                src
                alt
                __typename
              }
              bannerImage {
                src
                alt
                __typename
              }
              babyHeroImage {
                src
                alt
                __typename
              }
              startDate
              endDate
              notes {
                items {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            blogSeriesId
            blogSeriesIndex
            blogSeries {
              items {
                id
                blogSeriesID
                blogPostID
                blogSeries {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  __typename
                }
                blogPost {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogSeriesId
                  blogSeriesIndex
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            blogStatus
            description
            thumbnailDescription
            content
            blogTitle
            topics
            tags
            hiddenMainIndex
            squareImage {
              src
              alt
              __typename
            }
            bannerImage {
              src
              alt
              __typename
            }
            babyHeroImage {
              src
              alt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        blogPosts {
          items {
            id
            videoSeriesId
            blogId
            blog {
              id
              author
              createdBy
              createdDate
              publishedDate
              expirationDate
              videoSeries {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              series {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              blogSeriesId
              blogSeriesIndex
              blogSeries {
                items {
                  id
                  blogSeriesID
                  blogPostID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogStatus
              description
              thumbnailDescription
              content
              blogTitle
              topics
              tags
              hiddenMainIndex
              squareImage {
                src
                alt
                __typename
              }
              bannerImage {
                src
                alt
                __typename
              }
              babyHeroImage {
                src
                alt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            videoSeries {
              id
              videos {
                items {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  videoSeriesId
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
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
                  thumbnailDescription
                  move
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogs {
                items {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogSeriesId
                  blogSeriesIndex
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogPosts {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              seriesType
              title
              description
              thumbnailDescription
              image
              squareImage {
                src
                alt
                __typename
              }
              bannerImage {
                src
                alt
                __typename
              }
              babyHeroImage {
                src
                alt
                __typename
              }
              startDate
              endDate
              notes {
                items {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        seriesType
        title
        description
        thumbnailDescription
        image
        squareImage {
          src
          alt
          __typename
        }
        bannerImage {
          src
          alt
          __typename
        }
        babyHeroImage {
          src
          alt
          __typename
        }
        startDate
        endDate
        notes {
          items {
            id
            title
            content
            questions
            jsonContent
            jsonQuestions
            episodeDescription
            episodeNumber
            seriesId
            series {
              id
              videos {
                items {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  videoSeriesId
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
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
                  thumbnailDescription
                  move
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogs {
                items {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogSeriesId
                  blogSeriesIndex
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogPosts {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              seriesType
              title
              description
              thumbnailDescription
              image
              squareImage {
                src
                alt
                __typename
              }
              bannerImage {
                src
                alt
                __typename
              }
              babyHeroImage {
                src
                alt
                __typename
              }
              startDate
              endDate
              notes {
                items {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            pdf
            topics
            tags
            verses {
              items {
                id
                key
                offset
                length
                dataType
                content
                youVersionUri
                noteId
                note {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const searchSeries = /* GraphQL */ `
  query SearchSeries(
    $filter: SearchableSeriesFilterInput
    $sort: [SearchableSeriesSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableSeriesAggregationInput]
  ) {
    searchSeries(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        videos {
          items {
            id
            createdBy
            createdDate
            speakers {
              items {
                id
                speakerVideosSpeakerId
                video {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  videoSeriesId
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
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
                  thumbnailDescription
                  move
                  createdAt
                  updatedAt
                  __typename
                }
                speakerVideosVideoId
                speaker {
                  id
                  name
                  image
                  hidden
                  createdAt
                  updatedAt
                  __typename
                }
                videoPublishedDate
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            episodeTitle
            originalEpisodeTitle
            episodeNumber
            seriesTitle
            videoSeriesId
            series {
              id
              videos {
                items {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  videoSeriesId
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
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
                  thumbnailDescription
                  move
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogs {
                items {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogSeriesId
                  blogSeriesIndex
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogPosts {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              seriesType
              title
              description
              thumbnailDescription
              image
              squareImage {
                src
                alt
                __typename
              }
              bannerImage {
                src
                alt
                __typename
              }
              babyHeroImage {
                src
                alt
                __typename
              }
              startDate
              endDate
              notes {
                items {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            customPlaylistIDs
            customPlaylists {
              items {
                id
                videoID
                customPlaylistID
                customPlaylist {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  createdAt
                  updatedAt
                  __typename
                }
                video {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  videoSeriesId
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
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
                  thumbnailDescription
                  move
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            publishedDate
            recordedDate
            description
            viewCount
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
                channelId
                title
                description
                thumbnails {
                  __typename
                }
                channelTitle
                localized {
                  title
                  description
                  __typename
                }
                __typename
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
                contentRating {
                  acbRating
                  agcomRating
                  anatelRating
                  bbfcRating
                  bfvcRating
                  bmukkRating
                  catvRating
                  catvfrRating
                  cbfcRating
                  cccRating
                  cceRating
                  chfilmRating
                  chvrsRating
                  cicfRating
                  cnaRating
                  cncRating
                  csaRating
                  cscfRating
                  czfilmRating
                  djctqRating
                  djctqRatingReasons
                  ecbmctRating
                  eefilmRating
                  egfilmRating
                  eirinRating
                  fcbmRating
                  fcoRating
                  fmocRating
                  fpbRating
                  fpbRatingReasons
                  fskRating
                  grfilmRating
                  icaaRating
                  ifcoRating
                  ilfilmRating
                  incaaRating
                  kfcbRating
                  kijkwijzerRating
                  kmrbRating
                  lsfRating
                  mccaaRating
                  mccypRating
                  mcstRating
                  mdaRating
                  medietilsynetRating
                  mekuRating
                  mibacRating
                  mocRating
                  moctwRating
                  mpaaRating
                  mpaatRating
                  mtrcbRating
                  nbcRating
                  nbcplRating
                  nfrcRating
                  nfvcbRating
                  nkclvRating
                  oflcRating
                  pefilmRating
                  rcnofRating
                  resorteviolenciaRating
                  rtcRating
                  rteRating
                  russiaRating
                  skfilmRating
                  smaisRating
                  smsaRating
                  tvpgRating
                  ytRating
                  __typename
                }
                regionRestriction {
                  allowed
                  blocked
                  __typename
                }
                hasCustomThumbnail
                __typename
              }
              status {
                uploadStatus
                privacyStatus
                license
                embeddable
                publicStatsViewable
                __typename
              }
              __typename
            }
            videoTypes
            notesURL
            videoURL
            audioURL
            thumbnailDescription
            move
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        blogs {
          items {
            id
            author
            createdBy
            createdDate
            publishedDate
            expirationDate
            videoSeries {
              items {
                id
                videoSeriesId
                blogId
                blog {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogSeriesId
                  blogSeriesIndex
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                  __typename
                }
                videoSeries {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            series {
              id
              videos {
                items {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  videoSeriesId
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
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
                  thumbnailDescription
                  move
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogs {
                items {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogSeriesId
                  blogSeriesIndex
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogPosts {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              seriesType
              title
              description
              thumbnailDescription
              image
              squareImage {
                src
                alt
                __typename
              }
              bannerImage {
                src
                alt
                __typename
              }
              babyHeroImage {
                src
                alt
                __typename
              }
              startDate
              endDate
              notes {
                items {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            blogSeriesId
            blogSeriesIndex
            blogSeries {
              items {
                id
                blogSeriesID
                blogPostID
                blogSeries {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  __typename
                }
                blogPost {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogSeriesId
                  blogSeriesIndex
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            blogStatus
            description
            thumbnailDescription
            content
            blogTitle
            topics
            tags
            hiddenMainIndex
            squareImage {
              src
              alt
              __typename
            }
            bannerImage {
              src
              alt
              __typename
            }
            babyHeroImage {
              src
              alt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        blogPosts {
          items {
            id
            videoSeriesId
            blogId
            blog {
              id
              author
              createdBy
              createdDate
              publishedDate
              expirationDate
              videoSeries {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              series {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              blogSeriesId
              blogSeriesIndex
              blogSeries {
                items {
                  id
                  blogSeriesID
                  blogPostID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogStatus
              description
              thumbnailDescription
              content
              blogTitle
              topics
              tags
              hiddenMainIndex
              squareImage {
                src
                alt
                __typename
              }
              bannerImage {
                src
                alt
                __typename
              }
              babyHeroImage {
                src
                alt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            videoSeries {
              id
              videos {
                items {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  videoSeriesId
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
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
                  thumbnailDescription
                  move
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogs {
                items {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogSeriesId
                  blogSeriesIndex
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogPosts {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              seriesType
              title
              description
              thumbnailDescription
              image
              squareImage {
                src
                alt
                __typename
              }
              bannerImage {
                src
                alt
                __typename
              }
              babyHeroImage {
                src
                alt
                __typename
              }
              startDate
              endDate
              notes {
                items {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        seriesType
        title
        description
        thumbnailDescription
        image
        squareImage {
          src
          alt
          __typename
        }
        bannerImage {
          src
          alt
          __typename
        }
        babyHeroImage {
          src
          alt
          __typename
        }
        startDate
        endDate
        notes {
          items {
            id
            title
            content
            questions
            jsonContent
            jsonQuestions
            episodeDescription
            episodeNumber
            seriesId
            series {
              id
              videos {
                items {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  videoSeriesId
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
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
                  thumbnailDescription
                  move
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogs {
                items {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogSeriesId
                  blogSeriesIndex
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogPosts {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              seriesType
              title
              description
              thumbnailDescription
              image
              squareImage {
                src
                alt
                __typename
              }
              bannerImage {
                src
                alt
                __typename
              }
              babyHeroImage {
                src
                alt
                __typename
              }
              startDate
              endDate
              notes {
                items {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            pdf
            topics
            tags
            verses {
              items {
                id
                key
                offset
                length
                dataType
                content
                youVersionUri
                noteId
                note {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
              __typename
            }
          }
        }
        __typename
      }
      __typename
    }
  }
`;
export const getCustomPlaylist = /* GraphQL */ `
  query GetCustomPlaylist($id: ID!) {
    getCustomPlaylist(id: $id) {
      id
      videos {
        items {
          id
          videoID
          customPlaylistID
          customPlaylist {
            id
            videos {
              items {
                id
                videoID
                customPlaylistID
                customPlaylist {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  createdAt
                  updatedAt
                  __typename
                }
                video {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  videoSeriesId
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
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
                  thumbnailDescription
                  move
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            seriesType
            title
            description
            thumbnailDescription
            createdAt
            updatedAt
            __typename
          }
          video {
            id
            createdBy
            createdDate
            speakers {
              items {
                id
                speakerVideosSpeakerId
                video {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  videoSeriesId
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
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
                  thumbnailDescription
                  move
                  createdAt
                  updatedAt
                  __typename
                }
                speakerVideosVideoId
                speaker {
                  id
                  name
                  image
                  hidden
                  createdAt
                  updatedAt
                  __typename
                }
                videoPublishedDate
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            episodeTitle
            originalEpisodeTitle
            episodeNumber
            seriesTitle
            videoSeriesId
            series {
              id
              videos {
                items {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  videoSeriesId
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
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
                  thumbnailDescription
                  move
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogs {
                items {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogSeriesId
                  blogSeriesIndex
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogPosts {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              seriesType
              title
              description
              thumbnailDescription
              image
              squareImage {
                src
                alt
                __typename
              }
              bannerImage {
                src
                alt
                __typename
              }
              babyHeroImage {
                src
                alt
                __typename
              }
              startDate
              endDate
              notes {
                items {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            customPlaylistIDs
            customPlaylists {
              items {
                id
                videoID
                customPlaylistID
                customPlaylist {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  createdAt
                  updatedAt
                  __typename
                }
                video {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  videoSeriesId
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
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
                  thumbnailDescription
                  move
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            publishedDate
            recordedDate
            description
            viewCount
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
                channelId
                title
                description
                thumbnails {
                  __typename
                }
                channelTitle
                localized {
                  title
                  description
                  __typename
                }
                __typename
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
                contentRating {
                  acbRating
                  agcomRating
                  anatelRating
                  bbfcRating
                  bfvcRating
                  bmukkRating
                  catvRating
                  catvfrRating
                  cbfcRating
                  cccRating
                  cceRating
                  chfilmRating
                  chvrsRating
                  cicfRating
                  cnaRating
                  cncRating
                  csaRating
                  cscfRating
                  czfilmRating
                  djctqRating
                  djctqRatingReasons
                  ecbmctRating
                  eefilmRating
                  egfilmRating
                  eirinRating
                  fcbmRating
                  fcoRating
                  fmocRating
                  fpbRating
                  fpbRatingReasons
                  fskRating
                  grfilmRating
                  icaaRating
                  ifcoRating
                  ilfilmRating
                  incaaRating
                  kfcbRating
                  kijkwijzerRating
                  kmrbRating
                  lsfRating
                  mccaaRating
                  mccypRating
                  mcstRating
                  mdaRating
                  medietilsynetRating
                  mekuRating
                  mibacRating
                  mocRating
                  moctwRating
                  mpaaRating
                  mpaatRating
                  mtrcbRating
                  nbcRating
                  nbcplRating
                  nfrcRating
                  nfvcbRating
                  nkclvRating
                  oflcRating
                  pefilmRating
                  rcnofRating
                  resorteviolenciaRating
                  rtcRating
                  rteRating
                  russiaRating
                  skfilmRating
                  smaisRating
                  smsaRating
                  tvpgRating
                  ytRating
                  __typename
                }
                regionRestriction {
                  allowed
                  blocked
                  __typename
                }
                hasCustomThumbnail
                __typename
              }
              status {
                uploadStatus
                privacyStatus
                license
                embeddable
                publicStatsViewable
                __typename
              }
              __typename
            }
            videoTypes
            notesURL
            videoURL
            audioURL
            thumbnailDescription
            move
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      seriesType
      title
      description
      thumbnailDescription
      createdAt
      updatedAt
      __typename
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
        videos {
          items {
            id
            videoID
            customPlaylistID
            customPlaylist {
              id
              videos {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              seriesType
              title
              description
              thumbnailDescription
              createdAt
              updatedAt
              __typename
            }
            video {
              id
              createdBy
              createdDate
              speakers {
                items {
                  id
                  speakerVideosSpeakerId
                  speakerVideosVideoId
                  videoPublishedDate
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              episodeTitle
              originalEpisodeTitle
              episodeNumber
              seriesTitle
              videoSeriesId
              series {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              customPlaylistIDs
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              publishedDate
              recordedDate
              description
              viewCount
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
                  channelId
                  title
                  description
                  channelTitle
                  __typename
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
                  hasCustomThumbnail
                  __typename
                }
                status {
                  uploadStatus
                  privacyStatus
                  license
                  embeddable
                  publicStatsViewable
                  __typename
                }
                __typename
              }
              videoTypes
              notesURL
              videoURL
              audioURL
              thumbnailDescription
              move
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        seriesType
        title
        description
        thumbnailDescription
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const searchCustomPlaylists = /* GraphQL */ `
  query SearchCustomPlaylists(
    $filter: SearchableCustomPlaylistFilterInput
    $sort: [SearchableCustomPlaylistSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableCustomPlaylistAggregationInput]
  ) {
    searchCustomPlaylists(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        videos {
          items {
            id
            videoID
            customPlaylistID
            customPlaylist {
              id
              videos {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              seriesType
              title
              description
              thumbnailDescription
              createdAt
              updatedAt
              __typename
            }
            video {
              id
              createdBy
              createdDate
              speakers {
                items {
                  id
                  speakerVideosSpeakerId
                  speakerVideosVideoId
                  videoPublishedDate
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              episodeTitle
              originalEpisodeTitle
              episodeNumber
              seriesTitle
              videoSeriesId
              series {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              customPlaylistIDs
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              publishedDate
              recordedDate
              description
              viewCount
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
                  channelId
                  title
                  description
                  channelTitle
                  __typename
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
                  hasCustomThumbnail
                  __typename
                }
                status {
                  uploadStatus
                  privacyStatus
                  license
                  embeddable
                  publicStatsViewable
                  __typename
                }
                __typename
              }
              videoTypes
              notesURL
              videoURL
              audioURL
              thumbnailDescription
              move
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        seriesType
        title
        description
        thumbnailDescription
        createdAt
        updatedAt
        __typename
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
              __typename
            }
          }
        }
        __typename
      }
      __typename
    }
  }
`;
export const getVideo = /* GraphQL */ `
  query GetVideo($id: ID!) {
    getVideo(id: $id) {
      id
      createdBy
      createdDate
      speakers {
        items {
          id
          speakerVideosSpeakerId
          video {
            id
            createdBy
            createdDate
            speakers {
              items {
                id
                speakerVideosSpeakerId
                video {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  videoSeriesId
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
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
                  thumbnailDescription
                  move
                  createdAt
                  updatedAt
                  __typename
                }
                speakerVideosVideoId
                speaker {
                  id
                  name
                  image
                  hidden
                  createdAt
                  updatedAt
                  __typename
                }
                videoPublishedDate
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            episodeTitle
            originalEpisodeTitle
            episodeNumber
            seriesTitle
            videoSeriesId
            series {
              id
              videos {
                items {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  videoSeriesId
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
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
                  thumbnailDescription
                  move
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogs {
                items {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogSeriesId
                  blogSeriesIndex
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogPosts {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              seriesType
              title
              description
              thumbnailDescription
              image
              squareImage {
                src
                alt
                __typename
              }
              bannerImage {
                src
                alt
                __typename
              }
              babyHeroImage {
                src
                alt
                __typename
              }
              startDate
              endDate
              notes {
                items {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            customPlaylistIDs
            customPlaylists {
              items {
                id
                videoID
                customPlaylistID
                customPlaylist {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  createdAt
                  updatedAt
                  __typename
                }
                video {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  videoSeriesId
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
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
                  thumbnailDescription
                  move
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            publishedDate
            recordedDate
            description
            viewCount
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
                channelId
                title
                description
                thumbnails {
                  __typename
                }
                channelTitle
                localized {
                  title
                  description
                  __typename
                }
                __typename
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
                contentRating {
                  acbRating
                  agcomRating
                  anatelRating
                  bbfcRating
                  bfvcRating
                  bmukkRating
                  catvRating
                  catvfrRating
                  cbfcRating
                  cccRating
                  cceRating
                  chfilmRating
                  chvrsRating
                  cicfRating
                  cnaRating
                  cncRating
                  csaRating
                  cscfRating
                  czfilmRating
                  djctqRating
                  djctqRatingReasons
                  ecbmctRating
                  eefilmRating
                  egfilmRating
                  eirinRating
                  fcbmRating
                  fcoRating
                  fmocRating
                  fpbRating
                  fpbRatingReasons
                  fskRating
                  grfilmRating
                  icaaRating
                  ifcoRating
                  ilfilmRating
                  incaaRating
                  kfcbRating
                  kijkwijzerRating
                  kmrbRating
                  lsfRating
                  mccaaRating
                  mccypRating
                  mcstRating
                  mdaRating
                  medietilsynetRating
                  mekuRating
                  mibacRating
                  mocRating
                  moctwRating
                  mpaaRating
                  mpaatRating
                  mtrcbRating
                  nbcRating
                  nbcplRating
                  nfrcRating
                  nfvcbRating
                  nkclvRating
                  oflcRating
                  pefilmRating
                  rcnofRating
                  resorteviolenciaRating
                  rtcRating
                  rteRating
                  russiaRating
                  skfilmRating
                  smaisRating
                  smsaRating
                  tvpgRating
                  ytRating
                  __typename
                }
                regionRestriction {
                  allowed
                  blocked
                  __typename
                }
                hasCustomThumbnail
                __typename
              }
              status {
                uploadStatus
                privacyStatus
                license
                embeddable
                publicStatsViewable
                __typename
              }
              __typename
            }
            videoTypes
            notesURL
            videoURL
            audioURL
            thumbnailDescription
            move
            createdAt
            updatedAt
            __typename
          }
          speakerVideosVideoId
          speaker {
            id
            name
            image
            videos {
              items {
                id
                speakerVideosSpeakerId
                video {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  videoSeriesId
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
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
                  thumbnailDescription
                  move
                  createdAt
                  updatedAt
                  __typename
                }
                speakerVideosVideoId
                speaker {
                  id
                  name
                  image
                  hidden
                  createdAt
                  updatedAt
                  __typename
                }
                videoPublishedDate
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            hidden
            createdAt
            updatedAt
            __typename
          }
          videoPublishedDate
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      episodeTitle
      originalEpisodeTitle
      episodeNumber
      seriesTitle
      videoSeriesId
      series {
        id
        videos {
          items {
            id
            createdBy
            createdDate
            speakers {
              items {
                id
                speakerVideosSpeakerId
                video {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  videoSeriesId
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
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
                  thumbnailDescription
                  move
                  createdAt
                  updatedAt
                  __typename
                }
                speakerVideosVideoId
                speaker {
                  id
                  name
                  image
                  hidden
                  createdAt
                  updatedAt
                  __typename
                }
                videoPublishedDate
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            episodeTitle
            originalEpisodeTitle
            episodeNumber
            seriesTitle
            videoSeriesId
            series {
              id
              videos {
                items {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  videoSeriesId
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
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
                  thumbnailDescription
                  move
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogs {
                items {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogSeriesId
                  blogSeriesIndex
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogPosts {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              seriesType
              title
              description
              thumbnailDescription
              image
              squareImage {
                src
                alt
                __typename
              }
              bannerImage {
                src
                alt
                __typename
              }
              babyHeroImage {
                src
                alt
                __typename
              }
              startDate
              endDate
              notes {
                items {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            customPlaylistIDs
            customPlaylists {
              items {
                id
                videoID
                customPlaylistID
                customPlaylist {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  createdAt
                  updatedAt
                  __typename
                }
                video {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  videoSeriesId
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
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
                  thumbnailDescription
                  move
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            publishedDate
            recordedDate
            description
            viewCount
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
                channelId
                title
                description
                thumbnails {
                  __typename
                }
                channelTitle
                localized {
                  title
                  description
                  __typename
                }
                __typename
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
                contentRating {
                  acbRating
                  agcomRating
                  anatelRating
                  bbfcRating
                  bfvcRating
                  bmukkRating
                  catvRating
                  catvfrRating
                  cbfcRating
                  cccRating
                  cceRating
                  chfilmRating
                  chvrsRating
                  cicfRating
                  cnaRating
                  cncRating
                  csaRating
                  cscfRating
                  czfilmRating
                  djctqRating
                  djctqRatingReasons
                  ecbmctRating
                  eefilmRating
                  egfilmRating
                  eirinRating
                  fcbmRating
                  fcoRating
                  fmocRating
                  fpbRating
                  fpbRatingReasons
                  fskRating
                  grfilmRating
                  icaaRating
                  ifcoRating
                  ilfilmRating
                  incaaRating
                  kfcbRating
                  kijkwijzerRating
                  kmrbRating
                  lsfRating
                  mccaaRating
                  mccypRating
                  mcstRating
                  mdaRating
                  medietilsynetRating
                  mekuRating
                  mibacRating
                  mocRating
                  moctwRating
                  mpaaRating
                  mpaatRating
                  mtrcbRating
                  nbcRating
                  nbcplRating
                  nfrcRating
                  nfvcbRating
                  nkclvRating
                  oflcRating
                  pefilmRating
                  rcnofRating
                  resorteviolenciaRating
                  rtcRating
                  rteRating
                  russiaRating
                  skfilmRating
                  smaisRating
                  smsaRating
                  tvpgRating
                  ytRating
                  __typename
                }
                regionRestriction {
                  allowed
                  blocked
                  __typename
                }
                hasCustomThumbnail
                __typename
              }
              status {
                uploadStatus
                privacyStatus
                license
                embeddable
                publicStatsViewable
                __typename
              }
              __typename
            }
            videoTypes
            notesURL
            videoURL
            audioURL
            thumbnailDescription
            move
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        blogs {
          items {
            id
            author
            createdBy
            createdDate
            publishedDate
            expirationDate
            videoSeries {
              items {
                id
                videoSeriesId
                blogId
                blog {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogSeriesId
                  blogSeriesIndex
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                  __typename
                }
                videoSeries {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            series {
              id
              videos {
                items {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  videoSeriesId
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
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
                  thumbnailDescription
                  move
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogs {
                items {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogSeriesId
                  blogSeriesIndex
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogPosts {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              seriesType
              title
              description
              thumbnailDescription
              image
              squareImage {
                src
                alt
                __typename
              }
              bannerImage {
                src
                alt
                __typename
              }
              babyHeroImage {
                src
                alt
                __typename
              }
              startDate
              endDate
              notes {
                items {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            blogSeriesId
            blogSeriesIndex
            blogSeries {
              items {
                id
                blogSeriesID
                blogPostID
                blogSeries {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  __typename
                }
                blogPost {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogSeriesId
                  blogSeriesIndex
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            blogStatus
            description
            thumbnailDescription
            content
            blogTitle
            topics
            tags
            hiddenMainIndex
            squareImage {
              src
              alt
              __typename
            }
            bannerImage {
              src
              alt
              __typename
            }
            babyHeroImage {
              src
              alt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        blogPosts {
          items {
            id
            videoSeriesId
            blogId
            blog {
              id
              author
              createdBy
              createdDate
              publishedDate
              expirationDate
              videoSeries {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              series {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              blogSeriesId
              blogSeriesIndex
              blogSeries {
                items {
                  id
                  blogSeriesID
                  blogPostID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogStatus
              description
              thumbnailDescription
              content
              blogTitle
              topics
              tags
              hiddenMainIndex
              squareImage {
                src
                alt
                __typename
              }
              bannerImage {
                src
                alt
                __typename
              }
              babyHeroImage {
                src
                alt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            videoSeries {
              id
              videos {
                items {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  videoSeriesId
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
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
                  thumbnailDescription
                  move
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogs {
                items {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogSeriesId
                  blogSeriesIndex
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogPosts {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              seriesType
              title
              description
              thumbnailDescription
              image
              squareImage {
                src
                alt
                __typename
              }
              bannerImage {
                src
                alt
                __typename
              }
              babyHeroImage {
                src
                alt
                __typename
              }
              startDate
              endDate
              notes {
                items {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        seriesType
        title
        description
        thumbnailDescription
        image
        squareImage {
          src
          alt
          __typename
        }
        bannerImage {
          src
          alt
          __typename
        }
        babyHeroImage {
          src
          alt
          __typename
        }
        startDate
        endDate
        notes {
          items {
            id
            title
            content
            questions
            jsonContent
            jsonQuestions
            episodeDescription
            episodeNumber
            seriesId
            series {
              id
              videos {
                items {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  videoSeriesId
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
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
                  thumbnailDescription
                  move
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogs {
                items {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogSeriesId
                  blogSeriesIndex
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogPosts {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              seriesType
              title
              description
              thumbnailDescription
              image
              squareImage {
                src
                alt
                __typename
              }
              bannerImage {
                src
                alt
                __typename
              }
              babyHeroImage {
                src
                alt
                __typename
              }
              startDate
              endDate
              notes {
                items {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            pdf
            topics
            tags
            verses {
              items {
                id
                key
                offset
                length
                dataType
                content
                youVersionUri
                noteId
                note {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      customPlaylistIDs
      customPlaylists {
        items {
          id
          videoID
          customPlaylistID
          customPlaylist {
            id
            videos {
              items {
                id
                videoID
                customPlaylistID
                customPlaylist {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  createdAt
                  updatedAt
                  __typename
                }
                video {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  videoSeriesId
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
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
                  thumbnailDescription
                  move
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            seriesType
            title
            description
            thumbnailDescription
            createdAt
            updatedAt
            __typename
          }
          video {
            id
            createdBy
            createdDate
            speakers {
              items {
                id
                speakerVideosSpeakerId
                video {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  videoSeriesId
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
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
                  thumbnailDescription
                  move
                  createdAt
                  updatedAt
                  __typename
                }
                speakerVideosVideoId
                speaker {
                  id
                  name
                  image
                  hidden
                  createdAt
                  updatedAt
                  __typename
                }
                videoPublishedDate
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            episodeTitle
            originalEpisodeTitle
            episodeNumber
            seriesTitle
            videoSeriesId
            series {
              id
              videos {
                items {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  videoSeriesId
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
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
                  thumbnailDescription
                  move
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogs {
                items {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogSeriesId
                  blogSeriesIndex
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogPosts {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              seriesType
              title
              description
              thumbnailDescription
              image
              squareImage {
                src
                alt
                __typename
              }
              bannerImage {
                src
                alt
                __typename
              }
              babyHeroImage {
                src
                alt
                __typename
              }
              startDate
              endDate
              notes {
                items {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            customPlaylistIDs
            customPlaylists {
              items {
                id
                videoID
                customPlaylistID
                customPlaylist {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  createdAt
                  updatedAt
                  __typename
                }
                video {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  videoSeriesId
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
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
                  thumbnailDescription
                  move
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            publishedDate
            recordedDate
            description
            viewCount
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
                channelId
                title
                description
                thumbnails {
                  __typename
                }
                channelTitle
                localized {
                  title
                  description
                  __typename
                }
                __typename
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
                contentRating {
                  acbRating
                  agcomRating
                  anatelRating
                  bbfcRating
                  bfvcRating
                  bmukkRating
                  catvRating
                  catvfrRating
                  cbfcRating
                  cccRating
                  cceRating
                  chfilmRating
                  chvrsRating
                  cicfRating
                  cnaRating
                  cncRating
                  csaRating
                  cscfRating
                  czfilmRating
                  djctqRating
                  djctqRatingReasons
                  ecbmctRating
                  eefilmRating
                  egfilmRating
                  eirinRating
                  fcbmRating
                  fcoRating
                  fmocRating
                  fpbRating
                  fpbRatingReasons
                  fskRating
                  grfilmRating
                  icaaRating
                  ifcoRating
                  ilfilmRating
                  incaaRating
                  kfcbRating
                  kijkwijzerRating
                  kmrbRating
                  lsfRating
                  mccaaRating
                  mccypRating
                  mcstRating
                  mdaRating
                  medietilsynetRating
                  mekuRating
                  mibacRating
                  mocRating
                  moctwRating
                  mpaaRating
                  mpaatRating
                  mtrcbRating
                  nbcRating
                  nbcplRating
                  nfrcRating
                  nfvcbRating
                  nkclvRating
                  oflcRating
                  pefilmRating
                  rcnofRating
                  resorteviolenciaRating
                  rtcRating
                  rteRating
                  russiaRating
                  skfilmRating
                  smaisRating
                  smsaRating
                  tvpgRating
                  ytRating
                  __typename
                }
                regionRestriction {
                  allowed
                  blocked
                  __typename
                }
                hasCustomThumbnail
                __typename
              }
              status {
                uploadStatus
                privacyStatus
                license
                embeddable
                publicStatsViewable
                __typename
              }
              __typename
            }
            videoTypes
            notesURL
            videoURL
            audioURL
            thumbnailDescription
            move
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      publishedDate
      recordedDate
      description
      viewCount
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
          channelId
          title
          description
          thumbnails {
            default {
              url
              width
              height
              __typename
            }
            medium {
              url
              width
              height
              __typename
            }
            high {
              url
              width
              height
              __typename
            }
            standard {
              url
              width
              height
              __typename
            }
            maxres {
              url
              width
              height
              __typename
            }
            __typename
          }
          channelTitle
          localized {
            title
            description
            __typename
          }
          __typename
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
          contentRating {
            acbRating
            agcomRating
            anatelRating
            bbfcRating
            bfvcRating
            bmukkRating
            catvRating
            catvfrRating
            cbfcRating
            cccRating
            cceRating
            chfilmRating
            chvrsRating
            cicfRating
            cnaRating
            cncRating
            csaRating
            cscfRating
            czfilmRating
            djctqRating
            djctqRatingReasons
            ecbmctRating
            eefilmRating
            egfilmRating
            eirinRating
            fcbmRating
            fcoRating
            fmocRating
            fpbRating
            fpbRatingReasons
            fskRating
            grfilmRating
            icaaRating
            ifcoRating
            ilfilmRating
            incaaRating
            kfcbRating
            kijkwijzerRating
            kmrbRating
            lsfRating
            mccaaRating
            mccypRating
            mcstRating
            mdaRating
            medietilsynetRating
            mekuRating
            mibacRating
            mocRating
            moctwRating
            mpaaRating
            mpaatRating
            mtrcbRating
            nbcRating
            nbcplRating
            nfrcRating
            nfvcbRating
            nkclvRating
            oflcRating
            pefilmRating
            rcnofRating
            resorteviolenciaRating
            rtcRating
            rteRating
            russiaRating
            skfilmRating
            smaisRating
            smsaRating
            tvpgRating
            ytRating
            __typename
          }
          regionRestriction {
            allowed
            blocked
            __typename
          }
          hasCustomThumbnail
          __typename
        }
        status {
          uploadStatus
          privacyStatus
          license
          embeddable
          publicStatsViewable
          __typename
        }
        __typename
      }
      videoTypes
      notesURL
      videoURL
      audioURL
      thumbnailDescription
      move
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listVideos = /* GraphQL */ `
  query ListVideos(
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
            id
            speakerVideosSpeakerId
            video {
              id
              createdBy
              createdDate
              speakers {
                items {
                  id
                  speakerVideosSpeakerId
                  speakerVideosVideoId
                  videoPublishedDate
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              episodeTitle
              originalEpisodeTitle
              episodeNumber
              seriesTitle
              videoSeriesId
              series {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              customPlaylistIDs
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              publishedDate
              recordedDate
              description
              viewCount
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
                  channelId
                  title
                  description
                  channelTitle
                  __typename
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
                  hasCustomThumbnail
                  __typename
                }
                status {
                  uploadStatus
                  privacyStatus
                  license
                  embeddable
                  publicStatsViewable
                  __typename
                }
                __typename
              }
              videoTypes
              notesURL
              videoURL
              audioURL
              thumbnailDescription
              move
              createdAt
              updatedAt
              __typename
            }
            speakerVideosVideoId
            speaker {
              id
              name
              image
              videos {
                items {
                  id
                  speakerVideosSpeakerId
                  speakerVideosVideoId
                  videoPublishedDate
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              hidden
              createdAt
              updatedAt
              __typename
            }
            videoPublishedDate
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        episodeTitle
        originalEpisodeTitle
        episodeNumber
        seriesTitle
        videoSeriesId
        series {
          id
          videos {
            items {
              id
              createdBy
              createdDate
              speakers {
                items {
                  id
                  speakerVideosSpeakerId
                  speakerVideosVideoId
                  videoPublishedDate
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              episodeTitle
              originalEpisodeTitle
              episodeNumber
              seriesTitle
              videoSeriesId
              series {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              customPlaylistIDs
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              publishedDate
              recordedDate
              description
              viewCount
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
                  channelId
                  title
                  description
                  channelTitle
                  __typename
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
                  hasCustomThumbnail
                  __typename
                }
                status {
                  uploadStatus
                  privacyStatus
                  license
                  embeddable
                  publicStatsViewable
                  __typename
                }
                __typename
              }
              videoTypes
              notesURL
              videoURL
              audioURL
              thumbnailDescription
              move
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          blogs {
            items {
              id
              author
              createdBy
              createdDate
              publishedDate
              expirationDate
              videoSeries {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              series {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              blogSeriesId
              blogSeriesIndex
              blogSeries {
                items {
                  id
                  blogSeriesID
                  blogPostID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogStatus
              description
              thumbnailDescription
              content
              blogTitle
              topics
              tags
              hiddenMainIndex
              squareImage {
                src
                alt
                __typename
              }
              bannerImage {
                src
                alt
                __typename
              }
              babyHeroImage {
                src
                alt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          blogPosts {
            items {
              id
              videoSeriesId
              blogId
              blog {
                id
                author
                createdBy
                createdDate
                publishedDate
                expirationDate
                videoSeries {
                  nextToken
                  __typename
                }
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  __typename
                }
                blogSeriesId
                blogSeriesIndex
                blogSeries {
                  nextToken
                  __typename
                }
                blogStatus
                description
                thumbnailDescription
                content
                blogTitle
                topics
                tags
                hiddenMainIndex
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              videoSeries {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          seriesType
          title
          description
          thumbnailDescription
          image
          squareImage {
            src
            alt
            __typename
          }
          bannerImage {
            src
            alt
            __typename
          }
          babyHeroImage {
            src
            alt
            __typename
          }
          startDate
          endDate
          notes {
            items {
              id
              title
              content
              questions
              jsonContent
              jsonQuestions
              episodeDescription
              episodeNumber
              seriesId
              series {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              pdf
              topics
              tags
              verses {
                items {
                  id
                  key
                  offset
                  length
                  dataType
                  content
                  youVersionUri
                  noteId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        customPlaylistIDs
        customPlaylists {
          items {
            id
            videoID
            customPlaylistID
            customPlaylist {
              id
              videos {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              seriesType
              title
              description
              thumbnailDescription
              createdAt
              updatedAt
              __typename
            }
            video {
              id
              createdBy
              createdDate
              speakers {
                items {
                  id
                  speakerVideosSpeakerId
                  speakerVideosVideoId
                  videoPublishedDate
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              episodeTitle
              originalEpisodeTitle
              episodeNumber
              seriesTitle
              videoSeriesId
              series {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              customPlaylistIDs
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              publishedDate
              recordedDate
              description
              viewCount
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
                  channelId
                  title
                  description
                  channelTitle
                  __typename
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
                  hasCustomThumbnail
                  __typename
                }
                status {
                  uploadStatus
                  privacyStatus
                  license
                  embeddable
                  publicStatsViewable
                  __typename
                }
                __typename
              }
              videoTypes
              notesURL
              videoURL
              audioURL
              thumbnailDescription
              move
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        publishedDate
        recordedDate
        description
        viewCount
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
            channelId
            title
            description
            thumbnails {
              default {
                url
                width
                height
                __typename
              }
              medium {
                url
                width
                height
                __typename
              }
              high {
                url
                width
                height
                __typename
              }
              standard {
                url
                width
                height
                __typename
              }
              maxres {
                url
                width
                height
                __typename
              }
              __typename
            }
            channelTitle
            localized {
              title
              description
              __typename
            }
            __typename
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
            contentRating {
              acbRating
              agcomRating
              anatelRating
              bbfcRating
              bfvcRating
              bmukkRating
              catvRating
              catvfrRating
              cbfcRating
              cccRating
              cceRating
              chfilmRating
              chvrsRating
              cicfRating
              cnaRating
              cncRating
              csaRating
              cscfRating
              czfilmRating
              djctqRating
              djctqRatingReasons
              ecbmctRating
              eefilmRating
              egfilmRating
              eirinRating
              fcbmRating
              fcoRating
              fmocRating
              fpbRating
              fpbRatingReasons
              fskRating
              grfilmRating
              icaaRating
              ifcoRating
              ilfilmRating
              incaaRating
              kfcbRating
              kijkwijzerRating
              kmrbRating
              lsfRating
              mccaaRating
              mccypRating
              mcstRating
              mdaRating
              medietilsynetRating
              mekuRating
              mibacRating
              mocRating
              moctwRating
              mpaaRating
              mpaatRating
              mtrcbRating
              nbcRating
              nbcplRating
              nfrcRating
              nfvcbRating
              nkclvRating
              oflcRating
              pefilmRating
              rcnofRating
              resorteviolenciaRating
              rtcRating
              rteRating
              russiaRating
              skfilmRating
              smaisRating
              smsaRating
              tvpgRating
              ytRating
              __typename
            }
            regionRestriction {
              allowed
              blocked
              __typename
            }
            hasCustomThumbnail
            __typename
          }
          status {
            uploadStatus
            privacyStatus
            license
            embeddable
            publicStatsViewable
            __typename
          }
          __typename
        }
        videoTypes
        notesURL
        videoURL
        audioURL
        thumbnailDescription
        move
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getVideoByYoutubeIdent = /* GraphQL */ `
  query GetVideoByYoutubeIdent(
    $YoutubeIdent: String!
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
        speakers {
          items {
            id
            speakerVideosSpeakerId
            video {
              id
              createdBy
              createdDate
              speakers {
                items {
                  id
                  speakerVideosSpeakerId
                  speakerVideosVideoId
                  videoPublishedDate
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              episodeTitle
              originalEpisodeTitle
              episodeNumber
              seriesTitle
              videoSeriesId
              series {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              customPlaylistIDs
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              publishedDate
              recordedDate
              description
              viewCount
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
                  channelId
                  title
                  description
                  channelTitle
                  __typename
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
                  hasCustomThumbnail
                  __typename
                }
                status {
                  uploadStatus
                  privacyStatus
                  license
                  embeddable
                  publicStatsViewable
                  __typename
                }
                __typename
              }
              videoTypes
              notesURL
              videoURL
              audioURL
              thumbnailDescription
              move
              createdAt
              updatedAt
              __typename
            }
            speakerVideosVideoId
            speaker {
              id
              name
              image
              videos {
                items {
                  id
                  speakerVideosSpeakerId
                  speakerVideosVideoId
                  videoPublishedDate
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              hidden
              createdAt
              updatedAt
              __typename
            }
            videoPublishedDate
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        episodeTitle
        originalEpisodeTitle
        episodeNumber
        seriesTitle
        videoSeriesId
        series {
          id
          videos {
            items {
              id
              createdBy
              createdDate
              speakers {
                items {
                  id
                  speakerVideosSpeakerId
                  speakerVideosVideoId
                  videoPublishedDate
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              episodeTitle
              originalEpisodeTitle
              episodeNumber
              seriesTitle
              videoSeriesId
              series {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              customPlaylistIDs
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              publishedDate
              recordedDate
              description
              viewCount
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
                  channelId
                  title
                  description
                  channelTitle
                  __typename
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
                  hasCustomThumbnail
                  __typename
                }
                status {
                  uploadStatus
                  privacyStatus
                  license
                  embeddable
                  publicStatsViewable
                  __typename
                }
                __typename
              }
              videoTypes
              notesURL
              videoURL
              audioURL
              thumbnailDescription
              move
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          blogs {
            items {
              id
              author
              createdBy
              createdDate
              publishedDate
              expirationDate
              videoSeries {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              series {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              blogSeriesId
              blogSeriesIndex
              blogSeries {
                items {
                  id
                  blogSeriesID
                  blogPostID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogStatus
              description
              thumbnailDescription
              content
              blogTitle
              topics
              tags
              hiddenMainIndex
              squareImage {
                src
                alt
                __typename
              }
              bannerImage {
                src
                alt
                __typename
              }
              babyHeroImage {
                src
                alt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          blogPosts {
            items {
              id
              videoSeriesId
              blogId
              blog {
                id
                author
                createdBy
                createdDate
                publishedDate
                expirationDate
                videoSeries {
                  nextToken
                  __typename
                }
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  __typename
                }
                blogSeriesId
                blogSeriesIndex
                blogSeries {
                  nextToken
                  __typename
                }
                blogStatus
                description
                thumbnailDescription
                content
                blogTitle
                topics
                tags
                hiddenMainIndex
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              videoSeries {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          seriesType
          title
          description
          thumbnailDescription
          image
          squareImage {
            src
            alt
            __typename
          }
          bannerImage {
            src
            alt
            __typename
          }
          babyHeroImage {
            src
            alt
            __typename
          }
          startDate
          endDate
          notes {
            items {
              id
              title
              content
              questions
              jsonContent
              jsonQuestions
              episodeDescription
              episodeNumber
              seriesId
              series {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              pdf
              topics
              tags
              verses {
                items {
                  id
                  key
                  offset
                  length
                  dataType
                  content
                  youVersionUri
                  noteId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        customPlaylistIDs
        customPlaylists {
          items {
            id
            videoID
            customPlaylistID
            customPlaylist {
              id
              videos {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              seriesType
              title
              description
              thumbnailDescription
              createdAt
              updatedAt
              __typename
            }
            video {
              id
              createdBy
              createdDate
              speakers {
                items {
                  id
                  speakerVideosSpeakerId
                  speakerVideosVideoId
                  videoPublishedDate
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              episodeTitle
              originalEpisodeTitle
              episodeNumber
              seriesTitle
              videoSeriesId
              series {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              customPlaylistIDs
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              publishedDate
              recordedDate
              description
              viewCount
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
                  channelId
                  title
                  description
                  channelTitle
                  __typename
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
                  hasCustomThumbnail
                  __typename
                }
                status {
                  uploadStatus
                  privacyStatus
                  license
                  embeddable
                  publicStatsViewable
                  __typename
                }
                __typename
              }
              videoTypes
              notesURL
              videoURL
              audioURL
              thumbnailDescription
              move
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        publishedDate
        recordedDate
        description
        viewCount
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
            channelId
            title
            description
            thumbnails {
              default {
                url
                width
                height
                __typename
              }
              medium {
                url
                width
                height
                __typename
              }
              high {
                url
                width
                height
                __typename
              }
              standard {
                url
                width
                height
                __typename
              }
              maxres {
                url
                width
                height
                __typename
              }
              __typename
            }
            channelTitle
            localized {
              title
              description
              __typename
            }
            __typename
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
            contentRating {
              acbRating
              agcomRating
              anatelRating
              bbfcRating
              bfvcRating
              bmukkRating
              catvRating
              catvfrRating
              cbfcRating
              cccRating
              cceRating
              chfilmRating
              chvrsRating
              cicfRating
              cnaRating
              cncRating
              csaRating
              cscfRating
              czfilmRating
              djctqRating
              djctqRatingReasons
              ecbmctRating
              eefilmRating
              egfilmRating
              eirinRating
              fcbmRating
              fcoRating
              fmocRating
              fpbRating
              fpbRatingReasons
              fskRating
              grfilmRating
              icaaRating
              ifcoRating
              ilfilmRating
              incaaRating
              kfcbRating
              kijkwijzerRating
              kmrbRating
              lsfRating
              mccaaRating
              mccypRating
              mcstRating
              mdaRating
              medietilsynetRating
              mekuRating
              mibacRating
              mocRating
              moctwRating
              mpaaRating
              mpaatRating
              mtrcbRating
              nbcRating
              nbcplRating
              nfrcRating
              nfvcbRating
              nkclvRating
              oflcRating
              pefilmRating
              rcnofRating
              resorteviolenciaRating
              rtcRating
              rteRating
              russiaRating
              skfilmRating
              smaisRating
              smsaRating
              tvpgRating
              ytRating
              __typename
            }
            regionRestriction {
              allowed
              blocked
              __typename
            }
            hasCustomThumbnail
            __typename
          }
          status {
            uploadStatus
            privacyStatus
            license
            embeddable
            publicStatsViewable
            __typename
          }
          __typename
        }
        videoTypes
        notesURL
        videoURL
        audioURL
        thumbnailDescription
        move
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getVideoByVideoType = /* GraphQL */ `
  query GetVideoByVideoType(
    $videoTypes: String!
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
        createdBy
        createdDate
        speakers {
          items {
            id
            speakerVideosSpeakerId
            video {
              id
              createdBy
              createdDate
              speakers {
                items {
                  id
                  speakerVideosSpeakerId
                  speakerVideosVideoId
                  videoPublishedDate
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              episodeTitle
              originalEpisodeTitle
              episodeNumber
              seriesTitle
              videoSeriesId
              series {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              customPlaylistIDs
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              publishedDate
              recordedDate
              description
              viewCount
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
                  channelId
                  title
                  description
                  channelTitle
                  __typename
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
                  hasCustomThumbnail
                  __typename
                }
                status {
                  uploadStatus
                  privacyStatus
                  license
                  embeddable
                  publicStatsViewable
                  __typename
                }
                __typename
              }
              videoTypes
              notesURL
              videoURL
              audioURL
              thumbnailDescription
              move
              createdAt
              updatedAt
              __typename
            }
            speakerVideosVideoId
            speaker {
              id
              name
              image
              videos {
                items {
                  id
                  speakerVideosSpeakerId
                  speakerVideosVideoId
                  videoPublishedDate
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              hidden
              createdAt
              updatedAt
              __typename
            }
            videoPublishedDate
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        episodeTitle
        originalEpisodeTitle
        episodeNumber
        seriesTitle
        videoSeriesId
        series {
          id
          videos {
            items {
              id
              createdBy
              createdDate
              speakers {
                items {
                  id
                  speakerVideosSpeakerId
                  speakerVideosVideoId
                  videoPublishedDate
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              episodeTitle
              originalEpisodeTitle
              episodeNumber
              seriesTitle
              videoSeriesId
              series {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              customPlaylistIDs
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              publishedDate
              recordedDate
              description
              viewCount
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
                  channelId
                  title
                  description
                  channelTitle
                  __typename
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
                  hasCustomThumbnail
                  __typename
                }
                status {
                  uploadStatus
                  privacyStatus
                  license
                  embeddable
                  publicStatsViewable
                  __typename
                }
                __typename
              }
              videoTypes
              notesURL
              videoURL
              audioURL
              thumbnailDescription
              move
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          blogs {
            items {
              id
              author
              createdBy
              createdDate
              publishedDate
              expirationDate
              videoSeries {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              series {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              blogSeriesId
              blogSeriesIndex
              blogSeries {
                items {
                  id
                  blogSeriesID
                  blogPostID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogStatus
              description
              thumbnailDescription
              content
              blogTitle
              topics
              tags
              hiddenMainIndex
              squareImage {
                src
                alt
                __typename
              }
              bannerImage {
                src
                alt
                __typename
              }
              babyHeroImage {
                src
                alt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          blogPosts {
            items {
              id
              videoSeriesId
              blogId
              blog {
                id
                author
                createdBy
                createdDate
                publishedDate
                expirationDate
                videoSeries {
                  nextToken
                  __typename
                }
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  __typename
                }
                blogSeriesId
                blogSeriesIndex
                blogSeries {
                  nextToken
                  __typename
                }
                blogStatus
                description
                thumbnailDescription
                content
                blogTitle
                topics
                tags
                hiddenMainIndex
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              videoSeries {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          seriesType
          title
          description
          thumbnailDescription
          image
          squareImage {
            src
            alt
            __typename
          }
          bannerImage {
            src
            alt
            __typename
          }
          babyHeroImage {
            src
            alt
            __typename
          }
          startDate
          endDate
          notes {
            items {
              id
              title
              content
              questions
              jsonContent
              jsonQuestions
              episodeDescription
              episodeNumber
              seriesId
              series {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              pdf
              topics
              tags
              verses {
                items {
                  id
                  key
                  offset
                  length
                  dataType
                  content
                  youVersionUri
                  noteId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        customPlaylistIDs
        customPlaylists {
          items {
            id
            videoID
            customPlaylistID
            customPlaylist {
              id
              videos {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              seriesType
              title
              description
              thumbnailDescription
              createdAt
              updatedAt
              __typename
            }
            video {
              id
              createdBy
              createdDate
              speakers {
                items {
                  id
                  speakerVideosSpeakerId
                  speakerVideosVideoId
                  videoPublishedDate
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              episodeTitle
              originalEpisodeTitle
              episodeNumber
              seriesTitle
              videoSeriesId
              series {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              customPlaylistIDs
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              publishedDate
              recordedDate
              description
              viewCount
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
                  channelId
                  title
                  description
                  channelTitle
                  __typename
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
                  hasCustomThumbnail
                  __typename
                }
                status {
                  uploadStatus
                  privacyStatus
                  license
                  embeddable
                  publicStatsViewable
                  __typename
                }
                __typename
              }
              videoTypes
              notesURL
              videoURL
              audioURL
              thumbnailDescription
              move
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        publishedDate
        recordedDate
        description
        viewCount
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
            channelId
            title
            description
            thumbnails {
              default {
                url
                width
                height
                __typename
              }
              medium {
                url
                width
                height
                __typename
              }
              high {
                url
                width
                height
                __typename
              }
              standard {
                url
                width
                height
                __typename
              }
              maxres {
                url
                width
                height
                __typename
              }
              __typename
            }
            channelTitle
            localized {
              title
              description
              __typename
            }
            __typename
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
            contentRating {
              acbRating
              agcomRating
              anatelRating
              bbfcRating
              bfvcRating
              bmukkRating
              catvRating
              catvfrRating
              cbfcRating
              cccRating
              cceRating
              chfilmRating
              chvrsRating
              cicfRating
              cnaRating
              cncRating
              csaRating
              cscfRating
              czfilmRating
              djctqRating
              djctqRatingReasons
              ecbmctRating
              eefilmRating
              egfilmRating
              eirinRating
              fcbmRating
              fcoRating
              fmocRating
              fpbRating
              fpbRatingReasons
              fskRating
              grfilmRating
              icaaRating
              ifcoRating
              ilfilmRating
              incaaRating
              kfcbRating
              kijkwijzerRating
              kmrbRating
              lsfRating
              mccaaRating
              mccypRating
              mcstRating
              mdaRating
              medietilsynetRating
              mekuRating
              mibacRating
              mocRating
              moctwRating
              mpaaRating
              mpaatRating
              mtrcbRating
              nbcRating
              nbcplRating
              nfrcRating
              nfvcbRating
              nkclvRating
              oflcRating
              pefilmRating
              rcnofRating
              resorteviolenciaRating
              rtcRating
              rteRating
              russiaRating
              skfilmRating
              smaisRating
              smsaRating
              tvpgRating
              ytRating
              __typename
            }
            regionRestriction {
              allowed
              blocked
              __typename
            }
            hasCustomThumbnail
            __typename
          }
          status {
            uploadStatus
            privacyStatus
            license
            embeddable
            publicStatsViewable
            __typename
          }
          __typename
        }
        videoTypes
        notesURL
        videoURL
        audioURL
        thumbnailDescription
        move
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const searchVideos = /* GraphQL */ `
  query SearchVideos(
    $filter: SearchableVideoFilterInput
    $sort: [SearchableVideoSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableVideoAggregationInput]
  ) {
    searchVideos(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        createdBy
        createdDate
        speakers {
          items {
            id
            speakerVideosSpeakerId
            video {
              id
              createdBy
              createdDate
              speakers {
                items {
                  id
                  speakerVideosSpeakerId
                  speakerVideosVideoId
                  videoPublishedDate
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              episodeTitle
              originalEpisodeTitle
              episodeNumber
              seriesTitle
              videoSeriesId
              series {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              customPlaylistIDs
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              publishedDate
              recordedDate
              description
              viewCount
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
                  channelId
                  title
                  description
                  channelTitle
                  __typename
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
                  hasCustomThumbnail
                  __typename
                }
                status {
                  uploadStatus
                  privacyStatus
                  license
                  embeddable
                  publicStatsViewable
                  __typename
                }
                __typename
              }
              videoTypes
              notesURL
              videoURL
              audioURL
              thumbnailDescription
              move
              createdAt
              updatedAt
              __typename
            }
            speakerVideosVideoId
            speaker {
              id
              name
              image
              videos {
                items {
                  id
                  speakerVideosSpeakerId
                  speakerVideosVideoId
                  videoPublishedDate
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              hidden
              createdAt
              updatedAt
              __typename
            }
            videoPublishedDate
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        episodeTitle
        originalEpisodeTitle
        episodeNumber
        seriesTitle
        videoSeriesId
        series {
          id
          videos {
            items {
              id
              createdBy
              createdDate
              speakers {
                items {
                  id
                  speakerVideosSpeakerId
                  speakerVideosVideoId
                  videoPublishedDate
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              episodeTitle
              originalEpisodeTitle
              episodeNumber
              seriesTitle
              videoSeriesId
              series {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              customPlaylistIDs
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              publishedDate
              recordedDate
              description
              viewCount
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
                  channelId
                  title
                  description
                  channelTitle
                  __typename
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
                  hasCustomThumbnail
                  __typename
                }
                status {
                  uploadStatus
                  privacyStatus
                  license
                  embeddable
                  publicStatsViewable
                  __typename
                }
                __typename
              }
              videoTypes
              notesURL
              videoURL
              audioURL
              thumbnailDescription
              move
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          blogs {
            items {
              id
              author
              createdBy
              createdDate
              publishedDate
              expirationDate
              videoSeries {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              series {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              blogSeriesId
              blogSeriesIndex
              blogSeries {
                items {
                  id
                  blogSeriesID
                  blogPostID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogStatus
              description
              thumbnailDescription
              content
              blogTitle
              topics
              tags
              hiddenMainIndex
              squareImage {
                src
                alt
                __typename
              }
              bannerImage {
                src
                alt
                __typename
              }
              babyHeroImage {
                src
                alt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          blogPosts {
            items {
              id
              videoSeriesId
              blogId
              blog {
                id
                author
                createdBy
                createdDate
                publishedDate
                expirationDate
                videoSeries {
                  nextToken
                  __typename
                }
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  __typename
                }
                blogSeriesId
                blogSeriesIndex
                blogSeries {
                  nextToken
                  __typename
                }
                blogStatus
                description
                thumbnailDescription
                content
                blogTitle
                topics
                tags
                hiddenMainIndex
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              videoSeries {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          seriesType
          title
          description
          thumbnailDescription
          image
          squareImage {
            src
            alt
            __typename
          }
          bannerImage {
            src
            alt
            __typename
          }
          babyHeroImage {
            src
            alt
            __typename
          }
          startDate
          endDate
          notes {
            items {
              id
              title
              content
              questions
              jsonContent
              jsonQuestions
              episodeDescription
              episodeNumber
              seriesId
              series {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              pdf
              topics
              tags
              verses {
                items {
                  id
                  key
                  offset
                  length
                  dataType
                  content
                  youVersionUri
                  noteId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        customPlaylistIDs
        customPlaylists {
          items {
            id
            videoID
            customPlaylistID
            customPlaylist {
              id
              videos {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              seriesType
              title
              description
              thumbnailDescription
              createdAt
              updatedAt
              __typename
            }
            video {
              id
              createdBy
              createdDate
              speakers {
                items {
                  id
                  speakerVideosSpeakerId
                  speakerVideosVideoId
                  videoPublishedDate
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              episodeTitle
              originalEpisodeTitle
              episodeNumber
              seriesTitle
              videoSeriesId
              series {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              customPlaylistIDs
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              publishedDate
              recordedDate
              description
              viewCount
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
                  channelId
                  title
                  description
                  channelTitle
                  __typename
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
                  hasCustomThumbnail
                  __typename
                }
                status {
                  uploadStatus
                  privacyStatus
                  license
                  embeddable
                  publicStatsViewable
                  __typename
                }
                __typename
              }
              videoTypes
              notesURL
              videoURL
              audioURL
              thumbnailDescription
              move
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        publishedDate
        recordedDate
        description
        viewCount
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
            channelId
            title
            description
            thumbnails {
              default {
                url
                width
                height
                __typename
              }
              medium {
                url
                width
                height
                __typename
              }
              high {
                url
                width
                height
                __typename
              }
              standard {
                url
                width
                height
                __typename
              }
              maxres {
                url
                width
                height
                __typename
              }
              __typename
            }
            channelTitle
            localized {
              title
              description
              __typename
            }
            __typename
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
            contentRating {
              acbRating
              agcomRating
              anatelRating
              bbfcRating
              bfvcRating
              bmukkRating
              catvRating
              catvfrRating
              cbfcRating
              cccRating
              cceRating
              chfilmRating
              chvrsRating
              cicfRating
              cnaRating
              cncRating
              csaRating
              cscfRating
              czfilmRating
              djctqRating
              djctqRatingReasons
              ecbmctRating
              eefilmRating
              egfilmRating
              eirinRating
              fcbmRating
              fcoRating
              fmocRating
              fpbRating
              fpbRatingReasons
              fskRating
              grfilmRating
              icaaRating
              ifcoRating
              ilfilmRating
              incaaRating
              kfcbRating
              kijkwijzerRating
              kmrbRating
              lsfRating
              mccaaRating
              mccypRating
              mcstRating
              mdaRating
              medietilsynetRating
              mekuRating
              mibacRating
              mocRating
              moctwRating
              mpaaRating
              mpaatRating
              mtrcbRating
              nbcRating
              nbcplRating
              nfrcRating
              nfvcbRating
              nkclvRating
              oflcRating
              pefilmRating
              rcnofRating
              resorteviolenciaRating
              rtcRating
              rteRating
              russiaRating
              skfilmRating
              smaisRating
              smsaRating
              tvpgRating
              ytRating
              __typename
            }
            regionRestriction {
              allowed
              blocked
              __typename
            }
            hasCustomThumbnail
            __typename
          }
          status {
            uploadStatus
            privacyStatus
            license
            embeddable
            publicStatsViewable
            __typename
          }
          __typename
        }
        videoTypes
        notesURL
        videoURL
        audioURL
        thumbnailDescription
        move
        createdAt
        updatedAt
        __typename
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
              __typename
            }
          }
        }
        __typename
      }
      __typename
    }
  }
`;
export const getBlogSeries = /* GraphQL */ `
  query GetBlogSeries($id: ID!) {
    getBlogSeries(id: $id) {
      id
      blogs {
        items {
          id
          blogSeriesID
          blogPostID
          blogSeries {
            id
            blogs {
              items {
                id
                blogSeriesID
                blogPostID
                blogSeries {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  __typename
                }
                blogPost {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogSeriesId
                  blogSeriesIndex
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            seriesType
            title
            description
            thumbnailDescription
            image
            startDate
            endDate
            createdAt
            updatedAt
            __typename
          }
          blogPost {
            id
            author
            createdBy
            createdDate
            publishedDate
            expirationDate
            videoSeries {
              items {
                id
                videoSeriesId
                blogId
                blog {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogSeriesId
                  blogSeriesIndex
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                  __typename
                }
                videoSeries {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            series {
              id
              videos {
                items {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  videoSeriesId
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
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
                  thumbnailDescription
                  move
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogs {
                items {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogSeriesId
                  blogSeriesIndex
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogPosts {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              seriesType
              title
              description
              thumbnailDescription
              image
              squareImage {
                src
                alt
                __typename
              }
              bannerImage {
                src
                alt
                __typename
              }
              babyHeroImage {
                src
                alt
                __typename
              }
              startDate
              endDate
              notes {
                items {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            blogSeriesId
            blogSeriesIndex
            blogSeries {
              items {
                id
                blogSeriesID
                blogPostID
                blogSeries {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  __typename
                }
                blogPost {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogSeriesId
                  blogSeriesIndex
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            blogStatus
            description
            thumbnailDescription
            content
            blogTitle
            topics
            tags
            hiddenMainIndex
            squareImage {
              src
              alt
              __typename
            }
            bannerImage {
              src
              alt
              __typename
            }
            babyHeroImage {
              src
              alt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      seriesType
      title
      description
      thumbnailDescription
      image
      startDate
      endDate
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listBlogSeries = /* GraphQL */ `
  query ListBlogSeries(
    $filter: ModelBlogSeriesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlogSeries(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        blogs {
          items {
            id
            blogSeriesID
            blogPostID
            blogSeries {
              id
              blogs {
                items {
                  id
                  blogSeriesID
                  blogPostID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              seriesType
              title
              description
              thumbnailDescription
              image
              startDate
              endDate
              createdAt
              updatedAt
              __typename
            }
            blogPost {
              id
              author
              createdBy
              createdDate
              publishedDate
              expirationDate
              videoSeries {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              series {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              blogSeriesId
              blogSeriesIndex
              blogSeries {
                items {
                  id
                  blogSeriesID
                  blogPostID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogStatus
              description
              thumbnailDescription
              content
              blogTitle
              topics
              tags
              hiddenMainIndex
              squareImage {
                src
                alt
                __typename
              }
              bannerImage {
                src
                alt
                __typename
              }
              babyHeroImage {
                src
                alt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        seriesType
        title
        description
        thumbnailDescription
        image
        startDate
        endDate
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const searchBlogSeries = /* GraphQL */ `
  query SearchBlogSeries(
    $filter: SearchableBlogSeriesFilterInput
    $sort: [SearchableBlogSeriesSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableBlogSeriesAggregationInput]
  ) {
    searchBlogSeries(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        blogs {
          items {
            id
            blogSeriesID
            blogPostID
            blogSeries {
              id
              blogs {
                items {
                  id
                  blogSeriesID
                  blogPostID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              seriesType
              title
              description
              thumbnailDescription
              image
              startDate
              endDate
              createdAt
              updatedAt
              __typename
            }
            blogPost {
              id
              author
              createdBy
              createdDate
              publishedDate
              expirationDate
              videoSeries {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              series {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              blogSeriesId
              blogSeriesIndex
              blogSeries {
                items {
                  id
                  blogSeriesID
                  blogPostID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogStatus
              description
              thumbnailDescription
              content
              blogTitle
              topics
              tags
              hiddenMainIndex
              squareImage {
                src
                alt
                __typename
              }
              bannerImage {
                src
                alt
                __typename
              }
              babyHeroImage {
                src
                alt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        seriesType
        title
        description
        thumbnailDescription
        image
        startDate
        endDate
        createdAt
        updatedAt
        __typename
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
              __typename
            }
          }
        }
        __typename
      }
      __typename
    }
  }
`;
export const blogBridgeBySeries = /* GraphQL */ `
  query BlogBridgeBySeries(
    $blogSeriesID: ID!
    $blogPostID: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelBlogSeriesBridgeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    blogBridgeBySeries(
      blogSeriesID: $blogSeriesID
      blogPostID: $blogPostID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        blogSeriesID
        blogPostID
        blogSeries {
          id
          blogs {
            items {
              id
              blogSeriesID
              blogPostID
              blogSeries {
                id
                blogs {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                startDate
                endDate
                createdAt
                updatedAt
                __typename
              }
              blogPost {
                id
                author
                createdBy
                createdDate
                publishedDate
                expirationDate
                videoSeries {
                  nextToken
                  __typename
                }
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  __typename
                }
                blogSeriesId
                blogSeriesIndex
                blogSeries {
                  nextToken
                  __typename
                }
                blogStatus
                description
                thumbnailDescription
                content
                blogTitle
                topics
                tags
                hiddenMainIndex
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          seriesType
          title
          description
          thumbnailDescription
          image
          startDate
          endDate
          createdAt
          updatedAt
          __typename
        }
        blogPost {
          id
          author
          createdBy
          createdDate
          publishedDate
          expirationDate
          videoSeries {
            items {
              id
              videoSeriesId
              blogId
              blog {
                id
                author
                createdBy
                createdDate
                publishedDate
                expirationDate
                videoSeries {
                  nextToken
                  __typename
                }
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  __typename
                }
                blogSeriesId
                blogSeriesIndex
                blogSeries {
                  nextToken
                  __typename
                }
                blogStatus
                description
                thumbnailDescription
                content
                blogTitle
                topics
                tags
                hiddenMainIndex
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              videoSeries {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          series {
            id
            videos {
              items {
                id
                createdBy
                createdDate
                speakers {
                  nextToken
                  __typename
                }
                episodeTitle
                originalEpisodeTitle
                episodeNumber
                seriesTitle
                videoSeriesId
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  __typename
                }
                customPlaylistIDs
                customPlaylists {
                  nextToken
                  __typename
                }
                publishedDate
                recordedDate
                description
                viewCount
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
                  __typename
                }
                videoTypes
                notesURL
                videoURL
                audioURL
                thumbnailDescription
                move
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            blogs {
              items {
                id
                author
                createdBy
                createdDate
                publishedDate
                expirationDate
                videoSeries {
                  nextToken
                  __typename
                }
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  __typename
                }
                blogSeriesId
                blogSeriesIndex
                blogSeries {
                  nextToken
                  __typename
                }
                blogStatus
                description
                thumbnailDescription
                content
                blogTitle
                topics
                tags
                hiddenMainIndex
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            blogPosts {
              items {
                id
                videoSeriesId
                blogId
                blog {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogSeriesId
                  blogSeriesIndex
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                  __typename
                }
                videoSeries {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            seriesType
            title
            description
            thumbnailDescription
            image
            squareImage {
              src
              alt
              __typename
            }
            bannerImage {
              src
              alt
              __typename
            }
            babyHeroImage {
              src
              alt
              __typename
            }
            startDate
            endDate
            notes {
              items {
                id
                title
                content
                questions
                jsonContent
                jsonQuestions
                episodeDescription
                episodeNumber
                seriesId
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  __typename
                }
                pdf
                topics
                tags
                verses {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          blogSeriesId
          blogSeriesIndex
          blogSeries {
            items {
              id
              blogSeriesID
              blogPostID
              blogSeries {
                id
                blogs {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                startDate
                endDate
                createdAt
                updatedAt
                __typename
              }
              blogPost {
                id
                author
                createdBy
                createdDate
                publishedDate
                expirationDate
                videoSeries {
                  nextToken
                  __typename
                }
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  __typename
                }
                blogSeriesId
                blogSeriesIndex
                blogSeries {
                  nextToken
                  __typename
                }
                blogStatus
                description
                thumbnailDescription
                content
                blogTitle
                topics
                tags
                hiddenMainIndex
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          blogStatus
          description
          thumbnailDescription
          content
          blogTitle
          topics
          tags
          hiddenMainIndex
          squareImage {
            src
            alt
            __typename
          }
          bannerImage {
            src
            alt
            __typename
          }
          babyHeroImage {
            src
            alt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const blogBridgeByPost = /* GraphQL */ `
  query BlogBridgeByPost(
    $blogPostID: ID!
    $blogSeriesID: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelBlogSeriesBridgeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    blogBridgeByPost(
      blogPostID: $blogPostID
      blogSeriesID: $blogSeriesID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        blogSeriesID
        blogPostID
        blogSeries {
          id
          blogs {
            items {
              id
              blogSeriesID
              blogPostID
              blogSeries {
                id
                blogs {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                startDate
                endDate
                createdAt
                updatedAt
                __typename
              }
              blogPost {
                id
                author
                createdBy
                createdDate
                publishedDate
                expirationDate
                videoSeries {
                  nextToken
                  __typename
                }
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  __typename
                }
                blogSeriesId
                blogSeriesIndex
                blogSeries {
                  nextToken
                  __typename
                }
                blogStatus
                description
                thumbnailDescription
                content
                blogTitle
                topics
                tags
                hiddenMainIndex
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          seriesType
          title
          description
          thumbnailDescription
          image
          startDate
          endDate
          createdAt
          updatedAt
          __typename
        }
        blogPost {
          id
          author
          createdBy
          createdDate
          publishedDate
          expirationDate
          videoSeries {
            items {
              id
              videoSeriesId
              blogId
              blog {
                id
                author
                createdBy
                createdDate
                publishedDate
                expirationDate
                videoSeries {
                  nextToken
                  __typename
                }
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  __typename
                }
                blogSeriesId
                blogSeriesIndex
                blogSeries {
                  nextToken
                  __typename
                }
                blogStatus
                description
                thumbnailDescription
                content
                blogTitle
                topics
                tags
                hiddenMainIndex
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              videoSeries {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          series {
            id
            videos {
              items {
                id
                createdBy
                createdDate
                speakers {
                  nextToken
                  __typename
                }
                episodeTitle
                originalEpisodeTitle
                episodeNumber
                seriesTitle
                videoSeriesId
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  __typename
                }
                customPlaylistIDs
                customPlaylists {
                  nextToken
                  __typename
                }
                publishedDate
                recordedDate
                description
                viewCount
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
                  __typename
                }
                videoTypes
                notesURL
                videoURL
                audioURL
                thumbnailDescription
                move
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            blogs {
              items {
                id
                author
                createdBy
                createdDate
                publishedDate
                expirationDate
                videoSeries {
                  nextToken
                  __typename
                }
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  __typename
                }
                blogSeriesId
                blogSeriesIndex
                blogSeries {
                  nextToken
                  __typename
                }
                blogStatus
                description
                thumbnailDescription
                content
                blogTitle
                topics
                tags
                hiddenMainIndex
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            blogPosts {
              items {
                id
                videoSeriesId
                blogId
                blog {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogSeriesId
                  blogSeriesIndex
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                  __typename
                }
                videoSeries {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            seriesType
            title
            description
            thumbnailDescription
            image
            squareImage {
              src
              alt
              __typename
            }
            bannerImage {
              src
              alt
              __typename
            }
            babyHeroImage {
              src
              alt
              __typename
            }
            startDate
            endDate
            notes {
              items {
                id
                title
                content
                questions
                jsonContent
                jsonQuestions
                episodeDescription
                episodeNumber
                seriesId
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  __typename
                }
                pdf
                topics
                tags
                verses {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          blogSeriesId
          blogSeriesIndex
          blogSeries {
            items {
              id
              blogSeriesID
              blogPostID
              blogSeries {
                id
                blogs {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                startDate
                endDate
                createdAt
                updatedAt
                __typename
              }
              blogPost {
                id
                author
                createdBy
                createdDate
                publishedDate
                expirationDate
                videoSeries {
                  nextToken
                  __typename
                }
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  __typename
                }
                blogSeriesId
                blogSeriesIndex
                blogSeries {
                  nextToken
                  __typename
                }
                blogStatus
                description
                thumbnailDescription
                content
                blogTitle
                topics
                tags
                hiddenMainIndex
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          blogStatus
          description
          thumbnailDescription
          content
          blogTitle
          topics
          tags
          hiddenMainIndex
          squareImage {
            src
            alt
            __typename
          }
          bannerImage {
            src
            alt
            __typename
          }
          babyHeroImage {
            src
            alt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
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
      videoSeries {
        items {
          id
          videoSeriesId
          blogId
          blog {
            id
            author
            createdBy
            createdDate
            publishedDate
            expirationDate
            videoSeries {
              items {
                id
                videoSeriesId
                blogId
                blog {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogSeriesId
                  blogSeriesIndex
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                  __typename
                }
                videoSeries {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            series {
              id
              videos {
                items {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  videoSeriesId
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
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
                  thumbnailDescription
                  move
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogs {
                items {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogSeriesId
                  blogSeriesIndex
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogPosts {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              seriesType
              title
              description
              thumbnailDescription
              image
              squareImage {
                src
                alt
                __typename
              }
              bannerImage {
                src
                alt
                __typename
              }
              babyHeroImage {
                src
                alt
                __typename
              }
              startDate
              endDate
              notes {
                items {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            blogSeriesId
            blogSeriesIndex
            blogSeries {
              items {
                id
                blogSeriesID
                blogPostID
                blogSeries {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  __typename
                }
                blogPost {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogSeriesId
                  blogSeriesIndex
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            blogStatus
            description
            thumbnailDescription
            content
            blogTitle
            topics
            tags
            hiddenMainIndex
            squareImage {
              src
              alt
              __typename
            }
            bannerImage {
              src
              alt
              __typename
            }
            babyHeroImage {
              src
              alt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          videoSeries {
            id
            videos {
              items {
                id
                createdBy
                createdDate
                speakers {
                  nextToken
                  __typename
                }
                episodeTitle
                originalEpisodeTitle
                episodeNumber
                seriesTitle
                videoSeriesId
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  __typename
                }
                customPlaylistIDs
                customPlaylists {
                  nextToken
                  __typename
                }
                publishedDate
                recordedDate
                description
                viewCount
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
                  __typename
                }
                videoTypes
                notesURL
                videoURL
                audioURL
                thumbnailDescription
                move
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            blogs {
              items {
                id
                author
                createdBy
                createdDate
                publishedDate
                expirationDate
                videoSeries {
                  nextToken
                  __typename
                }
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  __typename
                }
                blogSeriesId
                blogSeriesIndex
                blogSeries {
                  nextToken
                  __typename
                }
                blogStatus
                description
                thumbnailDescription
                content
                blogTitle
                topics
                tags
                hiddenMainIndex
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            blogPosts {
              items {
                id
                videoSeriesId
                blogId
                blog {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogSeriesId
                  blogSeriesIndex
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                  __typename
                }
                videoSeries {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            seriesType
            title
            description
            thumbnailDescription
            image
            squareImage {
              src
              alt
              __typename
            }
            bannerImage {
              src
              alt
              __typename
            }
            babyHeroImage {
              src
              alt
              __typename
            }
            startDate
            endDate
            notes {
              items {
                id
                title
                content
                questions
                jsonContent
                jsonQuestions
                episodeDescription
                episodeNumber
                seriesId
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  __typename
                }
                pdf
                topics
                tags
                verses {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      series {
        id
        videos {
          items {
            id
            createdBy
            createdDate
            speakers {
              items {
                id
                speakerVideosSpeakerId
                video {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  videoSeriesId
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
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
                  thumbnailDescription
                  move
                  createdAt
                  updatedAt
                  __typename
                }
                speakerVideosVideoId
                speaker {
                  id
                  name
                  image
                  hidden
                  createdAt
                  updatedAt
                  __typename
                }
                videoPublishedDate
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            episodeTitle
            originalEpisodeTitle
            episodeNumber
            seriesTitle
            videoSeriesId
            series {
              id
              videos {
                items {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  videoSeriesId
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
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
                  thumbnailDescription
                  move
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogs {
                items {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogSeriesId
                  blogSeriesIndex
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogPosts {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              seriesType
              title
              description
              thumbnailDescription
              image
              squareImage {
                src
                alt
                __typename
              }
              bannerImage {
                src
                alt
                __typename
              }
              babyHeroImage {
                src
                alt
                __typename
              }
              startDate
              endDate
              notes {
                items {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            customPlaylistIDs
            customPlaylists {
              items {
                id
                videoID
                customPlaylistID
                customPlaylist {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  createdAt
                  updatedAt
                  __typename
                }
                video {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  videoSeriesId
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
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
                  thumbnailDescription
                  move
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            publishedDate
            recordedDate
            description
            viewCount
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
                channelId
                title
                description
                thumbnails {
                  __typename
                }
                channelTitle
                localized {
                  title
                  description
                  __typename
                }
                __typename
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
                contentRating {
                  acbRating
                  agcomRating
                  anatelRating
                  bbfcRating
                  bfvcRating
                  bmukkRating
                  catvRating
                  catvfrRating
                  cbfcRating
                  cccRating
                  cceRating
                  chfilmRating
                  chvrsRating
                  cicfRating
                  cnaRating
                  cncRating
                  csaRating
                  cscfRating
                  czfilmRating
                  djctqRating
                  djctqRatingReasons
                  ecbmctRating
                  eefilmRating
                  egfilmRating
                  eirinRating
                  fcbmRating
                  fcoRating
                  fmocRating
                  fpbRating
                  fpbRatingReasons
                  fskRating
                  grfilmRating
                  icaaRating
                  ifcoRating
                  ilfilmRating
                  incaaRating
                  kfcbRating
                  kijkwijzerRating
                  kmrbRating
                  lsfRating
                  mccaaRating
                  mccypRating
                  mcstRating
                  mdaRating
                  medietilsynetRating
                  mekuRating
                  mibacRating
                  mocRating
                  moctwRating
                  mpaaRating
                  mpaatRating
                  mtrcbRating
                  nbcRating
                  nbcplRating
                  nfrcRating
                  nfvcbRating
                  nkclvRating
                  oflcRating
                  pefilmRating
                  rcnofRating
                  resorteviolenciaRating
                  rtcRating
                  rteRating
                  russiaRating
                  skfilmRating
                  smaisRating
                  smsaRating
                  tvpgRating
                  ytRating
                  __typename
                }
                regionRestriction {
                  allowed
                  blocked
                  __typename
                }
                hasCustomThumbnail
                __typename
              }
              status {
                uploadStatus
                privacyStatus
                license
                embeddable
                publicStatsViewable
                __typename
              }
              __typename
            }
            videoTypes
            notesURL
            videoURL
            audioURL
            thumbnailDescription
            move
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        blogs {
          items {
            id
            author
            createdBy
            createdDate
            publishedDate
            expirationDate
            videoSeries {
              items {
                id
                videoSeriesId
                blogId
                blog {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogSeriesId
                  blogSeriesIndex
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                  __typename
                }
                videoSeries {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            series {
              id
              videos {
                items {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  videoSeriesId
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
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
                  thumbnailDescription
                  move
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogs {
                items {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogSeriesId
                  blogSeriesIndex
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogPosts {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              seriesType
              title
              description
              thumbnailDescription
              image
              squareImage {
                src
                alt
                __typename
              }
              bannerImage {
                src
                alt
                __typename
              }
              babyHeroImage {
                src
                alt
                __typename
              }
              startDate
              endDate
              notes {
                items {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            blogSeriesId
            blogSeriesIndex
            blogSeries {
              items {
                id
                blogSeriesID
                blogPostID
                blogSeries {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  __typename
                }
                blogPost {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogSeriesId
                  blogSeriesIndex
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            blogStatus
            description
            thumbnailDescription
            content
            blogTitle
            topics
            tags
            hiddenMainIndex
            squareImage {
              src
              alt
              __typename
            }
            bannerImage {
              src
              alt
              __typename
            }
            babyHeroImage {
              src
              alt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        blogPosts {
          items {
            id
            videoSeriesId
            blogId
            blog {
              id
              author
              createdBy
              createdDate
              publishedDate
              expirationDate
              videoSeries {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              series {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              blogSeriesId
              blogSeriesIndex
              blogSeries {
                items {
                  id
                  blogSeriesID
                  blogPostID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogStatus
              description
              thumbnailDescription
              content
              blogTitle
              topics
              tags
              hiddenMainIndex
              squareImage {
                src
                alt
                __typename
              }
              bannerImage {
                src
                alt
                __typename
              }
              babyHeroImage {
                src
                alt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            videoSeries {
              id
              videos {
                items {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  videoSeriesId
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
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
                  thumbnailDescription
                  move
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogs {
                items {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogSeriesId
                  blogSeriesIndex
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogPosts {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              seriesType
              title
              description
              thumbnailDescription
              image
              squareImage {
                src
                alt
                __typename
              }
              bannerImage {
                src
                alt
                __typename
              }
              babyHeroImage {
                src
                alt
                __typename
              }
              startDate
              endDate
              notes {
                items {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        seriesType
        title
        description
        thumbnailDescription
        image
        squareImage {
          src
          alt
          __typename
        }
        bannerImage {
          src
          alt
          __typename
        }
        babyHeroImage {
          src
          alt
          __typename
        }
        startDate
        endDate
        notes {
          items {
            id
            title
            content
            questions
            jsonContent
            jsonQuestions
            episodeDescription
            episodeNumber
            seriesId
            series {
              id
              videos {
                items {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  videoSeriesId
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
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
                  thumbnailDescription
                  move
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogs {
                items {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogSeriesId
                  blogSeriesIndex
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogPosts {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              seriesType
              title
              description
              thumbnailDescription
              image
              squareImage {
                src
                alt
                __typename
              }
              bannerImage {
                src
                alt
                __typename
              }
              babyHeroImage {
                src
                alt
                __typename
              }
              startDate
              endDate
              notes {
                items {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            pdf
            topics
            tags
            verses {
              items {
                id
                key
                offset
                length
                dataType
                content
                youVersionUri
                noteId
                note {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      blogSeriesId
      blogSeriesIndex
      blogSeries {
        items {
          id
          blogSeriesID
          blogPostID
          blogSeries {
            id
            blogs {
              items {
                id
                blogSeriesID
                blogPostID
                blogSeries {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  __typename
                }
                blogPost {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogSeriesId
                  blogSeriesIndex
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            seriesType
            title
            description
            thumbnailDescription
            image
            startDate
            endDate
            createdAt
            updatedAt
            __typename
          }
          blogPost {
            id
            author
            createdBy
            createdDate
            publishedDate
            expirationDate
            videoSeries {
              items {
                id
                videoSeriesId
                blogId
                blog {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogSeriesId
                  blogSeriesIndex
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                  __typename
                }
                videoSeries {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            series {
              id
              videos {
                items {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  videoSeriesId
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
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
                  thumbnailDescription
                  move
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogs {
                items {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogSeriesId
                  blogSeriesIndex
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogPosts {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              seriesType
              title
              description
              thumbnailDescription
              image
              squareImage {
                src
                alt
                __typename
              }
              bannerImage {
                src
                alt
                __typename
              }
              babyHeroImage {
                src
                alt
                __typename
              }
              startDate
              endDate
              notes {
                items {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            blogSeriesId
            blogSeriesIndex
            blogSeries {
              items {
                id
                blogSeriesID
                blogPostID
                blogSeries {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  __typename
                }
                blogPost {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogSeriesId
                  blogSeriesIndex
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            blogStatus
            description
            thumbnailDescription
            content
            blogTitle
            topics
            tags
            hiddenMainIndex
            squareImage {
              src
              alt
              __typename
            }
            bannerImage {
              src
              alt
              __typename
            }
            babyHeroImage {
              src
              alt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      blogStatus
      description
      thumbnailDescription
      content
      blogTitle
      topics
      tags
      hiddenMainIndex
      squareImage {
        src
        alt
        __typename
      }
      bannerImage {
        src
        alt
        __typename
      }
      babyHeroImage {
        src
        alt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listBlogs = /* GraphQL */ `
  query ListBlogs(
    $filter: ModelBlogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        author
        createdBy
        createdDate
        publishedDate
        expirationDate
        videoSeries {
          items {
            id
            videoSeriesId
            blogId
            blog {
              id
              author
              createdBy
              createdDate
              publishedDate
              expirationDate
              videoSeries {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              series {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              blogSeriesId
              blogSeriesIndex
              blogSeries {
                items {
                  id
                  blogSeriesID
                  blogPostID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogStatus
              description
              thumbnailDescription
              content
              blogTitle
              topics
              tags
              hiddenMainIndex
              squareImage {
                src
                alt
                __typename
              }
              bannerImage {
                src
                alt
                __typename
              }
              babyHeroImage {
                src
                alt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            videoSeries {
              id
              videos {
                items {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  videoSeriesId
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
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
                  thumbnailDescription
                  move
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogs {
                items {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogSeriesId
                  blogSeriesIndex
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogPosts {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              seriesType
              title
              description
              thumbnailDescription
              image
              squareImage {
                src
                alt
                __typename
              }
              bannerImage {
                src
                alt
                __typename
              }
              babyHeroImage {
                src
                alt
                __typename
              }
              startDate
              endDate
              notes {
                items {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        series {
          id
          videos {
            items {
              id
              createdBy
              createdDate
              speakers {
                items {
                  id
                  speakerVideosSpeakerId
                  speakerVideosVideoId
                  videoPublishedDate
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              episodeTitle
              originalEpisodeTitle
              episodeNumber
              seriesTitle
              videoSeriesId
              series {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              customPlaylistIDs
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              publishedDate
              recordedDate
              description
              viewCount
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
                  channelId
                  title
                  description
                  channelTitle
                  __typename
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
                  hasCustomThumbnail
                  __typename
                }
                status {
                  uploadStatus
                  privacyStatus
                  license
                  embeddable
                  publicStatsViewable
                  __typename
                }
                __typename
              }
              videoTypes
              notesURL
              videoURL
              audioURL
              thumbnailDescription
              move
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          blogs {
            items {
              id
              author
              createdBy
              createdDate
              publishedDate
              expirationDate
              videoSeries {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              series {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              blogSeriesId
              blogSeriesIndex
              blogSeries {
                items {
                  id
                  blogSeriesID
                  blogPostID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogStatus
              description
              thumbnailDescription
              content
              blogTitle
              topics
              tags
              hiddenMainIndex
              squareImage {
                src
                alt
                __typename
              }
              bannerImage {
                src
                alt
                __typename
              }
              babyHeroImage {
                src
                alt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          blogPosts {
            items {
              id
              videoSeriesId
              blogId
              blog {
                id
                author
                createdBy
                createdDate
                publishedDate
                expirationDate
                videoSeries {
                  nextToken
                  __typename
                }
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  __typename
                }
                blogSeriesId
                blogSeriesIndex
                blogSeries {
                  nextToken
                  __typename
                }
                blogStatus
                description
                thumbnailDescription
                content
                blogTitle
                topics
                tags
                hiddenMainIndex
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              videoSeries {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          seriesType
          title
          description
          thumbnailDescription
          image
          squareImage {
            src
            alt
            __typename
          }
          bannerImage {
            src
            alt
            __typename
          }
          babyHeroImage {
            src
            alt
            __typename
          }
          startDate
          endDate
          notes {
            items {
              id
              title
              content
              questions
              jsonContent
              jsonQuestions
              episodeDescription
              episodeNumber
              seriesId
              series {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              pdf
              topics
              tags
              verses {
                items {
                  id
                  key
                  offset
                  length
                  dataType
                  content
                  youVersionUri
                  noteId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        blogSeriesId
        blogSeriesIndex
        blogSeries {
          items {
            id
            blogSeriesID
            blogPostID
            blogSeries {
              id
              blogs {
                items {
                  id
                  blogSeriesID
                  blogPostID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              seriesType
              title
              description
              thumbnailDescription
              image
              startDate
              endDate
              createdAt
              updatedAt
              __typename
            }
            blogPost {
              id
              author
              createdBy
              createdDate
              publishedDate
              expirationDate
              videoSeries {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              series {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              blogSeriesId
              blogSeriesIndex
              blogSeries {
                items {
                  id
                  blogSeriesID
                  blogPostID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogStatus
              description
              thumbnailDescription
              content
              blogTitle
              topics
              tags
              hiddenMainIndex
              squareImage {
                src
                alt
                __typename
              }
              bannerImage {
                src
                alt
                __typename
              }
              babyHeroImage {
                src
                alt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        blogStatus
        description
        thumbnailDescription
        content
        blogTitle
        topics
        tags
        hiddenMainIndex
        squareImage {
          src
          alt
          __typename
        }
        bannerImage {
          src
          alt
          __typename
        }
        babyHeroImage {
          src
          alt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getBlogByBlogStatus = /* GraphQL */ `
  query GetBlogByBlogStatus(
    $blogStatus: String!
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
        videoSeries {
          items {
            id
            videoSeriesId
            blogId
            blog {
              id
              author
              createdBy
              createdDate
              publishedDate
              expirationDate
              videoSeries {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              series {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              blogSeriesId
              blogSeriesIndex
              blogSeries {
                items {
                  id
                  blogSeriesID
                  blogPostID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogStatus
              description
              thumbnailDescription
              content
              blogTitle
              topics
              tags
              hiddenMainIndex
              squareImage {
                src
                alt
                __typename
              }
              bannerImage {
                src
                alt
                __typename
              }
              babyHeroImage {
                src
                alt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            videoSeries {
              id
              videos {
                items {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  videoSeriesId
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
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
                  thumbnailDescription
                  move
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogs {
                items {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogSeriesId
                  blogSeriesIndex
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogPosts {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              seriesType
              title
              description
              thumbnailDescription
              image
              squareImage {
                src
                alt
                __typename
              }
              bannerImage {
                src
                alt
                __typename
              }
              babyHeroImage {
                src
                alt
                __typename
              }
              startDate
              endDate
              notes {
                items {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        series {
          id
          videos {
            items {
              id
              createdBy
              createdDate
              speakers {
                items {
                  id
                  speakerVideosSpeakerId
                  speakerVideosVideoId
                  videoPublishedDate
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              episodeTitle
              originalEpisodeTitle
              episodeNumber
              seriesTitle
              videoSeriesId
              series {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              customPlaylistIDs
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              publishedDate
              recordedDate
              description
              viewCount
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
                  channelId
                  title
                  description
                  channelTitle
                  __typename
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
                  hasCustomThumbnail
                  __typename
                }
                status {
                  uploadStatus
                  privacyStatus
                  license
                  embeddable
                  publicStatsViewable
                  __typename
                }
                __typename
              }
              videoTypes
              notesURL
              videoURL
              audioURL
              thumbnailDescription
              move
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          blogs {
            items {
              id
              author
              createdBy
              createdDate
              publishedDate
              expirationDate
              videoSeries {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              series {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              blogSeriesId
              blogSeriesIndex
              blogSeries {
                items {
                  id
                  blogSeriesID
                  blogPostID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogStatus
              description
              thumbnailDescription
              content
              blogTitle
              topics
              tags
              hiddenMainIndex
              squareImage {
                src
                alt
                __typename
              }
              bannerImage {
                src
                alt
                __typename
              }
              babyHeroImage {
                src
                alt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          blogPosts {
            items {
              id
              videoSeriesId
              blogId
              blog {
                id
                author
                createdBy
                createdDate
                publishedDate
                expirationDate
                videoSeries {
                  nextToken
                  __typename
                }
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  __typename
                }
                blogSeriesId
                blogSeriesIndex
                blogSeries {
                  nextToken
                  __typename
                }
                blogStatus
                description
                thumbnailDescription
                content
                blogTitle
                topics
                tags
                hiddenMainIndex
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              videoSeries {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          seriesType
          title
          description
          thumbnailDescription
          image
          squareImage {
            src
            alt
            __typename
          }
          bannerImage {
            src
            alt
            __typename
          }
          babyHeroImage {
            src
            alt
            __typename
          }
          startDate
          endDate
          notes {
            items {
              id
              title
              content
              questions
              jsonContent
              jsonQuestions
              episodeDescription
              episodeNumber
              seriesId
              series {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              pdf
              topics
              tags
              verses {
                items {
                  id
                  key
                  offset
                  length
                  dataType
                  content
                  youVersionUri
                  noteId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        blogSeriesId
        blogSeriesIndex
        blogSeries {
          items {
            id
            blogSeriesID
            blogPostID
            blogSeries {
              id
              blogs {
                items {
                  id
                  blogSeriesID
                  blogPostID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              seriesType
              title
              description
              thumbnailDescription
              image
              startDate
              endDate
              createdAt
              updatedAt
              __typename
            }
            blogPost {
              id
              author
              createdBy
              createdDate
              publishedDate
              expirationDate
              videoSeries {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              series {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              blogSeriesId
              blogSeriesIndex
              blogSeries {
                items {
                  id
                  blogSeriesID
                  blogPostID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogStatus
              description
              thumbnailDescription
              content
              blogTitle
              topics
              tags
              hiddenMainIndex
              squareImage {
                src
                alt
                __typename
              }
              bannerImage {
                src
                alt
                __typename
              }
              babyHeroImage {
                src
                alt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        blogStatus
        description
        thumbnailDescription
        content
        blogTitle
        topics
        tags
        hiddenMainIndex
        squareImage {
          src
          alt
          __typename
        }
        bannerImage {
          src
          alt
          __typename
        }
        babyHeroImage {
          src
          alt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const searchBlogs = /* GraphQL */ `
  query SearchBlogs(
    $filter: SearchableBlogFilterInput
    $sort: [SearchableBlogSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableBlogAggregationInput]
  ) {
    searchBlogs(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        author
        createdBy
        createdDate
        publishedDate
        expirationDate
        videoSeries {
          items {
            id
            videoSeriesId
            blogId
            blog {
              id
              author
              createdBy
              createdDate
              publishedDate
              expirationDate
              videoSeries {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              series {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              blogSeriesId
              blogSeriesIndex
              blogSeries {
                items {
                  id
                  blogSeriesID
                  blogPostID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogStatus
              description
              thumbnailDescription
              content
              blogTitle
              topics
              tags
              hiddenMainIndex
              squareImage {
                src
                alt
                __typename
              }
              bannerImage {
                src
                alt
                __typename
              }
              babyHeroImage {
                src
                alt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            videoSeries {
              id
              videos {
                items {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  videoSeriesId
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
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
                  thumbnailDescription
                  move
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogs {
                items {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogSeriesId
                  blogSeriesIndex
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogPosts {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              seriesType
              title
              description
              thumbnailDescription
              image
              squareImage {
                src
                alt
                __typename
              }
              bannerImage {
                src
                alt
                __typename
              }
              babyHeroImage {
                src
                alt
                __typename
              }
              startDate
              endDate
              notes {
                items {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        series {
          id
          videos {
            items {
              id
              createdBy
              createdDate
              speakers {
                items {
                  id
                  speakerVideosSpeakerId
                  speakerVideosVideoId
                  videoPublishedDate
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              episodeTitle
              originalEpisodeTitle
              episodeNumber
              seriesTitle
              videoSeriesId
              series {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              customPlaylistIDs
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              publishedDate
              recordedDate
              description
              viewCount
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
                  channelId
                  title
                  description
                  channelTitle
                  __typename
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
                  hasCustomThumbnail
                  __typename
                }
                status {
                  uploadStatus
                  privacyStatus
                  license
                  embeddable
                  publicStatsViewable
                  __typename
                }
                __typename
              }
              videoTypes
              notesURL
              videoURL
              audioURL
              thumbnailDescription
              move
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          blogs {
            items {
              id
              author
              createdBy
              createdDate
              publishedDate
              expirationDate
              videoSeries {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              series {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              blogSeriesId
              blogSeriesIndex
              blogSeries {
                items {
                  id
                  blogSeriesID
                  blogPostID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogStatus
              description
              thumbnailDescription
              content
              blogTitle
              topics
              tags
              hiddenMainIndex
              squareImage {
                src
                alt
                __typename
              }
              bannerImage {
                src
                alt
                __typename
              }
              babyHeroImage {
                src
                alt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          blogPosts {
            items {
              id
              videoSeriesId
              blogId
              blog {
                id
                author
                createdBy
                createdDate
                publishedDate
                expirationDate
                videoSeries {
                  nextToken
                  __typename
                }
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  __typename
                }
                blogSeriesId
                blogSeriesIndex
                blogSeries {
                  nextToken
                  __typename
                }
                blogStatus
                description
                thumbnailDescription
                content
                blogTitle
                topics
                tags
                hiddenMainIndex
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              videoSeries {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          seriesType
          title
          description
          thumbnailDescription
          image
          squareImage {
            src
            alt
            __typename
          }
          bannerImage {
            src
            alt
            __typename
          }
          babyHeroImage {
            src
            alt
            __typename
          }
          startDate
          endDate
          notes {
            items {
              id
              title
              content
              questions
              jsonContent
              jsonQuestions
              episodeDescription
              episodeNumber
              seriesId
              series {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              pdf
              topics
              tags
              verses {
                items {
                  id
                  key
                  offset
                  length
                  dataType
                  content
                  youVersionUri
                  noteId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        blogSeriesId
        blogSeriesIndex
        blogSeries {
          items {
            id
            blogSeriesID
            blogPostID
            blogSeries {
              id
              blogs {
                items {
                  id
                  blogSeriesID
                  blogPostID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              seriesType
              title
              description
              thumbnailDescription
              image
              startDate
              endDate
              createdAt
              updatedAt
              __typename
            }
            blogPost {
              id
              author
              createdBy
              createdDate
              publishedDate
              expirationDate
              videoSeries {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              series {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              blogSeriesId
              blogSeriesIndex
              blogSeries {
                items {
                  id
                  blogSeriesID
                  blogPostID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogStatus
              description
              thumbnailDescription
              content
              blogTitle
              topics
              tags
              hiddenMainIndex
              squareImage {
                src
                alt
                __typename
              }
              bannerImage {
                src
                alt
                __typename
              }
              babyHeroImage {
                src
                alt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        blogStatus
        description
        thumbnailDescription
        content
        blogTitle
        topics
        tags
        hiddenMainIndex
        squareImage {
          src
          alt
          __typename
        }
        bannerImage {
          src
          alt
          __typename
        }
        babyHeroImage {
          src
          alt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
              __typename
            }
          }
        }
        __typename
      }
      __typename
    }
  }
`;
export const getInstagram = /* GraphQL */ `
  query GetInstagram($id: ID!) {
    getInstagram(id: $id) {
      id
      locationId
      thumbnails {
        src
        config_width
        config_height
        __typename
      }
      altText
      timestamp
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listInstagrams = /* GraphQL */ `
  query ListInstagrams(
    $filter: ModelInstagramFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInstagrams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        locationId
        thumbnails {
          src
          config_width
          config_height
          __typename
        }
        altText
        timestamp
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getInstagramByLocation = /* GraphQL */ `
  query GetInstagramByLocation(
    $locationId: String!
    $timestamp: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelInstagramFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getInstagramByLocation(
      locationId: $locationId
      timestamp: $timestamp
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        locationId
        thumbnails {
          src
          config_width
          config_height
          __typename
        }
        altText
        timestamp
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getVerse = /* GraphQL */ `
  query GetVerse($id: ID!) {
    getVerse(id: $id) {
      id
      key
      offset
      length
      dataType
      content
      youVersionUri
      noteId
      note {
        id
        title
        content
        questions
        jsonContent
        jsonQuestions
        episodeDescription
        episodeNumber
        seriesId
        series {
          id
          videos {
            items {
              id
              createdBy
              createdDate
              speakers {
                items {
                  id
                  speakerVideosSpeakerId
                  speakerVideosVideoId
                  videoPublishedDate
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              episodeTitle
              originalEpisodeTitle
              episodeNumber
              seriesTitle
              videoSeriesId
              series {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              customPlaylistIDs
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              publishedDate
              recordedDate
              description
              viewCount
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
                  channelId
                  title
                  description
                  channelTitle
                  __typename
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
                  hasCustomThumbnail
                  __typename
                }
                status {
                  uploadStatus
                  privacyStatus
                  license
                  embeddable
                  publicStatsViewable
                  __typename
                }
                __typename
              }
              videoTypes
              notesURL
              videoURL
              audioURL
              thumbnailDescription
              move
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          blogs {
            items {
              id
              author
              createdBy
              createdDate
              publishedDate
              expirationDate
              videoSeries {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              series {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              blogSeriesId
              blogSeriesIndex
              blogSeries {
                items {
                  id
                  blogSeriesID
                  blogPostID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogStatus
              description
              thumbnailDescription
              content
              blogTitle
              topics
              tags
              hiddenMainIndex
              squareImage {
                src
                alt
                __typename
              }
              bannerImage {
                src
                alt
                __typename
              }
              babyHeroImage {
                src
                alt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          blogPosts {
            items {
              id
              videoSeriesId
              blogId
              blog {
                id
                author
                createdBy
                createdDate
                publishedDate
                expirationDate
                videoSeries {
                  nextToken
                  __typename
                }
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  __typename
                }
                blogSeriesId
                blogSeriesIndex
                blogSeries {
                  nextToken
                  __typename
                }
                blogStatus
                description
                thumbnailDescription
                content
                blogTitle
                topics
                tags
                hiddenMainIndex
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              videoSeries {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          seriesType
          title
          description
          thumbnailDescription
          image
          squareImage {
            src
            alt
            __typename
          }
          bannerImage {
            src
            alt
            __typename
          }
          babyHeroImage {
            src
            alt
            __typename
          }
          startDate
          endDate
          notes {
            items {
              id
              title
              content
              questions
              jsonContent
              jsonQuestions
              episodeDescription
              episodeNumber
              seriesId
              series {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              pdf
              topics
              tags
              verses {
                items {
                  id
                  key
                  offset
                  length
                  dataType
                  content
                  youVersionUri
                  noteId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        pdf
        topics
        tags
        verses {
          items {
            id
            key
            offset
            length
            dataType
            content
            youVersionUri
            noteId
            note {
              id
              title
              content
              questions
              jsonContent
              jsonQuestions
              episodeDescription
              episodeNumber
              seriesId
              series {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              pdf
              topics
              tags
              verses {
                items {
                  id
                  key
                  offset
                  length
                  dataType
                  content
                  youVersionUri
                  noteId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listVerses = /* GraphQL */ `
  query ListVerses(
    $filter: ModelVerseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVerses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        key
        offset
        length
        dataType
        content
        youVersionUri
        noteId
        note {
          id
          title
          content
          questions
          jsonContent
          jsonQuestions
          episodeDescription
          episodeNumber
          seriesId
          series {
            id
            videos {
              items {
                id
                createdBy
                createdDate
                speakers {
                  nextToken
                  __typename
                }
                episodeTitle
                originalEpisodeTitle
                episodeNumber
                seriesTitle
                videoSeriesId
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  __typename
                }
                customPlaylistIDs
                customPlaylists {
                  nextToken
                  __typename
                }
                publishedDate
                recordedDate
                description
                viewCount
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
                  __typename
                }
                videoTypes
                notesURL
                videoURL
                audioURL
                thumbnailDescription
                move
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            blogs {
              items {
                id
                author
                createdBy
                createdDate
                publishedDate
                expirationDate
                videoSeries {
                  nextToken
                  __typename
                }
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  __typename
                }
                blogSeriesId
                blogSeriesIndex
                blogSeries {
                  nextToken
                  __typename
                }
                blogStatus
                description
                thumbnailDescription
                content
                blogTitle
                topics
                tags
                hiddenMainIndex
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            blogPosts {
              items {
                id
                videoSeriesId
                blogId
                blog {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogSeriesId
                  blogSeriesIndex
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                  __typename
                }
                videoSeries {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            seriesType
            title
            description
            thumbnailDescription
            image
            squareImage {
              src
              alt
              __typename
            }
            bannerImage {
              src
              alt
              __typename
            }
            babyHeroImage {
              src
              alt
              __typename
            }
            startDate
            endDate
            notes {
              items {
                id
                title
                content
                questions
                jsonContent
                jsonQuestions
                episodeDescription
                episodeNumber
                seriesId
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  __typename
                }
                pdf
                topics
                tags
                verses {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          pdf
          topics
          tags
          verses {
            items {
              id
              key
              offset
              length
              dataType
              content
              youVersionUri
              noteId
              note {
                id
                title
                content
                questions
                jsonContent
                jsonQuestions
                episodeDescription
                episodeNumber
                seriesId
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  __typename
                }
                pdf
                topics
                tags
                verses {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getNotes = /* GraphQL */ `
  query GetNotes($id: ID!) {
    getNotes(id: $id) {
      id
      title
      content
      questions
      jsonContent
      jsonQuestions
      episodeDescription
      episodeNumber
      seriesId
      series {
        id
        videos {
          items {
            id
            createdBy
            createdDate
            speakers {
              items {
                id
                speakerVideosSpeakerId
                video {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  videoSeriesId
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
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
                  thumbnailDescription
                  move
                  createdAt
                  updatedAt
                  __typename
                }
                speakerVideosVideoId
                speaker {
                  id
                  name
                  image
                  hidden
                  createdAt
                  updatedAt
                  __typename
                }
                videoPublishedDate
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            episodeTitle
            originalEpisodeTitle
            episodeNumber
            seriesTitle
            videoSeriesId
            series {
              id
              videos {
                items {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  videoSeriesId
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
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
                  thumbnailDescription
                  move
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogs {
                items {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogSeriesId
                  blogSeriesIndex
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogPosts {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              seriesType
              title
              description
              thumbnailDescription
              image
              squareImage {
                src
                alt
                __typename
              }
              bannerImage {
                src
                alt
                __typename
              }
              babyHeroImage {
                src
                alt
                __typename
              }
              startDate
              endDate
              notes {
                items {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            customPlaylistIDs
            customPlaylists {
              items {
                id
                videoID
                customPlaylistID
                customPlaylist {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  createdAt
                  updatedAt
                  __typename
                }
                video {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  videoSeriesId
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
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
                  thumbnailDescription
                  move
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            publishedDate
            recordedDate
            description
            viewCount
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
                channelId
                title
                description
                thumbnails {
                  __typename
                }
                channelTitle
                localized {
                  title
                  description
                  __typename
                }
                __typename
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
                contentRating {
                  acbRating
                  agcomRating
                  anatelRating
                  bbfcRating
                  bfvcRating
                  bmukkRating
                  catvRating
                  catvfrRating
                  cbfcRating
                  cccRating
                  cceRating
                  chfilmRating
                  chvrsRating
                  cicfRating
                  cnaRating
                  cncRating
                  csaRating
                  cscfRating
                  czfilmRating
                  djctqRating
                  djctqRatingReasons
                  ecbmctRating
                  eefilmRating
                  egfilmRating
                  eirinRating
                  fcbmRating
                  fcoRating
                  fmocRating
                  fpbRating
                  fpbRatingReasons
                  fskRating
                  grfilmRating
                  icaaRating
                  ifcoRating
                  ilfilmRating
                  incaaRating
                  kfcbRating
                  kijkwijzerRating
                  kmrbRating
                  lsfRating
                  mccaaRating
                  mccypRating
                  mcstRating
                  mdaRating
                  medietilsynetRating
                  mekuRating
                  mibacRating
                  mocRating
                  moctwRating
                  mpaaRating
                  mpaatRating
                  mtrcbRating
                  nbcRating
                  nbcplRating
                  nfrcRating
                  nfvcbRating
                  nkclvRating
                  oflcRating
                  pefilmRating
                  rcnofRating
                  resorteviolenciaRating
                  rtcRating
                  rteRating
                  russiaRating
                  skfilmRating
                  smaisRating
                  smsaRating
                  tvpgRating
                  ytRating
                  __typename
                }
                regionRestriction {
                  allowed
                  blocked
                  __typename
                }
                hasCustomThumbnail
                __typename
              }
              status {
                uploadStatus
                privacyStatus
                license
                embeddable
                publicStatsViewable
                __typename
              }
              __typename
            }
            videoTypes
            notesURL
            videoURL
            audioURL
            thumbnailDescription
            move
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        blogs {
          items {
            id
            author
            createdBy
            createdDate
            publishedDate
            expirationDate
            videoSeries {
              items {
                id
                videoSeriesId
                blogId
                blog {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogSeriesId
                  blogSeriesIndex
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                  __typename
                }
                videoSeries {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            series {
              id
              videos {
                items {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  videoSeriesId
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
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
                  thumbnailDescription
                  move
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogs {
                items {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogSeriesId
                  blogSeriesIndex
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogPosts {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              seriesType
              title
              description
              thumbnailDescription
              image
              squareImage {
                src
                alt
                __typename
              }
              bannerImage {
                src
                alt
                __typename
              }
              babyHeroImage {
                src
                alt
                __typename
              }
              startDate
              endDate
              notes {
                items {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            blogSeriesId
            blogSeriesIndex
            blogSeries {
              items {
                id
                blogSeriesID
                blogPostID
                blogSeries {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  __typename
                }
                blogPost {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogSeriesId
                  blogSeriesIndex
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            blogStatus
            description
            thumbnailDescription
            content
            blogTitle
            topics
            tags
            hiddenMainIndex
            squareImage {
              src
              alt
              __typename
            }
            bannerImage {
              src
              alt
              __typename
            }
            babyHeroImage {
              src
              alt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        blogPosts {
          items {
            id
            videoSeriesId
            blogId
            blog {
              id
              author
              createdBy
              createdDate
              publishedDate
              expirationDate
              videoSeries {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              series {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              blogSeriesId
              blogSeriesIndex
              blogSeries {
                items {
                  id
                  blogSeriesID
                  blogPostID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogStatus
              description
              thumbnailDescription
              content
              blogTitle
              topics
              tags
              hiddenMainIndex
              squareImage {
                src
                alt
                __typename
              }
              bannerImage {
                src
                alt
                __typename
              }
              babyHeroImage {
                src
                alt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            videoSeries {
              id
              videos {
                items {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  videoSeriesId
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
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
                  thumbnailDescription
                  move
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogs {
                items {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogSeriesId
                  blogSeriesIndex
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogPosts {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              seriesType
              title
              description
              thumbnailDescription
              image
              squareImage {
                src
                alt
                __typename
              }
              bannerImage {
                src
                alt
                __typename
              }
              babyHeroImage {
                src
                alt
                __typename
              }
              startDate
              endDate
              notes {
                items {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        seriesType
        title
        description
        thumbnailDescription
        image
        squareImage {
          src
          alt
          __typename
        }
        bannerImage {
          src
          alt
          __typename
        }
        babyHeroImage {
          src
          alt
          __typename
        }
        startDate
        endDate
        notes {
          items {
            id
            title
            content
            questions
            jsonContent
            jsonQuestions
            episodeDescription
            episodeNumber
            seriesId
            series {
              id
              videos {
                items {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  videoSeriesId
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
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
                  thumbnailDescription
                  move
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogs {
                items {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogSeriesId
                  blogSeriesIndex
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogPosts {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              seriesType
              title
              description
              thumbnailDescription
              image
              squareImage {
                src
                alt
                __typename
              }
              bannerImage {
                src
                alt
                __typename
              }
              babyHeroImage {
                src
                alt
                __typename
              }
              startDate
              endDate
              notes {
                items {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            pdf
            topics
            tags
            verses {
              items {
                id
                key
                offset
                length
                dataType
                content
                youVersionUri
                noteId
                note {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      pdf
      topics
      tags
      verses {
        items {
          id
          key
          offset
          length
          dataType
          content
          youVersionUri
          noteId
          note {
            id
            title
            content
            questions
            jsonContent
            jsonQuestions
            episodeDescription
            episodeNumber
            seriesId
            series {
              id
              videos {
                items {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  videoSeriesId
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
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
                  thumbnailDescription
                  move
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogs {
                items {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogSeriesId
                  blogSeriesIndex
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogPosts {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              seriesType
              title
              description
              thumbnailDescription
              image
              squareImage {
                src
                alt
                __typename
              }
              bannerImage {
                src
                alt
                __typename
              }
              babyHeroImage {
                src
                alt
                __typename
              }
              startDate
              endDate
              notes {
                items {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            pdf
            topics
            tags
            verses {
              items {
                id
                key
                offset
                length
                dataType
                content
                youVersionUri
                noteId
                note {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNotesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        content
        questions
        jsonContent
        jsonQuestions
        episodeDescription
        episodeNumber
        seriesId
        series {
          id
          videos {
            items {
              id
              createdBy
              createdDate
              speakers {
                items {
                  id
                  speakerVideosSpeakerId
                  speakerVideosVideoId
                  videoPublishedDate
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              episodeTitle
              originalEpisodeTitle
              episodeNumber
              seriesTitle
              videoSeriesId
              series {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              customPlaylistIDs
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              publishedDate
              recordedDate
              description
              viewCount
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
                  channelId
                  title
                  description
                  channelTitle
                  __typename
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
                  hasCustomThumbnail
                  __typename
                }
                status {
                  uploadStatus
                  privacyStatus
                  license
                  embeddable
                  publicStatsViewable
                  __typename
                }
                __typename
              }
              videoTypes
              notesURL
              videoURL
              audioURL
              thumbnailDescription
              move
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          blogs {
            items {
              id
              author
              createdBy
              createdDate
              publishedDate
              expirationDate
              videoSeries {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              series {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              blogSeriesId
              blogSeriesIndex
              blogSeries {
                items {
                  id
                  blogSeriesID
                  blogPostID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogStatus
              description
              thumbnailDescription
              content
              blogTitle
              topics
              tags
              hiddenMainIndex
              squareImage {
                src
                alt
                __typename
              }
              bannerImage {
                src
                alt
                __typename
              }
              babyHeroImage {
                src
                alt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          blogPosts {
            items {
              id
              videoSeriesId
              blogId
              blog {
                id
                author
                createdBy
                createdDate
                publishedDate
                expirationDate
                videoSeries {
                  nextToken
                  __typename
                }
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  __typename
                }
                blogSeriesId
                blogSeriesIndex
                blogSeries {
                  nextToken
                  __typename
                }
                blogStatus
                description
                thumbnailDescription
                content
                blogTitle
                topics
                tags
                hiddenMainIndex
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              videoSeries {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          seriesType
          title
          description
          thumbnailDescription
          image
          squareImage {
            src
            alt
            __typename
          }
          bannerImage {
            src
            alt
            __typename
          }
          babyHeroImage {
            src
            alt
            __typename
          }
          startDate
          endDate
          notes {
            items {
              id
              title
              content
              questions
              jsonContent
              jsonQuestions
              episodeDescription
              episodeNumber
              seriesId
              series {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              pdf
              topics
              tags
              verses {
                items {
                  id
                  key
                  offset
                  length
                  dataType
                  content
                  youVersionUri
                  noteId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        pdf
        topics
        tags
        verses {
          items {
            id
            key
            offset
            length
            dataType
            content
            youVersionUri
            noteId
            note {
              id
              title
              content
              questions
              jsonContent
              jsonQuestions
              episodeDescription
              episodeNumber
              seriesId
              series {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              pdf
              topics
              tags
              verses {
                items {
                  id
                  key
                  offset
                  length
                  dataType
                  content
                  youVersionUri
                  noteId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const searchNotes = /* GraphQL */ `
  query SearchNotes(
    $filter: SearchableNotesFilterInput
    $sort: [SearchableNotesSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableNotesAggregationInput]
  ) {
    searchNotes(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        title
        content
        questions
        jsonContent
        jsonQuestions
        episodeDescription
        episodeNumber
        seriesId
        series {
          id
          videos {
            items {
              id
              createdBy
              createdDate
              speakers {
                items {
                  id
                  speakerVideosSpeakerId
                  speakerVideosVideoId
                  videoPublishedDate
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              episodeTitle
              originalEpisodeTitle
              episodeNumber
              seriesTitle
              videoSeriesId
              series {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              customPlaylistIDs
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              publishedDate
              recordedDate
              description
              viewCount
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
                  channelId
                  title
                  description
                  channelTitle
                  __typename
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
                  hasCustomThumbnail
                  __typename
                }
                status {
                  uploadStatus
                  privacyStatus
                  license
                  embeddable
                  publicStatsViewable
                  __typename
                }
                __typename
              }
              videoTypes
              notesURL
              videoURL
              audioURL
              thumbnailDescription
              move
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          blogs {
            items {
              id
              author
              createdBy
              createdDate
              publishedDate
              expirationDate
              videoSeries {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              series {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              blogSeriesId
              blogSeriesIndex
              blogSeries {
                items {
                  id
                  blogSeriesID
                  blogPostID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              blogStatus
              description
              thumbnailDescription
              content
              blogTitle
              topics
              tags
              hiddenMainIndex
              squareImage {
                src
                alt
                __typename
              }
              bannerImage {
                src
                alt
                __typename
              }
              babyHeroImage {
                src
                alt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          blogPosts {
            items {
              id
              videoSeriesId
              blogId
              blog {
                id
                author
                createdBy
                createdDate
                publishedDate
                expirationDate
                videoSeries {
                  nextToken
                  __typename
                }
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                  __typename
                }
                blogSeriesId
                blogSeriesIndex
                blogSeries {
                  nextToken
                  __typename
                }
                blogStatus
                description
                thumbnailDescription
                content
                blogTitle
                topics
                tags
                hiddenMainIndex
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              videoSeries {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          seriesType
          title
          description
          thumbnailDescription
          image
          squareImage {
            src
            alt
            __typename
          }
          bannerImage {
            src
            alt
            __typename
          }
          babyHeroImage {
            src
            alt
            __typename
          }
          startDate
          endDate
          notes {
            items {
              id
              title
              content
              questions
              jsonContent
              jsonQuestions
              episodeDescription
              episodeNumber
              seriesId
              series {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              pdf
              topics
              tags
              verses {
                items {
                  id
                  key
                  offset
                  length
                  dataType
                  content
                  youVersionUri
                  noteId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        pdf
        topics
        tags
        verses {
          items {
            id
            key
            offset
            length
            dataType
            content
            youVersionUri
            noteId
            note {
              id
              title
              content
              questions
              jsonContent
              jsonQuestions
              episodeDescription
              episodeNumber
              seriesId
              series {
                id
                videos {
                  nextToken
                  __typename
                }
                blogs {
                  nextToken
                  __typename
                }
                blogPosts {
                  nextToken
                  __typename
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                  __typename
                }
                bannerImage {
                  src
                  alt
                  __typename
                }
                babyHeroImage {
                  src
                  alt
                  __typename
                }
                startDate
                endDate
                notes {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              pdf
              topics
              tags
              verses {
                items {
                  id
                  key
                  offset
                  length
                  dataType
                  content
                  youVersionUri
                  noteId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
              __typename
            }
          }
        }
        __typename
      }
      __typename
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      comment
      tags
      noteType
      commentType
      noteId
      textSnippet
      imageUri
      key
      date
      time
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        comment
        tags
        noteType
        commentType
        noteId
        textSnippet
        imageUri
        key
        date
        time
        owner
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCommentsByOwner = /* GraphQL */ `
  query GetCommentsByOwner(
    $owner: String!
    $noteId: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getCommentsByOwner(
      owner: $owner
      noteId: $noteId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        comment
        tags
        noteType
        commentType
        noteId
        textSnippet
        imageUri
        key
        date
        time
        owner
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const searchComments = /* GraphQL */ `
  query SearchComments(
    $filter: SearchableCommentFilterInput
    $sort: [SearchableCommentSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableCommentAggregationInput]
  ) {
    searchComments(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        comment
        tags
        noteType
        commentType
        noteId
        textSnippet
        imageUri
        key
        date
        time
        owner
        createdAt
        updatedAt
        __typename
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
              __typename
            }
          }
        }
        __typename
      }
      __typename
    }
  }
`;
export const getWebPage = /* GraphQL */ `
  query GetWebPage($id: ID!) {
    getWebPage(id: $id) {
      id
      page {
        name
        title
        keywords
        description
        pageConfig {
          movingMenu
          showLogoText
          logoColor
          showSearch
          showFooter
          showMenu
          __typename
        }
        content {
          type
          style
          image1 {
            src
            alt
            __typename
          }
          header1
          header2
          text1
          text2
          link1Text
          link1Action
          link2Text
          link2Action
          link3Text
          link3Action
          button1Text
          button1Action
          list {
            title
            text
            imageSrc
            imageAlt
            navigateTo
            __typename
          }
          showLocationSearch
          __typename
        }
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listWebPages = /* GraphQL */ `
  query ListWebPages(
    $filter: ModelWebPageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWebPages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        page {
          name
          title
          keywords
          description
          pageConfig {
            movingMenu
            showLogoText
            logoColor
            showSearch
            showFooter
            showMenu
            __typename
          }
          content {
            type
            style
            image1 {
              src
              alt
              __typename
            }
            header1
            header2
            text1
            text2
            link1Text
            link1Action
            link2Text
            link2Action
            link3Text
            link3Action
            button1Text
            button1Action
            list {
              title
              text
              imageSrc
              imageAlt
              navigateTo
              __typename
            }
            showLocationSearch
            __typename
          }
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const searchWebPages = /* GraphQL */ `
  query SearchWebPages(
    $filter: SearchableWebPageFilterInput
    $sort: [SearchableWebPageSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableWebPageAggregationInput]
  ) {
    searchWebPages(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        page {
          name
          title
          keywords
          description
          pageConfig {
            movingMenu
            showLogoText
            logoColor
            showSearch
            showFooter
            showMenu
            __typename
          }
          content {
            type
            style
            image1 {
              src
              alt
              __typename
            }
            header1
            header2
            text1
            text2
            link1Text
            link1Action
            link2Text
            link2Action
            link3Text
            link3Action
            button1Text
            button1Action
            list {
              title
              text
              imageSrc
              imageAlt
              navigateTo
              __typename
            }
            showLocationSearch
            __typename
          }
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
              __typename
            }
          }
        }
        __typename
      }
      __typename
    }
  }
`;
export const getTMHUser = /* GraphQL */ `
  query GetTMHUser($id: ID!) {
    getTMHUser(id: $id) {
      id
      given_name
      family_name
      email
      phone
      owner
      stripeCustomerID
      stripeSubscriptionID
      billingAddress {
        city
        country
        line1
        line2
        postal_code
        state
        __typename
      }
      profileImage {
        userId
        filenameSmall
        filenameMedium
        filenameLarge
        filenameUpload
        __typename
      }
      joined
      f1PersonId
      f1HouseholdId
      total
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listTMHUsers = /* GraphQL */ `
  query ListTMHUsers(
    $filter: ModelTMHUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTMHUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        given_name
        family_name
        email
        phone
        owner
        stripeCustomerID
        stripeSubscriptionID
        billingAddress {
          city
          country
          line1
          line2
          postal_code
          state
          __typename
        }
        profileImage {
          userId
          filenameSmall
          filenameMedium
          filenameLarge
          filenameUpload
          __typename
        }
        joined
        f1PersonId
        f1HouseholdId
        total
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTMHSite = /* GraphQL */ `
  query GetTMHSite($id: ID!) {
    getTMHSite(id: $id) {
      id
      tmhPeople {
        items {
          id
          tMHSiteID
          tMHPersonID
          tMHSite {
            id
            tmhPeople {
              items {
                id
                tMHSiteID
                tMHPersonID
                tMHSite {
                  id
                  createdAt
                  updatedAt
                  __typename
                }
                tMHPerson {
                  id
                  email
                  firstName
                  lastName
                  image
                  phone
                  extension
                  sites
                  position
                  isTeacher
                  isStaff
                  isCoordinator
                  isOverseer
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          tMHPerson {
            id
            email
            firstName
            lastName
            image
            phone
            extension
            sites
            tmhSites {
              items {
                id
                tMHSiteID
                tMHPersonID
                tMHSite {
                  id
                  createdAt
                  updatedAt
                  __typename
                }
                tMHPerson {
                  id
                  email
                  firstName
                  lastName
                  image
                  phone
                  extension
                  sites
                  position
                  isTeacher
                  isStaff
                  isCoordinator
                  isOverseer
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            position
            isTeacher
            isStaff
            isCoordinator
            isOverseer
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listTMHSites = /* GraphQL */ `
  query ListTMHSites(
    $filter: ModelTMHSiteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTMHSites(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        tmhPeople {
          items {
            id
            tMHSiteID
            tMHPersonID
            tMHSite {
              id
              tmhPeople {
                items {
                  id
                  tMHSiteID
                  tMHPersonID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            tMHPerson {
              id
              email
              firstName
              lastName
              image
              phone
              extension
              sites
              tmhSites {
                items {
                  id
                  tMHSiteID
                  tMHPersonID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              position
              isTeacher
              isStaff
              isCoordinator
              isOverseer
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTMHPerson = /* GraphQL */ `
  query GetTMHPerson($id: ID!) {
    getTMHPerson(id: $id) {
      id
      email
      firstName
      lastName
      image
      phone
      extension
      sites
      tmhSites {
        items {
          id
          tMHSiteID
          tMHPersonID
          tMHSite {
            id
            tmhPeople {
              items {
                id
                tMHSiteID
                tMHPersonID
                tMHSite {
                  id
                  createdAt
                  updatedAt
                  __typename
                }
                tMHPerson {
                  id
                  email
                  firstName
                  lastName
                  image
                  phone
                  extension
                  sites
                  position
                  isTeacher
                  isStaff
                  isCoordinator
                  isOverseer
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          tMHPerson {
            id
            email
            firstName
            lastName
            image
            phone
            extension
            sites
            tmhSites {
              items {
                id
                tMHSiteID
                tMHPersonID
                tMHSite {
                  id
                  createdAt
                  updatedAt
                  __typename
                }
                tMHPerson {
                  id
                  email
                  firstName
                  lastName
                  image
                  phone
                  extension
                  sites
                  position
                  isTeacher
                  isStaff
                  isCoordinator
                  isOverseer
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            position
            isTeacher
            isStaff
            isCoordinator
            isOverseer
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      position
      isTeacher
      isStaff
      isCoordinator
      isOverseer
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listTMHPeople = /* GraphQL */ `
  query ListTMHPeople(
    $filter: ModelTMHPersonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTMHPeople(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        firstName
        lastName
        image
        phone
        extension
        sites
        tmhSites {
          items {
            id
            tMHSiteID
            tMHPersonID
            tMHSite {
              id
              tmhPeople {
                items {
                  id
                  tMHSiteID
                  tMHPersonID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            tMHPerson {
              id
              email
              firstName
              lastName
              image
              phone
              extension
              sites
              tmhSites {
                items {
                  id
                  tMHSiteID
                  tMHPersonID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              position
              isTeacher
              isStaff
              isCoordinator
              isOverseer
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        position
        isTeacher
        isStaff
        isCoordinator
        isOverseer
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const TMHPersonByEmail = /* GraphQL */ `
  query TMHPersonByEmail(
    $email: AWSEmail!
    $sortDirection: ModelSortDirection
    $filter: ModelTMHPersonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    TMHPersonByEmail(
      email: $email
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        email
        firstName
        lastName
        image
        phone
        extension
        sites
        tmhSites {
          items {
            id
            tMHSiteID
            tMHPersonID
            tMHSite {
              id
              tmhPeople {
                items {
                  id
                  tMHSiteID
                  tMHPersonID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            tMHPerson {
              id
              email
              firstName
              lastName
              image
              phone
              extension
              sites
              tmhSites {
                items {
                  id
                  tMHSiteID
                  tMHPersonID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              position
              isTeacher
              isStaff
              isCoordinator
              isOverseer
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        position
        isTeacher
        isStaff
        isCoordinator
        isOverseer
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const TMHPersonByIsTeacher = /* GraphQL */ `
  query TMHPersonByIsTeacher(
    $isTeacher: String!
    $sortDirection: ModelSortDirection
    $filter: ModelTMHPersonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    TMHPersonByIsTeacher(
      isTeacher: $isTeacher
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        email
        firstName
        lastName
        image
        phone
        extension
        sites
        tmhSites {
          items {
            id
            tMHSiteID
            tMHPersonID
            tMHSite {
              id
              tmhPeople {
                items {
                  id
                  tMHSiteID
                  tMHPersonID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            tMHPerson {
              id
              email
              firstName
              lastName
              image
              phone
              extension
              sites
              tmhSites {
                items {
                  id
                  tMHSiteID
                  tMHPersonID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              position
              isTeacher
              isStaff
              isCoordinator
              isOverseer
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        position
        isTeacher
        isStaff
        isCoordinator
        isOverseer
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const TMHPersonByIsStaff = /* GraphQL */ `
  query TMHPersonByIsStaff(
    $isStaff: String!
    $sortDirection: ModelSortDirection
    $filter: ModelTMHPersonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    TMHPersonByIsStaff(
      isStaff: $isStaff
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        email
        firstName
        lastName
        image
        phone
        extension
        sites
        tmhSites {
          items {
            id
            tMHSiteID
            tMHPersonID
            tMHSite {
              id
              tmhPeople {
                items {
                  id
                  tMHSiteID
                  tMHPersonID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            tMHPerson {
              id
              email
              firstName
              lastName
              image
              phone
              extension
              sites
              tmhSites {
                items {
                  id
                  tMHSiteID
                  tMHPersonID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              position
              isTeacher
              isStaff
              isCoordinator
              isOverseer
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        position
        isTeacher
        isStaff
        isCoordinator
        isOverseer
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const TMHPersonByIsCoordinator = /* GraphQL */ `
  query TMHPersonByIsCoordinator(
    $isCoordinator: String!
    $sortDirection: ModelSortDirection
    $filter: ModelTMHPersonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    TMHPersonByIsCoordinator(
      isCoordinator: $isCoordinator
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        email
        firstName
        lastName
        image
        phone
        extension
        sites
        tmhSites {
          items {
            id
            tMHSiteID
            tMHPersonID
            tMHSite {
              id
              tmhPeople {
                items {
                  id
                  tMHSiteID
                  tMHPersonID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            tMHPerson {
              id
              email
              firstName
              lastName
              image
              phone
              extension
              sites
              tmhSites {
                items {
                  id
                  tMHSiteID
                  tMHPersonID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              position
              isTeacher
              isStaff
              isCoordinator
              isOverseer
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        position
        isTeacher
        isStaff
        isCoordinator
        isOverseer
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const TMHPersonByIsOverseer = /* GraphQL */ `
  query TMHPersonByIsOverseer(
    $isOverseer: String!
    $sortDirection: ModelSortDirection
    $filter: ModelTMHPersonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    TMHPersonByIsOverseer(
      isOverseer: $isOverseer
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        email
        firstName
        lastName
        image
        phone
        extension
        sites
        tmhSites {
          items {
            id
            tMHSiteID
            tMHPersonID
            tMHSite {
              id
              tmhPeople {
                items {
                  id
                  tMHSiteID
                  tMHPersonID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            tMHPerson {
              id
              email
              firstName
              lastName
              image
              phone
              extension
              sites
              tmhSites {
                items {
                  id
                  tMHSiteID
                  tMHPersonID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              position
              isTeacher
              isStaff
              isCoordinator
              isOverseer
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        position
        isTeacher
        isStaff
        isCoordinator
        isOverseer
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const searchTMHPeople = /* GraphQL */ `
  query SearchTMHPeople(
    $filter: SearchableTMHPersonFilterInput
    $sort: [SearchableTMHPersonSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableTMHPersonAggregationInput]
  ) {
    searchTMHPeople(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        email
        firstName
        lastName
        image
        phone
        extension
        sites
        tmhSites {
          items {
            id
            tMHSiteID
            tMHPersonID
            tMHSite {
              id
              tmhPeople {
                items {
                  id
                  tMHSiteID
                  tMHPersonID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            tMHPerson {
              id
              email
              firstName
              lastName
              image
              phone
              extension
              sites
              tmhSites {
                items {
                  id
                  tMHSiteID
                  tMHPersonID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              position
              isTeacher
              isStaff
              isCoordinator
              isOverseer
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        position
        isTeacher
        isStaff
        isCoordinator
        isOverseer
        createdAt
        updatedAt
        __typename
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
              __typename
            }
          }
        }
        __typename
      }
      __typename
    }
  }
`;
export const getTMHLocation = /* GraphQL */ `
  query GetTMHLocation($id: ID!) {
    getTMHLocation(id: $id) {
      id
      name
      regionShortName
      homeChurchGroupID
      abbreviation
      region
      contact {
        name
        email
        phone
        extension
        __typename
      }
      meetings {
        date
        startTime
        endTime
        name
        description
        frequency
        location {
          name
          latitude
          longitude
          address1
          address2
          city
          state
          zip
          country
          url
          __typename
        }
        __typename
      }
      youth {
        name
        description
        age
        location {
          name
          latitude
          longitude
          address1
          address2
          city
          state
          zip
          country
          url
          __typename
        }
        time
        facebookLink
        instagramLink
        contact {
          name
          email
          phone
          extension
          __typename
        }
        __typename
      }
      socials {
        facebook {
          name
          pageId
          link
          __typename
        }
        instagram {
          name
          username
          pageId
          link
          __typename
        }
        discord
        twitter
        __typename
      }
      location {
        name
        latitude
        longitude
        address1
        address2
        city
        state
        zip
        country
        url
        __typename
      }
      pastors {
        id
        email
        firstName
        lastName
        image
        phone
        extension
        sites
        tmhSites {
          items {
            id
            tMHSiteID
            tMHPersonID
            tMHSite {
              id
              tmhPeople {
                items {
                  id
                  tMHSiteID
                  tMHPersonID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            tMHPerson {
              id
              email
              firstName
              lastName
              image
              phone
              extension
              sites
              tmhSites {
                items {
                  id
                  tMHSiteID
                  tMHPersonID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              position
              isTeacher
              isStaff
              isCoordinator
              isOverseer
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        position
        isTeacher
        isStaff
        isCoordinator
        isOverseer
        createdAt
        updatedAt
        __typename
      }
      pastorEmail
      staff {
        id
        email
        firstName
        lastName
        image
        phone
        extension
        sites
        tmhSites {
          items {
            id
            tMHSiteID
            tMHPersonID
            tMHSite {
              id
              tmhPeople {
                items {
                  id
                  tMHSiteID
                  tMHPersonID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            tMHPerson {
              id
              email
              firstName
              lastName
              image
              phone
              extension
              sites
              tmhSites {
                items {
                  id
                  tMHSiteID
                  tMHPersonID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              position
              isTeacher
              isStaff
              isCoordinator
              isOverseer
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        position
        isTeacher
        isStaff
        isCoordinator
        isOverseer
        createdAt
        updatedAt
        __typename
      }
      showInLocationMap
      showInLocationList
      locationType
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listTMHLocations = /* GraphQL */ `
  query ListTMHLocations(
    $filter: ModelTMHLocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTMHLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        regionShortName
        homeChurchGroupID
        abbreviation
        region
        contact {
          name
          email
          phone
          extension
          __typename
        }
        meetings {
          date
          startTime
          endTime
          name
          description
          frequency
          location {
            name
            latitude
            longitude
            address1
            address2
            city
            state
            zip
            country
            url
            __typename
          }
          __typename
        }
        youth {
          name
          description
          age
          location {
            name
            latitude
            longitude
            address1
            address2
            city
            state
            zip
            country
            url
            __typename
          }
          time
          facebookLink
          instagramLink
          contact {
            name
            email
            phone
            extension
            __typename
          }
          __typename
        }
        socials {
          facebook {
            name
            pageId
            link
            __typename
          }
          instagram {
            name
            username
            pageId
            link
            __typename
          }
          discord
          twitter
          __typename
        }
        location {
          name
          latitude
          longitude
          address1
          address2
          city
          state
          zip
          country
          url
          __typename
        }
        pastors {
          id
          email
          firstName
          lastName
          image
          phone
          extension
          sites
          tmhSites {
            items {
              id
              tMHSiteID
              tMHPersonID
              tMHSite {
                id
                tmhPeople {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              tMHPerson {
                id
                email
                firstName
                lastName
                image
                phone
                extension
                sites
                tmhSites {
                  nextToken
                  __typename
                }
                position
                isTeacher
                isStaff
                isCoordinator
                isOverseer
                createdAt
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          position
          isTeacher
          isStaff
          isCoordinator
          isOverseer
          createdAt
          updatedAt
          __typename
        }
        pastorEmail
        staff {
          id
          email
          firstName
          lastName
          image
          phone
          extension
          sites
          tmhSites {
            items {
              id
              tMHSiteID
              tMHPersonID
              tMHSite {
                id
                tmhPeople {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              tMHPerson {
                id
                email
                firstName
                lastName
                image
                phone
                extension
                sites
                tmhSites {
                  nextToken
                  __typename
                }
                position
                isTeacher
                isStaff
                isCoordinator
                isOverseer
                createdAt
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          position
          isTeacher
          isStaff
          isCoordinator
          isOverseer
          createdAt
          updatedAt
          __typename
        }
        showInLocationMap
        showInLocationList
        locationType
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getSitePerson = /* GraphQL */ `
  query GetSitePerson($id: ID!) {
    getSitePerson(id: $id) {
      id
      tMHSiteID
      tMHPersonID
      tMHSite {
        id
        tmhPeople {
          items {
            id
            tMHSiteID
            tMHPersonID
            tMHSite {
              id
              tmhPeople {
                items {
                  id
                  tMHSiteID
                  tMHPersonID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            tMHPerson {
              id
              email
              firstName
              lastName
              image
              phone
              extension
              sites
              tmhSites {
                items {
                  id
                  tMHSiteID
                  tMHPersonID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              position
              isTeacher
              isStaff
              isCoordinator
              isOverseer
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      tMHPerson {
        id
        email
        firstName
        lastName
        image
        phone
        extension
        sites
        tmhSites {
          items {
            id
            tMHSiteID
            tMHPersonID
            tMHSite {
              id
              tmhPeople {
                items {
                  id
                  tMHSiteID
                  tMHPersonID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            tMHPerson {
              id
              email
              firstName
              lastName
              image
              phone
              extension
              sites
              tmhSites {
                items {
                  id
                  tMHSiteID
                  tMHPersonID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              position
              isTeacher
              isStaff
              isCoordinator
              isOverseer
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        position
        isTeacher
        isStaff
        isCoordinator
        isOverseer
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listSitePeople = /* GraphQL */ `
  query ListSitePeople(
    $filter: ModelSitePersonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSitePeople(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        tMHSiteID
        tMHPersonID
        tMHSite {
          id
          tmhPeople {
            items {
              id
              tMHSiteID
              tMHPersonID
              tMHSite {
                id
                tmhPeople {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              tMHPerson {
                id
                email
                firstName
                lastName
                image
                phone
                extension
                sites
                tmhSites {
                  nextToken
                  __typename
                }
                position
                isTeacher
                isStaff
                isCoordinator
                isOverseer
                createdAt
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        tMHPerson {
          id
          email
          firstName
          lastName
          image
          phone
          extension
          sites
          tmhSites {
            items {
              id
              tMHSiteID
              tMHPersonID
              tMHSite {
                id
                tmhPeople {
                  nextToken
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              tMHPerson {
                id
                email
                firstName
                lastName
                image
                phone
                extension
                sites
                tmhSites {
                  nextToken
                  __typename
                }
                position
                isTeacher
                isStaff
                isCoordinator
                isOverseer
                createdAt
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          position
          isTeacher
          isStaff
          isCoordinator
          isOverseer
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
