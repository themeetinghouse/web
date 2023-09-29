import { useState } from 'react';
import { GiveAuthManagerPage, useAuth } from './GiveAuthManager';
import { Auth } from 'aws-amplify';

export default function GiveRegisterAccount(props: {
  setPage: React.Dispatch<React.SetStateAction<GiveAuthManagerPage>>;
}) {
  const { setPage } = props;
  const { user, setUser } = useAuth();

  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      if (user.password !== user.confirm_password) {
        setErrorMessage('Passwords do not match.');
        return;
      }
      const cognitoUser = await Auth.signUp({
        username: user.email.toLowerCase(),
        password: user.password,
        attributes: {
          family_name: user.family_name,
          given_name: user.given_name,
          phone_number: '+1' + user.phone,
          email: user.email.toLowerCase(),
        },
      });
      console.log({ cognitoUser });
      setPage('verify');
    } catch (error: any) {
      console.error({ error });
      setErrorMessage(error?.message || 'Error signing up.');
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
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
          Register a TMH acccount
        </span>
        <span
          style={{
            fontSize: 14,
          }}
        >
          Enter your email so we can verify and sign you in
        </span>
      </div>
      <form>
        <label>Email</label>
        <input
          autoComplete="email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="Email"
          value={user.email}
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
        <label>First name</label>
        <input
          autoComplete="email"
          onChange={(e) =>
            setUser((previousUser) => ({
              ...previousUser,
              given_name: e.target.value,
            }))
          }
          value={user.given_name}
          placeholder="First name..."
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
        <label>Last name</label>
        <input
          autoComplete="email"
          value={user.family_name}
          onChange={(e) =>
            setUser((previousUser) => ({
              ...previousUser,
              family_name: e.target.value,
            }))
          }
          placeholder="Last name..."
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
        <label>Password</label>
        <input
          onChange={(e) =>
            setUser((previousUser) => ({
              ...previousUser,
              password: e.target.value,
            }))
          }
          value={user.password}
          placeholder="Password..."
          type="password"
          style={{
            width: '100%',
            backgroundColor: 'white',
            marginBottom: '26px',
            height: '56px',
            border: '2px solid #c8c8c8',
            padding: '16px 0px 16px 20px',
            fontSize: '16px',
            marginTop: 4,
          }}
        />
        <label>Confirm Password</label>
        <input
          onChange={(e) =>
            setUser((previousUser) => ({
              ...previousUser,
              confirm_password: e.target.value,
            }))
          }
          placeholder="Confirm password..."
          value={user.confirm_password}
          type="password"
          style={{
            width: '100%',
            backgroundColor: 'white',
            height: '56px',
            border: '2px solid #c8c8c8',
            marginBottom: '26px',
            padding: '16px 0px 16px 20px',
            fontSize: '16px',
            marginTop: 4,
          }}
        />
        <label>Phone number</label>
        <input
          value={user.phone}
          autoComplete="email"
          onChange={(e) =>
            setUser((previousUser) => ({
              ...previousUser,
              phone: e.target.value,
            }))
          }
          placeholder="Phone number..."
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
        <div
          style={
            errorMessage
              ? {
                  color: 'tomato',
                  fontSize: 16,
                  marginBottom: 60,
                }
              : {}
          }
        >
          {errorMessage}
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          <span style={{ flex: 1 }}>
            <button
              type="button"
              onClick={() => props?.setPage('verify')}
              style={{
                display: 'inline',
                backgroundColor: 'none',
                padding: 0,
                border: 'none',
              }}
            >
              {' '}
              <span
                style={{
                  textDecoration: 'underline',
                }}
              >
                Confirm a code{' '}
              </span>{' '}
            </button>
          </span>
          <div
            style={{
              display: 'flex',
              gap: 16,
            }}
          >
            <button
              disabled={isLoading}
              onClick={() => props.setPage('login')}
              className="GENextButton"
              type="button"
            >
              <span>Back</span>
            </button>
            <button
              disabled={isLoading}
              onClick={handleSubmit}
              className="GENextButton"
              type="button"
            >
              {isLoading ? <span>Loading...</span> : <span>Register</span>}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
