import {
  TMHLocation,
  TMHLocationSocialsFacebook,
  TMHLocationSocialsInstagram,
} from 'API';
import { useState } from 'react';
import styles from './LocationsModalSocials.module.scss';
import styles2 from './LocationsModal.module.scss';
import LocationsTMHButton from './LocationsTMHButton';
type InstaData = {
  name?: string;
  username?: string;
  pageId?: string;
  link?: string;
};
type LocationsModalSocialsProps = {
  newLocData: TMHLocation | null;
  setLocData: React.Dispatch<React.SetStateAction<TMHLocation | null>>;
};
function CreateNewInstagram({
  setLocData,
  setOpen,
}: {
  setLocData: React.Dispatch<React.SetStateAction<TMHLocation | null>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [newInstaData, setNewInstaData] = useState<InstaData>();
  const [errorMessages, setErrorMessages] = useState<string[]>([]);
  const validateInsta = () => {
    const errors: string[] = [];
    if (newInstaData?.pageId) {
      return true;
    }
    if (!newInstaData?.pageId) {
      errors.push('Please enter a page ID');
    }
    setErrorMessages(errors);
    return false;
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setErrorMessages([]);
    setNewInstaData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleAddInstagram = () => {
    console.log({ adding: newInstaData });
    const isValidated = validateInsta();
    if (!isValidated) return;
    setLocData(
      (prev) =>
        ({
          ...prev,
          socials: {
            __typename: 'TMHLocationSocials',
            ...(prev?.socials ?? {}),
            instagram: [
              ...(prev?.socials?.instagram ?? []),
              newInstaData as TMHLocationSocialsInstagram,
            ],
          },
        } as TMHLocation)
    );

    setOpen(false);
  };
  return (
    <div className={styles['LocationsModalCreateNewContainer']}>
      <span className={styles['LocationsModalCreateNewHeader']}>
        Add an Instagram account
      </span>

      <span className={styles['LocationsModalCreateNewSubHeader']}>
        Instagram accounts associated with this location will be displayed on
        the location page, and on the meeting house mobile application.
      </span>

      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          flexWrap: 'wrap',
          columnGap: 8,
          rowGap: 16,
          paddingTop: 20,
          paddingBottom: 20,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            columnGap: 16,
          }}
        >
          <label style={{ flex: 1 }}>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              Account name
            </div>
            <span style={{ fontSize: 9, fontWeight: 400 }}>
              Enter account name, optional
            </span>

            <input
              onChange={handleChange}
              placeholder="e.g. Oakville Location"
              name="name"
              value={newInstaData?.name as string}
              type="text"
            />
          </label>
          <label style={{ flex: 1 }}>
            <div style={{ display: 'flex', flexDirection: 'row' }}>Page ID</div>
            <span style={{ fontSize: 9, fontWeight: 400 }}>
              Enter Instagram Page ID
            </span>

            <input
              onChange={handleChange}
              name="pageId"
              placeholder='e.g. "17841400000000000"'
              value={newInstaData?.pageId as string}
              type="text"
            />
          </label>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            columnGap: 16,
          }}
        >
          <label style={{ flex: 1 }}>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              Username
            </div>
            <span style={{ fontSize: 9, fontWeight: 400 }}>
              Enter Instagram Username
            </span>

            <input
              onChange={handleChange}
              placeholder="e.g. @tmhoakville"
              name="username"
              value={newInstaData?.username as string}
              type="text"
            />
          </label>
          <label style={{ flex: 1 }}>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              Instagram URL
            </div>
            <span style={{ fontSize: 9, fontWeight: 400 }}>
              Enter Instagram URL
            </span>

            <input
              onChange={handleChange}
              placeholder='e.g. "https://www.instagram.com/tmhoakville/"'
              name="link"
              value={newInstaData?.link as string}
              type="text"
            />
          </label>
        </div>
        {errorMessages.map((error) => (
          <div
            style={{
              color: 'tomato',
            }}
            key={error}
          >
            {error}
          </div>
        ))}
        <div className={styles['ButtonContainer']}>
          <LocationsTMHButton
            style={{ flex: 1 }}
            outline
            onClick={() => setOpen(false)}
          >
            Back
          </LocationsTMHButton>
          <LocationsTMHButton style={{ flex: 1 }} onClick={handleAddInstagram}>
            Create
          </LocationsTMHButton>
        </div>
      </form>
    </div>
  );
}
function CreateNewFacebook({
  setLocData,
  setOpen,
}: {
  setLocData: React.Dispatch<React.SetStateAction<TMHLocation | null>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [newFacebookData, setNewFacebookData] = useState<{
    name?: string;
    pageId?: string;
    link?: string;
  }>();
  const [errorMessages, setErrorMessages] = useState<string[]>([]);
  const validateInsta = () => {
    const errors: string[] = [];
    if (newFacebookData?.pageId) {
      return true;
    }
    if (!newFacebookData?.pageId) {
      errors.push('Please enter a page ID');
    }
    setErrorMessages(errors);
    return false;
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setErrorMessages([]);
    setNewFacebookData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleAddFacebook = () => {
    const isValidated = validateInsta();
    if (!isValidated) return;
    console.log({ adding: newFacebookData });
    setLocData(
      (prev) =>
        ({
          ...prev,
          socials: {
            __typename: 'TMHLocationSocials',
            ...(prev?.socials ?? {}),
            facebook: [
              ...(prev?.socials?.facebook ?? []),
              newFacebookData as TMHLocationSocialsFacebook,
            ],
          },
        } as TMHLocation)
    );
    setOpen(false);
  };
  return (
    <div className={styles['LocationsModalCreateNewContainer']}>
      <span className={styles['LocationsModalCreateNewHeader']}>
        Add a Facebook account
      </span>

      <span className={styles['LocationsModalCreateNewSubHeader']}>
        Facebook accounts associated with this location will be displayed on the
        location page, and on the meeting house mobile application.
      </span>

      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          flexWrap: 'wrap',
          rowGap: 16,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            columnGap: 16,
          }}
        >
          <label style={{ flex: 1 }}>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              Account name
            </div>
            <span style={{ fontSize: 9, fontWeight: 400 }}>
              Enter account name, optional
            </span>

            <input
              onChange={handleChange}
              name="name"
              value={newFacebookData?.name as string}
              type="text"
            />
          </label>
          <label style={{ flex: 1 }}>
            <div style={{ display: 'flex', flexDirection: 'row' }}>Page ID</div>
            <span style={{ fontSize: 9, fontWeight: 400 }}>
              Enter Facebook Page ID
            </span>

            <input
              onChange={handleChange}
              name="pageId"
              value={newFacebookData?.pageId as string}
              type="text"
            />
          </label>
        </div>

        <label style={{ flex: 1 }}>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            Facebook URL
          </div>
          <span style={{ fontSize: 9, fontWeight: 400 }}>
            Enter Facebook URL
          </span>

          <input
            onChange={handleChange}
            name="link"
            value={newFacebookData?.link as string}
            type="text"
          />
        </label>
        {errorMessages.map((error) => (
          <div
            style={{
              color: 'tomato',
            }}
            key={error}
          >
            {error}
          </div>
        ))}
        <div className={styles['ButtonContainer']}>
          <LocationsTMHButton
            style={{ flex: 1 }}
            outline
            onClick={() => setOpen(false)}
          >
            Back
          </LocationsTMHButton>
          <LocationsTMHButton style={{ flex: 1 }} onClick={handleAddFacebook}>
            Create
          </LocationsTMHButton>
        </div>
      </form>
    </div>
  );
}
export default function LocationsModalSocials({
  newLocData,
  setLocData,
}: LocationsModalSocialsProps) {
  const handleChangeInstagram = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const fieldName = e.target.name as keyof TMHLocationSocialsInstagram;
    setLocData(
      (prev) =>
        ({
          ...prev,
          socials: {
            __typename: 'TMHLocationSocials',
            ...(prev?.socials ?? {}),
            instagram: [
              ...(prev?.socials?.instagram ?? []).map((insta, i) => {
                if (i === index) {
                  return {
                    ...insta,
                    [fieldName]: e.target.value,
                  };
                }
                return insta;
              }),
            ],
          },
        } as TMHLocation)
    );
  };
  const handleChangeFacebook = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const fieldName = e.target.name as keyof TMHLocationSocialsFacebook;
    setLocData(
      (prev) =>
        ({
          ...prev,
          socials: {
            __typename: 'TMHLocationSocials',
            ...(prev?.socials ?? {}),
            facebook: [
              ...(prev?.socials?.facebook ?? []).map((fb, i) => {
                if (i === index) {
                  return {
                    ...fb,
                    [fieldName]: e.target.value,
                  };
                }
                return fb;
              }),
            ],
          },
        } as TMHLocation)
    );
  };

  const [isNewInstagramOpen, setIsNewInstagramOpen] = useState(false);

  const [isNewFacebookOpen, setIsNewFacebookOpen] = useState(false);

  return (
    <div className={styles['LocationsModalSocialsContainer']}>
      {isNewInstagramOpen || isNewFacebookOpen ? (
        isNewInstagramOpen ? (
          <CreateNewInstagram
            setOpen={setIsNewInstagramOpen}
            setLocData={setLocData}
          />
        ) : isNewFacebookOpen ? (
          <CreateNewFacebook
            setOpen={setIsNewFacebookOpen}
            setLocData={setLocData}
          />
        ) : null
      ) : (
        <>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              flex: 1,
              marginBottom: 20,
            }}
          >
            <span className={styles2['LocationsModalHeader']}>
              Social Media Accounts
            </span>

            <span className={styles2['LocationsModalSubHeader']}>
              Add social media accounts to your location page. These accounts
              will be displayed on the location page, and on the meeting house
              mobile application.
            </span>
          </div>
          <span
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <span style={{ flex: 1, alignItems: 'center', display: 'flex' }}>
              Instagram Accounts
              <img
                style={{
                  width: 20,
                  height: 20,
                  padding: 2,
                }}
                src="/static/svg/Instagram.svg"
              ></img>
            </span>

            <LocationsTMHButton
              link
              onClick={() => setIsNewInstagramOpen(true)}
            >
              Link a new account
            </LocationsTMHButton>
          </span>
          <div
            style={{
              paddingTop: 20,
              paddingBottom: 80,
              rowGap: 16,
              columnGap: 16,
              display: 'flex',
              flexWrap: 'wrap',
              flexDirection: 'row',
              width: '100%',
            }}
          >
            {newLocData?.socials?.instagram?.length ? (
              newLocData?.socials?.instagram?.map((instagramData, index) => (
                <div
                  key={instagramData?.pageId}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',

                    width: 'calc(50% - 10px)',
                    flexWrap: 'wrap',
                    columnGap: 16,
                    backgroundColor: '#FFF',
                    border: '1px solid #E5E5E5',
                    padding: 16,
                    borderRadius: 4,
                    rowGap: 16,
                  }}
                >
                  <label style={{ width: '100%' }}>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                      <span style={{ flex: 1 }}>Account name</span>
                    </div>
                    <span style={{ fontSize: 9, fontWeight: 400 }}>
                      Enter account name, optional
                    </span>

                    <input
                      onChange={(e) => handleChangeInstagram(e, index)}
                      name="name"
                      placeholder='E.g. "Oakville Location", "tmhoakville"'
                      value={instagramData?.name as string}
                      type="text"
                    />
                  </label>
                  <label style={{ width: '100%' }}>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                      Username
                    </div>
                    <span style={{ fontSize: 9, fontWeight: 400 }}>
                      Enter Instagram Username
                    </span>

                    <input
                      onChange={(e) => handleChangeInstagram(e, index)}
                      placeholder="E.g. @tmhoakville"
                      name="username"
                      value={instagramData?.username as string}
                      type="text"
                    />
                  </label>

                  <label style={{ width: '100%' }}>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                      Page ID
                    </div>
                    <span style={{ fontSize: 9, fontWeight: 400 }}>
                      Enter Instagram Page ID
                    </span>

                    <input
                      onChange={(e) => handleChangeInstagram(e, index)}
                      name="pageId"
                      placeholder='E.g. "1234567890"'
                      value={instagramData?.pageId as string}
                      type="text"
                    />
                  </label>
                  <label style={{ width: '100%' }}>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                      Instagram URL
                    </div>
                    <span style={{ fontSize: 9, fontWeight: 400 }}>
                      Enter Instagram URL
                    </span>

                    <input
                      placeholder='E.g. "https://www.instagram.com/tmhoakville/"'
                      onChange={(e) => handleChangeInstagram(e, index)}
                      name="link"
                      value={instagramData?.link as string}
                      type="text"
                    />
                  </label>

                  <LocationsTMHButton
                    style={{
                      padding: 0,

                      alignSelf: 'flex-end',
                      color: 'tomato',
                    }}
                    link
                    onClick={() =>
                      setLocData(
                        (prev) =>
                          ({
                            ...prev,
                            socials: {
                              __typename: 'TMHLocationSocials',
                              ...prev?.socials,
                              instagram: prev?.socials?.instagram?.filter(
                                (insta) =>
                                  insta?.pageId !== instagramData?.pageId
                              ),
                            },
                          } as TMHLocation)
                      )
                    }
                  >
                    Delete
                  </LocationsTMHButton>
                </div>
              ))
            ) : (
              <small>No instagram accounts linked to this location</small>
            )}
          </div>
          <span
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <span style={{ flex: 1, alignItems: 'center', display: 'flex' }}>
              Facebook Accounts
              <img
                style={{
                  width: 20,
                  height: 20,
                  padding: 2,
                }}
                src="/static/svg/Facebook.svg"
              ></img>
            </span>
            <LocationsTMHButton link onClick={() => setIsNewFacebookOpen(true)}>
              Link a new account
            </LocationsTMHButton>
          </span>
          <div
            style={{
              paddingTop: 20,
              paddingBottom: 20,
              columnGap: 8,
              rowGap: 20,
              display: 'flex',
              flexWrap: 'wrap',
              flexDirection: 'row',
              width: '100%',
            }}
          >
            {newLocData?.socials?.facebook?.length ? (
              newLocData?.socials?.facebook?.map(
                (facebookData: any, index: number) => (
                  <div
                    key={facebookData?.pageId}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',

                      width: 'calc(50% - 10px)',
                      flexWrap: 'wrap',
                      columnGap: 16,
                      backgroundColor: '#FFF',
                      border: '1px solid #E5E5E5',
                      padding: 16,
                      borderRadius: 4,
                      rowGap: 16,
                    }}
                  >
                    <label style={{ width: '100%' }}>
                      <div style={{ display: 'flex', flexDirection: 'row' }}>
                        Account name
                      </div>
                      <span style={{ fontSize: 9, fontWeight: 400 }}>
                        Enter account name
                      </span>

                      <input
                        placeholder='E.g. "Oakville Location"'
                        onChange={(e) => handleChangeFacebook(e, index)}
                        name="name"
                        value={facebookData?.name as string}
                        type="text"
                      />
                    </label>
                    <label style={{ width: '100%' }}>
                      <div style={{ display: 'flex', flexDirection: 'row' }}>
                        Page ID
                      </div>
                      <span style={{ fontSize: 9, fontWeight: 400 }}>
                        Enter Facebook Page ID
                      </span>

                      <input
                        onChange={(e) => handleChangeFacebook(e, index)}
                        placeholder='E.g. "1234567890"'
                        name="pageId"
                        value={facebookData?.pageId as string}
                        type="text"
                      />
                    </label>
                    <label style={{ width: '100%' }}>
                      <div style={{ display: 'flex', flexDirection: 'row' }}>
                        Facebook URL
                      </div>
                      <span style={{ fontSize: 9, fontWeight: 400 }}>
                        Enter Facebook URL
                      </span>

                      <input
                        onChange={(e) => handleChangeFacebook(e, index)}
                        name="link"
                        placeholder='E.g. "https://www.facebook.com/tmhoakville/"'
                        value={facebookData?.link as string}
                        type="text"
                      />
                    </label>
                    <LocationsTMHButton
                      style={{
                        padding: 0,

                        alignSelf: 'flex-end',
                        color: 'tomato',
                      }}
                      link
                      onClick={() =>
                        setLocData(
                          (prev) =>
                            ({
                              ...prev,
                              socials: {
                                __typename: 'TMHLocationSocials',
                                ...prev?.socials,
                                facebook: prev?.socials?.facebook?.filter(
                                  (fb) => fb?.pageId !== facebookData?.pageId
                                ),
                              },
                            } as TMHLocation)
                        )
                      }
                    >
                      Delete
                    </LocationsTMHButton>
                  </div>
                )
              )
            ) : (
              <small>No facebook accounts linked to this location</small>
            )}
          </div>
        </>
      )}
    </div>
  );
}
