import { useEffect } from 'react';
import { useState } from 'react';
import { Spinner } from 'reactstrap';
import {
  LinkButton,
  Link as ClickableText,
} from '../../../components/Link/Link';
import './TotalGivingCard.scss';
export default function TotalGivingCard(): JSX.Element {
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setTotal(200);
      setIsLoading(false);
    }, 1300);
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
      <LinkButton
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          fontSize: 16,
          paddingLeft: 0,
          paddingRight: 0,
          width: 190,
          borderWidth: 4,
          borderColor: 'black',
        }}
        to={'/account/give'}
      >
        Add recurring gift
      </LinkButton>
      <ClickableText
        style={{ marginTop: 36, display: 'block' }}
        to={'/account/give'}
      >
        Manage my recurring giving
      </ClickableText>
    </div>
  );
}
