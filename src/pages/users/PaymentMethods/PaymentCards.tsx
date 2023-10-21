import { useContext, useEffect, useState } from 'react';
import { Spinner } from 'reactstrap';
import './PaymentCard.scss';
import * as queries from '../../../graphql/queries';
import API, { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';

import PaymentAddMethodPortal from './PaymentAddMethod';
import PaymentAddMethodGE from '../../../components/RenderRouter/GiveComponents/PaymentAddMethod';
import {
  TmhStripeDeletePaymentMethodQuery,
  TmhStripeDeleteSubscriptionQuery,
  TmhStripeListPaymentMethodsQuery,
  TmhStripeListSubscriptionsQuery,
} from 'API';
import { GEContext } from 'components/RenderRouter/GiveComponents/GEContext';
import { GEActionType } from 'components/RenderRouter/GiveComponents/GETypes';
import { useLocation } from 'react-router-dom';

type PaymentMethods = NonNullable<
  NonNullable<
    GraphQLResult<TmhStripeListPaymentMethodsQuery>['data']
  >['tmhStripeListPaymentMethods']
>['data'];
export default function PaymentCard() {
  const location = useLocation();
  const { state, dispatch } = useContext(GEContext);
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [cards, setCards] = useState<PaymentMethods>([]);
  const [showCardForm, setShowCardForm] = useState(false);
  const getStripePaymentMethods = async () => {
    try {
      setIsLoading(true);
      const tmhStripeListPaymentMethods = (await API.graphql({
        query: queries.tmhStripeListPaymentMethods,
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })) as GraphQLResult<TmhStripeListPaymentMethodsQuery>;
      console.log(tmhStripeListPaymentMethods);
      const creditCards =
        tmhStripeListPaymentMethods.data?.tmhStripeListPaymentMethods?.data ??
        [];
      if (!creditCards.length) {
        setShowCardForm(true);
      }
      setCards(creditCards);
      return creditCards;
    } catch (e: any) {
      console.log({ Error: e });
      setCards(e.data.tmhStripeListPaymentMethods?.data);
    } finally {
      setIsInitialLoading(false);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getStripePaymentMethods();
  }, []);
  const shouldShowForm =
    showCardForm || (cards?.length === 0 && !isInitialLoading);
  return (
    <div className="Payments-Card">
      {isInitialLoading ? (
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
          <Spinner />
        </div>
      ) : (
        <div>
          <h1>
            {!state.content.selectedPaymentMethodId
              ? 'Payment Method'
              : 'Select a payment method'}
          </h1>
          {cards
            ?.filter((card) => {
              if (state.content?.selectedPaymentMethodId) {
                return card?.id === state.content?.selectedPaymentMethodId;
              } else {
                return true;
              }
            })
            ?.map((card) => {
              return (
                card &&
                card.card && (
                  <CardCard
                    key={card.id}
                    closeCard={() => setShowCardForm(false)}
                    listPaymentMethods={getStripePaymentMethods}
                    card={card}
                  />
                )
              );
            })}
          {!shouldShowForm ? (
            state.content.selectedPaymentMethodId ? (
              <button
                onClick={() =>
                  dispatch({
                    type: GEActionType.SET_PAYMENT_METHOD_ID,
                    payload: '',
                  })
                }
                className="AddNewCardButton"
                style={
                  location.pathname.includes('/account')
                    ? {}
                    : { backgroundColor: 'transparent' }
                }
              >
                <img src={`/static/svg/Plus-Expand.svg`}></img>Select a
                different credit card
              </button>
            ) : (
              <button
                onClick={() => setShowCardForm(true)}
                className={`AddNewCardButton`}
                style={
                  location.pathname.includes('/account')
                    ? {}
                    : { backgroundColor: 'transparent' }
                }
              >
                <img src={`/static/svg/Plus-Expand.svg`}></img>Add New Credit
                Card
              </button>
            )
          ) : location.pathname.includes('/account') ? (
            <PaymentAddMethodPortal
              isLoading={isLoading}
              closeCard={async () => {
                await getStripePaymentMethods();
                setShowCardForm(false);
              }}
            />
          ) : (
            <PaymentAddMethodGE
              closeCard={async () => {
                await getStripePaymentMethods();
                setShowCardForm(false);
              }}
            />
          )}
        </div>
      )}
    </div>
  );
}

const CardCard = ({
  card,
  listPaymentMethods,
  closeCard,
}: {
  card: any;
  listPaymentMethods: () => Promise<any>;
  closeCard: () => void;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const { state, dispatch } = useContext(GEContext);
  const checkForExistingSubscriptions = async (paymentID: string) => {
    // if any subscriptions have this payment method
    try {
      const tmhStripeListSubscriptions = (await API.graphql({
        query: queries.tmhStripeListSubscriptions,
        variables: {
          starting_after: '',
        },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })) as GraphQLResult<TmhStripeListSubscriptionsQuery>;
      console.log({ tmhStripeListSubscriptions });
      const subs =
        tmhStripeListSubscriptions.data?.tmhStripeListSubscriptions
          ?.subscriptions ?? [];
      const existingsSubs = subs.filter((sub) => {
        return sub?.paymentID === paymentID;
      });
      return existingsSubs;
    } catch (error) {
      return [];
    }
  };
  const handleRemove = async (id: string | undefined | null) => {
    if (!id) return;
    try {
      setIsLoading(true);
      // get subscriptions
      const existingsSubs = await checkForExistingSubscriptions(id);
      if (existingsSubs.length) {
        existingsSubs.map((sub) =>
          API.graphql({
            query: queries.tmhStripeDeleteSubscription,
            variables: {
              subscriptionId: sub?.id,
            },
            authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
          })
        ) as GraphQLResult<TmhStripeDeleteSubscriptionQuery>;
      }
      await Promise.all(existingsSubs).then((values) => {
        console.log({ values });
      });
      const deletePaymentMethod = (await API.graphql({
        query: queries.tmhStripeDeletePaymentMethod,
        variables: { paymentMethodId: id },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })) as GraphQLResult<TmhStripeDeletePaymentMethodQuery>;
      console.log({ deletePaymentMethod });
      await listPaymentMethods();
    } catch (e: any) {
      console.log({ Error: e });
      await listPaymentMethods();
    } finally {
      setIsLoading(false);
    }
  };
  const showRemoveButton = location.pathname?.includes?.('account/payments');
  return (
    <div className="Payments-ItemContainer">
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <span
          style={{
            flex: 1,
            fontSize: 20,
            opacity: state.content?.selectedPaymentMethodId === card.id ? 1 : 0,
          }}
        >
          Payment Method
        </span>
        <img
          style={{ alignSelf: 'flex-end' }}
          src="/static/svg/Secure-Payment.svg"
        ></img>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          flex: 1,
        }}
      >
        <div className="CardImageContainer">
          {card.card.brand && (
            <img src={`/static/svg/${card.card.brand}.svg`}></img>
          )}
        </div>

        <span style={{ justifyContent: 'center', flex: 1 }}>
          •••• •••• •••• {card.card.last4}
          <span style={{ marginLeft: 16 }}>
            Exp {card.card.exp_month}/{card.card.exp_year}
          </span>
        </span>

        {state.content?.selectedPaymentMethodId === card.id ? (
          <div className="CardButtonContainer">
            <img
              style={{ alignSelf: 'flex-end' }}
              width={20}
              height={20}
              src="/static/svg/Check.svg"
            ></img>
          </div>
        ) : null}

        {!showRemoveButton &&
        state.content?.selectedPaymentMethodId !== card.id ? (
          <span
            style={{
              cursor: 'pointer',
              margin: '16px 0px',
              borderBottom: '1px solid black',
            }}
            onClick={() => {
              closeCard();
              dispatch({
                type: GEActionType.SET_PAYMENT_METHOD_ID,
                payload: card.id,
              });
            }}
          >
            Use this card
          </span>
        ) : null}
      </div>
      {showRemoveButton ? (
        <button
          onClick={() => handleRemove(card?.id)}
          className="CardButton white"
        >
          {isLoading ? 'Removing...' : 'Remove'}
        </button>
      ) : null}
    </div>
  );
};
