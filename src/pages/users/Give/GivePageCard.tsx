import { useState } from 'react';
import { Spinner } from 'reactstrap';
import GiveCompletionScreen from './GiveCompletionPage';
import GiveButtonToggle from './GiveToggleButton';
import { PaymentSelect } from './SelectedPaymentCard';
import { Link as ClickableText } from 'components/Link/Link';
import './GivePageCard.scss';
import { useEffect } from 'react';
type GiveForm = {
  status: string; // can be enum ?
  giveAmount: string;
  submitting: boolean;
  giveFund: string; // fund types
  frequency?: string; // can be enum?
};
export default function GivePageCard() {
  const [selection, setSelection] = useState('Give once');
  const [form, setForm] = useState<GiveForm>({
    status: 'start',
    giveAmount: '0',
    submitting: false,
    giveFund: '',
    frequency: '',
  });
  const [fundOptions, setFundOptions] = useState<Array<string>>([]);
  const validateAmount = () => {
    if (form.giveFund === '' || form.giveFund === 'Please make a selection')
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
    }, 1500);
  };
  useEffect(() => {
    const loadFundOptions = async () => {
      // do we want to load this from a JSON?
      setTimeout(() => {
        setFundOptions([
          'Please make a selection',
          'General Fund',
          'Compassion Fund',
          'Go Fund',
          'Curriculum',
        ]);
      }, 1300);
    };
    loadFundOptions();
  }, []);
  useEffect(() => {
    if (fundOptions.length) {
      setForm({ ...form, giveFund: fundOptions[0] });
    }
  }, [fundOptions]);
  return (
    <div className="GiveCard">
      {form.status === 'start' ? (
        <>
          <GiveButtonToggle selection={selection} setSelection={setSelection} />
          <p style={{ fontSize: 24, marginTop: 36 }}>Giving</p>
          <input
            type="number"
            placeholder="$0.00"
            value={form.giveAmount}
            onChange={(e) => {
              e.target.value.length < 11
                ? setForm({ ...form, giveAmount: e.target.value })
                : null;
            }}
            className="GiveAmountInput"
          />
          <label htmlFor="fundType">Where would you like to give?</label>
          <select
            value={form.giveFund}
            onChange={(e) => setForm({ ...form, giveFund: e.target.value })}
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
                    {fundName}
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
                onChange={(e) =>
                  setForm({ ...form, frequency: e.target.value })
                }
                className="GiveInput"
                id="frequency"
              >
                <option value="Every week">Every week</option>
                <option value="Every 2 weeks">Every 2 weeks</option>
                <option value="Every month">Every month</option>
                <option value={`1st & 15th monthly`}>
                  {'1st & 15th monthly'}
                </option>
              </select>
              <label htmlFor="date">Starting</label>
              <input
                className="GiveInput"
                placeholder={'YYYY-MM-DD'}
                type="date"
              />
            </>
          ) : null}
          <PaymentSelect></PaymentSelect>
          <div className="GiveButtonContainer">
            <ClickableText
              className="ManageRecurringButton"
              to={'/account/give'}
            >
              Manage my recurring giving
            </ClickableText>
            <button
              disabled={!validateAmount()}
              aria-label="Gift now"
              className={`GiveNowButton ${
                !validateAmount() ? 'disabled' : ''
              } `}
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
        </>
      ) : (
        <GiveCompletionScreen
          giveType={selection}
          giveFund={form.giveFund}
          giveFrequency={form.frequency ?? ''}
          giveAmount={form.giveAmount.toString()}
          giveStatus={form.status}
        />
      )}
    </div>
  );
}
