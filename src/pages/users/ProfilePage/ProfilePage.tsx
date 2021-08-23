import { UserContext } from 'components/Auth/UserContext';
import { useContext, useEffect, useRef } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Spinner } from 'reactstrap';
import { countryList, stateList, provinceList } from './LocationOptions';
import './ProfilePage.scss';

export default function ProfilePage() {
  const history = useHistory();
  const uploadRef = useRef<any>(null);
  const countries = countryList();
  const states = stateList();
  const provinces = provinceList();
  const [isUpdating] = useState(false);
  const { userActions, userState } = useContext(UserContext);
  const form = userState?.user;
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
        <div className="LeftContainer">
          <input
            onChange={(e) => {
              //if (e?.target?.files?.[0])
              //  setForm({ ...form, selectedFile: e.target.files[0] });
            }}
            ref={uploadRef}
            type="file"
            id="file"
            style={{ display: 'none' }}
          ></input>
          <h1>Profile</h1>
          <div className="LeftProfilePicture">
            <img
              role="button"
              aria-label="Upload Profile Picture"
              style={{ cursor: 'pointer' }}
              onClick={() => uploadRef.current.click()}
              alt="User Profile"
              src="/static/svg/ProfileUpload.svg"
            ></img>
          </div>
          <div className="NameContainer">
            <div className="NameItem">
              <label>First Name</label>
              <input
                className="ProfileInput"
                data-testID="FirstName"
                value={form.given_name}
                /* onChange={(e) =>
                  setForm({ ...form, given_name: e.target.value })
                }*/
              ></input>
            </div>
            <div className="NameItem">
              <label>Last Name</label>
              <input
                className="ProfileInput"
                data-testID="LastName"
                value={form.family_name}
                /* onChange={(e) =>
                  setForm({ ...form, family_name: e.target.value })
                }*/
              ></input>
            </div>
          </div>
          <label>Email</label>
          <input
            className="ProfileInput"
            data-testID="Email"
            value={form.email ?? ''}
            //   onChange={(e) => setForm({ ...form, email: e.target.value })}
          ></input>
          <label>Mobile</label>
          <input
            data-testID="Mobile"
            className="ProfileInput"
            value={form.phone ?? ''}
            // onChange={(e) => setForm({ ...form, phone: e.target.value })}
          ></input>
          <label>Stress Address</label>
          <input
            data-testID="Address"
            className="ProfileInput"
            value={form.billingAddress?.line1 ?? ''}
            /* onChange={(e) =>
              setForm({
                ...form,
                billingAddress: {
                  ...form.billingAddress,
                  __typename: 'Address',
                  line1: e.target.value,
                },
              })
            }*/
          ></input>
          <label>City</label>
          <input
            data-testID="City"
            className="ProfileInput"
            value={form.billingAddress?.city ?? ''}
            /* onChange={(e) =>
              setForm({
                ...form,
                billingAddress: {
                  ...form.billingAddress,
                  __typename: 'Address',
                  city: e.target.value,
                },
              })
            }*/
          ></input>
          <div className="LocationContainer">
            <div className="LocationItem">
              <label htmlFor="country-select">Country</label>
              <select
                data-testID="Country"
                id="country-select"
                className="ProfileInput"
                /* onChange={(e) =>
                  setForm({
                    ...form,
                    billingAddress: {
                      ...form.billingAddress,
                      __typename: 'Address',
                      country: e.target.value,
                    },
                  })
                }*/
                name="country"
              >
                <option value={''} defaultValue="">
                  Select a country
                </option>
                {countries.map((country) => {
                  return (
                    <option value={country} key={country}>
                      {country}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="LocationItem">
              <label htmlFor="province-select">Province/State</label>
              {!(
                form.billingAddress.country === 'Canada' ||
                form.billingAddress.country === 'United States of America (the)'
              ) ? (
                <input
                  data-testID="Province"
                  id="province-select"
                  className="ProfileInput"
                  value={form.billingAddress?.state ?? ''}
                  /*    onChange={(e) =>
                    setForm({
                      ...form,
                      billingAddress: {
                        ...form.billingAddress,
                        __typename: 'Address',
                        state: e.target.value,
                      },
                    })
                  }*/
                ></input>
              ) : (
                <select
                  data-testID="Province"
                  id="province-select"
                  className="ProfileInput"
                  /* onChange={(e) =>
                    setForm({
                      ...form,
                      billingAddress: {
                        ...form.billingAddress,
                        __typename: 'Address',
                        state: e.target.value,
                      },
                    })
                  }*/
                  name="province"
                >
                  <option selected>Select a province/state</option>
                  {form.billingAddress?.country === 'Canada'
                    ? provinces.map((province) => {
                        return (
                          <option value={province} key={province}>
                            {province}
                          </option>
                        );
                      })
                    : form.billingAddress?.country ===
                      'United States of America (the)'
                    ? states.map((state, index) => {
                        return (
                          <option
                            selected={index === 0}
                            value={state}
                            key={state}
                          >
                            {state}
                          </option>
                        );
                      })
                    : null}
                </select>
              )}
            </div>
            <div className="LocationItem">
              <label>Postal Code/Zip Code</label>
              <input
                data-testID="PostalCode"
                className="ProfileInput"
                value={form.billingAddress?.postal_code ?? ''}
                /*onChange={(e) =>
                  setForm({
                    ...form,
                    billingAddress: {
                      ...form.billingAddress,
                      __typename: 'Address',
                      postal_code: e.target.value,
                    },
                  })
                }*/
              ></input>
            </div>
          </div>
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
