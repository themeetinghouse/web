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
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import * as mutations from 'graphql/mutations';
import LoadingPage from 'components/TMHRouter/LoadingPage';
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
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(userReducer, initialState);
  const [isInitialLoading, setIsInitialLoading] = React.useState(true);
  const getAndSetUser = useCallback(async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      console.debug({ user });
      const tmhUser = (await API.graphql({
        query: getTMHUserForGiveNow,
        variables: { id: user.username },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })) as GraphQLResult<GetTMHUserQuery>;
      const tmhUserData = tmhUser.data?.getTMHUser;
      console.debug({ tmhUserData });
      if (!tmhUserData) {
        console.debug('user data doesnt exist. must create');
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
        console.debug({ inputData: inputData });
        try {
          const createUser = (await API.graphql({
            query: mutations.createTMHUser,
            variables: {
              input: inputData,
            },
            authMode: 'AMAZON_COGNITO_USER_POOLS',
          })) as GraphQLResult<CreateTMHUserMutation>;
          console.debug({ createUser: createUser });
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
            payload: {
              isProfileComplete,
              tmhUserData: newTMHUserData,
              user,
            },
          });
        } catch (e) {
          console.error({ error: e });
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
          payload: {
            isProfileComplete,
            tmhUserData,
            user,
          },
        });
      }
    } catch (error) {
      dispatch({
        type: 'SET_USER',
        payload: {
          isProfileComplete: false,
          tmhUserData: null,
          user: null,
        },
      });
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
          await getAndSetUser();
          if (state.isProfileComplete) {
            navigate('/account');
          } else {
            // if (state.tmhUserData) navigate('account/profile');
            // else console.log('incomplete');
          }
          break;
      }
    };
    //if (!state.isProfileComplete) navigate('/account/profile');
    Hub.listen('auth', listenerFunc);
    return () => Hub.remove('auth', listenerFunc);
  }, [state.isProfileComplete, state.tmhUserData]);
  if (isInitialLoading) return <LoadingPage />;
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
