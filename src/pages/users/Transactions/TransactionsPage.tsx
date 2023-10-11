import { useContext, useEffect, useState } from 'react';
import { Spinner } from 'reactstrap';
import { isMobile } from 'react-device-detect';
import './TransactionsPage.scss';
import TransactionsPaginate from './TransactionsPaginate';
import TransactionCollapsibleItem from './TransactionCollapsibleItem';
import { UserContext } from 'components/Auth/UserContext';
import moment from 'moment';
import API, { GRAPHQL_AUTH_MODE, GraphQLResult } from '@aws-amplify/api';
import { tmhStripeListCustomerTransactions } from 'graphql/queries';
import { TmhStripeListCustomerTransactionsQuery } from 'API';

export default function TransactionsPage(): JSX.Element {
  const [paginationIndex, setPaginationIndex] = useState(0);
  const [transactions, setTransactions] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const UserConsumer = useContext(UserContext);
  useEffect(() => {
    UserConsumer.userActions.getReceipts();
  }, []);
  useEffect(
    function fetchUserTransactionsFromStripe() {
      (async () => {
        console.clear();

        const user = UserConsumer.userState?.user;
        if (!user?.stripeCustomerID) {
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
    [UserConsumer.userState?.user]
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
                            <td>
                              {moment(x?.date * 1000).format('YYYY-MM-DD')}
                            </td>
                            <td>{moment(x?.date * 1000).format('HH:mm')}</td>
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
