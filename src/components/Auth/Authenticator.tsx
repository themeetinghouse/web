import Analytics from '@aws-amplify/analytics';
import { API, graphqlOperation } from '@aws-amplify/api';
import Auth from '@aws-amplify/auth';
//import * as Linking from 'expo-linking';
import moment from 'moment';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
//import * as Sentry from '@sentry/browser';
import { GraphQLResult } from '@aws-amplify/api';
import {
  CreateTMHUserInput,
  CreateTMHUserMutation,
  GetTMHUserQuery,
  TmhF1LinkUserQuery,
  TmhF1SearchContributionReceiptsQuery,
  TmhF1SyncGroupPermissionsQuery,
  TmhStripeAddCustomerQuery,
} from 'API';
import { RouteComponentProps } from 'react-router-dom';
import * as mutations from '../../../src/graphql/mutations';
import * as queries from '../../../src/graphql/queries';
import PaymentsCommon from '../../pages/users/paymentsCommon';
import { ProfileStatus, TMHCognitoUser, UserContext } from './UserContext';
import Validate from './Validate';

//const PERSISTENCE_KEY = "NAVIGATION_STATE"

interface State {
  hasCompletedPersonalProfile: ProfileStatus;
  hasF1Linked: boolean;
  hasStripeLinked: boolean;
  userExists: boolean;
  user:
    | NonNullable<GraphQLResult<GetTMHUserQuery>['data']>['getTMHUser']
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
export default class Authenticator extends React.Component<
  RouteComponentProps<any>,
  State
> {
  constructor(props: RouteComponentProps<any>) {
    super(props);
    this.state = {
      hasF1Linked: false,
      hasStripeLinked: false,
      initialParams: null,
      groups: null,
      hasCompletedPersonalProfile: ProfileStatus.Unknown,
      userExists: false,
      user: null,
      f1Transactions: null,
      authState: 'signedOut',
      hasCompletedOrganizationProfile: 'Unknown',
      orgId: '',
      isOrg: false,
      groupsLoaded: false,
      initialAuthType: null,
      idempotency: uuidv4(),
      // initialUrl: '',
    };
  }
  async componentDidMount(): Promise<void> {
    try {
      await this.updateGroups();
    } catch (e) {
      console.log({ UpdateGroupsError: e });
    }
    console.log({ pathname: this.props.location.pathname });
    if (this.props.location.pathname == '/signin') {
      this.setState({ authState: 'signIn' });
      console.log('SIGNIN');
    } else if (this.props.location.pathname == '/signup') {
      this.setState({ authState: 'signUp' });
      console.log('SIGNUP');
    } else if (this.props.location.pathname == '/verifycontact') {
      this.setState({ authState: 'verifyContact' });
      console.log('VERIFYCONTACT');
    } else if (this.props.location.pathname == '/confirmsignup') {
      this.setState({ authState: 'confirmSignUp' });
      console.log('CONFIRMSIGNUP');
    } else if (this.props.location.pathname == '/forgotpassword') {
      this.setState({ authState: 'forgotPassword' });
      console.log('FORGOTPASSWORD');
    } else if (this.props.location.pathname == '/requirenewpassword') {
      this.setState({ authState: 'requireNewPassword' });
      console.log('REQUIRENEWPASSWORD');
    }
    await this.getAuthInitialState();
    await this.performStartup();
  }
  isReady = (): boolean => {
    if (this.state.groups) return true;
    else {
      this.updateGroups();
      return false;
    }
  };
  isMemberOf = (group: string): boolean => {
    if (this.state.groups) return this.state.groups.includes(group);
    else return false;
  };
  updateGroups = async (): Promise<void> => {
    console.log('Starting Update Groups');
    try {
      const currentUser =
        (await Auth.currentAuthenticatedUser()) as TMHCognitoUser;
      const userSession = currentUser.getSignInUserSession();
      const refreshToken = userSession?.getRefreshToken();
      if (refreshToken)
        currentUser.refreshSession(refreshToken, (err: any, session: any) => {
          console.log('UPDATED GROUPS!');
          currentUser.setSignInUserSession(session);
        });
      const user = (await Auth.currentAuthenticatedUser()) as TMHCognitoUser;
      this.setState({
        groups: user.getSignInUserSession()?.getAccessToken().payload[
          'cognito:groups'
        ],
        groupsLoaded: true,
      });
      console.log({
        'Access Groups': user.getSignInUserSession()?.getAccessToken().payload[
          'cognito:groups'
        ],
      });
    } catch (e) {
      console.log({ updateGroupsError: e });
    }
  };
  async performStartup(): Promise<void> {
    this.trackUserId();
    if (this.state.authState == 'signedIn') {
      await this.recheckUserState();
    } else if (this.state.authState == 'signIn') {
      //  await this.props.onStateChange('signIn', null);
    }
  }
  private user: TMHCognitoUser | undefined | null;

  async ensureUserExists(performChecks: () => Promise<void>): Promise<void> {
    let userExists = false;
    let userDB: any;
    this.user = await Auth.currentAuthenticatedUser().catch(() => {
      console.log('No current authenticated user');
    });
    if (this.user != null) {
      const { attributes } = this.user;

      const handleUser = async (getUser: GraphQLResult<GetTMHUserQuery>) => {
        console.log({ getUser: getUser });
        if (getUser.data == null || getUser.data == undefined) {
          //  Sentry.captureEvent(getUser);
          console.log({ Errors: getUser.errors });
        }
        if (getUser?.data?.getTMHUser == null) {
          console.log('Trying to create');
          const inputData: CreateTMHUserInput = {
            id: this.user?.username,
            given_name: attributes?.given_name ?? '',
            family_name: attributes?.family_name ?? '',
            email: attributes?.email,
            phone: attributes?.phone_number,
            //  profileState: 'Incomplete',
            billingAddress: {},
            owner: this.user?.username,
            joined: moment().format(),
          };

          try {
            const createUser = (await API.graphql({
              query: mutations.createTMHUser,
              variables: {
                input: inputData,
              },
              authMode: 'AMAZON_COGNITO_USER_POOLS',
            })) as GraphQLResult<CreateTMHUserMutation>;
            userDB = createUser?.data?.createTMHUser;
            userExists = true;
            console.log({ createUser: createUser });
          } catch (e) {
            console.log({ error: e });
          }
        } else {
          userDB = getUser?.data?.getTMHUser;
          userExists = true;
          console.log('User exists');
        }
      };
      console.log({ username: this.user['username'] });
      const z = API.graphql({
        query: queries.getTMHUser,
        variables: { id: this.user['username'] },
        authMode: 'AMAZON_COGNITO_USER_POOLS',
      }) as Promise<GraphQLResult<GetTMHUserQuery>>;
      await z.then(handleUser).catch(handleUser);

      console.log({ userExists: userExists });
      this.setState({ user: userDB, userExists: userExists }, performChecks);
    }
  }

  async syncF1GroupPermissions(): Promise<boolean> {
    console.log('syncF1Permissions');

    try {
      const tmhF1SyncGroupPermissions = (await API.graphql({
        query: queries.tmhF1SyncGroupPermissions,
        authMode: 'AMAZON_COGNITO_USER_POOLS',
      })) as GraphQLResult<TmhF1SyncGroupPermissionsQuery>;
      console.log(tmhF1SyncGroupPermissions);
      return true;
    } catch (e) {
      console.log({ Error: e });
      return false;
    }
  }
  async checkIfStripeLinked(): Promise<boolean> {
    console.log('CheckStripeLink');
    if (this.state.user?.stripeCustomerID == null) {
      try {
        const tmhStripeLinkUser = (await API.graphql({
          query: queries.tmhStripeAddCustomer,
          variables: { idempotency: uuidv4() },
          authMode: 'AMAZON_COGNITO_USER_POOLS',
        })) as GraphQLResult<TmhStripeAddCustomerQuery>;
        console.log(tmhStripeLinkUser);
        return true;
      } catch (e: any) {
        console.log({ Error: e });
        return false;
      }
    }
    return true;
  }
  async checkIfF1Linked(): Promise<boolean> {
    console.log('CheckF1Link');
    if (
      this.state.user?.f1PersonId == null ||
      this.state.user?.f1HouseholdId == null
    ) {
      try {
        const tmhF1LinkUser = (await API.graphql({
          query: queries.tmhF1LinkUser,
          authMode: 'AMAZON_COGNITO_USER_POOLS',
        })) as GraphQLResult<TmhF1LinkUserQuery>;
        console.log(tmhF1LinkUser);
        return true;
      } catch (e) {
        console.log({ Error: e });
        return false;
      }
    }
    return true;
  }
  recheckUserState = async (): Promise<void> => {
    console.log('recheckUserState');
    await this.updateGroups();
    await this.ensureUserExists(async (): Promise<void> => {
      //   const paidStatus = await this.checkIfPaid();
      const linkF1 = await this.checkIfF1Linked();
      const linkStripe = await this.checkIfStripeLinked();
      //const syncF1 = await this.syncF1GroupPermissions();
      //console.log({ sync: syncF1 });
      const profileStatus = await this.checkIfCompletedProfile();
      this.setState(
        {
          //  hasPaidState: paidStatus,
          hasStripeLinked: linkStripe,
          hasF1Linked: linkF1,
          hasCompletedPersonalProfile: profileStatus,
        },
        async () => {
          await this.performNavigation();
        }
      );
    });
  };
  async performNavigation(): Promise<void> {
    console.log('NAVIGATING');
    switch (this.state.hasCompletedPersonalProfile) {
      case ProfileStatus.Completed:
        /*const initialUrl = await Linking.getInitialURL();
            console.log(initialUrl);
            if (Platform.OS == 'web' && initialUrl?.includes('auth/payment3')) {
              if (
                this.isMemberOf('friends') ||
                this.isMemberOf('partners') ||
                this.isMemberOf('admin') ||
                this.isMemberOf('legacyUserGroup1') ||
                this.isMemberOf('subscriptionPartners') ||
                this.isMemberOf('courseAdmin') ||
                this.isMemberOf('courseUser') ||
                this.isMemberOf('courseCoach')
              ) {
                RootNavigation.navigate('mainApp', {});
                break;
              } else if (
                !this.state.initialUrl.includes('app/resource') &&
                (this.isMemberOf('subscriptionkyearlyyears') ||
                  this.isMemberOf('subscriptionkykids') ||
                  this.isMemberOf('subscriptionkyyouth'))
              ) {
                RootNavigation.navigate('mainApp', {
                  screen: 'mainDrawer',
                  params: {
                    screen: 'ResourceScreen',
                    params: {
                      create: false,
                      id: constants['SETTING_KY_GROUP_ID'],
                    },
                  },
                });
                break;
              }
            }
            RootNavigation.navigate('mainApp', {});*/
        break;
      case ProfileStatus.Incomplete:
        /* RootNavigation.navigate('auth', {
              screen: 'Payment3',
            });*/
        break;
    }

    console.log('DONE PERFORM NAVIGATION');
  }
  async checkIfCompletedProfile(): Promise<ProfileStatus> {
    console.debug('checkIfCompletedProfile');
    console.debug({
      user: this.state.userExists,
    });
    if (this.state.userExists) {
      const handleUser = (getUser: GraphQLResult<GetTMHUserQuery>) => {
        const response = Validate.Profile(getUser?.data?.getTMHUser);
        console.log({ Validate: response });
        console.debug({ checkIfCompletedProfileResult: response.result });
        if (response.result) return ProfileStatus.Completed;
        else if (!response.result) return ProfileStatus.Incomplete;
        else return ProfileStatus.Unknown;
      };
      const getUser = API.graphql(
        graphqlOperation(queries.getTMHUser, { id: this.user?.username })
      ) as Promise<GraphQLResult<GetTMHUserQuery>>;
      return await getUser.then(handleUser).catch(handleUser);
    }
    return ProfileStatus.Unknown;
  }
  updateHasCompletedPersonalProfile = (): void => {
    this.checkIfCompletedProfile();
  };
  renderFallback(): React.ReactNode {
    return <div>loading...</div>;
  }
  trackUserId = async (): Promise<void> => {
    console.log('Setting up Analytics');
    try {
      const cognitoUser =
        (await Auth.currentAuthenticatedUser()) as TMHCognitoUser;
      const { attributes } = cognitoUser;
      const userAttributes = mapToArrayOfStrings(attributes);
      const groups = cognitoUser.getSignInUserSession()?.getAccessToken()
        ?.payload?.['cognito:groups'];
      console.log({
        Email: attributes?.email,
        Sub: attributes?.sub,
        userAttributes: userAttributes,
      });
      if (groups == undefined)
        Analytics.updateEndpoint({
          address: attributes?.email,
          channelType: 'EMAIL',
          optOut: 'NONE',
          userId: attributes?.sub,
          userAttributes,
        });
      else
        Analytics.updateEndpoint({
          address: attributes?.email,
          channelType: 'EMAIL',
          optOut: 'NONE',
          userId: attributes?.sub,
          userAttributes,
          attributes: { groups },
        });
    } catch (error) {
      console.log({ trackUserIdError: error });
    }
  };
  getReceipts = async (): Promise<any> => {
    if (this.state.f1Transactions == null) {
      const z = await PaymentsCommon.getReceipts();
      if (z)
        this.setState({
          f1Transactions: z.contributionReceipt,
        });
    }
  };

  getCurrentUserProfile = async (): Promise<void> => {
    if (this.state.user == null) {
      const z = await PaymentsCommon.getCurrentUserProfile();
      this.setState({
        user: z.data?.getTMHUser,
      });
    }
  };
  async getAuthInitialState(): Promise<void> {
    /* const initialUrl = await Linking.getInitialURL();
    const initialParams = Linking.parse(initialUrl ?? '').queryParams;

    this.setState({ initialUrl: initialUrl ?? '' });
    console.log({ 'INITIAL URL': initialUrl });
    console.log({ initialParams: initialParams });
    if (initialUrl?.toLowerCase().includes('/auth/signup'))
      this.setState({
        initialAuthType: 'signup',
        initialParams,
      });
    else {
      this.setState({ initialAuthType: 'signin', initialParams });
    }*/
  }

  static UserProvider = UserContext.Provider;
  render(): React.ReactNode {
    console.log({
      UserState: [
        'User Info',
        { AuthState: this.state.authState },
        { 'Profile state': this.state.hasCompletedPersonalProfile },
      ],
    });

    return (
      <Authenticator.UserProvider
        value={{
          userState: {
            ...this.state,
          },
          userActions: {
            updateHasCompletedPersonalProfile: this.recheckUserState,
            updateHasCompletedOrganizationProfile: this.recheckUserState,
            recheckUserState: this.recheckUserState,
            onStateChange: async (state, data) => {
              this.setState({ authState: state }, () => {
                if (state == 'signUp') this.props.history.push('/signup');
                else if (state == 'requireNewPassword')
                  this.props.history.push('/requireNewPassword');
                else if (state == 'signIn') this.props.history.push('/signIn');
                else if (state == 'verifyContact')
                  this.props.history.push('/verifyContact');
                else if (state == 'confirmSignUp')
                  this.props.history.push('/confirmSignUp');
                else if (state == 'forgotPassword')
                  this.props.history.push('/forgotPassword');
                else if (state == 'signedIn')
                  this.props.history.push('/account');
                this.performStartup();
              });
            },
            updateGroups: this.updateGroups,
            isReady: this.isReady,
            isMemberOf: this.isMemberOf,
            getReceipts: this.getReceipts,
            getCurrentUserProfile: this.getCurrentUserProfile,
          },
        }}
      >
        {this.props.children}
      </Authenticator.UserProvider>
    );
  }
}
const mapObj = (f: any) => (obj: any) =>
  Object.keys(obj).reduce((acc, key) => ({ ...acc, [key]: f(obj[key]) }), {});
const toArrayOfStrings = (value: any) => [`${value}`];
const mapToArrayOfStrings = mapObj(toArrayOfStrings);
