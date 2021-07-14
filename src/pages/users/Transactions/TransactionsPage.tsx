import { F1SearchContributionReceiptsResultType } from 'API';
import { useEffect, useState } from 'react';
import { Spinner } from 'reactstrap';
import f1Common from '../f1Common';
import './TransactionsPage.scss';

export default function TransactionsPage(): JSX.Element {
  const [transData, setTransData] =
    useState<F1SearchContributionReceiptsResultType | null>();
  const [isLoading, setIsLoading] = useState(true);
  const [paginationIndex, setPaginationIndex] = useState(0);
  useEffect(() => {
    f1Common.getReceipts(setTransData, setIsLoading);
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
        <>
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
              {transData?.contributionReceipt
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
                })}
            </tbody>
          </table>
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
