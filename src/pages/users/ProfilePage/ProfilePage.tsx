import API, { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import {
  GetTMHUserQuery,
  TMHUser,
  TmhStripeAddCustomerQuery,
  UpdateTMHUserInput,
  UpdateTMHUserMutation,
} from 'API';
import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { Spinner } from 'reactstrap';
import { v4 as uuidv4 } from 'uuid';
import * as mutations from '../../../graphql/mutations';
import * as queries from '../../../graphql/queries';
import ProfileForm from './ProfileForm';
import './ProfilePage.scss';
import { RouteComponentProps, useHistory } from 'react-router-dom';
import { GEContext } from 'components/RenderRouter/GiveComponents/GEContext';
import { getTMHUserForGiveNow } from 'graphql-custom/customQueries';
import { GEActionType } from 'components/RenderRouter/GiveComponents/GETypes';
type ProfilePageProps = {
  isLoading?: boolean;
};

export default function ProfilePage(props: ProfilePageProps) {
  const history = useHistory() as RouteComponentProps['history'] & {
    location: RouteComponentProps['history']['location'] & {
      state: { previousLocation?: string };
    };
  };
  console.log({ history });
  const [isUpdating, setIsUpdating] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [, setUserData] = useState<TMHUser>();
  const { state, dispatch } = useContext(GEContext);
  console.log({ stateInProfile: state });

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
    }
    try {
      setIsUpdating(true);
      const temp = {
        id: form?.id,
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
      await updateUser();
      dispatch({
        type: GEActionType.SET_BILLING_DETAILS,
        payload: { user: updateTmhUser.data?.updateTMHUser },
      });
      if (history.location.state?.previousLocation) {
        history.push(history.location.state.previousLocation);
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
    if (!state.user) return;
    try {
      setIsLoading(true);
      const TMHUser = (await API.graphql({
        query: getTMHUserForGiveNow,
        variables: { id: state.user.username },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })) as GraphQLResult<GetTMHUserQuery>;
      console.log({ TMHUser });
      setForm({
        phone: TMHUser.data?.getTMHUser?.phone,
        given_name: TMHUser.data?.getTMHUser?.given_name ?? '',
        family_name: TMHUser.data?.getTMHUser?.family_name ?? '',
        email: TMHUser.data?.getTMHUser?.email,
        billingAddress: {
          line1: TMHUser.data?.getTMHUser?.billingAddress?.line1 ?? '',
          city: TMHUser.data?.getTMHUser?.billingAddress?.city ?? '',
          state: TMHUser.data?.getTMHUser?.billingAddress?.state ?? '',
          postal_code:
            TMHUser.data?.getTMHUser?.billingAddress?.postal_code ?? '',
          country: TMHUser.data?.getTMHUser?.billingAddress?.country ?? '',
        },
      });
      setUserData(TMHUser.data?.getTMHUser as TMHUser);
    } catch (error) {
      console.log({ error });
    } finally {
      setIsLoading(false);
    }
  }, [state.user?.username]);
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
                <>
                  <Spinner></Spinner> Updating
                </>
              ) : history.location?.state?.previousLocation ? (
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
