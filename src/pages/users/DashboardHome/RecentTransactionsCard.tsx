import { LinkButton } from 'components/Link/Link';
import { useEffect } from 'react';
import { useState } from 'react';
import { Spinner } from 'reactstrap';
import './RecentTransactionsCard.scss';
import { F1SearchContributionReceiptsResultType } from 'API';
import f1Common from '../paymentsCommon';

export default function RecentTransactionsCard(): JSX.Element {
  const [lastTransacs, setLastTransacs] =
    useState<F1SearchContributionReceiptsResultType | null>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    f1Common.getReceipts(setLastTransacs, setIsLoading);
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
          <Spinner></Spinner>
        </div>
      ) : lastTransacs?.contributionReceipt?.length ? (
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
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Amount</th>
                <th>Payment Method</th>
              </tr>
            </thead>
            <tbody>
              {lastTransacs?.contributionReceipt?.map((transac) => (
                <tr key={transac?.id}>
                  <td>{transac?.receivedDate}</td>
                  <td>{transac?.amount}</td>
                  <td>{transac?.accountReference}</td>
                </tr>
              ))}
            </tbody>
          </table>
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
