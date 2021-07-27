import { useState } from 'react';
import './GiveManageRecurringCard.scss';
import { GiveActionType } from './GivePage';
type GiveRecurringProps = {
  giveState: any;
  dispatch: any;
};
export default function GiveManageRecurringCard(
  props: GiveRecurringProps
): JSX.Element {
  const [givings] = useState<any>([
    {
      id: '1',
      giveAmount: 20,
      fund: { name: 'Compassion' },
      frequency: 'Every week',
      paymentMethod: {
        cardType: 'visa',
        exp: '05/22',
        cardNumber: '•••• •••• •••• 5126',
      },
    },
    {
      id: '2',
      giveAmount: 100,
      fund: { name: 'GO' },
      frequency: 'Every month',
      paymentMethod: {
        cardType: 'mastercard',
        exp: '05/22',
        cardNumber: '•••• •••• •••• 5126',
      },
    },
  ]);
  return (
    <div className="GiveManageRecurringCard">
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
              <p className="PaymentMethodCardHeader">${giving.giveAmount}</p>
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
                  src={`/static/svg/${giving.paymentMethod.cardType}.svg`}
                />
                {giving.paymentMethod.cardNumber} Exp {giving.paymentMethod.exp}
              </p>

              <div className="PaymentMethodCardButtonContainer">
                <button
                  onClick={() =>
                    props.dispatch({
                      type: GiveActionType.NAVIGATE_TO_GIVE,
                    })
                  }
                  className="CardButton white"
                  style={{ flex: 1 }}
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
                  className="CardButton"
                  style={{ flex: 1, marginLeft: 15 }}
                >
                  Edit
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
