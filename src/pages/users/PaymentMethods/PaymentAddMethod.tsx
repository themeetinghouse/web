import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
} from '@stripe/react-stripe-js';
import {
  StripeCardCvcElementChangeEvent,
  StripeCardExpiryElementChangeEvent,
  StripeCardNumberElementChangeEvent,
} from '@stripe/stripe-js';
import { useState } from 'react';
import { Spinner } from 'reactstrap';
import { CardInfo } from '../Give/GivePageCard';
import './PaymentCard.scss';

type AddPaymentMethodCardProps = {
  closeCard: (card?: CardInfo) => void;
};
export default function PaymentAddMethod(props: AddPaymentMethodCardProps) {
  const { closeCard } = props;
  const [addingCard, setAddingCard] = useState(false);
  const [stripeValidation, setStripeValidation] = useState({
    cardNumber: false,
    expiryDate: false,
    cvc: false,
  });
  const stripeFieldValidation = (
    element:
      | StripeCardNumberElementChangeEvent
      | StripeCardExpiryElementChangeEvent
      | StripeCardCvcElementChangeEvent,
    name: string
  ) => {
    if (!element.empty && element.complete) {
      setStripeValidation({
        ...stripeValidation,
        [name]: true,
      });
    } else {
      setStripeValidation({ ...stripeValidation, [name]: false });
    }
    console.log(stripeValidation);
  };
  const CARD_ELEMENT_OPTIONS = {
    classes: { base: 'NewCardInput' },
    style: {
      base: {
        color: 'black',
        fontFamily: '"Graphik Web", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: 'red',
        iconColor: '#fa755a',
      },
    },
  };
  const isCardFormValid = (): boolean => {
    console.log(
      stripeValidation.cardNumber &&
        stripeValidation.expiryDate &&
        stripeValidation.cvc &&
        !!cardDataForm.nameOnCard
    );
    return (
      stripeValidation.cardNumber &&
      stripeValidation.expiryDate &&
      stripeValidation.cvc &&
      !!cardDataForm.nameOnCard
    );
  };
  const [cardDataForm, setCardDataForm] = useState<CardInfo>({
    cardNumber: '',
    nameOnCard: '',
    expiry: '',
    cvc: '',
    cardType: '',
  });
  const addNewPaymentMethod = async () => {
    setAddingCard(true);
    setTimeout(() => {
      setAddingCard(false);
      closeCard(cardDataForm);
    }, 1000);
  };
  return (
    <>
      <div className="SecurePaymentContainer">
        <img
          style={{ alignSelf: 'flex-end' }}
          src={`/static/svg/Secure-Payment.svg`}
        />
      </div>
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
              nameOnCard: e.target.value,
            })
          }
          value={cardDataForm.nameOnCard}
          className="NewCardInput"
        />
        <p>Credit card number</p>
        <CardNumberElement
          className="NewCardInput"
          onChange={(el) => stripeFieldValidation(el, 'cardNumber')}
          options={CARD_ELEMENT_OPTIONS}
        />
        <div
          className="ExpiryCvcContainer"
          style={{ display: 'flex', flexDirection: 'row' }}
        >
          <div style={{ flex: 1 }}>
            <p>Expiry</p>
            <CardExpiryElement
              onChange={(el) => stripeFieldValidation(el, 'expiryDate')}
              options={CARD_ELEMENT_OPTIONS}
            />
          </div>
          <div style={{ flex: 1, marginLeft: 33 }}>
            <p>CVC</p>
            <CardCvcElement
              onChange={(el) => stripeFieldValidation(el, 'cvc')}
              options={CARD_ELEMENT_OPTIONS}
            />
          </div>
        </div>
        <button
          onClick={addNewPaymentMethod}
          style={{ width: '100%' }}
          disabled={!isCardFormValid()}
          className={`SubmitNewCardButton${
            !isCardFormValid() ? ' disabled' : ''
          }`}
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
    </>
  );
}
