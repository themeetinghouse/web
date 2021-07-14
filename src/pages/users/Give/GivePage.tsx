import ProfileCard from '../DashboardHome/ProfileCard';
import './GivePage.scss';
import GivePageCard from './GivePageCard';

//import ProfileCard from '../DashboardHome/ProfileCard';

export default function GivePage() {
  return (
    <div className="GiveContainer">
      <GivePageCard />
      <ProfileCard />
    </div>
  );
}
