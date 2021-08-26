import React, { createContext, Dispatch, useReducer } from 'react';
import giveExperienceReducer from './GEReducer';
import { GEAction, GEState } from './GETypes';

const initialState = {
  currentPage: null,
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
