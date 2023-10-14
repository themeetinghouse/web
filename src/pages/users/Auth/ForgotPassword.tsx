import { Auth } from 'aws-amplify';
import { useState } from 'react';
import * as Sentry from '@sentry/browser';
import { Spinner } from 'reactstrap';
import './AuthPages.scss';
import { useHistory } from 'react-router-dom';
export default function ForgotPassword() {
  const history = useHistory();
  const [state, setState] = useState({
    email: '',
    authError: '',
    codeSent: false,
    code: '',
    newPass: '',
    newPass2: '',
    sendingCode: false,
    resetting: false,
  });

  const sendCode = async () => {
    try {
      setState((prev) => ({ ...prev, sendingCode: true }));
      Sentry.setUser({ email: state.email.toLowerCase() });
      await Auth.forgotPassword(state.email.toLowerCase()).then(() =>
        setState((prev) => ({ ...prev, codeSent: true }))
      );
    } catch (e: any) {
      setState((prev) => ({
        ...prev,
        authError: e.message,
        sendingCode: false,
      }));
      Sentry.configureScope((scope) => {
        scope.setUser(null);
      });
    }
  };

  const resetPass = async () => {
    try {
      if (state.newPass !== state.newPass2) {
        setState((prev) => ({ ...prev, authError: 'Passwords do not match' }));
        return;
      }
      setState((prev) => ({ ...prev, resetting: true }));
      Sentry.setUser({ email: state.email.toLowerCase() });

      await Auth.forgotPasswordSubmit(
        state.email.toLowerCase(),
        state.code,
        state.newPass
      ).then(async () => {
        history.push('/account/signin');
      });
    } catch (e: any) {
      setState((prev) => ({ ...prev, authError: e.message, resetting: false }));
      Sentry.configureScope((scope) => {
        scope.setUser(null);
      });
    }
  };
  return (
    <div style={{ minHeight: '100vh' }} className="SignInPageContainer">
      <div className="SignInContent">
        <div className="SignInForm">
          {!state.codeSent ? (
            <div>
              <p className="SignInHeader">Reset your password</p>
              <input
                className="SignInInput"
                placeholder="Enter your email"
                value={state.email}
                onChange={(e) =>
                  setState((prev) => ({ ...prev, email: e.target.value }))
                }
              ></input>
              <div className="SignInButtonContainer">
                <button
                  className="SignInButton white"
                  onClick={async () => {
                    history.push('/account/signin');
                  }}
                >
                  Back
                </button>
                <button className="SignInButton" onClick={sendCode}>
                  {state.sendingCode ? <img src="activity.gif" /> : 'Send'}
                </button>
              </div>
              <button
                className="PlainTextButton"
                onClick={() =>
                  setState((prev) => ({
                    ...prev,
                    codeSent: true,
                    authError: '',
                  }))
                }
              >
                <div>Submit a code</div>
              </button>
              <div>
                {state.authError ? (
                  <img src="/static/svg/Announcement.svg" />
                ) : null}{' '}
                {state.authError}
              </div>
            </div>
          ) : (
            <div>
              <p className="SignInHeader">Reset your password</p>
              <input
                className="SignInInput"
                placeholder="Enter your email"
                value={state.email}
                onChange={(e) =>
                  setState((prev) => ({ ...prev, email: e.target.value }))
                }
              ></input>
              <input
                className="SignInInput"
                placeholder="One-time security code"
                value={state.code}
                onChange={(e) =>
                  setState((prev) => ({ ...prev, code: e.target.value }))
                }
              ></input>
              <div>
                <input
                  className="SignInInput"
                  placeholder="New password"
                  type="password"
                  value={state.newPass}
                  onChange={(e) =>
                    setState((prev) => ({ ...prev, newPass: e.target.value }))
                  }
                ></input>
                <input
                  className="SignInInput"
                  type="password"
                  placeholder="Confirm new password"
                  value={state.newPass2}
                  onChange={(e) =>
                    setState((prev) => ({ ...prev, newPass2: e.target.value }))
                  }
                ></input>
              </div>
              <div className="SignInButtonContainer">
                <button
                  className="SignInButton white"
                  onClick={async () => {
                    history.push('/account/signin');
                  }}
                >
                  Back
                </button>
                <button className="SignInButton" onClick={resetPass}>
                  {state.resetting ? <Spinner /> : 'Submit'}
                </button>
              </div>
              <div>
                {state.authError ? (
                  <img src="/static/svg/Announcement.svg" />
                ) : null}{' '}
                {state.authError}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
