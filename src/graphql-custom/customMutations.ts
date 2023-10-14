/* tslint:disable */
/* eslint-disable */
export const createSpeakerVideosCustom = /* GraphQL */ `
  mutation CreateSpeakerVideos($input: CreateSpeakerVideosInput!) {
    createSpeakerVideos(input: $input) {
      id
      createdAt
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
export const updateVideo = /* GraphQL */ `
  mutation UpdateVideo($input: UpdateVideoInput!) {
    updateVideo(input: $input) {
      id
    }
  }
`;
