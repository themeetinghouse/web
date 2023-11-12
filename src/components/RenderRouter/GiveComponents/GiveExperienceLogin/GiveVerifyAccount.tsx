import { useState } from 'react';
import { GiveAuthManagerPage, useAuth } from './GiveAuthManager';
import { Auth } from 'aws-amplify';
import { GraphQLResult, API } from '@aws-amplify/api';
import {
  CreateTMHUserInput,
  CreateTMHUserMutation,
  GetTMHUserQuery,
} from 'API';

import * as queries from '../../../../graphql/queries';
import * as mutations from '../../../../graphql/mutations';
import moment from 'moment';

export default function GiveVerifyAccount(props: {
  setPage: React.Dispatch<React.SetStateAction<GiveAuthManagerPage>>;
}) {
  const { user, setUser } = useAuth();
  const [form, setForm] = useState({ code: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      const confirmUser = await Auth.confirmSignUp(
        user.email.toLowerCase(),
        form.code
      );
      if (confirmUser === 'SUCCESS') {
        // create TMHUser
        const cognitoUser = await Auth.signIn({
          username: user.email.toLowerCase(),
          password: user.password,
        });
        console.log({ cognitoUser });
        const existingUser = (await API.graphql({
          query: queries.getTMHUser,
          variables: { id: cognitoUser.username },
          authMode: 'AMAZON_COGNITO_USER_POOLS',
        })) as GraphQLResult<GetTMHUserQuery>;
        if (existingUser?.data?.getTMHUser) {
          props.setPage('login');
          return;
        }
        const inputData: CreateTMHUserInput = {
          id: user.email,
          given_name: user?.given_name ?? '',
          family_name: user?.family_name ?? '',
          email: user?.email,
          phone: user?.phone,
          //  profileState: 'Incomplete',
          billingAddress: {},
          owner: user.email,
          joined: moment().format(),
        };
        console.log({ inputData: inputData });
        try {
          const createUser = (await API.graphql({
            query: mutations.createTMHUser,
            variables: {
              input: inputData,
            },
            authMode: 'AMAZON_COGNITO_USER_POOLS',
          })) as GraphQLResult<CreateTMHUserMutation>;
          console.log({ createUser: createUser });
        } catch (e) {
          console.log({ error: e });
        }
        props.setPage('login');
      } else {
        setErrorMessage(
          'There was an error verifying your account. Please try again.'
        );
      }
      console.debug({ user });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginBottom: 48,
        }}
      >
        <span
          style={{
            fontSize: 20,
          }}
        >
          Verify your TMH acccount
        </span>
        <span
          style={{
            fontSize: 14,
          }}
        >
          Enter your verification code to sign in
        </span>
      </div>
      <form>
        <label>Email</label>
        <input
          autoComplete="email"
          onChange={(e) =>
            setUser((previousUser) => ({
              ...previousUser,
              email: e.target.value,
            }))
          }
          placeholder="Email"
          value={user.email}
          type="text"
          style={{
            width: '100%',
            backgroundColor: 'white',
            height: '56px',
            border: '2px solid #c8c8c8',
            padding: '16px 0px 16px 20px',
            fontSize: '16px',
            marginBottom: '26px',
            marginTop: 4,
          }}
        />
        <label>Verification Code</label>
        <input
          autoComplete="current-password"
          onChange={(e) => setForm({ ...form, code: e.target.value })}
          placeholder="Code"
          value={form.code}
          type="text"
          style={{
            width: '100%',
            backgroundColor: 'white',
            height: '56px',
            border: '2px solid #c8c8c8',
            padding: '16px 0px 16px 20px',
            fontSize: '16px',
            marginBottom: errorMessage ? 20 : 60,
            marginTop: 4,
          }}
        />
        <span
          style={
            errorMessage === 'Code sent'
              ? { color: 'green' }
              : { color: 'tomato' }
          }
        >
          {errorMessage}
        </span>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <span style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <button
              type="button"
              onClick={async () => {
                try {
                  if (!user.email) throw new Error('Please enter your email');
                  await Auth.resendSignUp(user.email.toLowerCase());
                  setErrorMessage('Code resent');
                } catch (error: any) {
                  setErrorMessage(error.message);
                }
              }}
              style={{
                display: 'flex',
                backgroundColor: 'transparent',

                padding: 0,
                border: 'none',
                textDecoration: 'underline',
              }}
            >
              Resend code
            </button>
            <span>
              Already have an account? Click{' '}
              <span
                style={{
                  textDecoration: 'underline',
                }}
              >
                <button
                  type="button"
                  onClick={() => props?.setPage('login')}
                  style={{
                    display: 'inline',
                    backgroundColor: 'none',
                    padding: 0,
                    border: 'none',
                  }}
                >
                  here
                </button>
              </span>{' '}
              to sign in
            </span>
          </span>
          <button
            disabled={isLoading}
            onClick={handleSubmit}
            className="GENextButton"
            type="button"
          >
            {isLoading ? <span>Loading...</span> : <span>Verify</span>}
          </button>
        </div>
      </form>
    </div>
  );
}
