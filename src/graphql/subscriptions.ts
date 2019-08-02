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
export const onCreateResource = `subscription OnCreateResource {
  onCreateResource {
    id
  }
}
`;
export const onUpdateResource = `subscription OnUpdateResource {
  onUpdateResource {
    id
  }
}
`;
export const onDeleteResource = `subscription OnDeleteResource {
  onDeleteResource {
    id
  }
}
`;
export const onCreateVideo = `subscription OnCreateVideo {
  onCreateVideo {
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
    Youtube {
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
}
`;
export const onUpdateVideo = `subscription OnUpdateVideo {
  onUpdateVideo {
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
    Youtube {
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
}
`;
export const onDeleteVideo = `subscription OnDeleteVideo {
  onDeleteVideo {
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
    Youtube {
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
}
`;
export const onCreateBlog = `subscription OnCreateBlog {
  onCreateBlog {
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
export const onUpdateBlog = `subscription OnUpdateBlog {
  onUpdateBlog {
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
export const onDeleteBlog = `subscription OnDeleteBlog {
  onDeleteBlog {
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
export const onCreateNews = `subscription OnCreateNews {
  onCreateNews {
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
export const onUpdateNews = `subscription OnUpdateNews {
  onUpdateNews {
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
export const onDeleteNews = `subscription OnDeleteNews {
  onDeleteNews {
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
export const onCreateEvent = `subscription OnCreateEvent {
  onCreateEvent {
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
export const onUpdateEvent = `subscription OnUpdateEvent {
  onUpdateEvent {
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
export const onDeleteEvent = `subscription OnDeleteEvent {
  onDeleteEvent {
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
export const onCreateGroup = `subscription OnCreateGroup {
  onCreateGroup {
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
export const onUpdateGroup = `subscription OnUpdateGroup {
  onUpdateGroup {
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
export const onDeleteGroup = `subscription OnDeleteGroup {
  onDeleteGroup {
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
export const onCreateOrganization = `subscription OnCreateOrganization {
  onCreateOrganization {
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
export const onUpdateOrganization = `subscription OnUpdateOrganization {
  onUpdateOrganization {
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
export const onDeleteOrganization = `subscription OnDeleteOrganization {
  onDeleteOrganization {
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
export const onCreateLocation = `subscription OnCreateLocation {
  onCreateLocation {
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
export const onUpdateLocation = `subscription OnUpdateLocation {
  onUpdateLocation {
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
export const onDeleteLocation = `subscription OnDeleteLocation {
  onDeleteLocation {
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
export const onCreateStaff = `subscription OnCreateStaff {
  onCreateStaff {
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
export const onUpdateStaff = `subscription OnUpdateStaff {
  onUpdateStaff {
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
export const onDeleteStaff = `subscription OnDeleteStaff {
  onDeleteStaff {
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
export const onCreateRegion = `subscription OnCreateRegion {
  onCreateRegion {
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
export const onUpdateRegion = `subscription OnUpdateRegion {
  onUpdateRegion {
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
export const onDeleteRegion = `subscription OnDeleteRegion {
  onDeleteRegion {
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
