/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

const createF1Assignments = /* GraphQL */ `
  mutation CreateF1Assignments($input: CreateF1AssignmentsInput!) {
    createF1Assignments(input: $input) {
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
  }
`;
const updateF1Assignments = /* GraphQL */ `
  mutation UpdateF1Assignments($input: UpdateF1AssignmentsInput!) {
    updateF1Assignments(input: $input) {
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
  }
`;
const deleteF1Assignments = /* GraphQL */ `
  mutation DeleteF1Assignments($input: DeleteF1AssignmentsInput!) {
    deleteF1Assignments(input: $input) {
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
  }
`;
module.exports = {
  createF1Assignments,
  updateF1Assignments,
  deleteF1Assignments,
};
