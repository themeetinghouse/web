import { GEContext } from './GEContext';
import { useContext, useState } from 'react';
import { GEPage, GEActionType } from './GETypes';
import GiveToggleButton from 'pages/users/Give/GiveToggleButton';
import GiftAmountButton from './GiftAmountButtons';
import GiveSelect from 'pages/users/Give/GiveSelect';
import './GiveExperience.scss';
import PaymentAddMethod from 'pages/users/PaymentMethods/PaymentAddMethod';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import ProfileForm from 'pages/users/ProfilePage/ProfileForm';
let env = 'unknown';
if (window.location === undefined) env = 'mobile';
else if (window.location.hostname === 'localhost') env = 'dev';
else if (window.location.hostname.includes('beta')) env = 'beta';
else if (window.location.hostname.includes('dev')) env = 'dev';
else env = 'prod';
type OnlineBankingInfoProps = {
  content: any;
};
export default function GiveExperienceContainer() {
  const [stripePromise] = useState(() =>
    loadStripe(
      env == 'beta'
        ? 'pk_live_51HlyrYLTzrDhiQ9282ydxEkzCmGQuJ6w6m2J7pvWL3DslQGdyZHhi6NFa7lLgErh9YjboGdEs09ce0y9c3H5SfVx00K1massZP'
        : 'pk_test_51HlyrYLTzrDhiQ921sERNUY2GQBDgpHDOUYMiNZ0lTeTsse9u8oQoBfLg6UzWaxcNkYhek4tkNWILTlAiajet27k00FFv6z0RB'
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
    return (
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 60 }}>
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
  const OnlineBankingInfo = (props: OnlineBankingInfoProps) => {
    // TODO: STYLING
    const { content } = props;
    return (
      <div>
        <h1
          style={{
            fontSize: 24,
            lineHeight: '32px',
            fontWeight: 300,
          }}
        >
          {state?.content?.header1}
        </h1>
        <div style={{ marginLeft: '1em' }}>
          <p
            onClick={() => dispatch({ type: 'NAVIGATE_TO_REQUEST_ACCOUNT' })}
            style={{
              marginBottom: 0,
              marginTop: 20,
              textIndent: '-1em',
              textDecoration: 'underline',
              cursor: 'pointer',
            }}
          >
            {content?.text1}
          </p>
          <p style={{ marginBottom: 0, textIndent: '-1em' }}>
            {content?.text2}
          </p>
          <p style={{ marginBottom: 0, textIndent: '-1em' }}>
            {content?.text3}
          </p>
          <p style={{ marginBottom: 0, textIndent: '-1em' }}>
            {content?.text4}
          </p>
          <p style={{ marginBottom: 0, textIndent: '-1em' }}>
            {content?.text5}
          </p>
          {content?.text5Options.map((option: string) => (
            <p style={{ textIndent: '2em', marginBottom: 0 }} key={option}>
              {option}
            </p>
          ))}
          <p style={{ marginBottom: 0, textIndent: '-1em' }}>
            {content?.text6}
          </p>

          <div
            style={{
              marginLeft: '-1em',
            }}
          >
            <p style={{ marginTop: 25, marginBottom: 55, fontWeight: 700 }}>
              {content?.text7}
            </p>
            <h1
              style={{
                fontSize: 24,
                lineHeight: '32px',
                fontWeight: 300,
              }}
            >
              {content?.header2}
            </h1>
            {content?.textLines2?.map((text: string, index: number) => {
              return (
                <p
                  onClick={
                    index === content.textLines2.length - 1
                      ? () =>
                          dispatch({
                            type: GEActionType.NAVIGATE_TO_PREAUTHORIZED_WITHDRAWAL,
                          })
                      : () => null
                  }
                  style={
                    content.textLines2.length - 1 === index
                      ? {
                          marginBottom: 0,
                          textDecoration: 'underline',
                          cursor: 'pointer',
                        }
                      : { marginBottom: 0 }
                  }
                  key={text}
                >
                  {text}
                </p>
              );
            })}
          </div>
        </div>
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
        ) : state.currentPage === GEPage.ONLINE_BANKING ? (
          <OnlineBankingInfo content={state.content}></OnlineBankingInfo>
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
