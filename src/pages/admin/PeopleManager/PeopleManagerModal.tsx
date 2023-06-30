import {
  CreateTMHSiteMutation,
  SitePerson,
  TMHPerson,
  TMHSite,
  UpdateTMHPersonInput,
} from 'API';
import React from 'react';
import { API } from 'aws-amplify';
import { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import * as mutations from '../../../graphql/mutations';
import * as customQueries from '../../../graphql-custom/customQueries';

import { Modal, Spinner } from 'reactstrap';
import {
  CreateTMHPersonInput,
  CreateTMHPersonMutation,
  DeleteTMHPersonMutation,
  UpdateTMHPersonMutation,
} from 'API';
import { Storage } from 'aws-amplify';
import './PeopleManager.scss';
import CreatableSelect from 'react-select/creatable';
import { MultiValue } from 'react-select';

type EditModalProps = {
  selectedUser: TMHPerson | null;
  showModal: boolean;
  updateCallback: (updatedPerson: TMHPerson, type?: string) => void;
  closeModal: () => void;
};

const ProfileImage = ({
  url,
  large,
  setFile,
}: {
  url: string;
  setFile: any;
  large?: boolean;
}) => {
  const [uri, setUri] = React.useState(url);
  const uploadRef = React.useRef<any>(null);
  return (
    <div style={{ position: 'relative' }}>
      <img
        onError={() => {
          setUri('/static/svg/Profile.svg');
        }}
        width={large ? '100' : '45'}
        height={large ? '100' : '45'}
        style={{ borderRadius: 100, objectFit: 'cover' }}
        src={uri}
      ></img>
      {large ? (
        <div
          onClick={() => uploadRef?.current?.click()}
          className="PersonImageEditButton"
        >
          <img style={{ padding: 8 }} src={'/static/svg/Edit.svg'} />
        </div>
      ) : null}
      {uploadRef ? (
        <input
          onChange={(e) => {
            if (e.target.files?.[0]) {
              const file = e.target.files[0];
              if (file.size > 2097152) {
                alert('File must be smaller than 2mb');
              } else if (e?.target?.files?.[0]) {
                setUri(URL.createObjectURL(e.target.files[0]));
                setFile(e.target.files[0]);
              }
            }
          }}
          ref={uploadRef}
          name="upload"
          type="file"
          id="file"
          style={{ display: 'none' }}
        ></input>
      ) : null}
    </div>
  );
};

function TMHSites({
  userData,
  setUserData,
}: {
  userData: any;
  setUserData: any;
}) {
  const userId = userData?.id;
  const [sites, setSites] = React.useState<TMHSite[]>([]);
  const [userSites, setUserSites] = React.useState<TMHSite[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  React.useEffect(() => {
    (async () => {
      try {
        const sites = (await API.graphql({
          query: customQueries.listTMHSites,
          authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
        })) as GraphQLResult<{ listTMHSites: { items: TMHSite[] } }>;
        const siteItems = sites.data?.listTMHSites?.items ?? [];
        setSites(siteItems);
        const siteIds = userData?.tmhSites.map(
          (site: SitePerson) => site?.tMHSiteID
        );
        console.log({ sites });
        const newUserSites =
          siteItems.filter((site) => siteIds?.includes(site?.id)) ?? [];
        setUserSites(newUserSites);
      } catch (error: any) {
        console.error({ 'failed to load sites': error });
        const siteItems = error?.data?.listTMHSites?.items ?? [];
        setSites(siteItems);
        const siteIds = userData?.tmhSites.map(
          (site: SitePerson) => site?.tMHSiteID
        );
        console.log({ sites });
        const newUserSites =
          siteItems.filter((site: any) => siteIds?.includes(site?.id)) ?? [];
        setUserSites(newUserSites);
      }
    })();
  }, []);
  const createSitePerson = async (siteId: string) => {
    try {
      console.log(`creating site person for ${siteId}`);
      const updatedPerson = (await API.graphql({
        query: mutations.createSitePerson,
        variables: {
          input: {
            tMHSiteID: siteId,
            tMHPersonID: userId,
          },
        },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })) as GraphQLResult<UpdateTMHPersonMutation>;
      console.log({ updatedPerson });
    } catch (error) {
      console.log({ error });
    }
  };
  const removeSitePerson = async (sitePersonID: string) => {
    try {
      console.log(`removing site person for ${sitePersonID}`);
      const removeSitePerson = (await API.graphql({
        query: mutations.deleteSitePerson,
        variables: {
          input: {
            id: sitePersonID,
          },
        },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })) as GraphQLResult<UpdateTMHPersonMutation>;
      console.log({ removeSitePerson });
    } catch (error) {
      console.log({ error });
    }
  };
  const createTmhSite = async (siteName: string) => {
    setIsLoading(true);
    try {
      const newSite = (await API.graphql({
        query: mutations.createTMHSite,
        variables: {
          input: {
            id: siteName,
          },
        },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })) as GraphQLResult<CreateTMHSiteMutation>;
      console.log({ newSite });
      if (newSite?.data?.createTMHSite) {
        try {
          await createSitePerson(newSite.data.createTMHSite.id);
          setUserSites([...userSites, newSite.data.createTMHSite]);
        } catch (error) {
          console.log('Something went wrong...');
        } finally {
          setSites([...sites, newSite.data.createTMHSite]);
        }
      }
    } catch (error) {
      console.log('An error occurred while creating a new site');
    } finally {
      setIsLoading(false);
    }
  };
  const handleSelectOnChange = async (
    newValue: MultiValue<{
      value: string;
      label: string;
    }>
  ) => {
    if (!newValue) return;
    const reducedNewValue = newValue.map((item) => item.value);
    const newSite = sites.filter((site) => reducedNewValue.includes(site.id));
    if (!newSite) return;
    const tempOldSites = userSites.map((site) => site.id);
    const tempNewSites = newSite.map((site) => site.id);
    const removed = tempOldSites.filter((site) => !tempNewSites.includes(site));
    const added = tempNewSites.filter((site) => !tempOldSites.includes(site));
    const handleRemoved = async () => {
      const existingSitePersonID = userData?.tmhSites?.find(
        (sitePerson: SitePerson) => sitePerson.tMHSiteID === removed[0]
      );
      if (existingSitePersonID)
        await removeSitePerson(existingSitePersonID?.id);

      setIsLoading(false);
    };
    const handleAdded = async () => {
      const addedSiteID = added[0];
      if (addedSiteID) await createSitePerson(addedSiteID);
    };
    setIsLoading(true);
    await handleRemoved();
    await handleAdded();
    setIsLoading(false);
    setUserSites(newSite);
  };
  console.log({ userData });
  return (
    <label
      onClick={(e) => {
        e.preventDefault();
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        Sites:
      </div>
      <CreatableSelect
        isDisabled={isLoading}
        allowCreateWhileLoading={false}
        formatCreateLabel={(inputValue) => `Add new site "${inputValue}"`}
        isMulti
        styles={{
          control: (provided: any) => ({
            ...provided,
            display: 'flex',
            flex: 1,
            marginTop: 4,
          }),
          container: (provided: any) => ({
            ...provided,
            display: 'flex',
            flex: 1,
          }),
        }}
        value={[
          ...userSites.map((site) => ({ value: site?.id, label: site?.id })),
        ]}
        onCreateOption={createTmhSite}
        isLoading={isLoading}
        loadingMessage={() => 'Loading...'}
        onChange={handleSelectOnChange}
        placeholder="Select Site/Enter Site"
        options={sites.map((item: any) => ({
          label: item.id,
          value: item.id,
        }))}
      ></CreatableSelect>
    </label>
  );
}

export default function PeopleManagerModal({
  selectedUser,
  showModal,
  updateCallback,
  closeModal,
}: EditModalProps) {
  console.log({ selectedUser });
  const [userData, setUserData] = React.useState<
    UpdateTMHPersonInput & { tmhSites: SitePerson[] }
  >({
    id: selectedUser?.id ?? '',
    firstName: selectedUser?.firstName ?? '',
    lastName: selectedUser?.lastName ?? '',
    email: selectedUser?.email ?? '',
    phone: selectedUser?.phone ?? '',
    image: selectedUser?.image ?? '',
    isStaff: selectedUser?.isStaff ?? 'false',
    isCoordinator: selectedUser?.isCoordinator ?? 'false',
    isOverseer: selectedUser?.isOverseer ?? 'false',
    isTeacher: selectedUser?.isTeacher ?? 'false',
    extension: selectedUser?.extension ?? '',
    position: selectedUser?.position ?? '',
    sites: selectedUser?.sites ?? [],
    tmhSites: (selectedUser?.tmhSites?.items as SitePerson[]) ?? [],
  });
  const [isLoading, setIsLoading] = React.useState(false);
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [file, setFile] = React.useState<any>(null);
  const updateTMHPerson = async (
    propsToUpdate: UpdateTMHPersonInput,
    fullName: string
  ) => {
    try {
      setIsLoading(true);

      let s3Result = null;
      if (file) s3Result = await uploadToS3(fullName);
      if (s3Result) propsToUpdate.image = s3Result;
      console.log({ propsToUpdate });
      const updatedPerson = (await API.graphql({
        query: mutations.updateTMHPerson,
        variables: {
          input: propsToUpdate,
        },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })) as GraphQLResult<UpdateTMHPersonMutation>;
      console.log({ updatedPerson });
      if (updatedPerson?.data?.updateTMHPerson) {
        const newData = updatedPerson?.data?.updateTMHPerson;
        updateCallback(newData);
      } else {
        console.log('NOT CALLING');
      }
    } catch (error) {
      console.log({ error });
    } finally {
      setIsLoading(false);
    }
  };

  const deleteTMHPerson = async (userID: string) => {
    try {
      setIsDeleting(true);
      const deletedTMHPerson = (await API.graphql({
        query: mutations.deleteTMHPerson,
        variables: {
          input: {
            id: userID,
          },
        },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })) as GraphQLResult<DeleteTMHPersonMutation>;
      if (deletedTMHPerson?.data?.deleteTMHPerson?.image) {
        // delete from s3
      }
      updateCallback(
        deletedTMHPerson?.data?.deleteTMHPerson as TMHPerson,
        'delete'
      );
    } catch (error) {
      console.log({ error });
    } finally {
      setIsDeleting(false);
    }
  };
  const createTMHPerson = async (newUser: CreateTMHPersonInput) => {
    setIsLoading(true);
    delete newUser.id;
    if (!newUser.firstName && !newUser.lastName) return;
    const fullName = `${newUser.firstName}_${newUser.lastName}`;
    const fieldsThatExist = Object.keys(newUser).filter(
      (key) => newUser[key as keyof CreateTMHPersonInput] !== ''
    );
    const newNewUser: any = {};
    fieldsThatExist.forEach((field) => {
      if (field)
        newNewUser[field] = newUser[field as keyof CreateTMHPersonInput];
    });
    let s3Result = null;
    if (file) s3Result = await uploadToS3(fullName);
    if (s3Result) newNewUser.image = s3Result;
    try {
      const newTMHPerson = (await API.graphql({
        query: mutations.createTMHPerson,
        variables: {
          input: newNewUser,
        },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })) as GraphQLResult<CreateTMHPersonMutation>;

      if (newTMHPerson?.data?.createTMHPerson) {
        const newData = newTMHPerson?.data?.createTMHPerson;
        updateCallback(newData as TMHPerson);
      }
      console.log({ newTMHPerson });
    } catch (error) {
      console.log({ error });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveTMHPerson = async () => {
    console.log('saving');
    if (!selectedUser) {
      await createTMHPerson(userData);
      clearFields();
      closeModal();
      return;
    }
    const fieldsToUpdate = Object.keys(userData)
      .filter((key) => key !== 'tmhSites')
      .filter(
        (key) =>
          userData[key as keyof UpdateTMHPersonInput] !== '' &&
          selectedUser[key as keyof UpdateTMHPersonInput] !== ''
      )
      .filter((key) => {
        return (
          userData[key as keyof UpdateTMHPersonInput] !==
          selectedUser[key as keyof UpdateTMHPersonInput]
        );
      }) as Array<keyof UpdateTMHPersonInput>;
    console.log({ fieldsToUpdate });

    if (file) fieldsToUpdate.push('image');
    if (!fieldsToUpdate.length) return;
    const newValues: any = { id: userData.id };
    for (const key of fieldsToUpdate) {
      if (key) newValues[key] = userData[key as keyof UpdateTMHPersonInput];
    }
    console.log({ newValues });
    await updateTMHPerson(
      newValues,
      `${userData.firstName}_${userData.lastName}`
    );
    clearFields();
    closeModal();
  };
  const clearFields = () => {
    setUserData({
      id: '',
      firstName: '',
      lastName: '',
      isCoordinator: 'false',
      isOverseer: 'false',
      isStaff: 'false',
      isTeacher: 'false',
      image: '',
      email: '',
      phone: '',
      position: '',
      extension: '',
      tmhSites: [],
    });
  };
  const uploadToS3 = async (fullName: string) => {
    const S3_BUCKET =
      'https://themeetinghouse-usercontent221608-prodnew.s3.amazonaws.com/public/';
    if (!file || !fullName) return;
    try {
      if (selectedUser?.image) {
        const oldKey = `personimages/${selectedUser?.image?.split('/').pop()}`;
        if (oldKey) await Storage.remove(oldKey);
      }
      const extension = file.name.split('.').pop();
      const path = 'personimages/';
      const key = `${path}${fullName.replaceAll(
        /\s/g,
        '_'
      )}-${new Date().getTime()}.${extension}`;
      const result = await Storage.put(key, file, {
        acl: 'public-read',
      });
      console.log({ result });
      if (!result) return;
      return S3_BUCKET + key;
    } catch (error) {
      console.log({ error });
    }
  };
  const updateValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setUserData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  const updateCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setUserData((prev) => ({
      ...prev,
      [event.target.name]: event.target.checked.toString(),
    }));
  };
  return (
    <Modal size="md" isOpen={showModal}>
      <form
        className="PersonModalContentContainer"
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          handleSaveTMHPerson();
        }}
      >
        <ProfileImage setFile={setFile} large url={userData?.image ?? ''} />
        <label>
          <span>First Name</span>

          <input
            onChange={updateValue}
            value={userData?.firstName ?? ''}
            name="firstName"
            placeholder="First Name"
            type="text"
          />
        </label>
        <label>
          <span>Last Name</span>

          <input
            onChange={updateValue}
            type="text"
            name="lastName"
            value={userData?.lastName ?? ''}
            placeholder="Last Name"
          />
        </label>

        <label>
          <span>Position</span>

          <input
            onChange={updateValue}
            name="position"
            value={userData?.position ?? ''}
            type="text"
            placeholder="Position"
          />
        </label>
        <label>
          <span>Phone</span>

          <input
            onChange={updateValue}
            name="phone"
            value={userData?.phone ?? ''}
            type="text"
            placeholder="Phone"
          />
        </label>
        <label>
          <span>Extension</span>

          <input
            onChange={updateValue}
            value={userData?.extension ?? ''}
            type="text"
            name="extension"
            placeholder="Extension"
            style={{
              display: 'block',
              fontSize: 12,
            }}
          />
        </label>
        <label>
          <span>Email</span>

          <input
            onChange={updateValue}
            value={userData?.email ?? ''}
            name="email"
            type="text"
            placeholder="Email"
          />
        </label>
        <TMHSites userData={userData} setUserData={setUserData} />
        <label htmlFor="isCoordinator" style={{ flexDirection: 'row' }}>
          <input
            name={'isCoordinator'}
            style={{ marginRight: 8, scale: 1.2 }}
            checked={userData?.isCoordinator === 'true'}
            onChange={updateCheckBox}
            type="checkbox"
          />
          Coordinator
        </label>
        <label htmlFor="isStaff" style={{ flexDirection: 'row' }}>
          <input
            name={'isStaff'}
            style={{ marginRight: 8, scale: 1.2 }}
            checked={userData?.isStaff === 'true'}
            onChange={updateCheckBox}
            type="checkbox"
          />
          Staff
        </label>
        <label htmlFor="isTeacher" style={{ flexDirection: 'row' }}>
          <input
            name={'isTeacher'}
            style={{ marginRight: 8, scale: 1.2 }}
            checked={userData?.isTeacher === 'true'}
            onChange={updateCheckBox}
            type="checkbox"
          />
          Teacher
        </label>
        <label htmlFor="isOverseer" style={{ flexDirection: 'row' }}>
          <input
            style={{ marginRight: 8, scale: 1.2 }}
            name={'isOverseer'}
            checked={userData?.isOverseer === 'true'}
            onChange={updateCheckBox}
            type="checkbox"
          />
          Overseer
        </label>
        <div
          style={{
            marginTop: 16,
            alignSelf: 'flex-end',
            flex: 1,
          }}
        >
          {selectedUser ? (
            <button
              className="SaveButton"
              type="button"
              style={{ marginRight: 8, backgroundColor: 'tomato' }}
              disabled={isLoading || isDeleting}
              onClick={async () => {
                if (
                  confirm(
                    `Are you sure you want to delete ${
                      selectedUser?.firstName + ' ' + selectedUser?.lastName
                    }`
                  )
                ) {
                  await deleteTMHPerson(selectedUser.id);
                  clearFields();
                  closeModal();
                }
              }}
            >
              {isDeleting ? (
                <>
                  <Spinner type="grow" size="sm" />
                  <span> Deleting</span>
                </>
              ) : (
                'Delete'
              )}
            </button>
          ) : null}
          <button
            type="submit"
            disabled={isLoading || isDeleting}
            className="SaveButton"
          >
            {isLoading ? (
              <>
                <Spinner type="grow" size="sm" />
                <span> Saving</span>
              </>
            ) : (
              'Save'
            )}
          </button>
          <button
            type="button"
            className="SaveButton white"
            style={{ marginLeft: 8 }}
            disabled={isLoading || isDeleting}
            onClick={(e) => {
              clearFields();
              closeModal();
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
}
