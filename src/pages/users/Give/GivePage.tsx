import { useContext } from 'react';
//import { useHistory } from 'react-router-dom';
import ProfileCard from '../DashboardHome/ProfileCard';
import GiveCompletionPage from './GiveCompletionPage';
import GiveManageRecurringCard from './GiveManageRecurringCard';
import './GivePage.scss';
import GivePageCard from './GivePageCard';
import { GEContext } from 'components/RenderRouter/GiveComponents/GEContext';
import { GEPage } from 'components/RenderRouter/GiveComponents/GETypes';

export enum GiveToggleType { // this is for determining the ['Recurring', 'Give once']toggle button in GivePageCard.tsx
  RECURRING_PAGE = 'Recurring',
  GIVE_PAGE = 'Give once',
}

// type LocationObj = {
//   showActiveRecurringPage?: boolean;
//   showNewRecurringPage?: boolean;
// };

export default function GivePage() {
  const { state } = useContext(GEContext);
  //const history = useHistory<LocationObj>();
  // const determineInitialState = () => {
  //   if (history?.location?.state?.showActiveRecurringPage)
  //     return { currentPage: GEPage.RECURRING_GIFT };
  //   if (history?.location?.state?.showNewRecurringPage)
  //     return {
  //       currentPage: GEPage.GIVE_NOW,
  //       givePageToggleType: GiveToggleType.RECURRING_PAGE,
  //     };
  //   return { currentPage: GEPage.GIVE_NOW }; // landing default
  // };

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
