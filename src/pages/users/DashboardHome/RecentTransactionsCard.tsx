import { LinkButton } from 'components/Link/Link';
import { useEffect } from 'react';
import { useState } from 'react';
import { Spinner } from 'reactstrap';
import './RecentTransactionsCard.scss';

type Transac = {
  id: string;
  date: string;
  amount: string | number;
  paymentMethod: string;
};
export default function RecentTransactionsCard(): JSX.Element {
  const [lastTransacs, setLastTransacs] = useState<Array<Transac>>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // fetch data
    // iterate and transform data here, or change object type to match data
    setTimeout(() => {
      setLastTransacs([
        {
          id: 'a',
          date: 'June 1, 2021',
          amount: 'CAD $20.00',
          paymentMethod: 'VISA (5209)',
        },
        {
          id: 'b',
          date: 'May 1, 2021',
          amount: 'CAD $20.00',
          paymentMethod: 'VISA (5209)',
        },
        {
          id: 'c',
          date: 'April 13, 2021',
          amount: 'CAD $20.00',
          paymentMethod: 'VISA (5209)',
        },
        {
          id: 'd',
          date: 'Mar 13, 2021',
          amount: 'CAD $20.00',
          paymentMethod: 'VISA (5209)',
        },
      ]);
      setIsLoading(false);
    }, 1300);
  }, []);
  return (
    <div className="Recent-Trans">
      <h3
        style={{
          fontWeight: 700,
          fontSize: 24,
        }}
      >
        Recent Transactions
      </h3>
      {isLoading ? (
        <div className="spinnerContainer">
          <Spinner></Spinner>
        </div>
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Amount</th>
                <th>Payment Method</th>
              </tr>
            </thead>
            <tbody>
              {lastTransacs.map((transac) => (
                <tr key={transac.id}>
                  <td>{transac.date}</td>
                  <td>{transac.amount}</td>
                  <td>{transac.paymentMethod}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <LinkButton
            className="a"
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: 21,
              height: 40,
              padding: 8,
              fontSize: 12,
              borderWidth: 4,
              borderColor: 'black',
            }}
            to={'/account/transactions'}
          >
            View all transactions
          </LinkButton>
        </>
      )}
    </div>
  );
}
