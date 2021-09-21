import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Spinner } from 'reactstrap';
import './PaymentMethodsCard.scss';
export default function PaymentMethodsCard(): JSX.Element {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 700);
  }, []);
  return (
    <div className="Payments">
      <h3>Payment Methods</h3>
      {isLoading ? (
        <div className="spinnerContainer" style={{ marginTop: -54 }}>
          <Spinner />
        </div>
      ) : (
        <div className="cardContainer">
          <div className="paymentCard">
            <img
              alt="Checked"
              className="checkIcon"
              src="/static/svg/Check.svg"
            />
            <img
              width={46}
              style={{ marginTop: -12 }}
              src={`/static/svg/visa.svg`}
            />
            <p style={{ textAlign: 'left', marginBottom: 0 }}>
              •••• •••• •••• 5126
            </p>
            <p style={{ textAlign: 'left' }}>Exp 05/22</p>
          </div>
          <div
            onClick={() => history.push('/account/payments')}
            className="paymentCard grey"
          >
            <img
              alt="Plus"
              className="plusIcon"
              src="/static/svg/Plus-Expand.svg"
            />
            <p>Add a new credit card</p>
          </div>
        </div>
      )}
    </div>
  );
}
