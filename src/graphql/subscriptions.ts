/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateF1Assignments = /* GraphQL */ `
  subscription OnCreateF1Assignments(
    $filter: ModelSubscriptionF1AssignmentsFilterInput
  ) {
    onCreateF1Assignments(filter: $filter) {
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
export const onUpdateF1Assignments = /* GraphQL */ `
  subscription OnUpdateF1Assignments(
    $filter: ModelSubscriptionF1AssignmentsFilterInput
  ) {
    onUpdateF1Assignments(filter: $filter) {
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
export const onDeleteF1Assignments = /* GraphQL */ `
  subscription OnDeleteF1Assignments(
    $filter: ModelSubscriptionF1AssignmentsFilterInput
  ) {
    onDeleteF1Assignments(filter: $filter) {
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
export const onCreateHomeChurchInfo = /* GraphQL */ `
  subscription OnCreateHomeChurchInfo(
    $filter: ModelSubscriptionHomeChurchInfoFilterInput
    $owner: String
  ) {
    onCreateHomeChurchInfo(filter: $filter, owner: $owner) {
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
export const onUpdateHomeChurchInfo = /* GraphQL */ `
  subscription OnUpdateHomeChurchInfo(
    $filter: ModelSubscriptionHomeChurchInfoFilterInput
    $owner: String
  ) {
    onUpdateHomeChurchInfo(filter: $filter, owner: $owner) {
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
export const onDeleteHomeChurchInfo = /* GraphQL */ `
  subscription OnDeleteHomeChurchInfo(
    $filter: ModelSubscriptionHomeChurchInfoFilterInput
    $owner: String
  ) {
    onDeleteHomeChurchInfo(filter: $filter, owner: $owner) {
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
export const onCreateF1ListGroup2 = /* GraphQL */ `
  subscription OnCreateF1ListGroup2(
    $filter: ModelSubscriptionF1ListGroup2FilterInput
  ) {
    onCreateF1ListGroup2(filter: $filter) {
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
export const onUpdateF1ListGroup2 = /* GraphQL */ `
  subscription OnUpdateF1ListGroup2(
    $filter: ModelSubscriptionF1ListGroup2FilterInput
  ) {
    onUpdateF1ListGroup2(filter: $filter) {
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
export const onDeleteF1ListGroup2 = /* GraphQL */ `
  subscription OnDeleteF1ListGroup2(
    $filter: ModelSubscriptionF1ListGroup2FilterInput
  ) {
    onDeleteF1ListGroup2(filter: $filter) {
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
export const onCreateTNSeries = /* GraphQL */ `
  subscription OnCreateTNSeries($filter: ModelSubscriptionTNSeriesFilterInput) {
    onCreateTNSeries(filter: $filter) {
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
export const onUpdateTNSeries = /* GraphQL */ `
  subscription OnUpdateTNSeries($filter: ModelSubscriptionTNSeriesFilterInput) {
    onUpdateTNSeries(filter: $filter) {
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
export const onDeleteTNSeries = /* GraphQL */ `
  subscription OnDeleteTNSeries($filter: ModelSubscriptionTNSeriesFilterInput) {
    onDeleteTNSeries(filter: $filter) {
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
export const onCreateTNSermon = /* GraphQL */ `
  subscription OnCreateTNSermon($filter: ModelSubscriptionTNSermonFilterInput) {
    onCreateTNSermon(filter: $filter) {
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
export const onUpdateTNSermon = /* GraphQL */ `
  subscription OnUpdateTNSermon($filter: ModelSubscriptionTNSermonFilterInput) {
    onUpdateTNSermon(filter: $filter) {
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
export const onDeleteTNSermon = /* GraphQL */ `
  subscription OnDeleteTNSermon($filter: ModelSubscriptionTNSermonFilterInput) {
    onDeleteTNSermon(filter: $filter) {
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
export const onCreateLivestream = /* GraphQL */ `
  subscription OnCreateLivestream(
    $filter: ModelSubscriptionLivestreamFilterInput
  ) {
    onCreateLivestream(filter: $filter) {
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
export const onUpdateLivestream = /* GraphQL */ `
  subscription OnUpdateLivestream(
    $filter: ModelSubscriptionLivestreamFilterInput
  ) {
    onUpdateLivestream(filter: $filter) {
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
export const onDeleteLivestream = /* GraphQL */ `
  subscription OnDeleteLivestream(
    $filter: ModelSubscriptionLivestreamFilterInput
  ) {
    onDeleteLivestream(filter: $filter) {
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
export const onCreateRedirect = /* GraphQL */ `
  subscription OnCreateRedirect($filter: ModelSubscriptionRedirectFilterInput) {
    onCreateRedirect(filter: $filter) {
      id
      to
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateRedirect = /* GraphQL */ `
  subscription OnUpdateRedirect($filter: ModelSubscriptionRedirectFilterInput) {
    onUpdateRedirect(filter: $filter) {
      id
      to
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteRedirect = /* GraphQL */ `
  subscription OnDeleteRedirect($filter: ModelSubscriptionRedirectFilterInput) {
    onDeleteRedirect(filter: $filter) {
      id
      to
      createdAt
      updatedAt
    }
  }
`;
export const onCreateAnnouncement = /* GraphQL */ `
  subscription OnCreateAnnouncement(
    $filter: ModelSubscriptionAnnouncementFilterInput
  ) {
    onCreateAnnouncement(filter: $filter) {
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
export const onUpdateAnnouncement = /* GraphQL */ `
  subscription OnUpdateAnnouncement(
    $filter: ModelSubscriptionAnnouncementFilterInput
  ) {
    onUpdateAnnouncement(filter: $filter) {
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
export const onDeleteAnnouncement = /* GraphQL */ `
  subscription OnDeleteAnnouncement(
    $filter: ModelSubscriptionAnnouncementFilterInput
  ) {
    onDeleteAnnouncement(filter: $filter) {
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
export const onCreateSpeaker = /* GraphQL */ `
  subscription OnCreateSpeaker($filter: ModelSubscriptionSpeakerFilterInput) {
    onCreateSpeaker(filter: $filter) {
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
export const onUpdateSpeaker = /* GraphQL */ `
  subscription OnUpdateSpeaker($filter: ModelSubscriptionSpeakerFilterInput) {
    onUpdateSpeaker(filter: $filter) {
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
export const onDeleteSpeaker = /* GraphQL */ `
  subscription OnDeleteSpeaker($filter: ModelSubscriptionSpeakerFilterInput) {
    onDeleteSpeaker(filter: $filter) {
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
export const onCreateSpeakerVideos = /* GraphQL */ `
  subscription OnCreateSpeakerVideos(
    $filter: ModelSubscriptionSpeakerVideosFilterInput
  ) {
    onCreateSpeakerVideos(filter: $filter) {
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
export const onUpdateSpeakerVideos = /* GraphQL */ `
  subscription OnUpdateSpeakerVideos(
    $filter: ModelSubscriptionSpeakerVideosFilterInput
  ) {
    onUpdateSpeakerVideos(filter: $filter) {
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
export const onDeleteSpeakerVideos = /* GraphQL */ `
  subscription OnDeleteSpeakerVideos(
    $filter: ModelSubscriptionSpeakerVideosFilterInput
  ) {
    onDeleteSpeakerVideos(filter: $filter) {
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
export const onCreateSeries = /* GraphQL */ `
  subscription OnCreateSeries($filter: ModelSubscriptionSeriesFilterInput) {
    onCreateSeries(filter: $filter) {
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
export const onUpdateSeries = /* GraphQL */ `
  subscription OnUpdateSeries($filter: ModelSubscriptionSeriesFilterInput) {
    onUpdateSeries(filter: $filter) {
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
export const onDeleteSeries = /* GraphQL */ `
  subscription OnDeleteSeries($filter: ModelSubscriptionSeriesFilterInput) {
    onDeleteSeries(filter: $filter) {
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
export const onCreateCustomPlaylist = /* GraphQL */ `
  subscription OnCreateCustomPlaylist(
    $filter: ModelSubscriptionCustomPlaylistFilterInput
  ) {
    onCreateCustomPlaylist(filter: $filter) {
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
export const onUpdateCustomPlaylist = /* GraphQL */ `
  subscription OnUpdateCustomPlaylist(
    $filter: ModelSubscriptionCustomPlaylistFilterInput
  ) {
    onUpdateCustomPlaylist(filter: $filter) {
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
export const onDeleteCustomPlaylist = /* GraphQL */ `
  subscription OnDeleteCustomPlaylist(
    $filter: ModelSubscriptionCustomPlaylistFilterInput
  ) {
    onDeleteCustomPlaylist(filter: $filter) {
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
export const onCreateCustomPlaylistVideo = /* GraphQL */ `
  subscription OnCreateCustomPlaylistVideo(
    $filter: ModelSubscriptionCustomPlaylistVideoFilterInput
  ) {
    onCreateCustomPlaylistVideo(filter: $filter) {
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
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCustomPlaylistVideo = /* GraphQL */ `
  subscription OnUpdateCustomPlaylistVideo(
    $filter: ModelSubscriptionCustomPlaylistVideoFilterInput
  ) {
    onUpdateCustomPlaylistVideo(filter: $filter) {
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
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCustomPlaylistVideo = /* GraphQL */ `
  subscription OnDeleteCustomPlaylistVideo(
    $filter: ModelSubscriptionCustomPlaylistVideoFilterInput
  ) {
    onDeleteCustomPlaylistVideo(filter: $filter) {
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
      createdAt
      updatedAt
    }
  }
`;
export const onCreateVideo = /* GraphQL */ `
  subscription OnCreateVideo($filter: ModelSubscriptionVideoFilterInput) {
    onCreateVideo(filter: $filter) {
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
export const onUpdateVideo = /* GraphQL */ `
  subscription OnUpdateVideo($filter: ModelSubscriptionVideoFilterInput) {
    onUpdateVideo(filter: $filter) {
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
export const onDeleteVideo = /* GraphQL */ `
  subscription OnDeleteVideo($filter: ModelSubscriptionVideoFilterInput) {
    onDeleteVideo(filter: $filter) {
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
export const onCreateBlogSeries = /* GraphQL */ `
  subscription OnCreateBlogSeries(
    $filter: ModelSubscriptionBlogSeriesFilterInput
  ) {
    onCreateBlogSeries(filter: $filter) {
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
export const onUpdateBlogSeries = /* GraphQL */ `
  subscription OnUpdateBlogSeries(
    $filter: ModelSubscriptionBlogSeriesFilterInput
  ) {
    onUpdateBlogSeries(filter: $filter) {
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
export const onDeleteBlogSeries = /* GraphQL */ `
  subscription OnDeleteBlogSeries(
    $filter: ModelSubscriptionBlogSeriesFilterInput
  ) {
    onDeleteBlogSeries(filter: $filter) {
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
export const onCreateBlogSeriesBridge = /* GraphQL */ `
  subscription OnCreateBlogSeriesBridge(
    $filter: ModelSubscriptionBlogSeriesBridgeFilterInput
  ) {
    onCreateBlogSeriesBridge(filter: $filter) {
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
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateBlogSeriesBridge = /* GraphQL */ `
  subscription OnUpdateBlogSeriesBridge(
    $filter: ModelSubscriptionBlogSeriesBridgeFilterInput
  ) {
    onUpdateBlogSeriesBridge(filter: $filter) {
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
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteBlogSeriesBridge = /* GraphQL */ `
  subscription OnDeleteBlogSeriesBridge(
    $filter: ModelSubscriptionBlogSeriesBridgeFilterInput
  ) {
    onDeleteBlogSeriesBridge(filter: $filter) {
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
      createdAt
      updatedAt
    }
  }
`;
export const onCreateBlogToVideoSeries = /* GraphQL */ `
  subscription OnCreateBlogToVideoSeries(
    $filter: ModelSubscriptionBlogToVideoSeriesFilterInput
  ) {
    onCreateBlogToVideoSeries(filter: $filter) {
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
      videoSeries {
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
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateBlogToVideoSeries = /* GraphQL */ `
  subscription OnUpdateBlogToVideoSeries(
    $filter: ModelSubscriptionBlogToVideoSeriesFilterInput
  ) {
    onUpdateBlogToVideoSeries(filter: $filter) {
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
      videoSeries {
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
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteBlogToVideoSeries = /* GraphQL */ `
  subscription OnDeleteBlogToVideoSeries(
    $filter: ModelSubscriptionBlogToVideoSeriesFilterInput
  ) {
    onDeleteBlogToVideoSeries(filter: $filter) {
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
      videoSeries {
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
      createdAt
      updatedAt
    }
  }
`;
export const onCreateBlog = /* GraphQL */ `
  subscription OnCreateBlog($filter: ModelSubscriptionBlogFilterInput) {
    onCreateBlog(filter: $filter) {
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
export const onUpdateBlog = /* GraphQL */ `
  subscription OnUpdateBlog($filter: ModelSubscriptionBlogFilterInput) {
    onUpdateBlog(filter: $filter) {
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
export const onDeleteBlog = /* GraphQL */ `
  subscription OnDeleteBlog($filter: ModelSubscriptionBlogFilterInput) {
    onDeleteBlog(filter: $filter) {
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
export const onCreateInstagram = /* GraphQL */ `
  subscription OnCreateInstagram(
    $filter: ModelSubscriptionInstagramFilterInput
  ) {
    onCreateInstagram(filter: $filter) {
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
export const onUpdateInstagram = /* GraphQL */ `
  subscription OnUpdateInstagram(
    $filter: ModelSubscriptionInstagramFilterInput
  ) {
    onUpdateInstagram(filter: $filter) {
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
export const onDeleteInstagram = /* GraphQL */ `
  subscription OnDeleteInstagram(
    $filter: ModelSubscriptionInstagramFilterInput
  ) {
    onDeleteInstagram(filter: $filter) {
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
export const onCreateVerse = /* GraphQL */ `
  subscription OnCreateVerse($filter: ModelSubscriptionVerseFilterInput) {
    onCreateVerse(filter: $filter) {
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
export const onUpdateVerse = /* GraphQL */ `
  subscription OnUpdateVerse($filter: ModelSubscriptionVerseFilterInput) {
    onUpdateVerse(filter: $filter) {
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
export const onDeleteVerse = /* GraphQL */ `
  subscription OnDeleteVerse($filter: ModelSubscriptionVerseFilterInput) {
    onDeleteVerse(filter: $filter) {
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
export const onCreateNotes = /* GraphQL */ `
  subscription OnCreateNotes($filter: ModelSubscriptionNotesFilterInput) {
    onCreateNotes(filter: $filter) {
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
export const onUpdateNotes = /* GraphQL */ `
  subscription OnUpdateNotes($filter: ModelSubscriptionNotesFilterInput) {
    onUpdateNotes(filter: $filter) {
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
export const onDeleteNotes = /* GraphQL */ `
  subscription OnDeleteNotes($filter: ModelSubscriptionNotesFilterInput) {
    onDeleteNotes(filter: $filter) {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment(
    $filter: ModelSubscriptionCommentFilterInput
    $owner: String
  ) {
    onCreateComment(filter: $filter, owner: $owner) {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment(
    $filter: ModelSubscriptionCommentFilterInput
    $owner: String
  ) {
    onUpdateComment(filter: $filter, owner: $owner) {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment(
    $filter: ModelSubscriptionCommentFilterInput
    $owner: String
  ) {
    onDeleteComment(filter: $filter, owner: $owner) {
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
export const onCreateWebPage = /* GraphQL */ `
  subscription OnCreateWebPage($filter: ModelSubscriptionWebPageFilterInput) {
    onCreateWebPage(filter: $filter) {
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
export const onUpdateWebPage = /* GraphQL */ `
  subscription OnUpdateWebPage($filter: ModelSubscriptionWebPageFilterInput) {
    onUpdateWebPage(filter: $filter) {
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
export const onDeleteWebPage = /* GraphQL */ `
  subscription OnDeleteWebPage($filter: ModelSubscriptionWebPageFilterInput) {
    onDeleteWebPage(filter: $filter) {
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
export const onCreateTMHUser = /* GraphQL */ `
  subscription OnCreateTMHUser(
    $filter: ModelSubscriptionTMHUserFilterInput
    $owner: String
  ) {
    onCreateTMHUser(filter: $filter, owner: $owner) {
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
export const onUpdateTMHUser = /* GraphQL */ `
  subscription OnUpdateTMHUser(
    $filter: ModelSubscriptionTMHUserFilterInput
    $owner: String
  ) {
    onUpdateTMHUser(filter: $filter, owner: $owner) {
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
export const onDeleteTMHUser = /* GraphQL */ `
  subscription OnDeleteTMHUser(
    $filter: ModelSubscriptionTMHUserFilterInput
    $owner: String
  ) {
    onDeleteTMHUser(filter: $filter, owner: $owner) {
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
export const onCreateTMHPerson = /* GraphQL */ `
  subscription OnCreateTMHPerson(
    $filter: ModelSubscriptionTMHPersonFilterInput
  ) {
    onCreateTMHPerson(filter: $filter) {
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
  }
`;
export const onUpdateTMHPerson = /* GraphQL */ `
  subscription OnUpdateTMHPerson(
    $filter: ModelSubscriptionTMHPersonFilterInput
  ) {
    onUpdateTMHPerson(filter: $filter) {
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
  }
`;
export const onDeleteTMHPerson = /* GraphQL */ `
  subscription OnDeleteTMHPerson(
    $filter: ModelSubscriptionTMHPersonFilterInput
  ) {
    onDeleteTMHPerson(filter: $filter) {
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
  }
`;
export const onCreateTMHLocation = /* GraphQL */ `
  subscription OnCreateTMHLocation(
    $filter: ModelSubscriptionTMHLocationFilterInput
  ) {
    onCreateTMHLocation(filter: $filter) {
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
        time
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
        type
      }
      youth {
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
export const onUpdateTMHLocation = /* GraphQL */ `
  subscription OnUpdateTMHLocation(
    $filter: ModelSubscriptionTMHLocationFilterInput
  ) {
    onUpdateTMHLocation(filter: $filter) {
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
        time
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
        type
      }
      youth {
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
export const onDeleteTMHLocation = /* GraphQL */ `
  subscription OnDeleteTMHLocation(
    $filter: ModelSubscriptionTMHLocationFilterInput
  ) {
    onDeleteTMHLocation(filter: $filter) {
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
        time
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
        type
      }
      youth {
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
