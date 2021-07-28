import { useEffect, useState } from 'react';
import { Spinner } from 'reactstrap';
import './PaymentCard.scss';
import PaymentAddMethod from './PaymentAddMethod';
type PaymentMethod = {
  nameOnCard: string;
  cardNum: string;
  expiry: string;
  cardType?: string;
  lastTransactionDate?: string;
  isPreferredCard?: boolean;
};

export default function PaymentsCard() {
  const [isLoading, setIsLoading] = useState(true);
  const [cards, setCards] = useState<Array<PaymentMethod>>([]);
  const [showCardForm, setShowCardForm] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setCards([
        {
          nameOnCard: 'Simon McTaggart',
          cardNum: '•••• •••• •••• 5126 ',
          expiry: '05/22',
          cardType: 'visa',
          lastTransactionDate: 'Jun 1, 2021',
          isPreferredCard: true,
        },
        {
          nameOnCard: 'Simon McTaggart',
          cardNum: '•••• •••• •••• 4126 ',
          expiry: '05/22',
          cardType: 'mastercard',
        },
        {
          nameOnCard: 'Simon McTaggart',
          cardNum: '•••• •••• •••• 2126 ',
          expiry: '02/22',
          cardType: 'visa',
        },
      ]);
      setIsLoading(false);
    }, 200);
  }, []);
  return (
    <div className="Payments-Card">
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
            <b>Loading payment methods data..</b>
          </p>

          <br />
          <Spinner></Spinner>
        </div>
      ) : (
        <div>
          <h1>Payment Methods</h1>
          {cards.map(
            ({
              cardNum,
              nameOnCard,
              expiry,
              cardType,
              lastTransactionDate,
              isPreferredCard,
            }) => {
              return (
                <div key={cardNum} className="Payments-ItemContainer">
                  <div className="CardImageContainer">
                    {cardType && (
                      <img src={`/static/svg/${cardType}.svg`}></img>
                    )}
                  </div>
                  <div className="CardInfoContainer">
                    {isPreferredCard ? (
                      <img
                        style={{ alignSelf: 'flex-end' }}
                        width={20}
                        height={20}
                        src="/static/svg/Check.svg"
                      ></img>
                    ) : (
                      <button className="SetPreferredButton">
                        Set as preferred
                      </button>
                    )}
                    <span>{nameOnCard}</span>
                    <p>
                      {cardNum}
                      <span style={{ marginLeft: 8 }}>Exp {expiry}</span>
                    </p>
                    {lastTransactionDate ? (
                      <>
                        <span style={{ fontWeight: 700 }}>
                          Last transaction
                        </span>
                        <p>{lastTransactionDate}</p>
                      </>
                    ) : (
                      <div style={{ height: 48, marginBottom: 12 }}></div>
                    )}
                    <div className="CardButtonContainer">
                      <button className="CardButton white">Remove</button>
                      <button className="CardButton">Update</button>
                    </div>
                  </div>
                </div>
              );
            }
          )}
          {!showCardForm ? (
            <button
              onClick={() => setShowCardForm(true)}
              className="AddNewCardButton"
            >
              <img src={`/static/svg/Plus-Expand.svg`}></img>Add New Credit Card
            </button>
          ) : (
            <PaymentAddMethod closeCard={() => setShowCardForm(false)} />
          )}
        </div>
      )}
    </div>
  );
}
