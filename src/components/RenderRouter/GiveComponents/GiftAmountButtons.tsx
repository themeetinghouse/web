import { createRef, useEffect, useState } from 'react';
import './GiftAmountButtons.scss';
type Options = string | number | null;
export default function GiftAmountButton() {
  const fieldRef = createRef<HTMLInputElement>();
  const [options] = useState<Array<Options>>([
    '$25',
    '$50',
    '$100',
    '$500',
    'Other',
  ]);
  const [selectedOption, setSelectedOption] = useState<Options>(null);
  useEffect(() => {
    if (selectedOption === 'Other') {
      fieldRef?.current?.focus();
    } else {
      if (fieldRef?.current) fieldRef.current.value = '';
    }
  }, [selectedOption]);
  return (
    <div style={{ marginTop: 60 }}>
      <h1 style={{ fontSize: 24, lineHeight: '32px', fontWeight: 300 }}>
        Choose your gift amount
      </h1>
      <div className="OptionButtonContainer">
        {options?.map((option) => {
          return option === 'Other' ? (
            <div
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
              <input
                ref={fieldRef}
                placeholder={selectedOption === 'Other' ? '0.00' : 'Other'}
                style={{
                  flex: 1,
                  fontSize: 24,
                  maxWidth: '40%',
                  textAlign: 'left',
                  border: 'none',
                }}
              ></input>
            </div>
          ) : (
            <button
              key={option}
              className={`OptionButton ${
                selectedOption === option ? 'active' : ''
              } `}
              onClick={() => setSelectedOption(option)}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}
