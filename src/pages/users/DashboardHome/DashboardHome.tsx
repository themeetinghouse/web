import PaymentMethodsCard from './PaymentMethodsCard';
import ProfileCard from './ProfileCard';
import RecentTransactionsCard from './RecentTransactionsCard';
import TotalGivingCard from './TotalGivingCard';
import './DashboardHome.scss';

export default function DashboardHome(): JSX.Element {
  return (
    <div className="dashboardContainer">
      <TotalGivingCard />
      <RecentTransactionsCard />
      <PaymentMethodsCard />
      <ProfileCard />
    </div>
  );
}
