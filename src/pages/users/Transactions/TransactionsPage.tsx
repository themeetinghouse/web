import { useEffect, useState } from 'react';
import { Spinner } from 'reactstrap';
import { isMobile } from 'react-device-detect';
import './TransactionsPage.scss';
import TransactionsPaginate from './TransactionsPaginate';
import TransactionCollapsibleItem from './TransactionCollapsibleItem';
import moment from 'moment';
import API, { GRAPHQL_AUTH_MODE, GraphQLResult } from '@aws-amplify/api';
import { tmhStripeListCustomerTransactions } from 'graphql/queries';
import { TmhStripeListCustomerTransactionsQuery } from 'API';
import { useUser } from '../Auth/UserContext';

export default function TransactionsPage(): JSX.Element {
  const { state } = useUser();
  const [paginationIndex, setPaginationIndex] = useState(0);
  const [transactions, setTransactions] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(
    function fetchUserTransactionsFromStripe() {
      (async () => {
        if (!state.tmhUserData?.stripeCustomerID) {
          console.log('NO USER');
          return;
        } else {
          try {
            setIsLoading(true);
            const response = (await API.graphql({
              query: tmhStripeListCustomerTransactions,
              authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
            })) as GraphQLResult<TmhStripeListCustomerTransactionsQuery>;
            setTransactions(
              response.data?.tmhStripeListCustomerTransactions?.transactions ??
                []
            );
            console.log({ response });
          } catch (error) {
            console.log({ failedToFetchTransactions: error });
          } finally {
            setIsLoading(false);
          }
        }
      })();
    },
    [state.tmhUserData]
  );
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
          <Spinner />
        </div>
      ) : (
        <>
          <div className="TransactionHeaderContainer">
            <h3 className="TransactionContainerHeader">Transactions</h3>
          </div>
          {isMobile ? (
            <div className="TransactionsSmallScreen">
              {transactions?.length ? (
                transactions
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
                  {transactions?.length ? (
                    transactions
                      ?.filter(
                        (a, index) =>
                          index >= paginationIndex &&
                          index < paginationIndex + 10
                      )
                      .map((x) => {
                        console.log({ x });
                        return (
                          <tr className="TransactionTableRow" key={x?.id}>
                            <td>{x?.transactionNumber}</td>
                            <td>{moment(x?.date * 1000).format('ll')}</td>
                            <td>{moment(x?.date * 1000).format('hh:mm A')}</td>
                            <td>
                              {x?.currency}
                              {' $'}
                              {parseFloat(x?.amount ?? '0').toFixed(2)}
                            </td>
                            <td>{x?.paymentMethod}</td>
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
            length={transactions?.length ?? 0}
            paginationIndex={paginationIndex}
            setPaginationIndex={setPaginationIndex}
          />
        </>
      )}
    </div>
  );
}
