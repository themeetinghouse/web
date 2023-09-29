import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Spinner } from 'reactstrap';
import './PaymentMethodsCard.scss';
import * as queries from '../../../../src/graphql/queries';
import { API, GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import { TmhStripeListPaymentMethodsQuery } from 'API';

export default function PaymentMethodsCard(): JSX.Element {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);
  const [card, setCard] = useState<any>(null);
  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const tmhStripeListPaymentMethods = (await API.graphql({
          query: queries.tmhStripeListPaymentMethods,
          authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
        })) as GraphQLResult<TmhStripeListPaymentMethodsQuery>;
        console.log(tmhStripeListPaymentMethods);
        const cc =
          tmhStripeListPaymentMethods.data?.tmhStripeListPaymentMethods
            ?.data?.[0];
        if (cc) setCard(cc.card);
      } catch (e: any) {
        console.log({ Error: e });
        const cc = e.data?.tmhStripeListPaymentMethods?.data?.[0];
        if (cc) setCard(cc.card);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);
  console.log({ card });
  return (
    <div className="Payments">
      <h3>Payment Methods</h3>
      {isLoading ? (
        <div className="spinnerContainer" style={{ marginTop: -54 }}>
          <Spinner />
        </div>
      ) : (
        <div className="cardContainer">
          <div className="paymentCard">
            <img
              alt="Checked"
              className="checkIcon"
              src="/static/svg/Check.svg"
            />
            <img
              width={46}
              style={{ marginTop: -12, marginBottom: 24 }}
              src={`/static/svg/${card.brand}.svg`}
            />
            <p style={{ textAlign: 'left', marginBottom: 0 }}>
              •••• •••• •••• {card?.last4}
            </p>
            <p style={{ textAlign: 'left' }}>
              Exp{' '}
              {`${
                card?.exp_month < 10 ? `0${card?.exp_month}` : card?.exp_month
              } `}
              /{card?.exp_year}
            </p>
          </div>
          <div
            onClick={() => history.push('/account/payments')}
            className="paymentCard grey"
          >
            <img
              alt="Plus"
              className="plusIcon"
              src="/static/svg/Plus-Expand.svg"
            />
            <p>Add a new credit card</p>
          </div>
        </div>
      )}
    </div>
  );
}
