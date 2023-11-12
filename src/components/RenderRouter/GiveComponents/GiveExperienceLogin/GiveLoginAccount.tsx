import { GetTMHUserQuery, TmhStripeAddCustomerQuery } from 'API';
import { getTMHUserForGiveNow } from 'graphql-custom/customQueries';
import { tmhStripeAddCustomer } from 'graphql/queries';
import { GEActionType } from '../GETypes';
import { useContext, useEffect, useState } from 'react';
import { Spinner } from 'reactstrap';
import { GEContext } from '../GEContext';
import { Auth } from 'aws-amplify';
import { v4 as uuidv4 } from 'uuid';
import { API, GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import { GiveAuthManagerPage } from './GiveAuthManager';

export default function GiveLoginAccount(props: {
  setPage: React.Dispatch<React.SetStateAction<GiveAuthManagerPage>>;
}) {
  const { state, dispatch } = useContext(GEContext);
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoadingInitial, setIsLoadingInitial] = useState(false);
  useEffect(function loadLoggedInUser() {
    (async () => {
      try {
        setIsLoadingInitial(true);
        const user = await Auth.currentAuthenticatedUser();
        if (user) {
          const TMHUser = (await API.graphql({
            query: getTMHUserForGiveNow,
            variables: { id: user.username },
            authMode: 'AMAZON_COGNITO_USER_POOLS',
          })) as GraphQLResult<GetTMHUserQuery>;
          console.debug({ TMHUser });
          const stripeCustomerID = TMHUser.data?.getTMHUser?.stripeCustomerID;
          console.debug({ stripeCustomerID });
          // this runs every time because the function handles creating and updating the customer on stripe
          try {
            const tmhStripeLinkUser = (await API.graphql({
              query: tmhStripeAddCustomer,
              variables: { idempotency: uuidv4() },
              authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
            })) as GraphQLResult<TmhStripeAddCustomerQuery>;
            console.debug({ tmhStripeLinkUser: tmhStripeLinkUser });
          } catch (e: any) {
            console.error({ Error: e });
          } finally {
            dispatch({
              type: GEActionType.NAVIGATE_TO_PAYMENT_INFO,
              payload: { user },
            });
          }
        }
      } catch (error) {
        console.error({ error });
      } finally {
        setIsLoadingInitial(false);
      }
    })();
  }, []);

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      setErrorMessage('');
      const user = await Auth.signIn(form.email, form.password);
      console.debug({ user });
      if (user) {
        const TMHUser = (await API.graphql({
          query: getTMHUserForGiveNow,
          variables: { id: user.username },
          authMode: 'AMAZON_COGNITO_USER_POOLS',
        })) as GraphQLResult<GetTMHUserQuery>;
        console.debug({ TMHUser });
        const stripeCustomerID = TMHUser.data?.getTMHUser?.stripeCustomerID;
        console.debug({ stripeCustomerID });
        if (!stripeCustomerID) {
          try {
            const tmhStripeLinkUser = (await API.graphql({
              query: tmhStripeAddCustomer,
              variables: { idempotency: uuidv4() },
              authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
            })) as GraphQLResult<TmhStripeAddCustomerQuery>;
            console.debug({ tmhStripeLinkUser: tmhStripeLinkUser });
          } catch (e: any) {
            console.error({ Error: e });
          }
        } else {
          console.debug(
            'User already has a stripe customer ID',
            stripeCustomerID
          );
        }
        dispatch({
          type: GEActionType.NAVIGATE_TO_PAYMENT_INFO,
          payload: { user },
        });
      } else setErrorMessage('An error occurred. No user found');
      console.debug({ user });
    } catch (error1: any) {
      console.error({ error1 });
      setErrorMessage(error1.message || 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (state.user) {
      dispatch({
        type: GEActionType.NAVIGATE_TO_PAYMENT_INFO,
        payload: { amount: state.content.amount, user: state.user },
      });
    }
  }, [state.user]);
  if (isLoadingInitial)
    return (
      <div
        style={{
          height: 200,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Spinner />
      </div>
    );
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
          Login to your TMH acccount
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
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="Email"
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
          autoComplete="current-password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          placeholder="Password"
          type="password"
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
            Don&apos;t have an account? Click{' '}
            <span
              style={{
                textDecoration: 'underline',
              }}
            >
              <button
                type="button"
                onClick={() => props?.setPage('register')}
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
            to create one
          </span>
          <button
            disabled={isLoading}
            onClick={handleSubmit}
            className="GENextButton"
            type="button"
          >
            {isLoading ? <span>Loading...</span> : <span>Next</span>}
          </button>
        </div>
      </form>
    </div>
  );
}
