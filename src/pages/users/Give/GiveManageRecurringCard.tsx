import { useEffect } from 'react';
import { useState } from 'react';
import { Spinner } from 'reactstrap';
import './GiveManageRecurringCard.scss';
import { GiveActionType } from './GivePage';
type GiveRecurringProps = {
  giveState: any;
  dispatch: any;
};
export default function GiveManageRecurringCard(
  props: GiveRecurringProps
): JSX.Element {
  const [givings, setGivings] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setGivings([
        {
          id: '1',
          giveAmount: 20,
          fund: { name: 'Compassion' },
          frequency: 'Every week',
          cardType: 'visa',
          expiry: '05/22',
          cardNumber: '•••• •••• •••• 4021',
        },
        {
          id: '2',
          giveAmount: 100,
          fund: { name: 'Go' },
          frequency: 'Every month',
          cardType: 'mastercard',
          expiry: '05/22',
          cardNumber: '•••• •••• •••• 5126',
        },
      ]);
      setIsLoading(false);
    }, 1300);
  }, []);
  return (
    <div className="GiveManageRecurringCard">
      {isLoading ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <p>
            <b>Loading recurring givings..</b>
          </p>

          <br />
          <Spinner />
        </div>
      ) : (
        <>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <h1
              style={{
                fontWeight: 700,
                fontSize: 32,
                lineHeight: '40px',
                color: 'black',
                marginBottom: 44,
              }}
            >
              My Recurring Giving
            </h1>
          </div>

          <div className="PaymentMethodCardGrid">
            {givings?.map((giving: any) => {
              return (
                <div key={giving.id} className="PaymentMethodCard">
                  <p className="PaymentMethodCardHeader">
                    ${giving.giveAmount}
                  </p>
                  <p className="PaymentMethodCardLabel">Fund</p>
                  <p>{giving.fund.name} fund</p>
                  <p className="PaymentMethodCardLabel">Next payment</p>
                  <p>undefined</p>
                  <p className="PaymentMethodCardLabel">Frequency:</p>
                  <p style={{ margin: 0 }}>{giving.frequency}</p>
                  <p>Starting recurring start date</p>
                  <p className="PaymentMethodCardLabel">Payment method</p>
                  <p style={{ marginTop: 26 }}>
                    <img
                      width={46}
                      style={{ marginRight: 22 }}
                      src={`/static/svg/${giving.cardType}.svg`}
                    />
                    {giving.cardNumber} Exp
                    {giving.expiry}
                  </p>

                  <div className="PaymentMethodCardButtonContainer">
                    <button
                      onClick={() =>
                        props.dispatch({
                          type: GiveActionType.NAVIGATE_TO_GIVE,
                        })
                      }
                      className="PaymentMethodCardButton white"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() =>
                        props.dispatch({
                          type: GiveActionType.SHOW_GIVE,
                          payload: giving,
                        })
                      }
                      className="PaymentMethodCardButton"
                    >
                      Edit
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
