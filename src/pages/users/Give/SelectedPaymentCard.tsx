import { useState } from 'react';
import { Link as ClickableText } from 'components/Link/Link';
import { useEffect } from 'react';
import { Spinner } from 'reactstrap';
import './SelectedPaymentCard.scss';

type SelectedPaymentCardProps = {
  card?: any;
};

export function SelectedPaymentCard(props: SelectedPaymentCardProps) {
  const [selectedCard, setSelectedCard] = useState({
    cardNum: '',
    expiry: '',
    cardType: '',
  });
  const [isLoading, setIsLoading] = useState(true);
  const { cardNum, expiry, cardType } = selectedCard;
  useEffect(() => {
    // Where do we pull this from?
    const pullDefaultCard = async () => {
      setTimeout(() => {
        setSelectedCard({
          cardNum: '**** **** **** 5126',
          expiry: '05/22',
          cardType: 'visa',
        });
        setIsLoading(false);
      }, 1300);
    };
    pullDefaultCard();
  }, []);
  return (
    <div className="PaymentSelectContainer">
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
            <b>Loading preferred payment method</b>
          </p>

          <br />
          <Spinner></Spinner>
        </div>
      ) : (
        <>
          <div
            style={{ display: 'flex', flexDirection: 'row', marginBottom: 49 }}
          >
            <span style={{ fontSize: 20, flex: 1 }}>Payment method</span>
            <img src={`/static/svg/Secure-Payment.svg`} />
          </div>

          <div
            style={{ display: 'flex', flexDirection: 'row', marginBottom: 50 }}
          >
            {cardNum && expiry && cardType ? (
              <>
                <img
                  style={{ marginRight: 22 }}
                  src={`/static/svg/${cardType}.svg`}
                />
                <div className="GiveCardAndExpiryContainer">
                  <span style={{ marginRight: 22 }}>{cardNum}</span>
                  <span style={{ marginRight: 32 }}>Exp {expiry}</span>
                </div>
                <ClickableText
                  style={{ fontSize: 12, lineHeight: '22px' }}
                  to={'/account/payments'}
                >
                  Change
                </ClickableText>
              </>
            ) : (
              <ClickableText
                style={{ fontSize: 12, lineHeight: '22px' }}
                to={'/account/payments'}
              >
                Click here to add a payment method
              </ClickableText>
            )}
          </div>
          <span style={{ color: '#646469' }}>
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
        </>
      )}
    </div>
  );
}
