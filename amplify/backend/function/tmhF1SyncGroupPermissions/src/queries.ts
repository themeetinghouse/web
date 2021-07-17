/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTmhUser = /* GraphQL */ `
  query GetTmhUser($id: ID!) {
    getTMHUser(id: $id) {
      id
      given_name
      family_name
      owner
      profileImage {
        userId
        filenameSmall
        filenameMedium
        filenameLarge
        filenameUpload
      }
      joined
      f1PersonId
      f1HouseholdId
      createdAt
      updatedAt
      email
      phone
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
    }
  }
`;
export const listTmhUsers = /* GraphQL */ `
  query ListTmhUsers(
    $filter: ModelTMHUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTMHUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        given_name
        family_name
        owner
        profileImage {
          userId
          filenameSmall
          filenameMedium
          filenameLarge
          filenameUpload
        }
        joined
        f1PersonId
        f1HouseholdId
        createdAt
        updatedAt
        email
        phone
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
      }
      nextToken
    }
  }
`;
