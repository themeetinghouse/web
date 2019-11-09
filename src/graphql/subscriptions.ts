// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateTnSeries = `subscription OnCreateTnSeries {
  onCreateTNSeries {
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
export const onUpdateTnSeries = `subscription OnUpdateTnSeries {
  onUpdateTNSeries {
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
export const onDeleteTnSeries = `subscription OnDeleteTnSeries {
  onDeleteTNSeries {
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
export const onCreateTnSermon = `subscription OnCreateTnSermon {
  onCreateTNSermon {
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
export const onUpdateTnSermon = `subscription OnUpdateTnSermon {
  onUpdateTNSermon {
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
export const onDeleteTnSermon = `subscription OnDeleteTnSermon {
  onDeleteTNSermon {
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
export const onCreateWebPage = `subscription OnCreateWebPage {
  onCreateWebPage {
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
export const onUpdateWebPage = `subscription OnUpdateWebPage {
  onUpdateWebPage {
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
export const onDeleteWebPage = `subscription OnDeleteWebPage {
  onDeleteWebPage {
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
export const onCreateSpeaker = `subscription OnCreateSpeaker {
  onCreateSpeaker {
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
export const onUpdateSpeaker = `subscription OnUpdateSpeaker {
  onUpdateSpeaker {
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
export const onDeleteSpeaker = `subscription OnDeleteSpeaker {
  onDeleteSpeaker {
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
export const onCreateSpeakerVideos = `subscription OnCreateSpeakerVideos {
  onCreateSpeakerVideos {
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
export const onUpdateSpeakerVideos = `subscription OnUpdateSpeakerVideos {
  onUpdateSpeakerVideos {
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
export const onDeleteSpeakerVideos = `subscription OnDeleteSpeakerVideos {
  onDeleteSpeakerVideos {
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
export const onCreateSeries = `subscription OnCreateSeries {
  onCreateSeries {
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
export const onUpdateSeries = `subscription OnUpdateSeries {
  onUpdateSeries {
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
export const onDeleteSeries = `subscription OnDeleteSeries {
  onDeleteSeries {
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
export const onCreateVideo = `subscription OnCreateVideo {
  onCreateVideo {
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
export const onUpdateVideo = `subscription OnUpdateVideo {
  onUpdateVideo {
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
export const onDeleteVideo = `subscription OnDeleteVideo {
  onDeleteVideo {
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
