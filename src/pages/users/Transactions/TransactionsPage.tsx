import { F1SearchContributionReceiptsResultType } from 'API';
import { useContext, useEffect, useState } from 'react';
import { Spinner } from 'reactstrap';
import { isMobile } from 'react-device-detect';
import './TransactionsPage.scss';
import TransactionsPaginate from './TransactionsPaginate';
import TransactionCollapsibleItem from './TransactionCollapsibleItem';
import { UserContext } from 'components/Auth/UserContext';

export default function TransactionsPage(): JSX.Element {
  const [transData, setTransData] =
    useState<F1SearchContributionReceiptsResultType | null>();
  const [isLoading, setIsLoading] = useState(true);
  const [paginationIndex, setPaginationIndex] = useState(0);
  const UserConsumer = useContext(UserContext);
  useEffect(() => {
    UserConsumer.userActions.getReceipts(setTransData, setIsLoading);
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
          {isMobile ? (
            <div className="TransactionsSmallScreen">
              {transData?.contributionReceipt?.length ? (
                transData?.contributionReceipt
                  ?.filter(
                    (contributionReceipt, index) =>
                      index >= paginationIndex && index < paginationIndex + 10
                  )
                  .map((contributionReceipt) => {
                    return (
                      <TransactionCollapsibleItem
                        key={contributionReceipt?.id}
                        item={contributionReceipt}
                      />
                    );
                  })
              ) : (
                <p>No transactions found</p>
              )}
            </div>
          ) : (
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
                          index >= paginationIndex &&
                          index < paginationIndex + 10
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
          )}
          <TransactionsPaginate
            length={transData?.contributionReceipt?.length ?? 0}
            paginationIndex={paginationIndex}
            setPaginationIndex={setPaginationIndex}
          />
        </>
      )}
    </div>
  );
}
