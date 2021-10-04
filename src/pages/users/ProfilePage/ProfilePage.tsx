import API, { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import { UserContext } from 'components/Auth/UserContext';
import { useContext, useEffect, useRef } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Spinner } from 'reactstrap';
import ProfileForm from './ProfileForm';
import './ProfilePage.scss';
import * as queries from '../../../graphql/queries';
import * as mutations from '../../../graphql/mutations';
import {
  TmhStripeAddCustomerQuery,
  UpdateTMHUserInput,
  UpdateTmhUserMutation,
} from 'API';
import { v4 as uuidv4 } from 'uuid';

export default function ProfilePage() {
  const history = useHistory();
  const [isUpdating] = useState(false);
  const uploadRef = useRef<any>(null);
  const { userActions, userState } = useContext(UserContext);
  const [form, setForm] = useState(userState?.user);
  const { getCurrentUserProfile } = userActions;
  useEffect(() => {
    // is this needed? gets pulled in home screen
    getCurrentUserProfile();
  }, []);
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
    try {
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
        query: mutations.updateTmhUser,
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
        variables: { input: temp },
      })) as GraphQLResult<UpdateTmhUserMutation>;
      console.log({ updateUser: updateTmhUser });
      await updateUser();
    } catch (e: any) {
      console.log({ errorUpdateUser: e });
      await updateUser();
    }

    // compare old form with new form, remove non updated properties
  };
  return form != null && form.billingAddress != null ? (
    <div className="ProfilePageContainer">
      <div className="ProfilePage">
        <ProfileForm
          setForm={setForm}
          form={form}
          uploadRef={uploadRef}
        ></ProfileForm>
        <div className="LeftButtonContainer">
          <button
            onClick={() => history.goBack()}
            className="ProfileButton white"
          >
            Back
          </button>
          <button
            onClick={handleProfileUpdate}
            aria-label="Update Profile"
            className="ProfileButton"
          >
            Update
          </button>
        </div>
        <div className="RightContainer">
          <div className="RightProfilePicture">
            {/* <img
              role="button"
              aria-label="Upload Profile Picture"
              style={{ cursor: 'pointer' }}
              onClick={() => uploadRef.current.click()}
              alt="User Profile"
              src="/static/svg/ProfileUpload.svg"
           ></img>*/}
          </div>
          <div className="RightButtonContainer">
            <button className="ProfileButton white">Back</button>
            <button
              onClick={handleProfileUpdate}
              aria-label="Update Profile"
              className="ProfileButton"
            >
              {isUpdating ? (
                <Spinner
                  style={{
                    width: '1.5rem',
                    height: '1.5rem',
                  }}
                ></Spinner>
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
