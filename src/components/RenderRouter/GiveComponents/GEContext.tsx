import React, { createContext, Dispatch, useReducer } from 'react';
import giveExperienceReducer from './GEReducer';
import { GEAction, GEPage, GEState } from './GETypes';
import moment from 'moment';

const initialState = {
  currentPage: GEPage.GIVE_NOW,
  content: {
    amount: '',
    fund: {
      id: '',
      name: '',
    },
    startDate: moment().unix(),
    selectedPaymentMethodId: '',
    frequency: 'Every month',
    giftType: 'Give once',
  },
  user: null,
  billingDetails: null,
  errorMessage: '',
};

const GEContext = createContext<{
  state: GEState;
  dispatch: Dispatch<GEAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

const GEProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(giveExperienceReducer, initialState);
  return (
    <GEContext.Provider value={{ state, dispatch }}>
      {children}
    </GEContext.Provider>
  );
};
export { GEProvider, GEContext };
