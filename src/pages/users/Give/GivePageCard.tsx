import { Dispatch, useState } from 'react';
import { Spinner } from 'reactstrap';
import GiveButtonToggle from './GiveToggleButton';
import { SelectedPaymentCard } from './SelectedPaymentCard';
import './GivePageCard.scss';
import { useEffect } from 'react';
import { GiveAction, GiveActionType, GiveState } from './GivePage';

type GivingData = {
  giveAmount: string;
  fund: { name: string };
  frequency?: string;
};

type GiveForm = {
  status: string;
  submitting: boolean;
};

type GiveFormWithData = GiveForm & GivingData;

type GivePageCardProps = {
  giveState: GiveState;
  dispatch: Dispatch<GiveAction>; //?
};
export default function GivePageCard(props: GivePageCardProps) {
  const { currentPayload } = props.giveState;
  const { dispatch } = props;
  const [selection, setSelection] = useState(
    currentPayload ? 'Recurring' : 'Give once'
  );
  console.log('payload', currentPayload);
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
  const [fundOptions, setFundOptions] = useState<Array<string>>([]);
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
      // pass error

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

  useEffect(() => {
    const loadFundOptions = async () => {
      // do we want to load this from a JSON?
      setTimeout(() => {
        setFundOptions([
          'Please make a selection',
          'General',
          'Compassion',
          'Go',
          'Curriculum',
        ]);
      }, 1300);
    };
    loadFundOptions();
  }, []);
  useEffect(() => {
    if (fundOptions.length && !currentPayload) {
      setForm({ ...form, fund: { name: fundOptions[0] } });
    }
  }, [fundOptions]);
  return (
    <div className="GiveCard">
      <GiveButtonToggle selection={selection} setSelection={setSelection} />
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
      <select
        value={form.fund.name}
        onChange={(e) => setForm({ ...form, fund: { name: e.target.value } })}
        className="GiveInput"
        id="fundType"
        style={{ padding: '0px 30px' }}
      >
        {!fundOptions.length ? (
          <option value="loading">Loading options...</option>
        ) : (
          fundOptions.map((fundName) => {
            return (
              <option key={fundName} value={fundName}>
                {fundName} fund
              </option>
            );
          })
        )}
      </select>
      {selection === 'Recurring' ? (
        <>
          <label htmlFor="frequency">Frequency</label>
          <select
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
          <input className="GiveInput" placeholder={'YYYY-MM-DD'} type="date" />
        </>
      ) : null}
      <SelectedPaymentCard
        card={currentPayload?.paymentMethod}
      ></SelectedPaymentCard>
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
