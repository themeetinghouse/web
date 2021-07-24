import { F1SearchContributionReceiptsResultType } from 'API';
import { useEffect, useState } from 'react';
import { Spinner } from 'reactstrap';
import paymentsCommon from '../paymentsCommon';
import './TransactionsPage.scss';

export default function TransactionsPage(): JSX.Element {
  const [transData, setTransData] =
    useState<F1SearchContributionReceiptsResultType | null>();
  const [isLoading, setIsLoading] = useState(true);
  const [paginationIndex, setPaginationIndex] = useState(0);
  useEffect(() => {
    paymentsCommon.getReceipts(setTransData, setIsLoading);
  }, []);
  const tableHeaders = [
    'Transaction No.',
    'Date',
    'Time',
    'Amount',
    'Payment Method',
    'Fund',
  ];
  const TransactionCollapseableItem = (props: any) => {
    const [open, setOpen] = useState(false);
    const { item } = props;
    return (
      <div key={item?.id}>
        <div>
          <p
            style={{
              fontSize: 14,
              letterSpacing: '0.5px',
              fontWeight: 700,
              lineHeight: '18px',
            }}
          >
            {item?.receivedDate}
          </p>
        </div>
        <div
          style={{
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <p style={{ flex: 1 }}>{item?.fund?.name}</p>
            <p style={{ flex: 1 }}>{item?.amount} </p>
            <p
              onClick={() => setOpen((prev) => !prev)}
              style={{ paddingRight: 40 }}
            >
              {!open ? '+' : '-'}
            </p>
          </div>

          {open ? (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <p>Transaction No.:</p>
              <p>Time:</p>
              <p>Payment Method:</p>
            </div>
          ) : null}
        </div>
      </div>
    );
  };
  return (
    <div className="TransactionsContainer">
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
            <b>Loading transactions..</b>
          </p>

          <br />
          <Spinner></Spinner>
        </div>
      ) : (
        <>
          <div className="TransactionHeaderContainer">
            <h3 className="TransactionContainerHeader">Transactions</h3>
          </div>
          <div className="TransactionsSmallScreen">
            {true || transData?.contributionReceipt?.length ? (
              [
                ...(transData?.contributionReceipt ?? []),
                {
                  id: '1',
                  receivedDate: 'Jun 1, 2021',
                  amount: 'CAD $520.00',
                  fund: { name: 'Compassion' },
                },
                {
                  id: '2',
                  receivedDate: 'Apr 2, 2021',
                  amount: 'CAD $1110.00',
                  fund: { name: 'Compassion' },
                },
                {
                  id: '3',
                  receivedDate: 'Mar 3, 2021',
                  amount: 'CAD $20.00',
                  fund: { name: 'Go' },
                },
                {
                  id: '4',
                  receivedDate: 'Jun 4, 2021',
                  amount: 'CAD $900.00',
                  fund: { name: 'Compassion' },
                },
                {
                  id: '5',
                  receivedDate: 'Apr 5, 2021',
                  amount: 'CAD $800.00',
                  fund: { name: 'Compassion' },
                },
                {
                  id: '6',
                  receivedDate: 'Mar 6, 2021',
                  amount: 'CAD $120.00',
                  fund: { name: 'Go' },
                },
                {
                  id: '7',
                  receivedDate: 'Jun 7, 2021',
                  amount: 'CAD $250.00',
                  fund: { name: 'Compassion' },
                },
                {
                  id: '8',
                  receivedDate: 'Apr 8, 2021',
                  amount: 'CAD $700.00',
                  fund: { name: 'Compassion' },
                },
                {
                  id: '9',
                  receivedDate: 'Mar 9, 2021',
                  amount: 'CAD $20.00',
                  fund: { name: 'Go' },
                },
                {
                  id: '10',
                  receivedDate: 'Jun 10, 2021',
                  amount: 'CAD $600.00',
                  fund: { name: 'Compassion' },
                },
                {
                  id: '11',
                  receivedDate: 'Apr 11, 2021',
                  amount: 'CAD $500.00',
                  fund: { name: 'Compassion' },
                },
                {
                  id: '12',
                  receivedDate: 'Mar 12, 2021',
                  amount: 'CAD $21.00',
                  fund: { name: 'Go' },
                },
              ]
                ?.filter(
                  (a, index) =>
                    index >= paginationIndex && index < paginationIndex + 10
                )
                .map((x) => (
                  <TransactionCollapseableItem key={x?.id} item={x} />
                ))
            ) : (
              <tr>
                <td>
                  <p>No transactions found</p>
                </td>
              </tr>
            )}
          </div>
          <div className="TransactionsBigScreen">
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
                {transData?.contributionReceipt?.length ? (
                  transData?.contributionReceipt
                    ?.filter(
                      (a, index) =>
                        index >= paginationIndex && index < paginationIndex + 10
                    )
                    .map((x) => {
                      return (
                        <tr className="TransactionTableRow" key={x?.id}>
                          <td>{x?.id}</td>
                          <td>{x?.receivedDate}</td>
                          <td>{x?.receivedDate}</td>
                          <td>{x?.amount}</td>
                          <td>{x?.accountReference}</td>
                          <td>{x?.fund?.name}</td>
                        </tr>
                      );
                    })
                ) : (
                  <tr>
                    <td>
                      <p>No transactions found</p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              marginTop: 50,
            }}
          >
            <button
              className="TransactionTablePaginateButton"
              onClick={() =>
                paginationIndex <= 10
                  ? setPaginationIndex(0)
                  : setPaginationIndex((prev) => prev - 10)
              }
            >
              <img src="/static/svg/ArrowLeft.svg"></img>
            </button>
            <button
              className="TransactionTablePaginateButton"
              onClick={() =>
                paginationIndex <
                (transData?.contributionReceipt?.length ?? 0) - 10
                  ? setPaginationIndex((prev) => prev + 10)
                  : null
              }
            >
              <img src="/static/svg/ArrowRight.svg"></img>
            </button>
          </div>
        </>
      )}
    </div>
  );
}
