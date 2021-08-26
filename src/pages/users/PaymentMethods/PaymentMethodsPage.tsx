import ProfileCard from '../DashboardHome/ProfileCard';
import PaymentsCard from './PaymentCard';
import './PaymentMethodsPage.scss';

export default function PaymentMethodsPage(): JSX.Element {
  return (
    <div className="PaymentsContainer">
      <PaymentsCard />
      <ProfileCard />
    </div>
  );
}
