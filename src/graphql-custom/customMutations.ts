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

export const updateSpeakerVideos = /* GraphQL */ `
  mutation UpdateSpeakerVideos($input: UpdateSpeakerVideosInput!) {
    updateSpeakerVideos(input: $input) {
      id
      speakerVideosSpeakerId
      speakerVideosVideoId
      videoPublishedDate
    }
  }
  `