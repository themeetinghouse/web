import { useContext } from 'react';

import ProfileCard from '../DashboardHome/ProfileCard';
import GiveCompletionPage from './GiveCompletionPage';
import GiveManageRecurringCard from './GiveManageRecurringCard';
import './GivePage.scss';
import GivePageCard from './GivePageCard';
import { GEContext } from 'components/RenderRouter/GiveComponents/GEContext';
import { GEPage } from 'components/RenderRouter/GiveComponents/GETypes';

export enum GiveToggleType {
  RECURRING_PAGE = 'Recurring',
  GIVE_PAGE = 'Give once',
}

export default function GivePage() {
  const { state } = useContext(GEContext);

  return (
    <div className="GiveContainer">
      {state.currentPage === GEPage.GIVE_NOW ? (
        <GivePageCard />
      ) : state.currentPage === GEPage.RECURRING_GIFT ? (
        <GiveManageRecurringCard />
      ) : state.currentPage === GEPage.COMPLETED ? (
        <GiveCompletionPage />
      ) : null}

      <ProfileCard />
    </div>
  );
}
