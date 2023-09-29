import { useEffect, useState } from 'react';
import { Spinner } from 'reactstrap';
import './PaymentCard.scss';
import * as queries from '../../../../src/graphql/queries';
import API, { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';

import PaymentAddMethod from './PaymentAddMethod';
import {
  TmhStripeDeletePaymentMethodQuery,
  TmhStripeListPaymentMethodsQuery,
} from 'API';

type PaymentMethods = NonNullable<
  NonNullable<
    GraphQLResult<TmhStripeListPaymentMethodsQuery>['data']
  >['tmhStripeListPaymentMethods']
>['data'];
export default function PaymentsCard() {
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
      setCards(
        tmhStripeListPaymentMethods.data?.tmhStripeListPaymentMethods?.data
      );
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
          <h1>Payment Methods</h1>
          {cards?.map((card) => {
            return (
              card &&
              card.card && (
                <CardCard
                  listPaymentMethods={getStripePaymentMethods}
                  card={card}
                />
              )
            );
          })}
          {!shouldShowForm ? (
            <button
              onClick={() => setShowCardForm(true)}
              className="AddNewCardButton"
            >
              <img src={`/static/svg/Plus-Expand.svg`}></img>Add New Credit Card
            </button>
          ) : (
            <PaymentAddMethod
              isLoading={isLoading}
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
}: {
  card: any;
  listPaymentMethods: () => Promise<any>;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const handleRemove = async (id: string | undefined | null) => {
    if (!id) return;
    try {
      setIsLoading(true);
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
  return (
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
          <button
            onClick={() => handleRemove(card?.id)}
            className="CardButton white"
          >
            {isLoading ? 'Removing...' : 'Remove'}
          </button>
        </div>
      </div>
    </div>
  );
};
