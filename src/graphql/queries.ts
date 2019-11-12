// tslint:disable
// this is an auto generated file. This will be overwritten

export const getYoutubeVideoSearch = `query GetYoutubeVideoSearch($videoId: String) {
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
      }
      status {
        uploadStatus
        privacyStatus
        license
        embeddable
        publicStatsViewable
      }
    }
  }
}
`;
export const getYoutubePlaylistItems = `query GetYoutubePlaylistItems($playlistId: String, $pageToken: String) {
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
      }
      status {
        uploadStatus
        privacyStatus
        license
        embeddable
        publicStatsViewable
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
export const getFbEvents = `query GetFbEvents($pageId: String) {
  getFBEvents(pageId: $pageId) {
    data {
      description
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
      start_time
      id
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
export const fuzzySearchVideos = `query FuzzySearchVideos(
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
      speakers {
        items {
          id
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
            speakers {
              items {
                id
              }
              nextToken
            }
            series {
              id
              seriesType
              title
              description
              image
              startDate
              endDate
              videos {
                nextToken
              }
            }
          }
        }
        nextToken
      }
      series {
        id
        seriesType
        title
        description
        image
        startDate
        endDate
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
            speakers {
              items {
                id
              }
              nextToken
            }
            series {
              id
              seriesType
              title
              description
              image
              startDate
              endDate
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
      }
    }
  }
}
`;
export const f1ListEventSchedules = `query F1ListEventSchedules($itemId: [String]) {
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
export const emailHomeChurch = `query EmailHomeChurch(
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
export const getWebPage = `query GetWebPage($id: ID!) {
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
  }
}
`;
export const listWebPages = `query ListWebPages(
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
export const searchWebPages = `query SearchWebPages(
  $filter: SearchableWebPageFilterInput
  $sort: SearchableWebPageSortInput
  $limit: Int
  $nextToken: String
) {
  searchWebPages(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
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
    }
    nextToken
    total
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
            speakers {
              items {
                id
              }
              nextToken
            }
            series {
              id
              seriesType
              title
              description
              image
              startDate
              endDate
              videos {
                nextToken
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
export const getSpeaker = `query GetSpeaker($id: ID!) {
  getSpeaker(id: $id) {
    id
    name
    image
    videos {
      items {
        id
        speaker {
          id
          name
          image
          videos {
            items {
              id
              speaker {
                id
                name
                image
              }
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
                videoTypes
                notesURL
                videoURL
                audioURL
              }
            }
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
          speakers {
            items {
              id
              speaker {
                id
                name
                image
              }
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
                videoTypes
                notesURL
                videoURL
                audioURL
              }
            }
            nextToken
          }
          series {
            id
            seriesType
            title
            description
            image
            startDate
            endDate
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
export const getSpeakerVideos = `query GetSpeakerVideos($id: ID!) {
  getSpeakerVideos(id: $id) {
    id
    speaker {
      id
      name
      image
      videos {
        items {
          id
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
            speakers {
              items {
                id
              }
              nextToken
            }
            series {
              id
              seriesType
              title
              description
              image
              startDate
              endDate
              videos {
                nextToken
              }
            }
          }
        }
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
      speakers {
        items {
          id
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
            speakers {
              items {
                id
              }
              nextToken
            }
            series {
              id
              seriesType
              title
              description
              image
              startDate
              endDate
              videos {
                nextToken
              }
            }
          }
        }
        nextToken
      }
      series {
        id
        seriesType
        title
        description
        image
        startDate
        endDate
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
            speakers {
              items {
                id
              }
              nextToken
            }
            series {
              id
              seriesType
              title
              description
              image
              startDate
              endDate
              videos {
                nextToken
              }
            }
          }
          nextToken
        }
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
      speaker {
        id
        name
        image
        videos {
          items {
            id
            speaker {
              id
              name
              image
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
              }
              videoTypes
              notesURL
              videoURL
              audioURL
              speakers {
                nextToken
              }
              series {
                id
                seriesType
                title
                description
                image
                startDate
                endDate
              }
            }
          }
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
        speakers {
          items {
            id
            speaker {
              id
              name
              image
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
              }
              videoTypes
              notesURL
              videoURL
              audioURL
              speakers {
                nextToken
              }
              series {
                id
                seriesType
                title
                description
                image
                startDate
                endDate
              }
            }
          }
          nextToken
        }
        series {
          id
          seriesType
          title
          description
          image
          startDate
          endDate
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
              Youtube {
                id
                kind
                etag
              }
              videoTypes
              notesURL
              videoURL
              audioURL
              speakers {
                nextToken
              }
              series {
                id
                seriesType
                title
                description
                image
                startDate
                endDate
              }
            }
            nextToken
          }
        }
      }
    }
    nextToken
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
          speakers {
            items {
              id
              speaker {
                id
                name
                image
              }
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
                videoTypes
                notesURL
                videoURL
                audioURL
              }
            }
            nextToken
          }
          series {
            id
            seriesType
            title
            description
            image
            startDate
            endDate
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
export const getSeries = `query GetSeries($id: ID!) {
  getSeries(id: $id) {
    id
    seriesType
    title
    description
    image
    startDate
    endDate
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
        speakers {
          items {
            id
            speaker {
              id
              name
              image
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
              }
              videoTypes
              notesURL
              videoURL
              audioURL
              speakers {
                nextToken
              }
              series {
                id
                seriesType
                title
                description
                image
                startDate
                endDate
              }
            }
          }
          nextToken
        }
        series {
          id
          seriesType
          title
          description
          image
          startDate
          endDate
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
              Youtube {
                id
                kind
                etag
              }
              videoTypes
              notesURL
              videoURL
              audioURL
              speakers {
                nextToken
              }
              series {
                id
                seriesType
                title
                description
                image
                startDate
                endDate
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
      seriesType
      title
      description
      image
      startDate
      endDate
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
          speakers {
            items {
              id
              speaker {
                id
                name
                image
              }
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
                videoTypes
                notesURL
                videoURL
                audioURL
              }
            }
            nextToken
          }
          series {
            id
            seriesType
            title
            description
            image
            startDate
            endDate
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
export const getVideo = `query GetVideo($id: ID!) {
  getVideo(id: $id) {
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
    speakers {
      items {
        id
        speaker {
          id
          name
          image
          videos {
            items {
              id
              speaker {
                id
                name
                image
              }
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
                videoTypes
                notesURL
                videoURL
                audioURL
              }
            }
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
          speakers {
            items {
              id
              speaker {
                id
                name
                image
              }
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
                videoTypes
                notesURL
                videoURL
                audioURL
              }
            }
            nextToken
          }
          series {
            id
            seriesType
            title
            description
            image
            startDate
            endDate
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
              }
              nextToken
            }
          }
        }
      }
      nextToken
    }
    series {
      id
      seriesType
      title
      description
      image
      startDate
      endDate
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
          speakers {
            items {
              id
              speaker {
                id
                name
                image
              }
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
                videoTypes
                notesURL
                videoURL
                audioURL
              }
            }
            nextToken
          }
          series {
            id
            seriesType
            title
            description
            image
            startDate
            endDate
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
      speakers {
        items {
          id
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
            speakers {
              items {
                id
              }
              nextToken
            }
            series {
              id
              seriesType
              title
              description
              image
              startDate
              endDate
              videos {
                nextToken
              }
            }
          }
        }
        nextToken
      }
      series {
        id
        seriesType
        title
        description
        image
        startDate
        endDate
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
            speakers {
              items {
                id
              }
              nextToken
            }
            series {
              id
              seriesType
              title
              description
              image
              startDate
              endDate
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
      speakers {
        items {
          id
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
            speakers {
              items {
                id
              }
              nextToken
            }
            series {
              id
              seriesType
              title
              description
              image
              startDate
              endDate
              videos {
                nextToken
              }
            }
          }
        }
        nextToken
      }
      series {
        id
        seriesType
        title
        description
        image
        startDate
        endDate
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
            speakers {
              items {
                id
              }
              nextToken
            }
            series {
              id
              seriesType
              title
              description
              image
              startDate
              endDate
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
      speakers {
        items {
          id
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
            speakers {
              items {
                id
              }
              nextToken
            }
            series {
              id
              seriesType
              title
              description
              image
              startDate
              endDate
              videos {
                nextToken
              }
            }
          }
        }
        nextToken
      }
      series {
        id
        seriesType
        title
        description
        image
        startDate
        endDate
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
            speakers {
              items {
                id
              }
              nextToken
            }
            series {
              id
              seriesType
              title
              description
              image
              startDate
              endDate
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
      speakers {
        items {
          id
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
            speakers {
              items {
                id
              }
              nextToken
            }
            series {
              id
              seriesType
              title
              description
              image
              startDate
              endDate
              videos {
                nextToken
              }
            }
          }
        }
        nextToken
      }
      series {
        id
        seriesType
        title
        description
        image
        startDate
        endDate
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
            speakers {
              items {
                id
              }
              nextToken
            }
            series {
              id
              seriesType
              title
              description
              image
              startDate
              endDate
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
    total
  }
}
`;
