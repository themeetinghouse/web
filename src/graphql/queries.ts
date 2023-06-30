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
      }
      meta {
        fums
        fumsId
        fumsJsInclude
        fumsJs
        fumsNoScript
      }
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
          }
          regionRestriction {
            allowed
            blocked
          }
          hasCustomThumbnail
        }
        status {
          uploadStatus
          privacyStatus
          license
          embeddable
          publicStatsViewable
        }
        statistics {
          viewCount
          likeCount
          dislikeCount
          favoriteCount
          commentCount
        }
      }
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
          }
          regionRestriction {
            allowed
            blocked
          }
          hasCustomThumbnail
        }
        status {
          uploadStatus
          privacyStatus
          license
          embeddable
          publicStatsViewable
        }
        statistics {
          viewCount
          likeCount
          dislikeCount
          favoriteCount
          commentCount
        }
      }
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
      }
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
          }
          regionRestriction {
            allowed
            blocked
          }
          hasCustomThumbnail
        }
        status {
          uploadStatus
          privacyStatus
          license
          embeddable
          publicStatsViewable
        }
        statistics {
          viewCount
          likeCount
          dislikeCount
          favoriteCount
          commentCount
        }
      }
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
          }
          regionRestriction {
            allowed
            blocked
          }
          hasCustomThumbnail
        }
        status {
          uploadStatus
          privacyStatus
          license
          embeddable
          publicStatsViewable
        }
        statistics {
          viewCount
          likeCount
          dislikeCount
          favoriteCount
          commentCount
        }
      }
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
        }
      }
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
        }
      }
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
      }
      public
      series_FK
      sermonNoteCount
      quoteNoteCount
      homeChurchNoteCount
      sermonCommentCount
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
      }
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
      }
      state
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
          }
          id
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
            }
            id
          }
          id
          ticket_uri
          cover {
            id
            offset_x
            offset_y
            source
          }
        }
        cover {
          id
          offset_x
          offset_y
          source
        }
        picture {
          url
        }
      }
      paging {
        cursors {
          before
          after
        }
      }
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
        }
        id
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
          }
          id
        }
        id
        ticket_uri
        cover {
          id
          offset_x
          offset_y
          source
        }
      }
      cover {
        id
        offset_x
        offset_y
        source
      }
      picture {
        url
      }
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
      }
      paging {
        cursors {
          before
          after
        }
      }
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
      }
      sermonNotes {
        id
        noteType
        content
        position
        timecode
        sermons_FK
      }
      sermonVerses {
        id
        chapterVerse
        translation
        content
        sermons_FK
        notes_FK
      }
      homeChurchVerses {
        id
        chapterVerse
        translation
        content
        sermons_FK
        notes_FK
      }
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
                }
                nextToken
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
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
              }
              customPlaylistIDs
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                }
                nextToken
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
              thumbnailDescription
              move
              createdAt
              updatedAt
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
                }
                nextToken
              }
              hidden
              createdAt
              updatedAt
            }
            videoPublishedDate
            createdAt
            updatedAt
          }
          nextToken
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
                }
                nextToken
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
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
              }
              customPlaylistIDs
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                }
                nextToken
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
              thumbnailDescription
              move
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
              videoSeries {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                }
                nextToken
              }
              series {
                id
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
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
                }
                nextToken
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
              }
              bannerImage {
                src
                alt
              }
              babyHeroImage {
                src
                alt
              }
              createdAt
              updatedAt
            }
            nextToken
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
                }
                blogSeriesId
                blogSeriesIndex
                blogSeries {
                  nextToken
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
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                createdAt
                updatedAt
              }
              videoSeries {
                id
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          seriesType
          title
          description
          thumbnailDescription
          image
          squareImage {
            src
            alt
          }
          bannerImage {
            src
            alt
          }
          babyHeroImage {
            src
            alt
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
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
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
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
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
                }
                nextToken
              }
              seriesType
              title
              description
              thumbnailDescription
              createdAt
              updatedAt
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
                }
                nextToken
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
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
              }
              customPlaylistIDs
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                }
                nextToken
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
              thumbnailDescription
              move
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
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
            }
            regionRestriction {
              allowed
              blocked
            }
            hasCustomThumbnail
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
        thumbnailDescription
        move
        createdAt
        updatedAt
      }
      nextToken
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
                }
                nextToken
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
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
              }
              customPlaylistIDs
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                }
                nextToken
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
              thumbnailDescription
              move
              createdAt
              updatedAt
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
                }
                nextToken
              }
              hidden
              createdAt
              updatedAt
            }
            videoPublishedDate
            createdAt
            updatedAt
          }
          nextToken
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
                }
                nextToken
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
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
              }
              customPlaylistIDs
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                }
                nextToken
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
              thumbnailDescription
              move
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
              videoSeries {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                }
                nextToken
              }
              series {
                id
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
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
                }
                nextToken
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
              }
              bannerImage {
                src
                alt
              }
              babyHeroImage {
                src
                alt
              }
              createdAt
              updatedAt
            }
            nextToken
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
                }
                blogSeriesId
                blogSeriesIndex
                blogSeries {
                  nextToken
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
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                createdAt
                updatedAt
              }
              videoSeries {
                id
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          seriesType
          title
          description
          thumbnailDescription
          image
          squareImage {
            src
            alt
          }
          bannerImage {
            src
            alt
          }
          babyHeroImage {
            src
            alt
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
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
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
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
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
                }
                nextToken
              }
              seriesType
              title
              description
              thumbnailDescription
              createdAt
              updatedAt
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
                }
                nextToken
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
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
              }
              customPlaylistIDs
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                }
                nextToken
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
              thumbnailDescription
              move
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
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
            }
            regionRestriction {
              allowed
              blocked
            }
            hasCustomThumbnail
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
        thumbnailDescription
        move
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const f1ListActivities = /* GraphQL */ `
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
    }
  }
`;
export const f1ListAssignments = /* GraphQL */ `
  query F1ListAssignments($itemId: String, $page: String) {
    F1ListAssignments(itemId: $itemId, page: $page) {
      id
      personId
      uri
      type {
        name
        id
        uri
      }
      person {
        id
        uri
      }
      activity {
        name
        id
        uri
      }
      schedule {
        id
        uri
      }
      roster {
        id
        uri
      }
      rosterFolder {
        id
        uri
      }
      createdAt
      updatedAt
    }
  }
`;
export const f1ListGroupTypes = /* GraphQL */ `
  query F1ListGroupTypes {
    F1ListGroupTypes {
      groupTypes {
        groupType {
          id
          name
          description
          isWebEnabled
          isSearchable
        }
      }
    }
  }
`;
export const f1ListGroups = /* GraphQL */ `
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
          }
          groupType {
            id
            name
          }
          groupURL
          gender {
            name
          }
          maritalStatus {
            name
          }
          startAgeRange
          endAgeRange
          dateRangeType {
            id
            name
          }
          leadersCount
          membersCount
          openProspectsCount
          event {
            id
            name
          }
          createdDate
          lastUpdatedDate
          isLocationPrivate
          timeZone {
            id
            name
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
            }
            createdDate
            lastUpdatedDate
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
                }
                recurrenceMonthly {
                  recurrenceFrequency
                  recurrenceOffset
                  monthDay
                  monthWeekDay
                }
              }
            }
            createdDate
            createByPerson
            lastUpdatedDate
            lastUpdatedByPerson
          }
        }
      }
    }
  }
`;
export const f1ListEventSchedules = /* GraphQL */ `
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
                }
                recurrenceMonthly {
                  recurrenceFrequency
                  recurrenceOffset
                  monthDay
                  monthWeekDay
                }
              }
            }
            createdDate
            createByPerson
            lastUpdatedDate
            lastUpdatedByPerson
          }
        }
      }
    }
  }
`;
export const f1ListTimezones = /* GraphQL */ `
  query F1ListTimezones($itemId: [String]) {
    F1ListTimezones(itemId: $itemId) {
      id
      info {
        timeZone {
          id
          name
        }
      }
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
    }
  }
`;
export const askQuestion = /* GraphQL */ `
  query AskQuestion($email: String, $body: String) {
    askQuestion(email: $email, body: $body) {
      err
      data
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
            }
            Platform {
              DimensionType
              Values
            }
            DeviceType {
              DimensionType
              Values
            }
            AppVersion {
              DimensionType
              Values
            }
            Make {
              DimensionType
              Values
            }
            Model {
              DimensionType
              Values
            }
          }
          Location {
            Country {
              DimensionType
              Values
            }
            GPSPoint {
              Coordinates {
                Latitude
                Longitude
              }
              RangeInKilometers
            }
          }
          Behavior {
            Recency {
              RecencyType
              Duration
            }
          }
          Attributes
          Metrics
          UserAttributes
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
                }
                Platform {
                  DimensionType
                  Values
                }
                DeviceType {
                  DimensionType
                  Values
                }
                AppVersion {
                  DimensionType
                  Values
                }
                Make {
                  DimensionType
                  Values
                }
                Model {
                  DimensionType
                  Values
                }
              }
              Location {
                Country {
                  DimensionType
                  Values
                }
                GPSPoint {
                  RangeInKilometers
                }
              }
              Behavior {
                Recency {
                  RecencyType
                  Duration
                }
              }
              Attributes
              Metrics
              UserAttributes
            }
            SourceType
            SourceSegments {
              Id
              Version
            }
          }
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
        }
        Arn
        tags
      }
      NextToken
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
          }
          subFund {
            id
            name
          }
          account {
            id
          }
          contributionType {
            id
            name
          }
          contributionSubType {
            id
            name
          }
        }
      }
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
      customer {
        id
        object
        address
        balance
        created
        currency
        default_source
        delinquent
        description
        discount
        email
        invoice_prefix
        invoice_settings {
          custom_fields
          default_payment_method
          footer
        }
        livemode
        metadata
        name
        next_invoice_sequence
        phone
        preferred_locales
        shipping
        tax_exempt
      }
    }
  }
`;
export const tmhStripeAttachPaymentMethod = /* GraphQL */ `
  query TmhStripeAttachPaymentMethod($id: String, $idempotency: String) {
    tmhStripeAttachPaymentMethod(id: $id, idempotency: $idempotency)
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
          }
        }
      }
    }
  }
`;
export const tmhStripeListSubscriptions = /* GraphQL */ `
  query TmhStripeListSubscriptions($starting_after: String) {
    tmhStripeListSubscriptions(starting_after: $starting_after) {
      data {
        id
        default_source
        items {
          data {
            id
            price
            plan {
              id
              interval
              interval_count
              active
              amount
              number_decimal
              currency
              product
            }
          }
        }
        next_pending_invoice_item_invoice
        start_date
        status
      }
      has_more
    }
  }
`;
export const tmhStripeDeleteSubscription = /* GraphQL */ `
  query TmhStripeDeleteSubscription($subscriptionId: String) {
    tmhStripeDeleteSubscription(subscriptionId: $subscriptionId)
  }
`;
export const tmhStripeAddSubscription = /* GraphQL */ `
  query TmhStripeAddSubscription(
    $idempotency: String
    $amount: String
    $fund: String
    $frequency: String
  ) {
    tmhStripeAddSubscription(
      idempotency: $idempotency
      amount: $amount
      fund: $fund
      frequency: $frequency
    ) {
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
          }
        }
      }
    }
  }
`;
export const tmhStripeAddPayment = /* GraphQL */ `
  query TmhStripeAddPayment(
    $idempotency: String
    $amount: String
    $fund: String
  ) {
    tmhStripeAddPayment(
      idempotency: $idempotency
      amount: $amount
      fund: $fund
    ) {
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
          }
        }
      }
    }
  }
`;
export const tmhStripeDeletePaymentMethod = /* GraphQL */ `
  query TmhStripeDeletePaymentMethod($paymentMethodId: String) {
    tmhStripeDeletePaymentMethod(paymentMethodId: $paymentMethodId)
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
      }
      person {
        id
        uri
      }
      activity {
        name
        id
        uri
      }
      schedule {
        id
        uri
      }
      roster {
        id
        uri
      }
      rosterFolder {
        id
        uri
      }
      createdAt
      updatedAt
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
        }
        person {
          id
          uri
        }
        activity {
          name
          id
          uri
        }
        schedule {
          id
          uri
        }
        roster {
          id
          uri
        }
        rosterFolder {
          id
          uri
        }
        createdAt
        updatedAt
      }
      nextToken
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
        }
        person {
          id
          uri
        }
        activity {
          name
          id
          uri
        }
        schedule {
          id
          uri
        }
        roster {
          id
          uri
        }
        rosterFolder {
          id
          uri
        }
        createdAt
        updatedAt
      }
      nextToken
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
      }
      nextToken
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
      }
      groupType {
        id
        name
      }
      groupURL
      gender {
        name
      }
      maritalStatus {
        name
      }
      startAgeRange
      endAgeRange
      dateRangeType {
        id
        name
      }
      leadersCount
      membersCount
      openProspectsCount
      event {
        id
        name
      }
      createdDate
      lastUpdatedDate
      isLocationPrivate
      timeZone {
        id
        name
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
        }
        createdDate
        lastUpdatedDate
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
            }
            recurrenceMonthly {
              recurrenceFrequency
              recurrenceOffset
              monthDay
              monthWeekDay
            }
          }
        }
        createdDate
        createByPerson
        lastUpdatedDate
        lastUpdatedByPerson
      }
      createdAt
      updatedAt
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
        }
        groupType {
          id
          name
        }
        groupURL
        gender {
          name
        }
        maritalStatus {
          name
        }
        startAgeRange
        endAgeRange
        dateRangeType {
          id
          name
        }
        leadersCount
        membersCount
        openProspectsCount
        event {
          id
          name
        }
        createdDate
        lastUpdatedDate
        isLocationPrivate
        timeZone {
          id
          name
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
          }
          createdDate
          lastUpdatedDate
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
              }
              recurrenceMonthly {
                recurrenceFrequency
                recurrenceOffset
                monthDay
                monthWeekDay
              }
            }
          }
          createdDate
          createByPerson
          lastUpdatedDate
          lastUpdatedByPerson
        }
        createdAt
        updatedAt
      }
      nextToken
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
        }
        groupType {
          id
          name
        }
        groupURL
        gender {
          name
        }
        maritalStatus {
          name
        }
        startAgeRange
        endAgeRange
        dateRangeType {
          id
          name
        }
        leadersCount
        membersCount
        openProspectsCount
        event {
          id
          name
        }
        createdDate
        lastUpdatedDate
        isLocationPrivate
        timeZone {
          id
          name
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
          }
          createdDate
          lastUpdatedDate
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
              }
              recurrenceMonthly {
                recurrenceFrequency
                recurrenceOffset
                monthDay
                monthWeekDay
              }
            }
          }
          createdDate
          createByPerson
          lastUpdatedDate
          lastUpdatedByPerson
        }
        createdAt
        updatedAt
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
            }
          }
        }
      }
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
                }
                sermonNoteCount
                quoteNoteCount
                homeChurchNoteCount
                sermonCommentCount
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            sermonNoteCount
            quoteNoteCount
            homeChurchNoteCount
            sermonCommentCount
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        sermonNoteCount
        quoteNoteCount
        homeChurchNoteCount
        sermonCommentCount
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
                }
                createdAt
                updatedAt
              }
              sermonNoteCount
              quoteNoteCount
              homeChurchNoteCount
              sermonCommentCount
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          sermonNoteCount
          quoteNoteCount
          homeChurchNoteCount
          sermonCommentCount
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
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
                }
                createdAt
                updatedAt
              }
              sermonNoteCount
              quoteNoteCount
              homeChurchNoteCount
              sermonCommentCount
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          sermonNoteCount
          quoteNoteCount
          homeChurchNoteCount
          sermonCommentCount
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
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
                }
                createdAt
                updatedAt
              }
              sermonNoteCount
              quoteNoteCount
              homeChurchNoteCount
              sermonCommentCount
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          sermonNoteCount
          quoteNoteCount
          homeChurchNoteCount
          sermonCommentCount
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      sermonNoteCount
      quoteNoteCount
      homeChurchNoteCount
      sermonCommentCount
      createdAt
      updatedAt
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
                }
                sermonNoteCount
                quoteNoteCount
                homeChurchNoteCount
                sermonCommentCount
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            sermonNoteCount
            quoteNoteCount
            homeChurchNoteCount
            sermonCommentCount
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        sermonNoteCount
        quoteNoteCount
        homeChurchNoteCount
        sermonCommentCount
        createdAt
        updatedAt
      }
      nextToken
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
                }
                sermonNoteCount
                quoteNoteCount
                homeChurchNoteCount
                sermonCommentCount
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            sermonNoteCount
            quoteNoteCount
            homeChurchNoteCount
            sermonCommentCount
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        sermonNoteCount
        quoteNoteCount
        homeChurchNoteCount
        sermonCommentCount
        createdAt
        updatedAt
      }
      nextToken
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
      }
      zoom {
        title
        link
      }
      livestreamSections {
        title
        links {
          title
          link
        }
      }
      titles
      homepageLink
      createdAt
      updatedAt
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
        }
        zoom {
          title
          link
        }
        livestreamSections {
          title
          links {
            title
            link
          }
        }
        titles
        homepageLink
        createdAt
        updatedAt
      }
      nextToken
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
      }
      nextToken
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
      }
      nextToken
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
      }
      nextToken
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
                }
                speakerVideosVideoId
                speaker {
                  id
                  name
                  image
                  hidden
                  createdAt
                  updatedAt
                }
                videoPublishedDate
                createdAt
                updatedAt
              }
              nextToken
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
                }
                nextToken
              }
              blogPosts {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                }
                nextToken
              }
              seriesType
              title
              description
              thumbnailDescription
              image
              squareImage {
                src
                alt
              }
              bannerImage {
                src
                alt
              }
              babyHeroImage {
                src
                alt
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
                }
                nextToken
              }
              createdAt
              updatedAt
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
                }
                createdAt
                updatedAt
              }
              nextToken
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
                }
                regionRestriction {
                  allowed
                  blocked
                }
                hasCustomThumbnail
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
            thumbnailDescription
            move
            createdAt
            updatedAt
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
                }
                speakerVideosVideoId
                speaker {
                  id
                  name
                  image
                  hidden
                  createdAt
                  updatedAt
                }
                videoPublishedDate
                createdAt
                updatedAt
              }
              nextToken
            }
            hidden
            createdAt
            updatedAt
          }
          videoPublishedDate
          createdAt
          updatedAt
        }
        nextToken
      }
      hidden
      createdAt
      updatedAt
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
                }
                nextToken
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
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
              }
              customPlaylistIDs
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                }
                nextToken
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
              thumbnailDescription
              move
              createdAt
              updatedAt
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
                }
                nextToken
              }
              hidden
              createdAt
              updatedAt
            }
            videoPublishedDate
            createdAt
            updatedAt
          }
          nextToken
        }
        hidden
        createdAt
        updatedAt
      }
      nextToken
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
                }
                nextToken
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
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
              }
              customPlaylistIDs
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                }
                nextToken
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
              thumbnailDescription
              move
              createdAt
              updatedAt
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
                }
                nextToken
              }
              hidden
              createdAt
              updatedAt
            }
            videoPublishedDate
            createdAt
            updatedAt
          }
          nextToken
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
                }
                nextToken
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
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
              }
              customPlaylistIDs
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                }
                nextToken
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
              thumbnailDescription
              move
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
              videoSeries {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                }
                nextToken
              }
              series {
                id
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
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
                }
                nextToken
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
              }
              bannerImage {
                src
                alt
              }
              babyHeroImage {
                src
                alt
              }
              createdAt
              updatedAt
            }
            nextToken
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
                }
                blogSeriesId
                blogSeriesIndex
                blogSeries {
                  nextToken
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
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                createdAt
                updatedAt
              }
              videoSeries {
                id
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          seriesType
          title
          description
          thumbnailDescription
          image
          squareImage {
            src
            alt
          }
          bannerImage {
            src
            alt
          }
          babyHeroImage {
            src
            alt
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
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
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
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
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
                }
                nextToken
              }
              seriesType
              title
              description
              thumbnailDescription
              createdAt
              updatedAt
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
                }
                nextToken
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
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
              }
              customPlaylistIDs
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                }
                nextToken
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
              thumbnailDescription
              move
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
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
            }
            regionRestriction {
              allowed
              blocked
            }
            hasCustomThumbnail
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
        thumbnailDescription
        move
        createdAt
        updatedAt
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
                }
                nextToken
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
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
              }
              customPlaylistIDs
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                }
                nextToken
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
              thumbnailDescription
              move
              createdAt
              updatedAt
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
                }
                nextToken
              }
              hidden
              createdAt
              updatedAt
            }
            videoPublishedDate
            createdAt
            updatedAt
          }
          nextToken
        }
        hidden
        createdAt
        updatedAt
      }
      videoPublishedDate
      createdAt
      updatedAt
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
                }
                customPlaylistIDs
                customPlaylists {
                  nextToken
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
                }
                videoTypes
                notesURL
                videoURL
                audioURL
                thumbnailDescription
                move
                createdAt
                updatedAt
              }
              speakerVideosVideoId
              speaker {
                id
                name
                image
                videos {
                  nextToken
                }
                hidden
                createdAt
                updatedAt
              }
              videoPublishedDate
              createdAt
              updatedAt
            }
            nextToken
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
                }
                customPlaylistIDs
                customPlaylists {
                  nextToken
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
                }
                videoTypes
                notesURL
                videoURL
                audioURL
                thumbnailDescription
                move
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
                videoSeries {
                  nextToken
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
                }
                blogSeriesId
                blogSeriesIndex
                blogSeries {
                  nextToken
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
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                createdAt
                updatedAt
              }
              nextToken
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
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            seriesType
            title
            description
            thumbnailDescription
            image
            squareImage {
              src
              alt
            }
            bannerImage {
              src
              alt
            }
            babyHeroImage {
              src
              alt
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
                }
                pdf
                topics
                tags
                verses {
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
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
                }
                seriesType
                title
                description
                thumbnailDescription
                createdAt
                updatedAt
              }
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
                }
                customPlaylistIDs
                customPlaylists {
                  nextToken
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
                }
                videoTypes
                notesURL
                videoURL
                audioURL
                thumbnailDescription
                move
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
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
              }
              regionRestriction {
                allowed
                blocked
              }
              hasCustomThumbnail
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
          thumbnailDescription
          move
          createdAt
          updatedAt
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
                }
                customPlaylistIDs
                customPlaylists {
                  nextToken
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
                }
                videoTypes
                notesURL
                videoURL
                audioURL
                thumbnailDescription
                move
                createdAt
                updatedAt
              }
              speakerVideosVideoId
              speaker {
                id
                name
                image
                videos {
                  nextToken
                }
                hidden
                createdAt
                updatedAt
              }
              videoPublishedDate
              createdAt
              updatedAt
            }
            nextToken
          }
          hidden
          createdAt
          updatedAt
        }
        videoPublishedDate
        createdAt
        updatedAt
      }
      nextToken
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
                }
                customPlaylistIDs
                customPlaylists {
                  nextToken
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
                }
                videoTypes
                notesURL
                videoURL
                audioURL
                thumbnailDescription
                move
                createdAt
                updatedAt
              }
              speakerVideosVideoId
              speaker {
                id
                name
                image
                videos {
                  nextToken
                }
                hidden
                createdAt
                updatedAt
              }
              videoPublishedDate
              createdAt
              updatedAt
            }
            nextToken
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
                }
                customPlaylistIDs
                customPlaylists {
                  nextToken
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
                }
                videoTypes
                notesURL
                videoURL
                audioURL
                thumbnailDescription
                move
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
                videoSeries {
                  nextToken
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
                }
                blogSeriesId
                blogSeriesIndex
                blogSeries {
                  nextToken
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
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                createdAt
                updatedAt
              }
              nextToken
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
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            seriesType
            title
            description
            thumbnailDescription
            image
            squareImage {
              src
              alt
            }
            bannerImage {
              src
              alt
            }
            babyHeroImage {
              src
              alt
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
                }
                pdf
                topics
                tags
                verses {
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
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
                }
                seriesType
                title
                description
                thumbnailDescription
                createdAt
                updatedAt
              }
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
                }
                customPlaylistIDs
                customPlaylists {
                  nextToken
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
                }
                videoTypes
                notesURL
                videoURL
                audioURL
                thumbnailDescription
                move
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
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
              }
              regionRestriction {
                allowed
                blocked
              }
              hasCustomThumbnail
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
          thumbnailDescription
          move
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
                }
                blogSeriesId
                blogSeriesIndex
                blogSeries {
                  nextToken
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
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                createdAt
                updatedAt
              }
              videoSeries {
                id
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
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
                }
                customPlaylistIDs
                customPlaylists {
                  nextToken
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
                }
                videoTypes
                notesURL
                videoURL
                audioURL
                thumbnailDescription
                move
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
                videoSeries {
                  nextToken
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
                }
                blogSeriesId
                blogSeriesIndex
                blogSeries {
                  nextToken
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
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                createdAt
                updatedAt
              }
              nextToken
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
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            seriesType
            title
            description
            thumbnailDescription
            image
            squareImage {
              src
              alt
            }
            bannerImage {
              src
              alt
            }
            babyHeroImage {
              src
              alt
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
                }
                pdf
                topics
                tags
                verses {
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
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
                }
                blogSeriesId
                blogSeriesIndex
                blogSeries {
                  nextToken
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
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
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
          }
          bannerImage {
            src
            alt
          }
          babyHeroImage {
            src
            alt
          }
          createdAt
          updatedAt
        }
        nextToken
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
                }
                createdAt
                updatedAt
              }
              nextToken
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
                }
                nextToken
              }
              blogPosts {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                }
                nextToken
              }
              seriesType
              title
              description
              thumbnailDescription
              image
              squareImage {
                src
                alt
              }
              bannerImage {
                src
                alt
              }
              babyHeroImage {
                src
                alt
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
                }
                nextToken
              }
              createdAt
              updatedAt
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
                }
                createdAt
                updatedAt
              }
              nextToken
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
            }
            bannerImage {
              src
              alt
            }
            babyHeroImage {
              src
              alt
            }
            createdAt
            updatedAt
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
                }
                customPlaylistIDs
                customPlaylists {
                  nextToken
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
                }
                videoTypes
                notesURL
                videoURL
                audioURL
                thumbnailDescription
                move
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
                videoSeries {
                  nextToken
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
                }
                blogSeriesId
                blogSeriesIndex
                blogSeries {
                  nextToken
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
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                createdAt
                updatedAt
              }
              nextToken
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
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            seriesType
            title
            description
            thumbnailDescription
            image
            squareImage {
              src
              alt
            }
            bannerImage {
              src
              alt
            }
            babyHeroImage {
              src
              alt
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
                }
                pdf
                topics
                tags
                verses {
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      seriesType
      title
      description
      thumbnailDescription
      image
      squareImage {
        src
        alt
      }
      bannerImage {
        src
        alt
      }
      babyHeroImage {
        src
        alt
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
                }
                customPlaylistIDs
                customPlaylists {
                  nextToken
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
                }
                videoTypes
                notesURL
                videoURL
                audioURL
                thumbnailDescription
                move
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
                videoSeries {
                  nextToken
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
                }
                blogSeriesId
                blogSeriesIndex
                blogSeries {
                  nextToken
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
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                createdAt
                updatedAt
              }
              nextToken
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
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            seriesType
            title
            description
            thumbnailDescription
            image
            squareImage {
              src
              alt
            }
            bannerImage {
              src
              alt
            }
            babyHeroImage {
              src
              alt
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
                }
                pdf
                topics
                tags
                verses {
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
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
                }
                pdf
                topics
                tags
                verses {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
                }
                speakerVideosVideoId
                speaker {
                  id
                  name
                  image
                  hidden
                  createdAt
                  updatedAt
                }
                videoPublishedDate
                createdAt
                updatedAt
              }
              nextToken
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
                }
                nextToken
              }
              blogPosts {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                }
                nextToken
              }
              seriesType
              title
              description
              thumbnailDescription
              image
              squareImage {
                src
                alt
              }
              bannerImage {
                src
                alt
              }
              babyHeroImage {
                src
                alt
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
                }
                nextToken
              }
              createdAt
              updatedAt
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
                }
                createdAt
                updatedAt
              }
              nextToken
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
                }
                regionRestriction {
                  allowed
                  blocked
                }
                hasCustomThumbnail
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
            thumbnailDescription
            move
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
                }
                createdAt
                updatedAt
              }
              nextToken
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
                }
                nextToken
              }
              blogPosts {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                }
                nextToken
              }
              seriesType
              title
              description
              thumbnailDescription
              image
              squareImage {
                src
                alt
              }
              bannerImage {
                src
                alt
              }
              babyHeroImage {
                src
                alt
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
                }
                nextToken
              }
              createdAt
              updatedAt
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
                }
                createdAt
                updatedAt
              }
              nextToken
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
            }
            bannerImage {
              src
              alt
            }
            babyHeroImage {
              src
              alt
            }
            createdAt
            updatedAt
          }
          nextToken
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
                }
                nextToken
              }
              series {
                id
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
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
                }
                nextToken
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
              }
              bannerImage {
                src
                alt
              }
              babyHeroImage {
                src
                alt
              }
              createdAt
              updatedAt
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
                }
                nextToken
              }
              blogPosts {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                }
                nextToken
              }
              seriesType
              title
              description
              thumbnailDescription
              image
              squareImage {
                src
                alt
              }
              bannerImage {
                src
                alt
              }
              babyHeroImage {
                src
                alt
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
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        seriesType
        title
        description
        thumbnailDescription
        image
        squareImage {
          src
          alt
        }
        bannerImage {
          src
          alt
        }
        babyHeroImage {
          src
          alt
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
                }
                nextToken
              }
              blogPosts {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                }
                nextToken
              }
              seriesType
              title
              description
              thumbnailDescription
              image
              squareImage {
                src
                alt
              }
              bannerImage {
                src
                alt
              }
              babyHeroImage {
                src
                alt
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
                }
                nextToken
              }
              createdAt
              updatedAt
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
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
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
                }
                speakerVideosVideoId
                speaker {
                  id
                  name
                  image
                  hidden
                  createdAt
                  updatedAt
                }
                videoPublishedDate
                createdAt
                updatedAt
              }
              nextToken
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
                }
                nextToken
              }
              blogPosts {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                }
                nextToken
              }
              seriesType
              title
              description
              thumbnailDescription
              image
              squareImage {
                src
                alt
              }
              bannerImage {
                src
                alt
              }
              babyHeroImage {
                src
                alt
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
                }
                nextToken
              }
              createdAt
              updatedAt
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
                }
                createdAt
                updatedAt
              }
              nextToken
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
                }
                regionRestriction {
                  allowed
                  blocked
                }
                hasCustomThumbnail
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
            thumbnailDescription
            move
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
                }
                createdAt
                updatedAt
              }
              nextToken
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
                }
                nextToken
              }
              blogPosts {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                }
                nextToken
              }
              seriesType
              title
              description
              thumbnailDescription
              image
              squareImage {
                src
                alt
              }
              bannerImage {
                src
                alt
              }
              babyHeroImage {
                src
                alt
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
                }
                nextToken
              }
              createdAt
              updatedAt
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
                }
                createdAt
                updatedAt
              }
              nextToken
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
            }
            bannerImage {
              src
              alt
            }
            babyHeroImage {
              src
              alt
            }
            createdAt
            updatedAt
          }
          nextToken
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
                }
                nextToken
              }
              series {
                id
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
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
                }
                nextToken
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
              }
              bannerImage {
                src
                alt
              }
              babyHeroImage {
                src
                alt
              }
              createdAt
              updatedAt
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
                }
                nextToken
              }
              blogPosts {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                }
                nextToken
              }
              seriesType
              title
              description
              thumbnailDescription
              image
              squareImage {
                src
                alt
              }
              bannerImage {
                src
                alt
              }
              babyHeroImage {
                src
                alt
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
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        seriesType
        title
        description
        thumbnailDescription
        image
        squareImage {
          src
          alt
        }
        bannerImage {
          src
          alt
        }
        babyHeroImage {
          src
          alt
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
                }
                nextToken
              }
              blogPosts {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                }
                nextToken
              }
              seriesType
              title
              description
              thumbnailDescription
              image
              squareImage {
                src
                alt
              }
              bannerImage {
                src
                alt
              }
              babyHeroImage {
                src
                alt
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
                }
                nextToken
              }
              createdAt
              updatedAt
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
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
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
                }
                speakerVideosVideoId
                speaker {
                  id
                  name
                  image
                  hidden
                  createdAt
                  updatedAt
                }
                videoPublishedDate
                createdAt
                updatedAt
              }
              nextToken
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
                }
                nextToken
              }
              blogPosts {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                }
                nextToken
              }
              seriesType
              title
              description
              thumbnailDescription
              image
              squareImage {
                src
                alt
              }
              bannerImage {
                src
                alt
              }
              babyHeroImage {
                src
                alt
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
                }
                nextToken
              }
              createdAt
              updatedAt
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
                }
                createdAt
                updatedAt
              }
              nextToken
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
                }
                regionRestriction {
                  allowed
                  blocked
                }
                hasCustomThumbnail
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
            thumbnailDescription
            move
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
                }
                createdAt
                updatedAt
              }
              nextToken
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
                }
                nextToken
              }
              blogPosts {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                }
                nextToken
              }
              seriesType
              title
              description
              thumbnailDescription
              image
              squareImage {
                src
                alt
              }
              bannerImage {
                src
                alt
              }
              babyHeroImage {
                src
                alt
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
                }
                nextToken
              }
              createdAt
              updatedAt
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
                }
                createdAt
                updatedAt
              }
              nextToken
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
            }
            bannerImage {
              src
              alt
            }
            babyHeroImage {
              src
              alt
            }
            createdAt
            updatedAt
          }
          nextToken
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
                }
                nextToken
              }
              series {
                id
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
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
                }
                nextToken
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
              }
              bannerImage {
                src
                alt
              }
              babyHeroImage {
                src
                alt
              }
              createdAt
              updatedAt
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
                }
                nextToken
              }
              blogPosts {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                }
                nextToken
              }
              seriesType
              title
              description
              thumbnailDescription
              image
              squareImage {
                src
                alt
              }
              bannerImage {
                src
                alt
              }
              babyHeroImage {
                src
                alt
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
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        seriesType
        title
        description
        thumbnailDescription
        image
        squareImage {
          src
          alt
        }
        bannerImage {
          src
          alt
        }
        babyHeroImage {
          src
          alt
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
                }
                nextToken
              }
              blogPosts {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                }
                nextToken
              }
              seriesType
              title
              description
              thumbnailDescription
              image
              squareImage {
                src
                alt
              }
              bannerImage {
                src
                alt
              }
              babyHeroImage {
                src
                alt
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
                }
                nextToken
              }
              createdAt
              updatedAt
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
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
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
            }
          }
        }
      }
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
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            seriesType
            title
            description
            thumbnailDescription
            createdAt
            updatedAt
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
                }
                speakerVideosVideoId
                speaker {
                  id
                  name
                  image
                  hidden
                  createdAt
                  updatedAt
                }
                videoPublishedDate
                createdAt
                updatedAt
              }
              nextToken
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
                }
                nextToken
              }
              blogPosts {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                }
                nextToken
              }
              seriesType
              title
              description
              thumbnailDescription
              image
              squareImage {
                src
                alt
              }
              bannerImage {
                src
                alt
              }
              babyHeroImage {
                src
                alt
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
                }
                nextToken
              }
              createdAt
              updatedAt
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
                }
                createdAt
                updatedAt
              }
              nextToken
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
                }
                regionRestriction {
                  allowed
                  blocked
                }
                hasCustomThumbnail
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
            thumbnailDescription
            move
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      seriesType
      title
      description
      thumbnailDescription
      createdAt
      updatedAt
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
                }
                nextToken
              }
              seriesType
              title
              description
              thumbnailDescription
              createdAt
              updatedAt
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
                }
                nextToken
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
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
              }
              customPlaylistIDs
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                }
                nextToken
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
              thumbnailDescription
              move
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        seriesType
        title
        description
        thumbnailDescription
        createdAt
        updatedAt
      }
      nextToken
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
                }
                nextToken
              }
              seriesType
              title
              description
              thumbnailDescription
              createdAt
              updatedAt
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
                }
                nextToken
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
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
              }
              customPlaylistIDs
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                }
                nextToken
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
              thumbnailDescription
              move
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        seriesType
        title
        description
        thumbnailDescription
        createdAt
        updatedAt
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
            }
          }
        }
      }
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
                }
                speakerVideosVideoId
                speaker {
                  id
                  name
                  image
                  hidden
                  createdAt
                  updatedAt
                }
                videoPublishedDate
                createdAt
                updatedAt
              }
              nextToken
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
                }
                nextToken
              }
              blogPosts {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                }
                nextToken
              }
              seriesType
              title
              description
              thumbnailDescription
              image
              squareImage {
                src
                alt
              }
              bannerImage {
                src
                alt
              }
              babyHeroImage {
                src
                alt
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
                }
                nextToken
              }
              createdAt
              updatedAt
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
                }
                createdAt
                updatedAt
              }
              nextToken
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
                }
                regionRestriction {
                  allowed
                  blocked
                }
                hasCustomThumbnail
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
            thumbnailDescription
            move
            createdAt
            updatedAt
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
                }
                speakerVideosVideoId
                speaker {
                  id
                  name
                  image
                  hidden
                  createdAt
                  updatedAt
                }
                videoPublishedDate
                createdAt
                updatedAt
              }
              nextToken
            }
            hidden
            createdAt
            updatedAt
          }
          videoPublishedDate
          createdAt
          updatedAt
        }
        nextToken
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
                }
                speakerVideosVideoId
                speaker {
                  id
                  name
                  image
                  hidden
                  createdAt
                  updatedAt
                }
                videoPublishedDate
                createdAt
                updatedAt
              }
              nextToken
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
                }
                nextToken
              }
              blogPosts {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                }
                nextToken
              }
              seriesType
              title
              description
              thumbnailDescription
              image
              squareImage {
                src
                alt
              }
              bannerImage {
                src
                alt
              }
              babyHeroImage {
                src
                alt
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
                }
                nextToken
              }
              createdAt
              updatedAt
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
                }
                createdAt
                updatedAt
              }
              nextToken
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
                }
                regionRestriction {
                  allowed
                  blocked
                }
                hasCustomThumbnail
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
            thumbnailDescription
            move
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
                }
                createdAt
                updatedAt
              }
              nextToken
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
                }
                nextToken
              }
              blogPosts {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                }
                nextToken
              }
              seriesType
              title
              description
              thumbnailDescription
              image
              squareImage {
                src
                alt
              }
              bannerImage {
                src
                alt
              }
              babyHeroImage {
                src
                alt
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
                }
                nextToken
              }
              createdAt
              updatedAt
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
                }
                createdAt
                updatedAt
              }
              nextToken
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
            }
            bannerImage {
              src
              alt
            }
            babyHeroImage {
              src
              alt
            }
            createdAt
            updatedAt
          }
          nextToken
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
                }
                nextToken
              }
              series {
                id
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
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
                }
                nextToken
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
              }
              bannerImage {
                src
                alt
              }
              babyHeroImage {
                src
                alt
              }
              createdAt
              updatedAt
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
                }
                nextToken
              }
              blogPosts {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                }
                nextToken
              }
              seriesType
              title
              description
              thumbnailDescription
              image
              squareImage {
                src
                alt
              }
              bannerImage {
                src
                alt
              }
              babyHeroImage {
                src
                alt
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
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        seriesType
        title
        description
        thumbnailDescription
        image
        squareImage {
          src
          alt
        }
        bannerImage {
          src
          alt
        }
        babyHeroImage {
          src
          alt
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
                }
                nextToken
              }
              blogPosts {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                }
                nextToken
              }
              seriesType
              title
              description
              thumbnailDescription
              image
              squareImage {
                src
                alt
              }
              bannerImage {
                src
                alt
              }
              babyHeroImage {
                src
                alt
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
                }
                nextToken
              }
              createdAt
              updatedAt
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
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
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
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            seriesType
            title
            description
            thumbnailDescription
            createdAt
            updatedAt
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
                }
                speakerVideosVideoId
                speaker {
                  id
                  name
                  image
                  hidden
                  createdAt
                  updatedAt
                }
                videoPublishedDate
                createdAt
                updatedAt
              }
              nextToken
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
                }
                nextToken
              }
              blogPosts {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                }
                nextToken
              }
              seriesType
              title
              description
              thumbnailDescription
              image
              squareImage {
                src
                alt
              }
              bannerImage {
                src
                alt
              }
              babyHeroImage {
                src
                alt
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
                }
                nextToken
              }
              createdAt
              updatedAt
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
                }
                createdAt
                updatedAt
              }
              nextToken
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
                }
                regionRestriction {
                  allowed
                  blocked
                }
                hasCustomThumbnail
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
            thumbnailDescription
            move
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
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
          }
          regionRestriction {
            allowed
            blocked
          }
          hasCustomThumbnail
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
      thumbnailDescription
      move
      createdAt
      updatedAt
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
                }
                nextToken
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
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
              }
              customPlaylistIDs
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                }
                nextToken
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
              thumbnailDescription
              move
              createdAt
              updatedAt
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
                }
                nextToken
              }
              hidden
              createdAt
              updatedAt
            }
            videoPublishedDate
            createdAt
            updatedAt
          }
          nextToken
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
                }
                nextToken
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
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
              }
              customPlaylistIDs
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                }
                nextToken
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
              thumbnailDescription
              move
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
              videoSeries {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                }
                nextToken
              }
              series {
                id
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
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
                }
                nextToken
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
              }
              bannerImage {
                src
                alt
              }
              babyHeroImage {
                src
                alt
              }
              createdAt
              updatedAt
            }
            nextToken
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
                }
                blogSeriesId
                blogSeriesIndex
                blogSeries {
                  nextToken
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
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                createdAt
                updatedAt
              }
              videoSeries {
                id
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          seriesType
          title
          description
          thumbnailDescription
          image
          squareImage {
            src
            alt
          }
          bannerImage {
            src
            alt
          }
          babyHeroImage {
            src
            alt
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
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
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
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
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
                }
                nextToken
              }
              seriesType
              title
              description
              thumbnailDescription
              createdAt
              updatedAt
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
                }
                nextToken
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
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
              }
              customPlaylistIDs
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                }
                nextToken
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
              thumbnailDescription
              move
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
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
            }
            regionRestriction {
              allowed
              blocked
            }
            hasCustomThumbnail
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
        thumbnailDescription
        move
        createdAt
        updatedAt
      }
      nextToken
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
                }
                nextToken
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
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
              }
              customPlaylistIDs
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                }
                nextToken
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
              thumbnailDescription
              move
              createdAt
              updatedAt
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
                }
                nextToken
              }
              hidden
              createdAt
              updatedAt
            }
            videoPublishedDate
            createdAt
            updatedAt
          }
          nextToken
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
                }
                nextToken
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
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
              }
              customPlaylistIDs
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                }
                nextToken
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
              thumbnailDescription
              move
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
              videoSeries {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                }
                nextToken
              }
              series {
                id
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
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
                }
                nextToken
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
              }
              bannerImage {
                src
                alt
              }
              babyHeroImage {
                src
                alt
              }
              createdAt
              updatedAt
            }
            nextToken
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
                }
                blogSeriesId
                blogSeriesIndex
                blogSeries {
                  nextToken
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
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                createdAt
                updatedAt
              }
              videoSeries {
                id
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          seriesType
          title
          description
          thumbnailDescription
          image
          squareImage {
            src
            alt
          }
          bannerImage {
            src
            alt
          }
          babyHeroImage {
            src
            alt
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
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
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
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
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
                }
                nextToken
              }
              seriesType
              title
              description
              thumbnailDescription
              createdAt
              updatedAt
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
                }
                nextToken
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
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
              }
              customPlaylistIDs
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                }
                nextToken
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
              thumbnailDescription
              move
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
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
            }
            regionRestriction {
              allowed
              blocked
            }
            hasCustomThumbnail
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
        thumbnailDescription
        move
        createdAt
        updatedAt
      }
      nextToken
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
                }
                nextToken
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
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
              }
              customPlaylistIDs
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                }
                nextToken
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
              thumbnailDescription
              move
              createdAt
              updatedAt
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
                }
                nextToken
              }
              hidden
              createdAt
              updatedAt
            }
            videoPublishedDate
            createdAt
            updatedAt
          }
          nextToken
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
                }
                nextToken
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
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
              }
              customPlaylistIDs
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                }
                nextToken
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
              thumbnailDescription
              move
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
              videoSeries {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                }
                nextToken
              }
              series {
                id
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
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
                }
                nextToken
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
              }
              bannerImage {
                src
                alt
              }
              babyHeroImage {
                src
                alt
              }
              createdAt
              updatedAt
            }
            nextToken
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
                }
                blogSeriesId
                blogSeriesIndex
                blogSeries {
                  nextToken
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
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                createdAt
                updatedAt
              }
              videoSeries {
                id
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          seriesType
          title
          description
          thumbnailDescription
          image
          squareImage {
            src
            alt
          }
          bannerImage {
            src
            alt
          }
          babyHeroImage {
            src
            alt
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
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
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
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
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
                }
                nextToken
              }
              seriesType
              title
              description
              thumbnailDescription
              createdAt
              updatedAt
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
                }
                nextToken
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
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
              }
              customPlaylistIDs
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                }
                nextToken
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
              thumbnailDescription
              move
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
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
            }
            regionRestriction {
              allowed
              blocked
            }
            hasCustomThumbnail
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
        thumbnailDescription
        move
        createdAt
        updatedAt
      }
      nextToken
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
                }
                nextToken
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
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
              }
              customPlaylistIDs
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                }
                nextToken
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
              thumbnailDescription
              move
              createdAt
              updatedAt
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
                }
                nextToken
              }
              hidden
              createdAt
              updatedAt
            }
            videoPublishedDate
            createdAt
            updatedAt
          }
          nextToken
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
                }
                nextToken
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
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
              }
              customPlaylistIDs
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                }
                nextToken
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
              thumbnailDescription
              move
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
              videoSeries {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                }
                nextToken
              }
              series {
                id
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
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
                }
                nextToken
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
              }
              bannerImage {
                src
                alt
              }
              babyHeroImage {
                src
                alt
              }
              createdAt
              updatedAt
            }
            nextToken
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
                }
                blogSeriesId
                blogSeriesIndex
                blogSeries {
                  nextToken
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
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                createdAt
                updatedAt
              }
              videoSeries {
                id
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          seriesType
          title
          description
          thumbnailDescription
          image
          squareImage {
            src
            alt
          }
          bannerImage {
            src
            alt
          }
          babyHeroImage {
            src
            alt
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
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
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
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
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
                }
                nextToken
              }
              seriesType
              title
              description
              thumbnailDescription
              createdAt
              updatedAt
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
                }
                nextToken
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
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
              }
              customPlaylistIDs
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                }
                nextToken
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
              thumbnailDescription
              move
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
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
            }
            regionRestriction {
              allowed
              blocked
            }
            hasCustomThumbnail
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
        thumbnailDescription
        move
        createdAt
        updatedAt
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
            }
          }
        }
      }
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
                }
                createdAt
                updatedAt
              }
              nextToken
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
                }
                createdAt
                updatedAt
              }
              nextToken
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
                }
                nextToken
              }
              blogPosts {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                }
                nextToken
              }
              seriesType
              title
              description
              thumbnailDescription
              image
              squareImage {
                src
                alt
              }
              bannerImage {
                src
                alt
              }
              babyHeroImage {
                src
                alt
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
                }
                nextToken
              }
              createdAt
              updatedAt
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
                }
                createdAt
                updatedAt
              }
              nextToken
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
            }
            bannerImage {
              src
              alt
            }
            babyHeroImage {
              src
              alt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
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
                }
                nextToken
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
                }
                nextToken
              }
              series {
                id
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
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
                }
                nextToken
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
              }
              bannerImage {
                src
                alt
              }
              babyHeroImage {
                src
                alt
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
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
      }
      nextToken
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
                }
                nextToken
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
                }
                nextToken
              }
              series {
                id
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
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
                }
                nextToken
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
              }
              bannerImage {
                src
                alt
              }
              babyHeroImage {
                src
                alt
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
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
            }
          }
        }
      }
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
                }
                blogSeriesId
                blogSeriesIndex
                blogSeries {
                  nextToken
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
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
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
                }
                blogSeriesId
                blogSeriesIndex
                blogSeries {
                  nextToken
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
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                createdAt
                updatedAt
              }
              videoSeries {
                id
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
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
                }
                customPlaylistIDs
                customPlaylists {
                  nextToken
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
                }
                videoTypes
                notesURL
                videoURL
                audioURL
                thumbnailDescription
                move
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
                videoSeries {
                  nextToken
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
                }
                blogSeriesId
                blogSeriesIndex
                blogSeries {
                  nextToken
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
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                createdAt
                updatedAt
              }
              nextToken
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
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            seriesType
            title
            description
            thumbnailDescription
            image
            squareImage {
              src
              alt
            }
            bannerImage {
              src
              alt
            }
            babyHeroImage {
              src
              alt
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
                }
                pdf
                topics
                tags
                verses {
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
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
                }
                blogSeriesId
                blogSeriesIndex
                blogSeries {
                  nextToken
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
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
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
          }
          bannerImage {
            src
            alt
          }
          babyHeroImage {
            src
            alt
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
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
                }
                blogSeriesId
                blogSeriesIndex
                blogSeries {
                  nextToken
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
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
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
                }
                blogSeriesId
                blogSeriesIndex
                blogSeries {
                  nextToken
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
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                createdAt
                updatedAt
              }
              videoSeries {
                id
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
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
                }
                customPlaylistIDs
                customPlaylists {
                  nextToken
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
                }
                videoTypes
                notesURL
                videoURL
                audioURL
                thumbnailDescription
                move
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
                videoSeries {
                  nextToken
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
                }
                blogSeriesId
                blogSeriesIndex
                blogSeries {
                  nextToken
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
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                createdAt
                updatedAt
              }
              nextToken
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
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            seriesType
            title
            description
            thumbnailDescription
            image
            squareImage {
              src
              alt
            }
            bannerImage {
              src
              alt
            }
            babyHeroImage {
              src
              alt
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
                }
                pdf
                topics
                tags
                verses {
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
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
                }
                blogSeriesId
                blogSeriesIndex
                blogSeries {
                  nextToken
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
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
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
          }
          bannerImage {
            src
            alt
          }
          babyHeroImage {
            src
            alt
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
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
                }
                createdAt
                updatedAt
              }
              nextToken
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
                }
                nextToken
              }
              blogPosts {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                }
                nextToken
              }
              seriesType
              title
              description
              thumbnailDescription
              image
              squareImage {
                src
                alt
              }
              bannerImage {
                src
                alt
              }
              babyHeroImage {
                src
                alt
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
                }
                nextToken
              }
              createdAt
              updatedAt
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
                }
                createdAt
                updatedAt
              }
              nextToken
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
            }
            bannerImage {
              src
              alt
            }
            babyHeroImage {
              src
              alt
            }
            createdAt
            updatedAt
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
                }
                customPlaylistIDs
                customPlaylists {
                  nextToken
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
                }
                videoTypes
                notesURL
                videoURL
                audioURL
                thumbnailDescription
                move
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
                videoSeries {
                  nextToken
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
                }
                blogSeriesId
                blogSeriesIndex
                blogSeries {
                  nextToken
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
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                createdAt
                updatedAt
              }
              nextToken
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
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            seriesType
            title
            description
            thumbnailDescription
            image
            squareImage {
              src
              alt
            }
            bannerImage {
              src
              alt
            }
            babyHeroImage {
              src
              alt
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
                }
                pdf
                topics
                tags
                verses {
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
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
                }
                speakerVideosVideoId
                speaker {
                  id
                  name
                  image
                  hidden
                  createdAt
                  updatedAt
                }
                videoPublishedDate
                createdAt
                updatedAt
              }
              nextToken
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
                }
                nextToken
              }
              blogPosts {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                }
                nextToken
              }
              seriesType
              title
              description
              thumbnailDescription
              image
              squareImage {
                src
                alt
              }
              bannerImage {
                src
                alt
              }
              babyHeroImage {
                src
                alt
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
                }
                nextToken
              }
              createdAt
              updatedAt
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
                }
                createdAt
                updatedAt
              }
              nextToken
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
                }
                regionRestriction {
                  allowed
                  blocked
                }
                hasCustomThumbnail
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
            thumbnailDescription
            move
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
                }
                createdAt
                updatedAt
              }
              nextToken
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
                }
                nextToken
              }
              blogPosts {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                }
                nextToken
              }
              seriesType
              title
              description
              thumbnailDescription
              image
              squareImage {
                src
                alt
              }
              bannerImage {
                src
                alt
              }
              babyHeroImage {
                src
                alt
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
                }
                nextToken
              }
              createdAt
              updatedAt
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
                }
                createdAt
                updatedAt
              }
              nextToken
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
            }
            bannerImage {
              src
              alt
            }
            babyHeroImage {
              src
              alt
            }
            createdAt
            updatedAt
          }
          nextToken
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
                }
                nextToken
              }
              series {
                id
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
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
                }
                nextToken
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
              }
              bannerImage {
                src
                alt
              }
              babyHeroImage {
                src
                alt
              }
              createdAt
              updatedAt
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
                }
                nextToken
              }
              blogPosts {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                }
                nextToken
              }
              seriesType
              title
              description
              thumbnailDescription
              image
              squareImage {
                src
                alt
              }
              bannerImage {
                src
                alt
              }
              babyHeroImage {
                src
                alt
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
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        seriesType
        title
        description
        thumbnailDescription
        image
        squareImage {
          src
          alt
        }
        bannerImage {
          src
          alt
        }
        babyHeroImage {
          src
          alt
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
                }
                nextToken
              }
              blogPosts {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                }
                nextToken
              }
              seriesType
              title
              description
              thumbnailDescription
              image
              squareImage {
                src
                alt
              }
              bannerImage {
                src
                alt
              }
              babyHeroImage {
                src
                alt
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
                }
                nextToken
              }
              createdAt
              updatedAt
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
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
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
                }
                createdAt
                updatedAt
              }
              nextToken
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
                }
                createdAt
                updatedAt
              }
              nextToken
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
                }
                nextToken
              }
              blogPosts {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                }
                nextToken
              }
              seriesType
              title
              description
              thumbnailDescription
              image
              squareImage {
                src
                alt
              }
              bannerImage {
                src
                alt
              }
              babyHeroImage {
                src
                alt
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
                }
                nextToken
              }
              createdAt
              updatedAt
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
                }
                createdAt
                updatedAt
              }
              nextToken
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
            }
            bannerImage {
              src
              alt
            }
            babyHeroImage {
              src
              alt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
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
      }
      bannerImage {
        src
        alt
      }
      babyHeroImage {
        src
        alt
      }
      createdAt
      updatedAt
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
                }
                nextToken
              }
              series {
                id
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
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
                }
                nextToken
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
              }
              bannerImage {
                src
                alt
              }
              babyHeroImage {
                src
                alt
              }
              createdAt
              updatedAt
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
                }
                nextToken
              }
              blogPosts {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                }
                nextToken
              }
              seriesType
              title
              description
              thumbnailDescription
              image
              squareImage {
                src
                alt
              }
              bannerImage {
                src
                alt
              }
              babyHeroImage {
                src
                alt
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
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
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
                }
                nextToken
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
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
              }
              customPlaylistIDs
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                }
                nextToken
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
              thumbnailDescription
              move
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
              videoSeries {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                }
                nextToken
              }
              series {
                id
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
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
                }
                nextToken
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
              }
              bannerImage {
                src
                alt
              }
              babyHeroImage {
                src
                alt
              }
              createdAt
              updatedAt
            }
            nextToken
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
                }
                blogSeriesId
                blogSeriesIndex
                blogSeries {
                  nextToken
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
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                createdAt
                updatedAt
              }
              videoSeries {
                id
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          seriesType
          title
          description
          thumbnailDescription
          image
          squareImage {
            src
            alt
          }
          bannerImage {
            src
            alt
          }
          babyHeroImage {
            src
            alt
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
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
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
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
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
                }
                nextToken
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
                }
                nextToken
              }
              series {
                id
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
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
                }
                nextToken
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
              }
              bannerImage {
                src
                alt
              }
              babyHeroImage {
                src
                alt
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
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
        }
        bannerImage {
          src
          alt
        }
        babyHeroImage {
          src
          alt
        }
        createdAt
        updatedAt
      }
      nextToken
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
                }
                nextToken
              }
              series {
                id
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
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
                }
                nextToken
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
              }
              bannerImage {
                src
                alt
              }
              babyHeroImage {
                src
                alt
              }
              createdAt
              updatedAt
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
                }
                nextToken
              }
              blogPosts {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                }
                nextToken
              }
              seriesType
              title
              description
              thumbnailDescription
              image
              squareImage {
                src
                alt
              }
              bannerImage {
                src
                alt
              }
              babyHeroImage {
                src
                alt
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
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
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
                }
                nextToken
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
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
              }
              customPlaylistIDs
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                }
                nextToken
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
              thumbnailDescription
              move
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
              videoSeries {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                }
                nextToken
              }
              series {
                id
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
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
                }
                nextToken
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
              }
              bannerImage {
                src
                alt
              }
              babyHeroImage {
                src
                alt
              }
              createdAt
              updatedAt
            }
            nextToken
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
                }
                blogSeriesId
                blogSeriesIndex
                blogSeries {
                  nextToken
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
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                createdAt
                updatedAt
              }
              videoSeries {
                id
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          seriesType
          title
          description
          thumbnailDescription
          image
          squareImage {
            src
            alt
          }
          bannerImage {
            src
            alt
          }
          babyHeroImage {
            src
            alt
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
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
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
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
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
                }
                nextToken
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
                }
                nextToken
              }
              series {
                id
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
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
                }
                nextToken
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
              }
              bannerImage {
                src
                alt
              }
              babyHeroImage {
                src
                alt
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
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
        }
        bannerImage {
          src
          alt
        }
        babyHeroImage {
          src
          alt
        }
        createdAt
        updatedAt
      }
      nextToken
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
                }
                nextToken
              }
              series {
                id
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
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
                }
                nextToken
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
              }
              bannerImage {
                src
                alt
              }
              babyHeroImage {
                src
                alt
              }
              createdAt
              updatedAt
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
                }
                nextToken
              }
              blogPosts {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                }
                nextToken
              }
              seriesType
              title
              description
              thumbnailDescription
              image
              squareImage {
                src
                alt
              }
              bannerImage {
                src
                alt
              }
              babyHeroImage {
                src
                alt
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
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
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
                }
                nextToken
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
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
              }
              customPlaylistIDs
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                }
                nextToken
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
              thumbnailDescription
              move
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
              videoSeries {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                }
                nextToken
              }
              series {
                id
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
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
                }
                nextToken
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
              }
              bannerImage {
                src
                alt
              }
              babyHeroImage {
                src
                alt
              }
              createdAt
              updatedAt
            }
            nextToken
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
                }
                blogSeriesId
                blogSeriesIndex
                blogSeries {
                  nextToken
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
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                createdAt
                updatedAt
              }
              videoSeries {
                id
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          seriesType
          title
          description
          thumbnailDescription
          image
          squareImage {
            src
            alt
          }
          bannerImage {
            src
            alt
          }
          babyHeroImage {
            src
            alt
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
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
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
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
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
                }
                nextToken
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
                }
                nextToken
              }
              series {
                id
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
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
                }
                nextToken
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
              }
              bannerImage {
                src
                alt
              }
              babyHeroImage {
                src
                alt
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
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
        }
        bannerImage {
          src
          alt
        }
        babyHeroImage {
          src
          alt
        }
        createdAt
        updatedAt
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
            }
          }
        }
      }
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
      }
      altText
      timestamp
      createdAt
      updatedAt
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
        }
        altText
        timestamp
        createdAt
        updatedAt
      }
      nextToken
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
        }
        altText
        timestamp
        createdAt
        updatedAt
      }
      nextToken
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
                }
                nextToken
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
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
              }
              customPlaylistIDs
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                }
                nextToken
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
              thumbnailDescription
              move
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
              videoSeries {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                }
                nextToken
              }
              series {
                id
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
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
                }
                nextToken
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
              }
              bannerImage {
                src
                alt
              }
              babyHeroImage {
                src
                alt
              }
              createdAt
              updatedAt
            }
            nextToken
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
                }
                blogSeriesId
                blogSeriesIndex
                blogSeries {
                  nextToken
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
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                createdAt
                updatedAt
              }
              videoSeries {
                id
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          seriesType
          title
          description
          thumbnailDescription
          image
          squareImage {
            src
            alt
          }
          bannerImage {
            src
            alt
          }
          babyHeroImage {
            src
            alt
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
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
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
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
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
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
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
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
                }
                customPlaylistIDs
                customPlaylists {
                  nextToken
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
                }
                videoTypes
                notesURL
                videoURL
                audioURL
                thumbnailDescription
                move
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
                videoSeries {
                  nextToken
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
                }
                blogSeriesId
                blogSeriesIndex
                blogSeries {
                  nextToken
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
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                createdAt
                updatedAt
              }
              nextToken
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
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            seriesType
            title
            description
            thumbnailDescription
            image
            squareImage {
              src
              alt
            }
            bannerImage {
              src
              alt
            }
            babyHeroImage {
              src
              alt
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
                }
                pdf
                topics
                tags
                verses {
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
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
                }
                pdf
                topics
                tags
                verses {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
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
                }
                speakerVideosVideoId
                speaker {
                  id
                  name
                  image
                  hidden
                  createdAt
                  updatedAt
                }
                videoPublishedDate
                createdAt
                updatedAt
              }
              nextToken
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
                }
                nextToken
              }
              blogPosts {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                }
                nextToken
              }
              seriesType
              title
              description
              thumbnailDescription
              image
              squareImage {
                src
                alt
              }
              bannerImage {
                src
                alt
              }
              babyHeroImage {
                src
                alt
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
                }
                nextToken
              }
              createdAt
              updatedAt
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
                }
                createdAt
                updatedAt
              }
              nextToken
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
                }
                regionRestriction {
                  allowed
                  blocked
                }
                hasCustomThumbnail
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
            thumbnailDescription
            move
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
                }
                createdAt
                updatedAt
              }
              nextToken
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
                }
                nextToken
              }
              blogPosts {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                }
                nextToken
              }
              seriesType
              title
              description
              thumbnailDescription
              image
              squareImage {
                src
                alt
              }
              bannerImage {
                src
                alt
              }
              babyHeroImage {
                src
                alt
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
                }
                nextToken
              }
              createdAt
              updatedAt
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
                }
                createdAt
                updatedAt
              }
              nextToken
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
            }
            bannerImage {
              src
              alt
            }
            babyHeroImage {
              src
              alt
            }
            createdAt
            updatedAt
          }
          nextToken
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
                }
                nextToken
              }
              series {
                id
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
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
                }
                nextToken
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
              }
              bannerImage {
                src
                alt
              }
              babyHeroImage {
                src
                alt
              }
              createdAt
              updatedAt
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
                }
                nextToken
              }
              blogPosts {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                }
                nextToken
              }
              seriesType
              title
              description
              thumbnailDescription
              image
              squareImage {
                src
                alt
              }
              bannerImage {
                src
                alt
              }
              babyHeroImage {
                src
                alt
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
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        seriesType
        title
        description
        thumbnailDescription
        image
        squareImage {
          src
          alt
        }
        bannerImage {
          src
          alt
        }
        babyHeroImage {
          src
          alt
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
                }
                nextToken
              }
              blogPosts {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                }
                nextToken
              }
              seriesType
              title
              description
              thumbnailDescription
              image
              squareImage {
                src
                alt
              }
              bannerImage {
                src
                alt
              }
              babyHeroImage {
                src
                alt
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
                }
                nextToken
              }
              createdAt
              updatedAt
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
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
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
                }
                nextToken
              }
              blogPosts {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                }
                nextToken
              }
              seriesType
              title
              description
              thumbnailDescription
              image
              squareImage {
                src
                alt
              }
              bannerImage {
                src
                alt
              }
              babyHeroImage {
                src
                alt
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
                }
                nextToken
              }
              createdAt
              updatedAt
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
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
                }
                nextToken
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
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
              }
              customPlaylistIDs
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                }
                nextToken
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
              thumbnailDescription
              move
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
              videoSeries {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                }
                nextToken
              }
              series {
                id
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
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
                }
                nextToken
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
              }
              bannerImage {
                src
                alt
              }
              babyHeroImage {
                src
                alt
              }
              createdAt
              updatedAt
            }
            nextToken
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
                }
                blogSeriesId
                blogSeriesIndex
                blogSeries {
                  nextToken
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
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                createdAt
                updatedAt
              }
              videoSeries {
                id
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          seriesType
          title
          description
          thumbnailDescription
          image
          squareImage {
            src
            alt
          }
          bannerImage {
            src
            alt
          }
          babyHeroImage {
            src
            alt
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
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
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
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
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
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
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
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
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
                }
                nextToken
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
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
              }
              customPlaylistIDs
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                }
                nextToken
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
              thumbnailDescription
              move
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
              videoSeries {
                items {
                  id
                  videoSeriesId
                  blogId
                  createdAt
                  updatedAt
                }
                nextToken
              }
              series {
                id
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
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
                }
                nextToken
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
              }
              bannerImage {
                src
                alt
              }
              babyHeroImage {
                src
                alt
              }
              createdAt
              updatedAt
            }
            nextToken
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
                }
                blogSeriesId
                blogSeriesIndex
                blogSeries {
                  nextToken
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
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                createdAt
                updatedAt
              }
              videoSeries {
                id
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          seriesType
          title
          description
          thumbnailDescription
          image
          squareImage {
            src
            alt
          }
          bannerImage {
            src
            alt
          }
          babyHeroImage {
            src
            alt
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
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
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
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
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
                }
                blogs {
                  nextToken
                }
                blogPosts {
                  nextToken
                }
                seriesType
                title
                description
                thumbnailDescription
                image
                squareImage {
                  src
                  alt
                }
                bannerImage {
                  src
                  alt
                }
                babyHeroImage {
                  src
                  alt
                }
                startDate
                endDate
                notes {
                  nextToken
                }
                createdAt
                updatedAt
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
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
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
            }
          }
        }
      }
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
      }
      nextToken
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
      }
      nextToken
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
            }
          }
        }
      }
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
        }
        content {
          type
          style
          image1 {
            src
            alt
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
          }
          showLocationSearch
        }
      }
      createdAt
      updatedAt
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
          }
          content {
            type
            style
            image1 {
              src
              alt
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
            }
            showLocationSearch
          }
        }
        createdAt
        updatedAt
      }
      nextToken
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
          }
          content {
            type
            style
            image1 {
              src
              alt
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
            }
            showLocationSearch
          }
        }
        createdAt
        updatedAt
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
            }
          }
        }
      }
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
      }
      profileImage {
        userId
        filenameSmall
        filenameMedium
        filenameLarge
        filenameUpload
      }
      joined
      f1PersonId
      f1HouseholdId
      createdAt
      updatedAt
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
        }
        profileImage {
          userId
          filenameSmall
          filenameMedium
          filenameLarge
          filenameUpload
        }
        joined
        f1PersonId
        f1HouseholdId
        createdAt
        updatedAt
      }
      nextToken
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
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
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
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            position
            isTeacher
            isStaff
            isCoordinator
            isOverseer
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
                }
                nextToken
              }
              createdAt
              updatedAt
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
                }
                nextToken
              }
              position
              isTeacher
              isStaff
              isCoordinator
              isOverseer
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
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
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
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
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            position
            isTeacher
            isStaff
            isCoordinator
            isOverseer
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      position
      isTeacher
      isStaff
      isCoordinator
      isOverseer
      createdAt
      updatedAt
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
                }
                nextToken
              }
              createdAt
              updatedAt
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
                }
                nextToken
              }
              position
              isTeacher
              isStaff
              isCoordinator
              isOverseer
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        position
        isTeacher
        isStaff
        isCoordinator
        isOverseer
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const tMHPersonByIsTeacher = /* GraphQL */ `
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
                }
                nextToken
              }
              createdAt
              updatedAt
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
                }
                nextToken
              }
              position
              isTeacher
              isStaff
              isCoordinator
              isOverseer
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        position
        isTeacher
        isStaff
        isCoordinator
        isOverseer
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const tMHPersonByIsStaff = /* GraphQL */ `
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
                }
                nextToken
              }
              createdAt
              updatedAt
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
                }
                nextToken
              }
              position
              isTeacher
              isStaff
              isCoordinator
              isOverseer
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        position
        isTeacher
        isStaff
        isCoordinator
        isOverseer
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const tMHPersonByIsCoordinator = /* GraphQL */ `
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
                }
                nextToken
              }
              createdAt
              updatedAt
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
                }
                nextToken
              }
              position
              isTeacher
              isStaff
              isCoordinator
              isOverseer
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        position
        isTeacher
        isStaff
        isCoordinator
        isOverseer
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const tMHPersonByIsOverseer = /* GraphQL */ `
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
                }
                nextToken
              }
              createdAt
              updatedAt
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
                }
                nextToken
              }
              position
              isTeacher
              isStaff
              isCoordinator
              isOverseer
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        position
        isTeacher
        isStaff
        isCoordinator
        isOverseer
        createdAt
        updatedAt
      }
      nextToken
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
                }
                nextToken
              }
              createdAt
              updatedAt
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
                }
                nextToken
              }
              position
              isTeacher
              isStaff
              isCoordinator
              isOverseer
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        position
        isTeacher
        isStaff
        isCoordinator
        isOverseer
        createdAt
        updatedAt
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
            }
          }
        }
      }
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
        }
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
        }
        time
        facebookLink
        instagramLink
        contact {
          name
          email
          phone
          extension
        }
      }
      socials {
        facebook {
          name
          pageId
          link
        }
        instagram {
          name
          username
          pageId
          link
        }
        discord
        twitter
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
                }
                nextToken
              }
              createdAt
              updatedAt
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
                }
                nextToken
              }
              position
              isTeacher
              isStaff
              isCoordinator
              isOverseer
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        position
        isTeacher
        isStaff
        isCoordinator
        isOverseer
        createdAt
        updatedAt
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
                }
                nextToken
              }
              createdAt
              updatedAt
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
                }
                nextToken
              }
              position
              isTeacher
              isStaff
              isCoordinator
              isOverseer
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        position
        isTeacher
        isStaff
        isCoordinator
        isOverseer
        createdAt
        updatedAt
      }
      showInLocationMap
      showInLocationList
      locationType
      createdAt
      updatedAt
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
          }
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
          }
          time
          facebookLink
          instagramLink
          contact {
            name
            email
            phone
            extension
          }
        }
        socials {
          facebook {
            name
            pageId
            link
          }
          instagram {
            name
            username
            pageId
            link
          }
          discord
          twitter
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
                }
                createdAt
                updatedAt
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
                }
                position
                isTeacher
                isStaff
                isCoordinator
                isOverseer
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          position
          isTeacher
          isStaff
          isCoordinator
          isOverseer
          createdAt
          updatedAt
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
                }
                createdAt
                updatedAt
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
                }
                position
                isTeacher
                isStaff
                isCoordinator
                isOverseer
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          position
          isTeacher
          isStaff
          isCoordinator
          isOverseer
          createdAt
          updatedAt
        }
        showInLocationMap
        showInLocationList
        locationType
        createdAt
        updatedAt
      }
      nextToken
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
                }
                nextToken
              }
              createdAt
              updatedAt
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
                }
                nextToken
              }
              position
              isTeacher
              isStaff
              isCoordinator
              isOverseer
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
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
                }
                nextToken
              }
              createdAt
              updatedAt
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
                }
                nextToken
              }
              position
              isTeacher
              isStaff
              isCoordinator
              isOverseer
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        position
        isTeacher
        isStaff
        isCoordinator
        isOverseer
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
                }
                createdAt
                updatedAt
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
                }
                position
                isTeacher
                isStaff
                isCoordinator
                isOverseer
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
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
                }
                createdAt
                updatedAt
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
                }
                position
                isTeacher
                isStaff
                isCoordinator
                isOverseer
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          position
          isTeacher
          isStaff
          isCoordinator
          isOverseer
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
