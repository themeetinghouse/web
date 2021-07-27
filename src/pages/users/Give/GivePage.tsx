import ProfileCard from '../DashboardHome/ProfileCard';
import GiveManageRecurringCard from './GiveManageRecurringCard';
import './GivePage.scss';
import GivePageCard from './GivePageCard';

export default function GivePage() {
  return (
    <div className="GiveContainer">
      {true ? <GivePageCard /> : <GiveManageRecurringCard />}
      <ProfileCard />
    </div>
  );
}
