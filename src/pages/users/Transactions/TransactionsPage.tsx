import { useEffect, useState } from 'react';
import { Spinner } from 'reactstrap';
import './TransactionsPage.scss';

export default function TransactionsPage(): JSX.Element {
  const [transData, setTransData] = useState<Array<any>>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [paginationIndex, setPaginationIndex] = useState(0);
  useEffect(() => {
    const loadTransactions = async () => {
      setTimeout(() => {
        setTransData([
          {
            id: '2759057629',
            date: 'Jun 1, 2021',
            time: '2:47 PM',
            amount: 'CAD $20.00 ',
            paymentMethod: 'VISA (5209)',
            fund: 'General',
          },
          {
            id: '4608767866',
            date: 'May 1, 2021',
            time: '9:01 AM',
            amount: 'CAD $20.00 ',
            paymentMethod: 'VISA (5209)',
            fund: 'Compassion',
          },
          {
            id: '2107399592',
            date: 'Apr 13, 2021',
            time: '5:31 PM',
            amount: 'CAD $100.00 ',
            paymentMethod: 'VISA (5209)',
            fund: 'Go',
          },
          {
            id: '0986135073',
            date: 'Mar 24, 2021',
            time: '1:42 PM',
            amount: 'CAD $20.00 ',
            paymentMethod: 'VISA (5209)',
            fund: 'General',
          },
          {
            id: '9365740039',
            date: 'Mar 3, 2021',
            time: '7:27 PM',
            amount: 'CAD $100.00 ',
            paymentMethod: 'VISA (5209)',
            fund: 'Compassion',
          },
          {
            id: '0105151985',
            date: 'Feb 13, 2021',
            time: '9:43 AM',
            amount: 'CAD $20.00 ',
            paymentMethod: 'VISA (5209)',
            fund: 'Curriculum',
          },
          {
            id: '2417696131',
            date: 'Jan 21, 2021',
            time: '1:32 PM',
            amount: 'CAD $100.00 ',
            paymentMethod: 'VISA (5209)',
            fund: 'General',
          },
          {
            id: '2390283240',
            date: 'Jan 5, 2021',
            time: '12:46 PM',
            amount: 'CAD $25.00 ',
            paymentMethod: 'VISA (5209)',
            fund: 'General',
          },
          {
            id: '2839848047',
            date: 'Dec 30, 2020',
            time: '11:40 AM',
            amount: 'CAD $40.00 ',
            paymentMethod: 'VISA (5209)',
            fund: 'General',
          },
          {
            id: '9381672459',
            date: 'Dec 30, 2020',
            time: '6:21 PM',
            amount: 'CAD $100.00 ',
            paymentMethod: 'VISA (5209)',
            fund: 'General',
          },
          {
            id: '9381672459',
            date: 'Dec 30, 2020',
            time: '6:21 PM',
            amount: 'CAD $100.00 ',
            paymentMethod: 'VISA (5209)',
            fund: 'General',
          },
        ]);
        setIsLoading(false);
      }, 1300);
    };
    loadTransactions();
  }, []);
  const tableHeaders = [
    'Transaction No.',
    'Date',
    'Time',
    'Amount',
    'Payment Method',
    'Fund',
  ];
  return (
    <div className="TransactionsContainer">
      <div className="TransactionHeaderContainer">
        <h3 className="TransactionContainerHeader">Transactions</h3>
      </div>
      {isLoading ? (
        <div style={{ textAlign: 'center', margin: 'auto' }}>
          <Spinner></Spinner>
        </div>
      ) : (
        <table width={'100%'}>
          <thead>
            <tr>
              {tableHeaders.map((header) => {
                return (
                  <th key={header} className="TransactionTableHeader">
                    {header}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {transData
              .filter(
                (a, index) =>
                  index >= paginationIndex && index < paginationIndex + 10
              )
              .map(({ id, date, time, amount, paymentMethod, fund, index }) => {
                return (
                  <tr className="TransactionTableRow" key={id}>
                    <td>{id}</td>
                    <td>{date}</td>
                    <td>{time}</td>
                    <td>{amount}</td>
                    <td>{paymentMethod}</td>
                    <td>{fund}</td>
                  </tr>
                );
              })}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={6}></td>
              <td>
                <button
                  onClick={() =>
                    paginationIndex <= 10
                      ? setPaginationIndex(0)
                      : setPaginationIndex((prev) => prev - 10)
                  }
                >
                  {'<'}
                </button>
                <button
                  onClick={() =>
                    paginationIndex < transData.length - 10
                      ? setPaginationIndex((prev) => prev + 10)
                      : null
                  }
                >
                  {'>'}
                </button>
              </td>
            </tr>
          </tfoot>
        </table>
      )}
    </div>
  );
}
