import { useEffect } from 'react';
import { useState } from 'react';
import { Spinner } from 'reactstrap';
import './PaymentMethodsCard.scss';
export default function PaymentMethodsCard(): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1300);
  }, []);
  return (
    <div className="Payments">
      <h3>Payment Methods</h3>
      {isLoading ? (
        <div className="spinnerContainer" style={{ marginTop: -54 }}>
          <Spinner></Spinner>
        </div>
      ) : (
        <div className="cardContainer">
          <div className="paymentCard">
            <img className="checkIcon" src="/static/svg/Check.svg" />
            <p>**** **** **** 5126 Exp 05/22</p>
          </div>
          <div className="paymentCard grey">
            <img className="plusIcon" src="/static/svg/Plus-Expand.svg" />
            <p>Add a new credit card</p>
          </div>
        </div>
      )}
    </div>
  );
}
