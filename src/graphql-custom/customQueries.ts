import * as APITypes from '../API';
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

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
        episodeDescription
        series {
          bannerImage {
            src
            alt
          }
        }
        pdf
      }
      nextToken
    }
  }
`;
export const listTMHCompassions = /* GraphQL */ `query ListTMHCompassions(
  $filter: ModelTMHCompassionFilterInput
  $limit: Int
  $nextToken: String
) {
  listTMHCompassions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      sites
      region
      name
      description
      website
      image
      imagealt
      address
      Phone
      email
      social {
        twitter
        facebook
        instagram
      }
      location {
        longitude
        latitude
        address
      }
    }
    nextToken
  }
}
` as GeneratedQuery<
  APITypes.ListTMHCompassionsQueryVariables,
  APITypes.ListTMHCompassionsQuery
>;

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
          }
        }
        position
        isTeacher
        isStaff
        isCoordinator
        isOverseer
      }
      nextToken
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
export const getTMHPerson = /* GraphQL */ `
  query GetTMHPerson($id: ID!) {
    getTMHPerson(id: $id) {
      id
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
        }
        nextToken
      }
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
      pdf
      topics
      series {
        bannerImage {
          src
          alt
        }
        babyHeroImage {
          src
          alt
        }
      }
      tags
      createdAt
      updatedAt
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
      }
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
            createdAt
          }
          nextToken
        }
        createdAt
      }
      nextToken
    }
  }
`;

export const tmhStripeListProducts = /* GraphQL */ `
  query TmhStripeListProducts {
    tmhStripeListProducts {
      products {
        id
        name
      }
      error
    }
  }
`;

export const getBlogSeries = /* GraphQL */ `
  query GetBlogSeries($id: ID!) {
    getBlogSeries(id: $id) {
      id
      title
      blogs {
        items {
          id
          blogSeriesID
          blogPostID
          createdAt
          updatedAt
          blogPost {
            id
            author
            publishedDate
            expirationDate
            blogStatus
            description
            blogTitle
            squareImage {
              src
              alt
            }
            bannerImage {
              src
              alt
            }
            babyHeroImage {
              src
              alt
            }
          }
        }
        nextToken
      }
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
      }
      nextToken
    }
  }
