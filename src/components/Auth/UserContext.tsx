import * as React from 'react';
import { CognitoUser } from '@aws-amplify/auth';
import { AuthStateData } from './AuthStateData';
import { GraphQLResult } from '@aws-amplify/api';
import { GetTmhUserQuery, TmhF1SearchContributionReceiptsQuery } from 'API';

export type TMHUserData = {
  sub: string;
  given_name: string;
  family_name: string;
  phone_number: string;

  // eslint-disable-next-line camelcase
  email_verified: boolean;
  email: string;
} | null;
export interface TMHCognitoUser extends CognitoUser {
  attributes: TMHUserData;
  username: string;
}
export interface UserState {
  hasCompletedPersonalProfile: ProfileStatus;
  userExists: boolean;
  user:
    | NonNullable<GraphQLResult<GetTmhUserQuery>['data']>['getTMHUser']
    | undefined
    | null;
  f1Transactions: NonNullable<
    NonNullable<
      NonNullable<
        GraphQLResult<TmhF1SearchContributionReceiptsQuery>['data']
      >['tmhF1SearchContributionReceipts']
    >['results']
  >['contributionReceipt'];
  authState: any;
  hasCompletedOrganizationProfile: string;
  orgId: string;
  isOrg: boolean;
  initialAuthType: string | null;
  initialParams: any;
  idempotency: string;
  groups: string[] | null;
  groupsLoaded: boolean;
}
export interface UserActions {
  updateHasCompletedPersonalProfile(): Promise<void> | null;
  recheckUserState(): Promise<void>;
  updateHasCompletedOrganizationProfile(): Promise<void> | null;
  onStateChange(state: string, data: AuthStateData | null): Promise<any> | null;
  updateGroups(): Promise<void> | null;
  isMemberOf(group: string): boolean;
  isReady(): boolean;
  getReceipts(): Promise<void>;
  getCurrentUserProfile(): Promise<void>;
}
export enum ProfileStatus {
  Completed,
  Incomplete,
  Unknown,
}
export enum PaidStatus {
  Success,
  InProgress,
  PermissionNotGranted,
  MissingCustomer,
  Problem2,
  Unknown,
}
type UserContextType = {
  userActions: UserActions;
  userState: UserState | undefined;
};
export const UserContext = React.createContext<UserContextType>({
  userActions: {
    updateHasCompletedPersonalProfile: async () => {
      return;
    },
    recheckUserState: async () => {
      return;
    },
    updateHasCompletedOrganizationProfile: async () => {
      return;
    },
    onStateChange: async () => null,
    updateGroups: async () => {
      return;
    },
    isReady: () => {
      return false;
    },
    isMemberOf: () => {
      return false;
    },
    getReceipts: async () => {
      return;
    },
    getCurrentUserProfile: async () => {
      return;
    },
  },
  userState: undefined,
});
