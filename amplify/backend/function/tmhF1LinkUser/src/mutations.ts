/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTmhUser = /* GraphQL */ `
  mutation CreateTmhUser($input: CreateTMHUserInput!) {
    createTMHUser(input: $input) {
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
export const updateTmhUser = /* GraphQL */ `
  mutation UpdateTmhUser($input: UpdateTMHUserInput!) {
    updateTMHUser(input: $input) {
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
      f1PersonId
      f1HouseholdId
    }
  }
`;
export const deleteTmhUser = /* GraphQL */ `
  mutation DeleteTmhUser($input: DeleteTMHUserInput!) {
    deleteTMHUser(input: $input) {
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
