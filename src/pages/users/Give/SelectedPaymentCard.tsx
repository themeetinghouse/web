import { Link as ClickableText } from 'components/Link/Link';
import './SelectedPaymentCard.scss';

type SelectedPaymentCardProps = {
  card: any;
};

export function SelectedPaymentCard(props: SelectedPaymentCardProps) {
  return (
    <div className="PaymentSelectContainer">
      <div style={{ display: 'flex', flexDirection: 'row', marginBottom: 49 }}>
        <span style={{ fontSize: 20, flex: 1 }}>Payment method</span>
        <img src={`/static/svg/Secure-Payment.svg`} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', marginBottom: 50 }}>
        {props?.card?.cardNumber &&
        props?.card?.expiry &&
        props?.card?.cardType ? (
          <>
            <img
              style={{ marginRight: 22 }}
              src={`/static/svg/${props?.card?.cardType}.svg`}
            />
            <div className="GiveCardAndExpiryContainer">
              <span style={{ marginRight: 22 }}>{props?.card?.cardNumber}</span>
              <span style={{ marginRight: 32 }}>Exp {props?.card?.expiry}</span>
            </div>
            <ClickableText
              style={{ fontSize: 12, lineHeight: '22px' }}
              to={'/account/payments'}
            >
              Change
            </ClickableText>
          </>
        ) : (
          <ClickableText
            style={{ fontSize: 12, lineHeight: '22px' }}
            to={'/account/payments'}
          >
            Click here to add a payment method
          </ClickableText>
        )}
      </div>
      <span style={{ color: '#646469' }}>
        This is a secure 128-bit SSL encrypted payment.
        <span
          style={{
            marginLeft: 10,
            textDecoration: 'underline',
          }}
        >
          {'Terms & Conditions'}
        </span>
        <span style={{ marginLeft: 10, textDecoration: 'underline' }}>
          Privacy Policy
        </span>
      </span>
    </div>
  );
}
