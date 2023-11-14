/* tslint:disable */
/* eslint-disable */

import * as APITypes from '../API';
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createSpeakerVideosCustom = /* GraphQL */ `
  mutation CreateSpeakerVideos($input: CreateSpeakerVideosInput!) {
    createSpeakerVideos(input: $input) {
      id
      createdAt
    }
  }
`;

export const deleteTMHCompassion = /* GraphQL */ `mutation DeleteTMHCompassion(
  $input: DeleteTMHCompassionInput!
  $condition: ModelTMHCompassionConditionInput
) {
  deleteTMHCompassion(input: $input, condition: $condition) {
    id
  }
}
` as GeneratedMutation<
  APITypes.DeleteTMHCompassionMutationVariables,
  APITypes.DeleteTMHCompassionMutation
>;

export const updateTMHCompassion = /* GraphQL */ `mutation UpdateTMHCompassion(
  $input: UpdateTMHCompassionInput!
  $condition: ModelTMHCompassionConditionInput
) {
  updateTMHCompassion(input: $input, condition: $condition) {
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
}
` as GeneratedMutation<
  APITypes.UpdateTMHCompassionMutationVariables,
  APITypes.UpdateTMHCompassionMutation
>;

export const createTMHCompassion = /* GraphQL */ `mutation CreateTMHCompassion(
  $input: CreateTMHCompassionInput!
  $condition: ModelTMHCompassionConditionInput
) {
  createTMHCompassion(input: $input, condition: $condition) {
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
}
` as GeneratedMutation<
  APITypes.CreateTMHCompassionMutationVariables,
  APITypes.CreateTMHCompassionMutation
>;

export const createTMHSite = /* GraphQL */ `
  mutation CreateTMHSite(
    $input: CreateTMHSiteInput!
    $condition: ModelTMHSiteConditionInput
  ) {
    createTMHSite(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;

export const deleteSitePerson = /* GraphQL */ `
  mutation DeleteSitePerson(
    $input: DeleteSitePersonInput!
    $condition: ModelSitePersonConditionInput
  ) {
    deleteSitePerson(input: $input, condition: $condition) {
      id
    }
  }
`;

export const createSitePerson = /* GraphQL */ `
  mutation CreateSitePerson(
    $input: CreateSitePersonInput!
    $condition: ModelSitePersonConditionInput
  ) {
    createSitePerson(input: $input, condition: $condition) {
      id
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
    }
  }
`;

export const updateSpeaker = /* GraphQL */ `
  mutation UpdateSpeaker($input: UpdateSpeakerInput!) {
    updateSpeaker(input: $input) {
      id
      name
      image
      hidden
    }
  }
`;

export const updateAnnouncement = /* GraphQL */ `
  mutation UpdateAnnouncement($input: UpdateAnnouncementInput!) {
    updateAnnouncement(input: $input) {
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
  }
`;

export const DeleteSpeaker = /*GraphQL */ ` 
mutation DeleteSpeaker($input: DeleteSpeakerInput!) {
  deleteSpeaker(input: $input) {
    updatedAt
  }
}
`;

export const deleteSpeakerVideos = /* GraphQL */ `
  mutation DeleteSpeakerVideos($input: DeleteSpeakerVideosInput!) {
    deleteSpeakerVideos(input: $input) {
      updatedAt
    }
  }
`;

export const updateSpeakerVideos = /* GraphQL */ `
  mutation UpdateSpeakerVideos($input: UpdateSpeakerVideosInput!) {
    updateSpeakerVideos(input: $input) {
      id
      speakerVideosSpeakerId
      speakerVideosVideoId
      videoPublishedDate
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
  }
`;
export const updateVideo = /* GraphQL */ `
  mutation UpdateVideo($input: UpdateVideoInput!) {
    updateVideo(input: $input) {
      id
      videoTypes
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
    }
  }
`;
