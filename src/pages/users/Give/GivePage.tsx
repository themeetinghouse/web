import { useReducer } from 'react';
import { useHistory } from 'react-router-dom';
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
enum GivePageType { // GivePageCard can be 1 of 3 cards (GivePageCard[give once, recurring], GiveManageRecurring, and GiveCompletionPage)
  GIVE_PAGE = 'give',
  RECURRING_PAGE = 'recurring',
  COMPLETE_PAGE = 'complete',
}
export enum GiveToggleType { // this is for determining the ['Recurring', 'Give once']toggle button in GivePageCard.tsx
  RECURRING_PAGE = 'Recurring',
  GIVE_PAGE = 'Give once',
}
export type GiveState = {
  currentPage: GivePageType;
  currentPayload?: any;
  givePageToggleType?: GiveToggleType;
};
export type GiveAction = {
  type: GiveActionType;
  payload?: any;
};

type LocationObj = {
  showActiveRecurringPage?: boolean;
  showNewRecurringPage?: boolean;
};

export default function GivePage() {
  const history = useHistory<LocationObj>();
  const determineInitialState = () => {
    if (history?.location?.state?.showActiveRecurringPage)
      return { currentPage: GivePageType.RECURRING_PAGE };
    if (history?.location?.state?.showNewRecurringPage)
      return {
        currentPage: GivePageType.GIVE_PAGE,
        givePageToggleType: GiveToggleType.RECURRING_PAGE,
      };
    return { currentPage: GivePageType.GIVE_PAGE }; // landing default
  };
  const initialState: GiveState = determineInitialState();
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
