import { GEContext } from './GEContext';
import { useCallback, useContext, useState } from 'react';
import { GEPage, GEActionType } from './GETypes';
import GiveToggleButton from 'pages/users/Give/GiveToggleButton';
import GiftAmountButton from './GiftAmountButton';
import GiveSelect from 'pages/users/Give/GiveSelect';
import './GiveExperience.scss';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import ProfileForm from 'pages/users/ProfilePage/ProfileForm';
import { useEffect } from 'react';
import GiveAmountBanner from './GiveAmountBanner';
import GiveOnlineBankingInfo from './GiveOnlineBankingInfo';
import { API, GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import * as queries from '../../../../src/graphql/queries';
import { tmhStripeAddCustomer } from 'graphql/queries';
import {
  GetTMHUserQuery,
  TMHUser,
  TmhStripeAddCustomerQuery,
  TmhStripeAddPaymentQuery,
  TmhStripeAddSubscriptionQuery,
  UpdateTMHUserMutation,
} from 'API';
import { v4 as uuidv4 } from 'uuid';
import PaymentsCard from './PaymentCard';
import { getTMHUserForGiveNow } from 'graphql-custom/customQueries';
import { updateTMHUser } from 'graphql/mutations';
import GiveAuthManager from './GiveExperienceLogin/GiveAuthManager';
import moment from 'moment';

let env = 'unknown';
if (window.location === undefined) env = 'mobile';
else if (window.location.hostname === 'localhost') env = 'dev';
else if (window.location.hostname.includes('beta')) env = 'beta';
else if (window.location.hostname.includes('dev')) env = 'dev';
else env = 'prod';
const PageOne = () => {
  const { dispatch, state } = useContext(GEContext);
  const [error, setError] = useState('');
  const today = moment().format('YYYY-MM-DD');
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <GiveToggleButton
        selection={state.content?.giftType}
        setSelection={(selected) =>
          dispatch({
            type: GEActionType.SET_GIFT_TYPE,
            payload: selected,
          })
        }
      ></GiveToggleButton>

      <GiftAmountButton></GiftAmountButton>
      <label
        style={{
          fontSize: 24,
          lineHeight: '32px',
          marginTop: 48,
          fontWeight: 300,
          marginBottom: 12,
        }}
      >
        Where would you like to give?
      </label>
      <GiveSelect />
      {state.content?.giftType === 'Recurring' ? (
        <>
          <label htmlFor="frequency">Frequency</label>
          <select
            data-testid="Frequency"
            value={state.content.frequency}
            onChange={(e) =>
              dispatch({
                type: GEActionType.SET_FREQUENCY,
                payload: e.target.value,
              })
            }
            className="GiveInput"
            id="frequency"
          >
            <option value="Every week">Every week</option>
            <option value="Every 2 weeks">Every 2 weeks</option>
            <option value="Every month">Every month</option>
            {/* <option value={`1st & 15th monthly`}>{'1st & 15th monthly'}</option> */}
          </select>
          <label htmlFor="date">Starting</label>
          <input
            min={today}
            data-testid="StartDate"
            value={moment(state.content.startDate * 1000).format('YYYY-MM-DD')}
            onChange={(e) => {
              dispatch({
                type: GEActionType.SET_START_DATE,
                payload: new Date(e.target.value).valueOf() / 1000,
              });
            }}
            className="GiveInput"
            placeholder={'YYYY-MM-DD'}
            type="date"
          />
        </>
      ) : null}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flex: 1,
        }}
      >
        <span style={{ color: 'tomato', flex: 1 }}>{error}</span>
        <button
          onClick={() => {
            if (!state.content.amount) {
              setError('Please select an amount');
            } else if (!state.content.fund.name || !state.content.fund.id) {
              setError('Please select a fund');
            } else {
              setError('');
              dispatch({
                type: GEActionType.NAVIGATE_TO_AUTH,
              });
            }
          }}
          className="GENextButton"
        >
          Next
        </button>
      </div>
    </div>
  );
};
const makePayment = async ({
  fundID,
  amount,
  paymentMethodId,
  selection,
  frequency,
  startingDate,
}: {
  fundID: string;
  amount: any;
  paymentMethodId?: string;
  selection?: string;
  frequency?: string;
  startingDate?: number;
}): Promise<any> => {
  if (!amount) {
    console.log('No amount');
    return;
  }
  if (!fundID) {
    console.log('No id');
    return;
  }
  const variables = {
    idempotency: uuidv4(),
    amount: amount,
    fund: fundID,
  } as any;
  if (paymentMethodId) {
    variables['paymentMethodId'] = paymentMethodId;
  }
  console.log('Making a payment to ', fundID, ' for ', amount);
  try {
    if (selection == 'Recurring') {
      console.log({ frequency, amount, fundID, startingDate });
      const tmhStripeAddSubscription = (await API.graphql({
        query: queries.tmhStripeAddSubscription,
        variables: {
          idempotency: uuidv4(),
          paymentMethodId: paymentMethodId,
          startDate: Math.round(startingDate as number),
          fund: fundID,
          frequency,
          amount,
        },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })) as GraphQLResult<TmhStripeAddSubscriptionQuery>;
      console.log({ tmhStripeAddSubscription });
      return tmhStripeAddSubscription.data?.tmhStripeAddSubscription?.message;
    } else {
      const tmhStripeAddPayment = (await API.graphql({
        query: queries.tmhStripeAddPayment,
        variables: {
          paymentMethodId: paymentMethodId,
          idempotency: uuidv4(),
          amount: amount,
          fund: fundID,
        },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })) as GraphQLResult<TmhStripeAddPaymentQuery>;
      console.log({ tmhStripeAddPayment });
      return tmhStripeAddPayment.data?.tmhStripeAddPayment?.message;
    }
  } catch (error) {
    console.log({ error });
    return error;
  }
};

