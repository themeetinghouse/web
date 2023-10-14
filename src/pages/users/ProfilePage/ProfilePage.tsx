import API, { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import {
  GetTMHUserQuery,
  TMHUser,
  TmhStripeAddCustomerQuery,
  UpdateTMHUserInput,
  UpdateTMHUserMutation,
} from 'API';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Spinner } from 'reactstrap';
import { v4 as uuidv4 } from 'uuid';
import * as mutations from '../../../graphql-custom/customMutations';
import * as queries from '../../../graphql/queries';
import ProfileForm from './ProfileForm';
import './ProfilePage.scss';
import { useHistory } from 'react-router-dom';
import { getTMHUserForGiveNow } from 'graphql-custom/customQueries';
import { useUser } from '../Auth/UserContext';
type ProfilePageProps = {
  isLoading?: boolean;
};

export default function ProfilePage(props: ProfilePageProps) {
  const history = useHistory();
  const [isUpdating, setIsUpdating] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [, setUserData] = useState<TMHUser>();
  const { state: userState, dispatch: userDispatch } = useUser();

  const uploadRef = useRef<any>(null);
  const [form, setForm] = useState<any>();
  const [errorMessages, setErrorMessages] = useState<string[]>([]);
  const hasFormErrors = (): string[] => {
    const errors: string[] = [];
    if (!form?.given_name) errors.push('First Name is required');
    if (!form?.family_name) errors.push('Last Name is required');
    if (!form?.email) errors.push('Email is required');
    if (!form?.phone) errors.push('Phone is required');
    if (!form?.billingAddress?.line1) errors.push('Address is required');
    if (!form?.billingAddress?.city) errors.push('City is required');
    if (!form?.billingAddress?.state) errors.push('State is required');
    if (!form?.billingAddress?.postal_code)
      errors.push('Postal Code is required');
    if (!form?.billingAddress?.country) errors.push('Country is required');
    return errors;
  };
  const updateUser = async () => {
    try {
      const tmhStripeLinkUser = (await API.graphql({
        query: queries.tmhStripeAddCustomer,
        variables: { idempotency: uuidv4() },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })) as GraphQLResult<TmhStripeAddCustomerQuery>;
      console.log({ tmhStripeLinkUser: tmhStripeLinkUser });
      return true;
    } catch (e: any) {
      console.log({ Error: e });
      return false;
    }
  };
  const handleProfileUpdate = async () => {
    const errors = hasFormErrors();
    if (errors.length) {
      setErrorMessages(errors);
      return;
    } else setErrorMessages([]);
    try {
      setIsUpdating(true);
      const temp = {
        id: userState.user?.username,
        given_name: form?.given_name,
        family_name: form?.family_name,
        email: form?.email,
        phone: form?.phone,
        billingAddress: {
          city: form?.billingAddress?.city,
          country: form?.billingAddress?.country,
          line1: form?.billingAddress?.line1,
          line2: form?.billingAddress?.line2,
          postal_code: form?.billingAddress?.postal_code,
          state: form?.billingAddress?.state,
        },
      } as UpdateTMHUserInput;

      console.log({ temp: temp });
      const updateTmhUser = (await API.graphql({
        query: mutations.updateTMHUser,
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
        variables: { input: temp },
      })) as GraphQLResult<UpdateTMHUserMutation>;
      console.log({ updateUser: updateTmhUser });
      const getUser = (await API.graphql({
        query: getTMHUserForGiveNow,
        variables: { id: userState.user.username },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })) as GraphQLResult<GetTMHUserQuery>;
      await updateUser();
      const previousProfileIsComplete = userState.isProfileComplete;

      userDispatch({
        type: 'SET_USER',
        payload: {
          tmhUserData: getUser.data?.getTMHUser,
          user: userState.user,
          isProfileComplete: true,
        },
      });
      if (previousProfileIsComplete) {
        history.goBack();
      } else {
        history.push('/account');
      }
    } catch (e: any) {
      console.log({ errorUpdateUser: e });
      await updateUser();
    } finally {
      setIsUpdating(false);
    }
  };
  const loadUserData = useCallback(async () => {
    console.log('Loading user data');
    if (!userState.tmhUserData?.id) return;
    try {
      setIsLoading(true);
      const TMHUser = (await API.graphql({
        query: getTMHUserForGiveNow,
        variables: { id: userState.user.username },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })) as GraphQLResult<GetTMHUserQuery>;
      console.log({ TMHUser });
      const TMHUserData = TMHUser.data?.getTMHUser;
      if (!TMHUserData) {
        console.log('No user data');
        // create user
        return;
      }
      setForm({
        phone: TMHUserData?.phone,
        given_name: TMHUserData?.given_name ?? '',
        family_name: TMHUserData?.family_name ?? '',
        email: TMHUserData?.email,
        billingAddress: {
          line1: TMHUserData?.billingAddress?.line1 ?? '',
          city: TMHUserData?.billingAddress?.city ?? '',
          state: TMHUserData?.billingAddress?.state ?? '',
          postal_code: TMHUserData?.billingAddress?.postal_code ?? '',
          country: TMHUserData?.billingAddress?.country ?? '',
        },
      });
      setUserData(TMHUserData as TMHUser);
    } catch (error) {
      console.log({ error });
    } finally {
      setIsLoading(false);
    }
  }, [userState.user.username]);
  useEffect(() => {
    loadUserData();
  }, [loadUserData]);
  return !isLoading ? (
    <div className="ProfilePageContainer">
      <div className="ProfilePage">
        <ProfileForm
          setForm={setForm}
          form={form}
          uploadRef={uploadRef}
        ></ProfileForm>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ flex: 1, paddingLeft: 8 }}>
            {errorMessages.map((errorText) => {
              return (
                <span
                  key={errorText}
                  style={{ color: 'tomato', display: 'block' }}
                >
                  {errorText}
                </span>
              );
            })}
          </div>
          <div
            style={{
              display: 'flex',
              alignSelf: 'flex-end',
              justifyContent: 'space-between',
            }}
          >
            <button
              onClick={handleProfileUpdate}
              aria-label="Update Profile"
              className="ProfileButton"
            >
              {isUpdating || props.isLoading ? (
                <>Updating...</>
              ) : !userState.isProfileComplete ? (
                'Complete your profile'
              ) : (
                'Update'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="ProfilePageContainer">
      <div className="ProfilePage" style={{ gridTemplateColumns: '100%' }}>
        <div style={{ margin: 'auto', textAlign: 'center' }}>
          <p>
            <b>Loading profile data..</b>
          </p>
          <br></br>
          <Spinner />
        </div>
      </div>
    </div>
  );
}
