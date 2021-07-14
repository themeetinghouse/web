import { useEffect, useRef } from 'react';
import { useState } from 'react';
import { countryList, stateList, provinceList } from './LocationOptions';
import './ProfilePage.scss';
type ProfileForm = {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  address: string;
  city: string;
  country: string;
  province: string;
  postalCode: string;
  selectedFile: File | null;
};
export default function ProfilePage() {
  const uploadRef = useRef<any>(null);
  const countries = countryList();
  const states = stateList();
  const provinces = provinceList();
  const [form, setForm] = useState<ProfileForm>({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    address: '',
    city: '',
    country: '',
    province: '',
    postalCode: '',
    selectedFile: null,
  });
  useEffect(() => {
    console.log(form);
  });
  return (
    <div className="ProfilePageContainer">
      <div className="ProfilePage">
        <div className="LeftContainer">
          <input
            onChange={(e) => {
              if (e?.target?.files?.[0])
                setForm({ ...form, selectedFile: e.target.files[0] });
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
                value={form.firstName}
                onChange={(e) =>
                  setForm({ ...form, firstName: e.target.value })
                }
              ></input>
            </div>
            <div className="NameItem">
              <label>Last Name</label>
              <input
                className="ProfileInput"
                value={form.lastName}
                onChange={(e) => setForm({ ...form, lastName: e.target.value })}
              ></input>
            </div>
          </div>
          <label>Email</label>
          <input
            className="ProfileInput"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          ></input>
          <label>Mobile</label>
          <input
            className="ProfileInput"
            value={form.mobile}
            onChange={(e) => setForm({ ...form, mobile: e.target.value })}
          ></input>
          <label>Stress Address</label>
          <input
            className="ProfileInput"
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
          ></input>
          <label>City</label>
          <input
            className="ProfileInput"
            value={form.city}
            onChange={(e) => setForm({ ...form, city: e.target.value })}
          ></input>
          <div className="LocationContainer">
            <div className="LocationItem">
              <label htmlFor="country-select">Country</label>
              <select
                id="country-select"
                className="ProfileInput"
                onChange={(e) => setForm({ ...form, country: e.target.value })}
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
                form.country === 'Canada' ||
                form.country === 'United States of America (the)'
              ) ? (
                <input
                  id="province-select"
                  className="ProfileInput"
                  value={form.province}
                  onChange={(e) =>
                    setForm({ ...form, province: e.target.value })
                  }
                ></input>
              ) : (
                <select
                  id="province-select"
                  className="ProfileInput"
                  onChange={(e) =>
                    setForm({ ...form, province: e.target.value })
                  }
                  name="province"
                >
                  <option selected>Select a province/state</option>
                  {form.country === 'Canada'
                    ? provinces.map((province) => {
                        return (
                          <option value={province} key={province}>
                            {province}
                          </option>
                        );
                      })
                    : form.country === 'United States of America (the)'
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
                className="ProfileInput"
                value={form.postalCode}
                onChange={(e) =>
                  setForm({ ...form, postalCode: e.target.value })
                }
              ></input>
            </div>
          </div>
          <div className="LeftButtonContainer">
            <button
              className="ProfileButton"
              style={{
                backgroundColor: 'white',
                border: '4px solid black',
                color: '#1a1a1a',
              }}
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
            <button
              className="ProfileButton"
              style={{
                backgroundColor: 'white',
                border: '4px solid black',
                color: '#1a1a1a',
              }}
            >
              Back
            </button>
            <button aria-label="Update Profile" className="ProfileButton">
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
