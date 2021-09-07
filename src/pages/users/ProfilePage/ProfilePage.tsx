import { UserContext } from 'components/Auth/UserContext';
import { useContext, useEffect, useRef } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Spinner } from 'reactstrap';
import ProfileForm from './ProfileForm';
import './ProfilePage.scss';

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
  const handleProfileUpdate = async () => {
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
          <button aria-label="Update Profile" className="ProfileButton">
            Update
          </button>
        </div>
        <div className="RightContainer">
          <div className="RightProfilePicture">
            <img
              role="button"
              aria-label="Upload Profile Picture"
              style={{ cursor: 'pointer' }}
              onClick={() => uploadRef.current.click()}
              alt="User Profile"
              src="/static/svg/ProfileUpload.svg"
            ></img>
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
          <Spinner></Spinner>
        </div>
      </div>
    </div>
  );
}
