import { TMHPerson, UpdateTMHPersonInput } from 'API';
import React from 'react';
import { API } from 'aws-amplify';
import { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import * as mutations from '../../../graphql/mutations';
import { Modal } from 'reactstrap';
import {
  CreateTMHPersonInput,
  CreateTMHPersonMutation,
  DeleteTMHPersonMutation,
  UpdateTMHPersonMutation,
} from 'API';
import { Storage } from 'aws-amplify';
import './PeopleManager.scss';
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
export default function PeopleManagerModal({
  selectedUser,
  showModal,
  updateCallback,
  closeModal,
}: EditModalProps) {
  const [userData, setUserData] = React.useState<UpdateTMHPersonInput>({
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
  });
  const [isLoading, setIsLoading] = React.useState(false);
  const [siteString, setSitesString] = React.useState(
    selectedUser?.sites?.join(', ')
  );
  const [file, setFile] = React.useState<any>(null);
  const updateTMHPerson = async (propsToUpdate: UpdateTMHPersonInput) => {
    try {
      setIsLoading(true);
      console.log({ propsToUpdate });
      let s3Result = null;
      if (file) s3Result = await uploadToS3();
      if (s3Result) propsToUpdate.image = s3Result;
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
      }
    } catch (error) {
      console.log({ error });
    } finally {
      setIsLoading(false);
    }
  };

  const deleteTMHPerson = async (userID: TMHPerson['id']) => {
    try {
      const deletedTMHPerson = (await API.graphql({
        query: mutations.deleteTMHPerson,
        variables: {
          input: {
            id: userID,
          },
        },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })) as GraphQLResult<DeleteTMHPersonMutation>;
      console.log({ deletedTMHPerson });
      updateCallback(
        deletedTMHPerson?.data?.deleteTMHPerson as TMHPerson,
        'delete'
      );
    } catch (error) {
      console.log({ error });
    }
  };
  const createTMHPerson = async (newUser: CreateTMHPersonInput) => {
    setIsLoading(true);
    delete newUser.id;
    const fieldsThatExist = Object.keys(newUser).filter(
      (key) => newUser[key as keyof CreateTMHPersonInput] !== ''
    );
    const newNewUser: any = {};
    fieldsThatExist.forEach((field) => {
      if (field)
        newNewUser[field] = newUser[field as keyof CreateTMHPersonInput];
    });
    let s3Result = null;
    if (file) s3Result = await uploadToS3();
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
    if (!selectedUser) {
      createTMHPerson(userData);
      return;
    }
    const fieldsToUpdate = Object.keys(userData)
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

    let newSites: string[] = [];
    if (selectedUser?.sites?.join(', ') !== siteString) {
      fieldsToUpdate.push('sites');
      if (siteString)
        newSites = siteString
          .split(',')
          .map((site) => site.trim())
          .filter((site) => site !== '');
    }
    if (file) fieldsToUpdate.push('image');
    if (!fieldsToUpdate.length) return;
    const newValues: any = { id: userData.id };
    for (const key of fieldsToUpdate) {
      if (key === 'sites') newValues[key] = newSites;
      else {
        if (key) newValues[key] = userData[key as keyof UpdateTMHPersonInput];
      }
    }
    updateTMHPerson(newValues);
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
    });
  };
  const uploadToS3 = async () => {
    const S3_BUCKET =
      'https://themeetinghouse-usercontentstoragetmhusercontent-tmhprod.s3.amazonaws.com/public/';
    const userID = selectedUser?.id;
    if (!file || !userID) return;
    try {
      if (selectedUser?.image) {
        const oldKey = `personimages/${selectedUser?.image?.split('/').pop()}`;
        if (oldKey) await Storage.remove(oldKey);
      }
      const extension = file.name.split('.').pop();
      const path = 'personimages/';
      const key = `${path}${userID}-image${new Date().getTime()}.${extension}`;
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
    <Modal size="sm" isOpen={showModal}>
      <div className="PersonModalContentContainer">
        <ProfileImage setFile={setFile} large url={userData?.image ?? ''} />
        <label htmlFor="firstName" style={{ marginTop: 16 }}>
          First Name
          <input
            onChange={updateValue}
            value={userData?.firstName ?? ''}
            name="firstName"
            placeholder="First Name"
            type="text"
          />
        </label>
        <label htmlFor="lastName">
          Last Name
          <input
            onChange={updateValue}
            type="text"
            name="lastName"
            value={userData?.lastName ?? ''}
            placeholder="Last Name"
          />
        </label>
        <label htmlFor="position">
          Position
          <input
            onChange={updateValue}
            name="position"
            value={userData?.position ?? ''}
            type="text"
            placeholder="Position"
          />
        </label>
        <label htmlFor="phone">
          Phone
          <input
            onChange={updateValue}
            name="phone"
            value={userData?.phone ?? ''}
            type="text"
            placeholder="Phone"
          />
        </label>
        <label htmlFor="extension">
          Extension
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
        <label htmlFor="email">
          Email
          <input
            onChange={updateValue}
            value={userData?.email ?? ''}
            name="email"
            type="text"
            placeholder="Email"
          />
        </label>
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
            Sites:{' '}
          </div>
          <input
            onChange={(e) => {
              e.persist();
              setSitesString(e.target.value);
            }}
            value={siteString}
            type="text"
            autoCapitalize="off"
            autoComplete="off"
            placeholder="Comma, Separated, Sites..."
          />
        </label>
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
              style={{ marginRight: 8, backgroundColor: 'tomato' }}
              disabled={isLoading}
              onClick={async () => {
                await deleteTMHPerson(selectedUser.id);
                clearFields();
                closeModal();
              }}
            >
              Delete
            </button>
          ) : null}
          <button
            disabled={isLoading}
            className="SaveButton"
            onClick={handleSaveTMHPerson}
          >
            {isLoading ? 'Saving...' : 'Save'}
          </button>
          <button
            className="SaveButton white"
            style={{ marginLeft: 8 }}
            disabled={isLoading}
            onClick={(e) => {
              clearFields();
              closeModal();
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
}
