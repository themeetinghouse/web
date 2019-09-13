// tslint:disable
// this is an auto generated file. This will be overwritten

export const getYoutubePlaylistItems = `query GetYoutubePlaylistItems($playlistId: String) {
  getYoutubePlaylistItems(playlistId: $playlistId) {
    kind
    etag
    pageInfo {
      totalResults
      resultsPerPage
    }
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
      }
    }
  }
}
`;
export const getYoutubePlaylist = `query GetYoutubePlaylist($nextPageToken: String) {
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
export const getYoutubeCaptionlist = `query GetYoutubeCaptionlist($videoId: String) {
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
export const downloadYoutubeCaption = `query DownloadYoutubeCaption(
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
export const getTakenoteSeries = `query GetTakenoteSeries($user: Int, $start: Int, $count: Int) {
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
export const getTakenoteSermon = `query GetTakenoteSermon($seriesId: String, $user: Int) {
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
export const getTakenoteSermonVerses = `query GetTakenoteSermonVerses($sermondId: String) {
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
export const getTakenoteLocations = `query GetTakenoteLocations {
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
export const getTakenoteNotes = `query GetTakenoteNotes($sermonId: String, $noteType: String) {
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
export const f1ListGroupTypes = `query F1ListGroupTypes {
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
export const f1ListGroups = `query F1ListGroups($itemId: String) {
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
        gender {
          name
        }
        maritalStatus {
          name
        }
        startAgeRange
        endAgeRange
      }
    }
  }
}
`;
export const getTnSeries = `query GetTnSeries($id: ID!) {
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
              }
              sermonNoteCount
              quoteNoteCount
              homeChurchNoteCount
              sermonCommentCount
            }
            nextToken
          }
        }
        sermonNoteCount
        quoteNoteCount
        homeChurchNoteCount
        sermonCommentCount
      }
      nextToken
    }
  }
}
`;
export const listTnSeriess = `query ListTnSeriess(
  $id: ID
  $filter: ModelTNSeriesFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listTNSeriess(
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
              items {
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
              }
              nextToken
            }
          }
          sermonNoteCount
          quoteNoteCount
          homeChurchNoteCount
          sermonCommentCount
        }
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getTnSermon = `query GetTnSermon($id: ID!) {
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
              items {
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
              }
              nextToken
            }
          }
          sermonNoteCount
          quoteNoteCount
          homeChurchNoteCount
          sermonCommentCount
        }
        nextToken
      }
    }
    sermonNoteCount
    quoteNoteCount
    homeChurchNoteCount
    sermonCommentCount
  }
}
`;
export const listTnSermons = `query ListTnSermons(
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
                nextToken
              }
            }
            sermonNoteCount
            quoteNoteCount
            homeChurchNoteCount
            sermonCommentCount
          }
          nextToken
        }
      }
      sermonNoteCount
      quoteNoteCount
      homeChurchNoteCount
      sermonCommentCount
    }
    nextToken
  }
}
`;
export const getResource = `query GetResource($id: ID!) {
  getResource(id: $id) {
    id
  }
}
`;
export const listResources = `query ListResources(
  $filter: ModelResourceFilterInput
  $limit: Int
  $nextToken: String
) {
  listResources(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
    }
    nextToken
  }
}
`;
export const getSpeaker = `query GetSpeaker($id: ID!) {
  getSpeaker(id: $id) {
    id
    name
    image
    videos {
      items {
        id
        video {
          id
          createdBy
          createdDate
          locations {
            id
            url
            site_name
            directions
            welcome
            welcome_img
            welcome_vid_youtube
            phone
            email
            instagram
            twitter
            facebook
            location {
              longitude
              latitude
              address
            }
            visible
          }
          speakers {
            items {
              id
              video {
                id
                createdBy
                createdDate
                episodeTitle
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
              }
              speaker {
                id
                name
                image
              }
            }
            nextToken
          }
          episodeTitle
          episodeNumber
          seriesTitle
          series {
            id
            videos {
              items {
                id
                createdBy
                createdDate
                episodeTitle
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
              }
              nextToken
            }
            title
            description
            image
            startDate
            endDate
          }
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
            }
          }
          videoTypes
        }
        speaker {
          id
          name
          image
          videos {
            items {
              id
              video {
                id
                createdBy
                createdDate
                episodeTitle
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
              }
              speaker {
                id
                name
                image
              }
            }
            nextToken
          }
        }
      }
      nextToken
    }
  }
}
`;
export const listSpeakers = `query ListSpeakers(
  $filter: ModelSpeakerFilterInput
  $limit: Int
  $nextToken: String
) {
  listSpeakers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      image
      videos {
        items {
          id
          video {
            id
            createdBy
            createdDate
            locations {
              id
              url
              site_name
              directions
              welcome
              welcome_img
              welcome_vid_youtube
              phone
              email
              instagram
              twitter
              facebook
              location {
                longitude
                latitude
                address
              }
              visible
            }
            speakers {
              items {
                id
              }
              nextToken
            }
            episodeTitle
            episodeNumber
            seriesTitle
            series {
              id
              videos {
                nextToken
              }
              title
              description
              image
              startDate
              endDate
            }
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
                channelId
                title
                description
                channelTitle
              }
              contentDetails {
                videoId
                videoPublishedAt
              }
            }
            videoTypes
          }
          speaker {
            id
            name
            image
            videos {
              items {
                id
              }
              nextToken
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
export const getSpeakerVideos = `query GetSpeakerVideos($id: ID!) {
  getSpeakerVideos(id: $id) {
    id
    video {
      id
      createdBy
      createdDate
      locations {
        id
        url
        site_name
        directions
        welcome
        welcome_img
        welcome_vid_youtube
        phone
        email
        instagram
        twitter
        facebook
        location {
          longitude
          latitude
          address
        }
        visible
      }
      speakers {
        items {
          id
          video {
            id
            createdBy
            createdDate
            locations {
              id
              url
              site_name
              directions
              welcome
              welcome_img
              welcome_vid_youtube
              phone
              email
              instagram
              twitter
              facebook
              location {
                longitude
                latitude
                address
              }
              visible
            }
            speakers {
              items {
                id
              }
              nextToken
            }
            episodeTitle
            episodeNumber
            seriesTitle
            series {
              id
              videos {
                nextToken
              }
              title
              description
              image
              startDate
              endDate
            }
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
                channelId
                title
                description
                channelTitle
              }
              contentDetails {
                videoId
                videoPublishedAt
              }
            }
            videoTypes
          }
          speaker {
            id
            name
            image
            videos {
              items {
                id
              }
              nextToken
            }
          }
        }
        nextToken
      }
      episodeTitle
      episodeNumber
      seriesTitle
      series {
        id
        videos {
          items {
            id
            createdBy
            createdDate
            locations {
              id
              url
              site_name
              directions
              welcome
              welcome_img
              welcome_vid_youtube
              phone
              email
              instagram
              twitter
              facebook
              location {
                longitude
                latitude
                address
              }
              visible
            }
            speakers {
              items {
                id
              }
              nextToken
            }
            episodeTitle
            episodeNumber
            seriesTitle
            series {
              id
              videos {
                nextToken
              }
              title
              description
              image
              startDate
              endDate
            }
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
                channelId
                title
                description
                channelTitle
              }
              contentDetails {
                videoId
                videoPublishedAt
              }
            }
            videoTypes
          }
          nextToken
        }
        title
        description
        image
        startDate
        endDate
      }
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
        }
      }
      videoTypes
    }
    speaker {
      id
      name
      image
      videos {
        items {
          id
          video {
            id
            createdBy
            createdDate
            locations {
              id
              url
              site_name
              directions
              welcome
              welcome_img
              welcome_vid_youtube
              phone
              email
              instagram
              twitter
              facebook
              location {
                longitude
                latitude
                address
              }
              visible
            }
            speakers {
              items {
                id
              }
              nextToken
            }
            episodeTitle
            episodeNumber
            seriesTitle
            series {
              id
              videos {
                nextToken
              }
              title
              description
              image
              startDate
              endDate
            }
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
                channelId
                title
                description
                channelTitle
              }
              contentDetails {
                videoId
                videoPublishedAt
              }
            }
            videoTypes
          }
          speaker {
            id
            name
            image
            videos {
              items {
                id
              }
              nextToken
            }
          }
        }
        nextToken
      }
    }
  }
}
`;
export const listSpeakerVideoss = `query ListSpeakerVideoss(
  $filter: ModelSpeakerVideosFilterInput
  $limit: Int
  $nextToken: String
) {
  listSpeakerVideoss(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      video {
        id
        createdBy
        createdDate
        locations {
          id
          url
          site_name
          directions
          welcome
          welcome_img
          welcome_vid_youtube
          phone
          email
          instagram
          twitter
          facebook
          location {
            longitude
            latitude
            address
          }
          visible
        }
        speakers {
          items {
            id
            video {
              id
              createdBy
              createdDate
              locations {
                id
                url
                site_name
                directions
                welcome
                welcome_img
                welcome_vid_youtube
                phone
                email
                instagram
                twitter
                facebook
                visible
              }
              speakers {
                nextToken
              }
              episodeTitle
              episodeNumber
              seriesTitle
              series {
                id
                title
                description
                image
                startDate
                endDate
              }
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
              }
              videoTypes
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
        episodeNumber
        seriesTitle
        series {
          id
          videos {
            items {
              id
              createdBy
              createdDate
              locations {
                id
                url
                site_name
                directions
                welcome
                welcome_img
                welcome_vid_youtube
                phone
                email
                instagram
                twitter
                facebook
                visible
              }
              speakers {
                nextToken
              }
              episodeTitle
              episodeNumber
              seriesTitle
              series {
                id
                title
                description
                image
                startDate
                endDate
              }
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
              }
              videoTypes
            }
            nextToken
          }
          title
          description
          image
          startDate
          endDate
        }
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
          }
        }
        videoTypes
      }
      speaker {
        id
        name
        image
        videos {
          items {
            id
            video {
              id
              createdBy
              createdDate
              locations {
                id
                url
                site_name
                directions
                welcome
                welcome_img
                welcome_vid_youtube
                phone
                email
                instagram
                twitter
                facebook
                visible
              }
              speakers {
                nextToken
              }
              episodeTitle
              episodeNumber
              seriesTitle
              series {
                id
                title
                description
                image
                startDate
                endDate
              }
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
              }
              videoTypes
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
      }
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
        locations {
          id
          url
          site_name
          directions
          welcome
          welcome_img
          welcome_vid_youtube
          phone
          email
          instagram
          twitter
          facebook
          location {
            longitude
            latitude
            address
          }
          visible
        }
        speakers {
          items {
            id
            video {
              id
              createdBy
              createdDate
              locations {
                id
                url
                site_name
                directions
                welcome
                welcome_img
                welcome_vid_youtube
                phone
                email
                instagram
                twitter
                facebook
                visible
              }
              speakers {
                nextToken
              }
              episodeTitle
              episodeNumber
              seriesTitle
              series {
                id
                title
                description
                image
                startDate
                endDate
              }
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
              }
              videoTypes
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
        episodeNumber
        seriesTitle
        series {
          id
          videos {
            items {
              id
              createdBy
              createdDate
              locations {
                id
                url
                site_name
                directions
                welcome
                welcome_img
                welcome_vid_youtube
                phone
                email
                instagram
                twitter
                facebook
                visible
              }
              speakers {
                nextToken
              }
              episodeTitle
              episodeNumber
              seriesTitle
              series {
                id
                title
                description
                image
                startDate
                endDate
              }
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
              }
              videoTypes
            }
            nextToken
          }
          title
          description
          image
          startDate
          endDate
        }
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
          }
        }
        videoTypes
      }
      nextToken
    }
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
      videos {
        items {
          id
          createdBy
          createdDate
          locations {
            id
            url
            site_name
            directions
            welcome
            welcome_img
            welcome_vid_youtube
            phone
            email
            instagram
            twitter
            facebook
            location {
              longitude
              latitude
              address
            }
            visible
          }
          speakers {
            items {
              id
              video {
                id
                createdBy
                createdDate
                episodeTitle
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
              }
              speaker {
                id
                name
                image
              }
            }
            nextToken
          }
          episodeTitle
          episodeNumber
          seriesTitle
          series {
            id
            videos {
              items {
                id
                createdBy
                createdDate
                episodeTitle
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
              }
              nextToken
            }
            title
            description
            image
            startDate
            endDate
          }
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
            }
          }
          videoTypes
        }
        nextToken
      }
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
export const getVideo = `query GetVideo($id: ID!) {
  getVideo(id: $id) {
    id
    createdBy
    createdDate
    locations {
      id
      url
      site_name
      directions
      welcome
      welcome_img
      welcome_vid_youtube
      phone
      email
      instagram
      twitter
      facebook
      location {
        longitude
        latitude
        address
      }
      visible
    }
    speakers {
      items {
        id
        video {
          id
          createdBy
          createdDate
          locations {
            id
            url
            site_name
            directions
            welcome
            welcome_img
            welcome_vid_youtube
            phone
            email
            instagram
            twitter
            facebook
            location {
              longitude
              latitude
              address
            }
            visible
          }
          speakers {
            items {
              id
              video {
                id
                createdBy
                createdDate
                episodeTitle
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
              }
              speaker {
                id
                name
                image
              }
            }
            nextToken
          }
          episodeTitle
          episodeNumber
          seriesTitle
          series {
            id
            videos {
              items {
                id
                createdBy
                createdDate
                episodeTitle
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
              }
              nextToken
            }
            title
            description
            image
            startDate
            endDate
          }
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
            }
          }
          videoTypes
        }
        speaker {
          id
          name
          image
          videos {
            items {
              id
              video {
                id
                createdBy
                createdDate
                episodeTitle
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
              }
              speaker {
                id
                name
                image
              }
            }
            nextToken
          }
        }
      }
      nextToken
    }
    episodeTitle
    episodeNumber
    seriesTitle
    series {
      id
      videos {
        items {
          id
          createdBy
          createdDate
          locations {
            id
            url
            site_name
            directions
            welcome
            welcome_img
            welcome_vid_youtube
            phone
            email
            instagram
            twitter
            facebook
            location {
              longitude
              latitude
              address
            }
            visible
          }
          speakers {
            items {
              id
              video {
                id
                createdBy
                createdDate
                episodeTitle
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
              }
              speaker {
                id
                name
                image
              }
            }
            nextToken
          }
          episodeTitle
          episodeNumber
          seriesTitle
          series {
            id
            videos {
              items {
                id
                createdBy
                createdDate
                episodeTitle
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
              }
              nextToken
            }
            title
            description
            image
            startDate
            endDate
          }
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
            }
          }
          videoTypes
        }
        nextToken
      }
      title
      description
      image
      startDate
      endDate
    }
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
      }
    }
    videoTypes
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
      locations {
        id
        url
        site_name
        directions
        welcome
        welcome_img
        welcome_vid_youtube
        phone
        email
        instagram
        twitter
        facebook
        location {
          longitude
          latitude
          address
        }
        visible
      }
      speakers {
        items {
          id
          video {
            id
            createdBy
            createdDate
            locations {
              id
              url
              site_name
              directions
              welcome
              welcome_img
              welcome_vid_youtube
              phone
              email
              instagram
              twitter
              facebook
              location {
                longitude
                latitude
                address
              }
              visible
            }
            speakers {
              items {
                id
              }
              nextToken
            }
            episodeTitle
            episodeNumber
            seriesTitle
            series {
              id
              videos {
                nextToken
              }
              title
              description
              image
              startDate
              endDate
            }
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
                channelId
                title
                description
                channelTitle
              }
              contentDetails {
                videoId
                videoPublishedAt
              }
            }
            videoTypes
          }
          speaker {
            id
            name
            image
            videos {
              items {
                id
              }
              nextToken
            }
          }
        }
        nextToken
      }
      episodeTitle
      episodeNumber
      seriesTitle
      series {
        id
        videos {
          items {
            id
            createdBy
            createdDate
            locations {
              id
              url
              site_name
              directions
              welcome
              welcome_img
              welcome_vid_youtube
              phone
              email
              instagram
              twitter
              facebook
              location {
                longitude
                latitude
                address
              }
              visible
            }
            speakers {
              items {
                id
              }
              nextToken
            }
            episodeTitle
            episodeNumber
            seriesTitle
            series {
              id
              videos {
                nextToken
              }
              title
              description
              image
              startDate
              endDate
            }
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
                channelId
                title
                description
                channelTitle
              }
              contentDetails {
                videoId
                videoPublishedAt
              }
            }
            videoTypes
          }
          nextToken
        }
        title
        description
        image
        startDate
        endDate
      }
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
        }
      }
      videoTypes
    }
    nextToken
  }
}
`;
export const getBlog = `query GetBlog($id: ID!) {
  getBlog(id: $id) {
    id
    createdBy
    createdDate
    postedDate
    locations {
      id
      url
      site_name
      directions
      welcome
      welcome_img
      welcome_vid_youtube
      phone
      email
      instagram
      twitter
      facebook
      location {
        longitude
        latitude
        address
      }
      visible
    }
    title
    content
    version
  }
}
`;
export const listBlogs = `query ListBlogs(
  $filter: ModelBlogFilterInput
  $limit: Int
  $nextToken: String
) {
  listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      createdBy
      createdDate
      postedDate
      locations {
        id
        url
        site_name
        directions
        welcome
        welcome_img
        welcome_vid_youtube
        phone
        email
        instagram
        twitter
        facebook
        location {
          longitude
          latitude
          address
        }
        visible
      }
      title
      content
      version
    }
    nextToken
  }
}
`;
export const getNews = `query GetNews($id: ID!) {
  getNews(id: $id) {
    id
    createdBy
    createdDate
    postedDate
    locations {
      id
      url
      site_name
      directions
      welcome
      welcome_img
      welcome_vid_youtube
      phone
      email
      instagram
      twitter
      facebook
      location {
        longitude
        latitude
        address
      }
      visible
    }
    title
    content
    startDate
    endDate
  }
}
`;
export const listNewss = `query ListNewss(
  $filter: ModelNewsFilterInput
  $limit: Int
  $nextToken: String
) {
  listNewss(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      createdBy
      createdDate
      postedDate
      locations {
        id
        url
        site_name
        directions
        welcome
        welcome_img
        welcome_vid_youtube
        phone
        email
        instagram
        twitter
        facebook
        location {
          longitude
          latitude
          address
        }
        visible
      }
      title
      content
      startDate
      endDate
    }
    nextToken
  }
}
`;
export const getEvent = `query GetEvent($id: ID!) {
  getEvent(id: $id) {
    id
    createdBy
    createdDate
    postedDate
    locations {
      id
      url
      site_name
      directions
      welcome
      welcome_img
      welcome_vid_youtube
      phone
      email
      instagram
      twitter
      facebook
      location {
        longitude
        latitude
        address
      }
      visible
    }
    startTime
    endTime
    title
    description
  }
}
`;
export const listEvents = `query ListEvents(
  $filter: ModelEventFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      createdBy
      createdDate
      postedDate
      locations {
        id
        url
        site_name
        directions
        welcome
        welcome_img
        welcome_vid_youtube
        phone
        email
        instagram
        twitter
        facebook
        location {
          longitude
          latitude
          address
        }
        visible
      }
      startTime
      endTime
      title
      description
    }
    nextToken
  }
}
`;
export const getGroup = `query GetGroup($id: ID!) {
  getGroup(id: $id) {
    id
    canJoin
    visibleToNonMembers
    status
    name
    admin {
      sub
      title
      name
      phone
      email
      instagram
      twitter
      facebook
      website
      status
    }
    members {
      sub
      title
      name
      phone
      email
      instagram
      twitter
      facebook
      website
      status
    }
    type
  }
}
`;
export const listGroups = `query ListGroups(
  $filter: ModelGroupFilterInput
  $limit: Int
  $nextToken: String
) {
  listGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      canJoin
      visibleToNonMembers
      status
      name
      admin {
        sub
        title
        name
        phone
        email
        instagram
        twitter
        facebook
        website
        status
      }
      members {
        sub
        title
        name
        phone
        email
        instagram
        twitter
        facebook
        website
        status
      }
      type
    }
    nextToken
  }
}
`;
export const getOrganization = `query GetOrganization($id: ID!) {
  getOrganization(id: $id) {
    id
    canJoin
    visibleToNonMembers
    status
    name
    admin {
      sub
      title
      name
      phone
      email
      instagram
      twitter
      facebook
      website
      status
    }
    members {
      sub
      title
      name
      phone
      email
      instagram
      twitter
      facebook
      website
      status
    }
    location
    address
    phone
    email
    instagram
    twitter
    facebook
    website
    sites {
      id
      url
      site_name
      directions
      welcome
      welcome_img
      welcome_vid_youtube
      phone
      email
      instagram
      twitter
      facebook
      location {
        longitude
        latitude
        address
      }
      visible
    }
  }
}
`;
export const listOrganizations = `query ListOrganizations(
  $filter: ModelOrganizationFilterInput
  $limit: Int
  $nextToken: String
) {
  listOrganizations(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      canJoin
      visibleToNonMembers
      status
      name
      admin {
        sub
        title
        name
        phone
        email
        instagram
        twitter
        facebook
        website
        status
      }
      members {
        sub
        title
        name
        phone
        email
        instagram
        twitter
        facebook
        website
        status
      }
      location
      address
      phone
      email
      instagram
      twitter
      facebook
      website
      sites {
        id
        url
        site_name
        directions
        welcome
        welcome_img
        welcome_vid_youtube
        phone
        email
        instagram
        twitter
        facebook
        location {
          longitude
          latitude
          address
        }
        visible
      }
    }
    nextToken
  }
}
`;
export const getLocation = `query GetLocation($id: ID!) {
  getLocation(id: $id) {
    id
    url
    site_name
    directions
    welcome
    welcome_img
    welcome_vid_youtube
    phone
    email
    instagram
    twitter
    facebook
    location {
      longitude
      latitude
      address
    }
    visible
  }
}
`;
export const listLocations = `query ListLocations(
  $filter: ModelLocationFilterInput
  $limit: Int
  $nextToken: String
) {
  listLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      url
      site_name
      directions
      welcome
      welcome_img
      welcome_vid_youtube
      phone
      email
      instagram
      twitter
      facebook
      location {
        longitude
        latitude
        address
      }
      visible
    }
    nextToken
  }
}
`;
export const getStaff = `query GetStaff($id: ID!) {
  getStaff(id: $id) {
    sub
    title
    name
    phone
    email
    instagram
    twitter
    facebook
    website
    status
  }
}
`;
export const listStaffs = `query ListStaffs(
  $filter: ModelStaffFilterInput
  $limit: Int
  $nextToken: String
) {
  listStaffs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      sub
      title
      name
      phone
      email
      instagram
      twitter
      facebook
      website
      status
    }
    nextToken
  }
}
`;
export const getRegion = `query GetRegion($id: ID!) {
  getRegion(id: $id) {
    id
    name
    status
    sites {
      id
      url
      site_name
      directions
      welcome
      welcome_img
      welcome_vid_youtube
      phone
      email
      instagram
      twitter
      facebook
      location {
        longitude
        latitude
        address
      }
      visible
    }
  }
}
`;
export const listRegions = `query ListRegions(
  $filter: ModelRegionFilterInput
  $limit: Int
  $nextToken: String
) {
  listRegions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      status
      sites {
        id
        url
        site_name
        directions
        welcome
        welcome_img
        welcome_vid_youtube
        phone
        email
        instagram
        twitter
        facebook
        location {
          longitude
          latitude
          address
        }
        visible
      }
    }
    nextToken
  }
}
`;
export const getTnSeriesByIdent = `query GetTnSeriesByIdent(
  $TNident: String
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
              items {
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
              }
              nextToken
            }
          }
          sermonNoteCount
          quoteNoteCount
          homeChurchNoteCount
          sermonCommentCount
        }
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getTnSermonByIdent = `query GetTnSermonByIdent(
  $TNident: String
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
                nextToken
              }
            }
            sermonNoteCount
            quoteNoteCount
            homeChurchNoteCount
            sermonCommentCount
          }
          nextToken
        }
      }
      sermonNoteCount
      quoteNoteCount
      homeChurchNoteCount
      sermonCommentCount
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
      locations {
        id
        url
        site_name
        directions
        welcome
        welcome_img
        welcome_vid_youtube
        phone
        email
        instagram
        twitter
        facebook
        location {
          longitude
          latitude
          address
        }
        visible
      }
      speakers {
        items {
          id
          video {
            id
            createdBy
            createdDate
            locations {
              id
              url
              site_name
              directions
              welcome
              welcome_img
              welcome_vid_youtube
              phone
              email
              instagram
              twitter
              facebook
              location {
                longitude
                latitude
                address
              }
              visible
            }
            speakers {
              items {
                id
              }
              nextToken
            }
            episodeTitle
            episodeNumber
            seriesTitle
            series {
              id
              videos {
                nextToken
              }
              title
              description
              image
              startDate
              endDate
            }
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
                channelId
                title
                description
                channelTitle
              }
              contentDetails {
                videoId
                videoPublishedAt
              }
            }
            videoTypes
          }
          speaker {
            id
            name
            image
            videos {
              items {
                id
              }
              nextToken
            }
          }
        }
        nextToken
      }
      episodeTitle
      episodeNumber
      seriesTitle
      series {
        id
        videos {
          items {
            id
            createdBy
            createdDate
            locations {
              id
              url
              site_name
              directions
              welcome
              welcome_img
              welcome_vid_youtube
              phone
              email
              instagram
              twitter
              facebook
              location {
                longitude
                latitude
                address
              }
              visible
            }
            speakers {
              items {
                id
              }
              nextToken
            }
            episodeTitle
            episodeNumber
            seriesTitle
            series {
              id
              videos {
                nextToken
              }
              title
              description
              image
              startDate
              endDate
            }
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
                channelId
                title
                description
                channelTitle
              }
              contentDetails {
                videoId
                videoPublishedAt
              }
            }
            videoTypes
          }
          nextToken
        }
        title
        description
        image
        startDate
        endDate
      }
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
        }
      }
      videoTypes
    }
    nextToken
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
      createdBy
      createdDate
      locations {
        id
        url
        site_name
        directions
        welcome
        welcome_img
        welcome_vid_youtube
        phone
        email
        instagram
        twitter
        facebook
        location {
          longitude
          latitude
          address
        }
        visible
      }
      speakers {
        items {
          id
          video {
            id
            createdBy
            createdDate
            locations {
              id
              url
              site_name
              directions
              welcome
              welcome_img
              welcome_vid_youtube
              phone
              email
              instagram
              twitter
              facebook
              location {
                longitude
                latitude
                address
              }
              visible
            }
            speakers {
              items {
                id
              }
              nextToken
            }
            episodeTitle
            episodeNumber
            seriesTitle
            series {
              id
              videos {
                nextToken
              }
              title
              description
              image
              startDate
              endDate
            }
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
                channelId
                title
                description
                channelTitle
              }
              contentDetails {
                videoId
                videoPublishedAt
              }
            }
            videoTypes
          }
          speaker {
            id
            name
            image
            videos {
              items {
                id
              }
              nextToken
            }
          }
        }
        nextToken
      }
      episodeTitle
      episodeNumber
      seriesTitle
      series {
        id
        videos {
          items {
            id
            createdBy
            createdDate
            locations {
              id
              url
              site_name
              directions
              welcome
              welcome_img
              welcome_vid_youtube
              phone
              email
              instagram
              twitter
              facebook
              location {
                longitude
                latitude
                address
              }
              visible
            }
            speakers {
              items {
                id
              }
              nextToken
            }
            episodeTitle
            episodeNumber
            seriesTitle
            series {
              id
              videos {
                nextToken
              }
              title
              description
              image
              startDate
              endDate
            }
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
                channelId
                title
                description
                channelTitle
              }
              contentDetails {
                videoId
                videoPublishedAt
              }
            }
            videoTypes
          }
          nextToken
        }
        title
        description
        image
        startDate
        endDate
      }
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
        }
      }
      videoTypes
    }
    nextToken
  }
}
`;
export const searchResources = `query SearchResources(
  $filter: SearchableResourceFilterInput
  $sort: SearchableResourceSortInput
  $limit: Int
  $nextToken: String
) {
  searchResources(
    filter: $filter
    sort: $sort
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
      createdBy
      createdDate
      locations {
        id
        url
        site_name
        directions
        welcome
        welcome_img
        welcome_vid_youtube
        phone
        email
        instagram
        twitter
        facebook
        location {
          longitude
          latitude
          address
        }
        visible
      }
      speakers {
        items {
          id
          video {
            id
            createdBy
            createdDate
            locations {
              id
              url
              site_name
              directions
              welcome
              welcome_img
              welcome_vid_youtube
              phone
              email
              instagram
              twitter
              facebook
              location {
                longitude
                latitude
                address
              }
              visible
            }
            speakers {
              items {
                id
              }
              nextToken
            }
            episodeTitle
            episodeNumber
            seriesTitle
            series {
              id
              videos {
                nextToken
              }
              title
              description
              image
              startDate
              endDate
            }
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
                channelId
                title
                description
                channelTitle
              }
              contentDetails {
                videoId
                videoPublishedAt
              }
            }
            videoTypes
          }
          speaker {
            id
            name
            image
            videos {
              items {
                id
              }
              nextToken
            }
          }
        }
        nextToken
      }
      episodeTitle
      episodeNumber
      seriesTitle
      series {
        id
        videos {
          items {
            id
            createdBy
            createdDate
            locations {
              id
              url
              site_name
              directions
              welcome
              welcome_img
              welcome_vid_youtube
              phone
              email
              instagram
              twitter
              facebook
              location {
                longitude
                latitude
                address
              }
              visible
            }
            speakers {
              items {
                id
              }
              nextToken
            }
            episodeTitle
            episodeNumber
            seriesTitle
            series {
              id
              videos {
                nextToken
              }
              title
              description
              image
              startDate
              endDate
            }
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
                channelId
                title
                description
                channelTitle
              }
              contentDetails {
                videoId
                videoPublishedAt
              }
            }
            videoTypes
          }
          nextToken
        }
        title
        description
        image
        startDate
        endDate
      }
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
        }
      }
      videoTypes
    }
    nextToken
  }
}
`;
export const searchBlogs = `query SearchBlogs(
  $filter: SearchableBlogFilterInput
  $sort: SearchableBlogSortInput
  $limit: Int
  $nextToken: String
) {
  searchBlogs(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      createdBy
      createdDate
      postedDate
      locations {
        id
        url
        site_name
        directions
        welcome
        welcome_img
        welcome_vid_youtube
        phone
        email
        instagram
        twitter
        facebook
        location {
          longitude
          latitude
          address
        }
        visible
      }
      title
      content
      version
    }
    nextToken
  }
}
`;
export const searchNewss = `query SearchNewss(
  $filter: SearchableNewsFilterInput
  $sort: SearchableNewsSortInput
  $limit: Int
  $nextToken: String
) {
  searchNewss(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      createdBy
      createdDate
      postedDate
      locations {
        id
        url
        site_name
        directions
        welcome
        welcome_img
        welcome_vid_youtube
        phone
        email
        instagram
        twitter
        facebook
        location {
          longitude
          latitude
          address
        }
        visible
      }
      title
      content
      startDate
      endDate
    }
    nextToken
  }
}
`;
export const searchEvents = `query SearchEvents(
  $filter: SearchableEventFilterInput
  $sort: SearchableEventSortInput
  $limit: Int
  $nextToken: String
) {
  searchEvents(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      createdBy
      createdDate
      postedDate
      locations {
        id
        url
        site_name
        directions
        welcome
        welcome_img
        welcome_vid_youtube
        phone
        email
        instagram
        twitter
        facebook
        location {
          longitude
          latitude
          address
        }
        visible
      }
      startTime
      endTime
      title
      description
    }
    nextToken
  }
}
`;
export const searchStaffs = `query SearchStaffs(
  $filter: SearchableStaffFilterInput
  $sort: SearchableStaffSortInput
  $limit: Int
  $nextToken: String
) {
  searchStaffs(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      sub
      title
      name
      phone
      email
      instagram
      twitter
      facebook
      website
      status
    }
    nextToken
  }
}
`;
