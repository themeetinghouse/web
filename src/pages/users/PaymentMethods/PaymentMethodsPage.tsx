import ProfileCard from '../DashboardHome/ProfileCard';
import PaymentCard from './PaymentCards';
import './PaymentMethodsPage.scss';

export default function PaymentMethodsPage(): JSX.Element {
  return (
    <div className="PaymentsContainer">
      <PaymentCard />
      <ProfileCard />
    </div>
  );
}
