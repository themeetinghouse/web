import { useReducer } from 'react';
import ProfileCard from '../DashboardHome/ProfileCard';
import GiveCompletionPage from './GiveCompletionPage';
import GiveManageRecurringCard from './GiveManageRecurringCard';
import './GivePage.scss';
import GivePageCard from './GivePageCard';

export enum GiveActionType {
  SHOW_RECURRING = 'SHOW_RECURRING',
  SHOW_GIVE = 'SHOW_GIVE',
  NAVIGATE_TO_GIVE = 'NAVIGATE_TO_GIVE',
  NAVIGATE_TO_COMPLETION_SUCCESS = 'NAVIGATE_TO_COMPLETION_SUCCESS',
  NAVIGATE_TO_COMPLETION_ERROR = 'NAVIGATE_TO_COMPLETION_ERROR',
}
enum GivePageType {
  GIVE_PAGE = 'give',
  RECURRING_PAGE = 'recurring',
  COMPLETE_PAGE = 'complete',
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
      case GiveActionType.NAVIGATE_TO_GIVE:
        // takes no payload vs SHOW_GIVE
        return { ...giveState, currentPage: GivePageType.GIVE_PAGE };
      case GiveActionType.NAVIGATE_TO_COMPLETION_SUCCESS:
        return {
          ...giveState,
          currentPage: GivePageType.COMPLETE_PAGE,
          currentPayload: action.payload,
        };
      case GiveActionType.NAVIGATE_TO_COMPLETION_ERROR:
        return {
          ...giveState,
          currentPage: GivePageType.COMPLETE_PAGE,
          currentPayload: action.payload,
        };
      case GiveActionType.SHOW_RECURRING:
        return { ...giveState, currentPage: GivePageType.RECURRING_PAGE };
      case GiveActionType.SHOW_GIVE:
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
      ) : giveState.currentPage === GivePageType.COMPLETE_PAGE ? (
        <GiveCompletionPage giveState={giveState} dispatch={giveDispatch} />
      ) : null}
      <ProfileCard />
    </div>
  );
}
