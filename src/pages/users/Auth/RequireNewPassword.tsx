import { Auth } from '@aws-amplify/auth';
import { useState } from 'react';
import { useUser } from './UserContext';
import { useNavigate } from 'react-router-dom';
import './AuthPages.scss';
export default function RequireNewPassword() {
  const navigate = useNavigate();
  const { state: userState } = useUser();
  const [state, setState] = useState({
    phone: '',
    code: '+1',
    given_name: '',
    family_name: '',
    email: '',
    authError: '',
    newPass: '',
    newPass2: '',
    resetting: false,
    authState: null,
  });
  const save = async (): Promise<void> => {
    console.log('Saving');
    if (!userState.user) return;
    try {
      if (state.newPass !== state.newPass2) {
        setState((prev) => ({ ...prev, authError: 'Passwords do not match' }));
        return;
      }
      await Auth.completeNewPassword(userState.user, state.newPass, {
        family_name: state.given_name,
        given_name: state.family_name,
        phone_number: state.code + state.phone,
      })
        .then(async () => {
          navigate('/account/');
        })
        .catch((e: any) => {
          console.log({ Error: e });
        });
    } catch (e: any) {
      setState((prev) => ({ ...prev, authError: e.message, resetting: false }));
    }
  };
  const handleChange = (e: any): void => {
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <div>
      <div>
        <div
          onClick={async () => {
            navigate('/account/signin');
          }}
        >
          <div>
            <img src="left.gif" />
            Back
          </div>
        </div>
      </div>

      <div>
        <div>Tell us more about yourself</div>
        <div>
          <input
            placeholder="First Name"
            name="given_name"
            value={state.given_name}
            onChange={handleChange}
          ></input>
          <input
            placeholder="Last Name"
            name="family_name"
            value={state.family_name}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <div>*</div>
          <input
            placeholder="Phone number"
            value={state.phone}
            name="phone"
            onChange={handleChange}
          ></input>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginBottom: '5.5%',
          }}
        >
          <input
            placeholder="New password"
            value={state.newPass}
            name="newPass"
            onChange={handleChange}
            type="password"
          ></input>
          <input
            type="password"
            placeholder="Confirm new password"
            name="newPass2"
            value={state.newPass2}
            onChange={handleChange}
          ></input>
        </div>
        <button type="button" onClick={save}>
          {state.resetting ? <img src="loading.gif" /> : 'Submit'}
        </button>
        <div
        //   accessibilityLiveRegion={'assertive'}
        //   accessibilityRole="alert"
        >
          {state.authError ? <img src="warning.gif" /> : null} {state.authError}
        </div>
      </div>
    </div>
  );
}
