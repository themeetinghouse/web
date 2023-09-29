import { useContext, useEffect, useState } from 'react';
import { Spinner } from 'reactstrap';
import './PaymentCard.scss';
import * as queries from '../../../graphql/queries';
import API, { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';

import PaymentAddMethod from './PaymentAddMethod';
import { TmhStripeListPaymentMethodsQuery } from 'API';
import { GEActionType } from 'components/RenderRouter/GiveComponents/GETypes';
import { GEContext } from './GEContext';

type PaymentMethods = NonNullable<
  NonNullable<
    GraphQLResult<TmhStripeListPaymentMethodsQuery>['data']
  >['tmhStripeListPaymentMethods']
>['data'];

export default function PaymentsCard() {
  const { dispatch, state } = useContext(GEContext);
  const [isLoading, setIsLoading] = useState(true);
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
      setCards(
        tmhStripeListPaymentMethods.data?.tmhStripeListPaymentMethods?.data
      );
    } catch (e: any) {
      console.log({ Error: e });
      setCards(e.data.tmhStripeListPaymentMethods?.data);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getStripePaymentMethods();
  }, []);
  return (
    <div className="Payments-Card">
      {isLoading ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          <Spinner size="sm" />
          <b style={{ marginLeft: 4 }}>Loading payment methods data..</b>
        </div>
      ) : (
        <div>
          <h1>Payment Method</h1>
          {cards
            ?.filter((card) => {
              if (state.selectedPaymentMethodId) {
                return card?.id === state.selectedPaymentMethodId;
              } else {
                return true;
              }
            })
            .map((card) => {
              console.log({ card });
              return (
                card &&
                card.card && (
                  <div key={card.id} className="Payments-ItemContainer">
                    <div className="CardImageContainer">
                      {card.card.brand && (
                        <img src={`/static/svg/${card.card.brand}.svg`}></img>
                      )}
                    </div>
                    <div className="CardInfoContainer">
                      {state.selectedPaymentMethodId === card.id ? (
                        <img
                          style={{ alignSelf: 'flex-end' }}
                          width={20}
                          height={20}
                          src="/static/svg/Check.svg"
                        ></img>
                      ) : null}
                      <span>{card.billing_details?.name}</span>
                      <p>
                        **** **** **** {card.card.last4}
                        <span style={{ marginLeft: 8 }}>
                          Exp {card.card.exp_month}/{card.card.exp_year}
                        </span>
                      </p>
                      {/*lastTransactionDate ? (
                      <>
                        <span style={{ fontWeight: 700 }}>
                          Last transaction
                        </span>
                        <p>{lastTransactionDate}</p>
                      </>
                    ) : (
                      <div style={{ height: 48, marginBottom: 12 }}></div>
                    )*/}
                      {state.selectedPaymentMethodId !== card.id ? (
                        <div className="CardButtonContainer">
                          <button
                            onClick={() =>
                              dispatch({
                                type: GEActionType.SET_PAYMENT_METHOD_ID,
                                payload: card.id,
                              })
                            }
                            className="CardButton"
                          >
                            Use card
                          </button>
                        </div>
                      ) : null}
                    </div>
                  </div>
                )
              );
            })}

          {!showCardForm ? (
            state.selectedPaymentMethodId ? (
              <button
                onClick={() =>
                  dispatch({
                    type: GEActionType.SET_PAYMENT_METHOD_ID,
                    payload: '',
                  })
                }
                className="AddNewCardButton"
              >
                <img src={`/static/svg/Plus-Expand.svg`}></img>Select a
                different credit card
              </button>
            ) : (
              <button
                onClick={() => setShowCardForm(true)}
                className="AddNewCardButton"
              >
                <img src={`/static/svg/Plus-Expand.svg`}></img>Add a new credit
                card
              </button>
            )
          ) : (
            <PaymentAddMethod
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
