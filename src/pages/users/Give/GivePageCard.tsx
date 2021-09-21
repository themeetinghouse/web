import { Dispatch, useState } from 'react';
import { Spinner } from 'reactstrap';
import GiveButtonToggle from './GiveToggleButton';
import { SelectedPaymentCard } from './SelectedPaymentCard';
import './GivePageCard.scss';
import {
  GiveAction,
  GiveActionType,
  GiveState,
  GiveToggleType,
} from './GivePage';
import PaymentAddMethod from '../PaymentMethods/PaymentAddMethod';
import GiveSelect from './GiveSelect';

type GivingData = {
  giveAmount: string;
  fund: { name: string };
  frequency?: string;
};

type GiveForm = {
  status: string; // this is likely not needed
  submitting: boolean;
};

type GiveFormWithData = GiveForm & GivingData;

export type CardInfo = {
  cardNumber: string;
  expiry: string;
  cardType: string;
  nameOnCard: string;
  cvc: string;
};

type GivePageCardProps = {
  giveState: GiveState;
  dispatch: Dispatch<GiveAction>; //?
};
export default function GivePageCard(props: GivePageCardProps) {
  const { currentPayload, givePageToggleType } = props.giveState;
  const { dispatch } = props;

  const [selectedCard, setSelectedCard] = useState<CardInfo | null>(null);

  // Give once vs Recurring fields toggle
  // if currentPayload exists, then previous page was GiveManageRecurringCard.tsx
  const [selection, setSelection] = useState(
    currentPayload || givePageToggleType === GiveToggleType.RECURRING_PAGE
      ? 'Recurring'
      : 'Give once'
  );

  const initialForm = currentPayload
    ? {
        status: 'start',
        submitting: false,
        ...currentPayload,
      }
    : {
        status: 'start',
        giveAmount: '',
        submitting: false,
        fund: { name: '' },
        frequency: '',
      };

  const [form, setForm] = useState<GiveFormWithData>(initialForm);
  const validateAmount = () => {
    if (form.fund.name === '' || form.fund.name === 'Please make a selection')
      return false;
    const amount = parseFloat(form.giveAmount);

    if (amount && amount > 0) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = async () => {
    setForm({ ...form, submitting: true });
    setTimeout(() => {
      setForm({ ...form, status: 'complete', submitting: false });

      /* success*/
      dispatch({
        type: GiveActionType.NAVIGATE_TO_COMPLETION_SUCCESS,
        payload: { status: 'complete', amount: form.giveAmount },
      });

      /*error
      dispatch({
        type: GiveActionType.NAVIGATE_TO_COMPLETION_ERROR,
        payload: { status: 'error', errorMessage: 'Something went wrong.' },
      });
      */
    }, 1500);
  };
  const getCard = async () => {
    setSelectedCard({
      cardNumber: '**** **** **** 5126',
      cardType: 'visa',
      nameOnCard: '',
      expiry: '05/22',
      cvc: '',
    });
  };

  console.log('currentPayload', currentPayload);
  return (
    <div className="GiveCard">
      <GiveButtonToggle
        selection={selection}
        setSelection={(a) => {
          setForm({
            status: 'start',
            giveAmount: '',
            submitting: false,
            fund: { name: '' },
            frequency: '',
          });
          setSelection(a);
        }}
      />
      <p style={{ fontSize: 24, marginTop: 36 }}>Giving</p>
      <div>
        <span
          style={
            form.giveAmount
              ? { fontSize: 48 }
              : { fontSize: 48, opacity: '0.7' }
          }
        >
          $
        </span>
        <input
          data-testID="Amount"
          type="number"
          placeholder="0.00"
          value={form.giveAmount}
          onChange={(e) => {
            e.target.value.length < 11
              ? setForm({ ...form, giveAmount: e.target.value })
              : null;
          }}
          className="GiveAmountInput"
        />
      </div>

      <label htmlFor="fundType">Where would you like to give?</label>
      <GiveSelect form={form} setForm={setForm}></GiveSelect>
      {selection === 'Recurring' ? (
        <>
          <label htmlFor="frequency">Frequency</label>
          <select
            data-testID="Frequency"
            value={form.frequency}
            onChange={(e) => setForm({ ...form, frequency: e.target.value })}
            className="GiveInput"
            id="frequency"
          >
            <option value="Every week">Every week</option>
            <option value="Every 2 weeks">Every 2 weeks</option>
            <option value="Every month">Every month</option>
            <option value={`1st & 15th monthly`}>{'1st & 15th monthly'}</option>
          </select>
          <label htmlFor="date">Starting</label>
          <input
            data-testID="StartDate"
            className="GiveInput"
            placeholder={'YYYY-MM-DD'}
            type="date"
          />
        </>
      ) : null}
      <div>
        {currentPayload || selectedCard ? (
          <SelectedPaymentCard card={currentPayload ?? selectedCard} />
        ) : (
          <>
            <PaymentAddMethod
              closeCard={(card?: CardInfo) => {
                if (card) getCard();
              }}
            />
          </>
        )}
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
            onClick={() => dispatch({ type: GiveActionType.SHOW_RECURRING })}
          >
            Manage my recurring giving
          </span>
        </div>

        <button
          disabled={!validateAmount()}
          aria-label="Gift now"
          className={`GiveNowButton ${!validateAmount() ? 'disabled' : ''} `}
          onClick={() => handleSubmit()}
        >
          {form.submitting ? (
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
    </div>
  );
}
