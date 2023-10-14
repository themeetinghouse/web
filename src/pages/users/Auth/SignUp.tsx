import { Auth } from 'aws-amplify';
import { useState } from 'react';
import * as Sentry from '@sentry/browser';
import { useHistory } from 'react-router-dom';
import './AuthPages.scss';
export default function SignUp() {
  const history = useHistory();
  const [state, setState] = useState({
    user: {
      first: '',
      last: '',
      pass: '',
      pass2: '',
      email: '',
      phone: '',
      code: '+1', // default to Canada
    },
    sendingData: false,
    authError: '',
  });
  const signUp = async (): Promise<void> => {
    if (validate()) {
      setState((prev) => ({ ...prev, authError: '' }));
      try {
        if (state.user.pass !== state.user.pass2) {
          setState((prev) => ({
            ...prev,
            authError: 'Passwords do not match',
          }));
          return;
        }
        if (!validate()) return;
        Sentry.setUser({ email: state.user.email.toLowerCase() });
        setState((prev) => ({ ...prev, sendingData: true }));
        await Auth.signUp({
          username: state.user.email.toLowerCase(),
          password: state.user.pass,
          attributes: {
            family_name: state.user.last,
            given_name: state.user.first,
            phone_number: state.user.code + state.user.phone,
            email: state.user.email.toLowerCase(),
          },
        }).then(async () => history.push('/account/confirmsignup'));
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
    }
  };
  const validate = () => {
    let val = true;
    let errorMsg = '';
    if (!state.user.first) {
      val = false;
      errorMsg = 'Please enter your first name';
    } else if (!state.user.last) {
      val = false;
      errorMsg = 'Please enter your last name';
    } else if (!state.user.email || !state.user.email.includes('@')) {
      val = false;
      errorMsg = 'Please enter a valid email';
    } else if (!state.user.pass) {
      val = false;
      errorMsg = 'Please enter a password';
    } else if (state.user.pass.length < 8) {
      errorMsg = 'Password must be at least 8 characters';
      val = false;
    } else if (!state.user.pass2) {
      val = false;
      errorMsg = 'Please confirm your password';
    } else if (state.user.pass !== state.user.pass2) {
      errorMsg = 'Passwords do not match';
      val = false;
    } else if (!state.user.phone) {
      val = false;
      errorMsg = 'Please enter a phone number';
    }
    setState((prev) => ({ ...prev, authError: errorMsg }));
    return val;
  };
  const handleChange = (field: any, input: string): void => {
    setState((prevState) => ({
      ...prevState,
      user: {
        ...prevState.user,
        [field]: input,
      },
    }));
  };
  return (
    <div className="SignInPageContainer">
      <div className="SignInContent">
        <div className="SignInForm">
          <div>
            <span className="SignInHeader" style={{ display: 'block' }}>
              Create your TMH account
            </span>
            <span>Create an account to manage your donations</span>
            <div
              style={{
                marginTop: 40,
                display: 'flex',
                flexDirection: 'row',
                gap: 20,
              }}
            >
              <input
                className="SignInInput"
                type="text"
                placeholder="First Name"
                value={state.user.first}
                onChange={(e) => handleChange('first', e.target.value)}
              ></input>

              <input
                className="SignInInput"
                placeholder="Last Name"
                value={state.user.last}
                onChange={(e) => handleChange('last', e.target.value)}
              ></input>
            </div>
            <div>
              <input
                className="SignInInput"
                type="email"
                placeholder="Email Address"
                value={state.user.email}
                onChange={(e) => handleChange('email', e.target.value)}
              ></input>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 20,
              }}
            >
              <input
                className="SignInInput"
                type="password"
                placeholder="Create Password"
                value={state.user.pass}
                onChange={(e) => handleChange('pass', e.target.value)}
              ></input>

              <input
                className="SignInInput"
                type="password"
                placeholder="Confirm Password"
                value={state.user.pass2}
                onChange={(e) => handleChange('pass2', e.target.value)}
              ></input>
            </div>
            <div>
              <input
                className="SignInInput"
                placeholder="Phone number"
                value={state.user.phone}
                onChange={(e) => {
                  if (
                    e.target.value.length < 11 &&
                    !e.target.value.match(/\D/g)
                  ) {
                    handleChange('phone', e.target.value);
                  }
                }}
              ></input>
            </div>
            <div className="SignInButtonContainer">
              <button
                className="SignInButton white"
                onClick={async () => {
                  history.push('/signin');
                }}
              >
                Back
              </button>
              <button className="SignInButton" onClick={signUp}>
                {state.sendingData ? 'Submitting...' : 'Continue'}
              </button>
            </div>
            {state.authError ? (
              <div style={{ color: 'tomato', marginBottom: 20 }}>
                {state.authError}
              </div>
            ) : null}
            <button
              style={{
                backgroundColor: 'white',
                padding: 0,
                border: 'none',
                width: '13ch',
                textAlign: 'left',
              }}
              onClick={async () => history.push('/account/confirmsignup')}
            >
              Confirm a code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
