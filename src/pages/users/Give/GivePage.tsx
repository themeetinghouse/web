import { useReducer } from 'react';
import ProfileCard from '../DashboardHome/ProfileCard';
import GiveManageRecurringCard from './GiveManageRecurringCard';
import './GivePage.scss';
import GivePageCard from './GivePageCard';

export enum GiveActionType {
  SHOW_RECURRING = 'SHOW_RECURRING',
  SHOW_GIVE = 'SHOW_GIVE',
}
enum GivePageType {
  GIVE_PAGE = 'give',
  RECURRING_PAGE = 'recurring',
}
export type GiveState = {
  currentPage: GivePageType;
  currentPayload?: any;
};
export type GiveAction = {
  type: GiveActionType;
  payload?: any;
};

export default function GivePage() {
  const initialState: GiveState = {
    currentPage: GivePageType.GIVE_PAGE,
  };
  const giveStateReducer = (
    giveState: GiveState,
    action: GiveAction
  ): GiveState => {
    switch (action.type) {
      case GiveActionType.SHOW_RECURRING:
        return { ...giveState, currentPage: GivePageType.RECURRING_PAGE };
      case GiveActionType.SHOW_GIVE:
        console.log('passing payload', action.payload);
        return {
          ...giveState,
          currentPage: GivePageType.GIVE_PAGE,
          currentPayload: action.payload,
        };
      default:
        return giveState;
    }
  };
  const [giveState, giveDispatch] = useReducer(giveStateReducer, initialState);
  return (
    <div className="GiveContainer">
      {giveState.currentPage === GivePageType.GIVE_PAGE ? (
        <GivePageCard giveState={giveState} dispatch={giveDispatch} />
      ) : giveState.currentPage === GivePageType.RECURRING_PAGE ? (
        <GiveManageRecurringCard
          giveState={giveState}
          dispatch={giveDispatch}
        />
      ) : null}
      <ProfileCard />
    </div>
  );
}
