import * as APITypes from '../../API';
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createVerse = /* GraphQL */ `
  mutation CreateVerse(
    $input: CreateVerseInput!
    $condition: ModelVerseConditionInput
  ) {
    createVerse(input: $input, condition: $condition) {
      id
      createdAt
    }
  }
`;

export const deleteLivestream = /* GraphQL */ `mutation DeleteLivestream(
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
` as GeneratedMutation<
  APITypes.DeleteLivestreamMutationVariables,
  APITypes.DeleteLivestreamMutation
>;

export const createLivestream = /* GraphQL */ `mutation CreateLivestream(
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
` as GeneratedMutation<
  APITypes.CreateLivestreamMutationVariables,
  APITypes.CreateLivestreamMutation
>;

export const updateLivestream = /* GraphQL */ `mutation UpdateLivestream(
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
` as GeneratedMutation<
  APITypes.UpdateLivestreamMutationVariables,
  APITypes.UpdateLivestreamMutation
>;

export const updateSeries = /* GraphQL */ `
  mutation UpdateSeries(
    $input: UpdateSeriesInput!
    $condition: ModelSeriesConditionInput
  ) {
    updateSeries(input: $input, condition: $condition) {
      id
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
export const deleteVerse = /* GraphQL */ `
  mutation DeleteVerse(
    $input: DeleteVerseInput!
    $condition: ModelVerseConditionInput
  ) {
    deleteVerse(input: $input, condition: $condition) {
      id
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
      createdAt
    }
  }
`;
