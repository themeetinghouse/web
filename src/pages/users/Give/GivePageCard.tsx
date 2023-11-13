import { useContext, useState } from 'react';
import { Spinner } from 'reactstrap';
import GiveButtonToggle from './GiveToggleButton';
import './GivePageCard.scss';
import API, { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import * as queries from '../../../../src/graphql/queries';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment-timezone';
import GiveSelect from './GiveSelect';
import { TmhStripeAddPaymentQuery, TmhStripeAddSubscriptionQuery } from 'API';
import { GEContext } from 'components/RenderRouter/GiveComponents/GEContext';
import { GEActionType } from 'components/RenderRouter/GiveComponents/GETypes';
import PaymentCards from '../PaymentMethods/PaymentCards';

export type CardInfo = {
  cardNumber: string;
  expiry: string;
  cardType: string;
  nameOnCard: string;
  cvc: string;
};

export default function GivePageCard() {
  const { state, dispatch } = useContext(GEContext);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const validateAmount = () => {
    if (
      state.content?.fund?.name === '' ||
      state.content?.fund?.name === 'Please make a selection'
    ) {
      return false;
    }

    if (!state.content?.selectedPaymentMethodId) {
      console.log('payment method is empty');
      return false;
    }
    if (!state.content?.amount) {
      console.log('amount is empty');
      return false;
    }
    if (!state.content?.frequency) {
      console.log('frequency is empty');
      return false;
    }
    if (!state.content?.startDate) {
      console.log('startDate is empty');
      return false;
    }
    const amount = parseFloat(state.content?.amount);
    if (amount && amount > 0) {
      return true;
    } else {
      return false;
    }
  };
  const createPayment = async (selection = 'Give once') => {
    const amount = parseFloat(state.content?.amount);
    const fund = state.content?.fund?.id;
    const frequency = state.content?.frequency;
    const paymentMethodID = state.content?.selectedPaymentMethodId;
    const startingDate = state.content?.startDate;
    if (!startingDate) return console.log('no starting date');
    if (!paymentMethodID) return console.log('no payment method');
    if (!fund) return console.log('no fund');
    if (!frequency) return console.log('no frequency');
    if (!amount) return console.log('no amount');
    try {
      setErrorMessage('');
      setIsLoading(true);
      if (selection == 'Recurring') {
        console.log({ frequency, amount, fund, startingDate });
        const tmhStripeAddSubscription = (await API.graphql({
          query: queries.tmhStripeAddSubscription,
          variables: {
            idempotency: uuidv4(),
            paymentMethodId: paymentMethodID,
            startDate: startingDate,
            fund,
            frequency,
            amount,
          },
          authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
        })) as GraphQLResult<TmhStripeAddSubscriptionQuery>;
        console.log({ tmhStripeAddSubscription });
        const result =
          tmhStripeAddSubscription.data?.tmhStripeAddSubscription?.message;
        if (result && result === 'SUCCESS') {
          dispatch({
            type: GEActionType.NAVIGATE_TO_COMPLETED,
            payload: { status: 'complete', amount: state.content?.amount },
          });
          dispatch({
            type: GEActionType.SET_INITIAL_STATE,
          });
        } else {
          setErrorMessage(
            result || 'There was an error processing your payment.'
          );
        }
      } else {
        console.log({ 'ONE TIME': selection });

        const tmhStripeAddPayment = (await API.graphql({
          query: queries.tmhStripeAddPayment,
          variables: {
            paymentMethodId: paymentMethodID,
            idempotency: uuidv4(),
            amount: amount,
            fund: fund,
          },
          authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
        })) as GraphQLResult<TmhStripeAddPaymentQuery>;
        console.log({ tmhStripeAddPayment });
        const result = tmhStripeAddPayment.data?.tmhStripeAddPayment?.message;
        if (result && result === 'SUCCESS') {
          dispatch({
            type: GEActionType.NAVIGATE_TO_COMPLETED,
            payload: { status: 'complete', amount: state.content?.amount },
          });
          dispatch({
            type: GEActionType.SET_INITIAL_STATE,
          });
        } else {
          setErrorMessage(
            result || 'There was an error processing your payment.'
          );
        }
      }
    } catch (e: any) {
      console.log({ Error: e });
      setErrorMessage('There was an error processing your payment.');
    } finally {
      setIsLoading(false);
    }
  };

  const today = moment().format('YYYY-MM-DD');
  return (
    <div className="GiveCard">
      <GiveButtonToggle
        selection={state.content?.giftType}
        setSelection={(selected) =>
          dispatch({
            type: GEActionType.SET_GIFT_TYPE,
            payload: selected,
          })
        }
      />
      <p style={{ fontSize: 24, marginTop: 36 }}>Giving</p>
      <div>
        <span
          style={
            state.content?.amount
              ? { fontSize: 48 }
              : { fontSize: 48, opacity: '0.7' }
          }
        >
          $
        </span>

        <input
          data-testid="Amount"
          type="text"
          placeholder="0"
          value={state.content?.amount}
          onChange={(e) => {
            const value = e.target.value;
            const isValidMinimum = value === '' || parseFloat(value) >= 1;
            if (!isValidMinimum) return;
            const isValidMaximum = value === '' || parseFloat(value) <= 999999;
            if (!isValidMaximum) return;
            if (value.includes('.')) {
              const decimal = value.split('.')[1];
              if (decimal.length > 2) return;
            }
            const isAmountValid =
              value === '' || /^[0-9]*\.?[0-9]*$/.test(e.target.value);
            if (!isAmountValid) return;
            dispatch({
              type: GEActionType.SET_AMOUNT,
              payload: e.target.value,
            });
          }}
          className="GiveAmountInput"
        />
      </div>

      <label htmlFor="fundType">Where would you like to give?</label>
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
            {/*<option value={`1st & 15th monthly`}>{'1st & 15th monthly'}</option>*/}
          </select>
          <label htmlFor="date">Starting</label>
          <input
            min={today}
            data-testid="StartDate"
            value={moment.unix(state.content.startDate).format('YYYY-MM-DD')} // Convert Unix timestamp to 'YYYY-MM-DD' format
            onChange={(e) => {
              const selectedDateStr = e.target.value;
              const selectedDate = moment(selectedDateStr, 'YYYY-MM-DD');
              const currentDate = moment();
              selectedDate.set({
                hour: currentDate.hours(),
                minute: currentDate.minutes(),
                second: currentDate.seconds(),
              });
              if (selectedDate.isBefore(currentDate)) {
                const difference = currentDate.diff(selectedDate, 'seconds');
                selectedDate.add(difference, 'seconds');
              }
              const unixTimestamp = selectedDate.unix();
              dispatch({
                type: GEActionType.SET_START_DATE,
                payload: unixTimestamp,
              });
            }}
            className="GiveInput"
            placeholder={'YYYY-MM-DD'}
            type="date"
          />
        </>
      ) : null}
      <div>
        <PaymentCards />
      </div>
      <div className="GiveButtonContainer">
        <div className="ManageRecurringButton">
          <span
            style={{
              cursor: 'pointer',
              paddingTop: 16,
              margin: '16px 0px',
              borderBottom: '1px solid black',
            }}
            onClick={() =>
              dispatch({ type: GEActionType.NAVIGATE_TO_RECURRING_GIFT })
            }
          >
            Manage my recurring giving
          </span>
        </div>

        <button
          disabled={!validateAmount()}
          aria-label="Gift now"
          className={`GiveNowButton ${!validateAmount() ? 'disabled' : ''} `}
          onClick={() => createPayment(state.content?.giftType)}
        >
          {isLoading ? (
            <>
              <Spinner
                style={{
                  marginLeft: '-16px',
                  marginRight: 8,
                  width: '1.5rem',
                  height: '1.5rem',
                }}
              />
              Submitting...
            </>
          ) : (
            'Give Now'
          )}
        </button>
      </div>
      <span style={{ color: 'tomato' }}>{errorMessage}</span>
    </div>
  );
}
