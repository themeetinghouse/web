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

export const f1ListGroupTypes = /* GraphQL */ `
  query F1ListGroupTypes {
    F1ListGroupTypes {
      groupTypes {
        groupType {
          id
          name
          description
          isWebEnabled
          isSearchable
        }
      }
    }
  }
`;
export const f1ListGroups = /* GraphQL */ `
  query F1ListGroups($itemId: String) {
    F1ListGroups(itemId: $itemId) {
      groups {
        group {
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
        }
      }
    }
  }
`;
export const f1ListEventSchedules = /* GraphQL */ `
  query F1ListEventSchedules($itemId: [String]) {
    F1ListEventSchedules(itemId: $itemId) {
      id
      event {
        schedules {
          schedule {
            id
            name
            description
            startTime
            endTime
            numberRecurrences
            startDate
            endDate
            recurrenceType {
              name
            }
            recurrences {
              recurrence {
                recurrenceWeekly {
                  recurrenceFrequency
                  occurOnSunday
                  occurOnMonday
                  occurOnTuesday
                  occurOnWednesday
                  occurOnThursday
                  occurOnFriday
                  occurOnSaturday
                }
                recurrenceMonthly {
                  recurrenceFrequency
                  recurrenceOffset
                  monthDay
                  monthWeekDay
                }
              }
            }
            createdDate
            createByPerson
            lastUpdatedDate
            lastUpdatedByPerson
          }
        }
      }
    }
  }
`;
export const f1ListTimezones = /* GraphQL */ `
  query F1ListTimezones($itemId: [String]) {
    F1ListTimezones(itemId: $itemId) {
      id
      info {
        group {
          timeZone {
            id
            name
          }
        }
      }
    }
  }
`;
export const listF1ListGroup2s = /* GraphQL */ `
  query ListF1ListGroup2s(
    $filter: ModelF1ListGroup2FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listF1ListGroup2s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
      }
      nextToken
    }
  }
`;
