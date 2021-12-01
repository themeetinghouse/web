import { useEffect, useState } from 'react';
import { Spinner } from 'reactstrap';
import './PaymentCard.scss';
import * as queries from '../../../../src/graphql/queries';
import API, { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';

import PaymentAddMethod from './PaymentAddMethod';
import { TmhStripeListPaymentMethodsQuery } from 'API';

type PaymentMethods = NonNullable<
  NonNullable<
    GraphQLResult<TmhStripeListPaymentMethodsQuery>['data']
  >['tmhStripeListPaymentMethods']
>['data'];
export default function PaymentsCard() {
  const [isLoading, setIsLoading] = useState(true);
  const [cards, setCards] = useState<PaymentMethods>([]);
  const [showCardForm, setShowCardForm] = useState(false);
  const getStripePaymentMethods = async () => {
    try {
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
    }
    setIsLoading(false);
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
          <h1>Payment Methods</h1>
          {cards?.map((card) => {
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
                    {/*isPreferredCard ? (
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
                    )*/}
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
                    <div className="CardButtonContainer">
                      <button className="CardButton white">Remove</button>
                      <button className="CardButton">Update</button>
                    </div>
                  </div>
                </div>
              )
            );
          })}
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
