import React, {
  createContext,
  Dispatch,
  useCallback,
  useEffect,
  useReducer,
} from 'react';
import {
  CreateTMHUserInput,
  CreateTMHUserMutation,
  GetTMHUserQuery,
  TMHUser,
} from 'API';
import { Auth } from '@aws-amplify/auth';
import { API, GRAPHQL_AUTH_MODE, GraphQLResult } from '@aws-amplify/api';
import { getTMHUserForGiveNow } from 'graphql-custom/customQueries';
import { Hub } from 'aws-amplify';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import * as mutations from 'graphql/mutations';
type UserState = {
  user: any | null; // should be cognitoUser
  tmhUserData: TMHUser | null;
  isProfileComplete: boolean;
};

const initialState: UserState = {
  user: null,
  tmhUserData: null,
  isProfileComplete: false,
};

const UserContext = createContext<{
  state: UserState;
  dispatch: Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const history = useHistory();
  const [state, dispatch] = useReducer(userReducer, initialState);
  const [isInitialLoading, setIsInitialLoading] = React.useState(true);
  const getAndSetUser = useCallback(async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      console.log({ user });
      const tmhUser = (await API.graphql({
        query: getTMHUserForGiveNow,
        variables: { id: user.username },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })) as GraphQLResult<GetTMHUserQuery>;
      const tmhUserData = tmhUser.data?.getTMHUser;
      console.log({ tmhUserData });
      if (!tmhUserData) {
        console.log('user data doesnt exist. must create');
        const inputData: CreateTMHUserInput = {
          id: user.username,
          given_name: user?.attributes?.given_name ?? '',
          family_name: user?.attributes?.family_name ?? '',
          email: user?.username,
          phone: user?.attributes?.phone_number,
          billingAddress: {},
          owner: user.username,
          joined: moment().format(),
        };
        console.log({ inputData: inputData });
        try {
          const createUser = (await API.graphql({
            query: mutations.createTMHUser,
            variables: {
              input: inputData,
            },
            authMode: 'AMAZON_COGNITO_USER_POOLS',
          })) as GraphQLResult<CreateTMHUserMutation>;
          console.log({ createUser: createUser });
          const newTMHUser = (await API.graphql({
            query: getTMHUserForGiveNow,
            variables: { id: user.username },
            authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
          })) as GraphQLResult<GetTMHUserQuery>;
          const newTMHUserData = newTMHUser.data?.getTMHUser;
          const isProfileComplete = Boolean(
            newTMHUserData?.given_name &&
              newTMHUserData?.family_name &&
              newTMHUserData?.phone &&
              newTMHUserData?.billingAddress?.line1 &&
              newTMHUserData?.billingAddress?.city &&
              newTMHUserData?.billingAddress?.state &&
              newTMHUserData?.billingAddress?.postal_code &&
              newTMHUserData?.billingAddress?.country
          );
          dispatch({
            type: 'SET_USER',
            payload: { isProfileComplete, tmhUserData: newTMHUserData, user },
          });
        } catch (e) {
          console.log({ error: e });
        }
      } else {
        const isProfileComplete = Boolean(
          tmhUserData?.given_name &&
            tmhUserData?.family_name &&
            tmhUserData?.phone &&
            tmhUserData?.billingAddress?.line1 &&
            tmhUserData?.billingAddress?.city &&
            tmhUserData?.billingAddress?.state &&
            tmhUserData?.billingAddress?.postal_code &&
            tmhUserData?.billingAddress?.country
        );
        dispatch({
          type: 'SET_USER',
          payload: { isProfileComplete, tmhUserData, user },
        });
      }
    } catch (error) {
      console.error({ errorAuthing: error });
    }
  }, []);
  useEffect(() => {
    getAndSetUser().finally(() => setIsInitialLoading(false));
  }, [getAndSetUser]);
  useEffect(() => {
    const listenerFunc = async (data: any) => {
      console.log({ HubEvent: data });
      switch (data.payload.event) {
        case 'signIn':
          console.log('user signed in');
          await getAndSetUser();
          if (state.isProfileComplete) {
            history.push('/account');
          } else {
            if (state.tmhUserData) history.push('/account/profile');
          }
          break;
        case 'signUp':
          console.log('user signed up');
          break;
        case 'signOut':
          console.log('user signed out');
          break;
        case 'signIn_failure':
          console.log('user sign in failed');
          break;
        case 'configured':
          console.log('the Auth module is configured');
      }
    };
    Hub.listen('auth', listenerFunc);
    return () => Hub.remove('auth', listenerFunc);
  }, [state.isProfileComplete]);
  console.log({ state });
  if (isInitialLoading) return <div>Loading...</div>;
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
const userReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'SET_COGNITO_USER':
      return { ...state, user: action.payload };
    case 'SET_TMH_USER':
      return { ...state, tmhUserData: action.payload };
    case 'SET_PROFILE_COMPLETE':
      return { ...state, isProfileComplete: action.payload };
    case 'SET_USER':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const useUser = () => {
  const context = React.useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export { useUser, UserProvider, UserContext };
