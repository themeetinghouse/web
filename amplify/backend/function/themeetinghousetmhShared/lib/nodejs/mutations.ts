/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTMHUser = /* GraphQL */ `
  mutation CreateTMHUser(
    $input: CreateTMHUserInput!
    $condition: ModelTMHUserConditionInput
  ) {
    createTMHUser(input: $input, condition: $condition) {
      id
      given_name
      family_name
      email
      phone
      owner
      stripeCustomerID
      stripeSubscriptionID
      billingAddress {
        city
        country
        line1
        line2
        postal_code
        state
        __typename
      }
      profileImage {
        userId
        filenameSmall
        filenameMedium
        filenameLarge
        filenameUpload
        __typename
      }
      joined
      f1PersonId
      f1HouseholdId
      total
      createdAt
      updatedAt
      __typename
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
      given_name
      family_name
      email
      phone
      owner
      stripeCustomerID
      stripeSubscriptionID
      billingAddress {
        city
        country
        line1
        line2
        postal_code
        state
        __typename
      }
      profileImage {
        userId
        filenameSmall
        filenameMedium
        filenameLarge
        filenameUpload
        __typename
      }
      joined
      f1PersonId
      f1HouseholdId
      total
      createdAt
      updatedAt
      __typename
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

export const createF1ListGroup2 = /* GraphQL */ `
  mutation CreateF1ListGroup2($input: CreateF1ListGroup2Input!) {
    createF1ListGroup2(input: $input) {
      id
      name
      description
      startDate
      expirationDate
      isOpen
      isPublic
      hasChildcare
      isSearchable
      churchCampus {
        id
        name
      }
      groupType {
        id
        name
      }
      groupURL
      gender {
        name
      }
      maritalStatus {
        name
      }
      startAgeRange
      endAgeRange
      dateRangeType {
        id
        name
      }
      leadersCount
      membersCount
      openProspectsCount
      event {
        id
        name
      }
      createdDate
      lastUpdatedDate
      isLocationPrivate
      timeZone {
        id
        name
      }
      location {
        id
        name
        description
        isOnline
        url
        address {
          address1
          address2
          address3
          city
          stProvince
          postalCode
          county
          country
          carrierRoute
          deliveryPoint
          latitude
          longitude
          createdDate
          lastUpdatedDate
        }
        createdDate
        lastUpdatedDate
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateF1ListGroup2 = /* GraphQL */ `
  mutation UpdateF1ListGroup2($input: UpdateF1ListGroup2Input!) {
    updateF1ListGroup2(input: $input) {
      id
      name
      description
      startDate
      expirationDate
      isOpen
      isPublic
      hasChildcare
      isSearchable
      churchCampus {
        id
        name
      }
      groupType {
        id
        name
      }
      groupURL
      gender {
        name
      }
      maritalStatus {
        name
      }
      startAgeRange
      endAgeRange
      dateRangeType {
        id
        name
      }
      leadersCount
      membersCount
      openProspectsCount
      event {
        id
        name
      }
      createdDate
      lastUpdatedDate
      isLocationPrivate
      timeZone {
        id
        name
      }
      location {
        id
        name
        description
        isOnline
        url
        address {
          address1
          address2
          address3
          city
          stProvince
          postalCode
          county
          country
          carrierRoute
          deliveryPoint
          latitude
          longitude
          createdDate
          lastUpdatedDate
        }
        createdDate
        lastUpdatedDate
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteF1ListGroup2 = /* GraphQL */ `
  mutation DeleteF1ListGroup2($input: DeleteF1ListGroup2Input!) {
    deleteF1ListGroup2(input: $input) {
      id
      name
      description
      startDate
      expirationDate
      isOpen
      isPublic
      hasChildcare
      isSearchable
      churchCampus {
        id
        name
      }
      groupType {
        id
        name
      }
      groupURL
      gender {
        name
      }
      maritalStatus {
        name
      }
      startAgeRange
      endAgeRange
      dateRangeType {
        id
        name
      }
      leadersCount
      membersCount
      openProspectsCount
      event {
        id
        name
      }
      createdDate
      lastUpdatedDate
      isLocationPrivate
      timeZone {
        id
        name
      }
      location {
        id
        name
        description
        isOnline
        url
        address {
          address1
          address2
          address3
          city
          stProvince
          postalCode
          county
          country
          carrierRoute
          deliveryPoint
          latitude
          longitude
          createdDate
          lastUpdatedDate
        }
        createdDate
        lastUpdatedDate
      }
      createdAt
      updatedAt
    }
  }
`;

export const createF1Assignments = /* GraphQL */ `
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
export const updateF1Assignments = /* GraphQL */ `
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
export const deleteF1Assignments = /* GraphQL */ `
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
