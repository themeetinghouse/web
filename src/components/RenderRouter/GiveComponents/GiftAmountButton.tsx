import { createRef, useContext, useEffect, useState } from 'react';
import './GiftAmountButton.scss';
import { GEContext } from './GEContext';
import { GEActionType } from './GETypes';
type Options = string | number | null;
export default function GiftAmountButton() {
  const { dispatch } = useContext(GEContext);
  const fieldRef = createRef<HTMLInputElement>();
  const [otherValue, setOtherValue] = useState<string>('');
  const [options] = useState<Array<Options>>([
    '25',
    '50',
    '100',
    '500',
    'Other',
  ]);

  const [selectedOption, setSelectedOption] = useState<Options>(null);
  useEffect(() => {
    if (selectedOption === 'Other') {
      fieldRef?.current?.focus();
      dispatch({
        type: GEActionType.SET_AMOUNT,
        payload: otherValue,
      });
    } else {
      if (fieldRef?.current) fieldRef.current.value = '';
      dispatch({
        type: GEActionType.SET_AMOUNT,
        payload: selectedOption,
      });
    }
  }, [selectedOption, otherValue]);
  useEffect(() => {
    if (selectedOption !== 'Other') {
      setOtherValue('');
    }
  }, [selectedOption]);
  return (
    <div style={{ marginTop: 60 }}>
      <h1
        style={{
          fontSize: 24,
          lineHeight: '32px',
          fontWeight: 300,
          marginBottom: 12,
        }}
      >
        Choose your gift amount
      </h1>
      <div className="OptionButtonContainer">
        {options?.map((option) => {
          return option === 'Other' ? (
            <div
              key={option}
              onClick={() => setSelectedOption(option)}
              className={`OptionButton ${
                selectedOption === option ? 'active' : ''
              } `}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {selectedOption === 'Other' ? (
                <span
                  style={{
                    fontSize: 24,
                    position: 'relative',
                    textAlign: 'right',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  $
                </span>
              ) : null}

              {selectedOption !== 'Other' ? (
                <span
                  style={{
                    flex: 1,
                    fontSize: 24,
                    maxWidth: '6ch',
                    textAlign: 'center',
                    border: 'none',
                  }}
                >
                  Other
                </span>
              ) : (
                <input
                  ref={fieldRef}
                  placeholder={'1'}
                  value={otherValue}
                  onChange={(e) => {
                    const value = e.target.value;
                    const isValidMinimum =
                      value === '' || parseFloat(value) >= 1;
                    if (!isValidMinimum) return;
                    const isValidMaximum =
                      value === '' || parseFloat(value) <= 999999;
                    if (!isValidMaximum) return;
                    if (value.includes('.')) {
                      const decimal = value.split('.')[1];
                      if (decimal.length > 2) return;
                    }
                    const isAmountValid =
                      value === '' || /^[0-9]*\.?[0-9]*$/.test(e.target.value);
                    if (!isAmountValid) return;
                    setOtherValue(e.target.value);
                  }}
                ></input>
              )}
            </div>
          ) : (
            <button
              key={option}
              className={`OptionButton ${
                selectedOption === option ? 'active' : ''
              } `}
              onClick={() => setSelectedOption(option)}
            >
              ${option}
            </button>
          );
        })}
      </div>
    </div>
  );
}
