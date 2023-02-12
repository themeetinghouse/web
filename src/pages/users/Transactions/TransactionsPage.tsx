import { useContext, useEffect, useState } from 'react';
import { Spinner } from 'reactstrap';
import { isMobile } from 'react-device-detect';
import './TransactionsPage.scss';
import TransactionsPaginate from './TransactionsPaginate';
import TransactionCollapsibleItem from './TransactionCollapsibleItem';
import { UserContext } from 'components/Auth/UserContext';
import moment from 'moment';

export default function TransactionsPage(): JSX.Element {
  const [paginationIndex, setPaginationIndex] = useState(0);
  const UserConsumer = useContext(UserContext);
  useEffect(() => {
    UserConsumer.userActions.getReceipts();
  }, []);
  const tableHeaders = [
    'Transaction No.',
    'Date',
    'Amount',
    'Payment Method',
    'Fund',
  ];
  const transData = UserConsumer.userState?.f1Transactions;
  const isLoading = transData == null;
  return (
    <div className="TransactionsContainer">
      {false && isLoading ? (
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
          <Spinner />
        </div>
      ) : (
        <>
          <div className="TransactionHeaderContainer">
            <h3 className="TransactionContainerHeader">Transactions</h3>
          </div>
          {isMobile ? (
            <div className="TransactionsSmallScreen">
              {transData?.length ? (
                transData
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
                  {transData?.length ? (
                    transData
                      ?.filter(
                        (a, index) =>
                          index >= paginationIndex &&
                          index < paginationIndex + 10
                      )
                      .map((x) => {
                        return (
                          <tr className="TransactionTableRow" key={x?.id}>
                            <td>{x?.id}</td>
                            <td>
                              {moment(x?.receivedDate).format('YYYY-MM-DD')}
                            </td>

                            <td>{parseFloat(x?.amount ?? '0').toFixed(2)}</td>
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
            length={transData?.length ?? 0}
            paginationIndex={paginationIndex}
            setPaginationIndex={setPaginationIndex}
          />
        </>
      )}
    </div>
  );
}