const PageThree = () => {
  const [form, setForm] = useState<any>({});
  const [isLoading, setIsLoading] = useState(false);
  const { state, dispatch } = useContext(GEContext);
  const [userData, setUserData] = useState<TMHUser>();
  const loadUserData = useCallback(async () => {
    console.log('Loading user data');
    try {
      setIsLoading(true);
      const TMHUser = (await API.graphql({
        query: getTMHUserForGiveNow,
        variables: { id: state.user.username },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })) as GraphQLResult<GetTMHUserQuery>;
      console.log({ TMHUser });
      setForm({
        phone: TMHUser.data?.getTMHUser?.phone,
        given_name: TMHUser.data?.getTMHUser?.given_name,
        family_name: TMHUser.data?.getTMHUser?.family_name,
        email: TMHUser.data?.getTMHUser?.email,
        billingAddress: {
          line1: TMHUser.data?.getTMHUser?.billingAddress?.line1,
          city: TMHUser.data?.getTMHUser?.billingAddress?.city,
          state: TMHUser.data?.getTMHUser?.billingAddress?.state,
          postal_code: TMHUser.data?.getTMHUser?.billingAddress?.postal_code,
          country: TMHUser.data?.getTMHUser?.billingAddress?.country,
        },
      });
      setUserData(TMHUser.data?.getTMHUser as TMHUser);
    } catch (error) {
      console.log({ error });
    } finally {
      setIsLoading(false);
    }
  }, []);
  useEffect(() => {
    loadUserData();
  }, [loadUserData]);
  const handleSubmit = async () => {
    console.log({ form });
    const tempNewUser = {
      billingAddress: {
        line1: form?.billingAddress?.line1,
        city: form?.billingAddress?.city,
        state: form?.billingAddress?.state,
        postal_code: form?.billingAddress?.postal_code,
        country: form?.billingAddress?.country,
      },
    } as TMHUser;
    if (form?.phone !== userData?.phone) tempNewUser['phone'] = form?.phone;
    if (form?.given_name !== userData?.given_name)
      tempNewUser['given_name'] = form?.given_name;
    if (form?.family_name !== userData?.family_name)
      tempNewUser['family_name'] = form?.family_name;
    if (form?.email !== userData?.email) tempNewUser['email'] = form?.email;
    try {
      setIsLoading(true);
      const updateUser = (await API.graphql({
        query: updateTMHUser,
        variables: {
          input: {
            ...tempNewUser,
            id: state.user.username,
          },
        },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })) as GraphQLResult<UpdateTMHUserMutation>;
      console.log({ updateUser });
      try {
        const tmhStripeLinkUser = (await API.graphql({
          query: tmhStripeAddCustomer,
          variables: { idempotency: uuidv4() },
          authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
        })) as GraphQLResult<TmhStripeAddCustomerQuery>;
        console.log({ tmhStripeLinkUser: tmhStripeLinkUser });
      } catch (error) {
        console.log({ error });
      } finally {
        setIsLoading(false);
      }
      dispatch({
        type: GEActionType.NAVIGATE_TO_PAYMENT_CARD,
      });
    } catch (error) {
      console.log({ error });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    console.log('Updated form:', form);
  }, [form]);
  useEffect(() => {
    console.log({ user: state.user });
  }, [state.user]);
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 60 }}>
      <GiveAmountBanner
        goBack={() => dispatch({ type: GEActionType.NAVIGATE_GIVE_NOW })}
        amount={state.content.amount}
      ></GiveAmountBanner>
      <ProfileForm
        setForm={setForm}
        isFromGive={true}
        form={form}
      ></ProfileForm>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}
      >
        <button
          disabled={isLoading}
          onClick={handleSubmit}
          className="GENextButton"
          type="button"
        >
          {isLoading ? <span>Loading...</span> : <span>Next</span>}
        </button>
      </div>
    </div>
  );
};
const PageFour = () => {
  const { state, dispatch } = useContext(GEContext);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const isProfileValid = () => {
    return true;
  };
  const isPaymentValid = () => {
    return true;
  };
  isPaymentValid();
  isProfileValid();
  useEffect(() => {
    console.log({ user: state.user });
    const loadUserData = async () => {
      try {
        const user = (await API.graphql({
          query: getTMHUserForGiveNow,
          variables: { id: state.user.username },
          authMode: 'AMAZON_COGNITO_USER_POOLS',
        })) as GraphQLResult<GetTMHUserQuery>;
        console.log({ user7: user });
        dispatch({
          type: GEActionType.SET_BILLING_DETAILS,
          payload: { user: user.data?.getTMHUser },
        });
      } catch (error) {
        console.error({ error });
      }
    };
    loadUserData();
  }, [state.user]);
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 60 }}>
      <GiveAmountBanner
        goBack={() => dispatch({ type: GEActionType.NAVIGATE_GIVE_NOW })}
        amount={state.content.amount}
      ></GiveAmountBanner>
      <PaymentsCard />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}
      >
        {errorMessage}
        {state?.content?.selectedPaymentMethodId ? (
          <button
            disabled={isLoading}
            onClick={async () => {
              setIsLoading(true);
              console.log({ state });
              const paymentParams: any = {};
              paymentParams.fundID = state?.content?.fund?.id;
              paymentParams.amount = state?.content?.amount;
              paymentParams.paymentMethodId =
                state?.content?.selectedPaymentMethodId;
              paymentParams.selection = state?.content?.giftType;
              paymentParams.frequency = state?.content?.frequency;
              paymentParams.startingDate = state?.content?.startDate;

              const result = await makePayment(paymentParams);
              if (result === 'SUCCESS') {
                setIsLoading(false);
                console.log({ result });

                dispatch({
                  type: GEActionType.NAVIGATE_TO_COMPLETED,
                  payload: { status: 'Success' },
                });
              } else {
                setIsLoading(false);
                setErrorMessage(
                  "We're sorry, something went wrong.. Please contact support."
                );
              }
            }}
            className="GENextButton"
          >
            {isLoading ? 'Donating...' : 'Donate'}
          </button>
        ) : null}
      </div>
    </div>
  );
};
const CompletionPage = () => {
  return (
    <div>
      <h1>Thank You</h1>
      <p>
        A few clicks later and you are now part of this great missing of growing
        loving communities of Jesus followers who live and share his irreligious
        message.
      </p>
    </div>
  );
};
export default function GiveExperience() {
  const [stripePromise] = useState(() =>
    loadStripe(
      env == 'beta'
        ? 'pk_live_51HAcOAIlbu4bS03qno9sD7TKwDEp6QxFG4NcJ0hPmNsgVaotP9dn1yzlWv8X0lT7EN0F5stRW3WdfJ8NUyxucOfg00TILPz7wA'
        : 'pk_test_51HAcOAIlbu4bS03qE6aactYWmVDkD3scHYRNRWSFhZHIontFxTcf8eWb9ZzYAR9aIBug7Xr9xuyXFXzgTz5MMeJg00VDuFFRTk'
    )
  );
  const { state, dispatch } = useContext(GEContext);

  return (
    <Elements stripe={stripePromise}>
      <div className="GiveContentContainer">
        {state.currentPage === GEPage.GIVE_NOW ? (
          <PageOne></PageOne>
        ) : state.currentPage === GEPage.AUTH ? (
          <GiveAuthManager />
        ) : state.currentPage === GEPage.PAYMENT_INFO ? (
          <PageThree />
        ) : state.currentPage === GEPage.PAYMENT_CARD ? (
          <PageFour />
        ) : state.currentPage === GEPage.COMPLETED ? (
          <CompletionPage></CompletionPage>
        ) : state.currentPage === GEPage.ONLINE_BANKING ? (
          <GiveOnlineBankingInfo
            dispatch={dispatch}
            content={state.content}
          ></GiveOnlineBankingInfo>
        ) : state.currentPage === GEPage.REQUEST_ACCOUNT ? (
          <iframe
            src={'https://meeting.formstack.com/forms/request_account_number'}
            title="The Meeting House - Forms"
            scrolling="yes"
            className="GiveFormId"
            style={{ minHeight: '115vh', width: '100%', border: 'none' }} // TODO : STYLING
          ></iframe>
        ) : state.currentPage === GEPage.PREAUTHORIZED_WITHDRAWAL ? (
          <iframe
            src={
              'https://meeting.formstack.com/forms/preauthorized_withdrawal_form'
            }
            title="The Meeting House - Forms"
            scrolling="yes"
            className="GiveFormId"
            style={{ height: '115vh', width: '100%', border: 'none' }} // TODO : STYLING
          ></iframe>
        ) : null}
      </div>
    </Elements>
  );
}
