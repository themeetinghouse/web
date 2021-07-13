import API, { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import { LinkButton } from 'components/Link/Link';
import { useEffect } from 'react';
import { useState } from 'react';
import { Spinner } from 'reactstrap';
import './RecentTransactionsCard.scss';
import * as queries from '../../../../src/graphql/queries';
import {
  F1SearchContributionReceiptsResultType,
  TmhF1SearchContributionReceiptsQuery,
} from 'API';

export default function RecentTransactionsCard(): JSX.Element {
  const [lastTransacs, setLastTransacs] =
    useState<F1SearchContributionReceiptsResultType | null>();
  const [isLoading, setIsLoading] = useState(true);
  const getReceipts = async () => {
    try {
      const tmhF1SearchContributionReceipts = (await API.graphql({
        query: queries.tmhF1SearchContributionReceipts,
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })) as GraphQLResult<TmhF1SearchContributionReceiptsQuery>;
      console.log(tmhF1SearchContributionReceipts);
      setLastTransacs(
        tmhF1SearchContributionReceipts.data?.tmhF1SearchContributionReceipts
          ?.results
      );

      setIsLoading(false);
    } catch (e) {
      console.log({ Error: e });
    }
  };
  useEffect(() => {
    getReceipts();
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
              {lastTransacs?.contributionReceipt?.map((transac) => (
                <tr key={transac?.id}>
                  <td>{transac?.receivedDate}</td>
                  <td>{transac?.amount}</td>
                  <td>{transac?.accountReference}</td>
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
