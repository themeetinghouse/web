import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { v4 as uuidv4 } from 'uuid';

import * as queries from '../../../../src/graphql/queries';

import {
  StripeCardCvcElementChangeEvent,
  StripeCardExpiryElementChangeEvent,
  StripeCardNumberElementChangeEvent,
} from '@stripe/stripe-js';
import { useContext, useState } from 'react';
import { Spinner } from 'reactstrap';
import { CardInfo } from '../Give/GivePageCard';
import './PaymentCard.scss';
import API, { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import { TmhStripeAttachPaymentMethodQuery } from 'API';
import { useUser } from '../Auth/UserContext';
import { GEContext } from 'components/RenderRouter/GiveComponents/GEContext';
import { GEActionType } from 'components/RenderRouter/GiveComponents/GETypes';

type AddPaymentMethodCardProps = {
  closeCard: (card?: CardInfo) => void;
  isLoading?: boolean;
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

export default function PaymentAddMethod(props: AddPaymentMethodCardProps) {
  const { closeCard } = props;
  const [addingCard, setAddingCard] = useState(false);
  const { state } = useUser();
  const { dispatch } = useContext(GEContext);

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
    console.debug(stripeValidation);
  };
  const isCardFormValid = (): boolean => {
    console.debug(
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
  const stripe = useStripe();
  const elements = useElements();
  const stripeAttachPaymentMethod = async (id: string) => {
    try {
      const tmhStripeLinkUser = (await API.graphql({
        query: queries.tmhStripeAttachPaymentMethod,
        variables: { idempotency: uuidv4(), id: id },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })) as GraphQLResult<TmhStripeAttachPaymentMethodQuery>;
      if (
        !tmhStripeLinkUser.data?.tmhStripeAttachPaymentMethod?.message?.includes(
          'Error'
        )
      )
        return true;
      return false;
    } catch (e: any) {
      return false;
    }
  };
  const stripeAddPaymentMethod = async () => {
    if (!stripe || !elements) {
      return;
    }
    const fullName =
      cardDataForm?.nameOnCard ||
      state?.tmhUserData?.given_name + ' ' + state?.tmhUserData?.family_name;
    const elNumber = elements.getElement(CardNumberElement);
    if (elNumber == null) return;
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elNumber,
      billing_details: {
        name: fullName,
        email: state?.tmhUserData?.email ?? '',
        phone: state?.tmhUserData?.phone ?? '',
        address: {
          city: state?.tmhUserData?.billingAddress?.city ?? '',
          country: state?.tmhUserData?.billingAddress?.country ?? '',
          line1: state?.tmhUserData?.billingAddress?.line1 ?? '',
          postal_code: state?.tmhUserData?.billingAddress?.postal_code ?? '',
          state: state?.tmhUserData?.billingAddress?.state ?? '',
        },
      },
    });
    if (error) {
      //console.log('[error]', error);
    } else {
      if (paymentMethod == null) return;
      const success = await stripeAttachPaymentMethod(paymentMethod.id);
      if (success) {
        dispatch({
          type: GEActionType.SET_PAYMENT_METHOD_ID,
          payload: paymentMethod.id,
        });
      }
    }
  };
  const addNewPaymentMethod = async () => {
    setAddingCard(true);
    await stripeAddPaymentMethod();
    setAddingCard(false);
    closeCard(cardDataForm);
  };
  console.debug({ state });
  return (
    <>
      <div className="SecurePaymentContainer">
        <img
          style={{ alignSelf: 'flex-end' }}
          src={`/static/svg/Secure-Payment.svg`}
        />
      </div>
      <div className="AddNewCardContainer">
        {state.isProfileComplete ? (
          <>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginBottom: 49,
              }}
            >
              <h3 style={{ flex: 1, fontWeight: 300 }}>
                Credit card information
              </h3>
              <img src={`/static/svg/Secure-Payment.svg`} />
            </div>
            <p>Name on card</p>
            <input
              data-testid="NameOnCard"
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
              data-testid="CreditCardNum"
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
                  data-testid="CreditCardExpiry"
                  onChange={(el) => stripeFieldValidation(el, 'expiryDate')}
                  options={CARD_ELEMENT_OPTIONS}
                />
              </div>
              <div style={{ flex: 1, marginLeft: 33 }}>
                <p>CVC</p>
                <CardCvcElement
                  data-testid="CreditCardCVC"
                  onChange={(el) => stripeFieldValidation(el, 'cvc')}
                  options={CARD_ELEMENT_OPTIONS}
                />
              </div>
            </div>
            <button
              onClick={addNewPaymentMethod}
              style={{ width: '100%' }}
              disabled={!isCardFormValid() || props?.isLoading || addingCard}
              className={`SubmitNewCardButton${
                !isCardFormValid() ? ' disabled' : ''
              }`}
            >
              {addingCard || props.isLoading ? (
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
            </span>{' '}
          </>
        ) : (
          <span>xYou must first fill out your profile before proceeding. </span>
        )}
      </div>
    </>
  );
}
