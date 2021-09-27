import { LinkButton } from 'components/Link/Link';
import { useContext, useEffect } from 'react';
import { Spinner } from 'reactstrap';
import './RecentTransactionsCard.scss';

import { UserContext } from 'components/Auth/UserContext';
import moment from 'moment';

export default function RecentTransactionsCard(): JSX.Element {
  const UserConsumer = useContext(UserContext);
  useEffect(() => {
    UserConsumer.userActions.getReceipts();
  }, []);
  const lastTransacs = UserConsumer.userState?.f1Transactions;
  const isLoading = lastTransacs == null;
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
      ) : lastTransacs?.length ? (
        <>
          <h3
            style={{
              fontWeight: 700,
              fontSize: 24,
              flex: 1,
            }}
          >
            Recent Transactions
          </h3>
          <div style={{ maxHeight: 180, overflow: 'auto' }}>
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Payment Method</th>
                </tr>
              </thead>
              <tbody>
                {lastTransacs
                  ?.filter((transac, index) => index < 4)
                  .sort((txOne, txTwo) =>
                    txTwo?.receivedDate && txOne?.receivedDate
                      ? txTwo?.receivedDate?.localeCompare(txOne?.receivedDate)
                      : 0
                  )
                  .map((transac) => (
                    <tr key={transac?.id}>
                      <td>
                        {moment(transac?.receivedDate).format('YYYY-MM-DD')}
                      </td>
                      <td>{parseFloat(transac?.amount ?? '0').toFixed(2)}</td>
                      <td>{transac?.accountReference}</td>
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
          <p>
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
