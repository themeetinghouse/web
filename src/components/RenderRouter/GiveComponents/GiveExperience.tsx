import { GEContext } from './GEContext';
import { useContext, useState } from 'react';
import { GEPage, GEActionType } from './GETypes';
import GiveToggleButton from 'pages/users/Give/GiveToggleButton';
import GiftAmountButton from './GiftAmountButton';
import GiveSelect from 'pages/users/Give/GiveSelect';
import './GiveExperience.scss';
import PaymentAddMethod from 'pages/users/PaymentMethods/PaymentAddMethod';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import ProfileForm from 'pages/users/ProfilePage/ProfileForm';
import { useEffect } from 'react';
import GiveAmountBanner from './GiveAmountBanner';
import GiveOnlineBankingInfo from './GiveOnlineBankingInfo';
let env = 'unknown';
if (window.location === undefined) env = 'mobile';
else if (window.location.hostname === 'localhost') env = 'dev';
else if (window.location.hostname.includes('beta')) env = 'beta';
else if (window.location.hostname.includes('dev')) env = 'dev';
else env = 'prod';
export default function GiveExperience() {
  const [stripePromise] = useState(() =>
    loadStripe(
      env == 'beta'
        ? 'pk_live_51HAcOAIlbu4bS03qno9sD7TKwDEp6QxFG4NcJ0hPmNsgVaotP9dn1yzlWv8X0lT7EN0F5stRW3WdfJ8NUyxucOfg00TILPz7wA'
        : 'pk_test_51HAcOAIlbu4bS03qE6aactYWmVDkD3scHYRNRWSFhZHIontFxTcf8eWb9ZzYAR9aIBug7Xr9xuyXFXzgTz5MMeJg00VDuFFRTk'
    )
  );
  const { state, dispatch } = useContext(GEContext);
  const PageOne = () => {
    const [form, setForm] = useState({ fund: { name: '' }, amount: null });
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <GiveToggleButton
          selection="Give once"
          setSelection={() => null}
        ></GiveToggleButton>

        <GiftAmountButton setForm={setForm}></GiftAmountButton>
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
        <GiveSelect form={form} setForm={setForm}></GiveSelect>
        <button
          onClick={() =>
            dispatch({
              type: GEActionType.NAVIGATE_TO_PAYMENT_INFO,
              payload: { amount: form.amount },
            })
          }
          className="GENextButton"
        >
          Next
        </button>
      </div>
    );
  };

  const PageTwo = () => {
    const [form, setForm] = useState({});
    const isProfileValid = () => {
      return true;
    };
    const isPaymentValid = () => {
      return true;
    };
    isPaymentValid();
    isProfileValid();
    useEffect(() => {
      console.log('Updated form:', form);
    }, [form]);
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
        <PaymentAddMethod
          state={state}
          dispatch={dispatch}
          closeCard={() => null}
        ></PaymentAddMethod>
      </div>
    );
  };
  const CompletionPage = () => {
    return (
      <div>
        <h1>Thank You</h1>
        <p>
          A few clicks later and you are now part of this great missing of
          growing loving communities of Jesus followers who live and share his
          irreligious message.
        </p>
      </div>
    );
  };

  return (
    <Elements stripe={stripePromise}>
      <div className="GiveContentContainer">
        {state.currentPage === GEPage.GIVE_NOW ? (
          <PageOne></PageOne>
        ) : state.currentPage === GEPage.PAYMENT_INFO ? (
          <PageTwo></PageTwo>
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
