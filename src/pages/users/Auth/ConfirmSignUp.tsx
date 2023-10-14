import { useState } from 'react';
import * as Sentry from '@sentry/browser';
import { Auth } from 'aws-amplify';
import { Spinner } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import './AuthPages.scss';
export default function ConfirmSignUp() {
  const history = useHistory();
  const [state, setState] = useState({
    email: '',
    code: '',
    sendingData: false,
    authError: '',
  });
  const handleConfirmSignUp = async (): Promise<void> => {
    try {
      setState((prev) => ({ ...prev, sendingData: true }));
      Sentry.setUser({ email: state.email.toLowerCase() });
      await Auth.confirmSignUp(state.email.toLowerCase(), state.code).then(
        async () => {
          history.push('/account/signin');
        }
      );
    } catch (e: any) {
      setState((prev) => ({
        ...prev,
        authError: e.message,
        sendingData: false,
      }));
      Sentry.configureScope((scope) => {
        scope.setUser(null);
      });
    }
  };
  return (
    <div className="SignInPageContainer">
      <div className="SignInContent">
        <div className="SignInForm">
          <div>
            <p className="SignInHeader">Enter your security code</p>
            <input
              className="SignInInput"
              placeholder="Email Address"
              value={state.email}
              onChange={(e) =>
                setState((prev) => ({ ...prev, email: e.target.value }))
              }
            ></input>
            <div>
              <input
                className="SignInInput"
                placeholder="One-time security code"
                value={state.code}
                onChange={(e) =>
                  setState((prev) => ({ ...prev, code: e.target.value }))
                }
              ></input>
              <div className="SignInButtonContainer">
                <button
                  className="SignInButton white"
                  data-testid="myConfirmSignup-back"
                  onClick={async () => {
                    history.push('/account/signin');
                  }}
                >
                  Back
                </button>
                <button className="SignInButton" onClick={handleConfirmSignUp}>
                  {state.sendingData ? <Spinner /> : 'Submit'}
                </button>
              </div>
            </div>
            <div>
              {state.authError ? (
                <img src="/static/svg/Announcement.svg" />
              ) : null}
              {state.authError}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
