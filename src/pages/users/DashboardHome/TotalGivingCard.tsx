import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Spinner } from 'reactstrap';
import { LinkButton } from '../../../components/Link/Link';
import './TotalGivingCard.scss';
export default function TotalGivingCard(): JSX.Element {
  const history = useHistory();
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setTotal(200);
      setIsLoading(false);
    }, 700);
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
        My Total Giving
      </h3>
      <h4 style={{ marginBottom: 41, fontWeight: 700, fontSize: 14 }}>
        January 1, 2021 - Today
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
          <Spinner></Spinner>
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
