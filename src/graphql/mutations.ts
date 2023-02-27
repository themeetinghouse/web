/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createF1Assignments = /* GraphQL */ `
  mutation CreateF1Assignments(
    $input: CreateF1AssignmentsInput!
    $condition: ModelF1AssignmentsConditionInput
  ) {
    createF1Assignments(input: $input, condition: $condition) {
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
export const updateF1Assignments = /* GraphQL */ `
  mutation UpdateF1Assignments(
    $input: UpdateF1AssignmentsInput!
    $condition: ModelF1AssignmentsConditionInput
  ) {
    updateF1Assignments(input: $input, condition: $condition) {
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
export const deleteF1Assignments = /* GraphQL */ `
  mutation DeleteF1Assignments(
    $input: DeleteF1AssignmentsInput!
    $condition: ModelF1AssignmentsConditionInput
  ) {
    deleteF1Assignments(input: $input, condition: $condition) {
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
export const createHomeChurchInfo = /* GraphQL */ `
  mutation CreateHomeChurchInfo(
    $input: CreateHomeChurchInfoInput!
    $condition: ModelHomeChurchInfoConditionInput
  ) {
    createHomeChurchInfo(input: $input, condition: $condition) {
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
export const updateHomeChurchInfo = /* GraphQL */ `
  mutation UpdateHomeChurchInfo(
    $input: UpdateHomeChurchInfoInput!
    $condition: ModelHomeChurchInfoConditionInput
  ) {
    updateHomeChurchInfo(input: $input, condition: $condition) {
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
export const deleteHomeChurchInfo = /* GraphQL */ `
  mutation DeleteHomeChurchInfo(
    $input: DeleteHomeChurchInfoInput!
    $condition: ModelHomeChurchInfoConditionInput
  ) {
    deleteHomeChurchInfo(input: $input, condition: $condition) {
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
export const createF1ListGroup2 = /* GraphQL */ `
  mutation CreateF1ListGroup2(
    $input: CreateF1ListGroup2Input!
    $condition: ModelF1ListGroup2ConditionInput
  ) {
    createF1ListGroup2(input: $input, condition: $condition) {
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
export const updateF1ListGroup2 = /* GraphQL */ `
  mutation UpdateF1ListGroup2(
    $input: UpdateF1ListGroup2Input!
    $condition: ModelF1ListGroup2ConditionInput
  ) {
    updateF1ListGroup2(input: $input, condition: $condition) {
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
export const deleteF1ListGroup2 = /* GraphQL */ `
  mutation DeleteF1ListGroup2(
    $input: DeleteF1ListGroup2Input!
    $condition: ModelF1ListGroup2ConditionInput
  ) {
    deleteF1ListGroup2(input: $input, condition: $condition) {
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
export const createTNSeries = /* GraphQL */ `
  mutation CreateTNSeries(
    $input: CreateTNSeriesInput!
    $condition: ModelTNSeriesConditionInput
  ) {
    createTNSeries(input: $input, condition: $condition) {
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
export const updateTNSeries = /* GraphQL */ `
  mutation UpdateTNSeries(
    $input: UpdateTNSeriesInput!
    $condition: ModelTNSeriesConditionInput
  ) {
    updateTNSeries(input: $input, condition: $condition) {
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
export const deleteTNSeries = /* GraphQL */ `
  mutation DeleteTNSeries(
    $input: DeleteTNSeriesInput!
    $condition: ModelTNSeriesConditionInput
  ) {
    deleteTNSeries(input: $input, condition: $condition) {
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
export const createTNSermon = /* GraphQL */ `
  mutation CreateTNSermon(
    $input: CreateTNSermonInput!
    $condition: ModelTNSermonConditionInput
  ) {
    createTNSermon(input: $input, condition: $condition) {
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
export const updateTNSermon = /* GraphQL */ `
  mutation UpdateTNSermon(
    $input: UpdateTNSermonInput!
    $condition: ModelTNSermonConditionInput
  ) {
    updateTNSermon(input: $input, condition: $condition) {
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
export const deleteTNSermon = /* GraphQL */ `
  mutation DeleteTNSermon(
    $input: DeleteTNSermonInput!
    $condition: ModelTNSermonConditionInput
  ) {
    deleteTNSermon(input: $input, condition: $condition) {
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
export const createLivestream = /* GraphQL */ `
  mutation CreateLivestream(
    $input: CreateLivestreamInput!
    $condition: ModelLivestreamConditionInput
  ) {
    createLivestream(input: $input, condition: $condition) {
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
export const updateLivestream = /* GraphQL */ `
  mutation UpdateLivestream(
    $input: UpdateLivestreamInput!
    $condition: ModelLivestreamConditionInput
  ) {
    updateLivestream(input: $input, condition: $condition) {
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
export const deleteLivestream = /* GraphQL */ `
  mutation DeleteLivestream(
    $input: DeleteLivestreamInput!
    $condition: ModelLivestreamConditionInput
  ) {
    deleteLivestream(input: $input, condition: $condition) {
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
export const createRedirect = /* GraphQL */ `
  mutation CreateRedirect(
    $input: CreateRedirectInput!
    $condition: ModelRedirectConditionInput
  ) {
    createRedirect(input: $input, condition: $condition) {
      id
      to
      createdAt
      updatedAt
    }
  }
`;
export const updateRedirect = /* GraphQL */ `
  mutation UpdateRedirect(
    $input: UpdateRedirectInput!
    $condition: ModelRedirectConditionInput
  ) {
    updateRedirect(input: $input, condition: $condition) {
      id
      to
      createdAt
      updatedAt
    }
  }
`;
export const deleteRedirect = /* GraphQL */ `
  mutation DeleteRedirect(
    $input: DeleteRedirectInput!
    $condition: ModelRedirectConditionInput
  ) {
    deleteRedirect(input: $input, condition: $condition) {
      id
      to
      createdAt
      updatedAt
    }
  }
`;
export const createAnnouncement = /* GraphQL */ `
  mutation CreateAnnouncement(
    $input: CreateAnnouncementInput!
    $condition: ModelAnnouncementConditionInput
  ) {
    createAnnouncement(input: $input, condition: $condition) {
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
export const updateAnnouncement = /* GraphQL */ `
  mutation UpdateAnnouncement(
    $input: UpdateAnnouncementInput!
    $condition: ModelAnnouncementConditionInput
  ) {
    updateAnnouncement(input: $input, condition: $condition) {
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
export const deleteAnnouncement = /* GraphQL */ `
  mutation DeleteAnnouncement(
    $input: DeleteAnnouncementInput!
    $condition: ModelAnnouncementConditionInput
  ) {
    deleteAnnouncement(input: $input, condition: $condition) {
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
export const createSpeaker = /* GraphQL */ `
  mutation CreateSpeaker(
    $input: CreateSpeakerInput!
    $condition: ModelSpeakerConditionInput
  ) {
    createSpeaker(input: $input, condition: $condition) {
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
export const updateSpeaker = /* GraphQL */ `
  mutation UpdateSpeaker(
    $input: UpdateSpeakerInput!
    $condition: ModelSpeakerConditionInput
  ) {
    updateSpeaker(input: $input, condition: $condition) {
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
export const deleteSpeaker = /* GraphQL */ `
  mutation DeleteSpeaker(
    $input: DeleteSpeakerInput!
    $condition: ModelSpeakerConditionInput
  ) {
    deleteSpeaker(input: $input, condition: $condition) {
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
export const createSpeakerVideos = /* GraphQL */ `
  mutation CreateSpeakerVideos(
    $input: CreateSpeakerVideosInput!
    $condition: ModelSpeakerVideosConditionInput
  ) {
    createSpeakerVideos(input: $input, condition: $condition) {
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
export const updateSpeakerVideos = /* GraphQL */ `
  mutation UpdateSpeakerVideos(
    $input: UpdateSpeakerVideosInput!
    $condition: ModelSpeakerVideosConditionInput
  ) {
    updateSpeakerVideos(input: $input, condition: $condition) {
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
export const deleteSpeakerVideos = /* GraphQL */ `
  mutation DeleteSpeakerVideos(
    $input: DeleteSpeakerVideosInput!
    $condition: ModelSpeakerVideosConditionInput
  ) {
    deleteSpeakerVideos(input: $input, condition: $condition) {
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
export const createSeries = /* GraphQL */ `
  mutation CreateSeries(
    $input: CreateSeriesInput!
    $condition: ModelSeriesConditionInput
  ) {
    createSeries(input: $input, condition: $condition) {
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
export const updateSeries = /* GraphQL */ `
  mutation UpdateSeries(
    $input: UpdateSeriesInput!
    $condition: ModelSeriesConditionInput
  ) {
    updateSeries(input: $input, condition: $condition) {
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
export const deleteSeries = /* GraphQL */ `
  mutation DeleteSeries(
    $input: DeleteSeriesInput!
    $condition: ModelSeriesConditionInput
  ) {
    deleteSeries(input: $input, condition: $condition) {
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
export const createCustomPlaylist = /* GraphQL */ `
  mutation CreateCustomPlaylist(
    $input: CreateCustomPlaylistInput!
    $condition: ModelCustomPlaylistConditionInput
  ) {
    createCustomPlaylist(input: $input, condition: $condition) {
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
export const updateCustomPlaylist = /* GraphQL */ `
  mutation UpdateCustomPlaylist(
    $input: UpdateCustomPlaylistInput!
    $condition: ModelCustomPlaylistConditionInput
  ) {
    updateCustomPlaylist(input: $input, condition: $condition) {
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
export const deleteCustomPlaylist = /* GraphQL */ `
  mutation DeleteCustomPlaylist(
    $input: DeleteCustomPlaylistInput!
    $condition: ModelCustomPlaylistConditionInput
  ) {
    deleteCustomPlaylist(input: $input, condition: $condition) {
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
export const createCustomPlaylistVideo = /* GraphQL */ `
  mutation CreateCustomPlaylistVideo(
    $input: CreateCustomPlaylistVideoInput!
    $condition: ModelCustomPlaylistVideoConditionInput
  ) {
    createCustomPlaylistVideo(input: $input, condition: $condition) {
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
export const updateCustomPlaylistVideo = /* GraphQL */ `
  mutation UpdateCustomPlaylistVideo(
    $input: UpdateCustomPlaylistVideoInput!
    $condition: ModelCustomPlaylistVideoConditionInput
  ) {
    updateCustomPlaylistVideo(input: $input, condition: $condition) {
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
export const deleteCustomPlaylistVideo = /* GraphQL */ `
  mutation DeleteCustomPlaylistVideo(
    $input: DeleteCustomPlaylistVideoInput!
    $condition: ModelCustomPlaylistVideoConditionInput
  ) {
    deleteCustomPlaylistVideo(input: $input, condition: $condition) {
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
export const createVideo = /* GraphQL */ `
  mutation CreateVideo(
    $input: CreateVideoInput!
    $condition: ModelVideoConditionInput
  ) {
    createVideo(input: $input, condition: $condition) {
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
export const updateVideo = /* GraphQL */ `
  mutation UpdateVideo(
    $input: UpdateVideoInput!
    $condition: ModelVideoConditionInput
  ) {
    updateVideo(input: $input, condition: $condition) {
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
export const deleteVideo = /* GraphQL */ `
  mutation DeleteVideo(
    $input: DeleteVideoInput!
    $condition: ModelVideoConditionInput
  ) {
    deleteVideo(input: $input, condition: $condition) {
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
export const createBlogSeries = /* GraphQL */ `
  mutation CreateBlogSeries(
    $input: CreateBlogSeriesInput!
    $condition: ModelBlogSeriesConditionInput
  ) {
    createBlogSeries(input: $input, condition: $condition) {
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
export const updateBlogSeries = /* GraphQL */ `
  mutation UpdateBlogSeries(
    $input: UpdateBlogSeriesInput!
    $condition: ModelBlogSeriesConditionInput
  ) {
    updateBlogSeries(input: $input, condition: $condition) {
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
export const deleteBlogSeries = /* GraphQL */ `
  mutation DeleteBlogSeries(
    $input: DeleteBlogSeriesInput!
    $condition: ModelBlogSeriesConditionInput
  ) {
    deleteBlogSeries(input: $input, condition: $condition) {
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
export const createBlogSeriesBridge = /* GraphQL */ `
  mutation CreateBlogSeriesBridge(
    $input: CreateBlogSeriesBridgeInput!
    $condition: ModelBlogSeriesBridgeConditionInput
  ) {
    createBlogSeriesBridge(input: $input, condition: $condition) {
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
export const updateBlogSeriesBridge = /* GraphQL */ `
  mutation UpdateBlogSeriesBridge(
    $input: UpdateBlogSeriesBridgeInput!
    $condition: ModelBlogSeriesBridgeConditionInput
  ) {
    updateBlogSeriesBridge(input: $input, condition: $condition) {
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
export const deleteBlogSeriesBridge = /* GraphQL */ `
  mutation DeleteBlogSeriesBridge(
    $input: DeleteBlogSeriesBridgeInput!
    $condition: ModelBlogSeriesBridgeConditionInput
  ) {
    deleteBlogSeriesBridge(input: $input, condition: $condition) {
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
export const createBlogToVideoSeries = /* GraphQL */ `
  mutation CreateBlogToVideoSeries(
    $input: CreateBlogToVideoSeriesInput!
    $condition: ModelBlogToVideoSeriesConditionInput
  ) {
    createBlogToVideoSeries(input: $input, condition: $condition) {
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
export const updateBlogToVideoSeries = /* GraphQL */ `
  mutation UpdateBlogToVideoSeries(
    $input: UpdateBlogToVideoSeriesInput!
    $condition: ModelBlogToVideoSeriesConditionInput
  ) {
    updateBlogToVideoSeries(input: $input, condition: $condition) {
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
export const deleteBlogToVideoSeries = /* GraphQL */ `
  mutation DeleteBlogToVideoSeries(
    $input: DeleteBlogToVideoSeriesInput!
    $condition: ModelBlogToVideoSeriesConditionInput
  ) {
    deleteBlogToVideoSeries(input: $input, condition: $condition) {
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
export const createBlog = /* GraphQL */ `
  mutation CreateBlog(
    $input: CreateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    createBlog(input: $input, condition: $condition) {
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
export const updateBlog = /* GraphQL */ `
  mutation UpdateBlog(
    $input: UpdateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    updateBlog(input: $input, condition: $condition) {
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
export const deleteBlog = /* GraphQL */ `
  mutation DeleteBlog(
    $input: DeleteBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    deleteBlog(input: $input, condition: $condition) {
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
export const createInstagram = /* GraphQL */ `
  mutation CreateInstagram(
    $input: CreateInstagramInput!
    $condition: ModelInstagramConditionInput
  ) {
    createInstagram(input: $input, condition: $condition) {
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
export const updateInstagram = /* GraphQL */ `
  mutation UpdateInstagram(
    $input: UpdateInstagramInput!
    $condition: ModelInstagramConditionInput
  ) {
    updateInstagram(input: $input, condition: $condition) {
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
export const deleteInstagram = /* GraphQL */ `
  mutation DeleteInstagram(
    $input: DeleteInstagramInput!
    $condition: ModelInstagramConditionInput
  ) {
    deleteInstagram(input: $input, condition: $condition) {
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
export const createVerse = /* GraphQL */ `
  mutation CreateVerse(
    $input: CreateVerseInput!
    $condition: ModelVerseConditionInput
  ) {
    createVerse(input: $input, condition: $condition) {
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
export const updateVerse = /* GraphQL */ `
  mutation UpdateVerse(
    $input: UpdateVerseInput!
    $condition: ModelVerseConditionInput
  ) {
    updateVerse(input: $input, condition: $condition) {
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
export const deleteVerse = /* GraphQL */ `
  mutation DeleteVerse(
    $input: DeleteVerseInput!
    $condition: ModelVerseConditionInput
  ) {
    deleteVerse(input: $input, condition: $condition) {
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
export const createNotes = /* GraphQL */ `
  mutation CreateNotes(
    $input: CreateNotesInput!
    $condition: ModelNotesConditionInput
  ) {
    createNotes(input: $input, condition: $condition) {
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
export const updateNotes = /* GraphQL */ `
  mutation UpdateNotes(
    $input: UpdateNotesInput!
    $condition: ModelNotesConditionInput
  ) {
    updateNotes(input: $input, condition: $condition) {
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
export const deleteNotes = /* GraphQL */ `
  mutation DeleteNotes(
    $input: DeleteNotesInput!
    $condition: ModelNotesConditionInput
  ) {
    deleteNotes(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
export const createWebPage = /* GraphQL */ `
  mutation CreateWebPage(
    $input: CreateWebPageInput!
    $condition: ModelWebPageConditionInput
  ) {
    createWebPage(input: $input, condition: $condition) {
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
export const updateWebPage = /* GraphQL */ `
  mutation UpdateWebPage(
    $input: UpdateWebPageInput!
    $condition: ModelWebPageConditionInput
  ) {
    updateWebPage(input: $input, condition: $condition) {
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
export const deleteWebPage = /* GraphQL */ `
  mutation DeleteWebPage(
    $input: DeleteWebPageInput!
    $condition: ModelWebPageConditionInput
  ) {
    deleteWebPage(input: $input, condition: $condition) {
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
export const createTMHUser = /* GraphQL */ `
  mutation CreateTMHUser(
    $input: CreateTMHUserInput!
    $condition: ModelTMHUserConditionInput
  ) {
    createTMHUser(input: $input, condition: $condition) {
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
export const updateTMHUser = /* GraphQL */ `
  mutation UpdateTMHUser(
    $input: UpdateTMHUserInput!
    $condition: ModelTMHUserConditionInput
  ) {
    updateTMHUser(input: $input, condition: $condition) {
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
export const deleteTMHUser = /* GraphQL */ `
  mutation DeleteTMHUser(
    $input: DeleteTMHUserInput!
    $condition: ModelTMHUserConditionInput
  ) {
    deleteTMHUser(input: $input, condition: $condition) {
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
export const createTMHPerson = /* GraphQL */ `
  mutation CreateTMHPerson(
    $input: CreateTMHPersonInput!
    $condition: ModelTMHPersonConditionInput
  ) {
    createTMHPerson(input: $input, condition: $condition) {
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
export const updateTMHPerson = /* GraphQL */ `
  mutation UpdateTMHPerson(
    $input: UpdateTMHPersonInput!
    $condition: ModelTMHPersonConditionInput
  ) {
    updateTMHPerson(input: $input, condition: $condition) {
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
export const deleteTMHPerson = /* GraphQL */ `
  mutation DeleteTMHPerson(
    $input: DeleteTMHPersonInput!
    $condition: ModelTMHPersonConditionInput
  ) {
    deleteTMHPerson(input: $input, condition: $condition) {
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
export const createTMHLocation = /* GraphQL */ `
  mutation CreateTMHLocation(
    $input: CreateTMHLocationInput!
    $condition: ModelTMHLocationConditionInput
  ) {
    createTMHLocation(input: $input, condition: $condition) {
      id
      name
      regionShortName
      homeChurchGroupID
      abbreviation
      serviceTimeDescription
      region
      facebookPageIds
      contact {
        name
        email
        phone
        extension
      }
      servicesTimes
      youth {
        name
        googleMapLink
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
        latitude
        longitude
        address1
        address2
        city
        state
        zip
        country
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
export const updateTMHLocation = /* GraphQL */ `
  mutation UpdateTMHLocation(
    $input: UpdateTMHLocationInput!
    $condition: ModelTMHLocationConditionInput
  ) {
    updateTMHLocation(input: $input, condition: $condition) {
      id
      name
      regionShortName
      homeChurchGroupID
      abbreviation
      serviceTimeDescription
      region
      facebookPageIds
      contact {
        name
        email
        phone
        extension
      }
      servicesTimes
      youth {
        name
        googleMapLink
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
        latitude
        longitude
        address1
        address2
        city
        state
        zip
        country
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
export const deleteTMHLocation = /* GraphQL */ `
  mutation DeleteTMHLocation(
    $input: DeleteTMHLocationInput!
    $condition: ModelTMHLocationConditionInput
  ) {
    deleteTMHLocation(input: $input, condition: $condition) {
      id
      name
      regionShortName
      homeChurchGroupID
      abbreviation
      serviceTimeDescription
      region
      facebookPageIds
      contact {
        name
        email
        phone
        extension
      }
      servicesTimes
      youth {
        name
        googleMapLink
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
        latitude
        longitude
        address1
        address2
        city
        state
        zip
        country
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
