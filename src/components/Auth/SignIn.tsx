import { Auth } from 'aws-amplify';
import * as Sentry from '@sentry/browser';
import React from 'react';
import { Spinner } from 'reactstrap';
import './AuthPages.scss';
import { useHistory } from 'react-router-dom';
import { useUser } from 'pages/users/Auth/UserContext';

type SignInProps = {
  navigation?: any;
  route?: any;
};
type SignInState = {
  pass: string;
  user: string;
  authError: string;
  fromVerified: boolean;
  isLoading: boolean;
};

export default function SignIn(props: SignInProps) {
  const history = useHistory();
  const { dispatch } = useUser();
  const [state, setState] = React.useState<SignInState>({
    pass: '',
    user: props.route?.params?.email ?? '',
    authError: '',
    fromVerified: props.route?.params?.fromVerified ?? false,
    isLoading: false,
  });
  const refreshSession = async (): Promise<void> => {
    try {
      const cognitoUser = await Auth.currentAuthenticatedUser();
      const currentSession = await Auth.currentSession();
      if (!currentSession.isValid()) {
        try {
          cognitoUser.refreshSession(
            currentSession.getRefreshToken(),
            (err: any) => {
              if (err) throw err;
              history.push('/account'); //changeAuthState(userActions, 'signedIn');
            }
          );
          console.log('Successfully refreshed session');
        } catch (error) {
          console.error({ error });
        }
      } else {
        history.push('/account'); //changeAuthState(userActions, 'signedIn');
      }
    } catch (error) {
      history.push('/account/signin'); //changeAuthState(userActions, 'signedIn');changeAuthState(userActions, 'signIn');
      console.log(error);
    }
  };
  React.useEffect(() => {
    if (
      props.route?.params?.fromVerified &&
      props.route.params.fromVerified !== state.fromVerified
    ) {
      setState((prev) => ({
        ...prev,
        fromVerified: Boolean(props.route?.params?.fromVerified),
      }));
    }
    if (props.route?.params?.email && props.route.params.email !== state.user) {
      setState((prev) => ({ ...prev, user: props.route.params.email }));
    }
  }, [props.route?.params?.email, props.route?.params?.fromVerified]);
  React.useEffect(() => {
    const attemptToRefresh = async () => {
      setState((prev) => ({ ...prev, isLoading: true }));
      await refreshSession();
      setState((prev) => ({ ...prev, isLoading: false }));
    };
    attemptToRefresh();
  }, []);
  // const changeAuthState = async (
  //   action: UserActions,
  //   state: string,
  //   data?: AuthStateData
  // ) => {
  //   setState((prev) => ({
  //     ...prev,
  //     pass: '',
  //     user: '',
  //     authError: '',
  //   }));
  //   if (action.onStateChange) await action.onStateChange(state, data ?? null);
  // };
  const validateLogin = (): boolean => {
    if (!/^\S*$/.test(state.user)) {
      setState((prev) => ({
        ...prev,
        authError: 'Email cannot contain spaces',
      }));
      return false;
    }
    if (!state.user) {
      setState((prev) => ({ ...prev, authError: 'Email cannot be empty' }));
      return false;
    }
    if (!state.pass) {
      setState((prev) => ({ ...prev, authError: 'Password cannot be empty' }));
      return false;
    }
    return true;
  };
  const handleSignIn = async () => {
    if (validateLogin()) {
      try {
        setState((prev) => ({ ...prev, isLoading: true }));
        Sentry.setUser({ email: state.user?.toLowerCase() });
        Sentry.setTag('User Email', state.user?.toLowerCase());
        await Auth.signIn(state.user.toLowerCase(), state.pass).then(
          async (user) => {
            if (user.challengeName == 'NEW_PASSWORD_REQUIRED') {
              history.push('/account/requirenewpassword');
            } else {
              dispatch({ type: 'SET_COGNITO_USER', payload: user });
              history.push('/account');
              //await changeAuthState(actions, 'signedIn');
            }
          }
        );
      } catch (err: any) {
        setState((prev) => ({ ...prev, authError: err.message }));
        Sentry.configureScope((scope: any) => {
          scope.setUser(null);
        });
      } finally {
        setState((prev) => ({ ...prev, isLoading: false }));
      }
    }
  };

  return (
    <div style={{ minHeight: '100vh' }} className="SignInPageContainer">
      <div className="SignInContent">
        <form className="SignInForm">
          <p className="SignInHeader">The Meeting House Account Portal</p>
          <input
            className="SignInInput"
            disabled={state.isLoading}
            type="email"
            autoFocus
            autoComplete="username"
            placeholder="Email"
            value={state.user}
            onChange={(e) => {
              e.persist();
              setState((prev) => ({ ...prev, user: e.target.value }));
            }}
          ></input>
          <input
            disabled={state.isLoading}
            className="SignInInput"
            autoComplete="current-password"
            type="password"
            placeholder="Password"
            value={state.pass}
            onChange={(e) => {
              e.persist();
              setState((prev) => ({ ...prev, pass: e.target.value }));
            }}
          ></input>

          <div className="SignInButtonContainer">
            <button
              type="button"
              className="SignInButton white"
              disabled={state.isLoading}
              onClick={async () => {
                history.push('/account/signup');
                //await changeAuthState(userActions, 'signUp', undefined);
              }}
            >
              Create an Account
            </button>
            <button
              type="button"
              className="SignInButton"
              disabled={state.isLoading}
              onClick={handleSignIn}
            >
              {state.isLoading ? (
                <>
                  <Spinner size="sm" /> Signing in...
                </>
              ) : (
                'Sign In'
              )}
            </button>
          </div>
          <button
            type="button"
            style={{
              backgroundColor: 'white',
              padding: 0,
              border: 'none',
              width: '13ch',
              textAlign: 'left',
            }}
            disabled={state.isLoading}
            onClick={async () => {
              history.push('/account/forgotpassword');
              //await changeAuthState(userActions, 'forgotPassword');
            }}
          >
            Forgot password?
          </button>
          <div role="alert">
            {state.authError ? (
              <img src="/static/svg/Announcement.svg" />
            ) : null}
            {state.authError}
          </div>
          <div role="alert">
            {state.fromVerified ? 'User Verified. Please Login.' : null}
          </div>

          <div style={{ marginTop: 10, fontSize: 10 }}>
            On January 16 we migrated to a signin system and passwords were
            reset. To login please follow the Forgot Password prompts to receive
            a new password.
          </div>
        </form>
      </div>
    </div>
  );
}
