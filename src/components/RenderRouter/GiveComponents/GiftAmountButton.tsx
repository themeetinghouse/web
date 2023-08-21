import { createRef, useEffect, useState } from 'react';
import './GiftAmountButton.scss';
type Options = string | number | null;
type GiftAmountButtonProps = {
  setForm: (prev: any) => void;
};
export default function GiftAmountButton(props: GiftAmountButtonProps) {
  const { setForm } = props;
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
      setForm((prev: any) => ({ ...prev, amount: otherValue }));
    } else {
      if (fieldRef?.current) fieldRef.current.value = '';
      setForm((prev: any) => ({ ...prev, amount: selectedOption }));
    }
  }, [selectedOption, otherValue]);
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
              className="OptionButton"
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
                  placeholder={'0.00'}
                  value={otherValue}
                  onChange={(e) => setOtherValue(e.target.value)}
                  style={{
                    flex: 1,
                    fontSize: 24,
                    maxWidth: '6ch',
                    textAlign: 'center',
                    border: 'none',
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
