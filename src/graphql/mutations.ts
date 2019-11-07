// tslint:disable
// this is an auto generated file. This will be overwritten

export const createTnSeries = `mutation CreateTnSeries($input: CreateTNSeriesInput!) {
  createTNSeries(input: $input) {
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
export const updateTnSeries = `mutation UpdateTnSeries($input: UpdateTNSeriesInput!) {
  updateTNSeries(input: $input) {
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
export const deleteTnSeries = `mutation DeleteTnSeries($input: DeleteTNSeriesInput!) {
  deleteTNSeries(input: $input) {
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
export const createTnSermon = `mutation CreateTnSermon($input: CreateTNSermonInput!) {
  createTNSermon(input: $input) {
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
export const updateTnSermon = `mutation UpdateTnSermon($input: UpdateTNSermonInput!) {
  updateTNSermon(input: $input) {
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
export const deleteTnSermon = `mutation DeleteTnSermon($input: DeleteTNSermonInput!) {
  deleteTNSermon(input: $input) {
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
export const createWebPage = `mutation CreateWebPage($input: CreateWebPageInput!) {
  createWebPage(input: $input) {
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
export const updateWebPage = `mutation UpdateWebPage($input: UpdateWebPageInput!) {
  updateWebPage(input: $input) {
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
export const deleteWebPage = `mutation DeleteWebPage($input: DeleteWebPageInput!) {
  deleteWebPage(input: $input) {
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
export const createSpeaker = `mutation CreateSpeaker($input: CreateSpeakerInput!) {
  createSpeaker(input: $input) {
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
export const updateSpeaker = `mutation UpdateSpeaker($input: UpdateSpeakerInput!) {
  updateSpeaker(input: $input) {
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
export const deleteSpeaker = `mutation DeleteSpeaker($input: DeleteSpeakerInput!) {
  deleteSpeaker(input: $input) {
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
export const createSpeakerVideos = `mutation CreateSpeakerVideos($input: CreateSpeakerVideosInput!) {
  createSpeakerVideos(input: $input) {
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
export const updateSpeakerVideos = `mutation UpdateSpeakerVideos($input: UpdateSpeakerVideosInput!) {
  updateSpeakerVideos(input: $input) {
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
export const deleteSpeakerVideos = `mutation DeleteSpeakerVideos($input: DeleteSpeakerVideosInput!) {
  deleteSpeakerVideos(input: $input) {
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
export const createSeries = `mutation CreateSeries($input: CreateSeriesInput!) {
  createSeries(input: $input) {
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
export const updateSeries = `mutation UpdateSeries($input: UpdateSeriesInput!) {
  updateSeries(input: $input) {
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
export const deleteSeries = `mutation DeleteSeries($input: DeleteSeriesInput!) {
  deleteSeries(input: $input) {
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
export const createVideo = `mutation CreateVideo($input: CreateVideoInput!) {
  createVideo(input: $input) {
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
export const updateVideo = `mutation UpdateVideo($input: UpdateVideoInput!) {
  updateVideo(input: $input) {
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
export const deleteVideo = `mutation DeleteVideo($input: DeleteVideoInput!) {
  deleteVideo(input: $input) {
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