`;

export const listSpeakerVideos = `
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
      speakerVideosVideoId
      videoPublishedDate
      createdAt
      updatedAt
    }
    nextToken
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
        title
        videos {
          items {
            id
            videoID
            customPlaylistID
            video {
              id
              episodeTitle
              episodeNumber
              seriesTitle
              publishedDate
              thumbnailDescription
              length
              Youtube {
                snippet {
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
            }
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;

export const getTMHUserForGiveNow = /* GraphQL */ `
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
      total
      joined
      f1PersonId
      f1HouseholdId
      createdAt
      updatedAt
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
        blogSeriesId
        blogSeriesIndex
        blogStatus
        description
        blogTitle
        createdAt
        updatedAt
        squareImage {
          src
          alt
        }
        bannerImage {
          src
          alt
        }
        babyHeroImage {
          src
          alt
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
        speakers {
          items {
            id
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
              series {
                id
                seriesType
                title
                description
                image
                startDate
                endDate
              }
              publishedDate
              recordedDate
              description
              thumbnailDescription
              referencedMedia
              campaigns
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
        originalEpisodeTitle
        episodeNumber
        seriesTitle
        series {
          id
        }
        publishedDate
        recordedDate
        description
        referencedMedia
        campaigns
        bibleVerses
        topics
        qandeh
        length
        YoutubeIdent
        Youtube {
          snippet {
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
    seriesType
    title
    description
    image
    startDate
    endDate
  }
}
`;
export const listSeries = `query ListSeries(
  $filter: ModelSeriesFilterInput
  $limit: Int
  $nextToken: String
) {
  listSeries(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      seriesType
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
export const getSeriesBySeriesType = `query GetSeriesBySeriesType(
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
      bannerImage { 
        src
        alt
      }
      babyHeroImage { 
        src
        alt
      }
      videos {
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
          thumbnailDescription
          length
          YoutubeIdent
          videoTypes
          notesURL
          videoURL
          audioURL
        }
        nextToken
      }
      seriesType
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
        seriesType
        bannerImage {
          src
          alt
        }
        babyHeroImage {
          src
          alt
        }
        title
        description
        image
      }
      nextToken
      total
    }
  }
`;

export const getBlogForSearch = /* GraphQL */ `
  query GetBlog($id: ID!) {
    getBlog(id: $id) {
      id
      author
      tags
      squareImage {
        src
        alt
      }
      blogSeriesId
      bannerImage {
        src
        alt
      }
      babyHeroImage {
        src
        alt
      }
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
      blogStatus
      description
      content
      blogTitle
      topics
      tags
      squareImage {
        src
        alt
      }
      bannerImage {
        src
        alt
      }
      babyHeroImage {
        src
        alt
      }
    }
  }
`;
export const getSpeakerVideos = `query GetVideo($id: ID!) {
  getVideo(id: $id) {
    id
    speakers {
      items {
        id
        video {
          id
        }
      }
    }
  }
}
`;
export const getVideo = `query GetVideo($id: ID!) {
  getVideo(id: $id) {
    id
    episodeTitle
    originalEpisodeTitle
    episodeNumber
    seriesTitle
    series {
      id
      seriesType
      title
      description
      image
      startDate
      endDate
    }
    speakers {
      items {
        id
        video {
          id
        }
      }
    }
    publishedDate
    recordedDate
    description
    thumbnailDescription
    length
    YoutubeIdent
    videoTypes
    notesURL
    videoURL
    audioURL
  }
}
`;
export const getVideoForImport = `query GetVideo($id: ID!) {
  getVideo(id: $id) {
    id
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
      speakers {
        items {
          speaker{
            id
          }
        }
      }
      episodeTitle
      originalEpisodeTitle
      episodeNumber
      seriesTitle
      series {
        id
        seriesType
        title
        description
        image
        startDate
        endDate
      }
      publishedDate
      recordedDate
      description
      thumbnailDescription
      referencedMedia
      campaigns
      bibleVerses
      topics
      qandeh
      length
      YoutubeIdent
      Youtube {
        id
        kind
        etag
        snippet {
          publishedAt
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

    }
    nextToken
  }
}
`;
export const getVideoByYoutubeIdent = `query GetVideoByYoutubeIdent(
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
      episodeTitle
      originalEpisodeTitle
      thumbnailDescription
      episodeNumber
      seriesTitle
      videoTypes
      notesURL
      videoURL
      audioURL

    }
    nextToken
  }
}
`;
export const getNotesCustom = `query GetNotes($id: ID!) {
  getNotes(id: $id) {
    id
    pdf
    title
    content
    questions
  }
}
`;

export const getVideoByVideoType = `query GetVideoByVideoType(
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
      episodeTitle
      episodeNumber
      seriesTitle
      series {
        id
        bannerImage { 
          src
          alt
        }
        babyHeroImage {
          src
          alt
        }
      }
      publishedDate
      description
      thumbnailDescription
      length
      viewCount
      YoutubeIdent
      Youtube {
        snippet {
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
        publishedDate
        expirationDate
        blogStatus
        description
        blogTitle
        hiddenMainIndex
        squareImage {
          src
          alt
        }
        bannerImage {
          src
          alt
        }
        babyHeroImage {
          src
          alt
        }
      }
      nextToken
      total
    }
  }
`;
export const searchVideos = `query SearchVideos(
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
      episodeTitle
      episodeNumber
      series {
        id
        title
      }
      publishedDate
      description
      thumbnailDescription
      length
      videoTypes
    }
    nextToken
    total
  }
}
`;

export const getCustomPlaylist = `
  query GetCustomPlaylist($id: ID!) {
    getCustomPlaylist(id: $id) {
      id
      seriesType
      title
      description
      createdAt
      updatedAt
      videos {
        items {
          id
          videoID
          customPlaylistID
          createdAt
          updatedAt
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
            thumbnailDescription
            closedCaptioning
            referencedMedia
            campaigns
            bibleVerses
            topics
            qandeh
            length
            YoutubeIdent
            Youtube {
              id
              kind
              etag
              snippet {
                publishedAt
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
            createdAt
            updatedAt
            series {
              id
              seriesType
              title
              description
              image
              startDate
              endDate
              createdAt
              updatedAt
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
                  thumbnailDescription
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  createdAt
                  updatedAt
                }
                nextToken
              }
              blogs {
                items {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogStatus
                  description
                  content
                  blogTitle
                  topics
                  tags
                  createdAt
                  updatedAt
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

export const getBlogsByVideoForWatchPage = /* GraphQL */ `
  query GetVideo($id: ID!) {
    getVideo(id: $id) {
      id
      series {
        id
        blogPosts {
          items {
            id
            videoSeriesId
            blogId
            createdAt
            updatedAt
            blog {
              id
              author
              createdBy
              createdDate
              publishedDate
              expirationDate
              blogStatus
              description
              blogTitle
              topics
              tags
              hiddenMainIndex
              squareImage {
                src
                alt
              }
              createdAt
              updatedAt
            }
          }
          nextToken
        }
      }
    }
  }
`;
