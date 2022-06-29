import * as Sentry from '@sentry/browser';
import { Auth } from 'aws-amplify';
import React from 'react';
import './AuthPages.scss';
import MyAccountNav from '../../pages/users/MyAccountNav/MyAccountNav';
import { AuthStateData } from './AuthStateData';
import { UserActions, UserContext } from './UserContext';
import { Spinner } from 'reactstrap';

interface Props {
  navigation?: any;
  route?: any;
}

interface State {
  pass: string;
  user: string;
  authError: string;
  fromVerified: boolean;
  isLoading: boolean;
}

export default class SignIn extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    console.log(props.route);
    this.state = {
      pass: '',
      user: props.route?.params?.email ?? '',
      authError: '',
      fromVerified: props.route?.params?.fromVerified ?? false,
      isLoading: false,
    };
  }
  static UserConsumer = UserContext.Consumer;
  UNSAFE_componentWillMount(): void {
    console.log(this.props.route);
    this.setState({
      user: this.props.route?.params?.email ?? '',
      fromVerified: this.props.route?.params?.fromVerified ?? false,
    });
  }
  componentDidUpdate(prevProps: Props): void {
    //        console.log({ CompUpdate: this.props.route })
    if (this.props.route?.params?.email !== prevProps.route?.params?.email) {
      //            console.log("UPDATE1")
      this.setState({ user: this.props.route?.params?.email });
    }
    if (
      this.props.route?.params?.fromVerified !==
      prevProps.route?.params?.fromVerified
    ) {
      //            console.log("UPDATE2")
      this.setState({ fromVerified: this.props.route?.params?.fromVerified });
    }
  }
  async changeAuthState(
    action: UserActions,
    state: string,
    data?: AuthStateData | null
  ): Promise<void> {
    this.setState({
      pass: '',
      user: '',
      authError: '',
    });
    if (action.onStateChange) await action.onStateChange(state, data ?? null);
  }
  validateLogin(): boolean {
    if (!/^\S*$/.test(this.state.user)) {
      this.setState({ authError: 'Email cannot contain spaces' });
      return false;
    }
    if (!this.state.user) {
      this.setState({ authError: 'Email cannot be empty' });
      return false;
    }
    if (!this.state.pass) {
      this.setState({ authError: 'Password cannot be empty' });
      return false;
    }
    return true;
  }
  async handleSignIn(actions: any): Promise<void> {
    if (this.validateLogin()) {
      try {
        this.setState({ isLoading: true });
        Sentry.setUser({ email: this.state.user?.toLowerCase() });
        Sentry.setTag('User Email', this.state.user?.toLowerCase());
        await Auth.signIn(this.state.user.toLowerCase(), this.state.pass).then(
          async (user) => {
            if (user.challengeName == 'NEW_PASSWORD_REQUIRED') {
              await this.changeAuthState(actions, 'requireNewPassword', user);
            } else {
              await this.changeAuthState(actions, 'signedIn');
            }
          }
        );
      } catch (err: any) {
        this.setState({ authError: err.message });
        Sentry.configureScope((scope: any) => {
          scope.setUser(null);
        });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  /*handleEnter(
    actions: any,
    keyEvent: NativeSyntheticEvent<TextInputKeyPressEventData>
  ): void {
    if (keyEvent.nativeEvent.key === 'Enter') this.handleSignIn(actions);
  }
*/
  render(): React.ReactNode {
    return (
      <SignIn.UserConsumer>
        {({ userState, userActions }) => {
          console.log({ userState });
          if (!userState) return null;
          try {
            const cognitoUser = Auth.currentAuthenticatedUser();
            cognitoUser.then((user) => {
              const currentSession = Auth.currentSession();
              currentSession.then((session) => {
                user.refreshSession(
                  session.getRefreshToken(),
                  (err: any, session: any) => {
                    console.log('session', err, session);
                    if (!err) this.changeAuthState(userActions, 'signedIn');
                  }
                );
              });
            });
          } catch (e) {
            console.log('Unable to refresh Token', e);
          }
          return (
            <>
              {userState.authState === 'signIn' ||
              userState.authState === 'signedOut' ||
              userState.authState === 'signedUp' ? (
                <div
                  style={{ minHeight: '100vh' }}
                  className="SignInPageContainer"
                >
                  <MyAccountNav
                    navigationItems={[]}
                    toggle={() => null}
                    open={false}
                  ></MyAccountNav>
                  <div className="SignInContent">
                    <div className="SignInForm">
                      <p
                        className="SignInHeader"
                        //accessibilityRole="header"
                      >
                        The Meeting House Account Portal
                      </p>

                      <input
                        className="SignInInput"
                        //  autoCompleteType="email"
                        //textContentType="emailAddress"
                        type="email"
                        autoFocus
                        //keyboardType="email-address"
                        placeholder="Email"
                        value={this.state.user}
                        onChange={(e: any) =>
                          this.setState({ user: e.target.value })
                        }

                        //secureTextEntry={false}
                      ></input>
                      <input
                        className="SignInInput"
                        // autoCompleteType="password"
                        // textContentType="password"
                        // onKeyPress={(e: any) => {
                        //   this.handleEnter(userActions, e);
                        // }}
                        type="password"
                        placeholder="Password"
                        value={this.state.pass}
                        onChange={(e: any) =>
                          this.setState({ pass: e.target.value })
                        }
                      ></input>

                      <div className="SignInButtonContainer">
                        <button
                          className="SignInButton white"
                          //accessibilityLabel="Create account"
                          //accessibilityHint="Navigate to account creation page"
                          onClick={async () => {
                            await this.changeAuthState(
                              userActions,
                              'signUp',
                              null
                            );
                          }}
                        >
                          Create an Account
                        </button>
                        <button
                          className="SignInButton"
                          //  accessibilityLabel="Login"
                          //  accessibilityHint="Navigate to platform"
                          onClick={async () => {
                            await this.handleSignIn(userActions);
                          }}
                        >
                          {this.state.isLoading ? (
                            <>
                              <Spinner size="sm" /> Signing in...
                            </>
                          ) : (
                            'Sign In'
                          )}
                        </button>
                      </div>
                      <button
                        // accessibilityLabel="Forgot password"
                        // accessibilityHint="Navigate to forgot password page"
                        // accessibilityRole="button"
                        style={{
                          backgroundColor: 'white',
                          padding: 0,
                          border: 'none',
                          width: '13ch',
                          textAlign: 'left',
                        }}
                        onClick={async () => {
                          await this.changeAuthState(
                            userActions,
                            'forgotPassword'
                          );
                        }}
                      >
                        <div>Forgot password?</div>
                      </button>
                      <div
                      // accessibilityLiveRegion={'assertive'}
                      // accessibilityRole="alert"
                      >
                        {this.state.authError ? (
                          <img src="/static/svg/Announcement.svg" />
                        ) : null}
                        {this.state.authError}
                      </div>
                      <div
                      //   accessible={this.state.fromVerified}
                      //   accessibilityLiveRegion={'assertive'}
                      //  accessibilityRole="alert"
                      >
                        {this.state.fromVerified
                          ? 'User Verified. Please Login.'
                          : null}
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
            </>
          );
        }}
      </SignIn.UserConsumer>
    );
  }
}
