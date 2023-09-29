import { useEffect, useState } from 'react';
//import { useState } from 'react';
import { useHistory } from 'react-router-dom';
//import { Spinner } from 'reactstrap';
import { LinkButton } from '../../../components/Link/Link';
import './TotalGivingCard.scss';
import { Spinner } from 'reactstrap';
import { getTMHUser } from 'graphql/queries';
import { API, GRAPHQL_AUTH_MODE, GraphQLResult } from '@aws-amplify/api';
import { Auth } from '@aws-amplify/auth';
import { GetTMHUserQuery } from 'API';
export default function TotalGivingCard(): JSX.Element {
  const history = useHistory();
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const user = await Auth.currentAuthenticatedUser();
        if (!user) return;
        const total = (await API.graphql({
          query: getTMHUser,
          variables: { id: user.username },
          authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
        })) as GraphQLResult<GetTMHUserQuery>;
        console.log({ total });
        setTotal(total.data?.getTMHUser?.total ?? 0);
      } catch (error) {
        console.log({ error });
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);
  return (
    <div style={{ textAlign: 'center' }} className="First-Column">
      <h3
        style={{
          marginBottom: 21,
          fontWeight: 700,
          fontSize: 24,
        }}
      >
        Giving Portal
        {/*My Total Giving*/}
      </h3>
      <br />
      <br />
      <br />

      <h4 style={{ marginBottom: 20, fontWeight: 700, fontSize: 14 }}>
        My Total Giving{/*January 1, 2021 - Today*/}
      </h4>
      {isLoading ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: 90,
            alignItems: 'center',
            alignSelf: 'center',
          }}
        >
          <Spinner />
        </div>
      ) : (
        <p
          style={{
            marginBottom: 50,
            fontSize: 48,
          }}
        >
          ${total ?? 0}
        </p>
      )}
      <LinkButton
        style={{
          margin: 'auto',
          marginBottom: 77,
          width: 190,
          backgroundColor: '#1a1a1a',
          fontSize: 16,
          lineHeight: 'unset',
          height: 'unset',
          padding: '16px 24px',
        }}
        className="inverted"
        to={'/account/give'}
      >
        Give Now
      </LinkButton>
      <p
        style={{
          fontSize: 16,
          paddingLeft: 40,
          paddingRight: 40,
          marginBottom: 9,
        }}
      >
        {
          "Want to make giving automatic? Let us know when and we'll take care of the rest."
        }
      </p>
      <button
        onClick={() =>
          history.push('/account/give', { showNewRecurringPage: true })
        }
        className="AddRecurringButton white"
      >
        Add recurring gift
      </button>
      <div style={{ marginTop: 36 }} className="ManageRecurringButton">
        <span
          style={{
            cursor: 'pointer',
            paddingTop: 16,
            margin: '16px 0px',
            borderBottom: '1px solid black',
          }}
          onClick={() =>
            history.push('/account/give', { showActiveRecurringPage: true })
          }
        >
          Manage my recurring giving
        </span>
      </div>
    </div>
  );
}
