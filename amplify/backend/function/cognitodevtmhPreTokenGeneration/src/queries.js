/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

const listF1Assignmentss = /* GraphQL */ `
  query ListF1Assignmentss(
    $filter: ModelF1AssignmentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listF1Assignmentss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        uri
        personId
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
      nextToken
    }
  }
`;
module.exports = {
  listF1Assignmentss,
};
