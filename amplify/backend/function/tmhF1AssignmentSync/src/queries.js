/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

const f1ListActivities = /* GraphQL */ `
  query F1ListActivities($page: String) {
    F1ListActivities(page: $page) {
      id
      uri
      name
      description
      hasCheckin
      checkinMinutesBefore
      hasNameTag
      hasReceipt
      startAge
      endAge
      confidential
      requiresRegistration
      rosterBySchedule
      assignmentsOverrideClosedRoom
      autoAssignmentOption
      pagerEnabled
      webEnabled
    }
  }
`;
const f1ListAssignments = /* GraphQL */ `
  query F1ListAssignments($itemId: String, $page: String) {
    F1ListAssignments(itemId: $itemId, page: $page) {
      id
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
    }
  }
`;
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
  f1ListAssignments,
  f1ListActivities,
  listF1Assignmentss,
};
