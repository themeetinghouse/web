import { LinkButton } from 'components/Link/Link';
import { useEffect, useState } from 'react';
import { Spinner } from 'reactstrap';
import './RecentTransactionsCard.scss';

import moment from 'moment';
import * as queries from '../../../../src/graphql/queries';
import { API, GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import { TmhStripeListCustomerTransactionsQuery } from 'API';

export default function RecentTransactionsCard(): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  const [transactions, setTransactions] = useState<any[]>([]);

  useEffect(() => {
    let mounted = true;
    let tmhStripeListCustomerTransactions:
      | Promise<GraphQLResult<TmhStripeListCustomerTransactionsQuery>>
      | undefined;
    (async () => {
      try {
        if (mounted) {
          setIsLoading(true);
        }

        tmhStripeListCustomerTransactions = API.graphql({
          query: queries.tmhStripeListCustomerTransactions,
          authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
        }) as Promise<GraphQLResult<TmhStripeListCustomerTransactionsQuery>>;
        const response = await tmhStripeListCustomerTransactions;
        if (mounted) {
          setTransactions(
            response.data?.tmhStripeListCustomerTransactions?.transactions ?? []
          );
          console.debug({ response });
        }
      } catch (error) {
        console.log({ failedToFetchTransactions: error });
      } finally {
        if (mounted) {
          setIsLoading(false);
        }
      }
    })();
    return () => {
      mounted = false;
      if (tmhStripeListCustomerTransactions)
        API.cancel(tmhStripeListCustomerTransactions);
    };
  }, []);
  return (
    <div className="Recent-Trans">
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
            <b>Loading recent transactions..</b>
          </p>

          <br />
          <Spinner />
        </div>
      ) : transactions?.length ? (
        <>
          <h3
            style={{
              fontWeight: 700,
              fontSize: 24,
            }}
          >
            Recent Transactions
          </h3>
          <div style={{ maxHeight: 180, overflow: 'auto', flex: 1 }}>
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Payment Method</th>
                </tr>
              </thead>
              <tbody>
                {transactions
                  ?.filter((transac, index) => index < 4)
                  .map((transac) => (
                    <tr key={transac?.transactionNumber}>
                      <td>
                        {moment(transac?.date * 1000).format('YYYY-MM-DD')}
                      </td>
                      <td>
                        {transac.currency} $
                        {parseFloat(transac?.amount ?? '0').toFixed(2)}
                      </td>
                      <td>{transac?.paymentMethod}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <LinkButton className="ViewAllButton" to={'/account/transactions'}>
            View all transactions
          </LinkButton>
        </>
      ) : (
        <>
          <p style={{ flex: 1 }}>
            <b>No recent transactions</b>
          </p>
          <LinkButton className="ViewAllButton" to={'/account/transactions'}>
            View all transactions
          </LinkButton>
        </>
      )}
    </div>
  );
}
