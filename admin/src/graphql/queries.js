// eslint-disable
// this is an auto generated file. This will be overwritten

export const getYoutubePlaylist = `query GetYoutubePlaylist {
  getYoutubePlaylist {
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
        channelTitle
      }
    }
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
export const getVideo = `query GetVideo($id: ID!) {
  getVideo(id: $id) {
    id
    createdBy
    createdDate
    postedDate
    locations {
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
    }
    title
    decription
    length
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
      postedDate
      locations {
        id
        canJoin
        visibleToNonMembers
        name
        location
        address
        phone
        email
        instagram
        twitter
        facebook
        website
      }
      title
      decription
      length
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
    }
    title
    content
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
        canJoin
        visibleToNonMembers
        name
        location
        address
        phone
        email
        instagram
        twitter
        facebook
        website
      }
      title
      content
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
        canJoin
        visibleToNonMembers
        name
        location
        address
        phone
        email
        instagram
        twitter
        facebook
        website
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
        canJoin
        visibleToNonMembers
        name
        location
        address
        phone
        email
        instagram
        twitter
        facebook
        website
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
        canJoin
        visibleToNonMembers
        name
        location
        address
        phone
        email
        instagram
        twitter
        facebook
        website
      }
    }
    nextToken
  }
}
`;
export const getLocation = `query GetLocation($id: ID!) {
  getLocation(id: $id) {
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
        canJoin
        visibleToNonMembers
        name
        location
        address
        phone
        email
        instagram
        twitter
        facebook
        website
      }
    }
    nextToken
  }
}
`;
