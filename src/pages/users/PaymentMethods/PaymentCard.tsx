import { useEffect, useState } from 'react';
import { Spinner } from 'reactstrap';
import './PaymentsCard.scss';
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
  const [cardDataForm, setCardDataForm] = useState({
    cardNum: '',
    nameOncard: '',
    expiry: '',
    cvc: '',
  });
  const [addingCard, setAddingCard] = useState(false);
  const addNewPaymentMethod = async () => {
    setAddingCard(true);
    setTimeout(() => {
      setAddingCard(false);
      setShowCardForm(false);
    }, 1000);
  };
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
  useEffect(() => {
    console.log(cardDataForm);
  });
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
          <div className="SecurePaymentContainer">
            {showCardForm ? (
              <img
                style={{ alignSelf: 'flex-end' }}
                src={`/static/svg/Secure-Payment.svg`}
              />
            ) : null}
          </div>
          {!showCardForm ? (
            <button
              onClick={() => setShowCardForm(true)}
              className="AddNewCardButton"
            >
              <img src={`/static/svg/Plus-Expand.svg`}></img>Add New Credit Card
            </button>
          ) : (
            <div className="AddNewCardContainer">
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  marginBottom: 49,
                }}
              >
                <h3 style={{ flex: 1, fontWeight: 300 }}>
                  New credit card information
                </h3>
                <img src={`/static/svg/Secure-Payment.svg`} />
              </div>

              <p>Name on card</p>
              <input
                onChange={(e) =>
                  setCardDataForm({
                    ...cardDataForm,
                    nameOncard: e.target.value,
                  })
                }
                value={cardDataForm.nameOncard}
                className="NewCardInput"
              />
              <p>Credit card number</p>
              <input
                onChange={(e) =>
                  setCardDataForm({ ...cardDataForm, cardNum: e.target.value })
                }
                value={cardDataForm.cardNum}
                className="NewCardInput"
              />
              <div
                className="ExpiryCvcContainer"
                style={{ display: 'flex', flexDirection: 'row' }}
              >
                <div>
                  <p>Expiry</p>
                  <input
                    onChange={(e) =>
                      setCardDataForm({
                        ...cardDataForm,
                        expiry: e.target.value,
                      })
                    }
                    value={cardDataForm.expiry}
                    maxLength={5}
                    placeholder="MM/YY"
                    style={{ width: '100%' }}
                    className="NewCardInput"
                  />
                </div>
                <div style={{ marginLeft: 33 }}>
                  <p>CVC</p>
                  <input
                    onChange={(e) =>
                      setCardDataForm({ ...cardDataForm, cvc: e.target.value })
                    }
                    value={cardDataForm.cvc}
                    style={{ width: '100%' }}
                    className="NewCardInput"
                  />
                </div>
              </div>
              <button
                onClick={addNewPaymentMethod}
                style={{ width: '100%' }}
                className="SubmitNewCardButton"
              >
                {addingCard ? (
                  <>
                    <Spinner
                      style={{
                        width: '1.5rem',
                        height: '1.5rem',
                        marginRight: 8,
                      }}
                    />
                    Adding card...
                  </>
                ) : (
                  'Add new credit card'
                )}
              </button>
              <span style={{ color: '#646469', marginTop: 12 }}>
                This is a secure 128-bit SSL encrypted payment.
                <span
                  style={{
                    marginLeft: 10,
                    textDecoration: 'underline',
                  }}
                >
                  {'Terms & Conditions'}
                </span>
                <span style={{ marginLeft: 10, textDecoration: 'underline' }}>
                  Privacy Policy
                </span>
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
